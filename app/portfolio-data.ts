export const portfolioData = {
  // 1. GLOBAL
  firstName: "Aniket",
  lastName: "Agarwal",
  title: "Cybersecurity Analyst",
  resumeUrl: "/resume.pdf", 
  
  // 2. HERO SECTION
  hero: {
    summary: "Leveraging a 'Code-to-Cloud' mindset to automate defense workflows and reduce time-to-remediate (MTTR). Bridging the gap between theoretical risk frameworks and hands-on operational reality using Python, KQL, and Azure Sentinel.",
    availability: "Open to Work in Canada"
  },

  skills: [
    {
      category: "Security Operations",
      items: ["Splunk", "Azure Sentinel", "CrowdStrike", "Wireshark", "Nessus", "Burp Suite", "Triage"]
    },
    {
      category: "Automation & Code",
      items: ["Python", "Bash Scripting", "PowerShell", "Terraform", "Ansible", "Git"]
    },
    {
      category: "Cloud & Infrastructure",
      items: ["AWS IAM", "Azure AD", "Linux (Kali/Ubuntu)", "Docker", "Kubernetes", "Windows Server"]
    },
    {
      category: "Governance & Compliance",
      items: ["MITRE ATT&CK", "NIST CSF", "GDPR", "ISO 27001", "Risk Management", "Incident Response"]
    }
  ],

  certifications: [
    {
      name: "Microsoft Certified: Security Operations Analyst",
      code: "SC-200",
      issuer: "Microsoft",
      year: "June 2025",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/AniketAgarwal-5235/72F7ED3DD183443E?sharingId=CB17133D9C472169",
      color: "border-blue-500/50",
      logo: "/logos/sc-200-logo.png"
    },
    {
      name: "CompTIA Security+",
      code: "SY0-701",
      issuer: "CompTIA",
      year: "May 2025",
      link: "https://www.credly.com/badges/8b5a2771-6779-4673-8805-f14bc74fcb01",
      color: "border-red-500/50",
      logo: "/logos/security+-logo.png"
    },
    {
      name: "Certified in Cybersecurity (CC)",
      code: "ISC2-CC",
      issuer: "ISC2",
      year: "Dec 2024",
      link: "https://www.credly.com/badges/86d4fee3-f974-4bc1-a85a-efc0ba9ac64c",
      color: "border-emerald-500/50",
      logo: "/logos/isc2-cc-logo.png"
    },
  ],

  // 3. EXPERIENCE & EDUCATION
  experience: [
    {
      id: 1,
      year: "Aug 2025 - Dec 2025",
      title: "Cybersecurity Analyst Intern",
      company: "Log (N) Pacific",
      desc: "Spearheaded endpoint hardening (DISA STIG) using PowerShell, reducing organizational risk by 20%. Engineered high-fidelity KQL detections for Azure Sentinel, automating incident response workflows and validating cloud defense strategies against live attack simulations.",
      skills: ["Azure Sentinel", "KQL", "PowerShell", "DISA STIG", "Threat Hunting"],
    },
    {
      id: 2,
      year: "Sept 2023 - May 2025",
      title: "M.Eng Info. Systems Security",
      company: "Concordia University",
      desc: "Specialized in advanced threat detection and cloud infrastructure defense. Gained deep proficiency in cryptographic protocols, malware defense mechanisms, and quantitative risk analysis.",
      skills: ["Cloud Security", "Malware Analysis", "Cryptography", "Risk Assessment"],
    },
    {
      id: 3,
      year: "June 2019 - May 2023",
      title: "B.Tech Computer Science",
      company: "SRMIST",
      desc: "Built a strong technical foundation in software engineering lifecycles (Agile) and network architecture. Gained hands-on experience in low-level programming and operating system security.",
      skills: ["Python", "C++", "Network Architecture", "Agile", "Linux"],
    },
  ],

  // 4. PROJECTS (Bento Grid)
  projects: [
  // 1. HERO PROJECT (AI & Automation)
  {
    title: "AI-Driven SOC Agent",
    desc: "Autonomous threat hunting engine integration Azure Sentinel & OpenAI. Reduces query time by 90%.",
    tags: ["Python", "Azure Sentinel", "LLM/OpenAI", "KQL"],
    link: "https://youtu.be/EDFFm9pE9ek", 
    github: "https://github.com/Aaniket09/AI-SOC-Agent",
    size: "md:col-span-2 md:row-span-2", 
    gradient: "from-blue-900 to-slate-900"
  },
  
  // 2. TECHNICAL PROJECT (Malware/Reverse Engineering)
  {
    title: "Malicious DLL Detector",
    desc: "Custom Ghidra plugin to automate detection of DLL injection patterns in volatile memory dumps.",
    tags: ["Python", "Ghidra", "Reverse Eng.", "Malware"],
    link: "https://drive.google.com/file/d/1hvS___usliNbzUD7m0sIoYmckMUIIZMC/view",
    github: "https://github.com/Aaniket09/DLL-detection-using-python-and-ghidra",
    size: "col-span-1", 
    gradient: "from-purple-900 to-slate-900"
  },

  // 3. OPS PROJECT (SOAR/Splunk)
  {
    title: "Auto-IR SOC Pipeline",
    desc: "End-to-end incident response pipeline. Splunk alerts trigger n8n workflows for instant triage.",
    tags: ["Splunk", "n8n", "SOAR", "Mitre ATT&CK"],
    link: "",
    github: "https://github.com/Aaniket09/enterprise-security-lab",
    size: "col-span-1", 
    gradient: "from-emerald-900 to-slate-900"
  },

  // 4. NETWORK/INFRA PROJECT (Cloud Security)
  {
    title: "Cloud IDS Defense",
    desc: "Hardened OpenStack cloud env with Snort IDS. Defended against live TCP SYN floods (90% catch rate).",
    tags: ["Snort", "OpenStack", "Network Sec", "Linux"],
    link: "https://drive.google.com/file/d/1snH-uJR1j-PUZD_caAGvRKQsBybwXamR/view",
    github: "https://github.com/Aaniket09/Openstack_Snort",
    size: "md:col-span-2", 
    gradient: "from-indigo-900 to-slate-900"
  },
],

community: [
  {
    event: "Athack 2025",
    role: "Challenge Designer",
    date: "March 2025",
    location: "Montreal, QC",
    desc: "Designed custom CTF challenges focused on AD exploitation.",
    type: "contributor",
    image: "/athack.jpg" 
  },
  {
    event: "NorthSec 2025",
    role: "Attendee",
    date: "May 2025",
    location: "Montreal, QC",
    desc: "Participated in North America's largest applied security event.",
    type: "attendee",
    image: "/community/northsec.jpeg" 
  },
  {
    event: "Hackfest 2025",
    role: "Attendee",
    date: "Nov 2025",
    location: "Quebec City, QC",
    desc: "Workshops on physical security and malware analysis.",
    type: "attendee",
    image: "/community/hackfest.jpg" 
  }
],

  // 5. BLOG SECTION
  blog: [
    {
      id: 1,
      title: "Beyond the Hype: Building a Reliable, Full-Cycle AI SOC Agent",
      date: "Dec 19, 2025",
      category: "Threat Automation",
      link: "https://medium.com/@aniketagarwal57/beyond-the-hype-building-a-reliable-full-cycle-ai-soc-agent-12aaf9dfb004",
      readTime: "9 min read"
    },
  ],

  // 6. CONTACT & SOCIALS
  socials: {
    github: "https://github.com/Aaniket09",
    linkedin: "https://www.linkedin.com/in/aniket-agarwal-0920",
    medium: "https://medium.com/@aniketagarwal57",
    email: "aniketagarwal57@gmail.com"
  }
};