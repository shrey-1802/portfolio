import type { LearningItem } from '../types';

export const learningData: LearningItem[] = [
  {
    id: "hackathon-exposure-01",
    title: "Hackathon Innovation & Rapid Prototyping",
    category: "Hackathon",
    providerOrEvent: "Inter-College / National Hackathon Event",
    date: "2026",
    description: "Participated in high-intensity software hackathon challenges focusing on end-to-end engineering, collaborative architecture design, and building functional problem-solving prototypes under tight deadlines.",
    status: "Completed",
    keyTakeaways: [
      "Translating user problem statements into rapid MVP workflows",
      "Fast API integration and modular frontend state management",
      "Pitching architecture and engineering choices to reviewers"
    ],
    certificateUrl: "#hackathon-certificate-ready",
    highlightBadge: "Verified Hackathon Exposure"
  },
  {
    id: "hackathon-transitops",
    title: "Smart Transport & Logistics Operations Challenge",
    category: "Hackathon",
    providerOrEvent: "TransitOps Development Sprint",
    date: "July 2026",
    description: "Architected and delivered TransitOps, an enterprise-grade fleet and logistics operations intelligence platform featuring RBAC, asset digital twin telemetry, pre-dispatch legal compliance checks, and maintenance work orders.",
    status: "Completed",
    keyTakeaways: [
      "Role-Based Access Control (4 operational personas)",
      "Strict data consistency and atomic state transitions",
      "Operational analytics with gross revenue vs fuel & maintenance ROI"
    ],
    highlightBadge: "Featured Hackathon Prototype"
  },
  {
    id: "tech-milestone-agriculture",
    title: "KrishiNirnay AI: Autonomous Farm-to-Field Advisory",
    category: "Technical Milestone",
    providerOrEvent: "Engineering Research & Prototype",
    date: "2026",
    description: "Designed a multi-agent decision orchestration workflow combining 7 virtual IoT sensor streams, Open-Meteo weather APIs, and 9 domain evaluation agents with closed-loop farmer feedback.",
    status: "Completed",
    keyTakeaways: [
      "Simulated IoT telemetry streaming and threshold evaluation",
      "Continuous Monitor → Analyze → Detect → Decide → Act → Verify → Reassess cycle",
      "Farmer-first interface usability and SVG zone polygon maps"
    ],
    highlightBadge: "Precision Agriculture"
  },
  {
    id: "coursework-cs",
    title: "Core Computer Engineering Curricula",
    category: "Course",
    providerOrEvent: "G H Patel College of Engineering and Technology",
    date: "2025 – Present",
    description: "Fundamental academic study in Data Structures & Algorithms, Object-Oriented Programming, Computer Networks, Operating Systems, and Relational Database Systems.",
    status: "In Progress",
    keyTakeaways: [
      "Algorithmic complexity and memory management principles",
      "Relational schema normalization and SQL querying",
      "Networking protocols (HTTP, TCP/IP, REST semantics)"
    ],
    highlightBadge: "Academic Foundation"
  },
  {
    id: "cert-configurable",
    title: "[Technical Certification / Course Name - Configurable]",
    category: "Certification",
    providerOrEvent: "[Provider e.g., Coursera / freeCodeCamp / NPTEL / AWS]",
    date: "[Completion Date]",
    description: "Configurable slot for verified certifications, courses, or technical workshop participation.",
    status: "Completed",
    keyTakeaways: [
      "Specific skills covered in the certification or coursework",
      "Practical project applications"
    ],
    certificateUrl: undefined,
    highlightBadge: "Ready to Update"
  },
  {
    id: "exploring-next",
    title: "Computer Vision & Edge Sensor Telemetry",
    category: "Currently Exploring",
    providerOrEvent: "Self-Directed R&D",
    date: "Active",
    description: "Exploring real-time gesture tracking models with MediaPipe, touchless human-computer interaction, and hardware-to-cloud telemetry bridges for real-world IoT sensors.",
    status: "Continuous",
    keyTakeaways: [
      "Touchless spatial UI and air-writing canvas architectures",
      "Hardware sensor protocols (MQTT, WebSockets, Serial)",
      "Distributed microservices and edge computing"
    ],
    highlightBadge: "Exploration"
  }
];
