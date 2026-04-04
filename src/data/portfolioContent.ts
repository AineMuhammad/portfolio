export const profile = {
  name: "Ain e Muhammad",
  brand: "AIN.E_OS",
  title: "Senior Software Engineer",
  tagline: "Full-Stack · AI & 3D Systems",
  email: "ainemuhammad903@gmail.com",
  phone: "+1 (518) 542-9640",
  location: "Albany, NY",
  coords: "Lat: 42.6526° N, Long: 73.7562° W",
  github: "https://github.com/ainemuhammad",
  linkedin: "https://www.linkedin.com/in/ain-e-muhammad-a32a401a0",
  portfolio: "https://ainemuhammad.github.io/portfolio",
  formspree: "https://formspree.io/f/xpwldode",
};

export const heroCopy = {
  status: "Status: System Online // Impact Phase",
  headlineBefore: "BUILDING THE",
  headlineGradient: "NEXT GENERATION",
  headlineAfter: "OF AI & 3D SYSTEMS",
  sub:
    "Full-stack platforms with React and Python, serverless AWS, generative AI and computer vision pipelines, and real-time 3D configurators—where precision meets scalable delivery.",
};

export const stats = [
  { value: "5+", label: "Years engineering" },
  { value: "3×", label: "Gen-AI pipeline output" },
  { value: "~35%", label: "Load-time win (high load)" },
  { value: "M.S.", label: "AI · Expected 2027" },
];

export const capabilities = [
  {
    key: "llm",
    span: "md:col-span-2",
    icon: "neurology",
    step: "01 / AI_ML",
    title: "ML & Generative AI",
    body: "PyTorch, TensorFlow, OpenCV, and CV preprocessing for production imagery; integration of generative models into 3D and asset pipelines.",
    tags: ["PyTorch", "OpenCV", "Deep Learning"],
    glass: true,
  },
  {
    key: "scale",
    span: "",
    icon: "cloud_done",
    step: "",
    title: "Scale",
    body: "AWS Lambda, API Gateway, S3, RDS/PostgreSQL, CloudFront—serverless systems built for concurrency and low latency.",
    tags: [],
    glass: false,
  },
  {
    key: "core",
    span: "",
    icon: "data_object",
    step: "",
    title: "Core",
    body: "React, TypeScript, Node.js, Material UI, SWR—streaming assets, lazy loading, and resilient APIs.",
    tags: [],
    glass: false,
  },
  {
    key: "viz",
    span: "",
    icon: "view_in_ar",
    step: "",
    title: "3D & WebGL",
    body: "Three.js, React Three Fiber, GLTF, LOD, GPU-friendly scenes for enterprise configurators.",
    tags: [],
    glass: false,
  },
];

export const missionBlurb = {
  title: "Mission-critical delivery",
  body:
    "I lead cross-functional delivery for enterprise 3D and AI products—requirements through demos—while mentoring engineers and tightening architecture, reviews, and CI/CD.",
  cta: "Scroll to chronology",
  href: "#mastery",
};

export const projectCategoryIds = [
  "all",
  "full-stack",
  "ai",
  "3d",
  "admin",
] as const;
export type ProjectCategoryId = (typeof projectCategoryIds)[number];
export type ProjectFacet = Exclude<ProjectCategoryId, "all">;

export const projects = [
  {
    id: "ems",
    layout: "large" as const,
    title: "EMPLOYEE_MGMT_SYS",
    subtitle: "Full-stack · CSV · RBAC",
    description:
      "Lead developer on a React, Node.js, and MySQL system with CSV user import, admin dashboards, and role-based access control.",
    tags: ["React", "Node.js", "MySQL"],
    categories: ["full-stack", "admin"] satisfies ProjectFacet[],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6GUXl6zrTV_Mss5Hef_D84Dnf7tAlgLWO5v25GpyTYtaQ1D0gfCMZTI4f2OCOEFvfajg1bVASoVxARcuQ80VdQGQsTCHHSRbv6Aw4UKpJA15xax623eXHfPckCD2qem-paJlqUFrIK3THxdb9NInkUXXPeLuw6t12WkGLca5oQlaKyPkKwSa1_C-VLFv-h34TngBTVdh49czTevJYd2pHpD2qC1atXpZOoKflqrevGVw7M35aYOe0mgFL1-Cw5Yf4uFUS8TJDIYY",
    imageAlt: "Abstract data visualization — dark grid with cyan and violet light",
  },
  {
    id: "health",
    layout: "tall" as const,
    title: "HEALTH_ADMIN_PORTAL",
    subtitle: "React · MUI · SWR",
    description:
      "Material UI and SWR portal with drag-and-drop ordering, analytics dashboards, full CRUD, and secure image uploads.",
    tags: ["Material UI", "SWR", "Analytics"],
    categories: ["full-stack", "admin", "ai", "3d"] satisfies ProjectFacet[],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMnjZZMG5L9d6W9n8izZmBANRg9BKTR_Iok5dnbn06pxLrlFiL5Z7nBri5vmoxwAX8Fcm5ZdezEg3zFnqwFcwCLyE0Iho4qEQxy13TydHBctO6x8gon5DWu78Q1YA-xA3kA1SFArGGPjz6r5TL7oL53hIYEh3XaHkgKe5YFll6f3Pq-y_1r8cBOiTAwr12JayRAaJ47ADFgbXODnRT8K4fHOUfxCPg3Uz7UL5JEs2ivkba1dlRbZLcxwBiUMd_2B3RITl03kw_7Ns",
    imageAlt: "Geometric grid with purple and blue lines",
  },
];

export type TimelineEntry = {
  id: string;
  title: string;
  org: string;
  period: string;
  side: "left" | "right";
  border: "primary" | "secondary";
  icon: string;
  summary: string;
  tags: string[];
  details?: string[];
};

export const timeline: TimelineEntry[] = [
  {
    id: "suny",
    title: "Graduate Grader",
    org: "SUNY Albany · Discrete Structures",
    period: "Jan 2026 – Present",
    side: "left",
    border: "primary",
    icon: "school",
    summary:
      "Grading and feedback for undergraduate Discrete Structures; course coordination with the instructor.",
    tags: ["Academic", "Discrete Math"],
    details: [
      "Assignments and exams with structured rubrics and constructive feedback.",
      "Coordination with faculty on common misconceptions and pacing.",
    ],
  },
  {
    id: "all3d-lead",
    title: "Technical Lead (AI & 3D)",
    org: "ALL3D · Remote",
    period: "Apr 2024 – Aug 2025",
    side: "right",
    border: "secondary",
    icon: "neurology",
    summary:
      "Led enterprise 3D configurators (Walmart, Rough Country, Telescope Casual); generative AI + 3D pipelines; React Three Fiber performance; team leadership.",
    tags: ["R3F", "Generative AI", "AWS"],
    details: [
      "Client-facing demos, requirements, and end-to-end delivery ownership.",
      "GPU-friendly R3F pipelines: GLTF compression, LOD, and load-time optimization.",
      "CV preprocessing (segmentation, depth, masking) for higher realism in generated imagery.",
      "Mentorship, architecture reviews, and generative model integration (Nano Banana + custom).",
    ],
  },
  {
    id: "all3d-sr",
    title: "Senior Software Engineer",
    org: "ALL3D · Remote",
    period: "Feb 2023 – Apr 2024",
    side: "left",
    border: "primary",
    icon: "cloud",
    summary:
      "Serverless AWS (Lambda, API Gateway, RDS PostgreSQL); React scalability; dynamic 3D rendering backends; validation and API stability.",
    tags: ["Lambda", "PostgreSQL", "React"],
    details: [
      "Lambda + API Gateway + RDS patterns for scale and lower latency.",
      "Asset streaming and lazy loading for ~35% initial load gains under load.",
      "Backend systems for camera, lighting, and scene configs for reusable 3D renders.",
      "Structured validation and error handling for fewer production incidents.",
    ],
  },
  {
    id: "all3d-se",
    title: "Software Engineer",
    org: "ALL3D · Remote",
    period: "May 2021 – Feb 2023",
    side: "right",
    border: "secondary",
    icon: "layers",
    summary:
      "Python Lambda APIs; React + cloud integrations; S3/CloudFront 3D delivery; automation and testing foundations.",
    tags: ["Python", "S3", "CloudFront"],
    details: [
      "Python Lambdas with strong data integrity as workloads grew.",
      "S3 + CloudFront tuning for ~25% lower 3D asset latency.",
      "Internal automation scripts to cut manual operational overhead.",
      "Early pytest/Jest foundations for safer deploys.",
    ],
  },
  {
    id: "sanje",
    title: "Frontend Developer",
    org: "Sanje Solutions",
    period: "Jun 2020 – Oct 2020",
    side: "left",
    border: "primary",
    icon: "web",
    summary:
      "React, HTML, CSS, Bootstrap; mockups to reusable components; performance and cross-browser UX.",
    tags: ["React", "Bootstrap"],
    details: [
      "Responsive layouts and reusable component patterns.",
      "Cross-browser compatibility and UI consistency passes.",
    ],
  },
  {
    id: "nust",
    title: "Research Engineer",
    org: "NUST · AI & Web Systems",
    period: "Jun 2019 – Oct 2019",
    side: "right",
    border: "secondary",
    icon: "hub",
    summary:
      "Web UIs for AI outputs; research collaboration; ML workflows with lightweight web systems.",
    tags: ["AI", "Research"],
    details: [
      "Visualization interfaces for model outputs and researcher workflows.",
      "Bridging academic requirements with pragmatic web implementations.",
    ],
  },
];

export const techGrid = [
  { category: "Language", name: "TYPESCRIPT" },
  { category: "Runtime", name: "NODE_JS" },
  { category: "ML", name: "PYTORCH" },
  { category: "Cloud", name: "AWS_LAMBDA" },
  { category: "Database", name: "POSTGRES" },
  { category: "Engine", name: "THREE_JS" },
];

export const coreArchitectures: Array<{
  span: string;
  title: string;
  icon?: string;
  accent: "primary" | "secondary";
  body?: string;
  list?: string[];
}> = [
  {
    span: "md:col-span-2",
    title: "Distributed & serverless",
    icon: "hub",
    accent: "primary",
    body: "Lambda, API Gateway, RDS, S3, CloudFront—structured validation, error handling, and high-concurrency patterns.",
  },
  {
    span: "",
    title: "AI & vision",
    accent: "secondary",
    list: ["TRANSFORMERS", "COMPUTER_VISION", "GEN_AI_PIPELINES"],
  },
  {
    span: "",
    title: "Infra & quality",
    accent: "primary",
    list: ["DOCKER", "CI_CD", "JEST_PYTEST"],
  },
];
