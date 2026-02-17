import type { Phase } from "@/types";

export const phase2: Phase = {
  id: "phase-2",
  slug: "cybersecurity-fundamentals",
  title: "Cybersecurity Fundamentals",
  description:
    "Build a strong foundation in cybersecurity principles, common threats, identity management, cryptography, and network security.",
  weekRange: "Weeks 5-10",
  estimatedHours: 60,
  icon: "Shield",
  color: "emerald",
  modules: [
    // ==================== MODULE 1: SECURITY PRINCIPLES ====================
    {
      id: "phase-2-module-1",
      slug: "security-principles",
      phaseId: "phase-2",
      title: "Security Principles",
      description:
        "Understand the CIA triad, defense in depth, least privilege, and other foundational security principles.",
      estimatedHours: 12,
      labExercise: {
        title: "Security Policy Review Lab",
        objective:
          "Analyze a sample organization's security posture using the CIA triad and identify gaps in their defenses.",
        instructions: [
          "Read the provided scenario: a small company stores customer data in a single cloud database with one admin account shared by the team.",
          "Identify every CIA triad violation in the scenario (list at least 5).",
          "For each violation, classify it as a Confidentiality, Integrity, or Availability issue.",
          "Propose a specific fix for each violation using principles from this module (least privilege, defense in depth, separation of duties).",
          "Write a 1-page security policy recommendation document for the company.",
          "Bonus: Map each issue to a risk rating (High / Medium / Low) based on likelihood and impact.",
        ],
        deliverable:
          "A document listing each security gap, its CIA category, risk rating, and your recommended fix.",
        estimatedMinutes: 60,
      },
      lessons: [
        {
          id: "phase-2-module-1-lesson-1",
          slug: "the-cia-triad",
          moduleId: "phase-2-module-1",
          title: "The CIA Triad",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "Introduction",
                type: "text",
                body: "The CIA triad is the most fundamental framework in information security. Every security decision, control, and policy traces back to one or more of these three pillars:\n\n- **Confidentiality** -- ensuring data is accessible only to those authorized to see it\n- **Integrity** -- ensuring data is accurate, complete, and unaltered by unauthorized parties\n- **Availability** -- ensuring systems and data are accessible when needed\n\nThese three goals often compete with each other. Maximum confidentiality (locking everything down) can hurt availability. Maximum availability (no restrictions) can hurt confidentiality. Security professionals balance these trade-offs daily.",
              },
              {
                heading: "Confidentiality",
                type: "text",
                body: "Confidentiality means protecting information from unauthorized disclosure. Methods include:\n\n**Encryption:** Scrambling data so only authorized parties with the key can read it. Protects data at rest (stored) and in transit (moving over networks).\n\n**Access Controls:** Restricting who can view data based on roles, permissions, and need-to-know.\n\n**Data Classification:** Labeling data by sensitivity (Public, Internal, Confidential, Restricted) so controls match the risk level.\n\n**Physical Controls:** Locked server rooms, clean desk policies, screen privacy filters.\n\n**Real-world example:** A hospital encrypts patient records and restricts access to treating physicians. A billing clerk can see charges but not diagnoses. This is confidentiality in action.",
              },
              {
                heading: "Integrity",
                type: "text",
                body: "Integrity ensures data remains accurate, consistent, and trustworthy. Methods include:\n\n**Hashing:** Generating a unique fingerprint (hash) of data. If a single bit changes, the hash changes completely, revealing tampering.\n\n**Digital Signatures:** Combining hashing with encryption to verify both the identity of the sender and that the message was not altered.\n\n**Version Control:** Tracking changes so you can detect and revert unauthorized modifications (like git for code).\n\n**Input Validation:** Ensuring data entered into systems meets expected formats, preventing injection attacks.\n\n**Audit Logs:** Recording who changed what and when, creating accountability.\n\n**Real-world example:** A bank uses checksums to verify that wire transfer amounts are not altered in transit. If a $1,000 transfer somehow becomes $100,000, integrity checks catch the discrepancy.",
              },
              {
                heading: "Availability",
                type: "text",
                body: "Availability ensures authorized users can access systems and data when needed. Methods include:\n\n**Redundancy:** Having backup systems, servers, and data centers. If one fails, another takes over.\n\n**Load Balancing:** Distributing traffic across multiple servers so no single server is overwhelmed.\n\n**Backups:** Regular copies of data stored separately so data can be restored after loss.\n\n**DDoS Protection:** Filtering malicious traffic designed to overwhelm and crash your systems.\n\n**Disaster Recovery (DR):** Plans and infrastructure to restore operations after a major incident.\n\n**Real-world example:** Netflix runs across multiple AWS availability zones. If an entire data center goes offline, your movie keeps streaming from another zone.",
              },
              {
                heading: "The CIA Triad in AI Security",
                type: "note",
                body: "The CIA triad directly applies to AI/ML systems:\n\n- **Confidentiality:** Protecting training data, model weights, and inference results from unauthorized access. Model theft is a real threat.\n- **Integrity:** Ensuring training data is not poisoned and model outputs are not tampered with. Data poisoning attacks corrupt model integrity.\n- **Availability:** Keeping model serving endpoints online and responsive. Adversarial attacks can cause models to fail or produce wrong outputs.\n\nAs an AI security professional, you will apply these principles to every engagement.",
              },
            ],
            keyConcepts: [
              {
                term: "CIA Triad",
                definition:
                  "The three pillars of information security: Confidentiality, Integrity, and Availability.",
              },
              {
                term: "Confidentiality",
                definition:
                  "Protecting information from unauthorized disclosure.",
              },
              {
                term: "Integrity",
                definition:
                  "Ensuring data remains accurate, complete, and unaltered by unauthorized parties.",
              },
              {
                term: "Availability",
                definition:
                  "Ensuring systems and data are accessible when authorized users need them.",
              },
              {
                term: "Data Classification",
                definition:
                  "Labeling data by sensitivity level (Public, Internal, Confidential, Restricted).",
              },
            ],
            externalResources: [
              {
                title: "CIA Triad Explained - NIST",
                url: "https://csrc.nist.gov/glossary/term/confidentiality",
                type: "documentation",
                isFree: true,
                description:
                  "Official NIST definitions of security concepts.",
              },
              {
                title:
                  "Cybersecurity Fundamentals - IBM Technology",
                url: "https://www.youtube.com/watch?v=inWWhr5tnEA",
                type: "video",
                isFree: true,
                description:
                  "Clear overview of cybersecurity fundamentals including the CIA triad.",
              },
            ],
          },
          quiz: {
            id: "quiz-2-1-1",
            lessonId: "phase-2-module-1-lesson-1",
            questions: [
              {
                id: "q2-1-1-1",
                question:
                  "Which CIA triad pillar is violated when a hacker changes a bank transfer amount?",
                options: [
                  "Confidentiality",
                  "Integrity",
                  "Availability",
                  "All three",
                ],
                correctIndex: 1,
                explanation:
                  "Altering data without authorization is an integrity violation. The data is no longer accurate and trustworthy.",
              },
              {
                id: "q2-1-1-2",
                question:
                  "A DDoS attack that takes a website offline primarily targets which pillar?",
                options: [
                  "Confidentiality",
                  "Integrity",
                  "Availability",
                  "Authentication",
                ],
                correctIndex: 2,
                explanation:
                  "DDoS attacks overwhelm servers to make services unavailable to legitimate users.",
              },
              {
                id: "q2-1-1-3",
                question:
                  "Encrypting patient records at a hospital primarily protects which pillar?",
                options: [
                  "Confidentiality",
                  "Integrity",
                  "Availability",
                  "Non-repudiation",
                ],
                correctIndex: 0,
                explanation:
                  "Encryption prevents unauthorized disclosure, protecting confidentiality.",
              },
            ],
          },
        },
        {
          id: "phase-2-module-1-lesson-2",
          slug: "defense-in-depth",
          moduleId: "phase-2-module-1",
          title: "Defense in Depth & Security Models",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "Defense in Depth",
                type: "text",
                body: "Defense in Depth is a strategy that layers multiple security controls so that if one fails, others still protect the asset. Think of a medieval castle: it has a moat, outer walls, inner walls, towers, and a keep. An attacker must bypass every layer.\n\nIn cybersecurity, layers include:\n\n1. **Physical:** Locked doors, security cameras, badge access\n2. **Network:** Firewalls, IDS/IPS, network segmentation\n3. **Host:** Antivirus, OS hardening, patch management\n4. **Application:** Input validation, authentication, secure coding\n5. **Data:** Encryption, access controls, backups\n6. **Policy:** Security policies, training, incident response plans\n\nNo single layer is perfect. Defense in Depth ensures that a failure at one layer does not mean total compromise.",
              },
              {
                heading: "Least Privilege",
                type: "text",
                body: "The **Principle of Least Privilege** states that every user, process, and system should have only the minimum permissions necessary to perform its function.\n\n**Examples:**\n- A web server should not run as root -- it only needs permission to serve files\n- A data analyst should have read access to relevant databases, not admin access to all servers\n- An ML model endpoint should only access the specific storage bucket containing its model files\n\n**Why it matters:** If a least-privilege account is compromised, the attacker can only do what that account could do. If a root account is compromised, the attacker owns everything.",
              },
              {
                heading: "Separation of Duties",
                type: "text",
                body: "**Separation of Duties** ensures no single person has enough access to commit fraud or cause major damage alone. Critical tasks require multiple people.\n\n**Examples:**\n- The person who writes code should not be the person who deploys it to production\n- The person who requests a wire transfer should not be the person who approves it\n- In AI: the person who trains a model should not be the sole person who validates and deploys it\n\n**Dual Control:** Some actions require two people simultaneously (e.g., launching nuclear missiles, accessing certain vault keys).",
              },
              {
                heading: "Zero Trust Architecture",
                type: "text",
                body: "Traditional security uses a \"castle and moat\" model: everything inside the network is trusted. **Zero Trust** eliminates implicit trust entirely.\n\n**Core principles of Zero Trust:**\n- **Never trust, always verify** -- every request is authenticated and authorized regardless of origin\n- **Assume breach** -- design systems as if attackers are already inside\n- **Least privilege access** -- grant minimum necessary permissions, just in time\n- **Micro-segmentation** -- divide the network into tiny zones, each with its own access controls\n- **Continuous validation** -- don't just check identity at login; re-verify throughout the session\n\nZero Trust is the modern standard and is especially critical for cloud and AI workloads where the traditional network perimeter does not exist.",
              },
              {
                heading: "Zero Trust and AI",
                type: "note",
                body: "Zero Trust is particularly important for AI systems because:\n\n- ML models are deployed across distributed cloud infrastructure with no clear perimeter\n- Data pipelines pull from many sources, each needing individual verification\n- Model APIs are exposed endpoints that need continuous authentication\n- Databricks implements Zero Trust through Unity Catalog, workspace isolation, and fine-grained access controls\n\nYou will apply Zero Trust thinking to every AI security engagement.",
              },
            ],
            keyConcepts: [
              {
                term: "Defense in Depth",
                definition:
                  "Layering multiple security controls so the failure of one does not compromise the whole system.",
              },
              {
                term: "Least Privilege",
                definition:
                  "Granting only the minimum permissions necessary for a user or process to function.",
              },
              {
                term: "Separation of Duties",
                definition:
                  "Dividing critical tasks among multiple people to prevent fraud or error.",
              },
              {
                term: "Zero Trust",
                definition:
                  "Security model that eliminates implicit trust -- every request is verified regardless of origin.",
              },
              {
                term: "Micro-segmentation",
                definition:
                  "Dividing a network into small, isolated zones with individual access controls.",
              },
            ],
            externalResources: [
              {
                title: "Zero Trust Architecture - NIST SP 800-207",
                url: "https://csrc.nist.gov/publications/detail/sp/800-207/final",
                type: "documentation",
                isFree: true,
                description:
                  "The official NIST publication on Zero Trust Architecture.",
              },
              {
                title: "Defense in Depth - CISA",
                url: "https://www.cisa.gov/sites/default/files/publications/defense_in_depth.pdf",
                type: "article",
                isFree: true,
                description:
                  "CISA's guide to implementing defense in depth strategies.",
              },
            ],
          },
          quiz: {
            id: "quiz-2-1-2",
            lessonId: "phase-2-module-1-lesson-2",
            questions: [
              {
                id: "q2-1-2-1",
                question:
                  "What is the main idea behind Defense in Depth?",
                options: [
                  "Use the strongest single security control possible",
                  "Layer multiple controls so failure of one doesn't mean total compromise",
                  "Focus all resources on network security",
                  "Trust internal network traffic and verify external traffic",
                ],
                correctIndex: 1,
                explanation:
                  "Defense in Depth layers multiple controls across different levels. No single control is relied upon alone.",
              },
              {
                id: "q2-1-2-2",
                question:
                  "A web server running as root violates which principle?",
                options: [
                  "Defense in Depth",
                  "Separation of Duties",
                  "Least Privilege",
                  "Zero Trust",
                ],
                correctIndex: 2,
                explanation:
                  "A web server only needs permission to serve files. Running as root gives far more access than needed, violating least privilege.",
              },
              {
                id: "q2-1-2-3",
                question:
                  "Which statement best describes Zero Trust?",
                options: [
                  "Trust everything inside the corporate network",
                  "Never trust, always verify -- regardless of network location",
                  "Trust users after they log in once",
                  "Only trust encrypted connections",
                ],
                correctIndex: 1,
                explanation:
                  "Zero Trust eliminates implicit trust. Every request is authenticated and authorized, no matter where it originates.",
              },
            ],
          },
        },
        {
          id: "phase-2-module-1-lesson-3",
          slug: "risk-management",
          moduleId: "phase-2-module-1",
          title: "Security Governance & Risk Management",
          estimatedMinutes: 35,
          content: {
            sections: [
              {
                heading: "What Is Risk?",
                type: "text",
                body: "In security, **risk** is the potential for loss or damage when a threat exploits a vulnerability. It is calculated as:\n\n**Risk = Threat x Vulnerability x Impact**\n\n- **Threat:** Something that could cause harm (hackers, malware, natural disasters, insider mistakes)\n- **Vulnerability:** A weakness that can be exploited (unpatched software, weak passwords, misconfigured servers)\n- **Impact:** The damage if the threat succeeds (data breach, financial loss, reputation damage, legal penalties)\n\nRisk can never be eliminated entirely. The goal is to reduce it to an acceptable level.",
              },
              {
                heading: "Risk Management Strategies",
                type: "text",
                body: "There are four ways to handle risk:\n\n**1. Mitigate (Reduce):** Implement controls to lower the risk. Install a firewall, train employees, encrypt data. This is the most common approach.\n\n**2. Transfer:** Shift the risk to a third party. Buy cyber insurance, outsource to a managed security provider, use a cloud provider's built-in security.\n\n**3. Accept:** Acknowledge the risk and decide to live with it. This is appropriate when the cost of mitigation exceeds the potential loss.\n\n**4. Avoid:** Eliminate the activity that creates the risk. If storing credit card numbers is too risky, don't store them -- use a third-party payment processor instead.",
              },
              {
                heading: "Security Frameworks",
                type: "text",
                body: "Frameworks provide structured approaches to security:\n\n**NIST Cybersecurity Framework (CSF):** Five functions -- Identify, Protect, Detect, Respond, Recover. Widely used across US industries.\n\n**ISO 27001:** International standard for information security management systems (ISMS). Requires certification audits.\n\n**CIS Controls:** Prioritized list of 18 security controls (previously 20). Practical, actionable, ranked by impact.\n\n**MITRE ATT&CK:** Knowledge base of adversary tactics and techniques. Maps real-world attacks to a structured framework. Essential for understanding how attackers operate.\n\n**MITRE ATLAS:** Like ATT&CK but specifically for AI/ML systems. You will study this in depth in Phase 5.",
              },
              {
                heading: "Compliance vs. Security",
                type: "warning",
                body: "Compliance and security are not the same thing:\n\n- **Compliance** means meeting regulatory requirements (GDPR, HIPAA, SOC 2, PCI-DSS). It is the minimum legal standard.\n- **Security** means actually protecting your assets effectively.\n\nA company can be compliant but insecure (meeting minimum checkboxes without real protection). A company can be secure but non-compliant (strong security but missing specific documentation requirements).\n\nBest practice: use compliance as a baseline, then build real security on top of it.",
              },
              {
                heading: "Key Regulations You Should Know",
                type: "text",
                body: "**GDPR (General Data Protection Regulation):** EU regulation protecting personal data. Applies to any company handling EU citizens' data. Fines up to 4% of global revenue.\n\n**HIPAA (Health Insurance Portability and Accountability Act):** US regulation protecting health information. Applies to healthcare providers and their business associates.\n\n**SOC 2:** Auditing standard for service organizations. Evaluates controls for security, availability, processing integrity, confidentiality, and privacy.\n\n**PCI-DSS:** Standard for handling credit card data. Required for any business processing card payments.\n\n**EU AI Act:** New regulation specifically governing AI systems. Classifies AI by risk level and imposes requirements accordingly. This will be critical in your AI security career.",
              },
            ],
            keyConcepts: [
              {
                term: "Risk",
                definition:
                  "Potential for loss when a threat exploits a vulnerability. Risk = Threat x Vulnerability x Impact.",
              },
              {
                term: "Risk Mitigation",
                definition:
                  "Implementing controls to reduce the likelihood or impact of a risk.",
              },
              {
                term: "NIST CSF",
                definition:
                  "National Institute of Standards and Technology Cybersecurity Framework: Identify, Protect, Detect, Respond, Recover.",
              },
              {
                term: "MITRE ATT&CK",
                definition:
                  "Knowledge base mapping real-world adversary tactics and techniques to a structured framework.",
              },
              {
                term: "Compliance",
                definition:
                  "Meeting regulatory and legal requirements -- the minimum standard, not a guarantee of security.",
              },
            ],
            externalResources: [
              {
                title: "NIST Cybersecurity Framework",
                url: "https://www.nist.gov/cyberframework",
                type: "documentation",
                isFree: true,
                description:
                  "The official NIST CSF documentation and resources.",
              },
              {
                title: "MITRE ATT&CK Framework",
                url: "https://attack.mitre.org/",
                type: "tool",
                isFree: true,
                description:
                  "Interactive knowledge base of adversary tactics and techniques.",
              },
              {
                title: "CompTIA Security+ Study Guide",
                url: "https://www.comptia.org/certifications/security",
                type: "course",
                isFree: false,
                description:
                  "Industry-standard cybersecurity certification covering these fundamentals.",
              },
            ],
          },
          quiz: {
            id: "quiz-2-1-3",
            lessonId: "phase-2-module-1-lesson-3",
            questions: [
              {
                id: "q2-1-3-1",
                question:
                  "Your company decides the cost of fixing a low-severity vulnerability exceeds its potential impact. Which risk strategy is this?",
                options: ["Mitigate", "Transfer", "Accept", "Avoid"],
                correctIndex: 2,
                explanation:
                  "Accepting a risk means acknowledging it exists but deciding the cost of mitigation is not justified.",
              },
              {
                id: "q2-1-3-2",
                question:
                  "Which framework uses five functions: Identify, Protect, Detect, Respond, Recover?",
                options: [
                  "ISO 27001",
                  "CIS Controls",
                  "NIST Cybersecurity Framework",
                  "MITRE ATT&CK",
                ],
                correctIndex: 2,
                explanation:
                  "The NIST CSF is organized around five core functions: Identify, Protect, Detect, Respond, and Recover.",
              },
              {
                id: "q2-1-3-3",
                question: "Being compliant means you are secure. True or false?",
                options: [
                  "True -- compliance guarantees security",
                  "False -- compliance is the minimum, not a guarantee of real security",
                  "True -- if you pass an audit, you are protected",
                  "False -- compliance has nothing to do with security",
                ],
                correctIndex: 1,
                explanation:
                  "Compliance sets a minimum baseline. Organizations can be compliant but still have significant security gaps.",
              },
            ],
          },
        },
      ],
    },
    // ==================== MODULE 2: COMMON THREATS & VULNERABILITIES ====================
    {
      id: "phase-2-module-2",
      slug: "common-threats-and-vulnerabilities",
      phaseId: "phase-2",
      title: "Common Threats & Vulnerabilities",
      description:
        "Explore the OWASP Top 10, common attack vectors, and the threat landscape facing modern applications.",
      estimatedHours: 12,
      labExercise: {
        title: "Vulnerability Analysis Lab",
        objective:
          "Use OWASP resources to analyze a sample web application for common vulnerabilities.",
        instructions: [
          "Visit OWASP WebGoat (https://owasp.org/www-project-webgoat/) and set it up locally using Docker.",
          "Complete at least 3 of the injection exercises in WebGoat.",
          "Complete the Cross-Site Scripting (XSS) lesson.",
          "For each vulnerability you exploit, document: what the vulnerability is, how you exploited it, and how it should be fixed.",
          "Map each vulnerability to its OWASP Top 10 category.",
          "Write a short remediation report for a hypothetical client.",
        ],
        deliverable:
          "A vulnerability report documenting each finding with OWASP category, proof of exploit, and remediation steps.",
        estimatedMinutes: 90,
      },
      lessons: [
        {
          id: "phase-2-module-2-lesson-1",
          slug: "threat-landscape",
          moduleId: "phase-2-module-2",
          title: "Understanding the Threat Landscape",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "Who Are the Attackers?",
                type: "text",
                body: "Understanding who attacks systems and why helps you anticipate threats:\n\n**Script Kiddies:** Unskilled attackers using pre-built tools. Low sophistication but high volume. They exploit known vulnerabilities that have not been patched.\n\n**Hacktivists:** Politically or socially motivated attackers. Anonymous is a well-known example. They use DDoS, defacement, and data leaks to make statements.\n\n**Cybercriminals:** Financially motivated professionals. They run ransomware operations, steal credit cards, and commit fraud. Cybercrime is a $10+ trillion annual industry.\n\n**Nation-State Actors:** Government-sponsored groups with vast resources. They conduct espionage, sabotage, and intellectual property theft. Groups like APT28 (Russia), APT41 (China), and Lazarus Group (North Korea) are well-documented.\n\n**Insider Threats:** Employees, contractors, or partners who misuse their access. This can be malicious (disgruntled employee) or accidental (clicking a phishing link).",
              },
              {
                heading: "Attack Vectors",
                type: "text",
                body: "An **attack vector** is the path or method an attacker uses to reach their target:\n\n**Phishing:** Deceptive emails or messages tricking users into revealing credentials or installing malware. Still the #1 initial access vector.\n\n**Exploiting Vulnerabilities:** Using flaws in software to gain unauthorized access. Unpatched systems are prime targets.\n\n**Credential Attacks:** Brute forcing passwords, credential stuffing (using leaked password lists), or password spraying.\n\n**Supply Chain Attacks:** Compromising a vendor or dependency to reach the actual target. The SolarWinds attack in 2020 compromised thousands of organizations through a single software update.\n\n**Physical Access:** Gaining physical access to devices or facilities through tailgating, stolen badges, or social engineering.",
              },
              {
                heading: "The Cyber Kill Chain",
                type: "text",
                body: "Lockheed Martin's **Cyber Kill Chain** describes the stages of a cyberattack:\n\n1. **Reconnaissance:** Attacker researches the target (public info, scanning, social media)\n2. **Weaponization:** Creating the attack payload (malware, exploit code)\n3. **Delivery:** Sending the payload to the target (phishing email, malicious website, USB drive)\n4. **Exploitation:** The payload executes, exploiting a vulnerability\n5. **Installation:** Malware installs persistence mechanisms (backdoors, registry keys)\n6. **Command & Control (C2):** Malware phones home to the attacker for instructions\n7. **Actions on Objectives:** The attacker achieves their goal (data theft, ransomware, sabotage)\n\nDefenders aim to break the chain as early as possible. Blocking at reconnaissance or delivery is far better than trying to contain at the actions stage.",
              },
              {
                heading: "AI as an Attack Target",
                type: "note",
                body: "AI systems introduce new attack surfaces:\n\n- **Training data** can be poisoned to corrupt model behavior\n- **Model APIs** can be probed to extract proprietary model weights (model theft)\n- **Prompt injection** can manipulate LLMs into revealing secrets or performing unauthorized actions\n- **Adversarial examples** can fool vision models into misclassifying images\n\nThe MITRE ATLAS framework (which you will study in Phase 5) catalogs these AI-specific attack techniques systematically.",
              },
            ],
            keyConcepts: [
              {
                term: "Threat Actor",
                definition:
                  "An individual or group that poses a threat: script kiddies, criminals, nation-states, insiders.",
              },
              {
                term: "Attack Vector",
                definition:
                  "The path or method used by an attacker to reach and exploit a target.",
              },
              {
                term: "Cyber Kill Chain",
                definition:
                  "7-stage model of a cyberattack: Recon, Weaponize, Deliver, Exploit, Install, C2, Actions.",
              },
              {
                term: "Supply Chain Attack",
                definition:
                  "Compromising a vendor or dependency to gain access to the actual target.",
              },
              {
                term: "Insider Threat",
                definition:
                  "A threat from someone with legitimate access: employees, contractors, or partners.",
              },
            ],
            externalResources: [
              {
                title: "Cyber Kill Chain - Lockheed Martin",
                url: "https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html",
                type: "article",
                isFree: true,
                description:
                  "Original Cyber Kill Chain framework from Lockheed Martin.",
              },
              {
                title: "MITRE ATT&CK Navigator",
                url: "https://mitre-attack.github.io/attack-navigator/",
                type: "tool",
                isFree: true,
                description:
                  "Interactive tool for visualizing and exploring attack techniques.",
              },
            ],
          },
          quiz: {
            id: "quiz-2-2-1",
            lessonId: "phase-2-module-2-lesson-1",
            questions: [
              {
                id: "q2-2-1-1",
                question:
                  "Which type of threat actor is primarily financially motivated?",
                options: [
                  "Hacktivists",
                  "Nation-state actors",
                  "Cybercriminals",
                  "Script kiddies",
                ],
                correctIndex: 2,
                explanation:
                  "Cybercriminals are motivated by financial gain through ransomware, fraud, and data theft.",
              },
              {
                id: "q2-2-1-2",
                question:
                  "In the Cyber Kill Chain, at which stage does the attacker send a phishing email?",
                options: [
                  "Reconnaissance",
                  "Weaponization",
                  "Delivery",
                  "Exploitation",
                ],
                correctIndex: 2,
                explanation:
                  "Delivery is the stage where the attack payload reaches the target, such as via phishing email.",
              },
              {
                id: "q2-2-1-3",
                question: "What was the SolarWinds attack an example of?",
                options: [
                  "Phishing",
                  "Supply chain attack",
                  "DDoS",
                  "Physical intrusion",
                ],
                correctIndex: 1,
                explanation:
                  "SolarWinds was a supply chain attack -- attackers compromised a software update to reach thousands of organizations.",
              },
            ],
          },
        },
        {
          id: "phase-2-module-2-lesson-2",
          slug: "owasp-top-10",
          moduleId: "phase-2-module-2",
          title: "OWASP Top 10 Web Vulnerabilities",
          estimatedMinutes: 40,
          content: {
            sections: [
              {
                heading: "What Is OWASP?",
                type: "text",
                body: "The **Open Worldwide Application Security Project (OWASP)** is a nonprofit that publishes the most authoritative resources on application security. Their **OWASP Top 10** list identifies the most critical web application security risks, updated every few years.\n\nKnowing the OWASP Top 10 is expected of every security professional. These are the vulnerabilities you will encounter most often.",
              },
              {
                heading: "The OWASP Top 10 (2021)",
                type: "text",
                body: "**A01: Broken Access Control** -- Users acting outside their intended permissions. Examples: accessing another user's data by changing a URL parameter, privilege escalation.\n\n**A02: Cryptographic Failures** -- Inadequate encryption. Transmitting data in cleartext, using weak algorithms, poor key management.\n\n**A03: Injection** -- Untrusted data sent to an interpreter as part of a command. SQL injection, command injection, LDAP injection.\n\n**A04: Insecure Design** -- Fundamental design flaws rather than implementation bugs. Missing threat modeling, insecure business logic.\n\n**A05: Security Misconfiguration** -- Default credentials, unnecessary features enabled, overly permissive permissions, missing security headers.",
              },
              {
                heading: "OWASP Top 10 (continued)",
                type: "text",
                body: "**A06: Vulnerable and Outdated Components** -- Using libraries, frameworks, or dependencies with known vulnerabilities. This includes unpatched npm packages, outdated Python libraries, etc.\n\n**A07: Identification and Authentication Failures** -- Weak passwords, missing MFA, session fixation, credential stuffing.\n\n**A08: Software and Data Integrity Failures** -- Code and infrastructure without integrity verification. Insecure CI/CD pipelines, auto-updates without signature verification.\n\n**A09: Security Logging and Monitoring Failures** -- Insufficient logging, missing alerts, inability to detect breaches in progress.\n\n**A10: Server-Side Request Forgery (SSRF)** -- Tricking a server into making requests to unintended locations, accessing internal services.",
              },
              {
                heading: "SQL Injection Deep Dive",
                type: "example",
                body: "SQL Injection is one of the most impactful and common vulnerabilities:\n\n**Vulnerable code:**\nquery = \"SELECT * FROM users WHERE username = '\" + username + \"'\"\n\n**Attack input:**\nusername = ' OR '1'='1\n\n**Resulting query:**\nSELECT * FROM users WHERE username = '' OR '1'='1'\n\nThis returns ALL users because '1'='1' is always true.\n\n**Fix:** Use parameterized queries:\ncursor.execute(\"SELECT * FROM users WHERE username = %s\", (username,))\n\nThe database treats the input as data, never as SQL code.",
              },
              {
                heading: "OWASP for LLMs",
                type: "note",
                body: "OWASP also publishes a **Top 10 for Large Language Model Applications** specifically addressing AI security risks:\n\n1. Prompt Injection\n2. Insecure Output Handling\n3. Training Data Poisoning\n4. Model Denial of Service\n5. Supply Chain Vulnerabilities\n\n...and more. You will study this extensively in Phase 5. Understanding the web OWASP Top 10 first builds the foundation.",
              },
            ],
            keyConcepts: [
              {
                term: "OWASP",
                definition:
                  "Open Worldwide Application Security Project -- nonprofit publishing application security resources.",
              },
              {
                term: "SQL Injection",
                definition:
                  "Inserting malicious SQL into queries through user input to manipulate databases.",
              },
              {
                term: "Broken Access Control",
                definition:
                  "Users acting outside their intended permissions, such as accessing other users' data.",
              },
              {
                term: "SSRF",
                definition:
                  "Server-Side Request Forgery -- tricking a server into making requests to unintended internal locations.",
              },
              {
                term: "Parameterized Query",
                definition:
                  "Query that separates code from data input, preventing injection attacks.",
              },
            ],
            externalResources: [
              {
                title: "OWASP Top 10 (2021)",
                url: "https://owasp.org/Top10/",
                type: "documentation",
                isFree: true,
                description:
                  "The official OWASP Top 10 with detailed explanations and prevention guides.",
              },
              {
                title: "OWASP Top 10 for LLM Applications",
                url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
                type: "documentation",
                isFree: true,
                description:
                  "AI-specific security risks from OWASP.",
              },
              {
                title: "OWASP WebGoat",
                url: "https://owasp.org/www-project-webgoat/",
                type: "tool",
                isFree: true,
                description:
                  "Deliberately insecure application for practicing web security.",
              },
            ],
          },
          quiz: {
            id: "quiz-2-2-2",
            lessonId: "phase-2-module-2-lesson-2",
            questions: [
              {
                id: "q2-2-2-1",
                question:
                  "What is the #1 risk in the OWASP Top 10 (2021)?",
                options: [
                  "Injection",
                  "Broken Access Control",
                  "Cryptographic Failures",
                  "Security Misconfiguration",
                ],
                correctIndex: 1,
                explanation:
                  "Broken Access Control moved to #1 in the 2021 edition, up from #5 in 2017.",
              },
              {
                id: "q2-2-2-2",
                question:
                  "What is the best defense against SQL injection?",
                options: [
                  "Input length limits",
                  "Parameterized queries",
                  "HTTPS",
                  "Strong passwords",
                ],
                correctIndex: 1,
                explanation:
                  "Parameterized queries separate SQL code from user data, making injection impossible.",
              },
              {
                id: "q2-2-2-3",
                question:
                  "Using an npm package with a known vulnerability falls under which OWASP category?",
                options: [
                  "Injection",
                  "Insecure Design",
                  "Vulnerable and Outdated Components",
                  "Security Misconfiguration",
                ],
                correctIndex: 2,
                explanation:
                  "A06: Vulnerable and Outdated Components covers using libraries with known vulnerabilities.",
              },
            ],
          },
        },
        {
          id: "phase-2-module-2-lesson-3",
          slug: "social-engineering",
          moduleId: "phase-2-module-2",
          title: "Social Engineering & Phishing",
          estimatedMinutes: 25,
          content: {
            sections: [
              {
                heading: "What Is Social Engineering?",
                type: "text",
                body: "**Social engineering** is manipulating people into revealing confidential information or performing actions that compromise security. It exploits human psychology rather than technical vulnerabilities.\n\nIt is the most effective attack vector because humans are often the weakest link. The best firewalls in the world cannot stop an employee from willingly typing their password into a fake login page.",
              },
              {
                heading: "Common Social Engineering Techniques",
                type: "text",
                body: "**Phishing:** Fraudulent emails impersonating trusted entities. Mass-sent to many targets. Example: 'Your bank account has been locked. Click here to verify.'\n\n**Spear Phishing:** Targeted phishing aimed at specific individuals using personal information gathered from social media, LinkedIn, etc.\n\n**Whaling:** Spear phishing targeting executives (the 'big fish'). Often impersonates the CEO to trick the CFO into wiring money.\n\n**Vishing:** Voice phishing -- phone calls pretending to be IT support, the IRS, or a bank.\n\n**Smishing:** SMS/text message phishing.\n\n**Pretexting:** Creating a fabricated scenario to gain trust. 'Hi, I'm from IT. We need your password to fix a server issue.'\n\n**Baiting:** Leaving infected USB drives in parking lots or common areas, relying on curiosity.\n\n**Tailgating/Piggybacking:** Following an authorized person through a secured door.",
              },
              {
                heading: "How to Spot Phishing",
                type: "example",
                body: "Red flags in phishing emails:\n\n- **Urgency:** 'Act immediately or your account will be closed'\n- **Sender mismatch:** Display name says 'Microsoft' but email is support@m1crosoft-security.com\n- **Generic greeting:** 'Dear Customer' instead of your name\n- **Suspicious links:** Hover over links to see the real URL before clicking\n- **Attachments:** Unexpected attachments, especially .exe, .zip, .docm files\n- **Grammar/spelling:** Professional organizations proofread their emails\n- **Too good to be true:** 'You have won $1,000,000!'",
              },
              {
                heading: "AI-Powered Social Engineering",
                type: "warning",
                body: "AI is making social engineering dramatically more dangerous:\n\n- **AI-generated phishing emails** have no grammar errors and are personalized at scale\n- **Deepfake voice** can clone anyone's voice from a few seconds of audio, making vishing attacks far more convincing\n- **Deepfake video** can impersonate executives in video calls\n- **LLMs** can generate hundreds of unique, convincing phishing messages per minute\n\nAs an AI security professional, defending against AI-enhanced social engineering will be a major part of your work.",
              },
            ],
            keyConcepts: [
              {
                term: "Social Engineering",
                definition:
                  "Manipulating people into revealing information or performing security-compromising actions.",
              },
              {
                term: "Phishing",
                definition:
                  "Fraudulent messages impersonating trusted entities to steal credentials or install malware.",
              },
              {
                term: "Spear Phishing",
                definition:
                  "Targeted phishing using personal information about a specific individual.",
              },
              {
                term: "Pretexting",
                definition:
                  "Creating a fabricated scenario to manipulate someone into sharing information.",
              },
              {
                term: "Deepfake",
                definition:
                  "AI-generated fake audio or video that impersonates a real person.",
              },
            ],
            externalResources: [
              {
                title: "Social Engineering - TryHackMe",
                url: "https://tryhackme.com/room/dvwa",
                type: "course",
                isFree: true,
                description:
                  "Hands-on social engineering labs in a safe environment.",
              },
              {
                title: "KnowBe4 Phishing Test",
                url: "https://www.knowbe4.com/phishing-security-test-offer",
                type: "tool",
                isFree: true,
                description:
                  "Free simulated phishing test to assess your organization's vulnerability.",
              },
            ],
          },
          quiz: {
            id: "quiz-2-2-3",
            lessonId: "phase-2-module-2-lesson-3",
            questions: [
              {
                id: "q2-2-3-1",
                question:
                  "What is spear phishing compared to regular phishing?",
                options: [
                  "Faster attacks",
                  "Targeted attacks using personal information about a specific individual",
                  "Attacks using spyware",
                  "Phishing through social media only",
                ],
                correctIndex: 1,
                explanation:
                  "Spear phishing targets specific individuals using personal info gathered about them, unlike mass phishing.",
              },
              {
                id: "q2-2-3-2",
                question:
                  "Which red flag best indicates a phishing email?",
                options: [
                  "The email is from a known company",
                  "The sender address does not match the claimed organization",
                  "The email has images",
                  "The email was sent on a weekday",
                ],
                correctIndex: 1,
                explanation:
                  "A mismatch between the claimed sender and the actual email address is a strong phishing indicator.",
              },
              {
                id: "q2-2-3-3",
                question:
                  "How is AI making social engineering attacks worse?",
                options: [
                  "AI makes phishing emails slower to send",
                  "AI can generate personalized, error-free phishing at scale and create deepfakes",
                  "AI prevents social engineering entirely",
                  "AI only affects physical security",
                ],
                correctIndex: 1,
                explanation:
                  "AI enables personalized phishing at scale, deepfake voice/video, and eliminates the grammar errors that used to be red flags.",
              },
            ],
          },
        },
      ],
    },
    // ==================== MODULE 3: IDENTITY & ACCESS MANAGEMENT ====================
    {
      id: "phase-2-module-3",
      slug: "identity-and-access-management",
      phaseId: "phase-2",
      title: "Identity & Access Management",
      description:
        "Learn authentication, authorization, RBAC, single sign-on, and identity federation concepts.",
      estimatedHours: 12,
      labExercise: {
        title: "Access Control Design Lab",
        objective:
          "Design a role-based access control system for a fictional AI/ML platform.",
        instructions: [
          "Scenario: A company has a Databricks-like platform with Data Engineers, Data Scientists, ML Engineers, Security Analysts, and Platform Admins.",
          "List the key resources: workspaces, clusters, notebooks, models, datasets, secrets.",
          "Define 5 roles with specific permissions for each resource (read/write/admin/none).",
          "Create an access control matrix (table) mapping roles to resources and permissions.",
          "Identify which actions require separation of duties (e.g., model training vs. model deployment).",
          "Document how a new employee would be onboarded: what role, who approves, and what access they get on day one.",
        ],
        deliverable:
          "An access control matrix document with role definitions, resource permissions, and onboarding procedure.",
        estimatedMinutes: 60,
      },
      lessons: [
        {
          id: "phase-2-module-3-lesson-1",
          slug: "authentication-fundamentals",
          moduleId: "phase-2-module-3",
          title: "Authentication Fundamentals",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "Authentication vs. Authorization",
                type: "text",
                body: "These two concepts are often confused but are fundamentally different:\n\n**Authentication (AuthN):** Verifying **who you are**. Proving your identity. 'Are you really Alice?'\n\n**Authorization (AuthZ):** Determining **what you can do**. Checking your permissions. 'Is Alice allowed to access this file?'\n\nAuthentication always comes first. You must prove your identity before the system checks what you are allowed to do.",
              },
              {
                heading: "Authentication Factors",
                type: "text",
                body: "There are three categories of authentication factors:\n\n**Something you know:** Passwords, PINs, security questions. The most common but weakest factor -- passwords can be guessed, stolen, or leaked.\n\n**Something you have:** Physical tokens, smart cards, mobile phones (SMS codes, authenticator apps). Harder to steal remotely but can be lost or stolen physically.\n\n**Something you are:** Biometrics -- fingerprints, face recognition, iris scans. Convenient and hard to fake but cannot be changed if compromised.\n\n**Multi-Factor Authentication (MFA)** combines two or more factors from different categories. A password (know) plus an authenticator app code (have) is MFA. Two passwords are NOT MFA because they are both 'something you know.'",
              },
              {
                heading: "Password Security",
                type: "text",
                body: "Passwords remain the most common authentication method. Best practices:\n\n**For users:**\n- Use a password manager (1Password, Bitwarden, KeePass)\n- Generate unique random passwords for every account\n- Enable MFA everywhere possible\n- Never reuse passwords across sites\n\n**For developers:**\n- Never store passwords in plaintext -- always hash with bcrypt, Argon2, or scrypt\n- Implement account lockout after failed attempts\n- Check passwords against known breach lists (Have I Been Pwned API)\n- Support and encourage passkeys/FIDO2",
              },
              {
                heading: "Modern Authentication: Passkeys",
                type: "note",
                body: "**Passkeys** (FIDO2/WebAuthn) are replacing passwords entirely. They use public-key cryptography:\n\n1. Your device creates a unique key pair per website\n2. The private key never leaves your device\n3. Authentication happens via biometric (Face ID, fingerprint) or device PIN\n4. Phishing-resistant: the key only works for the real website's domain\n\nMajor platforms (Apple, Google, Microsoft) now support passkeys. They are more secure than any password + MFA combination.",
              },
            ],
            keyConcepts: [
              {
                term: "Authentication (AuthN)",
                definition:
                  "Verifying identity -- proving who you are.",
              },
              {
                term: "Authorization (AuthZ)",
                definition:
                  "Determining permissions -- what you are allowed to do.",
              },
              {
                term: "MFA",
                definition:
                  "Multi-Factor Authentication -- combining two or more factors from different categories.",
              },
              {
                term: "Passkeys/FIDO2",
                definition:
                  "Phishing-resistant authentication using public-key cryptography and biometrics.",
              },
              {
                term: "Bcrypt",
                definition:
                  "A password hashing algorithm designed to be slow, making brute-force attacks impractical.",
              },
            ],
            externalResources: [
              {
                title: "Have I Been Pwned",
                url: "https://haveibeenpwned.com/",
                type: "tool",
                isFree: true,
                description:
                  "Check if your email or passwords have been compromised in data breaches.",
              },
              {
                title: "Authentication Explained - Fireship",
                url: "https://www.youtube.com/watch?v=UBUNrFtufWo",
                type: "video",
                isFree: true,
                description:
                  "Fast-paced overview of authentication methods and concepts.",
              },
            ],
          },
          quiz: {
            id: "quiz-2-3-1",
            lessonId: "phase-2-module-3-lesson-1",
            questions: [
              {
                id: "q2-3-1-1",
                question:
                  "What is the difference between authentication and authorization?",
                options: [
                  "They are the same thing",
                  "Authentication verifies identity; authorization checks permissions",
                  "Authorization verifies identity; authentication checks permissions",
                  "Both only apply to passwords",
                ],
                correctIndex: 1,
                explanation:
                  "Authentication = who are you? Authorization = what are you allowed to do?",
              },
              {
                id: "q2-3-1-2",
                question:
                  "Which combination is true Multi-Factor Authentication?",
                options: [
                  "Two different passwords",
                  "A password and a security question",
                  "A password and an authenticator app code",
                  "A fingerprint and a face scan",
                ],
                correctIndex: 2,
                explanation:
                  "MFA requires factors from different categories. A password (know) + authenticator code (have) uses two categories.",
              },
              {
                id: "q2-3-1-3",
                question: "Why are passkeys more secure than passwords?",
                options: [
                  "They are longer",
                  "They use public-key cryptography and are phishing-resistant",
                  "They expire faster",
                  "They require internet access",
                ],
                correctIndex: 1,
                explanation:
                  "Passkeys use asymmetric cryptography, the private key never leaves your device, and they only work with the correct website domain.",
              },
            ],
          },
        },
        {
          id: "phase-2-module-3-lesson-2",
          slug: "authorization-access-control",
          moduleId: "phase-2-module-3",
          title: "Authorization & Access Control Models",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "Access Control Models",
                type: "text",
                body: "Once a user is authenticated, the system must decide what they can access. Several models exist:\n\n**DAC (Discretionary Access Control):** The resource owner decides who can access their resources. Like file sharing in Google Drive -- you choose who to share with. Flexible but hard to manage at scale.\n\n**MAC (Mandatory Access Control):** A central authority assigns security labels. Users with 'Secret' clearance can access 'Secret' documents. Used in government/military. Very rigid but very secure.\n\n**RBAC (Role-Based Access Control):** Permissions are assigned to roles, and users are assigned to roles. A 'Data Analyst' role can read dashboards but not modify databases. The most common model in enterprise software.\n\n**ABAC (Attribute-Based Access Control):** Access decisions based on attributes: user attributes (department, clearance), resource attributes (sensitivity, owner), environment attributes (time, location). Very flexible but complex to implement.",
              },
              {
                heading: "RBAC in Practice",
                type: "text",
                body: "RBAC is the dominant model in modern platforms including Databricks:\n\n**How RBAC works:**\n1. Define roles: Admin, Developer, Analyst, Viewer\n2. Assign permissions to roles: Admin can create/delete resources, Analyst can read data\n3. Assign users to roles: Alice is an Admin, Bob is an Analyst\n4. Users inherit the permissions of their assigned role(s)\n\n**RBAC best practices:**\n- Start with the fewest roles possible and expand as needed\n- Never assign permissions directly to users -- always go through roles\n- Regularly review role assignments (access reviews)\n- Remove roles when employees change positions or leave\n- Use role hierarchy: Junior Analyst inherits from Analyst which inherits from Viewer",
              },
              {
                heading: "The Principle of Least Privilege in Practice",
                type: "example",
                body: "Consider a Databricks workspace with three teams:\n\n**Data Engineers:** Need to create and manage data pipelines, access raw data\nRole: data-engineer -- read/write on data lakes, manage jobs, no access to ML models\n\n**Data Scientists:** Need to read cleaned data and train models\nRole: data-scientist -- read on curated datasets, create notebooks, manage experiments, no access to raw data\n\n**Platform Admins:** Need to manage workspace settings and user access\nRole: platform-admin -- manage users/roles, configure workspace, audit logs, no direct data access\n\nEach role has only what it needs. A data scientist cannot accidentally modify production data pipelines. An admin cannot read sensitive datasets.",
              },
              {
                heading: "Access Control for AI Systems",
                type: "note",
                body: "AI systems require granular access control at multiple levels:\n\n- **Data access:** Who can see training data? Who can modify it?\n- **Model access:** Who can train models? Who can deploy them? Who can call inference APIs?\n- **Feature store access:** Who can read/write features?\n- **Experiment tracking:** Who can view results? Who can promote models to production?\n\nDatabricks Unity Catalog provides fine-grained access control for all of these through a unified governance layer.",
              },
            ],
            keyConcepts: [
              {
                term: "RBAC",
                definition:
                  "Role-Based Access Control -- permissions assigned to roles, users assigned to roles.",
              },
              {
                term: "ABAC",
                definition:
                  "Attribute-Based Access Control -- decisions based on user, resource, and environment attributes.",
              },
              {
                term: "DAC",
                definition:
                  "Discretionary Access Control -- resource owners decide who gets access.",
              },
              {
                term: "MAC",
                definition:
                  "Mandatory Access Control -- central authority assigns security labels and clearance levels.",
              },
              {
                term: "Access Review",
                definition:
                  "Periodic audit of who has access to what, removing unnecessary permissions.",
              },
            ],
            externalResources: [
              {
                title: "RBAC Explained - ByteByteGo",
                url: "https://www.youtube.com/watch?v=4Uya_I_Oxjk",
                type: "video",
                isFree: true,
                description:
                  "Visual explanation of role-based access control in system design.",
              },
              {
                title:
                  "Databricks Unity Catalog",
                url: "https://docs.databricks.com/en/data-governance/unity-catalog/index.html",
                type: "documentation",
                isFree: true,
                description:
                  "Databricks' unified governance solution for data and AI assets.",
              },
            ],
          },
          quiz: {
            id: "quiz-2-3-2",
            lessonId: "phase-2-module-3-lesson-2",
            questions: [
              {
                id: "q2-3-2-1",
                question:
                  "In RBAC, permissions are assigned directly to users. True or false?",
                options: [
                  "True",
                  "False -- permissions are assigned to roles, and users are assigned to roles",
                  "True, but only for admin users",
                  "False -- permissions are assigned to groups only",
                ],
                correctIndex: 1,
                explanation:
                  "In RBAC, permissions go to roles, and users are assigned to roles. Users inherit role permissions.",
              },
              {
                id: "q2-3-2-2",
                question:
                  "Which access control model uses security clearance levels (Top Secret, Secret, etc.)?",
                options: ["DAC", "RBAC", "MAC", "ABAC"],
                correctIndex: 2,
                explanation:
                  "Mandatory Access Control (MAC) uses centrally assigned security labels and clearance levels.",
              },
              {
                id: "q2-3-2-3",
                question:
                  "An employee changes teams but keeps their old access permissions. What should happen?",
                options: [
                  "Nothing, extra access is convenient",
                  "Their old roles should be revoked in an access review",
                  "They should get additional roles",
                  "The old permissions will expire automatically",
                ],
                correctIndex: 1,
                explanation:
                  "Access reviews should revoke unnecessary permissions. Accumulated old permissions violate least privilege.",
              },
            ],
          },
        },
        {
          id: "phase-2-module-3-lesson-3",
          slug: "sso-and-federation",
          moduleId: "phase-2-module-3",
          title: "Single Sign-On & Identity Federation",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "What Is Single Sign-On (SSO)?",
                type: "text",
                body: "**Single Sign-On (SSO)** allows users to authenticate once and gain access to multiple applications without logging in again.\n\n**Without SSO:** You log into your email, then separately log into Slack, then Jira, then Databricks -- each with different credentials.\n\n**With SSO:** You log into your organization's identity provider (Okta, Azure AD, Google Workspace) once, and all connected applications recognize you automatically.\n\n**Benefits:**\n- Better user experience (fewer passwords to remember)\n- Stronger security (fewer credentials to manage and potentially compromise)\n- Centralized control (disable one account to revoke access everywhere)\n- Easier compliance (unified audit trail of who accessed what)",
              },
              {
                heading: "How SSO Works: SAML & OIDC",
                type: "text",
                body: "Two main protocols power SSO:\n\n**SAML 2.0 (Security Assertion Markup Language):**\n1. User visits an application (Service Provider / SP)\n2. SP redirects to the Identity Provider (IdP) -- e.g., Okta\n3. User authenticates with the IdP\n4. IdP sends a signed SAML assertion (XML document) back to the SP\n5. SP validates the assertion and grants access\n\n**OIDC (OpenID Connect):** Built on top of OAuth 2.0, uses JSON Web Tokens (JWTs):\n1. User clicks 'Sign in with Google'\n2. Redirected to Google's authorization server\n3. User authenticates\n4. Application receives an ID token (JWT) with user information\n5. Application validates the token and grants access\n\nSAML is older and used in enterprise. OIDC is newer and more developer-friendly.",
              },
              {
                heading: "Identity Federation",
                type: "text",
                body: "**Identity Federation** extends SSO across organizational boundaries. It allows users from one organization to access resources in another without creating separate accounts.\n\n**Examples:**\n- A consultant using their company's credentials to access a client's Databricks workspace\n- A university student using their school login to access third-party research tools\n- 'Sign in with Google/Apple/Microsoft' on consumer websites\n\n**How it works:** Organizations establish trust relationships. Organization A trusts Organization B's identity provider. When a user from B tries to access A's resources, A accepts B's authentication assertion.\n\n**SCIM (System for Cross-domain Identity Management):** A protocol for automatically provisioning and deprovisioning user accounts across federated systems. When someone is hired, SCIM creates their accounts everywhere. When they leave, SCIM removes them.",
              },
              {
                heading: "OAuth 2.0 -- Delegated Authorization",
                type: "text",
                body: "**OAuth 2.0** is an authorization framework (not authentication) that lets applications access resources on behalf of a user without knowing their password.\n\n**Example flow:**\n1. A third-party app wants to access your Databricks data\n2. You click 'Authorize' and are redirected to Databricks\n3. You log in and approve specific permissions\n4. Databricks gives the app a limited access token\n5. The app uses this token to access only what you approved\n\nKey concept: the app never sees your password. It receives a limited, revocable token.\n\n**Common OAuth flows:** Authorization Code (most secure for web apps), Client Credentials (machine-to-machine), Device Code (IoT devices).",
              },
              {
                heading: "Watch Out for Token Security",
                type: "warning",
                body: "SSO and OAuth tokens are high-value targets:\n\n- **Stolen tokens** grant access without needing the user's password\n- **Session hijacking** captures active session cookies\n- **Token replay attacks** reuse intercepted tokens\n\nDefenses: short token lifetimes, token binding, secure storage, token revocation on logout, and monitoring for unusual token usage patterns.",
              },
            ],
            keyConcepts: [
              {
                term: "SSO",
                definition:
                  "Single Sign-On -- authenticate once to access multiple applications.",
              },
              {
                term: "SAML",
                definition:
                  "Security Assertion Markup Language -- XML-based SSO protocol for enterprise applications.",
              },
              {
                term: "OIDC",
                definition:
                  "OpenID Connect -- JSON/JWT-based identity layer built on OAuth 2.0.",
              },
              {
                term: "OAuth 2.0",
                definition:
                  "Authorization framework allowing apps to access resources on behalf of a user via tokens.",
              },
              {
                term: "SCIM",
                definition:
                  "Protocol for automated user account provisioning and deprovisioning across systems.",
              },
            ],
            externalResources: [
              {
                title: "OAuth 2.0 Explained - ByteByteGo",
                url: "https://www.youtube.com/watch?v=ZV5yTm4pT8g",
                type: "video",
                isFree: true,
                description:
                  "Visual walkthrough of OAuth 2.0 flows and concepts.",
              },
              {
                title: "SAML vs OAuth vs OIDC",
                url: "https://www.okta.com/identity-101/whats-the-difference-between-oauth-openid-connect-and-saml/",
                type: "article",
                isFree: true,
                description:
                  "Clear comparison of the three main identity protocols.",
              },
            ],
          },
          quiz: {
            id: "quiz-2-3-3",
            lessonId: "phase-2-module-3-lesson-3",
            questions: [
              {
                id: "q2-3-3-1",
                question: "What is the primary benefit of SSO?",
                options: [
                  "It eliminates the need for passwords entirely",
                  "Users authenticate once and access multiple applications",
                  "It encrypts all network traffic",
                  "It replaces firewalls",
                ],
                correctIndex: 1,
                explanation:
                  "SSO lets users log in once to their identity provider and access all connected applications without re-authenticating.",
              },
              {
                id: "q2-3-3-2",
                question:
                  "OAuth 2.0 is primarily an authentication protocol. True or false?",
                options: [
                  "True -- OAuth authenticates users",
                  "False -- OAuth is an authorization framework for delegated access",
                  "True -- OAuth replaces passwords",
                  "False -- OAuth is only for encryption",
                ],
                correctIndex: 1,
                explanation:
                  "OAuth 2.0 is an authorization framework. OIDC (built on OAuth) adds authentication.",
              },
              {
                id: "q2-3-3-3",
                question:
                  "What does SCIM automate?",
                options: [
                  "Encryption key rotation",
                  "User account provisioning and deprovisioning across systems",
                  "Network firewall rules",
                  "Database backups",
                ],
                correctIndex: 1,
                explanation:
                  "SCIM automates creating and removing user accounts across federated systems.",
              },
            ],
          },
        },
      ],
    },
    // ==================== MODULE 4: ENCRYPTION & CRYPTOGRAPHY ====================
    {
      id: "phase-2-module-4",
      slug: "encryption-and-cryptography",
      phaseId: "phase-2",
      title: "Encryption & Cryptography Basics",
      description:
        "Understand symmetric and asymmetric encryption, hashing, digital signatures, and TLS/SSL.",
      estimatedHours: 12,
      labExercise: {
        title: "Cryptography Hands-On Lab",
        objective:
          "Use Python and command-line tools to perform encryption, hashing, and certificate inspection.",
        instructions: [
          "Use Python's hashlib to generate MD5, SHA-256, and SHA-512 hashes of a sample file.",
          "Modify one character in the file and re-hash it. Observe how the hash changes completely (avalanche effect).",
          "Use Python's cryptography library to encrypt and decrypt a message with AES (symmetric).",
          "Generate an RSA key pair using the cryptography library. Encrypt a message with the public key and decrypt with the private key.",
          "Use openssl s_client to connect to google.com:443 and examine the TLS certificate (issuer, expiry, algorithm).",
          "Document your findings: hash values, encrypted/decrypted messages, and certificate details.",
        ],
        deliverable:
          "A Python notebook or script demonstrating each cryptographic operation with your observations.",
        estimatedMinutes: 75,
      },
      lessons: [
        {
          id: "phase-2-module-4-lesson-1",
          slug: "symmetric-encryption",
          moduleId: "phase-2-module-4",
          title: "Symmetric Encryption",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "What Is Encryption?",
                type: "text",
                body: "**Encryption** transforms readable data (plaintext) into unreadable data (ciphertext) using an algorithm and a key. Only someone with the correct key can reverse the process (decryption) and read the original data.\n\nEncryption protects **confidentiality** -- even if an attacker intercepts the data, they cannot read it without the key.\n\nTwo main types:\n- **Symmetric encryption:** Same key for encryption and decryption\n- **Asymmetric encryption:** Different keys (public/private pair)",
              },
              {
                heading: "Symmetric Encryption",
                type: "text",
                body: "In symmetric encryption, the **same key** is used to both encrypt and decrypt data. Think of it like a lockbox where you and the recipient both have copies of the same key.\n\n**How it works:**\n1. Alice encrypts a message with a secret key\n2. Alice sends the encrypted message to Bob\n3. Bob decrypts it with the same secret key\n\n**The key distribution problem:** How does Alice securely send the key to Bob in the first place? If she sends it over the internet, an attacker could intercept it. This is the fundamental challenge of symmetric encryption.",
              },
              {
                heading: "Common Symmetric Algorithms",
                type: "text",
                body: "**AES (Advanced Encryption Standard):** The gold standard. Used everywhere: HTTPS, file encryption, disk encryption, database encryption. Key sizes: 128, 192, or 256 bits. AES-256 is considered unbreakable with current technology.\n\n**ChaCha20:** Modern stream cipher. Faster than AES on devices without hardware acceleration. Used by Google in TLS.\n\n**DES / 3DES (Data Encryption Standard):** Obsolete. DES uses a 56-bit key which can be cracked in hours. 3DES is slightly better but slow. Do not use for new systems.\n\n**Modes of operation:** AES alone encrypts 128-bit blocks. Modes like **GCM** (Galois/Counter Mode) handle larger data and provide both encryption and integrity verification. AES-256-GCM is the recommended standard.",
              },
              {
                heading: "Where Symmetric Encryption Is Used",
                type: "example",
                body: "Symmetric encryption is used wherever large amounts of data need to be encrypted quickly:\n\n- **Disk encryption:** FileVault (Mac), BitLocker (Windows), LUKS (Linux) all use AES\n- **Database encryption:** Encrypting data at rest in databases\n- **File encryption:** Zip file passwords, encrypted backups\n- **Network traffic:** The bulk data encryption in HTTPS/TLS uses symmetric encryption (after the key exchange uses asymmetric)\n- **Cloud storage:** AWS S3, Azure Blob Storage encrypt data with AES-256\n- **Databricks:** Data at rest in Delta Lake is encrypted using AES-256",
              },
              {
                heading: "Never Roll Your Own Crypto",
                type: "warning",
                body: "Cryptographic algorithms are extremely difficult to implement correctly. A single subtle error can make the entire system insecure.\n\n**Rules:**\n- Use well-tested libraries (Python's cryptography library, libsodium, OpenSSL)\n- Use standard algorithms (AES-256-GCM, ChaCha20-Poly1305)\n- Never invent your own encryption algorithm\n- Never use ECB mode (it leaks patterns)\n- Always use authenticated encryption (GCM, Poly1305) to prevent tampering",
              },
            ],
            keyConcepts: [
              {
                term: "Symmetric Encryption",
                definition:
                  "Encryption using the same key for both encryption and decryption.",
              },
              {
                term: "AES-256",
                definition:
                  "Advanced Encryption Standard with 256-bit key -- the gold standard for symmetric encryption.",
              },
              {
                term: "Plaintext",
                definition: "Original, readable data before encryption.",
              },
              {
                term: "Ciphertext",
                definition: "Encrypted, unreadable data.",
              },
              {
                term: "Key Distribution Problem",
                definition:
                  "The challenge of securely sharing symmetric keys between parties.",
              },
            ],
            externalResources: [
              {
                title: "Encryption Explained - Computerphile",
                url: "https://www.youtube.com/watch?v=GSIDS_lvRv4",
                type: "video",
                isFree: true,
                description:
                  "Clear explanation of encryption fundamentals with visual demos.",
              },
              {
                title: "Python Cryptography Library",
                url: "https://cryptography.io/en/latest/",
                type: "documentation",
                isFree: true,
                description:
                  "Official docs for the recommended Python cryptography library.",
              },
            ],
          },
          quiz: {
            id: "quiz-2-4-1",
            lessonId: "phase-2-module-4-lesson-1",
            questions: [
              {
                id: "q2-4-1-1",
                question:
                  "What is the main drawback of symmetric encryption?",
                options: [
                  "It is too slow",
                  "The key distribution problem -- securely sharing the key",
                  "It cannot encrypt large files",
                  "It does not exist anymore",
                ],
                correctIndex: 1,
                explanation:
                  "Both parties need the same key, but securely transmitting that key is the fundamental challenge.",
              },
              {
                id: "q2-4-1-2",
                question:
                  "Which algorithm is the current gold standard for symmetric encryption?",
                options: ["DES", "3DES", "AES-256", "ROT13"],
                correctIndex: 2,
                explanation:
                  "AES-256 is considered the standard for symmetric encryption and is used across all major platforms.",
              },
              {
                id: "q2-4-1-3",
                question: "Why should you never implement your own encryption algorithm?",
                options: [
                  "It is illegal",
                  "Subtle implementation errors can make it completely insecure",
                  "It will be slower than existing algorithms",
                  "There are no libraries available",
                ],
                correctIndex: 1,
                explanation:
                  "Cryptography is extremely hard to implement correctly. Even small mistakes can break security entirely.",
              },
            ],
          },
        },
        {
          id: "phase-2-module-4-lesson-2",
          slug: "asymmetric-encryption-pki",
          moduleId: "phase-2-module-4",
          title: "Asymmetric Encryption & PKI",
          estimatedMinutes: 35,
          content: {
            sections: [
              {
                heading: "Asymmetric Encryption",
                type: "text",
                body: "Asymmetric encryption (public-key cryptography) solves the key distribution problem by using **two mathematically related keys:**\n\n- **Public key:** Shared openly with everyone. Used to encrypt messages TO you.\n- **Private key:** Kept secret. Used to decrypt messages sent to you.\n\n**How it works:**\n1. Bob generates a key pair (public + private)\n2. Bob publishes his public key\n3. Alice encrypts a message with Bob's public key\n4. Only Bob's private key can decrypt it\n5. Even Alice cannot decrypt her own message after encrypting it\n\nThe magic: the public key cannot decrypt what it encrypted. Only the paired private key can.",
              },
              {
                heading: "RSA and ECC",
                type: "text",
                body: "**RSA (Rivest-Shamir-Adleman):** The original and most widely used. Based on the difficulty of factoring large prime numbers. Recommended key size: 2048 bits minimum, 4096 for high security. Slower than symmetric encryption.\n\n**ECC (Elliptic Curve Cryptography):** Newer, based on elliptic curve mathematics. Much smaller keys for equivalent security: a 256-bit ECC key is as strong as a 3072-bit RSA key. Faster and more efficient, preferred for mobile and IoT.\n\n**Practical usage:** Asymmetric encryption is slow, so it is rarely used to encrypt large amounts of data. Instead, it is used to securely exchange a symmetric key, which then encrypts the bulk data. This is called **hybrid encryption** and is how TLS/HTTPS works.",
              },
              {
                heading: "Public Key Infrastructure (PKI)",
                type: "text",
                body: "PKI is the system of trust that makes public-key cryptography work at internet scale.\n\n**The problem:** How do you know that the public key claiming to be 'google.com' really belongs to Google?\n\n**Certificate Authorities (CAs)** solve this:\n1. Google generates a key pair\n2. Google sends its public key to a CA (e.g., Let's Encrypt, DigiCert)\n3. The CA verifies Google's identity and signs a **digital certificate** binding Google's public key to the domain google.com\n4. Your browser trusts the CA (it comes pre-installed in your OS/browser)\n5. When you visit google.com, the server presents its certificate\n6. Your browser checks the CA's signature -- if valid, you trust the public key\n\n**Certificate chain:** Root CAs sign intermediate CAs, which sign end-entity certificates. This creates a chain of trust.",
              },
              {
                heading: "Certificates and AI Infrastructure",
                type: "note",
                body: "PKI and certificates are critical in AI infrastructure:\n\n- **HTTPS/TLS certificates** secure model API endpoints\n- **mTLS (mutual TLS)** authenticates both client and server, used between microservices in ML pipelines\n- **Code signing certificates** verify the integrity of deployed model artifacts\n- **Databricks** uses certificates for workspace encryption, cluster communication, and API authentication\n\nMisconfigured or expired certificates are a common cause of outages and security incidents.",
              },
            ],
            keyConcepts: [
              {
                term: "Asymmetric Encryption",
                definition:
                  "Encryption using a key pair: a public key to encrypt and a private key to decrypt.",
              },
              {
                term: "RSA",
                definition:
                  "Widely used asymmetric algorithm based on prime number factoring. Standard key size: 2048+ bits.",
              },
              {
                term: "ECC",
                definition:
                  "Elliptic Curve Cryptography -- smaller keys for equivalent security, faster than RSA.",
              },
              {
                term: "PKI",
                definition:
                  "Public Key Infrastructure -- the system of CAs, certificates, and trust that validates public keys.",
              },
              {
                term: "Certificate Authority (CA)",
                definition:
                  "A trusted entity that issues digital certificates, binding public keys to identities.",
              },
            ],
            externalResources: [
              {
                title: "Public Key Cryptography - Computerphile",
                url: "https://www.youtube.com/watch?v=GSIDS_lvRv4",
                type: "video",
                isFree: true,
                description:
                  "Visual explanation of how public-key cryptography works.",
              },
              {
                title: "Let's Encrypt - Free TLS Certificates",
                url: "https://letsencrypt.org/how-it-works/",
                type: "documentation",
                isFree: true,
                description:
                  "How automated certificate issuance works.",
              },
            ],
          },
          quiz: {
            id: "quiz-2-4-2",
            lessonId: "phase-2-module-4-lesson-2",
            questions: [
              {
                id: "q2-4-2-1",
                question:
                  "In asymmetric encryption, which key do you share publicly?",
                options: [
                  "The private key",
                  "The public key",
                  "Both keys",
                  "Neither -- both are secret",
                ],
                correctIndex: 1,
                explanation:
                  "The public key is shared openly. The private key is kept secret.",
              },
              {
                id: "q2-4-2-2",
                question:
                  "Why is asymmetric encryption not used to encrypt large files directly?",
                options: [
                  "It is insecure for large files",
                  "It is significantly slower than symmetric encryption",
                  "It requires the file to be a specific size",
                  "There is no technical reason",
                ],
                correctIndex: 1,
                explanation:
                  "Asymmetric encryption is much slower than symmetric. In practice, it exchanges a symmetric key, which then encrypts the data.",
              },
              {
                id: "q2-4-2-3",
                question: "What does a Certificate Authority (CA) do?",
                options: [
                  "Encrypts all web traffic",
                  "Issues digital certificates that bind public keys to verified identities",
                  "Stores private keys for users",
                  "Monitors network traffic for threats",
                ],
                correctIndex: 1,
                explanation:
                  "CAs verify identities and sign digital certificates, creating a chain of trust for public keys.",
              },
            ],
          },
        },
        {
          id: "phase-2-module-4-lesson-3",
          slug: "hashing-signatures-tls",
          moduleId: "phase-2-module-4",
          title: "Hashing, Digital Signatures & TLS",
          estimatedMinutes: 35,
          content: {
            sections: [
              {
                heading: "Cryptographic Hashing",
                type: "text",
                body: "A **hash function** takes input of any size and produces a fixed-size output (the hash or digest). Key properties:\n\n**Deterministic:** Same input always produces the same hash.\n**One-way:** You cannot reverse a hash to get the original input.\n**Avalanche effect:** Changing one bit of input completely changes the output.\n**Collision-resistant:** It should be practically impossible to find two different inputs that produce the same hash.\n\n**Common algorithms:**\n- **SHA-256:** Part of the SHA-2 family. 256-bit output. The current standard. Used in TLS, code signing, and blockchain.\n- **SHA-3:** Newer alternative to SHA-2. Different mathematical foundation.\n- **MD5:** 128-bit output. Broken -- collisions found. Never use for security.\n- **bcrypt, Argon2:** Specialized for password hashing -- deliberately slow to resist brute force.",
              },
              {
                heading: "Use Cases for Hashing",
                type: "example",
                body: "**Password storage:** Never store passwords in plaintext. Store hash(password + salt). When a user logs in, hash their input and compare.\n\nsalt = random_bytes(16)\nstored_hash = hash(password + salt)\n\n**File integrity:** Download a file and compare its SHA-256 hash to the published hash. If they match, the file was not tampered with.\n\n**Digital forensics:** Hash evidence files to prove they have not been altered.\n\n**Git commits:** Every commit in git is identified by a SHA-1 hash of its contents.\n\n**Blockchain:** Each block contains the hash of the previous block, creating a tamper-evident chain.",
              },
              {
                heading: "Digital Signatures",
                type: "text",
                body: "Digital signatures combine hashing with asymmetric encryption to provide:\n- **Authentication:** Proof of who sent the message\n- **Integrity:** Proof the message was not altered\n- **Non-repudiation:** The sender cannot deny sending it\n\n**How digital signatures work:**\n1. Alice hashes the message (SHA-256)\n2. Alice encrypts the hash with her **private key** -- this is the signature\n3. Alice sends the message + signature to Bob\n4. Bob decrypts the signature with Alice's **public key** to get the hash\n5. Bob hashes the received message independently\n6. If the hashes match, the message is authentic and unaltered\n\nNote: signing uses the private key (opposite of encryption). Anyone with the public key can verify.",
              },
              {
                heading: "TLS/SSL -- Securing the Web",
                type: "text",
                body: "**TLS (Transport Layer Security)** is the protocol that powers HTTPS. It combines everything you have learned:\n\n**TLS Handshake (simplified):**\n1. **Client Hello:** Browser sends supported cipher suites\n2. **Server Hello:** Server chooses a cipher suite and sends its certificate\n3. **Certificate Verification:** Browser verifies the certificate via PKI\n4. **Key Exchange:** Using asymmetric encryption, they agree on a symmetric session key\n5. **Secure Communication:** All data is encrypted with the symmetric session key\n\n**This is hybrid encryption in action:** Asymmetric (slow) for key exchange, symmetric (fast) for bulk data.\n\n**TLS 1.3** (current version) is faster and more secure than 1.2. It removes support for weak algorithms and reduces the handshake to just one round trip.",
              },
              {
                heading: "TLS in AI/ML Systems",
                type: "note",
                body: "TLS is essential for AI infrastructure:\n\n- **Model API endpoints** must use HTTPS/TLS to protect inference data in transit\n- **Training data transfers** between storage and compute must be encrypted\n- **mTLS** (mutual TLS) authenticates both sides of service-to-service communication in ML pipelines\n- **Databricks** enforces TLS for all cluster communication, API calls, and data transfers\n\nExpired or misconfigured TLS certificates are a leading cause of AI platform downtime.",
              },
            ],
            keyConcepts: [
              {
                term: "Hash Function",
                definition:
                  "One-way function producing a fixed-size fingerprint of input data.",
              },
              {
                term: "SHA-256",
                definition:
                  "Secure Hash Algorithm producing a 256-bit digest. The current standard for integrity checks.",
              },
              {
                term: "Digital Signature",
                definition:
                  "Hash encrypted with a private key, proving authenticity, integrity, and non-repudiation.",
              },
              {
                term: "TLS",
                definition:
                  "Transport Layer Security -- protocol encrypting data in transit (HTTPS).",
              },
              {
                term: "Non-repudiation",
                definition:
                  "Proof that the sender sent the message and cannot deny it.",
              },
            ],
            externalResources: [
              {
                title: "TLS Handshake Explained - Cloudflare",
                url: "https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/",
                type: "article",
                isFree: true,
                description:
                  "Step-by-step visual walkthrough of the TLS handshake.",
              },
              {
                title: "Hashing Algorithms - Computerphile",
                url: "https://www.youtube.com/watch?v=b4b8ktEV4Bg",
                type: "video",
                isFree: true,
                description:
                  "Deep dive into how hashing algorithms work and why they matter.",
              },
            ],
          },
          quiz: {
            id: "quiz-2-4-3",
            lessonId: "phase-2-module-4-lesson-3",
            questions: [
              {
                id: "q2-4-3-1",
                question:
                  "What makes a hash function different from encryption?",
                options: [
                  "Hashing is faster",
                  "Hashing is one-way -- you cannot reverse it to get the original input",
                  "Hashing uses keys",
                  "There is no difference",
                ],
                correctIndex: 1,
                explanation:
                  "Hashing is a one-way function. Encryption is reversible with the correct key. Hashes cannot be 'decrypted.'",
              },
              {
                id: "q2-4-3-2",
                question:
                  "In a digital signature, which key does the sender use to sign?",
                options: [
                  "The recipient's public key",
                  "The sender's public key",
                  "The sender's private key",
                  "A shared symmetric key",
                ],
                correctIndex: 2,
                explanation:
                  "The sender signs with their private key. Recipients verify with the sender's public key.",
              },
              {
                id: "q2-4-3-3",
                question:
                  "Why does TLS use both asymmetric and symmetric encryption?",
                options: [
                  "For backward compatibility",
                  "Asymmetric for secure key exchange (slow), symmetric for fast bulk data encryption",
                  "Symmetric cannot encrypt data",
                  "It only uses asymmetric encryption",
                ],
                correctIndex: 1,
                explanation:
                  "This hybrid approach combines asymmetric's secure key exchange with symmetric's speed for data encryption.",
              },
            ],
          },
        },
      ],
    },
    // ==================== MODULE 5: NETWORK SECURITY ====================
    {
      id: "phase-2-module-5",
      slug: "network-security-fundamentals",
      phaseId: "phase-2",
      title: "Network Security Fundamentals",
      description:
        "Cover firewalls, IDS/IPS, VPNs, network segmentation, and secure network architecture.",
      estimatedHours: 12,
      labExercise: {
        title: "Network Security Analysis Lab",
        objective:
          "Analyze network traffic and security configurations using freely available tools.",
        instructions: [
          "Install Wireshark (wireshark.org) and capture 2 minutes of your own network traffic.",
          "Filter for HTTP traffic and observe unencrypted data. Then filter for TLS and observe encrypted traffic.",
          "Identify at least 3 different protocols in your capture (DNS, TCP, TLS, HTTP, etc.).",
          "Use nmap to scan your local network: nmap -sn 192.168.1.0/24 (adjust for your subnet).",
          "Check your home router's firewall settings. Document what ports are open and whether UPnP is enabled.",
          "Write a brief security assessment of your home network with 3 recommended improvements.",
        ],
        deliverable:
          "A network security assessment document with Wireshark screenshots, nmap results, and improvement recommendations.",
        estimatedMinutes: 75,
      },
      lessons: [
        {
          id: "phase-2-module-5-lesson-1",
          slug: "firewalls-and-segmentation",
          moduleId: "phase-2-module-5",
          title: "Firewalls & Network Segmentation",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "What Is a Firewall?",
                type: "text",
                body: "A **firewall** is a network security device that monitors and controls incoming and outgoing traffic based on predetermined rules. It creates a barrier between trusted internal networks and untrusted external networks.\n\n**Types of firewalls:**\n\n**Packet Filtering:** Examines individual packets (source/destination IP, port, protocol) and allows or blocks based on rules. Fast but cannot understand application context.\n\n**Stateful Inspection:** Tracks the state of active connections. A response to an outgoing request is allowed, but an unsolicited incoming connection is blocked. Smarter than packet filtering.\n\n**Application-Layer (WAF):** Inspects the content of traffic at Layer 7. Can detect SQL injection, XSS, and other application attacks. Slower but much more thorough.\n\n**Next-Generation Firewall (NGFW):** Combines all of the above plus intrusion prevention, deep packet inspection, and threat intelligence. Palo Alto, Fortinet, and Check Point are major vendors.",
              },
              {
                heading: "Firewall Rules",
                type: "example",
                body: "Firewall rules follow a pattern: **Action, Source, Destination, Port, Protocol**\n\n**Example ruleset for a web server:**\nALLOW | Any | Web Server | Port 443 | TCP (HTTPS traffic)\nALLOW | Any | Web Server | Port 80 | TCP (HTTP, should redirect to HTTPS)\nALLOW | Admin Network | Web Server | Port 22 | TCP (SSH from admins only)\nDENY | Any | Web Server | All Ports | All (block everything else)\n\n**Rule order matters:** Rules are processed top to bottom. The first matching rule wins. Always end with a default deny rule.\n\n**Common mistake:** Overly permissive rules like ALLOW ANY ANY ANY -- this effectively disables the firewall.",
              },
              {
                heading: "Network Segmentation",
                type: "text",
                body: "**Network segmentation** divides a network into smaller, isolated zones. Each zone has its own security controls and access rules.\n\n**Why segment?**\n- **Limit blast radius:** If one segment is compromised, the attacker cannot easily reach others\n- **Compliance:** Isolate systems that handle sensitive data (PCI-DSS requires cardholder data to be segmented)\n- **Performance:** Reduce broadcast traffic and congestion\n\n**Common segments:**\n- **DMZ (Demilitarized Zone):** Public-facing servers (web, email) isolated from internal networks\n- **Production:** Live business systems\n- **Development:** Testing environments with no access to production data\n- **Management:** Administrative access, monitoring, logging\n- **Data:** Databases and storage, heavily restricted access",
              },
              {
                heading: "Cloud Network Security",
                type: "note",
                body: "In the cloud, network segmentation is implemented through:\n\n- **VPCs (Virtual Private Clouds):** Isolated virtual networks\n- **Subnets:** Public subnets (internet-accessible) vs private subnets (internal only)\n- **Security Groups:** Virtual firewalls for individual instances (stateful)\n- **Network ACLs:** Subnet-level firewall rules (stateless)\n- **Private Endpoints:** Access cloud services without going through the public internet\n\nDatabricks workspaces are deployed within VPCs with private subnets, security groups, and network ACLs to isolate AI workloads from unauthorized access.",
              },
            ],
            keyConcepts: [
              {
                term: "Firewall",
                definition:
                  "Network security device that monitors and controls traffic based on rules.",
              },
              {
                term: "WAF",
                definition:
                  "Web Application Firewall -- inspects HTTP/HTTPS traffic for application-layer attacks.",
              },
              {
                term: "Network Segmentation",
                definition:
                  "Dividing a network into isolated zones with separate security controls.",
              },
              {
                term: "DMZ",
                definition:
                  "Demilitarized Zone -- a network segment for public-facing servers isolated from internal networks.",
              },
              {
                term: "Security Group",
                definition:
                  "Cloud-based virtual firewall controlling inbound/outbound traffic for instances.",
              },
            ],
            externalResources: [
              {
                title: "Firewalls Explained - NetworkChuck",
                url: "https://www.youtube.com/watch?v=kDEX1HXybrU",
                type: "video",
                isFree: true,
                description:
                  "Entertaining walkthrough of firewall types and configuration.",
              },
              {
                title: "AWS VPC Security Best Practices",
                url: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-best-practices.html",
                type: "documentation",
                isFree: true,
                description:
                  "AWS guide to securing VPC networks.",
              },
            ],
          },
          quiz: {
            id: "quiz-2-5-1",
            lessonId: "phase-2-module-5-lesson-1",
            questions: [
              {
                id: "q2-5-1-1",
                question:
                  "Which type of firewall can detect SQL injection in HTTP traffic?",
                options: [
                  "Packet filtering firewall",
                  "Stateful inspection firewall",
                  "Web Application Firewall (WAF)",
                  "Network ACL",
                ],
                correctIndex: 2,
                explanation:
                  "A WAF operates at the application layer and can inspect HTTP content for attacks like SQL injection and XSS.",
              },
              {
                id: "q2-5-1-2",
                question:
                  "What is the purpose of a DMZ in network architecture?",
                options: [
                  "To store backup data",
                  "To isolate public-facing servers from the internal network",
                  "To encrypt all traffic",
                  "To speed up network connections",
                ],
                correctIndex: 1,
                explanation:
                  "A DMZ creates a buffer zone for public-facing servers, preventing direct access to internal networks.",
              },
              {
                id: "q2-5-1-3",
                question: "Firewall rules should end with which default rule?",
                options: [
                  "Allow all traffic",
                  "Deny all traffic",
                  "Log all traffic",
                  "Redirect all traffic",
                ],
                correctIndex: 1,
                explanation:
                  "A default deny rule ensures that anything not explicitly allowed is blocked.",
              },
            ],
          },
        },
        {
          id: "phase-2-module-5-lesson-2",
          slug: "ids-ips-and-vpns",
          moduleId: "phase-2-module-5",
          title: "IDS/IPS & VPNs",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "Intrusion Detection Systems (IDS)",
                type: "text",
                body: "An **IDS** monitors network traffic or system activity for suspicious patterns and alerts security teams.\n\n**Network-based IDS (NIDS):** Monitors network traffic at strategic points. Analyzes packet headers and payloads for known attack signatures or anomalous behavior.\n\n**Host-based IDS (HIDS):** Monitors activity on individual hosts -- file changes, process execution, log entries.\n\n**Detection methods:**\n- **Signature-based:** Matches traffic against a database of known attack patterns. Fast and accurate for known threats but cannot detect new (zero-day) attacks.\n- **Anomaly-based:** Establishes a baseline of normal behavior and alerts on deviations. Can detect new attacks but produces more false positives.\n- **Heuristic/Behavioral:** Uses rules and machine learning to identify suspicious behavior patterns.\n\n**Popular IDS tools:** Snort, Suricata, OSSEC, Wazuh",
              },
              {
                heading: "Intrusion Prevention Systems (IPS)",
                type: "text",
                body: "An **IPS** is an IDS that can also **take action** to block detected threats in real-time.\n\n**IDS vs IPS:**\n- IDS = detection only → alerts the security team\n- IPS = detection + prevention → automatically blocks the threat\n\n**IPS actions:**\n- Drop malicious packets\n- Block offending IP addresses\n- Reset TCP connections\n- Redirect traffic to a quarantine network\n\n**Trade-off:** An IPS that is too aggressive can block legitimate traffic (false positives). An IPS that is too lenient will miss real attacks (false negatives). Tuning an IPS requires deep knowledge of your network's normal behavior.\n\n**Modern approach:** SIEM (Security Information and Event Management) systems aggregate logs from IDS/IPS, firewalls, servers, and applications to provide a unified security view. Splunk, Elastic SIEM, and Microsoft Sentinel are popular SIEMs.",
              },
              {
                heading: "Virtual Private Networks (VPNs)",
                type: "text",
                body: "A **VPN** creates an encrypted tunnel between two points over an untrusted network (the internet).\n\n**Types of VPNs:**\n\n**Remote Access VPN:** Connects individual users to a corporate network. You run a VPN client on your laptop, and it creates an encrypted tunnel to the corporate VPN server. All your traffic flows through this tunnel.\n\n**Site-to-Site VPN:** Connects two entire networks. An office in New York connects to an office in London through a permanent encrypted tunnel.\n\n**VPN Protocols:**\n- **WireGuard:** Modern, fast, simple. Recommended for new deployments.\n- **OpenVPN:** Open source, mature, widely supported.\n- **IPSec:** Enterprise standard, complex but powerful. Often used for site-to-site.\n- **PPTP:** Obsolete and insecure. Never use.",
              },
              {
                heading: "VPNs vs Zero Trust",
                type: "warning",
                body: "Traditional VPNs grant access to an entire network once connected. This is increasingly seen as insufficient:\n\n- If an attacker compromises a VPN account, they have network-wide access\n- VPNs create a bottleneck and single point of failure\n- Remote work has made VPN architectures harder to scale\n\n**Zero Trust Network Access (ZTNA)** is replacing VPNs in many organizations. Instead of network access, ZTNA grants access to specific applications based on identity, device health, and context. Tools like Cloudflare Access, Zscaler, and Azure AD Application Proxy implement ZTNA.\n\nFor AI infrastructure, ZTNA is preferred because it provides granular access to specific resources (notebooks, clusters, model endpoints) rather than broad network access.",
              },
            ],
            keyConcepts: [
              {
                term: "IDS",
                definition:
                  "Intrusion Detection System -- monitors for suspicious activity and generates alerts.",
              },
              {
                term: "IPS",
                definition:
                  "Intrusion Prevention System -- detects and automatically blocks suspicious activity.",
              },
              {
                term: "VPN",
                definition:
                  "Virtual Private Network -- encrypted tunnel over an untrusted network.",
              },
              {
                term: "SIEM",
                definition:
                  "Security Information and Event Management -- aggregates and analyzes security logs from multiple sources.",
              },
              {
                term: "ZTNA",
                definition:
                  "Zero Trust Network Access -- grants access to specific applications, replacing broad VPN access.",
              },
            ],
            externalResources: [
              {
                title: "IDS vs IPS - Cybersecurity Explained",
                url: "https://www.youtube.com/watch?v=rvKQtRklwQ4",
                type: "video",
                isFree: true,
                description:
                  "Clear comparison of IDS and IPS systems with examples.",
              },
              {
                title: "WireGuard VPN",
                url: "https://www.wireguard.com/",
                type: "documentation",
                isFree: true,
                description:
                  "Official site for the modern VPN protocol.",
              },
            ],
          },
          quiz: {
            id: "quiz-2-5-2",
            lessonId: "phase-2-module-5-lesson-2",
            questions: [
              {
                id: "q2-5-2-1",
                question:
                  "What is the key difference between an IDS and an IPS?",
                options: [
                  "IDS is faster",
                  "IDS detects and alerts; IPS detects and blocks",
                  "IPS only monitors, IDS takes action",
                  "There is no difference",
                ],
                correctIndex: 1,
                explanation:
                  "IDS detects threats and sends alerts. IPS detects threats AND automatically takes action to block them.",
              },
              {
                id: "q2-5-2-2",
                question:
                  "Why is Zero Trust Network Access (ZTNA) replacing traditional VPNs?",
                options: [
                  "ZTNA is cheaper",
                  "VPNs grant broad network access; ZTNA provides granular access to specific applications",
                  "VPNs do not use encryption",
                  "ZTNA does not require authentication",
                ],
                correctIndex: 1,
                explanation:
                  "VPNs give network-wide access which is overly broad. ZTNA grants access only to specific applications based on identity and context.",
              },
              {
                id: "q2-5-2-3",
                question:
                  "Which detection method can catch new, previously unknown attacks?",
                options: [
                  "Signature-based detection",
                  "Anomaly-based detection",
                  "Rule-based detection only",
                  "None can detect unknown attacks",
                ],
                correctIndex: 1,
                explanation:
                  "Anomaly-based detection establishes normal behavior baselines and alerts on deviations, catching novel threats.",
              },
            ],
          },
        },
        {
          id: "phase-2-module-5-lesson-3",
          slug: "secure-network-architecture",
          moduleId: "phase-2-module-5",
          title: "Secure Network Architecture",
          estimatedMinutes: 35,
          content: {
            sections: [
              {
                heading: "Designing Secure Networks",
                type: "text",
                body: "Secure network architecture follows a set of design principles that minimize attack surface and contain breaches:\n\n**1. Default Deny:** Block all traffic by default and only allow what is explicitly needed.\n\n**2. Minimize Attack Surface:** Disable unnecessary services, close unused ports, remove default accounts.\n\n**3. Defense in Depth:** Layer firewalls, IDS/IPS, WAFs, and endpoint protection.\n\n**4. Segmentation:** Isolate sensitive systems from general-purpose networks.\n\n**5. Principle of Least Privilege:** Network services run with minimum necessary permissions.\n\n**6. Monitoring and Logging:** Comprehensive logging of all network activity, centralized in a SIEM.",
              },
              {
                heading: "Reference Architecture",
                type: "text",
                body: "A typical secure enterprise network architecture includes:\n\n**Internet → Edge Firewall → DMZ**\n- WAF protects web applications\n- Reverse proxy handles incoming requests\n- Public DNS servers\n\n**DMZ → Internal Firewall → Application Zone**\n- Application servers\n- API gateways\n- Microservices\n\n**Application Zone → Data Firewall → Data Zone**\n- Databases\n- Data warehouses\n- Object storage\n\n**Management Zone (Separate)**\n- SIEM/logging\n- Admin jump boxes (bastion hosts)\n- Monitoring tools\n- Accessible only from approved admin stations\n\nEach zone transition requires passing through a firewall with specific rules.",
              },
              {
                heading: "Securing AI/ML Network Architecture",
                type: "text",
                body: "AI/ML workloads add specific network security requirements:\n\n**Training clusters:** Need high-bandwidth internal networking (GPU-to-GPU) but should have no direct internet access. Data flows in through controlled pipelines.\n\n**Model serving endpoints:** Need internet accessibility (for API consumers) but must be behind a WAF and API gateway with rate limiting.\n\n**Data lakes/warehouses:** Must be in private subnets with no direct internet access. Access only through VPC endpoints and controlled IAM policies.\n\n**Notebooks/workspaces:** Interactive environments need controlled internet access (for package installation) but outbound traffic should be filtered through a proxy.\n\n**Feature stores:** Shared resources needing access controls to prevent data leakage between teams.",
              },
              {
                heading: "Databricks Network Architecture",
                type: "note",
                body: "Databricks implements a **control plane / data plane** architecture:\n\n- **Control plane (managed by Databricks):** Workspace UI, job scheduling, cluster management, notebook storage. Runs in Databricks' own cloud account.\n\n- **Data plane (your cloud account):** Compute clusters, data storage, VPC networking. Runs in YOUR cloud account within your VPC.\n\nThis separation means your data never leaves your cloud account. Databricks manages the orchestration, but all computation and data storage happens in your controlled environment.\n\n**Security features:**\n- Private link / private endpoints for control plane communication\n- Customer-managed encryption keys\n- IP access lists to restrict workspace access\n- VPC peering for connecting to other internal services\n\nUnderstanding this architecture is essential for your AI security career.",
              },
              {
                heading: "Network Security Monitoring",
                type: "text",
                body: "Security does not end at deployment. Continuous monitoring is critical:\n\n**Flow logs:** Record metadata about network connections (source, destination, port, bytes transferred). Enable VPC flow logs in cloud environments.\n\n**Packet capture:** Full packet inspection for deep analysis. Tools: Wireshark, tcpdump.\n\n**DNS query logs:** Monitor DNS requests to detect C2 communication and data exfiltration.\n\n**Threat intelligence feeds:** Integrate known malicious IPs, domains, and indicators of compromise into your monitoring.\n\n**Automated alerting:** Configure alerts for unusual patterns: spike in outbound traffic (possible exfiltration), connections to known bad IPs, unauthorized port usage.",
              },
            ],
            keyConcepts: [
              {
                term: "Default Deny",
                definition:
                  "Block all traffic by default; only allow what is explicitly needed.",
              },
              {
                term: "Bastion Host",
                definition:
                  "A hardened server acting as the only entry point for administrative access to internal networks.",
              },
              {
                term: "Control Plane / Data Plane",
                definition:
                  "Architecture separating management functions (control) from data processing (data). Key to Databricks security.",
              },
              {
                term: "VPC Flow Logs",
                definition:
                  "Records of network traffic metadata in cloud environments for security analysis.",
              },
              {
                term: "Private Link",
                definition:
                  "Cloud feature allowing private connections to services without traversing the public internet.",
              },
            ],
            externalResources: [
              {
                title: "Wireshark Tutorial for Beginners",
                url: "https://www.youtube.com/watch?v=lb1Dw0elw0Q",
                type: "video",
                isFree: true,
                description:
                  "Learn to capture and analyze network traffic with Wireshark.",
              },
              {
                title: "Databricks Security Best Practices",
                url: "https://docs.databricks.com/en/security/index.html",
                type: "documentation",
                isFree: true,
                description:
                  "Official Databricks security documentation covering network architecture and controls.",
              },
              {
                title: "TryHackMe - Network Security",
                url: "https://tryhackme.com/",
                type: "course",
                isFree: true,
                description:
                  "Hands-on network security labs in a browser-based environment.",
              },
            ],
          },
          quiz: {
            id: "quiz-2-5-3",
            lessonId: "phase-2-module-5-lesson-3",
            questions: [
              {
                id: "q2-5-3-1",
                question:
                  "In Databricks architecture, where does your data live?",
                options: [
                  "In Databricks' cloud account (control plane)",
                  "In your own cloud account (data plane)",
                  "On Databricks' physical servers",
                  "In a shared multi-tenant environment",
                ],
                correctIndex: 1,
                explanation:
                  "In the control plane / data plane architecture, your data stays in your own cloud account. Databricks only manages orchestration.",
              },
              {
                id: "q2-5-3-2",
                question:
                  "What is the 'default deny' principle in network security?",
                options: [
                  "Deny access to admin accounts by default",
                  "Block all traffic by default and only allow what is explicitly needed",
                  "Deny all external traffic permanently",
                  "Default passwords should be denied",
                ],
                correctIndex: 1,
                explanation:
                  "Default deny means blocking everything and only creating allow rules for traffic that is explicitly needed.",
              },
              {
                id: "q2-5-3-3",
                question:
                  "Why should AI training clusters not have direct internet access?",
                options: [
                  "Internet access makes training slower",
                  "To prevent data exfiltration and reduce attack surface",
                  "Training clusters do not need data",
                  "Internet access is not supported on GPUs",
                ],
                correctIndex: 1,
                explanation:
                  "Training clusters process sensitive data. Direct internet access increases the risk of data exfiltration and attack surface.",
              },
            ],
          },
        },
      ],
    },
  ],
};
