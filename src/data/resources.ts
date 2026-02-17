import type { Resource } from "@/types";

export const resources: Resource[] = [
  {
    id: "res-1",
    title: "Databricks Academy",
    url: "https://www.databricks.com/learn/training/home",
    description:
      "Official Databricks training platform with free and paid courses covering the entire Databricks ecosystem.",
    type: "course",
    phaseIds: ["phase-3", "phase-4", "phase-5", "phase-6"],
    tags: ["databricks", "official", "certification"],
    isFree: true,
  },
  {
    id: "res-2",
    title: "Databricks AI Security Fundamentals",
    url: "https://www.databricks.com/training/catalog/databricks-ai-security-fundamentals-3406",
    description:
      "Official Databricks course on securing AI systems within the Data Intelligence Platform.",
    type: "course",
    phaseIds: ["phase-5"],
    tags: ["databricks", "ai-security", "official"],
    isFree: true,
  },
  {
    id: "res-3",
    title: "CompTIA Security+ Study Guide",
    url: "https://www.comptia.org/certifications/security",
    description:
      "Industry-standard cybersecurity certification covering foundational security concepts, threats, and best practices.",
    type: "course",
    phaseIds: ["phase-2"],
    tags: ["certification", "cybersecurity", "foundational"],
    isFree: false,
  },
  {
    id: "res-4",
    title: "OWASP Top 10",
    url: "https://owasp.org/www-project-top-ten/",
    description:
      "The definitive list of the most critical web application security risks, updated regularly by the security community.",
    type: "documentation",
    phaseIds: ["phase-2", "phase-5"],
    tags: ["owasp", "web-security", "vulnerabilities"],
    isFree: true,
  },
  {
    id: "res-5",
    title: "OWASP Top 10 for LLM Applications",
    url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
    description:
      "Security risks specific to Large Language Model applications including prompt injection, data leakage, and more.",
    type: "documentation",
    phaseIds: ["phase-5"],
    tags: ["owasp", "llm", "ai-security"],
    isFree: true,
  },
  {
    id: "res-6",
    title: "MITRE ATLAS",
    url: "https://atlas.mitre.org/",
    description:
      "Adversarial Threat Landscape for AI Systems. A knowledge base of adversary tactics and techniques against ML systems.",
    type: "documentation",
    phaseIds: ["phase-5"],
    tags: ["mitre", "threat-modeling", "ai-security"],
    isFree: true,
  },
  {
    id: "res-7",
    title: "Khan Academy - Computers and the Internet",
    url: "https://www.khanacademy.org/computing/computers-and-internet",
    description:
      "Free interactive lessons on how computers and the internet work, perfect for building foundational knowledge.",
    type: "course",
    phaseIds: ["phase-1"],
    tags: ["networking", "fundamentals", "beginner"],
    isFree: true,
  },
  {
    id: "res-8",
    title: "NetworkChuck YouTube Channel",
    url: "https://www.youtube.com/@NetworkChuck",
    description:
      "Engaging video tutorials on networking, cybersecurity, Linux, and cloud computing for beginners.",
    type: "video",
    phaseIds: ["phase-1", "phase-2"],
    tags: ["networking", "cybersecurity", "beginner", "video"],
    isFree: true,
  },
  {
    id: "res-9",
    title: "Python Official Tutorial",
    url: "https://docs.python.org/3/tutorial/",
    description:
      "The official Python tutorial - thorough, well-written, and always up to date with the latest Python version.",
    type: "documentation",
    phaseIds: ["phase-1"],
    tags: ["python", "programming", "official"],
    isFree: true,
  },
  {
    id: "res-10",
    title: "Cloudflare Learning Center",
    url: "https://www.cloudflare.com/learning/",
    description:
      "Clear, visual explanations of networking, DNS, security, and web concepts from Cloudflare.",
    type: "article",
    phaseIds: ["phase-1", "phase-2"],
    tags: ["networking", "dns", "security", "web"],
    isFree: true,
  },
  {
    id: "res-11",
    title: "AWS Free Tier",
    url: "https://aws.amazon.com/free/",
    description:
      "Hands-on cloud experience with 12 months of free tier access to core AWS services.",
    type: "tool",
    phaseIds: ["phase-1", "phase-4"],
    tags: ["cloud", "aws", "hands-on"],
    isFree: true,
  },
  {
    id: "res-12",
    title: "Databricks Community Edition",
    url: "https://community.cloud.databricks.com/",
    description:
      "Free Databricks environment for learning. Practice with notebooks, Spark, and basic platform features.",
    type: "tool",
    phaseIds: ["phase-4", "phase-5"],
    tags: ["databricks", "hands-on", "spark"],
    isFree: true,
  },
  {
    id: "res-13",
    title: "TryHackMe",
    url: "https://tryhackme.com/",
    description:
      "Gamified cybersecurity training platform with hands-on labs and learning paths from beginner to advanced.",
    type: "course",
    phaseIds: ["phase-2"],
    tags: ["cybersecurity", "hands-on", "labs", "gamified"],
    isFree: true,
  },
  {
    id: "res-14",
    title: "Hack The Box",
    url: "https://www.hackthebox.com/",
    description:
      "Cybersecurity training platform with real-world challenges, CTFs, and skill assessments.",
    type: "course",
    phaseIds: ["phase-2", "phase-5"],
    tags: ["cybersecurity", "ctf", "hands-on", "advanced"],
    isFree: true,
  },
  {
    id: "res-15",
    title: "Cisco Networking Academy",
    url: "https://www.netacad.com/",
    description:
      "Free networking courses from Cisco covering everything from basics to advanced routing and security.",
    type: "course",
    phaseIds: ["phase-1"],
    tags: ["networking", "cisco", "certification"],
    isFree: true,
  },
];
