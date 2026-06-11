export const siteConfig = {
  github: "https://github.com/Manish-Salavkar",
  linkedin: "https://www.linkedin.com/in/manish-salavkar-6780b120b/",
  email: "manishsalavkar@gmail.com",
  resume: "https://drive.google.com/file/d/1P26fw8jiKThfIRPGZQrlneF4Mx0sQi1w/view?usp=sharing",
  be_final_project: "https://drive.google.com/drive/folders/1AfKn61sS5n1d1yxh48LJs0yhxC279LT7?usp=sharing",
  jobhub_link: "https://github.com/Manish-Salavkar/Django-DRF-Scrapy",
  apimonitor_link: "https://github.com/Manish-Salavkar/apimonitor-backend",
  cicd_dashboard_link: "https://github.com/Manish-Salavkar/SentinelOps"
};


export const projects = [
  {
    title: "API Monitoring Platform",
    description:
      "Datadog-inspired API monitoring platform for tracking service availability, latency and performance metrics. Features real-time monitoring, historical analytics, Redis-backed caching and integrated load testing using Locust.",
    tech: [
      "FastAPI",
      "React",
      "MySQL",
      "Redis",
      "Locust"
    ],
    github: siteConfig.apimonitor_link,
    demo: "#",
  },

  {
    title: "JobHub",
    description:
      "Full-stack job portal that aggregates job listings through automated web scraping. Includes role-based access control for recruiters and job seekers, advanced search and filtering, resume generation and Razorpay payment integration.",
    tech: [
      "Django",
      "DRF",
      "Scrapy",
      "PostgreSQL",
      "Jinja2",
      "Razorpay"
    ],
    github: siteConfig.jobhub_link,
    demo: "#",
  },

  {
    title: "SentinelOps CI Pipeline Dashboard",
    description:
      "Real-time DevOps dashboard that visualizes GitHub Actions workflow execution stage-by-stage. Integrates Trivy container scanning and SonarQube SAST analysis to surface security vulnerabilities, code quality metrics and deployment readiness in a unified interface.",
    tech: [
      "React",
      "FastAPI",
      "GitHub Actions",
      "Trivy",
      "SonarQube",
      "Docker"
    ],
    github: siteConfig.cicd_dashboard_link,
    demo: "#",
  }
];