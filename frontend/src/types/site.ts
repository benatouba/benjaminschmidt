export interface NavigationItem {
  label: string;
  to: string;
}

export interface ProfileInfo {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone?: string;
  address?: string;
  orcid: string;
  summary: string;
  interests: string[];
  skills: string[];
}

export interface CareerStage {
  period: string;
  title: string;
  institution: string;
  description: string;
  focusAreas: string[];
}

export interface PublicationItem {
  title: string;
  venue: string;
  year: number;
  kind: "Journal" | "Conference" | "Preprint" | "Book Chapter" | "Thesis" | "Technical Report";
  summary: string;
  tags: string[];
  link?: string;
  doi?: string;
}

export interface ResearchProject {
  name: string;
  status: "Active" | "Planning" | "Completed";
  timeframe: string;
  summary: string;
  stack: string[];
  outcomes: string[];
  link?: string;
}

export interface ContactLink {
  label: string;
  href?: string;
  icon: string;
	sublabel: string;
}

export interface SkillBadge {
  label: string;
  image: string;
  href?: string;
  width?: number;
  height?: number;
}

export interface GitHubStatCard {
  title: string;
  image: string;
  href?: string;
  width?: number;
  height?: number;
}

export interface CvAppointment {
  period: string;
  role: string;
  institution: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface EducationEntry {
  period: string;
  degree: string;
  institution: string;
  details: string;
}

export interface HonorEntry {
  year: string;
  title: string;
  issuer: string;
  description: string;
}

export interface ArticleHistoryItem {
  title: string;
  outlet: string;
  published: string;
  kind: "Article" | "Interview" | "Editorial" | "Review" | "Thesis" | "Technical Report";
  summary: string;
  tags: string[];
  link?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readMinutes: number;
  summary: string;
  tags: string[];
  href?: string;
  relatedArticles?: {
    title: string;
    href?: string;
  }[];
}

export interface ExternalProfileLink {
  label: string;
  href?: string;
  icon: string;
  description: string;
  category: "Academic" | "Code" | "Professional" | "Personal";
}

export interface ResearchService {
  title: string;
  icon: string;
  audience: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface SiteContent {
  navItems: NavigationItem[];
  profile: ProfileInfo;
  careerStages: CareerStage[];
  publications: PublicationItem[];
  projects: ResearchProject[];
  skillBadges?: SkillBadge[];
  githubStats?: GitHubStatCard[];
  cvAppointments: CvAppointment[];
  education: EducationEntry[];
  honors: HonorEntry[];
  articleHistory: ArticleHistoryItem[];
  blogPosts: BlogPost[];
  externalProfiles: ExternalProfileLink[];
  services: ResearchService[];
  contactLinks: ContactLink[];
}
