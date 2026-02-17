import type { Phase } from "@/types";

export const phase1: Phase = {
  id: "phase-1",
  slug: "tech-foundations",
  title: "Tech Foundations",
  description:
    "Build a solid base in networking, Linux, cloud computing, and Python. These are the prerequisite skills that everything else in AI security builds upon.",
  weekRange: "Weeks 1-4",
  estimatedHours: 40,
  icon: "Monitor",
  color: "blue",
  modules: [
    // ==================== MODULE 1: NETWORKING ====================
    {
      id: "phase-1-module-1",
      slug: "networking-basics",
      phaseId: "phase-1",
      title: "Computer Networking Basics",
      description:
        "Understand how computers communicate over networks. Learn the foundational protocols, addressing schemes, and network models that underpin all cybersecurity.",
      estimatedHours: 10,
      labExercise: {
        title: "Network Exploration Lab",
        objective:
          "Use command-line tools to examine your own network configuration and trace how data travels across the internet.",
        instructions: [
          "Open Terminal on your Mac.",
          "Run 'ifconfig' and identify your local IP address, subnet mask, and default gateway.",
          "Run 'ping google.com' and observe the round-trip times.",
          "Run 'traceroute google.com' and count the number of hops.",
          "Run 'nslookup google.com' to see DNS resolution in action.",
          "Open your browser DevTools (F12), go to the Network tab, and load a website. Observe the HTTP requests and status codes.",
          "Write a short paragraph summarizing what you learned about your network path.",
        ],
        deliverable:
          "A text document with your terminal outputs and a summary paragraph explaining each command's output.",
        estimatedMinutes: 45,
      },
      lessons: [
        {
          id: "phase-1-module-1-lesson-1",
          slug: "what-is-a-network",
          moduleId: "phase-1-module-1",
          title: "What Is a Computer Network?",
          estimatedMinutes: 25,
          content: {
            sections: [
              {
                heading: "Introduction",
                type: "text",
                body: "A computer network is a collection of devices -- computers, servers, smartphones, printers -- connected together so they can share data and resources. Every time you load a website, send an email, or stream a video, your device is communicating over a network.\n\nUnderstanding networking is the single most important foundation for cybersecurity. Attackers exploit networks to gain access, move laterally, and exfiltrate data. Defenders must understand how networks work to protect them.",
              },
              {
                heading: "Types of Networks",
                type: "text",
                body: "Networks are categorized by their size and scope:\n\n**LAN (Local Area Network):** A network within a single building or campus. Your home Wi-Fi is a LAN. Typical range: up to a few hundred meters.\n\n**WAN (Wide Area Network):** A network that spans large geographic areas. The internet itself is the largest WAN.\n\n**MAN (Metropolitan Area Network):** Covers a city or large campus. Often used by ISPs and universities.\n\n**PAN (Personal Area Network):** Very short range, connecting personal devices. Bluetooth is a PAN technology.",
              },
              {
                heading: "How Devices Communicate",
                type: "text",
                body: "For two devices to communicate, they need three things:\n\n1. **A physical or wireless connection** -- Ethernet cables, Wi-Fi, fiber optics, or cellular signals provide the medium.\n\n2. **An addressing scheme** -- Each device needs a unique address so data reaches the right destination. IP addresses serve this role.\n\n3. **A set of rules (protocols)** -- Both sides must agree on how to format, send, and interpret data. HTTP, TCP, and DNS are examples of protocols.",
              },
              {
                heading: "Client-Server vs. Peer-to-Peer",
                type: "text",
                body: "**Client-Server:** One device (the client) requests a service, and another (the server) provides it. When you visit a website, your browser is the client and the web server is the server.\n\n**Peer-to-Peer (P2P):** Devices communicate directly as equals. BitTorrent file sharing is a classic example.",
              },
              {
                heading: "Why This Matters for Security",
                type: "note",
                body: "Every network connection is a potential attack surface. Understanding how devices find each other (DNS), how data travels (routing), and how connections are established (TCP handshake) lets you understand where attackers can intercept, redirect, or manipulate traffic.",
              },
            ],
            keyConcepts: [
              { term: "LAN", definition: "Local Area Network -- a network confined to a small geographic area like a home or office." },
              { term: "WAN", definition: "Wide Area Network -- a network spanning large distances, connecting multiple LANs." },
              { term: "Protocol", definition: "A set of rules governing how data is formatted, transmitted, and received." },
              { term: "Client-Server Model", definition: "Architecture where clients request services and servers provide them." },
              { term: "IP Address", definition: "A unique numerical label assigned to each device on a network." },
            ],
            externalResources: [
              {
                title: "Computer Networking Full Course - Kunal Kushwaha",
                url: "https://www.youtube.com/watch?v=IPvYjXCsTg8",
                type: "video",
                isFree: true,
                description: "Comprehensive free networking course from basics to advanced.",
              },
              {
                title: "Computer Networking - Khan Academy",
                url: "https://www.khanacademy.org/computing/computers-and-internet",
                type: "course",
                isFree: true,
                description: "Interactive lessons on how the internet works.",
              },
            ],
          },
          quiz: {
            id: "quiz-1-1-1",
            lessonId: "phase-1-module-1-lesson-1",
            questions: [
              {
                id: "q1-1-1-1",
                question: "Which type of network typically covers a single building?",
                options: ["WAN", "LAN", "MAN", "The Internet"],
                correctIndex: 1,
                explanation: "A LAN (Local Area Network) covers a small geographic area like a building or campus.",
              },
              {
                id: "q1-1-1-2",
                question: "What three things do devices need to communicate over a network?",
                options: [
                  "A screen, a keyboard, and a mouse",
                  "A connection, an address, and a protocol",
                  "A server, a database, and an API",
                  "Wi-Fi, Bluetooth, and Ethernet",
                ],
                correctIndex: 1,
                explanation: "Devices need a connection (medium), an addressing scheme (like IP), and protocols (rules).",
              },
              {
                id: "q1-1-1-3",
                question: "In the client-server model, which device initiates the request?",
                options: ["The server", "The router", "The client", "The switch"],
                correctIndex: 2,
                explanation: "The client initiates requests (e.g., your web browser) and the server responds.",
              },
            ],
          },
        },
        {
          id: "phase-1-module-1-lesson-2",
          slug: "osi-and-tcp-ip-models",
          moduleId: "phase-1-module-1",
          title: "The OSI and TCP/IP Models",
          estimatedMinutes: 35,
          content: {
            sections: [
              {
                heading: "Introduction",
                type: "text",
                body: "When data travels across a network, it passes through multiple layers of processing. The OSI model (7 layers) and TCP/IP model (4 layers) describe these layers. Understanding them helps you pinpoint where security issues occur.",
              },
              {
                heading: "The OSI Model (7 Layers)",
                type: "text",
                body: "**Layer 7 -- Application:** Where users interact (HTTP, HTTPS, FTP, DNS, SMTP).\n\n**Layer 6 -- Presentation:** Handles data formatting and encryption. SSL/TLS operates here.\n\n**Layer 5 -- Session:** Manages sessions between applications.\n\n**Layer 4 -- Transport:** Ensures reliable delivery. TCP (reliable) and UDP (fast) operate here.\n\n**Layer 3 -- Network:** Handles IP addresses and routing. Routers operate here.\n\n**Layer 2 -- Data Link:** Handles MAC addresses and frames. Switches operate here.\n\n**Layer 1 -- Physical:** Raw bit transmission -- cables, radio waves, fiber optics.",
              },
              {
                heading: "Memory Aid",
                type: "example",
                body: "Remember OSI layers (bottom to top) with: **P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way\n\nPhysical, Data Link, Network, Transport, Session, Presentation, Application.",
              },
              {
                heading: "The TCP/IP Model (4 Layers)",
                type: "text",
                body: "**Application:** Combines OSI layers 5-7. HTTP, DNS, SSH.\n**Transport:** TCP and UDP (same as OSI layer 4).\n**Internet:** IP addressing and routing (same as OSI layer 3).\n**Network Access:** Physical connections and local addressing (OSI layers 1-2).",
              },
              {
                heading: "Security at Each Layer",
                type: "warning",
                body: "Attacks target every layer:\n- **Physical:** Wiretapping, physical access\n- **Data Link:** MAC spoofing, ARP poisoning\n- **Network:** IP spoofing, DDoS\n- **Transport:** SYN floods, port scanning\n- **Application:** SQL injection, XSS, phishing\n\nAs an AI security professional, you will primarily work at the application and network layers.",
              },
            ],
            keyConcepts: [
              { term: "OSI Model", definition: "7-layer framework: Physical, Data Link, Network, Transport, Session, Presentation, Application." },
              { term: "TCP/IP Model", definition: "4-layer practical model: Network Access, Internet, Transport, Application." },
              { term: "Encapsulation", definition: "Adding headers at each layer as data moves down the stack before transmission." },
              { term: "TCP", definition: "Transmission Control Protocol -- reliable, ordered delivery with error checking." },
              { term: "UDP", definition: "User Datagram Protocol -- fast, connectionless delivery without guarantees." },
            ],
            externalResources: [
              {
                title: "OSI vs TCP/IP Model - NetworkChuck",
                url: "https://www.youtube.com/watch?v=3kfO61Mensg",
                type: "video",
                isFree: true,
                description: "Entertaining comparison of the two networking models.",
              },
              {
                title: "OSI Model Explained - TechTarget",
                url: "https://www.techtarget.com/searchnetworking/definition/OSI",
                type: "article",
                isFree: true,
                description: "Detailed breakdown of each OSI layer.",
              },
            ],
          },
          quiz: {
            id: "quiz-1-1-2",
            lessonId: "phase-1-module-1-lesson-2",
            questions: [
              {
                id: "q1-1-2-1",
                question: "How many layers does the OSI model have?",
                options: ["4", "5", "6", "7"],
                correctIndex: 3,
                explanation: "The OSI model has 7 layers: Physical through Application.",
              },
              {
                id: "q1-1-2-2",
                question: "Which protocol provides reliable, ordered data delivery?",
                options: ["UDP", "TCP", "IP", "HTTP"],
                correctIndex: 1,
                explanation: "TCP provides reliable, ordered delivery. UDP is faster but without guarantees.",
              },
              {
                id: "q1-1-2-3",
                question: "At which OSI layer do routers and IP addresses operate?",
                options: ["Layer 1 - Physical", "Layer 2 - Data Link", "Layer 3 - Network", "Layer 4 - Transport"],
                correctIndex: 2,
                explanation: "Layer 3 (Network) handles IP addressing and routing decisions.",
              },
            ],
          },
        },
        {
          id: "phase-1-module-1-lesson-3",
          slug: "ip-addressing-and-dns",
          moduleId: "phase-1-module-1",
          title: "IP Addressing, Subnets, and DNS",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "IPv4 Addresses",
                type: "text",
                body: "An IPv4 address is a 32-bit number written as four octets: **192.168.1.100**\n\nEach octet ranges from 0 to 255, giving ~4.3 billion addresses.\n\n**Private vs Public:**\n- **Private:** Used inside local networks (192.168.x.x, 10.x.x.x, 172.16.x.x). Not routable on the internet.\n- **Public:** Assigned by your ISP, visible to the world.\n\nYour router uses **NAT** (Network Address Translation) to map private addresses to its public address.",
              },
              {
                heading: "Subnets and CIDR",
                type: "text",
                body: "A subnet divides a network into smaller segments for performance and security.\n\n**CIDR Notation:** 192.168.1.0/24 means the first 24 bits are the network portion, leaving 8 bits (254 usable hosts).\n\nCommon subnets:\n- /24 = 254 usable addresses\n- /16 = 65,534 addresses\n- /8 = 16.7 million addresses",
              },
              {
                heading: "DNS -- The Internet's Phone Book",
                type: "text",
                body: "DNS translates domain names (google.com) to IP addresses (142.250.80.46).\n\n**How a DNS lookup works:**\n1. You type 'google.com' in your browser\n2. Your computer checks its local DNS cache\n3. If not cached, it asks your DNS resolver\n4. The resolver queries root servers, then TLD servers (.com), then authoritative servers\n5. The IP is returned, cached, and your browser connects",
              },
              {
                heading: "DNS Security Implications",
                type: "warning",
                body: "DNS is a high-value attack target:\n- **DNS Spoofing:** Injecting false records to redirect users\n- **DNS Tunneling:** Encoding data in DNS queries to bypass firewalls\n- **DNS Hijacking:** Changing DNS settings to redirect all traffic\n\nDefenses include DNSSEC, DNS-over-HTTPS, and DNS query monitoring.",
              },
            ],
            keyConcepts: [
              { term: "IPv4", definition: "Internet Protocol version 4 -- uses 32-bit addresses (e.g., 192.168.1.1)." },
              { term: "NAT", definition: "Network Address Translation -- maps private IPs to a single public IP." },
              { term: "CIDR", definition: "Classless Inter-Domain Routing -- notation like /24 indicating network vs host bits." },
              { term: "DNS", definition: "Domain Name System -- translates domain names to IP addresses." },
              { term: "DNS Spoofing", definition: "Attack injecting false DNS records to redirect users to malicious IPs." },
            ],
            externalResources: [
              {
                title: "How DNS Works - Cloudflare",
                url: "https://www.cloudflare.com/learning/dns/what-is-dns/",
                type: "article",
                isFree: true,
                description: "Visual explanation of DNS with diagrams.",
              },
              {
                title: "Subnet Calculator",
                url: "https://www.subnet-calculator.com/",
                type: "tool",
                isFree: true,
                description: "Interactive tool for calculating subnet ranges.",
              },
            ],
          },
          quiz: {
            id: "quiz-1-1-3",
            lessonId: "phase-1-module-1-lesson-3",
            questions: [
              {
                id: "q1-1-3-1",
                question: "Which is a private IP address range?",
                options: ["8.8.8.0/24", "192.168.0.0/16", "142.250.0.0/16", "1.1.1.0/24"],
                correctIndex: 1,
                explanation: "192.168.0.0/16 is a private range. The others are public addresses.",
              },
              {
                id: "q1-1-3-2",
                question: "What does DNS stand for?",
                options: ["Digital Network Service", "Domain Name System", "Data Network Security", "Dynamic Node Switching"],
                correctIndex: 1,
                explanation: "DNS stands for Domain Name System.",
              },
              {
                id: "q1-1-3-3",
                question: "How many usable host addresses does a /24 subnet provide?",
                options: ["24", "128", "254", "256"],
                correctIndex: 2,
                explanation: "A /24 has 256 total addresses minus 2 reserved = 254 usable.",
              },
            ],
          },
        },
      ],
    },
    // ==================== MODULE 2: LINUX/CLI ====================
    {
      id: "phase-1-module-2",
      slug: "linux-command-line",
      phaseId: "phase-1",
      title: "Linux/Command Line Fundamentals",
      description:
        "Master the command line: navigation, file operations, permissions, and essential tools used daily in security work.",
      estimatedHours: 10,
      labExercise: {
        title: "Command Line Challenge",
        objective: "Navigate the filesystem, create files, set permissions, and use pipes to process data.",
        instructions: [
          "Open Terminal and navigate to your home directory with 'cd ~'.",
          "Create a directory structure: ~/security-lab/logs/ and ~/security-lab/scripts/.",
          "Create a file called 'access.log' in the logs directory with some sample text.",
          "Use chmod to set the file to read-only (444).",
          "Use grep to search for a specific word in the file.",
          "Use pipes to chain commands: ls -la | grep '.log' | wc -l.",
          "Use find to locate all .log files in your home directory.",
        ],
        deliverable: "Screenshots or text output showing each command and its result.",
        estimatedMinutes: 45,
      },
      lessons: [
        {
          id: "phase-1-module-2-lesson-1",
          slug: "intro-to-command-line",
          moduleId: "phase-1-module-2",
          title: "Introduction to the Command Line",
          estimatedMinutes: 25,
          content: {
            sections: [
              {
                heading: "Why the Command Line?",
                type: "text",
                body: "The command line (CLI) is the primary interface for security professionals. While GUIs are user-friendly, the CLI offers:\n\n- **Speed:** Tasks that take minutes in a GUI take seconds in CLI\n- **Automation:** Scripts can run commands unattended\n- **Remote access:** SSH gives you CLI access to remote servers\n- **Power:** Many security tools are CLI-only",
              },
              {
                heading: "Terminal vs Shell",
                type: "text",
                body: "The **terminal** is the window application (Terminal.app on Mac, Windows Terminal, iTerm2).\n\nThe **shell** is the program running inside it that interprets your commands. Common shells:\n- **bash** (Bourne Again Shell) -- the most common on Linux\n- **zsh** -- default on macOS, superset of bash\n- **fish** -- user-friendly with autosuggestions",
              },
              {
                heading: "Basic Navigation",
                type: "text",
                body: "**pwd** -- Print Working Directory (where am I?)\n**ls** -- List files in current directory\n**ls -la** -- List all files including hidden, with details\n**cd /path** -- Change directory\n**cd ..** -- Go up one directory\n**cd ~** -- Go to home directory\n**mkdir dirname** -- Create a directory\n**rmdir dirname** -- Remove empty directory",
              },
              {
                heading: "File Operations",
                type: "text",
                body: "**touch file.txt** -- Create an empty file\n**cp source dest** -- Copy a file\n**mv source dest** -- Move or rename a file\n**rm file.txt** -- Delete a file\n**rm -r dirname** -- Delete directory and contents\n**cat file.txt** -- Display file contents\n**less file.txt** -- View file with scrolling\n**head -n 10 file** -- First 10 lines\n**tail -n 10 file** -- Last 10 lines",
              },
              {
                heading: "Be Careful with rm",
                type: "warning",
                body: "There is no recycle bin in the terminal. 'rm' permanently deletes files. 'rm -rf /' would attempt to delete your entire system. Always double-check your rm commands, especially with wildcards (*) or the -r (recursive) flag.",
              },
            ],
            keyConcepts: [
              { term: "Shell", definition: "A program that interprets text commands (bash, zsh, fish)." },
              { term: "pwd", definition: "Print Working Directory -- shows your current location in the filesystem." },
              { term: "ls", definition: "List -- shows files and directories. Use -la for detailed view including hidden files." },
              { term: "cd", definition: "Change Directory -- navigate the filesystem." },
              { term: "Absolute vs Relative Path", definition: "Absolute starts from / (root). Relative starts from current directory." },
            ],
            externalResources: [
              {
                title: "Linux Command Line for Beginners - freeCodeCamp",
                url: "https://www.youtube.com/watch?v=ZtqBQ68cfJc",
                type: "video",
                isFree: true,
                description: "Beginner-friendly Linux command line tutorial.",
              },
              {
                title: "The Linux Command Line (free book)",
                url: "https://linuxcommand.org/tlcl.php",
                type: "article",
                isFree: true,
                description: "Free comprehensive book on the Linux command line.",
              },
            ],
          },
          quiz: {
            id: "quiz-1-2-1",
            lessonId: "phase-1-module-2-lesson-1",
            questions: [
              {
                id: "q1-2-1-1",
                question: "What command shows your current directory?",
                options: ["ls", "cd", "pwd", "dir"],
                correctIndex: 2,
                explanation: "pwd (Print Working Directory) shows your current location.",
              },
              {
                id: "q1-2-1-2",
                question: "What does 'ls -la' show that 'ls' doesn't?",
                options: ["Nothing extra", "Hidden files and detailed info", "Only directories", "File contents"],
                correctIndex: 1,
                explanation: "-l shows long format (permissions, size, date). -a shows hidden files (starting with dot).",
              },
              {
                id: "q1-2-1-3",
                question: "Why is 'rm -rf' dangerous?",
                options: [
                  "It's slow",
                  "It only works on empty directories",
                  "It permanently deletes files recursively with no confirmation",
                  "It requires root access",
                ],
                correctIndex: 2,
                explanation: "rm -rf recursively force-deletes everything with no undo or confirmation.",
              },
            ],
          },
        },
        {
          id: "phase-1-module-2-lesson-2",
          slug: "file-permissions",
          moduleId: "phase-1-module-2",
          title: "File Permissions and Users",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "Linux File Permissions",
                type: "text",
                body: "Every file has three permission sets: **Owner**, **Group**, and **Others**.\n\nEach set has three permissions:\n- **r (read)** -- view file contents / list directory\n- **w (write)** -- modify file / create files in directory\n- **x (execute)** -- run as program / enter directory\n\nExample: -rwxr-xr-- means:\n- Owner: read, write, execute\n- Group: read, execute\n- Others: read only",
              },
              {
                heading: "chmod -- Changing Permissions",
                type: "text",
                body: "**Numeric mode:** Each permission has a value: r=4, w=2, x=1\n\nchmod 755 file -- Owner: rwx(7), Group: r-x(5), Others: r-x(5)\nchmod 644 file -- Owner: rw-(6), Group: r--(4), Others: r--(4)\nchmod 600 file -- Owner: rw-(6), Group: ---(0), Others: ---(0)\n\n**Symbolic mode:**\nchmod u+x file -- Add execute for user(owner)\nchmod g-w file -- Remove write for group\nchmod o=r file -- Set others to read only",
              },
              {
                heading: "Users, Groups, and sudo",
                type: "text",
                body: "**chown user:group file** -- Change file ownership\n**whoami** -- Show current user\n**groups** -- Show your groups\n**sudo command** -- Run command as superuser (root)\n\nThe root user (UID 0) has unrestricted access to everything. Regular users should use sudo only when necessary.",
              },
              {
                heading: "Principle of Least Privilege",
                type: "note",
                body: "In security, the Principle of Least Privilege states that users and processes should have only the minimum permissions needed. Never run services as root. Never give 777 permissions (everyone can do everything). This principle is foundational to AI security -- it applies to data access, model access, and API permissions.",
              },
            ],
            keyConcepts: [
              { term: "rwx", definition: "Read, Write, Execute -- the three permission types in Linux." },
              { term: "chmod", definition: "Change Mode -- command to modify file permissions." },
              { term: "chown", definition: "Change Owner -- command to change file ownership." },
              { term: "sudo", definition: "Superuser Do -- execute a command with root (administrator) privileges." },
              { term: "Least Privilege", definition: "Security principle: grant only the minimum permissions needed." },
            ],
            externalResources: [
              {
                title: "Linux File Permissions Explained - TechTarget",
                url: "https://www.techtarget.com/searchnetworking/tip/Understanding-Linux-file-permissions",
                type: "article",
                isFree: true,
                description: "Detailed guide to Linux permissions with examples.",
              },
            ],
          },
          quiz: {
            id: "quiz-1-2-2",
            lessonId: "phase-1-module-2-lesson-2",
            questions: [
              {
                id: "q1-2-2-1",
                question: "What does chmod 644 mean?",
                options: [
                  "Owner: rwx, Group: rw, Others: r",
                  "Owner: rw, Group: r, Others: r",
                  "Owner: r, Group: rw, Others: rw",
                  "Everyone gets full access",
                ],
                correctIndex: 1,
                explanation: "6=rw-(4+2), 4=r--(4), 4=r--(4). Owner can read/write, everyone else can only read.",
              },
              {
                id: "q1-2-2-2",
                question: "What does 'sudo' do?",
                options: [
                  "Switches to a different user",
                  "Runs a command with root privileges",
                  "Deletes a user account",
                  "Shows user permissions",
                ],
                correctIndex: 1,
                explanation: "sudo runs the following command with superuser (root) privileges.",
              },
              {
                id: "q1-2-2-3",
                question: "What security principle says to grant minimum necessary permissions?",
                options: ["Defense in Depth", "Zero Trust", "Least Privilege", "Separation of Duties"],
                correctIndex: 2,
                explanation: "The Principle of Least Privilege: give only the permissions needed, nothing more.",
              },
            ],
          },
        },
        {
          id: "phase-1-module-2-lesson-3",
          slug: "essential-cli-tools",
          moduleId: "phase-1-module-2",
          title: "Essential Command Line Tools",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "Search and Filter",
                type: "text",
                body: "**grep** -- Search for patterns in text:\ngrep 'error' logfile.txt -- Find lines containing 'error'\ngrep -i 'error' logfile.txt -- Case-insensitive\ngrep -r 'password' /etc/ -- Recursive search in directory\ngrep -c 'failed' auth.log -- Count matching lines\n\n**find** -- Locate files:\nfind / -name '*.log' -- Find all .log files\nfind /home -type f -size +100M -- Files larger than 100MB\nfind /tmp -mtime -1 -- Files modified in last 24 hours",
              },
              {
                heading: "Pipes and Redirects",
                type: "text",
                body: "**Pipes (|)** send output of one command as input to another:\nls -la | grep '.txt' -- List only .txt files\ncat access.log | sort | uniq -c | sort -rn | head -- Top repeated lines\n\n**Redirects:**\ncommand > file -- Write output to file (overwrite)\ncommand >> file -- Append output to file\ncommand 2> errors.log -- Redirect errors to file\ncommand &> all.log -- Redirect both output and errors",
              },
              {
                heading: "Network Tools",
                type: "text",
                body: "**curl** -- Transfer data from URLs:\ncurl https://api.example.com/data\ncurl -o file.zip https://example.com/file.zip\n\n**wget** -- Download files:\nwget https://example.com/file.zip\n\n**ss** (or netstat) -- Show network connections:\nss -tulnp -- Show listening TCP/UDP ports with process names",
              },
              {
                heading: "Process Management",
                type: "text",
                body: "**ps aux** -- List all running processes\n**top** (or htop) -- Real-time process monitor\n**kill PID** -- Send termination signal to a process\n**kill -9 PID** -- Force kill a process\n**jobs** -- List background jobs\n**command &** -- Run command in background",
              },
            ],
            keyConcepts: [
              { term: "grep", definition: "Search for text patterns in files or output. Essential for log analysis." },
              { term: "Pipe (|)", definition: "Sends the output of one command as input to another, enabling command chaining." },
              { term: "find", definition: "Locate files in the filesystem by name, type, size, or modification time." },
              { term: "curl", definition: "Transfer data from or to URLs. Used for API testing and file downloads." },
            ],
            externalResources: [
              {
                title: "Linux Essentials for Hackers - HackerSploit",
                url: "https://www.youtube.com/watch?v=1hvVcEhcbLM",
                type: "video",
                isFree: true,
                description: "Linux command line tools from a cybersecurity perspective.",
              },
            ],
          },
          quiz: {
            id: "quiz-1-2-3",
            lessonId: "phase-1-module-2-lesson-3",
            questions: [
              {
                id: "q1-2-3-1",
                question: "What does the pipe (|) operator do?",
                options: [
                  "Writes output to a file",
                  "Sends output of one command as input to another",
                  "Runs two commands simultaneously",
                  "Creates a backup of a command",
                ],
                correctIndex: 1,
                explanation: "The pipe sends stdout of the left command as stdin to the right command.",
              },
              {
                id: "q1-2-3-2",
                question: "Which command searches for text patterns in files?",
                options: ["find", "grep", "locate", "search"],
                correctIndex: 1,
                explanation: "grep searches for text patterns. find locates files by name/attributes.",
              },
              {
                id: "q1-2-3-3",
                question: "What does 'command > file.txt' do?",
                options: [
                  "Appends output to file",
                  "Reads from file",
                  "Writes output to file, overwriting existing content",
                  "Compares command output with file",
                ],
                correctIndex: 2,
                explanation: "> redirects output to a file, overwriting it. >> appends instead.",
              },
            ],
          },
        },
      ],
    },
    // ==================== MODULE 3: CLOUD ====================
    {
      id: "phase-1-module-3",
      slug: "cloud-computing",
      phaseId: "phase-1",
      title: "Cloud Computing Concepts",
      description:
        "Understand cloud service models, major providers, cloud architecture, and foundational cloud security concepts.",
      estimatedHours: 10,
      labExercise: {
        title: "Cloud Console Exploration",
        objective: "Create a free cloud account and explore the management console to understand cloud services.",
        instructions: [
          "Sign up for AWS Free Tier (aws.amazon.com/free) or Azure Free Account.",
          "Log into the cloud console and explore the dashboard.",
          "Navigate to the IAM (Identity and Access Management) section.",
          "Examine the default security settings and policies.",
          "Look at the available compute, storage, and networking services.",
          "Take note of the security-related services (Security Hub, GuardDuty, etc.).",
        ],
        deliverable: "A document listing 5 security features you found and a brief description of each.",
        estimatedMinutes: 60,
      },
      lessons: [
        {
          id: "phase-1-module-3-lesson-1",
          slug: "what-is-cloud-computing",
          moduleId: "phase-1-module-3",
          title: "What Is Cloud Computing?",
          estimatedMinutes: 25,
          content: {
            sections: [
              {
                heading: "Cloud Service Models",
                type: "text",
                body: "Cloud computing delivers IT resources over the internet. Three main service models:\n\n**IaaS (Infrastructure as a Service):** Virtual machines, storage, networking. You manage the OS and everything above it. Examples: AWS EC2, Azure VMs, GCP Compute Engine.\n\n**PaaS (Platform as a Service):** Development platforms where you deploy code without managing infrastructure. Examples: Heroku, AWS Elastic Beanstalk, Google App Engine.\n\n**SaaS (Software as a Service):** Ready-to-use applications. Examples: Gmail, Salesforce, Slack, Databricks.",
              },
              {
                heading: "The Big Three Cloud Providers",
                type: "text",
                body: "**AWS (Amazon Web Services):** Market leader (~32% share). Most services, most mature.\n\n**Microsoft Azure:** Strong enterprise presence (~23% share). Deep integration with Microsoft products.\n\n**Google Cloud (GCP):** Strong in AI/ML and data analytics (~11% share). Home of BigQuery and Vertex AI.\n\n**Databricks runs on all three** -- it deploys on AWS, Azure, and GCP, making it cloud-agnostic.",
              },
              {
                heading: "Why Companies Use the Cloud",
                type: "text",
                body: "- **Scalability:** Scale up or down in minutes, not months\n- **Cost:** Pay only for what you use (no upfront hardware costs)\n- **Global reach:** Deploy worldwide instantly\n- **Managed services:** Let the cloud provider handle maintenance\n- **Speed:** Spin up entire environments in minutes",
              },
            ],
            keyConcepts: [
              { term: "IaaS", definition: "Infrastructure as a Service -- virtual machines and raw computing resources." },
              { term: "PaaS", definition: "Platform as a Service -- managed development environments." },
              { term: "SaaS", definition: "Software as a Service -- ready-to-use applications delivered via browser." },
              { term: "Cloud-Agnostic", definition: "Software that runs on multiple cloud providers without modification." },
            ],
            externalResources: [
              {
                title: "Cloud Computing Full Course - freeCodeCamp",
                url: "https://www.youtube.com/watch?v=M988_fsOSt0",
                type: "video",
                isFree: true,
                description: "Comprehensive cloud computing course for beginners.",
              },
            ],
          },
          quiz: {
            id: "quiz-1-3-1",
            lessonId: "phase-1-module-3-lesson-1",
            questions: [
              {
                id: "q1-3-1-1",
                question: "Which cloud model gives you virtual machines to manage yourself?",
                options: ["SaaS", "PaaS", "IaaS", "FaaS"],
                correctIndex: 2,
                explanation: "IaaS provides virtual infrastructure -- you manage the OS and applications.",
              },
              {
                id: "q1-3-1-2",
                question: "On which cloud providers can Databricks run?",
                options: ["AWS only", "Azure only", "AWS, Azure, and GCP", "GCP only"],
                correctIndex: 2,
                explanation: "Databricks is cloud-agnostic and runs on all three major providers.",
              },
              {
                id: "q1-3-1-3",
                question: "What type of cloud service is Gmail?",
                options: ["IaaS", "PaaS", "SaaS", "FaaS"],
                correctIndex: 2,
                explanation: "Gmail is SaaS -- a ready-to-use application delivered through a browser.",
              },
            ],
          },
        },
        {
          id: "phase-1-module-3-lesson-2",
          slug: "cloud-architecture-basics",
          moduleId: "phase-1-module-3",
          title: "Cloud Architecture Basics",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "Regions and Availability Zones",
                type: "text",
                body: "Cloud providers operate data centers worldwide organized as:\n\n**Regions:** Geographic locations (us-east-1, eu-west-1). Choose regions close to your users for lower latency.\n\n**Availability Zones (AZs):** Isolated data centers within a region. Each region has 2-6 AZs. Spreading resources across AZs protects against single data center failures.",
              },
              {
                heading: "Core Services",
                type: "text",
                body: "**Compute:** Virtual machines (EC2), containers (ECS/EKS), serverless (Lambda)\n\n**Storage:** Object storage (S3), block storage (EBS), file storage (EFS)\n\n**Networking:** Virtual networks (VPC), load balancers, DNS (Route 53), CDN (CloudFront)\n\n**Databases:** Relational (RDS), NoSQL (DynamoDB), data warehouses (Redshift)",
              },
              {
                heading: "VPC -- Your Private Cloud Network",
                type: "note",
                body: "A Virtual Private Cloud (VPC) is an isolated network you define within the cloud. You control IP ranges, subnets, routing, and security rules. Think of it as your own private data center inside the cloud provider. Databricks workspaces are typically deployed within a VPC for network isolation.",
              },
            ],
            keyConcepts: [
              { term: "Region", definition: "A geographic location with multiple data centers operated by a cloud provider." },
              { term: "Availability Zone", definition: "An isolated data center within a region for fault tolerance." },
              { term: "VPC", definition: "Virtual Private Cloud -- your isolated network within the cloud provider." },
              { term: "Object Storage", definition: "Storage for files/objects (like S3) -- scalable, durable, and cheap." },
            ],
            externalResources: [
              {
                title: "AWS Global Infrastructure",
                url: "https://aws.amazon.com/about-aws/global-infrastructure/",
                type: "documentation",
                isFree: true,
                description: "Interactive map of AWS regions and availability zones.",
              },
            ],
          },
          quiz: {
            id: "quiz-1-3-2",
            lessonId: "phase-1-module-3-lesson-2",
            questions: [
              {
                id: "q1-3-2-1",
                question: "What is an Availability Zone?",
                options: [
                  "A geographic region",
                  "An isolated data center within a region",
                  "A type of firewall",
                  "A DNS configuration",
                ],
                correctIndex: 1,
                explanation: "AZs are isolated data centers within a region, providing fault tolerance.",
              },
              {
                id: "q1-3-2-2",
                question: "What is a VPC?",
                options: [
                  "A type of virtual machine",
                  "An isolated private network in the cloud",
                  "A version control system",
                  "A cloud pricing model",
                ],
                correctIndex: 1,
                explanation: "VPC = Virtual Private Cloud -- your isolated network within the cloud.",
              },
              {
                id: "q1-3-2-3",
                question: "Which is an example of object storage?",
                options: ["Amazon EC2", "Amazon S3", "Amazon RDS", "Amazon VPC"],
                correctIndex: 1,
                explanation: "S3 (Simple Storage Service) is Amazon's object storage service.",
              },
            ],
          },
        },
        {
          id: "phase-1-module-3-lesson-3",
          slug: "cloud-security-fundamentals",
          moduleId: "phase-1-module-3",
          title: "Cloud Security Fundamentals",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "The Shared Responsibility Model",
                type: "text",
                body: "In cloud computing, security is shared between the provider and the customer:\n\n**Cloud provider is responsible for:** Physical security, hardware, hypervisor, network infrastructure, global infrastructure.\n\n**Customer is responsible for:** Data, applications, identity management, OS patching, network configuration, encryption settings.\n\nThe dividing line shifts depending on the service model. With IaaS you manage more; with SaaS the provider manages more.",
              },
              {
                heading: "IAM -- Identity and Access Management",
                type: "text",
                body: "IAM controls who can do what in your cloud environment:\n\n- **Users:** Individual identities (people or services)\n- **Groups:** Collections of users with shared permissions\n- **Roles:** Temporary permission sets that can be assumed\n- **Policies:** JSON documents defining allowed/denied actions\n\nBest practices: Enable MFA, use roles instead of long-lived keys, follow least privilege.",
              },
              {
                heading: "Encryption",
                type: "text",
                body: "**At rest:** Data stored on disk is encrypted (AES-256 is standard). Cloud providers offer managed encryption keys (KMS).\n\n**In transit:** Data moving over networks is encrypted with TLS/SSL. Always use HTTPS.\n\n**In use:** Emerging technology (confidential computing) encrypts data even while being processed.",
              },
              {
                heading: "This Is Where AI Security Lives",
                type: "note",
                body: "Cloud security is the foundation of AI security. AI workloads run in the cloud. Databricks workspaces, ML training clusters, model endpoints -- they all live inside VPCs with IAM policies and encryption. The skills from this lesson directly apply to securing AI infrastructure.",
              },
            ],
            keyConcepts: [
              { term: "Shared Responsibility", definition: "Cloud provider secures infrastructure; customer secures their data and applications." },
              { term: "IAM", definition: "Identity and Access Management -- controls who can access what in the cloud." },
              { term: "MFA", definition: "Multi-Factor Authentication -- requiring two or more verification methods." },
              { term: "Encryption at Rest", definition: "Encrypting stored data so it's unreadable without the key." },
              { term: "Encryption in Transit", definition: "Encrypting data as it moves over networks (TLS/SSL)." },
            ],
            externalResources: [
              {
                title: "AWS Shared Responsibility Model",
                url: "https://aws.amazon.com/compliance/shared-responsibility-model/",
                type: "documentation",
                isFree: true,
                description: "Official AWS documentation on the shared responsibility model.",
              },
              {
                title: "Cloud Security - Cloudflare Learning",
                url: "https://www.cloudflare.com/learning/cloud/what-is-cloud-security/",
                type: "article",
                isFree: true,
                description: "Clear overview of cloud security concepts.",
              },
            ],
          },
          quiz: {
            id: "quiz-1-3-3",
            lessonId: "phase-1-module-3-lesson-3",
            questions: [
              {
                id: "q1-3-3-1",
                question: "In the shared responsibility model, who is responsible for data encryption?",
                options: ["The cloud provider only", "The customer", "Both equally", "Neither"],
                correctIndex: 1,
                explanation: "The customer is responsible for their data, including choosing to encrypt it.",
              },
              {
                id: "q1-3-3-2",
                question: "What does IAM stand for?",
                options: [
                  "Internet Access Management",
                  "Identity and Access Management",
                  "Infrastructure and Application Monitoring",
                  "Integrated Authentication Module",
                ],
                correctIndex: 1,
                explanation: "IAM = Identity and Access Management.",
              },
              {
                id: "q1-3-3-3",
                question: "What type of encryption protects data moving over networks?",
                options: ["Encryption at rest", "Encryption in transit", "Encryption in use", "Hashing"],
                correctIndex: 1,
                explanation: "Encryption in transit (TLS/SSL) protects data as it travels over networks.",
              },
            ],
          },
        },
      ],
    },
    // ==================== MODULE 4: PYTHON ====================
    {
      id: "phase-1-module-4",
      slug: "python-essentials",
      phaseId: "phase-1",
      title: "Python Programming Essentials",
      description:
        "Learn Python basics for security: variables, data types, functions, modules, HTTP requests, file handling, and automation scripts.",
      estimatedHours: 10,
      labExercise: {
        title: "Security Script Lab",
        objective: "Write a Python script that checks website availability, parses JSON, and logs results.",
        instructions: [
          "Create a Python virtual environment and activate it.",
          "Install the 'requests' library with pip.",
          "Write a script that checks if 5 websites are up using requests.get().",
          "Parse the JSON response and extract status codes.",
          "Log results to a file with timestamps.",
          "Handle errors gracefully (timeouts, connection errors).",
        ],
        deliverable: "Your Python script and the generated log file.",
        estimatedMinutes: 60,
      },
      lessons: [
        {
          id: "phase-1-module-4-lesson-1",
          slug: "python-basics",
          moduleId: "phase-1-module-4",
          title: "Python Basics",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "Variables and Data Types",
                type: "text",
                body: "Python is dynamically typed -- you don't declare types:\n\nname = \"Alice\"          # string\nage = 30                # integer\nscore = 95.5            # float\nis_admin = True         # boolean\nports = [22, 80, 443]   # list\nuser = {\"name\": \"Alice\", \"role\": \"admin\"}  # dictionary",
              },
              {
                heading: "Strings and f-strings",
                type: "text",
                body: "Strings are text enclosed in quotes. f-strings let you embed variables:\n\nip = \"192.168.1.1\"\nport = 80\nprint(f\"Scanning {ip}:{port}\")\n# Output: Scanning 192.168.1.1:80\n\nCommon string methods: .upper(), .lower(), .strip(), .split(), .replace(), .startswith()",
              },
              {
                heading: "Lists and Dictionaries",
                type: "text",
                body: "**Lists** are ordered, mutable collections:\nports = [22, 80, 443]\nports.append(8080)\nfor port in ports:\n    print(port)\n\n**Dictionaries** are key-value pairs:\nserver = {\"ip\": \"10.0.0.1\", \"status\": \"up\"}\nprint(server[\"ip\"])  # 10.0.0.1\nserver[\"port\"] = 443  # Add new key",
              },
              {
                heading: "Control Flow",
                type: "example",
                body: "**if/elif/else:**\nstatus_code = 200\nif status_code == 200:\n    print(\"OK\")\nelif status_code == 404:\n    print(\"Not Found\")\nelse:\n    print(f\"Error: {status_code}\")\n\n**for loops:**\nfor port in [22, 80, 443]:\n    print(f\"Scanning port {port}\")\n\n**while loops:**\nattempts = 0\nwhile attempts < 3:\n    attempts += 1",
              },
            ],
            keyConcepts: [
              { term: "Variable", definition: "A named storage location. Python infers the type automatically." },
              { term: "List", definition: "Ordered, mutable collection accessed by index: [1, 2, 3]." },
              { term: "Dictionary", definition: "Key-value pairs for fast lookups: {\"key\": \"value\"}." },
              { term: "f-string", definition: "Formatted string literal: f\"Hello {name}\" embeds variables in text." },
            ],
            externalResources: [
              {
                title: "Python for Beginners - freeCodeCamp",
                url: "https://www.youtube.com/watch?v=eWRfhZUzrAc",
                type: "video",
                isFree: true,
                description: "Comprehensive Python course for absolute beginners.",
              },
              {
                title: "Python Official Tutorial",
                url: "https://docs.python.org/3/tutorial/",
                type: "documentation",
                isFree: true,
                description: "The official Python tutorial.",
              },
            ],
          },
          quiz: {
            id: "quiz-1-4-1",
            lessonId: "phase-1-module-4-lesson-1",
            questions: [
              {
                id: "q1-4-1-1",
                question: "How do you create a dictionary in Python?",
                options: [
                  "user = [\"name\", \"alice\"]",
                  "user = {\"name\": \"alice\"}",
                  "user = (\"name\", \"alice\")",
                  "user = <\"name\": \"alice\">",
                ],
                correctIndex: 1,
                explanation: "Dictionaries use curly braces with key-value pairs: {\"key\": \"value\"}.",
              },
              {
                id: "q1-4-1-2",
                question: "What defines code blocks in Python?",
                options: ["Semicolons", "Curly braces", "Indentation", "Parentheses"],
                correctIndex: 2,
                explanation: "Python uses indentation (4 spaces) to define code blocks.",
              },
              {
                id: "q1-4-1-3",
                question: "What does f\"Hello {name}\" do?",
                options: [
                  "Creates a file called name",
                  "Inserts the value of variable 'name' into the string",
                  "Causes an error",
                  "Prints 'Hello {name}' literally",
                ],
                correctIndex: 1,
                explanation: "f-strings embed variable values directly in strings.",
              },
            ],
          },
        },
        {
          id: "phase-1-module-4-lesson-2",
          slug: "functions-and-modules",
          moduleId: "phase-1-module-4",
          title: "Functions and Modules",
          estimatedMinutes: 30,
          content: {
            sections: [
              {
                heading: "Defining Functions",
                type: "text",
                body: "Functions are reusable code blocks:\n\ndef scan_port(host, port):\n    \"\"\"Check if a port is open.\"\"\"\n    import socket\n    try:\n        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n        sock.settimeout(2)\n        result = sock.connect_ex((host, port))\n        sock.close()\n        return result == 0\n    except socket.error:\n        return False\n\n- **def** starts the definition\n- **Parameters** (host, port) are inputs\n- **return** sends a value back to the caller",
              },
              {
                heading: "Importing Modules",
                type: "text",
                body: "Modules are Python files you can import:\n\nimport os              # OS interface\nimport json            # JSON parsing\nimport hashlib         # Cryptographic hashing\nfrom datetime import datetime  # Specific import\n\n**Key modules for security:**\nos, sys, socket, hashlib, json, re, subprocess, logging, requests (third-party)",
              },
              {
                heading: "pip and Virtual Environments",
                type: "text",
                body: "**pip** installs third-party packages:\npip install requests\npip freeze > requirements.txt\n\n**Virtual environments** isolate dependencies:\npython -m venv myenv\nsource myenv/bin/activate\npip install requests\ndeactivate",
              },
              {
                heading: "Verify What You Install",
                type: "warning",
                body: "Attackers publish malicious packages with names similar to popular ones (typosquatting). Always double-check package names. Use 'pip-audit' to scan for known vulnerabilities.",
              },
            ],
            keyConcepts: [
              { term: "Function", definition: "A reusable block of code defined with 'def', accepting parameters and returning values." },
              { term: "Module", definition: "A Python file containing reusable functions, classes, and variables." },
              { term: "pip", definition: "Python's package manager for installing third-party libraries." },
              { term: "Virtual Environment", definition: "Isolated Python environment preventing dependency conflicts between projects." },
            ],
            externalResources: [
              {
                title: "Python Functions - W3Schools",
                url: "https://www.w3schools.com/python/python_functions.asp",
                type: "article",
                isFree: true,
                description: "Interactive tutorial on Python functions.",
              },
            ],
          },
          quiz: {
            id: "quiz-1-4-2",
            lessonId: "phase-1-module-4-lesson-2",
            questions: [
              {
                id: "q1-4-2-1",
                question: "What does a function return if it has no return statement?",
                options: ["0", "An empty string", "None", "False"],
                correctIndex: 2,
                explanation: "Functions without a return statement return None by default.",
              },
              {
                id: "q1-4-2-2",
                question: "What is the purpose of a virtual environment?",
                options: [
                  "Run Python faster",
                  "Isolate project dependencies",
                  "Encrypt source code",
                  "Connect to VMs",
                ],
                correctIndex: 1,
                explanation: "Virtual environments isolate dependencies so different projects don't conflict.",
              },
              {
                id: "q1-4-2-3",
                question: "Which command installs a Python package?",
                options: ["python install requests", "pip install requests", "import requests", "apt install requests"],
                correctIndex: 1,
                explanation: "pip install installs packages from PyPI.",
              },
            ],
          },
        },
        {
          id: "phase-1-module-4-lesson-3",
          slug: "python-for-security",
          moduleId: "phase-1-module-4",
          title: "Python for Security",
          estimatedMinutes: 35,
          content: {
            sections: [
              {
                heading: "Working with Files",
                type: "text",
                body: "Security professionals constantly read and write files:\n\n# Read a file\nwith open('auth.log', 'r') as f:\n    for line in f:\n        if 'Failed' in line:\n            print(line.strip())\n\n# Write to a file\nwith open('results.txt', 'w') as f:\n    f.write('Scan complete\\n')\n\nAlways use 'with' to ensure files are properly closed.",
              },
              {
                heading: "HTTP Requests",
                type: "text",
                body: "The **requests** library makes HTTP simple:\n\nimport requests\n\nresponse = requests.get('https://api.example.com/status')\nprint(response.status_code)  # 200\nprint(response.json())       # Parse JSON response\n\n# POST with data\ndata = {'username': 'analyst'}\nresponse = requests.post('https://api.example.com/login', json=data)\n\n# Custom headers\nheaders = {'Authorization': 'Bearer TOKEN'}\nresponse = requests.get('https://api.example.com/data', headers=headers)",
              },
              {
                heading: "Working with JSON",
                type: "text",
                body: "JSON is the standard API data format:\n\nimport json\n\n# Parse JSON string\ndata = json.loads('{\"ip\": \"10.0.0.1\", \"status\": \"up\"}')\nprint(data['ip'])  # 10.0.0.1\n\n# Write JSON to file\nwith open('results.json', 'w') as f:\n    json.dump(data, f, indent=2)\n\n# Read JSON from file\nwith open('results.json', 'r') as f:\n    loaded = json.load(f)",
              },
              {
                heading: "Never Hardcode Credentials",
                type: "warning",
                body: "Never put passwords or API keys in your code. Use:\n- Environment variables: os.environ.get('API_KEY')\n- .env files with python-dotenv (add .env to .gitignore)\n- Secrets managers (AWS Secrets Manager, HashiCorp Vault)\n\nHardcoded credentials are one of the most common causes of data breaches.",
              },
            ],
            keyConcepts: [
              { term: "with statement", definition: "Context manager ensuring resources are cleaned up, even if errors occur." },
              { term: "requests library", definition: "Third-party library for making HTTP requests to web APIs." },
              { term: "JSON", definition: "JavaScript Object Notation -- lightweight data format for API communication." },
              { term: "Environment Variables", definition: "System-level key-value pairs for storing secrets outside source code." },
            ],
            externalResources: [
              {
                title: "Python for Cybersecurity - freeCodeCamp",
                url: "https://www.youtube.com/watch?v=nzRegK6Wf8o",
                type: "video",
                isFree: true,
                description: "Hands-on Python course for cybersecurity tasks.",
              },
              {
                title: "Requests Library Docs",
                url: "https://requests.readthedocs.io/en/latest/",
                type: "documentation",
                isFree: true,
                description: "Official documentation for the Python requests library.",
              },
            ],
          },
          quiz: {
            id: "quiz-1-4-3",
            lessonId: "phase-1-module-4-lesson-3",
            questions: [
              {
                id: "q1-4-3-1",
                question: "Why should you use 'with' when opening files?",
                options: [
                  "It's faster",
                  "It encrypts the file",
                  "It ensures the file is properly closed even if errors occur",
                  "It allows multiple programs to read simultaneously",
                ],
                correctIndex: 2,
                explanation: "'with' guarantees the file handle is closed, preventing resource leaks.",
              },
              {
                id: "q1-4-3-2",
                question: "Which method parses a JSON API response into a Python dict?",
                options: ["response.text()", "response.json()", "json.parse(response)", "dict(response)"],
                correctIndex: 1,
                explanation: "response.json() parses the JSON body into a Python dictionary.",
              },
              {
                id: "q1-4-3-3",
                question: "What is the safest way to store API keys?",
                options: [
                  "Hardcode in the script",
                  "Put in a comment",
                  "Use environment variables or a secrets manager",
                  "Base64 encode them",
                ],
                correctIndex: 2,
                explanation: "Environment variables or secrets managers keep credentials out of source code.",
              },
            ],
          },
        },
      ],
    },
  ],
};
