export const portfolioData = {
  name: "Akaliza Marie Racia",
  shortName: "Akaliza Racia",
  title: "Full-Stack Software Engineer",
  roles: ["React", "Spring Boot", "Django", "PostgreSQL"],
  email: "akalizaracia27@gmail.com",
  phone: "+250 787 320 423",
  location: "Kigali, Rwanda",
  bio: "Final-year Software Engineering student building full-stack web applications, from database schema and secure REST APIs to polished, localized user interfaces.",

  about: [
    "I'm a final-year Software Engineering student at AUCA and a full-stack developer with hands-on experience across React 18/Vite front ends and Spring Boot + PostgreSQL back ends, alongside growing proficiency in Python and Django.",
    "I'm comfortable owning a feature end-to-end: designing the schema, building REST APIs with JWT authentication and Spring Security, and shipping a polished, localized interface. I've worked inside a government-scale codebase at the Rwanda Revenue Authority, and I bring a security mindset from VAPT and OWASP-focused coursework."
  ],

  stats: [
    { value: "4+", label: "Full-stack projects" },
    { value: "2", label: "Industry placements" },
    { value: "2026", label: "BSc graduation" }
  ],

  highlights: [
    { icon: "fas fa-layer-group", title: "End-to-end delivery", text: "Schema, API and UI owned as one feature." },
    { icon: "fas fa-shield-halved", title: "Security minded", text: "JWT, Spring Security, OWASP and VAPT." },
    { icon: "fas fa-language", title: "Localized products", text: "Kinyarwanda and English interfaces." }
  ],

  skills: [
    { category: "Frontend", icon: "fas fa-display", items: ["React 18", "Vite", "JavaScript", "Vue 2/3 reactivity", "HTML", "CSS"] },
    { category: "Backend", icon: "fas fa-server", items: ["Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "JDBC", "Maven", "Python", "Django REST Framework", "Node.js / Express"] },
    { category: "Databases", icon: "fas fa-database", items: ["PostgreSQL", "Relational schema design", "ER modelling"] },
    { category: "Auth & Security", icon: "fas fa-lock", items: ["JWT authentication", "VAPT", "Secure SDLC", "OWASP", "nmap", "gobuster", "hydra"] },
    { category: "Tools & Deployment", icon: "fas fa-rocket", items: ["Git / GitHub", "Vercel", "Railway", "Render", "UML / ER / swimlane diagrams"] },
    { category: "Other", icon: "fas fa-users", items: ["Technical writing", "Documentation", "Kinyarwanda/English localization", "Remote collaboration"] }
  ],

  experience: [
    {
      id: 1,
      position: "Django Trainee",
      company: "SOLVIT AFRICA",
      duration: "2026 · 3 months",
      points: [
        "Built Django REST Framework apps (accounts, inventory, menu, orders) to UI/UX specs, with multi-tenant data scoping per restaurant.",
        "Implemented JWT, PIN-based and email-verified login across owner, staff and super-admin roles, with lockouts and password-reset flows.",
        "Debugged production issues on a live Render/Postgres deployment: email delivery, PIN expiration and API mismatches, verified against real test data."
      ],
      tags: ["Python", "Django REST", "JWT", "PostgreSQL", "Render"]
    },
    {
      id: 2,
      position: "Software Development Intern",
      company: "Rwanda Revenue Authority (RRA)",
      duration: "2026",
      points: [
        "Contributed to the SIIDS enterprise web application, including the Tax Professional Management System (TPMS) module.",
        "Worked within a large, government-scale codebase and a structured development process."
      ],
      tags: ["Enterprise web", "Government systems"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "SmartServe",
      subtitle: "Service-provider marketplace · Capstone",
      year: "2025 – 2026",
      description: "Full-stack marketplace connecting clients with service providers, with an AI-based matching and ranking engine that scores proximity, ratings and availability. Includes OTP-verified provider approval, Gmail SMTP integration, calendar booking with real-time slots, Kinyarwanda localization and an admin payment routing layer.",
      technologies: ["React", "Spring Boot", "PostgreSQL", "JWT", "SMTP"],
      link: "https://github.com/Racia22/SmartServe_fullstack",
      image: "/portfolio-images/smartserve.png",
      imagePosition: "center top",
      featured: true
    },
    {
      id: 2,
      title: "ThesisTrack",
      subtitle: "Thesis supervision platform",
      year: "2026",
      description: "Thesis supervision tracker with four roles: students register theses and book prototype reviews, coordinators assign supervisors, supervisors and students exchange messages and documents, and admins get programme-wide analytics with stage history tracking. Also developed into a full business case with a business plan and pitch.",
      technologies: ["Spring Boot 3", "Java 21", "React 19", "Vite", "Tailwind CSS", "PostgreSQL", "Flyway"],
      link: "https://github.com/Racia22/Thesis_Track_System",
      image: "/portfolio-images/thesis.png",
      imagePosition: "left center"
    },
    {
      id: 3,
      title: "Blood Donation",
      subtitle: "Donor–recipient platform",
      description: "Platform connecting blood donors with recipients.",
      technologies: ["HTML", "Java", "Database"],
      link: "https://github.com/Racia22/BloodDonation",
      image: "/portfolio-images/blood.jpg"
    },
    {
      id: 4,
      title: "Equipment Borrowing System",
      subtitle: "Loan management",
      description: "System for managing and tracking equipment loans.",
      technologies: ["HTML", "Java", "Database"],
      link: "https://github.com/Racia22/equi-borrow",
      image: "/portfolio-images/camera.jpg"
    }
  ],

  education: [
    {
      id: 1,
      institution: "Adventist University of Central Africa (AUCA)",
      degree: "BSc in Software Engineering",
      year: "Expected 2026",
      details: "Final-year student. Coursework: Object-Oriented Programming, Web Security & Session Management, Database Systems (PostgreSQL), API Engineering & JSON Specifications, Software Security (VAPT, Secure SDLC, OWASP)."
    }
  ],

  social: {
    github: "https://github.com/Racia22",
    linkedin: "https://www.linkedin.com/in/akaliza-racia-a5a22a351/",
    email: "akalizaracia27@gmail.com"
  }
};
