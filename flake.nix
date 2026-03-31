{
  inputs = {
    devenv-root = {
      url = "file+file:///dev/null";
      flake = false;
    };
    flake-parts.url = "github:hercules-ci/flake-parts";
    flake-parts.inputs.nixpkgs-lib.follows = "nixpkgs";
    devenv.url = "github:cachix/devenv";
    nixpkgs.url = "github:cachix/devenv-nixpkgs/rolling";
    nix2container.url = "github:nlewo/nix2container";
    nix2container.inputs.nixpkgs.follows = "nixpkgs";
    mk-shell-bin.url = "github:rrbutani/nix-mk-shell-bin";
  };

  outputs = inputs@{ flake-parts, nixpkgs, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = nixpkgs.lib.systems.flakeExposed;
      imports = [ inputs.devenv.flakeModule ];

      perSystem = { pkgs, ... }: {
        devenv.shells.default = {
          languages.javascript = {
            enable = true;
            package = pkgs.nodejs_25;
            pnpm.enable = false;
            corepack.enable = false;
            directory = "./frontend";
            lsp.enable = false;
          };

          languages.python = {
            enable = true;
            uv.enable = true;
            directory = "./backend";
          };

          packages = with pkgs; [
            git
            pnpm
            vtsls
            vue-language-server
            nodePackages.vscode-langservers-extracted
            oxlint
            oxfmt
            eslint
            uv
          ];

          tasks = {
            "frontend:dev".exec = "pnpm dev";
            "frontend:dev".cwd = "./frontend";

            "frontend:build".exec = "pnpm build";
            "frontend:build".cwd = "./frontend";

            "frontend:lint-ts".exec = "pnpm run lint:oxlint";
            "frontend:lint-ts".cwd = "./frontend";

            "frontend:lint-vue".exec = "pnpm run lint:vue";
            "frontend:lint-vue".cwd = "./frontend";

            "frontend:lint".exec = "pnpm run lint";
            "frontend:lint".cwd = "./frontend";

            "frontend:format".exec = "pnpm run format";
            "frontend:format".cwd = "./frontend";
          };

          scripts.pnpm.exec = ''
            repo_root="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
            cd "$repo_root/frontend" || exit 1
            exec ${pkgs.pnpm}/bin/pnpm "$@"
          '';

          processes.frontend = {
            exec = "pnpm dev -- --port 5173";
            cwd = "./frontend";
          };

          enterShell = ''
            echo "Vue CV/science workspace shell"
            node --version
            pnpm --version
            uv --version
            echo "LSPs in PATH: vtsls, vue-language-server, vscode-json-language-server"
            echo "Run: devenv up (frontend dev server)"
            echo "Run: devenv tasks run frontend:lint | frontend:format"
            echo "pnpm wrapper active: commands run in ./frontend"
          '';
        };
      };
    };
}
