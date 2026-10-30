import type { ProjectData } from '../types';

export const projectsData: ProjectData[] = [
  {
    id: "krishinirnay",
    number: "01",
    slug: "krishinirnay",
    name: "KrishiNirnay AI",
    category: "Precision Agriculture | Artificial Intelligence | Full-stack Web Application",
    shortDescription: "An autonomous farm-to-field agricultural intelligence and action-orchestration platform helping Indian farmers transition from passive sensor reading to closed-loop operational decision making.",
    executiveOverview: "KrishiNirnay AI is an integrated agricultural decision-support platform designed to address the fragmented nature of farm management. By combining virtual IoT sensor streams, live weather forecasts, multi-agent AI domain evaluation, and automated action orchestration, the platform establishes a continuous 7-stage operational cycle: Monitor, Analyze, Detect, Decide, Act, Verify, and Reassess.",
    problem: {
      statement: "Agricultural decisions in smallholder farming require balancing soil moisture, crop pathology, local microclimate, nutrient availability, irrigation schedules, and market pricing. In practice, farmers receive fragmented readings without coordinated interpretation.",
      whyItMatters: "Uncoordinated irrigation leads to either severe root water stress or wasteful water consumption; untracked pest vectors can devastate yields within days; and disconnected market intelligence results in distress selling at substandard mandi prices.",
      painPoints: [
        "Fragmented data points with no unified field operational view",
        "Delayed pest and disease intervention due to lack of early warning telemetry",
        "Inefficient water utilization across varying field management zones",
        "Disconnection between agricultural intelligence and physical field action execution"
      ]
    },
    approach: "Move away from passive telemetry display dashboards. Build a closed-loop multi-agent consensus system where simulated sensors and weather data feed into specialized domain agents, generating farmer-approvable action plans with verified actuator feedback.",
    solution: {
      summary: "A unified farm intelligence platform that integrates 7 virtual sensor streams across multi-tier field hierarchies, orchestrates 9 autonomous domain agents, and provides one-click simulation stress scenarios for real-time risk assessment.",
      targetUsers: [
        "Smallholder & commercial farmers requiring structured decision support",
        "Agricultural field officers & extension workers monitoring zone conditions",
        "Agritech researchers exploring simulated telemetry and multi-agent coordination"
      ],
      primaryWorkflow: "Farmer logs in with 10-digit mobile OTP -> Inspects SVG farm zone hierarchy -> Receives multi-agent risk evaluations -> Approves or modifies generated action plans -> Triggers virtual solenoid/valve actuators -> Validates closed-loop telemetry delta."
    },
    features: [
      {
        name: "Farmer OTP Authentication",
        purpose: "Frictionless, secure access tailored to Indian agricultural workflows.",
        howItWorks: "Validates 10-digit Indian mobile numbers, verifies a 6-digit OTP passcode, and issues JWT session tokens for persistent authorization.",
        whyItMatters: "Provides authentic, mobile-first access without requiring complex passwords or desktop interfaces.",
        badge: "Auth & Security"
      },
      {
        name: "Farm-to-Field-to-Zone Hierarchy",
        purpose: "Multi-tier structural modeling of agricultural land assets.",
        howItWorks: "Organizes holdings into Farms -> Fields -> Management Zones with interactive SVG polygon maps that highlight individual sector boundaries.",
        whyItMatters: "Enables micro-targeted irrigation and nutrient distribution rather than treating whole acreages uniformly.",
        badge: "Spatial Modeling"
      },
      {
        name: "Virtual IoT Sensor Telemetry Engine",
        purpose: "Simulates continuous agronomic telemetry without requiring physical hardware deployment.",
        howItWorks: "Streams 7 distinct virtual metrics (soil moisture, temperature, NPK, pH, electrical conductivity, leaf wetness, humidity) across 4 zones with 10-second polling.",
        whyItMatters: "Allows realistic validation of risk thresholds and decision logic before committing to physical field sensors.",
        badge: "Simulated Telemetry"
      },
      {
        name: "9 Autonomous AI Domain Agents",
        purpose: "Specialized analytical intelligence across agronomic domains.",
        howItWorks: "Distributes evaluation across Irrigation, Pest & Disease, Nutrient, Weather Forecasting, Yield Prediction, Market Advisory, Expert Escalation, Drone Analysis, and Risk Orchestrator agents.",
        whyItMatters: "Prevents monolithic decision bottlenecks and allows confidence-weighted voting across interdependent agronomic factors.",
        badge: "Multi-Agent Intelligence"
      },
      {
        name: "Risk Detection & Action Orchestrator",
        purpose: "Translates sensor threshold breaches into actionable field plans.",
        howItWorks: "Evaluates multi-agent consensus to create confidence-weighted action plans that require explicit farmer approval, modification, or rejection.",
        whyItMatters: "Keeps the human farmer in the loop while removing the burden of manual calculations and parameter matching.",
        badge: "Decision Engine"
      },
      {
        name: "Field Execution & Virtual Actuator Controls",
        purpose: "Closing the loop between decision and physical execution.",
        howItWorks: "Monitors a 6-state job lifecycle with per-zone drip valve and solenoid valve toggling, plus manual overrides.",
        whyItMatters: "Demonstrates complete operational execution from sensor trigger to valve actuation.",
        badge: "Closed-Loop Actuation"
      },
      {
        name: "6-Scenario Agronomic Simulation Center",
        purpose: "Demonstrating system resilience under severe environmental conditions.",
        howItWorks: "One-click injection of Water Stress, Disease Risk, Nutrient Deficiency, Heavy Rain, Heat Wave, or Sensor Failure scenarios into the live pipeline.",
        whyItMatters: "Allows instant evaluation of how agents consensus-react to crises without waiting months for natural field anomalies.",
        badge: "Demo Simulation"
      },
      {
        name: "Market Intelligence & APMC Mandi Spot Prices",
        purpose: "Economic context for crop planning and harvesting timing.",
        howItWorks: "Displays 7-day spot price trends from nearby APMC mandis, combined with agronomic yield forecasts and exportable CSV reports.",
        whyItMatters: "Ensures crop management is economically aligned with real-time market viability.",
        badge: "Market Analytics"
      }
    ],
    userJourney: [
      {
        step: 1,
        title: "Farmer Identity & Field Selection",
        description: "Farmer signs in using mobile OTP, selects their agricultural plot, and views interactive SVG management zones with real-time status highlights."
      },
      {
        step: 2,
        title: "Telemetry Ingestion & Open-Meteo Sync",
        description: "The system polls virtual sensor telemetry (moisture, NPK, leaf wetness) and combines it with live precipitation forecasts from Open-Meteo."
      },
      {
        step: 3,
        title: "Multi-Agent Consensus Cycle",
        description: "The 9 domain agents evaluate incoming data. If soil moisture falls below 28% while temperature rises, the Irrigation and Weather agents coordinate."
      },
      {
        step: 4,
        title: "Action Plan Review & Approval",
        description: "The Risk Orchestrator generates a specific drip irrigation plan. The farmer reviews dosage, timing, and can either approve, adjust, or decline."
      },
      {
        step: 5,
        title: "Execution & Closed-Loop Verification",
        description: "Upon approval, virtual solenoids actuate. Follow-up sensor polling verifies that soil moisture returns to safe agronomic thresholds."
      }
    ],
    architecture: {
      description: "A decoupled full-stack architecture pairing a lightweight client frontend on GitHub Pages with an asynchronous FastAPI microservice on Render, backed by PostgreSQL and external Open-Meteo weather APIs.",
      flowStages: [
        "MONITOR: Ingest Virtual IoT Telemetry & Open-Meteo Forecasts",
        "ANALYZE: Evaluate Agronomic Limits Across 9 Domain Agents",
        "DETECT: Flag Moisture, Nutrient, or Disease Threshold Breaches",
        "DECIDE: Form Confidence-Weighted Action Plans via Risk Orchestrator",
        "ACT: Present Action Card for Farmer Approval & Trigger Actuators",
        "VERIFY: Track 6-State Job Execution Lifecycle",
        "REASSESS: Ingest Post-Action Telemetry & Confirm Closed-Loop Delta"
      ],
      components: [
        { title: "Farmer Client", desc: "HTML5 / CSS3 / ES6+ Responsive SPA hosted on GitHub Pages", type: "frontend" },
        { title: "FastAPI REST Server", desc: "Python async microservice hosted on Render with CORS and JWT auth", type: "backend" },
        { title: "PostgreSQL Database", desc: "Relational persistence for farms, fields, sensor logs, and action history", type: "database" },
        { title: "Virtual IoT Sensor Engine", desc: "7-metric simulated data generator with periodic telemetry intervals", type: "service" },
        { title: "Open-Meteo Weather API", desc: "External live meteorological forecast and rain telemetry integration", type: "service" },
        { title: "9 AI Domain Agents", desc: "Coordinated domain analyzers with confidence voting and audit logging", type: "agent" }
      ]
    },
    techStack: {
      frontend: ["HTML5", "CSS3 Custom Tokens", "JavaScript ES6+", "SVG Vector Graphics", "Chart.js / Native Canvas"],
      backend: ["Python 3.10+", "FastAPI", "Uvicorn", "Pydantic"],
      database: ["PostgreSQL", "SQLAlchemy ORM"],
      externalApis: ["Open-Meteo Weather API"],
      deployment: ["GitHub Pages (Static Client)", "Render (API Backend Microservice)"],
      tools: ["Git", "GitHub Actions", "Postman", "VS Code"]
    },
    engineeringDecisions: [
      {
        decision: "Decoupled Static Frontend with Asynchronous Python Backend",
        rationale: "Enabled instant client hosting on GitHub Pages while keeping compute-intensive agent evaluations and database interactions in FastAPI on Render.",
        impact: "Zero hosting cost for the frontend with resilient cold-start retry mechanisms built into the client API bridge."
      },
      {
        decision: "Simulated Virtual Telemetry Engine Instead of Mock Hardcoding",
        rationale: "Rather than displaying static numbers, built a dynamic virtual engine producing realistic diurnal sensor fluctuations with controllable simulation triggers.",
        impact: "Allowed testing realistic risk detection and automated actuation loops under simulated adverse weather."
      },
      {
        decision: "Explicit Human-in-the-Loop Action Approval",
        rationale: "Agricultural decisions carry tangible real-world crop risks; automated systems should advise rather than override human autonomy.",
        impact: "Builds farmer trust by presenting clear rationale, confidence scores, and one-click modification options before triggering valves."
      }
    ],
    challengesAndSolutions: [
      {
        challenge: "Render Backend Cold-Start Latency (free tier sleep state)",
        solution: "Implemented an automatic client-side health-check ping with a graceful UI wake-up banner, progress countdown, and seamless retry loop.",
        takeaway: "Handling distributed microservice latency gracefully is critical for user trust in web applications."
      },
      {
        challenge: "Multi-Zone Sensor Visualization Without Bulky GIS Libraries",
        solution: "Hand-crafted responsive SVG polygon vector maps with dynamic CSS fill bindings based on zone telemetry thresholds.",
        takeaway: "Native SVG vectors offer superior rendering performance and zero asset load overhead compared to heavyweight map bundles."
      }
    ],
    learningOutcomes: [
      "End-to-end full-stack REST API architecture between static client and Python service",
      "Designing multi-stage state machines (Monitor → Analyze → Detect → Decide → Act → Verify → Reassess)",
      "Simulating IoT hardware telemetry and handling asynchronous sensor polling",
      "Structuring confidence-weighted domain agent consensus patterns in Python"
    ],
    futureScope: [
      "Hardware bridging via MQTT protocols to physical ESP32 / Arduino LoRaWAN field nodes",
      "Localized multilingual voice interfaces supporting regional Indian agricultural dialects",
      "Machine learning models trained on regional ICAR crop yield datasets",
      "Offline-first PWA caching for remote rural connectivity environments"
    ],
    liveUrl: "https://shrey-1802.github.io/farmer_to_field/",
    githubUrl: "https://github.com/shrey-1802/farmer_to_field",
    accentColor: "#10B981",
    badgeText: "Precision Agriculture",
    galleryImages: [
      { caption: "Farm-to-Field Zone Overview & SVG Sector Telemetry", alt: "KrishiNirnay Field View", type: "dashboard" },
      { caption: "Multi-Agent Consensus & Risk Orchestration Center", alt: "Agent Decision Matrix", type: "workflow" },
      { caption: "Closed-Loop Virtual Solenoid & Actuator Execution", alt: "Actuator Controls", type: "workflow" }
    ]
  },
  {
    id: "disista-control",
    number: "02",
    slug: "disista-control",
    name: "Disista Control",
    category: "Disaster Management | Emergency Logistics | Operations Coordination",
    shortDescription: "A role-based emergency supply-chain and disaster-relief coordination matrix designed to synchronize operations across command teams, warehouse managers, and relief convoys.",
    executiveOverview: "Disista Control addresses the acute coordination friction common during humanitarian crises. By establishing three distinct operational workspaces—Control Room Commander, Warehouse Manager, and Convoy Field Driver—the platform streamlines supply inventory allocation, route hazard mitigation, and Indian sector PIN-code telemetry fetching.",
    problem: {
      statement: "During natural disasters, relief operations struggle with uncoordinated supply dispatch, inaccurate warehouse inventories, unmonitored road hazards, and disconnected communication between central command and convoy drivers.",
      whyItMatters: "Miscalculated inventory leads to critical medical and food stock spoilage or stockouts, while unnotified route hazards leave transport convoys stranded in vulnerable flood or landslide zones.",
      painPoints: [
        "Conflicting inventory counts between distribution centers and field units",
        "Lack of real-time hazard alerts along active transit routes",
        "Cognitive overload when all roles share a single uncurated dashboard",
        "Absence of standardized sector identification in time-sensitive logistics"
      ]
    },
    approach: "Segregate operational responsibilities through a 3-role authentication matrix. Couple role-specific views with strict inventory formulas and Indian 6-digit PIN-code sector telemetry fetching.",
    solution: {
      summary: "A centralized operational matrix featuring specialized views for Commander oversight, Warehouse cold-chain inventory math, and Field Driver one-tap hazard reporting.",
      targetUsers: [
        "Disaster Control Room Commanders coordinating regional emergency response",
        "Warehouse Logistics Managers managing cold-chain and emergency supply reserves",
        "Relief Convoy Field Drivers navigating compromised routes and reporting hazards"
      ],
      primaryWorkflow: "Operator selects role & enters security badge -> Sets sector via Indian 6-digit PIN code -> Accesses role workspace -> Coordinates convoy routing, manages reserved inventory math, or logs route hazards."
    },
    features: [
      {
        name: "3-Tier Role-Based Operational Access",
        purpose: "Targeted workflows tailored to distinct disaster-response responsibilities.",
        howItWorks: "Segregates the application into Commander (network risk scoring, global rerouting, road blocks), Warehouse (inventory reservation, cold chain), and Driver (mission routing, 1-tap hazard log).",
        whyItMatters: "Prevents operational confusion by giving field operators and commanders only the telemetry relevant to their duties.",
        badge: "RBAC Architecture"
      },
      {
        name: "Disaster-Sector Indian PIN Code Telemetry",
        purpose: "Instant sector identification based on nationwide postal codes.",
        howItWorks: "Validates 6-digit Indian PIN codes, queries sector data, and renders operational area boundaries and hazard levels.",
        whyItMatters: "Enables rapid localization of emergency relief hubs using existing national administrative infrastructure.",
        badge: "Location Fetcher"
      },
      {
        name: "Authoritative Warehouse Inventory Math",
        purpose: "Eliminates double-counting and stockout risks during emergency relief.",
        howItWorks: "Strictly implements the documented formula: Available Inventory = Total Inventory − Reserved Inventory across medical, ration, and water stocks.",
        whyItMatters: "Guarantees that supplies already earmarked for departing convoys cannot be inadvertently reassigned to secondary requests.",
        badge: "Inventory Engine"
      },
      {
        name: "Cold-Chain & Supply Swap Management",
        purpose: "Specialized monitoring for temperature-sensitive emergency supplies.",
        howItWorks: "Tracks refrigerated medical payloads, temperature thresholds, and facilitates peer warehouse supply swap agreements.",
        whyItMatters: "Protects critical vaccines, blood units, and perishables from thermal breakdown during logistical bottlenecks.",
        badge: "Cold-Chain"
      },
      {
        name: "Convoy Mission C-014 & Route Hazard Logger",
        purpose: "Driver-focused route monitoring and rapid anomaly reporting.",
        howItWorks: "Displays designated waypoints, real-time reroutes from command, and provides a 1-tap hazard button with offline synchronization queueing.",
        whyItMatters: "Allows drivers to instantly report flash floods or roadblocks with minimal touch interactions while on the road.",
        badge: "Field Operations"
      },
      {
        name: "Network Risk Scoring & Road-Blocking Controls",
        purpose: "Centralized authority to halt or redirect vulnerable transit corridors.",
        howItWorks: "Aggregates field hazard logs into an operational risk score and allows command room personnel to broadcast global detour directives.",
        whyItMatters: "Protects multi-vehicle relief convoys from entering worsening disaster perimeters.",
        badge: "Command Matrix"
      }
    ],
    userJourney: [
      {
        step: 1,
        title: "Role Authentication & Sector Initialization",
        description: "Operator selects their assigned role (Control Room, Warehouse, or Driver), inputs badge credentials, and sets the operational area using a 6-digit PIN code."
      },
      {
        step: 2,
        title: "Command Telemetry & Hazard Evaluation",
        description: "Commander monitors the central risk matrix, reviewing active convoy trajectories, road blockage alerts, and shelter occupancy reports."
      },
      {
        step: 3,
        title: "Warehouse Allocation & Stock Reservation",
        description: "Warehouse Manager logs incoming donations, allocates stock, and enforces the Available = Total − Reserved calculation before dispatch."
      },
      {
        step: 4,
        title: "Convoy Dispatch & Waypoint Tracking",
        description: "Relief convoy embarks on Mission C-014, receiving real-time safe route directives and cold-chain temperature telemetry."
      },
      {
        step: 5,
        title: "Field Hazard Logging & Dynamic Rerouting",
        description: "Driver encounters road obstruction, triggers 1-tap hazard log, and command room instantly broadcasts revised coordinates to all active units."
      }
    ],
    architecture: {
      description: "A responsive, client-side emergency coordination application organized into discrete operational modules (api-client, state, auth, components) styled with a tokenized dark emergency design system.",
      flowStages: [
        "AUTHENTICATE: Operator Role Validation & Badge Verification",
        "INITIALIZE: Indian 6-Digit PIN Code Sector Geofence",
        "DISPATCH: Role-Specific Operational Workspace Activation",
        "CALCULATE: Real-time Available = Total - Reserved Stock Evaluation",
        "ALERT: Field Driver One-Tap Route Hazard Log Ingestion",
        "ORCHESTRATE: Command Center Global Reroute Broadcast"
      ],
      components: [
        { title: "Operator Client", desc: "Role-adaptive web interface featuring emergency UI tokens and ambient radar animation", type: "frontend" },
        { title: "State Manager", desc: "Modular state store orchestrating active role, sector telemetry, and convoy manifests", type: "service" },
        { title: "Inventory Engine", desc: "Strict reservation math preventing double-allocation of emergency relief goods", type: "service" },
        { title: "Hazard & Route Broadcaster", desc: "Centralized logging module transmitting detour instructions to field convoys", type: "service" },
        { title: "PIN Code Geofetcher", desc: "Postal code resolver linking logistics hubs to verified operational sectors", type: "service" }
      ]
    },
    techStack: {
      frontend: ["HTML5", "CSS3 Custom Token System", "Vanilla JavaScript (ES6+)", "HTML5 Canvas Ambient Mesh"],
      backend: ["Modular JS Architecture (api-client, state, auth, components)"],
      database: ["In-Memory Operational State Store with Session Persistence"],
      externalApis: ["Sector PIN Code Telemetry Service"],
      deployment: ["Vercel Edge Platform"],
      tools: ["Git", "GitHub", "Chrome DevTools"]
    },
    engineeringDecisions: [
      {
        decision: "Zero-Dependency Vanilla JavaScript Modular Architecture",
        rationale: "Emergency relief systems require ultra-lightweight bundle sizes, instant execution, and zero framework compilation lag on bandwidth-constrained devices.",
        impact: "Initial load time under 300ms, flawless operation on older mobile hardware, and zero third-party framework breakage."
      },
      {
        decision: "Mathematical Separation of Reserved vs Available Stock",
        rationale: "In logistics crises, displaying total inventory creates dangerous illusions of surplus when goods are already committed to in-transit convoys.",
        impact: "Eliminated inventory race conditions and provided warehouse teams with true dispatchable capacity."
      },
      {
        decision: "1-Tap Field Hazard Logging Interface",
        rationale: "Drivers operating heavy vehicles in rain, mud, or degraded infrastructure cannot navigate dense forms or complex dropdowns.",
        impact: "Reduced hazard report submission time to a single tap with auto-attached sector coordinates."
      }
    ],
    challengesAndSolutions: [
      {
        challenge: "Providing an Immersive Serious Visual Style Without Visual Clutter",
        solution: "Engineered a restrained ambient canvas mesh with subtle radar ring telemetry, paired with clear status badges and clean card borders.",
        takeaway: "High-stress operational tools must balance visual polish with immediate high-contrast readability."
      },
      {
        challenge: "Synchronizing State Across 3 Discrete Operational Roles",
        solution: "Built a centralized event-driven client state module where role actions (e.g. driver hazard log) immediately reflect in commander risk score calculations.",
        takeaway: "Decoupled state modules prevent tight coupling between distinct UI views."
      }
    ],
    learningOutcomes: [
      "Role-Based Access Control design in client-side web architectures",
      "Designing mission-critical user experiences for emergency responders",
      "Implementing strict inventory reservation mathematical pipelines",
      "Building performant ambient canvas graphics without GPU degradation"
    ],
    futureScope: [
      "Hardware GPS transponder telemetry streaming via WebSockets",
      "Peer-to-peer WebRTC mesh synchronization for zero-cellular disaster zones",
      "Automated drone route aerial imagery overlays",
      "Multi-agency inter-op exports supporting UN OCHA / NDMA data standards"
    ],
    liveUrl: "https://disaster-control.vercel.app/",
    githubUrl: "https://github.com/shrey-1802/disaster_control",
    accentColor: "#F97316",
    badgeText: "Emergency Logistics",
    galleryImages: [
      { caption: "Role Authentication & PIN Code Sector Initialization", alt: "Disista Role Selector", type: "dashboard" },
      { caption: "Control Room Commander Matrix & Network Risk Scoring", alt: "Commander Dashboard", type: "workflow" },
      { caption: "Warehouse Inventory Reserves & Cold-Chain Supply Swap", alt: "Warehouse Operations", type: "workflow" }
    ]
  },
  {
    id: "hari-shaurab-hostel",
    number: "03",
    slug: "hari-shaurab-hostel",
    name: "Hari-Saurabh Hostel Management System",
    category: "Hostel Management | Administration | Full-stack Web Application",
    shortDescription: "A modern administrative and student directory platform with automated birthday alerts and scheduled WhatsApp greetings via Meta Cloud API.",
    executiveOverview: "Hari-Saurabh Hostel Management System solves recurring administrative friction in residential student communities. Built with React 18, Vite, and FastAPI backed by PostgreSQL on Supabase, the platform centralizes room allocations, floor leader workflows, student directories, and automated birthday greetings scheduled through APScheduler and Meta's WhatsApp Cloud API.",
    problem: {
      statement: "Hostel administration traditionally relies on fragmented spreadsheets, paper registers, and manual messaging. Coordinating floor leader duties, tracking student directories, and maintaining personal community touchpoints like birthday greetings is error-prone and time-consuming.",
      whyItMatters: "Disorganized student directories lead to delayed emergency contacts, unaccounted room changes, administrative oversight, and missed community milestones that weaken student rapport.",
      painPoints: [
        "Scattered student records across manual paper binders and ad-hoc spreadsheets",
        "No structured delegation or tracking of floor leader responsibilities",
        "Manual, inconsistent birthday greeting tracking requiring daily administrative checking",
        "Lack of centralized communication channels between warden office and residents"
      ]
    },
    approach: "Develop a centralized full-stack platform featuring a refined, luxury design system, robust context-based state management, and an automated background scheduler bridging directly to WhatsApp Cloud API.",
    solution: {
      summary: "A unified administration portal featuring clean student directories, floor leader dashboards, automated 24h/6h birthday reminders, and 9:00 AM WhatsApp auto-greetings.",
      targetUsers: [
        "Hostel Wardens & Chief Administrators managing room allocation and student directories",
        "Student Floor Leaders coordinating floor-level compliance and communications",
        "Hostel Residents benefiting from timely administrative notifications and personal community greetings"
      ],
      primaryWorkflow: "Admin logs in -> Inspects centralized student directory & room allocations -> Assigns floor leader roles -> System automatically schedules birthday greetings via APScheduler -> Dispatches personalized WhatsApp message at 9:00 AM on resident's birthday."
    },
    features: [
      {
        name: "Centralized Student Directory & Room Allocation",
        purpose: "Single source of truth for all resident profiles and room assignments.",
        howItWorks: "Maintains searchable student records, room numbers, branches, blood groups, and emergency guardian contact details.",
        whyItMatters: "Enables instant emergency contact retrieval and eliminates duplicate room assignments.",
        badge: "Directory Management"
      },
      {
        name: "Floor Leader Workflow Coordination",
        purpose: "Empowering senior residents with localized floor administrative tools.",
        howItWorks: "Provides delegated floor leader views for attendance verification, maintenance escalation, and floor announcement broadcasts.",
        whyItMatters: "Distributes administrative workload and ensures quick resolution of floor-level resident concerns.",
        badge: "Delegated Admin"
      },
      {
        name: "Automated WhatsApp Birthday Greetings Engine",
        purpose: "Personalized student rapport without manual administrative overhead.",
        howItWorks: "APScheduler scans birthdate records, queues 24-hour and 6-hour advance admin reminders, and fires personalized greetings at 9:00 AM via Meta WhatsApp Cloud API.",
        whyItMatters: "Fosters strong community spirit and student satisfaction automatically every single day.",
        badge: "WhatsApp Cloud API"
      },
      {
        name: "React Context Architecture & Mock Fallback",
        purpose: "Resilient client-side state handling with zero-crash fallbacks.",
        howItWorks: "Decouples application state across AuthContext, StudentContext, and NotificationContext, backed by a Universal Fetch client that gracefully falls back to mock stores if backend APIs cold-start.",
        whyItMatters: "Ensures that demonstration environments and slow connections never result in a blank screen.",
        badge: "Resilient State"
      },
      {
        name: "Supabase PostgreSQL with Row Level Security",
        purpose: "Secure relational storage with fine-grained access policies.",
        howItWorks: "Stores student entities, floor allocations, and notification logs in PostgreSQL with RLS policies restricting unauthorized record modifications.",
        whyItMatters: "Safeguards sensitive student phone numbers and emergency contacts from unauthorized tampering.",
        badge: "Database Security"
      },
      {
        name: "HashRouter Zero-404 GitHub Pages Deployment",
        purpose: "Flawless direct-link navigation on static web hosting.",
        howItWorks: "Uses client-side hash routing so refreshing deep links like `/#/students` never produces a server-side 404.",
        whyItMatters: "Guarantees reliable portfolio reviews and recruiter demonstrations on GitHub Pages.",
        badge: "Deployment Resilience"
      }
    ],
    userJourney: [
      {
        step: 1,
        title: "Administrative Login & Overview",
        description: "Hostel warden logs into the dashboard, reviewing total room occupancy, pending floor maintenance requests, and upcoming resident birthdays."
      },
      {
        step: 2,
        title: "Student Profile Management",
        description: "Admin searches student directory by room or name, updates contact details, and verifies assigned floor leader responsibilities."
      },
      {
        step: 3,
        title: "Background Birthday Scheduling",
        description: "APScheduler identifies students with birthdays within 24 hours and 6 hours, pushing alert badges to the warden's notification center."
      },
      {
        step: 4,
        title: "Automated WhatsApp Message Dispatch",
        description: "At exactly 9:00 AM, the FastAPI service triggers Meta's WhatsApp Cloud API endpoint, delivering a warm personalized greeting to the student."
      },
      {
        step: 5,
        title: "Delivery Audit & History Logging",
        description: "The notification context logs successful delivery in Supabase, keeping a permanent audit trail of sent greetings and alerts."
      }
    ],
    architecture: {
      description: "A full-stack reactive architecture pairing a React 18 frontend with a Python FastAPI microservice, PostgreSQL on Supabase, and Meta WhatsApp Cloud API automated via APScheduler.",
      flowStages: [
        "FRONTEND: React 18 + Vite + Context API (Auth, Student, Notification)",
        "API LAYER: Universal Fetch Client with Render Endpoint & Mock Fallback",
        "BACKEND: Python FastAPI Microservice with Asynchronous Endpoints",
        "DATABASE: PostgreSQL on Supabase with Row Level Security",
        "SCHEDULER: APScheduler 24h / 6h Cron Triggers",
        "INTEGRATION: Meta WhatsApp Cloud API Message Dispatch"
      ],
      components: [
        { title: "React SPA Frontend", desc: "Vite + Tailwind CSS + Framer Motion interface with HashRouter", type: "frontend" },
        { title: "React Context State", desc: "AuthContext, StudentContext, and NotificationContext stores", type: "service" },
        { title: "FastAPI Backend", desc: "Python async REST backend handling student CRUD and scheduling triggers", type: "backend" },
        { title: "Supabase PostgreSQL", desc: "Managed relational database with Row Level Security policies", type: "database" },
        { title: "APScheduler Engine", desc: "Background cron scheduler checking daily birthday milestones", type: "service" },
        { title: "WhatsApp Cloud API", desc: "Meta official API delivering automated 9:00 AM birthday templates", type: "service" }
      ]
    },
    techStack: {
      frontend: ["React 18", "Vite", "Tailwind CSS", "Framer Motion", "Lucide React", "React Context API", "HashRouter"],
      backend: ["Python", "FastAPI", "Uvicorn", "Pydantic"],
      database: ["PostgreSQL", "Supabase", "Row Level Security (RLS)"],
      externalApis: ["Meta WhatsApp Cloud API"],
      deployment: ["Vercel Edge (Frontend)", "Render (FastAPI Backend)"],
      tools: ["Git", "GitHub Actions", "Postman", "Meta Developer Console"]
    },
    engineeringDecisions: [
      {
        decision: "Automated Scheduling via APScheduler Rather Than Cron Webhooks",
        rationale: "Embedded Python APScheduler within the FastAPI service allows direct access to the database session and eliminates external third-party cron service dependencies.",
        impact: "Reliable daily birthday greetings execution with precise 24h and 6h reminder triggers."
      },
      {
        decision: "Dual Context State with Seamless Mock Fallback",
        rationale: "When showcasing projects to recruiters or during free-tier Render backend spin-up delays, the UI should never break.",
        impact: "Instant interactive demonstration capability even during backend maintenance or cold-starts."
      },
      {
        decision: "HashRouter for Static Hosting Compatibility",
        rationale: "Single-page apps on GitHub Pages or Vercel can return 404 on deep refresh if server rewrites are not configured.",
        impact: "Guaranteed 100% URL reliability for all reviewers and recruiters."
      }
    ],
    challengesAndSolutions: [
      {
        challenge: "Meta WhatsApp Cloud API Webhook Verification & Token Expiry",
        solution: "Configured secure environment variable management for Meta App Secret, permanent system user tokens, and template approval matching.",
        takeaway: "Enterprise messaging APIs require strict verification handshakes and robust failure handling."
      },
      {
        challenge: "Coordinating Floor Leader vs Admin Permissions",
        solution: "Established role-based UI guards within StudentContext so floor leaders can only view and update residents assigned to their specific floor wing.",
        takeaway: "Clean context segmentation prevents unauthorized data exposure in multi-tenant administration."
      }
    ],
    learningOutcomes: [
      "Integrating third-party messaging APIs (Meta WhatsApp Cloud API)",
      "Background job orchestration with Python APScheduler",
      "Building resilient React applications with Context API and mock failovers",
      "Relational data modeling with PostgreSQL and Supabase Row Level Security"
    ],
    futureScope: [
      "Biometric fingerprint gate entry integration for student check-in/out",
      "Automated mess meal billing and leave rebate calculation module",
      "Student grievance and room maintenance ticketing system with photo uploads",
      "Native mobile companion app for floor leaders"
    ],
    liveUrl: "https://hari-shaurab-hostel.vercel.app/",
    githubUrl: "https://github.com/shrey-1802/hari-shaurab-hostel",
    accentColor: "#E6A23C",
    badgeText: "Hostel Administration",
    galleryImages: [
      { caption: "Hostel Administration Dashboard & Occupancy Metrics", alt: "Hostel Admin Overview", type: "dashboard" },
      { caption: "Automated WhatsApp Birthday Scheduler & Reminder Feed", alt: "Birthday Automation", type: "workflow" },
      { caption: "Student Directory & Floor Leader Coordination Table", alt: "Student Directory", type: "workflow" }
    ]
  },
  {
    id: "airshot",
    number: "04",
    slug: "airshot",
    name: "Airshot",
    category: "Computer Vision | AI Gesture Recognition | Human-Computer Interaction",
    shortDescription: "An AI-powered real-time hand tracking and air-writing canvas enabling touchless digital drawing and writing via browser webcam gestures.",
    executiveOverview: "Airshot explores modern touchless Human-Computer Interaction (HCI). By utilizing MediaPipe's computer vision pipeline directly in the browser, the application tracks 21 3D hand landmarks in real time through the user's webcam. Users can write, sketch, erase, and control the canvas in mid-air using intuitive finger gestures without touching physical input devices.",
    problem: {
      statement: "Traditional digital drawing and screen interaction require physical touchscreens, mice, or stylus tablets. In environments such as collaborative presentations, surgical suites, or hands-free classroom demonstrations, physical peripherals can be restrictive or unhygienic.",
      whyItMatters: "Touchless gesture interaction opens intuitive interfaces for interactive displays, hands-busy computing environments, accessibility-assisted technology, and natural spatial drawing.",
      painPoints: [
        "Dependency on expensive specialized digitizer tablets or touchscreen hardware",
        "Inability to interact with screens during presentations from a distance",
        "High latency and jitter in naive web-based computer vision tracking",
        "Complex gesture state management (separating intentional drawing from idle hand movements)"
      ]
    },
    approach: "Harness MediaPipe's client-side hand tracking models to detect fingertip coordinates at high frame rates, paired with a custom gesture state machine that differentiates drawing, erasing, and idle states.",
    solution: {
      summary: "A high-performance browser canvas application combining real-time webcam video feeds, MediaPipe HandLandmarker neural tracking, path smoothing algorithms, and gesture control guides.",
      targetUsers: [
        "Educators and presenters demonstrating concepts touchlessly on large displays",
        "Students and developers exploring Computer Vision and HCI workflows",
        "Creative designers experimenting with spatial air-brushing and gesture sketch inputs"
      ],
      primaryWorkflow: "User enables webcam -> MediaPipe detects hand landmarks -> User raises index finger to enter Drawing Mode -> Moves finger in mid-air to sketch -> Switches to open palm/gesture to Erase -> One-click canvas clear or export."
    },
    features: [
      {
        name: "MediaPipe Real-Time Hand Landmark Tracking",
        purpose: "High-precision 21-point 3D hand tracking directly inside the web browser.",
        howItWorks: "Runs MediaPipe Tasks Vision (@mediapipe/tasks-vision) HandLandmarker model on incoming webcam video frames with customizable confidence thresholds.",
        whyItMatters: "Eliminates backend video streaming latency by processing frames entirely on the client's GPU via WebGL.",
        badge: "Computer Vision"
      },
      {
        name: "Index Fingertip Air-Canvas Rendering",
        purpose: "Translating spatial finger motion into smooth 2D canvas strokes.",
        howItWorks: "Isolates landmark #8 (Index Finger Tip), calculates smoothed coordinate deltas, and renders continuous strokes on an HTML5 canvas overlay.",
        whyItMatters: "Provides responsive, natural writing fidelity that mirrors an invisible pen in thin air.",
        badge: "HTML5 Canvas"
      },
      {
        name: "Gesture State Machine (Draw vs Erase vs Idle)",
        purpose: "Intelligent distinction between intentional drawing and idle hand motion.",
        howItWorks: "Evaluates multi-finger extension ratios to toggle between Drawing (single index finger extended), Erasing (fist / multi-finger palm), and Idle (no active gesture).",
        whyItMatters: "Prevents accidental strokes when the user is simply moving their hand across the field of view.",
        badge: "State Machine"
      },
      {
        name: "Interactive Gesture Guide & Camera Controls",
        purpose: "Immediate onboarding and privacy control for first-time users.",
        howItWorks: "Displays clear visual gesture cheatsheets, webcam preview toggles (Camera On/Off/Paused), and live FPS/tracking confidence meters.",
        whyItMatters: "Empowers users to quickly learn the hand poses and maintain complete control over camera permissions.",
        badge: "HCI Usability"
      },
      {
        name: "Stroke Smoothing & Jitter Reduction",
        purpose: "Filtering out natural hand tremors and webcam sensor noise.",
        howItWorks: "Applies quadratic Bézier curve interpolation and moving-average coordinate smoothing between successive video frames.",
        whyItMatters: "Produces crisp, legible digital lettering rather than jagged, pixelated lines.",
        badge: "Signal Processing"
      },
      {
        name: "Canvas Clear & Color Customization",
        purpose: "Complete creative control over the touchless drawing environment.",
        howItWorks: "Provides one-click 'Clear Drawing' and 'Clear Text' actions, brush color palette selection, and eraser radius adjustments.",
        whyItMatters: "Enables multi-color annotations and rapid canvas resets during live demonstrations.",
        badge: "Creative Controls"
      }
    ],
    userJourney: [
      {
        step: 1,
        title: "Camera Permission & Hand Calibration",
        description: "User opens Airshot, grants camera access, and positions their hand within the designated tracking frame."
      },
      {
        step: 2,
        title: "Gesture Recognition & Mode Engagement",
        description: "The system identifies hand landmarks. Pointing with the index finger immediately engages Writing Mode with visual cursor feedback."
      },
      {
        step: 3,
        title: "Air Drawing & Real-Time Stroke Smoothing",
        description: "As the user moves their finger, smoothed paths are drawn onto the transparent canvas overlay with zero perceptible lag."
      },
      {
        step: 4,
        title: "Touchless Eraser Activation",
        description: "Switching to an open palm or dedicated erase gesture switches the toolhead to Erase Mode, wiping unwanted strokes touchlessly."
      },
      {
        step: 5,
        title: "Canvas Management & Reset",
        description: "User clicks Clear Drawing or resets the canvas, ready for the next annotation or demonstration sequence."
      }
    ],
    architecture: {
      description: "A client-side Computer Vision pipeline combining HTML5 MediaDevices webcam capture, MediaPipe HandLandmarker inference via WebGL, a gesture state machine, and double-buffered HTML5 Canvas stroke rendering.",
      flowStages: [
        "CAPTURE: Ingest Webcam Stream via Navigator MediaDevices",
        "INFERENCE: Detect 21 3D Landmarks via MediaPipe Vision WebGL",
        "CLASSIFY: Evaluate Finger Extension & State (Draw / Erase / Idle)",
        "SMOOTH: Apply Quadratic Bézier Smoothing to Index Fingertip (#8)",
        "RENDER: Draw Interactive Strokes to HTML5 Canvas Surface",
        "FEEDBACK: Update Live Tracking Confidence & Gesture Indicators"
      ],
      components: [
        { title: "Webcam Ingestion", desc: "HTML5 Video element capturing 720p 30/60fps video frames", type: "frontend" },
        { title: "MediaPipe HandLandmarker", desc: "TensorFlow.js / WebGL accelerated neural hand landmark model", type: "service" },
        { title: "Gesture Classifier", desc: "Angle and distance mathematics determining active drawing state", type: "service" },
        { title: "HTML5 Canvas Surface", desc: "High-DPI rendering context with alpha channel overlay", type: "frontend" },
        { title: "Gesture Guide UI", desc: "React component displaying pose guides, confidence, and camera controls", type: "frontend" }
      ]
    },
    techStack: {
      frontend: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "HTML5 Canvas API", "Lucide React"],
      backend: ["Client-Side WebGL Inference (Zero Server Dependency)"],
      database: ["Local State & Canvas Memory Buffers"],
      externalApis: ["MediaPipe Tasks Vision API (@mediapipe/tasks-vision)"],
      deployment: ["Vercel Edge Platform"],
      tools: ["Git", "GitHub", "Chrome Media Profiler", "VS Code"]
    },
    engineeringDecisions: [
      {
        decision: "100% Client-Side In-Browser Computer Vision Processing",
        rationale: "Streaming video frames to a remote server introduces 200–500ms latency, massive bandwidth costs, and severe privacy concerns for webcam feeds.",
        impact: "Zero latency (<15ms per frame), strict user privacy (video never leaves the device), and zero server operational costs."
      },
      {
        decision: "Mathematical Landmark Ratio Classification Over Heavy ML Gesture Models",
        rationale: "Rather than running a secondary heavy deep neural network to classify gestures, calculated relative finger joint distances directly from the 21 MediaPipe coordinates.",
        impact: "Preserved 60 FPS performance on standard laptops without GPU thermal throttling."
      },
      {
        decision: "Double-Buffered HTML5 Canvas with Bézier Smoothing",
        rationale: "Raw landmark coordinates produce micro-jitter due to normal hand tremors and webcam sensor noise.",
        impact: "Silky-smooth stroke rendering that feels natural and legible for handwriting."
      }
    ],
    challengesAndSolutions: [
      {
        challenge: "Webcam Coordinate Mirroring & Aspect Ratio Distortion",
        solution: "Implemented horizontal canvas transformation matrices (`scaleX(-1)`) to ensure that moving one's hand right naturally draws to the right on screen.",
        takeaway: "Spatial interfaces must align with intuitive mirror expectations to feel natural."
      },
      {
        challenge: "Handling Rapid Hand Movements & Model Occlusion",
        solution: "Introduced velocity-dependent stroke interpolation and confidence thresholds (`minHandDetectionConfidence: 0.5`) to suppress wild coordinate spikes when the hand briefly leaves the frame.",
        takeaway: "Noise filtering is just as important as landmark detection in vision-based input systems."
      }
    ],
    learningOutcomes: [
      "Integrating MediaPipe Tasks Vision and client-side ML pipelines in React",
      "Real-time coordinate transformation and HTML5 canvas stroke interpolation",
      "Designing stateful Human-Computer Interaction models for spatial computing",
      "Performance optimization for high-framerate browser rendering loops"
    ],
    futureScope: [
      "AI Character Recognition (OCR) converting air-written words into digital editable text",
      "Air-pinch zoom, pan, and 3D object rotation gestures",
      "Multi-hand collaboration supporting two simultaneous air-drawing participants",
      "Exporting vector SVG illustrations directly from air-sketched paths"
    ],
    liveUrl: "https://airshot.vercel.app/",
    githubUrl: undefined, // Pending user confirmation; clear UI indicator provided
    accentColor: "#38BDF8",
    badgeText: "Computer Vision & HCI",
    galleryImages: [
      { caption: "Airshot Air-Canvas Interface with Live Hand Tracking", alt: "Airshot Workspace", type: "dashboard" },
      { caption: "MediaPipe 21-Landmark Skeleton & Gesture State Visualizer", alt: "Hand Tracking Skeleton", type: "workflow" },
      { caption: "Touchless Drawing, Erasing, and Stroke Smoothing in Action", alt: "Air Writing Showcase", type: "workflow" }
    ]
  },
  {
    id: "transitops",
    number: "05",
    slug: "transitops",
    name: "TransitOps",
    category: "Enterprise Fleet & Operations Intelligence | Smart Logistics Platform",
    shortDescription: "A next-generation enterprise transport operations management system featuring digital twin asset tracking, driver compliance intelligence, smart dispatch, and financial ROI analytics.",
    executiveOverview: "TransitOps is an enterprise-grade B2B transport operations management platform engineered to resolve the blind spots of modern logistics. Built with React 18, TypeScript, and Vite featuring an olive green & charcoal design system, the platform unifies 7 core telemetry KPIs, digital twin asset lifecycles, commercial driver license compliance, pre-dispatch legal load validation, preventive maintenance work orders, fuel anomaly auditing, and authoritative asset ROI analytics.",
    problem: {
      statement: "Enterprise fleet operators frequently operate across disconnected legacy systems for vehicle tracking, driver licensing, maintenance logs, and financial accounting. This fragmentation leads to illegal overload dispatches, missed CDL expirations, unmonitored fuel theft, and opaque unit-level capital ROI.",
      whyItMatters: "Deploying unlicensed drivers or overloaded trucks risks catastrophic regulatory fines and insurance invalidation; unmonitored maintenance causes roadside breakdowns; and untracked fuel usage drains corporate operating margins by 12–18%.",
      painPoints: [
        "Pre-dispatch safety violations due to manual, unchecked driver assignment",
        "Dispatched trips exceeding legal axle and cargo weight limits",
        "Maintenance intervals tracked on whiteboards, leading to preventable engine failures",
        "Fuel consumption anomalies (>15% spikes) going unnoticed until month-end audits",
        "Inability to calculate exact capital ROI: (Gross Revenue - (Maintenance + Fuel)) / Asset Cost"
      ]
    },
    approach: "Create a mission-control operations matrix combining atomic state transitions, strict pre-dispatch validation rules, digital twin pipelines, and role-based access for Fleet Managers, Dispatchers, Safety Officers, and Financial Analysts.",
    solution: {
      summary: "A unified enterprise operations suite featuring 7 Core Telemetry KPIs, Digital Twin lifecycle pipelines, legal capacity dispatch lockouts, driver safety scoring, and an AI Operations Copilot.",
      targetUsers: [
        "Fleet Managers supervising vehicle health, lifecycle pipelines, and regional asset allocation",
        "Logistics Dispatchers matching drivers and vehicles to cargo manifests with automated safety guards",
        "Corporate Safety Officers enforcing commercial driver licensing, compliance, and disciplinary reviews",
        "Financial Analysts auditing unit P&L, fuel anomalies, and asset capital ROI"
      ],
      primaryWorkflow: "Dispatcher selects trip manifest -> Smart Dispatch Engine checks vehicle availability, payload limit (`cargo <= max capacity`), and driver CDL validity (<30 days alert) -> Approves atomic state transition (`Draft -> Dispatched`) -> Monitors trip telemetry -> Audits fuel logs and ROI."
    },
    features: [
      {
        name: "Operations Mission Control Dashboard",
        purpose: "Real-time executive oversight across the regional transport network.",
        howItWorks: "Displays 7 Core Telemetry KPIs (Active Vehicles, Available, In Maintenance, Active Trips, Pending Trips, Drivers On Duty, Utilization %) with ROI trend charts and regional filters.",
        whyItMatters: "Provides operational commanders with instant situational awareness and fleet utilization bottlenecks.",
        badge: "Mission Control"
      },
      {
        name: "Vehicle Registry & Digital Twin Pipeline",
        purpose: "Comprehensive lifecycle tracking of capital transportation assets.",
        howItWorks: "Tracks assets through an authoritative pipeline (*Purchased → Available → Assigned → On Trip → In Shop → Retired*) with mini-ERP tabs for fuel telemetry, maintenance history, and document storage.",
        whyItMatters: "Guarantees complete traceability and prevents vehicles marked 'In Shop' from being mistakenly assigned to active trips.",
        badge: "Digital Twin"
      },
      {
        name: "Driver Intelligence & CDL Compliance Matrix",
        purpose: "Zero-tolerance regulatory compliance and commercial licensing enforcement.",
        howItWorks: "Monitors commercial license expirations with automated `<30 days` advance warnings, safety scoring, violation logs, and disciplinary lockout capabilities for Safety Officers.",
        whyItMatters: "Protects the enterprise from catastrophic legal penalties and non-compliant road dispatches.",
        badge: "Safety & Compliance"
      },
      {
        name: "Smart Dispatch Engine with Pre-Dispatch Safety Matrix",
        purpose: "Automated enforcement of legal transport capacities and driver eligibility.",
        howItWorks: "Evaluates `cargo weight <= max load capacity`, rejects suspended or expired assets/drivers with explicit refusal reasons, and performs atomic multi-entity state updates.",
        whyItMatters: "Eliminates dangerous human error and guarantees that every dispatched vehicle meets legal highway standards.",
        badge: "Dispatch Engine"
      },
      {
        name: "Maintenance & Shop Intelligence Work Orders",
        purpose: "Preventive maintenance scheduling and shop bay utilization.",
        howItWorks: "Calculates odometer service progress bars and creates active work orders that automatically move vehicles to `In Shop` status until completed by technicians.",
        whyItMatters: "Dramatically reduces unexpected roadside breakdowns and extends heavy asset operational lifespans.",
        badge: "Maintenance ERP"
      },
      {
        name: "Fuel Auditing & Anomaly Detection",
        purpose: "Rooting out fuel theft, leakages, and inefficient routing.",
        howItWorks: "Logs dispenser inputs and automatically triggers warning banners whenever fuel consumption deviates by more than 15% from the model baseline.",
        whyItMatters: "Recovers thousands of dollars in lost fuel margins and flags mechanical engine issues early.",
        badge: "OpEx Auditing"
      },
      {
        name: "Financial Analytics & Authoritative Asset ROI",
        purpose: "True unit-level capital profitability analysis for corporate finance.",
        howItWorks: "Computes the exact mathematical formula: `ROI = (Gross Transport Revenue - (Maintenance Cost + Fuel Outlay)) / Capital Acquisition Cost`, with leaderboard rankings and CSV exports.",
        whyItMatters: "Enables data-driven decisions on when to decommission older trucks or procure new fleet units.",
        badge: "Financial Intelligence"
      },
      {
        name: "AI Operations Copilot (Allowlisted Intent Architecture)",
        purpose: "Instant natural language operational insights without SQL injection vulnerabilities.",
        howItWorks: "Implements allowlisted intent parameters (`highest_roi_vehicle`, `expiring_licenses`, `vehicles_in_maintenance`) returning structured response cards with direct action navigation.",
        whyItMatters: "Accelerates operational queries for managers while maintaining bulletproof backend security.",
        badge: "AI Copilot"
      },
      {
        name: "Role-Based Access Control (4 Personas)",
        purpose: "Enterprise segregation of duties across operational teams.",
        howItWorks: "Provides four dedicated roles: Fleet Manager, Dispatcher, Safety Officer, and Financial Analyst, with a one-click preview role switcher in the navigation bar.",
        whyItMatters: "Ensures staff members only access actions authorized under their corporate mandate.",
        badge: "RBAC Security"
      }
    ],
    userJourney: [
      {
        step: 1,
        title: "Role Selection & Network Dashboard Overview",
        description: "User selects their corporate persona (e.g., Dispatcher) and inspects the 7 Core Telemetry KPIs across regional hubs."
      },
      {
        step: 2,
        title: "Trip Manifest Creation & Pre-Dispatch Evaluation",
        description: "Dispatcher creates a trip manifest with cargo weight. The Smart Dispatch Engine checks vehicle capacity and verifies driver CDL expiration status."
      },
      {
        step: 3,
        title: "Atomic Dispatch Execution",
        description: "Upon passing all safety checks, the trip transitions to 'Dispatched', simultaneously updating the vehicle status to 'Assigned' and driver to 'On Duty'."
      },
      {
        step: 4,
        title: "Maintenance Milestone & Anomaly Flagging",
        description: "If an odometer passes a service interval or fuel consumption spikes >15%, the Alert Center triggers high-priority warning cards."
      },
      {
        step: 5,
        title: "Financial ROI & Asset Yield Review",
        description: "Financial Analyst reviews the unit P&L ledger, evaluates capital ROI yields, and exports comprehensive audit reports for executive leadership."
      }
    ],
    architecture: {
      description: "An enterprise modular React 18 + TypeScript application utilizing React Router v6 for RBAC-guarded routes, Space Grotesk & Plus Jakarta Sans typography, and an autonomous in-memory store resilient to microservice cold-starts.",
      flowStages: [
        "AUTHENTICATE: Corporate Persona RBAC Verification (4 Roles)",
        "TELEMETRY: Real-time 7-KPI Aggregation Across Active Assets",
        "VALIDATE: Pre-Dispatch Safety Matrix (Cargo <= Payload, CDL > 30 Days)",
        "TRANSITION: Atomic Multi-Entity State Pipeline Execution",
        "AUDIT: Continuous Fuel Consumption Anomaly & Maintenance Tracking",
        "CALCULATE: Authoritative Unit-Level Capital ROI Formula Evaluation"
      ],
      components: [
        { title: "Mission Control UI", desc: "React 18 + TypeScript SPA with custom Olive/Charcoal design system", type: "frontend" },
        { title: "Smart Dispatch Engine", desc: "Pre-dispatch safety matrix enforcing capacity and license compliance", type: "service" },
        { title: "Digital Twin Registry", desc: "State machine tracking lifecycle pipeline (*Purchased -> Retired*)", type: "service" },
        { title: "Driver Compliance Store", desc: "CDL validity checker with <30 days automatic warning triggers", type: "service" },
        { title: "ROI Calculation Engine", desc: "Mathematical analyzer computing net transport yield against capital cost", type: "service" },
        { title: "AI Operations Copilot", desc: "Parameterized intent resolver returning interactive action cards", type: "agent" }
      ]
    },
    techStack: {
      frontend: ["React 18", "TypeScript", "Vite 6", "React Router v6", "Lucide React", "Vanilla CSS Design Tokens", "Plus Jakarta Sans & Space Grotesk"],
      backend: ["Autonomous In-Memory Operations Store with REST API Bridge"],
      database: ["Relational Mock State & Local Storage Persistence"],
      externalApis: ["Regional Logistics Telemetry Engine"],
      deployment: ["Vercel Edge Platform"],
      tools: ["Git", "GitHub", "Vite Dev Server", "TypeScript Compiler"]
    },
    engineeringDecisions: [
      {
        decision: "Strict Pre-Dispatch Capacity & Compliance Validation Rules",
        rationale: "Logistics software must prevent illegal dispatches programmatically rather than relying on human diligence alone.",
        impact: "Zero possibility of dispatching an overloaded truck or a driver with an expired commercial license."
      },
      {
        decision: "Authoritative Mathematical ROI Formula Implementation",
        rationale: "Most fleet dashboards only report vanity metrics like miles driven. TransitOps implements true financial capital yield: `(Gross Revenue - (Maintenance + Fuel)) / Capital Cost`.",
        impact: "Provides executive leadership with defensible asset retirement and capital procurement recommendations."
      },
      {
        decision: "Autonomous Store with Resilient Microservice Cold-Start Bridging",
        rationale: "Backend microservices on cloud tiers may experience cold-start latencies. Enterprise tools cannot show blank screens during field deployments.",
        impact: "Instant UI responsiveness with flawless fallback handling and zero connection crash screens."
      }
    ],
    challengesAndSolutions: [
      {
        challenge: "Atomic Multi-Entity State Transitions During Dispatch",
        solution: "Engineered synchronized state dispatchers ensuring that transitioning a trip to 'In Progress' atomically updates vehicle state to 'On Trip' and driver state to 'On Duty'.",
        takeaway: "Enterprise operational software requires transactional state integrity across related entity graphs."
      },
      {
        challenge: "Sophisticated Bespoke B2B Aesthetics Without Bulky Component Libraries",
        solution: "Crafted custom CSS design tokens utilizing Olive Green (`#2F422A`), Warm Beige (`#E7DFD4`), Charcoal (`#121612`), and Space Grotesk typography.",
        takeaway: "Bespoke styling tailored to industry domains communicates far greater professionalism than generic UI kits."
      }
    ],
    learningOutcomes: [
      "Enterprise Role-Based Access Control (RBAC) architecture in React Router v6",
      "Designing complex multi-entity state pipelines with atomic transitions",
      "Implementing financial and operational mathematics in enterprise software",
      "Engineering resilient client state architectures with backend fallback bridges"
    ],
    futureScope: [
      "Hardware OBD-II & CAN-bus telematics ingestion via real-time WebSockets",
      "Automated route optimization using Dijkstra dynamic traffic weighting",
      "Automated driver rest-break compliance auditing (Hours of Service / HOS)",
      "Multi-currency cross-border fuel taxation and toll calculation"
    ],
    liveUrl: "https://transit-opt.vercel.app/",
    githubUrl: "https://github.com/shrey-1802/transit_opt",
    accentColor: "#84CC16",
    badgeText: "Enterprise Fleet Intelligence",
    galleryImages: [
      { caption: "Operations Mission Control Dashboard & 7 Telemetry KPIs", alt: "TransitOps Dashboard", type: "dashboard" },
      { caption: "Smart Dispatch Engine & Pre-Dispatch Compliance Matrix", alt: "Dispatch Operations", type: "workflow" },
      { caption: "Asset Digital Twin Registry & Lifecycle State Pipeline", alt: "Vehicle Registry", type: "workflow" }
    ]
  }
];
