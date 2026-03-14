export const projects = [
  {
    id: 1,
    title: "Reaaya Medical Platform",
    description:
      "Full-featured medical platform for managing clinics, doctors, and appointments with a scalable admin dashboard.",
    category: "health",
    images: [
      "/images/projects/snail-store.png",
      "/images/projects/reayaa.png",
      "/images/projects/snail-store.png",
    ],
    tags: [
      "Web Design",
      "Web Development",
      "Health & Care",
      "Dashboard System",
      "Technical SEO",
    ],
    deliverables: ["Figma Prototype", "Source Code", "Documentation"],
    techStack: ["TypeScript", "React", "Express.js", "MongoDB", "Node.js"],
    slug: "reaaya-medical-platform",
  },
  {
    id: 2,
    title: "Snail Store E-Commerce",
    description:
      "Modern e-commerce platform with product management, secure checkout, and performance-first architecture.",
    category: "ecommerce",
    images: ["/images/projects/snail-store.png"],
    tags: ["E-Commerce", "UI/UX", "Web Development"],
    deliverables: ["Figma Prototype", "Source Code"],
    techStack: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    title: "Najm Agency Website",
    description:
      "High-performance marketing website for Najm digital agency with advanced animations and SEO optimization.",
    category: "websites",
    images: ["/images/projects/snail-store.png"],
    tags: ["Marketing Website", "Performance", "SEO"],
    deliverables: ["Figma Prototype", "Source Code"],
    techStack: ["TypeScript", "React"],
  },
  {
    id: 4,
    title: "Clinic Management Dashboard",
    description:
      "Admin dashboard for managing patients, staff, and payments with analytics and reporting tools.",
    category: "dashboard",
    images: ["/images/projects/snail-store.png"],
    tags: ["Dashboard", "Health", "System Design"],
    deliverables: ["Source Code", "Documentation"],
    techStack: ["React", "Express.js", "MongoDB"],
  },
  {
    id: 5,
    title: "Real Estate Listing Platform",
    description:
      "Property listing system with advanced filtering, maps integration, and lead management.",
    category: "websites",
    images: ["/images/projects/snail-store.png"],
    tags: ["Real Estate", "Web App"],
    deliverables: ["Figma Prototype", "Source Code"],
    techStack: ["React", "Node.js"],
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "E-learning platform with course management, quizzes, and progress tracking.",
    category: "education",
    images: ["/images/projects/snail-store.png"],
    tags: ["Education", "Web Platform"],
    deliverables: ["Source Code", "Documentation"],
    techStack: ["TypeScript", "React", "MongoDB"],
  },
  {
    id: 7,
    title: "Restaurant Ordering System",
    description:
      "Full-stack food ordering platform with real-time order tracking and admin dashboard.",
    category: "food",
    images: ["/images/projects/snail-store.png"],
    tags: ["Food & Beverage", "E-Commerce"],
    deliverables: ["Source Code"],
    techStack: ["React", "Express.js"],
  },
  {
    id: 8,
    title: "Portfolio Showcase Platform",
    description:
      "Customizable portfolio system for creatives with drag-and-drop layout builder.",
    category: "creative",
    images: ["/images/projects/snail-store.png"],
    tags: ["Portfolio", "Creative"],
    deliverables: ["Figma Prototype", "Source Code"],
    techStack: ["React"],
  },
  {
    id: 9,
    title: "Fitness Tracking App",
    description:
      "Web app for tracking workouts, nutrition, and progress with analytics.",
    category: "health",
    images: ["/images/projects/snail-store.png"],
    tags: ["Fitness", "Web App"],
    deliverables: ["Source Code"],
    techStack: ["TypeScript", "React", "Node.js"],
  },
  {
    id: 10,
    title: "SaaS Subscription Platform",
    description:
      "Subscription-based SaaS product with billing integration and role-based access control.",
    category: "saas",
    images: ["/images/projects/snail-store.png"],
    tags: ["SaaS", "Subscription"],
    deliverables: ["Source Code", "Documentation"],
    techStack: ["React", "MongoDB", "Express.js"],
  },

  // 11–20 (shortened but structured consistently)

  ...Array.from({ length: 10 }, (_, i) => ({
    id: 11 + i,
    title: `Custom Web Platform ${i + 1}`,
    description:
      "Scalable full-stack web application built with performance and maintainability in mind.",
    category: "websites",
    images: ["/images/projects/snail-store.png"],
    tags: ["Web App", "Full Stack"],
    deliverables: ["Source Code"],
    techStack: ["React", "Node.js"],
  })),
];