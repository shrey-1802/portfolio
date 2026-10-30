export interface ProjectFeature {
  name: string;
  purpose: string;
  howItWorks: string;
  whyItMatters: string;
  badge?: string;
}

export interface ArchitectureNode {
  title: string;
  desc: string;
  type: 'frontend' | 'backend' | 'database' | 'service' | 'agent' | 'user';
}

export interface ProjectData {
  id: string;
  number: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  executiveOverview: string;
  problem: {
    statement: string;
    whyItMatters: string;
    painPoints: string[];
  };
  approach: string;
  solution: {
    summary: string;
    targetUsers: string[];
    primaryWorkflow: string;
  };
  features: ProjectFeature[];
  userJourney: {
    step: number;
    title: string;
    description: string;
    role?: string;
  }[];
  architecture: {
    description: string;
    flowStages: string[];
    components: ArchitectureNode[];
    mermaidOrSvgType?: string;
  };
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    externalApis: string[];
    deployment: string[];
    tools: string[];
  };
  engineeringDecisions: {
    decision: string;
    rationale: string;
    impact: string;
  }[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
    takeaway: string;
  }[];
  learningOutcomes: string[];
  futureScope: string[];
  liveUrl: string;
  githubUrl?: string;
  accentColor: string;
  badgeText: string;
  galleryImages: {
    caption: string;
    alt: string;
    type: 'dashboard' | 'mobile' | 'workflow' | 'terminal';
  }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Comfortable' | 'Working Knowledge' | 'Learning' | 'Exploring';
    iconName?: string;
    highlight?: boolean;
    note?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  internshipType: string;
  duration: string;
  dates: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  contributions: string[];
  skillsGained: string[];
  certificateUrl?: string;
  isConfigurablePlaceholder?: boolean;
}

export interface LearningItem {
  id: string;
  title: string;
  category: 'Hackathon' | 'Course' | 'Certification' | 'Technical Milestone' | 'Currently Exploring';
  providerOrEvent: string;
  date: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Continuous';
  keyTakeaways: string[];
  certificateUrl?: string;
  highlightBadge?: string;
}

export interface EducationData {
  institution: string;
  degree: string;
  branch: string;
  graduationYear: string;
  period: string;
  location: string;
  academicSummary: string;
  coursework: string[];
  academicHighlights: string[];
  cgpaConfigurableNote?: string;
}

export interface PersonalBrand {
  name: string;
  initials: string;
  roleTitle: string;
  institution: string;
  branch: string;
  graduationYear: string;
  primaryHeadline: string;
  supportingStatement: string;
  secondaryTagline: string;
  heroIntro: string;
  animatedKeywords: string[];
  aboutParagraphs: string[];
  coreValues: {
    title: string;
    description: string;
    icon: string;
  }[];
  socials: {
    linkedin: string;
    github: string;
    emailConfig: {
      address: string;
      isConfigured: boolean;
      placeholderNotice: string;
    };
  };
}
