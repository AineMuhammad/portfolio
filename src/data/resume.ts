export const profile = {
  name: 'Ain e Muhammad',
  title: 'Senior Software Engineer — Full-Stack / Web',
  location: 'Albany, NY',
  email: 'ainemuhammad903@gmail.com',
  phone: '+1 (518) 542-9640',
  links: {
    linkedin: 'https://linkedin.com/in/ain-m',
    github: 'https://github.com/AineMuhammad',
  },
  summary:
    'Senior Software Engineer (6 years) specializing in full-stack web development — React.js, Node.js, TypeScript, and Python — with serverless AWS architectures (Lambda, API Gateway, RDS/PostgreSQL) supporting high-concurrency, low-latency products. Experienced across the full engineering lifecycle: CRUD-heavy application architecture, automated testing, containerized CI/CD pipelines, and service-boundary/system design decisions. Additional depth in real-time 3D/WebGL front-ends and generative 3D pipelines. Currently pursuing an M.S. in Computer Science (AI) at SUNY Albany.',
}

export type Role = {
  org: string
  location: string
  title: string
  range: string
  bullets: string[]
  sub?: { title: string; range: string; bullets: string[] }[]
}

export const experience: Role[] = [
  {
    org: 'State University of New York (SUNY), Albany, NY',
    location: 'Albany, NY',
    title: 'Graduate Ambassador',
    range: 'Aug 2026 – May 2027',
    bullets: [
      'Serve as a student representative for the Computer Science graduate program, guiding prospective and admitted students through curriculum, research tracks, and the application process.',
      'Lead campus tours, orientation sessions, and information events; mentor domestic and international students to improve onboarding and first-semester engagement.',
    ],
  },
  {
    org: 'Sony Immersive Music Studio',
    location: 'Remote',
    title: '3D Creative Engineering Intern',
    range: 'June 2026 – Aug 2026',
    bullets: [
      'Architected an end-to-end generative pipeline reconstructing immersive 3D scenes from 2D images, combining image segmentation, diffusion-based generation, and 2D-to-3D asset models.',
      'Built AI-assisted tooling and workflows (Claude Code, Blender MCP integrations, Python automation) to accelerate environment creation and content iteration.',
      'Developed Blender-to-Unreal virtual production workflows integrating AI-generated assets with automated scene assembly and rendering.',
      'Built a React-based web dashboard to configure, monitor, and control the generative 3D pipeline end-to-end.',
    ],
  },
  {
    org: 'HADI (ChatILM.ai)',
    location: 'Remote',
    title: 'RAG Evaluation & Benchmark Engineer',
    range: 'Jun 2026 – Aug 2026',
    bullets: [
      'Designed and built an evaluation framework for a production RAG chatbot, defining measurable criteria across retrieval accuracy, citation correctness, and hallucination resistance.',
      'Built automated data pipelines to pull and structure ~6,200 source records and ~36,500 reference records from external APIs and unstructured PDFs.',
      'Developed a Python-based scoring harness to run benchmark suites against a live LLM API, with configurable checks for required-fact coverage, forbidden-claim detection, and citation presence.',
      'Partnered directly with the CTO and technical stakeholders to scope evaluation methodology.',
    ],
  },
  {
    org: 'State University of New York (SUNY), Albany, NY',
    location: 'Albany, NY',
    title: 'Graduate Grader',
    range: 'Jan 2026 – May 2026',
    bullets: [
      'Graded assignments and exams for Discrete Structures, providing feedback on mathematical reasoning and problem-solving.',
      'Supported course administration and surfaced student challenges to improve curriculum delivery.',
    ],
  },
  {
    org: 'ALL3D',
    location: 'San Francisco, USA (Remote)',
    title: 'Software Engineer → Senior Software Engineer → Lead Software Engineer',
    range: 'May 2021 – Aug 2025',
    bullets: [],
    sub: [
      {
        title: 'Lead Software Engineer',
        range: 'Apr 2024 – Aug 2025',
        bullets: [
          'Led delivery of 3D product configurators for enterprise clients (Walmart, Rough Country, Telescope Casual Furniture) — cutting delivery iteration cycles by ~20%.',
          'Directed front-end architecture across multiple configurator products, standardizing CRUD-based data flows.',
          'Owned key architecture and service-boundary decisions across the platform’s serverless backend.',
          'Containerized services with Docker and built GitHub Actions CI/CD pipelines for automated testing and deployment.',
          'Built automated end-to-end and unit test suites (Cypress, Playwright, Pytest) covering core CRUD workflows.',
          'Managed a cross-functional team of engineers and 3D artists, improving delivery throughput.',
          'Reviewed and approved backend API and database schema designs proposed by team members.',
        ],
      },
      {
        title: 'Senior Software Engineer',
        range: 'Feb 2023 – Apr 2024',
        bullets: [
          'Architected AWS Lambda and API Gateway systems with RDS (PostgreSQL), improving scalability and reducing backend latency.',
          'Developed React systems with asset streaming and lazy loading, improving initial load performance by ~35% under high concurrency.',
          'Built and maintained full CRUD interfaces for internal admin tools managing 3D asset metadata, product configurations, and pricing rules.',
          'Designed database schemas and wrote optimized SQL queries in PostgreSQL to support growing data volume.',
          'Implemented authentication and authorization flows and applied API security best practices.',
        ],
      },
      {
        title: 'Software Engineer',
        range: 'May 2021 – Feb 2023',
        bullets: [
          'Built AWS Lambda APIs in Python with strong data integrity and scalability.',
          'Optimized 3D asset delivery via S3 and CloudFront, reducing asset load latency by ~25%.',
          'Designed and implemented RESTful API endpoints in Python, handling request validation, error handling, and data serialization.',
        ],
      },
    ],
  },
  {
    org: 'Sanje Solutions',
    location: '',
    title: 'Frontend Developer',
    range: 'June 2020 – October 2020',
    bullets: [
      'Built responsive interfaces using React, HTML, CSS, and Bootstrap; translated design mockups into reusable, production-ready components with cross-browser compatibility.',
    ],
  },
  {
    org: 'NUST (AI Systems & Web Systems)',
    location: '',
    title: 'Research Engineer',
    range: 'June 2019 – October 2019',
    bullets: [
      'Developed web interfaces to visualize model outputs and enable interaction with AI systems; translated research problems into technical implementations.',
    ],
  },
]

export type Project = {
  id: 'time-capsule' | 'guestbook' | 'story-weaving' | 'leaf-lab' | 'chatilm' | 'togetherlist' | 'moviematch'
  name: string
  stack: string
  description: string
  bullets: string[]
  repo?: string
  live?: string
}

export const projects: Project[] = [
  {
    id: 'togetherlist',
    name: 'TogetherList',
    stack: 'Next.js, React, TypeScript, PostgreSQL, Prisma, Auth.js, Tailwind CSS',
    description:
      'A shared grocery list and weekly meal planner for households, where checking off an item on one phone updates everyone else’s within seconds and planned meals can generate the shopping list.',
    bullets: [
      'Auth.js sign-in (Google OAuth + email/password) with multi-household support via join codes',
      'SWR-polled live sync with optimistic updates and rollback on server rejection',
      'Ingredient merging that combines quantities across planned meals; Jest unit and Playwright e2e tests, CI on GitHub Actions',
    ],
    repo: 'https://github.com/AineMuhammad/TogetherList',
    live: 'https://togetherlist-one.vercel.app',
  },
  {
    id: 'moviematch',
    name: 'MovieMatch',
    stack: 'Next.js, TypeScript, PostgreSQL, Prisma, TMDB API, Framer Motion',
    description:
      'A group movie picker: everyone in a room swipes yes/no on the same stack of movies, and the app announces a match with an embedded trailer the instant everyone likes the same one.',
    bullets: [
      'Drag-to-swipe cards with Framer Motion and live room / vote state via SWR polling',
      'Shareable 6-character room codes with genre and region filters; Vercel Cron job expires rooms after 24 hours',
      'Google OAuth + email/password auth, Jest unit and Playwright e2e tests',
    ],
    repo: 'https://github.com/AineMuhammad/moviematch',
    live: 'https://moviematch-sooty.vercel.app',
  },
  {
    id: 'time-capsule',
    name: 'Time Capsule',
    stack: 'Next.js, PostgreSQL, Vercel Cron, Resend',
    description:
      'A full-stack app letting users write encrypted messages to their future selves, automatically unlocked and emailed on a chosen date via a scheduled serverless job.',
    bullets: [
      'AES-256 encryption at rest',
      'Per-IP rate limiting',
      'Input validation on message and date submission',
    ],
    repo: 'https://github.com/AineMuhammad/time-capsule',
    live: 'https://timecapsule-seven-eta.vercel.app',
  },
  {
    id: 'guestbook',
    name: 'Self-Painting Guestbook',
    stack: 'Next.js, PostgreSQL, Server-Side SVG Rendering',
    description:
      'A shared guestbook where each visitor’s message deterministically generates a server-rendered SVG element, composited into one continuously evolving generative artwork viewed by every visitor.',
    bullets: [
      'Spam / profanity filtering',
      'Per-IP rate limiting',
      'Cached SVG rendering to keep the page fast as entries scale',
    ],
    repo: 'https://github.com/AineMuhammad/self-painting-guestbook',
  },
  {
    id: 'story-weaving',
    name: 'Story Weaving',
    stack: 'Next.js, PostgreSQL, Server-Sent Events',
    description:
      'A collaborative storytelling app where visitors each add one sentence to a shared, live-updating story, using Server-Sent Events for real-time updates and transactional writes to guarantee correct ordering under concurrent submissions.',
    bullets: [
      'Per-IP rate limiting and spam filtering',
      'Automatic chapter rollover once a story reaches its length cap',
    ],
    repo: 'https://github.com/AineMuhammad/story-weaving',
    live: 'https://story-weaving.vercel.app',
  },
  {
    id: 'leaf-lab',
    name: 'Leaf Lab',
    stack: 'React, TypeScript, Vite, Tailwind CSS, Framer Motion',
    description:
      'An interactive educational web app teaching kids photosynthesis through a hands-on simulation.',
    bullets: ['Automated GitHub Actions deployment pipeline to GitHub Pages'],
    repo: 'https://github.com/AineMuhammad/leaf-lab',
    live: 'https://ainemuhammad.github.io/leaf-lab/',
  },
  {
    id: 'chatilm',
    name: 'ChatILM.ai RAG Benchmark Suite',
    stack: 'Python',
    description:
      'An end-to-end benchmark suite for a RAG chatbot covering retrieval accuracy, citation quality, multi-step reasoning, and hallucination resistance across 10 evaluation categories.',
    bullets: [
      'Data pipelines parsing 700+ pages of unstructured PDFs into citation-traceable, machine-readable records',
      'Python scoring harness with automated pass/fail/needs-review verdicts',
    ],
  },
]

export type SkillGroup = {
  category: string
  skills: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Web & Full-Stack',
    skills: ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Node.js', 'Material UI', 'SWR', 'HTML5', 'CSS3'],
  },
  {
    category: 'Testing & QA',
    skills: ['Jest', 'Cypress', 'Playwright', 'Pytest', 'Unit & E2E test design'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS Lambda', 'API Gateway', 'S3', 'RDS', 'EC2', 'CloudFront', 'Docker', 'Kubernetes basics', 'GitHub Actions CI/CD'],
  },
  {
    category: 'Architecture',
    skills: ['System design', 'Microservices', 'Service-boundary design', 'Serverless architecture'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL (RDS)', 'MySQL', 'SQL', 'Schema design', 'Query optimization'],
  },
  {
    category: 'AI & Machine Learning',
    skills: ['Python (Advanced)', 'PyTorch', 'TensorFlow', 'OpenCV', 'Computer Vision', 'Deep Learning', 'Pandas', 'NumPy', 'RAG pipeline auditing'],
  },
  {
    category: '3D Visualization',
    skills: ['Three.js', 'React Three Fiber', 'WebGL', 'Unreal Engine', 'Blender', 'GLTF compression', 'Shader programming'],
  },
]

export type Education = {
  school: string
  degree: string
  range: string
  detail: string
}

export const education: Education[] = [
  {
    school: 'State University of New York (SUNY), Albany, NY',
    degree: 'M.S. in Computer Science (AI)',
    range: 'Expected May 2027',
    detail: 'Relevant coursework: Machine Learning, Computer Vision, Advanced Algorithms and Data Structures.',
  },
  {
    school: 'National University of Sciences and Technology (NUST)',
    degree: 'B.S. in Software Engineering',
    range: 'July 2021',
    detail:
      'Relevant coursework: Artificial Intelligence, Data Warehousing and Data Mining, Data Structures and Algorithms, Database Systems, Software Engineering, Probability and Statistics, OOP, Web Engineering, Software Architecture.',
  },
]
