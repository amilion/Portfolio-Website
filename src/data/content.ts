// ─── Types ──────────────────────────────────────────────────────────────────

export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  github: string
}

export interface ResearchEntry {
  role: string
  org: string
  location: string
  period: string
  description: string
  repo?: string
}

export interface TeachingEntry {
  role: string
  org: string
  period: string
  courses: string[]
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface EducationEntry {
  degree: string
  institution: string
  period: string
  gpa?: string
}

// ─── Content ─────────────────────────────────────────────────────────────────

const content = {
  meta: {
    title: 'Amirreza Ahadzadeh — Software Engineer',
    description:
      'Final-year CS student at the University of Tehran (GPA 19.0/20) and software engineer specialising in Python, ML, and full-stack REST development.',
  },

  person: {
    name: 'Amirreza Ahadzadeh',
    title: 'Software Engineer',
    subtitle: 'Computer Science · Final Year',
    tagline: 'Building systems from the ground up — ML, backend, and everything in between.',
    location: 'Frankfurt, Germany',
    email: 'amirrezaahadzadeh@yahoo.com',
    phone: '+49 1520 248 0245',
    github: 'https://github.com/amilion',
    // ↓ Add your LinkedIn profile URL here when ready
    linkedin: 'https://www.linkedin.com/in/amirreza-ahadzadeh-99a972215/',
    resumeUrl: '/Amirreza_Ahadzadeh_Resume.pdf',
  },

  about: `Final-year Computer Science student at the University of Tehran (GPA 19.0/20) and software engineer who builds systems from the ground up. Strong in Python, C++, and C with solid algorithmic foundations. I enjoy implementing machine-learning models and algorithms from scratch, building full-stack REST applications, and doing computational-neuroscience research on spiking neural networks.`,

  skills: [
    {
      label: 'Languages',
      items: ['Python (advanced)', 'C++', 'C', 'SQL', 'TypeScript', 'JavaScript'],
    },
    {
      label: 'Backend & APIs',
      items: ['Django', 'Django REST Framework', 'REST API design', 'JWT auth', 'SQLAlchemy'],
    },
    {
      label: 'Frontend',
      items: ['React', 'TypeScript', 'React Hook Form', 'Axios'],
    },
    {
      label: 'ML & Scientific',
      items: ['PyTorch', 'NumPy', 'Spiking Neural Networks', 'CoNeX', 'PyMonNTorch'],
    },
    {
      label: 'Databases & Tools',
      items: ['PostgreSQL', 'Git', 'GitHub Actions (CI/CD)', 'pytest', 'Swagger/OpenAPI', 'Linux'],
    },
    {
      label: 'Foundations',
      items: [
        'Data structures & algorithms',
        'Dynamical systems',
        'Data mining',
        'Probability',
        'Linear algebra',
      ],
    },
  ] as SkillGroup[],

  projects: [
    {
      id: 'world-models',
      title: 'Communicating World Models — from Scratch',
      description:
        'Multi-agent world-model RL agents built from scratch: a VAE encodes observations into a latent space and a recurrent state-space model (RSSM) learns environment dynamics for latent "imagination" (Dreamer-style). Actor–critic learning with λ-returns and symlog/symexp value transforms, plus a broadcast communication module and shared critic so agents exchange messages and predict the best next state.',
      tech: ['Python', 'PyTorch'],
      github: 'https://github.com/amilion/Communicating-World-Models-from-Scratch',
    },
    {
      id: 'xgboost',
      title: 'XGBoost — from Scratch',
      description:
        'Gradient-boosted regression trees implemented from scratch in NumPy, following the XGBoost paper (Chen & Guestrin), exposing a scikit-learn-compatible GradientBoostingRegressor API.',
      tech: ['Python', 'NumPy'],
      github: 'https://github.com/amilion/XGBoosting_from_scratch',
    },
    {
      id: 'ecommerce',
      title: 'Full-Stack E-Commerce REST Platform',
      description:
        'Modular RESTful e-commerce backend spanning 15+ apps (products, carts, orders, discounts, shops, comments, and more). Stateless JWT auth with token blacklisting and custom permissions; PostgreSQL with hierarchical categories and query filtering; Swagger/OpenAPI docs; GitHub Actions CI running migrations and tests; typed React + TypeScript frontend.',
      tech: ['Django REST Framework', 'React', 'PostgreSQL', 'TypeScript'],
      github: 'https://github.com/amilion/rest-ecommerce',
    },
    {
      id: 'telegram-bot',
      title: 'Print-Job Telegram Bot',
      description:
        'Production Telegram bot for a real client connecting customers with a seller: customers submit orders, the seller prices each one, and the bot handles payment-receipt confirmation and completion notifications. Built with python-telegram-bot and a modular architecture (conversation/command handlers, permission decorators) over SQLAlchemy ORM models on PostgreSQL.',
      tech: ['Python', 'SQLAlchemy', 'PostgreSQL'],
      github: 'https://github.com/amilion/print-job-telegram-python-bot',
    },
    {
      id: 'ca3-memory',
      title: 'Hippocampal CA3 Short-Term Memory',
      description:
        'A spiking-neural-network model of hippocampal CA3 that performs pattern completion (recalling full patterns from partial cues), validating biological plausibility through oscillatory network dynamics.',
      tech: ['Python', 'PyTorch', 'CoNeX', 'PyMonNTorch'],
      github: 'https://github.com/amilion/Hippocampal-CA3-short-term-memory',
    },
  ] as Project[],

  research: [
    {
      role: 'Research Assistant',
      org: "Prof. Dr. Jochen Triesch's Cognition Lab, Goethe University",
      location: 'Frankfurt, Germany',
      period: 'Apr 2026 – Present',
      description:
        'Goethe Research Experience Program (GREP). Investigating mechanisms for introducing controlled self-disorganization into recurrent spiking neural network (rSNN) architectures.',
    },
    {
      role: 'Research Assistant',
      org: 'Computational Neuroscience Research Lab (CNRL), University of Tehran',
      location: 'Tehran, Iran',
      period: 'Jul 2024 – Present',
      description:
        "Developed the lab's first spiking Cortical Column for object recognition (R-STDP feature binding, dynamic reference frames) with bio-plausible plasticity rules.",
      repo: 'https://github.com/a2l5t8/CNRL-Cortical-Column',
    },
  ] as ResearchEntry[],

  teaching: [
    {
      role: 'Teaching Assistant',
      org: 'University of Tehran',
      period: 'Feb 2024 – Present',
      courses: ['Algorithm Design & Analysis', 'Data Structures & Algorithms', 'Calculus I & II'],
    },
  ] as TeachingEntry[],

  education: [
    {
      degree: 'B.Sc. Computer Science',
      institution: 'University of Tehran',
      period: '2022 – 2026 (expected)',
      gpa: '19.0 / 20',
    },
  ] as EducationEntry[],

  honors: [
    'Top 0.3% in the Iranian national university entrance exam — full undergraduate tuition waiver.',
    'Ranked top student for 7 consecutive semesters.',
  ],
}

export default content
