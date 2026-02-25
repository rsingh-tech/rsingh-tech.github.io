/**
 * ============================================================
 * PORTFOLIO CONFIGURATION FILE
 * ============================================================
 * Edit this file to update your portfolio content.
 * No changes needed in index.html or other files.
 * ============================================================
 */

const PORTFOLIO_DATA = {

  // ── SITE META ────────────────────────────────────────────
  site: {
    title: "Ranjit Singh",
    basePath: "/Portfolio",   // Change if deploying to a different path
    favicon: "images/portfolio.png",
    logoImage: "images/portfolio.png",
    logoWidth: 200,
    logoHeight: 30,
    footerText: "© 2026 Ranjit Singh. All rights reserved.",
  },

  // ── HERO ─────────────────────────────────────────────────
  hero: {
    name: "Ranjit Singh",
    role: "Lead Software Engineer",
    photo: "images/Ranjit.jfif",
    photoAlt: "Ranjit Singh",
    subtitle: [
      "Passionate about building scalable, intelligent, and modern software solutions.",
      "Specializing in cloud-native applications, microservices architecture, and AI/ML integration."
    ],
    ctaButtons: [
      { label: "View My Work", href: "#projects", icon: "fa fa-arrow-right", style: "primary" },
      { label: "View Resume",  href: "assets/Resume_Ranjit.pdf", icon: "fa fa-file", style: "secondary", target: "_blank" }
    ],
    // Quick skill badges shown in the hero
    skillBadges: [
      "Java & Spring Boot",
      "Cloud & DevOps",
      "Python & AI/ML",
      "Microservices"
    ]
  },

  // ── ABOUT ────────────────────────────────────────────────
  about: {
    photo: "images/aboutme.jpg",
    photoAlt: "About Ranjit",
    paragraphs: [
      "I am results-oriented Full Stack Software Engineer with 12+ years of experience building end-to-end cloud-native applications, from responsive frontends to scalable microservices backends, RESTful APIs, and distributed systems.",
      "Expert in Java, Spring Boot, Python, modern web frameworks, and DevOps practices, with deep proficiency in AWS, Azure, and CI/CD automation. Hands-on experience in AI/ML integration to deliver intelligent, secure, and high-performance software solutions."
    ]
  },

  // ── SKILLS ───────────────────────────────────────────────
  skills: {
    sectionSubtitle: "Comprehensive experience in software development, security, and enterprise integrations",

    // Skill cards (up to 6 for color cycling)
    // faIcon = Font Awesome class string
    cards: [
      {
        faIcon: "fa-solid fa-rocket",
        title: "Product Development",
        items: [
          "End-to-end product development lifecycle",
          "Feature planning and implementation",
          "Scalable architecture design",
          "User-centric solution building"
        ]
      },
      {
        faIcon: "fa-solid fa-cloud",
        title: "Cloud Integration",
        items: [
          "Third-party cloud application integration",
          "API design and implementation",
          "Microservices architecture",
          "Cloud platform deployment"
        ]
      },
      {
        faIcon: "fa-solid fa-lock",
        title: "Security & Authentication",
        items: [
          "SAML and LDAP authentication protocols",
          "SSL/TLS certificate management",
          "HTTPS implementation and security",
          "Encryption and decryption algorithms"
        ]
      },
      {
        faIcon: "fa-solid fa-gears",
        title: "Business Process Management",
        items: [
          "Workflow automation and optimization",
          "Process analysis and improvement",
          "Cross-functional collaboration",
          "Enterprise solution implementation"
        ]
      },
      {
        faIcon: "fa-solid fa-laptop-code",
        title: "Development Tools",
        items: [
          "Version control with Git",
          "CI/CD pipeline implementation",
          "Docker containerization",
          "Database design and management"
        ]
      },
      {
        faIcon: "fa-solid fa-diagram-project",
        title: "System Architecture",
        items: [
          "RESTful API development",
          "System integration patterns",
          "Performance optimization",
          "Scalability and reliability"
        ]
      }
    ],

    // Technologies grouped by category
    techCategories: [
      {
        title: "Programming Languages",
        tags: ["Java", "Python", "SQL"]
      },
      {
        title: "Backend Development",
        tags: ["Spring Boot", "Spring Cloud", "Spring Security", "Hibernate", "JPA", "FastAPI", "Flask"]
      },
      {
        title: "Frontend Development",
        tags: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "ExtJS"]
      },
      {
        title: "Cloud & Infrastructure",
        tags: ["AWS EC2", "AWS S3", "AWS Lambda", "AWS RDS", "AWS Redshift", "Azure", "Docker", "Kubernetes"]
      },
      {
        title: "API & Integration",
        tags: ["REST APIs", "SOAP", "Apache Kafka", "RabbitMQ", "ActiveMQ", "OpenAPI"]
      },
      {
        title: "AI/ML Integration",
        tags: ["Machine Learning", "Model Deployment", "ML APIs", "Data Processing Pipelines", "Feature Engineering"]
      },
      {
        title: "Data Analytics",
        tags: ["PySpark", "Apache Spark", "Databricks"]
      },
      {
        title: "DevOps & Automation",
        tags: ["Jenkins", "GitLab CI/CD", "GitHub Actions", "Maven", "Gradle", "Terraform", "Bash"]
      },
      {
        title: "Databases",
        tags: ["PostgreSQL", "MySQL", "SQL Server", "Oracle", "MongoDB", "Redis", "Apache Cassandra"]
      },
      {
        title: "Security & Authentication",
        tags: ["OAuth 2.0", "OpenID Connect", "SAML 2.0", "LDAP", "JWT", "SSL/TLS"]
      },
      {
        title: "Enterprise Integration",
        tags: ["Data Transformation", "B2B Integration", "ETL/ELT"]
      }
    ],

    // Development methodologies  (faIcon = Font Awesome class string)
    methodologies: [
      { faIcon: "fa-solid fa-rotate",        label: "Agile Development" },
      { faIcon: "fa-solid fa-circle-check",  label: "Test-Driven Development" },
      { faIcon: "fa-solid fa-screwdriver-wrench", label: "DevOps Practices" },
      { faIcon: "fa-solid fa-chart-line",    label: "Continuous Integration" }
    ],

    // Professional / soft skills  (faIcon = Font Awesome class string)
    softSkills: [
      { faIcon: "fa-solid fa-lightbulb",       label: "Problem Solving" },
      { faIcon: "fa-solid fa-users",            label: "Team Leadership" },
      { faIcon: "fa-solid fa-comments",         label: "Communication" },
      { faIcon: "fa-solid fa-bullseye",         label: "Project Management" },
      { faIcon: "fa-solid fa-handshake",        label: "Collaboration" },
      { faIcon: "fa-solid fa-brain",            label: "Critical Thinking" },
      { faIcon: "fa-solid fa-bolt",             label: "Adaptability" },
      { faIcon: "fa-solid fa-book-open-reader", label: "Continuous Learning" }
    ]
  },

  // ── EMPLOYMENT ───────────────────────────────────────────
  employment: {
    sectionSubtitle: "My professional journey across innovative companies",
    companies: [
      {
        name: "FedEx Corp.",
        logo: "images/fedex.png",
        logoAlt: "FedEx Corp",
        duration: "Sep 2025 - Present",
        isCurrent: true,
        roles: [
          {
            title: "Operations Coordinator",
            description: "Monitoring workflows, streamlining procedures, and ensuring departmental coordination."
          }
        ]
      },
      {
        name: "Kumaran Systems",
        logo: "images/kumaran.jpg",
        logoAlt: "Kumaran Systems",
        duration: "Dec 2024 - Aug 2025",
        isCurrent: false,
        roles: [
          {
            title: "Sr. Tech Lead",
            description: "Owned and led end-to-end backend system design, driving scalable, secure, and high-performance solutions."
          }
        ]
      },
      {
        name: "Adeptia Inc.",
        logo: "images/adeptia.jpg",
        logoAlt: "Adeptia Inc",
        duration: "Jul 2013 - Sep 2024",
        isCurrent: false,
        roles: [
          {
            title: "Sr. Tech Lead",
            description: "Delivered an enterprise integration platform for Fortune 500 clients, enabling 40% faster deployments, high-performance microservices, no-code integrations, SOC 2 security, and ML automation."
          },
          {
            title: "Tech Lead",
            description: "Led a cloud-native integration platform for 500+ clients with 99.9% uptime, 50+ SaaS integrations, ML-based anomaly detection, and 3× scalable performance."
          },
          {
            title: "Senior Software Engineer",
            description: "Enhanced core enterprise frameworks for 1,000+ customers, improving performance 30%, cutting defects 40%, ensuring HIPAA/PCI-DSS compliance, and accelerating issue resolution 60% across 200+ deployments."
          },
          {
            title: "Software Engineer",
            description: "Delivered secure healthcare and tax solutions processing 60,000+ records annually, boosting efficiency, enabling $2M+ in claims, and ensuring 99.5%+ uptime."
          },
          {
            title: "Software Trainee",
            description: "Contributed to enterprise application design, development, and testing, collaborating on debugging, code reviews, performance optimization, and agile deployments."
          }
        ]
      }
    ]
  },

  // ── EDUCATION ────────────────────────────────────────────
  education: [
    {
      image: "images/ucalgary.jpg",
      imageAlt: "University of Calgary",
      degree: "Master of Engineering (MEng) in Software Engineering",
      institution: "University of Calgary, Alberta, Canada",
      description: "Advanced software development and distributed systems."
    },
    {
      image: "images/ptu.jpg",
      imageAlt: "Punjab Technical University",
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Punjab Technical University, Punjab, India",
      description: "Foundational computer science and application development."
    },
    {
      image: "images/vmmedu.webp",
      imageAlt: "VMM Education",
      degree: "Professional Training / Certification",
      institution: "VMM Education, Punjab, India",
      description: "Certificate course in Java & Spring framework"
    }
  ],

  // ── PROJECTS ─────────────────────────────────────────────
  projects: [
    {
      image: "images/ace.png",
      title: "Adeptia Connect Enterprise",
      description: "An advanced, on-premise integration platform designed for large-scale businesses that require robust, secure, and customizable data integration solutions.",
      tags: ["ExtJs", "Java"]
    },
    {
      image: "images/ac.png",
      title: "Adeptia Connect (Cloud)",
      description: "A modern, cloud-based integration platform designed to simplify and accelerate business-to-business (B2B) and application-to-application (A2A) integrations.",
      tags: ["ExtJs", "Java"]
    },
    {
      image: "images/ais.png",
      title: "Adeptia Integration Suite (AIS)",
      description: "A comprehensive middleware platform designed to enable seamless integration, automation, and management of data flows between diverse systems.",
      tags: ["ExtJs", "Java"]
    },
    {
      image: "images/intakeassist.png",
      title: "Intake Assist",
      description: "A healthcare solution designed to streamline the collection, processing, and management of patient data during the intake process.",
      tags: ["ExtJs", "Java"]
    },
    {
      image: "images/wotc.png",
      title: "Work Opportunity Tax Credit",
      description: "Helping employers claim tax credits when hiring individuals from certain target groups who face significant barriers to employment.",
      tags: ["JSP/Servlets", "Java"]
    },
    {
      image: "images/webscrapper.png",
      title: "Web Scrapper",
      description: "A complete, production-ready web scraper built with Python that can extract structured data from websites including job listings, product prices, and more.",
      tags: ["Python"]
    },
    {
      image: "images/mdconverter.png",
      title: "Markdown Converter",
      description: "A Python project for converting Markdown files to HTML.",
      tags: ["Python"]
    },
    {
      image: "images/llmcomparison.png",
      title: "LLM Comparator",
      description: "A React-based web application that allows you to compare responses from multiple Large Language Models (LLMs) side-by-side in real-time.",
      tags: ["React", "TypeScript", "Java (Spring AI)"]
    },
    {
      image: "images/mpcs.png",
      title: "Multi-PC Cloud Synchronization",
      description: "A solution to synchronize files and settings across multiple PCs using cloud storage. Implemented real-time updates, conflict resolution, and seamless access from different devices.",
      tags: ["Java", "JSP"]
    },
    {
      image: "images/oqap.png",
      title: "Online Quiz & Assessment Platform",
      description: "A web-based platform for quizzes and assessments. Included features like timer-based tests, automated scoring, and performance analytics.",
      tags: ["React", "TypeScript", "Java"]
    },
    {
      image: "images/spellcorrector.png",
      title: "Spell Corrector",
      description: "A simple Python spelling correction tool using TextBlob. It can correct individual words or full sentences to their most probable correct form.",
      tags: ["Python"]
    },
    {
      image: "images/esa.png",
      title: "Email Sender Application",
      description: "An automated email sending application to streamline communication. Implemented features like scheduled emails, bulk sending, and customizable templates.",
      tags: ["POP3/IMAP"]
    }
  ],

  // ── CONTACT ──────────────────────────────────────────────
  contact: {
    intro: "I'm always interested in hearing about new projects and opportunities. Whether it's a potential partnership, a job opportunity, or a simple \"hello,\" I'd love to hear from you.",
    links: [
      {
        href: "mailto:ranjit.singh.tech@gmail.com",
        icon: "fa-solid fa-envelope",
        label: "Email Me"
      },
      {
        href: "https://github.com/ranjit-engineering-lab",
        icon: "fa-brands fa-github",
        label: "GitHub",
        target: "_blank"
      },
      {
        href: "https://www.linkedin.com/in/ranjit-singh-tech/",
        icon: "fa-brands fa-linkedin",
        label: "LinkedIn",
        target: "_blank"
      }
    ],
    form: {
      web3formsKey: "e2429e64-a094-46ed-b82a-53afb581f32f"
    }
  }
};
