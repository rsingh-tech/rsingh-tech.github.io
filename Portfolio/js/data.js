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
    // Social links shown in the hero (icon buttons)
    socialLinks: [
      { href: "https://github.com/ranjit-engineering-lab", icon: "fa-brands fa-github", label: "GitHub", target: "_blank" },
      { href: "https://www.linkedin.com/in/ranjit-singh-tech/", icon: "fa-brands fa-linkedin", label: "LinkedIn", target: "_blank" },
      { href: "mailto:ranjit92singh@gmail.com", icon: "fa-solid fa-envelope", label: "Email" }
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

  // ── ABOUT PAGE ───────────────────────────────────────────
  aboutPage: {
    story: {
      label: "My Story",
      labelIcon: "fa-solid fa-user",
      title: "Who I Am",
      paragraphs: [
        "I'm <strong>Ranjit Singh</strong>, a Lead Software Engineer with over <strong>12 years of hands-on experience</strong> building enterprise-grade software from the ground up. My journey began in 2013 when I joined Adeptia Inc. as a Software Trainee, and over 11 years I grew into a Senior Tech Lead — architecting systems that now serve Fortune 500 companies across the globe.",
        "My passion lies at the intersection of <strong>cloud-native architecture, AI/ML integration, and developer experience</strong>. I love crafting solutions that are not just functional, but elegant — systems that scale effortlessly, fail gracefully, and empower the teams that maintain them.",
        "Beyond the code, I'm a lifelong learner. I am pursuing <strong>Master of Engineering in Software Engineering at the University of Calgary</strong>, deepening my expertise in distributed systems, machine learning, and modern software methodologies."
      ]
    },

    impact: {
      label: "By the Numbers",
      labelIcon: "fa-solid fa-chart-line",
      title: "Impact at a Glance",
      stats: [
        { icon: "fa-solid fa-calendar",      number: "12+",   label: "Years of Experience" },
        { icon: "fa-solid fa-building",      number: "200+",  label: "Enterprise Clients Served" },
        { icon: "fa-solid fa-rocket",        number: "40%",   label: "Faster Deployments Delivered" },
        { icon: "fa-solid fa-shield-halved", number: "99.9%", label: "Platform Uptime Achieved" },
        { icon: "fa-solid fa-code-branch",   number: "50+",   label: "SaaS Integrations Built" },
        { icon: "fa-solid fa-users",         number: "200+",  label: "Deployments Managed" }
      ]
    },

    values: {
      label: "Core Values",
      labelIcon: "fa-solid fa-heart",
      title: "What Drives Me",
      items: [
        { icon: "fa-solid fa-lightbulb",  title: "Engineering Excellence",       text: "I care deeply about code quality, clean architecture, and systems that stand the test of time. Technical debt is a choice and I prefer to invest in the right foundations." },
        { icon: "fa-solid fa-users",      title: "People First",                 text: "The best technology is built by empowered teams. I invest in mentoring junior engineers, fostering psychological safety, and creating environments where great ideas can flourish." },
        { icon: "fa-solid fa-brain",      title: "Continuous Learning",          text: "Technology evolves rapidly and so do I. From completing my MEng at UofC to earning AI certifications, I'm committed to staying at the frontier of what's possible." },
        { icon: "fa-solid fa-handshake",  title: "Impactful Collaboration",      text: "I bridge the gap between engineering, product, and business. Clear communication and shared context lead to outcomes that everyone is proud of." },
        { icon: "fa-solid fa-lock",       title: "Security & Reliability by Design", text: "Security isn't an afterthought — it's baked in from day one. I design systems that are HIPAA, PCI-DSS, and SOC 2 compliant without sacrificing developer experience." }
      ]
    },

    beyond: {
      label: "Beyond Code",
      labelIcon: "fa-solid fa-compass",
      title: "Life Outside the Terminal",
      paragraphs: [
        "When I'm not architecting distributed systems, you'll find me exploring the beautiful Rocky Mountains near Calgary, diving into the latest AI research papers, or experimenting with side projects that push the boundaries of what's possible with modern tooling.",
        "I'm deeply interested in the intersection of <strong>artificial intelligence and real-world problem solving</strong> particularly in healthcare, logistics, and developer productivity."
      ],
      interests: [
        { icon: "fa-solid fa-mountain",  label: "Hiking & Nature" },
        { icon: "fa-solid fa-robot",     label: "AI Research" },
        { icon: "fa-solid fa-code",      label: "Open Source" },
        { icon: "fa-solid fa-book",      label: "Technical Reading" },
        { icon: "fa-solid fa-chess",     label: "Strategic Games" },
        { icon: "fa-solid fa-camera",    label: "Photography" },
        { icon: "fa-solid fa-plane",     label: "Travel" },
        { icon: "fa-solid fa-mug-hot",   label: "Coffee Connoisseur" }
      ]
    },

    current: {
      label: "Right Now",
      labelIcon: "fa-solid fa-bolt",
      title: "What I'm Up To",
      items: [
        { icon: "fa-solid fa-briefcase",        title: "Operations Coordinator @ FedEx Corp.",  text: "Monitoring workflows, streamlining operational procedures, and ensuring seamless departmental coordination at one of the world's largest logistics companies." },
        { icon: "fa-solid fa-graduation-cap",   title: "MEng Graduate",          text: "Just pursuing my Master of Engineering in Software Engineering at the University of Calgary (2025–2027), specializing in distributed systems and AI/ML." },
        { icon: "fa-solid fa-flask",            title: "Building Side Projects",                text: "Actively developing an LLM Comparator, web scrapers, and cloud synchronization tools - always tinkering at the edge of what modern tech can do." },
        { icon: "fa-solid fa-magnifying-glass", title: "Open to Senior Engineering Roles",      text: "Actively exploring senior/lead software engineering opportunities in Canada - particularly in cloud-native, AI/ML, or platform engineering domains." }
      ]
    },

    cta: {
      title: "Let's Build Something Great",
      subtitle: "I'm always open to interesting conversations, collaborations, and opportunities.",
      links: [
        { href: "mailto:ranjit92singh@gmail.com",              icon: "fa-solid fa-envelope",    label: "Email Me" },
        { href: "https://www.linkedin.com/in/ranjit-singh-tech/",  icon: "fa-brands fa-linkedin",   label: "LinkedIn",  target: "_blank" },
        { href: "https://github.com/ranjit-engineering-lab",        icon: "fa-brands fa-github",     label: "GitHub",    target: "_blank" },
        { href: "assets/Resume_Ranjit.pdf",                         icon: "fa-solid fa-file",        label: "Resume",    target: "_blank" }
      ]
    }
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

    
    timeline: {
      ticks: [
        { label: "2013", left: 0  },
        { label: "2014", left: 10  },
        { label: ".  .  .  .  .  .",  left: 25 },
        { label: "2023", left: 38 },
        { label: "2024", left: 55 },
        { label: "2025", left: 84 },
        { label: "2026", left: 92 },
		{ label: "Present", left: 98 }
      ]
    },

    // List oldest → newest  (left → right on desktop bar)
    companies: [
      {
        name: "Adeptia Inc.",
        logo: "images/adeptia.jpg",
        logoAlt: "Adeptia Inc",
        duration: "Jul 2013 - Sep 2024",
        isCurrent: false,
        barLeft:  0,
        barWidth: 38.5,
        colFlex:  40,
        roles: [
          { title: "Sr. Tech Lead",          description: "Delivered an enterprise integration platform for Fortune 500 clients, enabling 40% faster deployments, high-performance microservices, no-code integrations, SOC 2 security, and ML automation." },
          { title: "Tech Lead",              description: "Led a cloud-native integration platform for 500+ clients with 99.9% uptime, 50+ SaaS integrations, ML-based anomaly detection, and 3x scalable performance." },
          { title: "Senior Software Engineer",description: "Enhanced core enterprise frameworks for 1,000+ customers, improving performance 30%, cutting defects 40%, ensuring HIPAA/PCI-DSS compliance, and accelerating issue resolution 60% across 200+ deployments." },
          { title: "Software Engineer",      description: "Delivered secure healthcare and tax solutions processing 60,000+ records annually, boosting efficiency, enabling $2M+ in claims, and ensuring 99.5%+ uptime." },
          { title: "Software Trainee",       description: "Contributed to enterprise application design, development, and testing, collaborating on debugging, code reviews, performance optimization, and agile deployments." }
        ]
      },
      {
        name: "Kumaran Systems",
        logo: "images/kumaran.jpg",
        logoAlt: "Kumaran Systems",
        duration: "Dec 2024 - Aug 2025",
        isCurrent: false,
        barLeft:  38.5,
        barWidth: 32,
        colFlex:  30,
        roles: [
          { title: "Sr. Tech Lead", description: "Owned and led end-to-end backend system design, driving scalable, secure, and high-performance solutions." }
        ]
      },
      {
        name: "FedEx Corp.",
        logo: "images/fedex.png",
        logoAlt: "FedEx Corp",
        duration: "Sep 2025 - Present",
        isCurrent: true,
        barLeft:  70.5,
        barWidth: 30,
        colFlex:  30,
        roles: [
          { title: "Operations Coordinator", description: "Monitoring workflows, streamlining procedures, and ensuring departmental coordination." }
        ]
      }
    ]
  },

  // ── EDUCATION ────────────────────────────────────────────
  education: {

    // Formal academic degrees
    formal: [
      {
        image: "images/ucalgary.jpg",
        imageAlt: "University of Calgary",
        degree: "Master of Engineering (MEng) in Software Engineering",
        institution: "University of Calgary, Alberta, Canada",
        duration: "Sep 2025 - Apr 2027",
        description: "Advanced software development and distributed systems."
      },
      {
        image: "images/ptu.jpg",
        imageAlt: "Punjab Technical University",
        degree: "Bachelor of Technology in Computer Science Engineering",
        institution: "Punjab Technical University, Punjab, India",
        duration: "Sep 2009 - April 2013",
        description: "Foundational computer science and application development."
      }
    ],

    // Certification providers — each can have multiple courses
    certifications: [
      {
        provider: "Anthropic Education",
        image: "images/ccia.svg",
        imageAlt: "Anthropic",
        courses: [
          {
            title: "Claude Code in Action",
            description: "Integrated Claude Code into dev workflows; built custom commands, hooks, and MCP server extensions; implemented AI-powered GitHub automation using the Claude Code SDK.",
            verifyUrl: "https://verify.skilljar.com/c/t82jayyu3x5i"
          },
		      {
            title: "Claude 101",
            description: "Learned to effectively use Claude for workplace productivity; covered projects, artifacts, tool integrations, enterprise search, and role-based use cases.",
            verifyUrl: "https://verify.skilljar.com/c/6vrcct7eu5ot"
          }
        ]
      },
	  {
        provider: "Anthropic Education",
        image: "images/ccia.svg",
        imageAlt: "Anthropic",
        courses: [
          {
            title: "Introduction to Model Context Protocol",
            description: "Built MCP servers & clients in Python; mastered tools, resources, and prompts to integrate Claude AI with external services.",
            verifyUrl: "https://verify.skilljar.com/c/g9x26osac3i"
          },
		      {
            title: "Model Context Protocol: Advanced Topics",
            description: "Mastered production MCP patterns: sampling, notifications, roots-based file access, Stdio & StreamableHTTP transports, and scalable deployment strategies.",
            verifyUrl: "https://verify.skilljar.com/c/wmi3t7kshvku"
          } 
        ]
      },
      {
        provider: "VMM Education",
        image: "images/vmmedu.webp",
        imageAlt: "VMM Education",
        courses: [
          {
            title: "Java & Spring Framework",
            description: "Professional training in Java fundamentals and the Spring ecosystem."
          }
        ]
      }
    ]

  },

  // ── PROJECTS ─────────────────────────────────────────────
  projects: [
    {
      image: "images/coad.jpg",
      title: "CloudOps AI Dashboard",
      description: "Real-time cloud infrastructure monitoring with ML anomaly detection and natural language querying across AWS/Azure.",
      tags: ["Python", "FastAPI", "React", "AWS CloudWatch", "TensorFlow", "PostgreSQL", "Docker"]
    },
    {
      image: "images/sag.jpg",
      title: "SmartAPI Gateway",
      description: "Self-documenting API gateway that auto-generates OpenAPI specs and suggests optimizations via LLM traffic analysis.",
      tags: ["Java", "Spring Boot", "Spring Cloud Gateway", "OpenAI API", "Redis", "Docker", "Kubernetes"]
    },
    {
      image: "images/dto.jpg",
      title: "Distributed Task Orchestrator",
      description: "Microservices workflow engine with visual DAG builder, fault-tolerant retries, and real-time execution monitoring.",
      tags: ["Java", "Spring Boot", "Apache Kafka", "Redis", "PostgreSQL", "Docker", "Kubernetes"]
    },
    {
      image: "images/icrb.jpg",
      title: "Intelligent Code Review Bot",
      description: "GitHub App for automated PR reviews flagging security issues, performance anti-patterns, and style violations.",
      tags: ["Python", "FastAPI", "GitHub Actions", "OpenAI API", "LangChain", "AWS Lambda", "Docker"]
    },
    {
      image: "images/mtssp.PNG",
      title: "Multi-Tenant SaaS Starter Platform",
      description: "Production-ready SaaS boilerplate with tenant isolation, JWT auth, Stripe billing, and one-click cloud deployment.",
      tags: ["Java", "Spring Boot", "React", "PostgreSQL", "Stripe API", "AWS", "Terraform", "Docker"]
    },
    {
      image: "images/mpas.jpg",
      title: "ML Pipeline as a Service",
      description: "End-to-end MLOps platform — upload dataset, train, and get a deployed REST endpoint automatically.",
      tags: ["Python", "FastAPI", "AWS SageMaker", "Docker", "React", "PostgreSQL"]
    },
    {
      image: "images/rtesp.jpg",
      title: "Real-Time Event Streaming Platform",
      description: "Kafka-based streaming system with live visualization of throughput, consumer lag, and topic health.",
      tags: ["Java", "Spring Boot", "Apache Kafka", "React", "PostgreSQL", "Docker"]
    },
    {
      image: "images/aprjm.jpg",
      title: "AI-Powered Resume & Job Matcher",
      description: "Parses resumes with NLP, extracts skills, and ranks job matches with intelligent scoring.",
      tags: ["Java", "Spring Boot", "Python", "spaCy", "React", "PostgreSQL", "Docker"]
    },
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
    }
    /*,
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
    }*/
  ],

  // ── CONTACT ──────────────────────────────────────────────
  contact: {
    intro: "I'm always interested in hearing about new projects and opportunities. Whether it's a potential partnership, a job opportunity, or a simple \"hello,\" I'd love to hear from you.",
    links: [
      {
        href: "mailto:ranjit92singh@gmail.com",
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
