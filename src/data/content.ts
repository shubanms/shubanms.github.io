export const profile = {
  name: "Shuban M S",
  tagline: "AI Engineer & SDE-1",
  location: "Greater Bengaluru Area, India",
  headline:
    "AI Engineer & SDE-1 @ CGI. Building agentic AI systems, distributed observability, and AI evaluation tooling. 2 Patents. IEEE & Springer Researcher.",
  bio:
    "I build agentic AI systems and observability infrastructure — from LangGraph pipelines to distributed tracing across Azure microservices.",
  roles: [
    "AI Engineer",
    "Agentic Systems Builder",
    "Observability Engineer",
    "LLM Evaluation Researcher",
  ],
  resume: "/assets/Shuban_M_S_Resume.pdf",
  email: "msshuban4@gmail.com",
  socials: {
    github: "https://github.com/shubanms",
    linkedin: "https://linkedin.com/in/shubanms",
    leetcode: "https://leetcode.com/u/msshuban4/",
    kaggle: "https://www.kaggle.com/shubanms",
  },
};

export const about = {
  paragraphs: [
    "I'm Shuban, a computer engineering graduate with close to 2 years of experience building real AI-driven systems and data pipelines. I work best at the intersection of strong Python engineering and applied AI.",
    "I don't just build models or write backend code — I focus on turning ideas into reliable systems that can actually be used, maintained, and scaled. That means clean code, thoughtful design, and a constant eye on edge cases and long-term impact.",
    "I've designed end-to-end pipelines, built APIs, worked with data that isn't perfect, and shaped AI solutions so they deliver consistent results rather than flashy demos. I care about correctness, clarity, and making systems that teams can trust.",
    "What I bring to the table is ownership. I'm comfortable taking a problem from ambiguity to execution, asking the right questions early, and balancing speed with quality. I think like an engineer, but I always keep the business goal in mind — why something is being built matters as much as how.",
  ],
  topSkills: [
    "Python Engineering",
    "Applied AI & Machine Learning",
    "Data Pipeline Design",
    "System Reliability & Scalability",
    "Problem Solving & Ownership",
  ],
};

export type Experience = {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  current?: boolean;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "AI Engineer & SDE-1",
    company: "CGI",
    type: "Full-time",
    period: "Jun 2025 — Present",
    location: "Bangalore, India · On-site",
    current: true,
    points: [
      "Designed a multi-stage LangGraph agentic pipeline (5 agents: Manager, OCR, Reviewer, Enhancer, Review-2) for automated medical document processing on Azure, achieving ~97% extraction accuracy — a 93% improvement over traditional OCR.",
      "Reduced document processing costs ~80% by replacing Vision LLMs with an optimized agentic architecture; processes 500-page documents in ~1.5 hours at ~$1/document.",
      "Engineered a cross-service distributed observability framework using OpenTelemetry, Jaeger, Prometheus, and Grafana — implemented end-to-end trace propagation across Azure Service Bus boundaries and ProcessPoolExecutor workers, with custom dashboards tracking LLM token usage per agent, OCR throughput, and queue depth.",
      "Architected RECON (Real-world Evaluation, Compliance & Observability Network), an internal AI evaluation platform covering RAG, Agent, and LLM evaluation modules with an EU AI Act compliance reporting layer; submitted to CGI FY2026 Innovation Survey.",
      "Built a black-box RAG validation pipeline for medical APS documents using 5 QGen agents (factual, inferential, adversarial, negation, multi-hop) and domain-specific BioClinical ModernBERT embeddings.",
    ],
  },
  {
    role: "Lead Data Scientist — Research",
    company: "Vellore Institute of Technology",
    type: "Full-time",
    period: "Jun 2024 — Aug 2024",
    location: "Chennai, India · On-site",
    points: [
      "Collected a medical gait dataset using a ₹4L Xsens MTw Awinda IMU kit, capturing stair ascent/descent motion from tailbone, knees, and feet.",
      "Built Python data pipelines to clean IMU signals and extract time- and frequency-domain features (FFT, IQR, mean, median).",
      "Applied unsupervised clustering (K-Means, Agglomerative, Spectral) for BMI and weight-based classification, with agglomerative clustering performing best and weight-based labels outperforming BMI in several cases.",
    ],
  },
  {
    role: "Founding ML & Backend Engineer",
    company: "GreenStitch.io",
    type: "Full-time",
    period: "Aug 2023 — Jan 2024",
    location: "Bangalore, India · On-site",
    points: [
      "Owned the FastAPI-based Python backend, building and running production APIs for Scope 3 carbon emissions prediction with real-time and batch inference.",
      "Designed normalized tables to store emission data and built a vector-based semantic search engine using NLP techniques like NER and word embeddings, hitting ~99% retrieval accuracy on sustainability data.",
      "Built and deployed stacked ensemble models with TensorFlow & Keras following clean ETL and preprocessing pipelines, consistently achieving 99%+ accuracy and strong F1 scores in production.",
      "Created advanced Excel carbon accounting tools with heavy edge-case handling — hidden source tables, locked formulas, complex queries, and embedded regression models for precise reporting.",
    ],
  },
];

export const education = [
  {
    school: "Vellore Institute of Technology, Chennai",
    degree: "B.Tech, Electronics and Computer Engineering",
    period: "2021 — 2025",
    detail: "Grade: A · CGPA 8.48",
    coursework:
      "Artificial Intelligence, Machine Learning, Data Science, DSA, DBMS, Software Engineering",
  },
];

export type SkillItem = { name: string; icon?: string };
export type SkillGroup = { label: string; items: SkillItem[] };

const devicon = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}.svg`;

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages & Data",
    items: [
      { name: "Python", icon: devicon("python/python-original") },
      { name: "SQL", icon: devicon("azuresqldatabase/azuresqldatabase-original") },
      { name: "PostgreSQL", icon: devicon("postgresql/postgresql-original") },
      { name: "Redis", icon: devicon("redis/redis-original") },
      { name: "Pandas", icon: devicon("pandas/pandas-original") },
      { name: "NumPy", icon: devicon("numpy/numpy-original") },
    ],
  },
  {
    label: "Machine Learning",
    items: [
      { name: "PyTorch", icon: devicon("pytorch/pytorch-original") },
      { name: "TensorFlow", icon: devicon("tensorflow/tensorflow-original") },
      { name: "Keras", icon: devicon("keras/keras-original") },
      { name: "Scikit-learn", icon: devicon("scikitlearn/scikitlearn-original") },
      { name: "Jupyter", icon: devicon("jupyter/jupyter-original") },
    ],
  },
  {
    label: "Engineering & Cloud",
    items: [
      { name: "FastAPI", icon: devicon("fastapi/fastapi-original") },
      { name: "Docker", icon: devicon("docker/docker-original") },
      { name: "Azure", icon: devicon("azure/azure-original") },
      { name: "Prometheus", icon: devicon("prometheus/prometheus-original") },
      { name: "Grafana", icon: devicon("grafana/grafana-original") },
      { name: "Git", icon: devicon("git/git-original") },
      { name: "GitHub", icon: devicon("github/github-original") },
      { name: "VS Code", icon: devicon("vscode/vscode-original") },
      { name: "LangGraph" },
      { name: "LangChain" },
      { name: "OpenTelemetry" },
      { name: "Jaeger" },
      { name: "Azure Service Bus" },
      { name: "Azure Blob Storage" },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  status?: "In Development" | "Internal";
};

export const projects: Project[] = [
  {
    title: "RECON",
    description:
      "An internal AI evaluation platform covering RAG, Agent, LLM, Summarization, and Code Generation evaluation — with a compliance layer mapped to EU AI Act articles and ISO 42001 clauses. One-line agent instrumentation via OpenInference + OpenTelemetry across LangGraph, CrewAI, and AutoGen.",
    tags: ["Python", "FastAPI", "OpenTelemetry", "OpenInference", "LangGraph", "RAG"],
    status: "In Development",
  },
  {
    title: "APS RAG Validation Framework",
    description:
      "A black-box RAG evaluation pipeline for Attending Physician Statement medical documents — 5 question generation agents (factual, inferential, adversarial, negation, multi-hop), 6 evaluation agents, BioClinical ModernBERT embeddings, and a live results heatmap frontend.",
    tags: ["Python", "RAG", "BioClinical ModernBERT", "Ollama", "GPT", "FastAPI"],
    status: "Internal",
  },
  {
    title: "Catalyst",
    description:
      "A modular study companion combining FastAPI, Streamlit, Celery, and fine-tuned LLMs for adaptive learning, real-time doubt resolution, and progress tracking.",
    tags: ["FastAPI", "LLMs", "NLP", "PostgreSQL"],
    github: "https://github.com/shubanms/Catalyst",
  },
  {
    title: "Parking Lot Occupancy",
    description:
      "Real-time parking slot occupancy detection from a single CCTV feed, powered by YOLOv8 and a custom PSAT alignment algorithm — 87.9% accuracy even at full capacity.",
    tags: ["YOLOv8", "Keras", "Azure", "Computer Vision"],
    github: "https://github.com/shubanms/parking-lot-occupancy",
  },
  {
    title: "FALCON-Net",
    description:
      "A Streamlit app analyzing the robustness of Siamese and Prototypical networks against adversarial attacks, with built-in defense strategies.",
    tags: ["Adversarial ML", "Few-Shot", "Streamlit"],
    github: "https://github.com/shubanms/FALCON-Net",
    demo: "https://falcon-net.streamlit.app/",
  },
  {
    title: "EVenture Backend",
    description:
      "A FastAPI-powered service for effortless road-trip planning tailored to EV owners, handling routing and charging logistics.",
    tags: ["FastAPI", "Python", "APIs"],
    github: "https://github.com/shubanms/EVenture-Backend",
  },
  {
    title: "Self-Driving Car",
    description:
      "A self-driving car simulator built from scratch in Pygame, with a Deep Q-Network agent that learns to navigate dynamically generated tracks.",
    tags: ["Reinforcement Learning", "Pygame", "DQN"],
    github: "https://github.com/shubanms/Self-Driving-Car",
  },
];

export const achievements = [
  {
    title: "2 Patents Filed",
    body: "IN 202541016033 (GenAI + Blockchain Learning System, Feb 2025) and IN 202541065615 (Color-Dot Authentication System, Jul 2025) — Vellore Institute of Technology, Chennai.",
  },
  {
    title: "Best Paper Award — IEEE",
    body: "Published in IEEE and received a Best Paper Award for research in applied AI.",
  },
  {
    title: "Hackathon Finalist",
    body: "Finalist in 3 National Hackathons and 1 International Hackathon.",
  },
  {
    title: "Invited Speaker",
    body: "Conducted a session on Azure Fundamentals and deploying ML models on Azure.",
  },
];

export type Paper = { title: string; abstract: string; pdf: string };

export const papers: Paper[] = [
  {
    title:
      "FALCONNet: A Multi-Defense Approach for Securing Few-Shot Learning Against Adversarial Attacks",
    abstract:
      "This paper compares few-shot learning models — Siamese, Prototypical Networks, and our proposed FalconNet — on the Omniglot dataset. We assess their robustness against adversarial attacks (PGD, FGSM) and test defense strategies like adversarial training and defensive distillation. FalconNet, with these defenses, outperforms the other models in accuracy and stability under attack.",
    pdf: "/assets/FALCONNet.pdf",
  },
  {
    title:
      "Real-Time Parking Lot Occupancy Monitoring using YOLOv8 with Parking Slot Alignment Transformation Algorithm",
    abstract:
      "We present a real-time campus parking occupancy system using a single CCTV camera and YOLOv8 for detection. Our custom Parking Slot Alignment Transformation (PSAT) algorithm maps detections to parking slots, achieving up to 87.9% accuracy. The system is efficient, scalable, and maintains high accuracy even at near-full capacity.",
    pdf: "/assets/Real_Time_Parking_Lot_Occupancy_Monitoring_using_YOLOv8_with_Parking_Slot_Alignment_Transformation_Algorithm.pdf",
  },
  {
    title:
      "Comparative Analysis of Gait Characteristics in Different BMI Categories Using IMU Sensors",
    abstract:
      "This study classifies individuals as underweight, normal, or overweight using BMI and IMU sensor data during stair walking. Three clustering algorithms were tested; agglomerative clustering performed best. Results show weight alone can sometimes classify more accurately than BMI, and knee/foot movement correlates with weight.",
    pdf: "/assets/Comparative_Analysis_of_Gait_Characteristics_in_Different_BMI_Categories_Using_IMU_Sensors.pdf",
  },
  {
    title: "Cyber Physical Social Systems for the Blind: A New Way to Connect",
    abstract:
      "We introduce a Cyber-Physical-Social System (CPSS) for visually impaired users in smart cities, integrating sensors, adaptive infrastructure, and a social platform. The system connects blind users with sighted volunteers, improving navigation and reducing incidents by 30%. User satisfaction and independence also increase, promoting inclusivity in urban environments.",
    pdf: "/assets/Cyber_Physical_Social_Systems_for_the_Blind_A_New_Way_to_Connect.pdf",
  },
];
