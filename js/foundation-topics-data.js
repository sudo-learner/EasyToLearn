// ============================================================
// EasyToLearn — Foundation Track Topics Data
// For absolute beginners: how computers work, what the internet
// is, binary, hardware, software, and the ideas every other
// track builds on. Written in the simplest English possible.
// ============================================================

const FOUNDATION_TOPICS = [

  // ── Section 1: How Computers Work ──────────────────────
  {
    id: "what-is-a-computer",
    section: "How Computers Work",
    number: 1,
    title: "What is a Computer?",
    difficulty: "Basic",
    summary: "A machine that takes input, processes it, stores it, and gives you output — that's it.",
    animation: "layer-stack",
    compareData: {
      layersNumbered: false,
      layers: [
        { name: "Output", detail: "What the computer shows you — screen, sound, printed page" },
        { name: "Processing", detail: "The CPU — the 'brain' that does the actual thinking" },
        { name: "Storage", detail: "Where information is kept — RAM for now, hard drive forever" },
        { name: "Input", detail: "How you talk to the computer — keyboard, mouse, microphone" }
      ]
    },
    content: {
      basic: `<p>A <strong>computer</strong> is a machine that takes information in, does something with it, and gives you a result. Every computer — from a phone to a supercomputer — does exactly four things:</p>
      <ul>
        <li><strong>Input</strong> — receives information (your typing, clicking, speaking)</li>
        <li><strong>Processing</strong> — thinks about it using the CPU</li>
        <li><strong>Storage</strong> — remembers things (RAM for now, hard drive for later)</li>
        <li><strong>Output</strong> — shows you the result (screen, speakers, printer)</li>
      </ul>`,
      intermediate: `<p>This four-step model is called the <strong>IPO model</strong> (Input-Processing-Output), sometimes extended to IPOS with Storage. Every app you use, every website you visit, every game you play is just this cycle repeating millions of times per second.</p><p>The CPU (Central Processing Unit) is the core processor — it reads instructions one at a time and executes them. Modern CPUs do billions of these per second, which is why computers feel instant even when doing complex tasks.</p>`,
      advanced: `<p>At the hardware level, everything is driven by a <strong>clock signal</strong> — an oscillating electrical signal that synchronizes all parts of the CPU. Clock speed (measured in GHz) tells you how many cycles per second. A 3GHz CPU executes roughly 3 billion cycles per second, though modern CPUs do multiple operations per cycle through techniques like <strong>pipelining</strong> and <strong>superscalar execution</strong>. The Von Neumann architecture — the design almost every modern computer follows — stores both program instructions and data in the same memory space, which is elegant but creates the "Von Neumann bottleneck" where memory access speed limits overall performance.</p>`
    },
    quiz: [
      { q: "What are the four things every computer does?", options: ["Download, install, run, delete", "Input, Processing, Storage, Output", "Code, compile, test, deploy", "Boot, load, display, shut down"], correct: 1, explain: "Every computer follows the IPSO model: Input (receiving data), Processing (CPU working on it), Storage (memory), and Output (results shown to you)." },
      { q: "What does CPU stand for?", options: ["Computer Programming Unit", "Central Processing Unit", "Core Power Usage", "Controlled Processing Utility"], correct: 1, explain: "CPU stands for Central Processing Unit — it's the main 'brain' of the computer that executes instructions." },
      { q: "What is the difference between RAM and a hard drive?", options: ["There is no difference", "RAM stores things temporarily while the computer runs; hard drives store things permanently", "Hard drives are faster than RAM", "RAM is for programs, hard drives are for the internet"], correct: 1, explain: "RAM is fast, temporary memory used while the computer is running. Hard drives store things permanently even when powered off." }
    ]
  },

  {
    id: "hardware-vs-software",
    section: "How Computers Work",
    number: 2,
    title: "Hardware vs Software",
    difficulty: "Basic",
    summary: "Hardware is the physical stuff you can touch. Software is the instructions that make it do things.",
    animation: "compare-toggle",
    compareData: {
      labelA: "Hardware", labelB: "Software",
      descA: "Physical components you can touch and see — CPU, RAM, screen, keyboard, hard drive.",
      descB: "Instructions and programs that run on the hardware — operating systems, apps, games, websites."
    },
    content: {
      basic: `<p><strong>Hardware</strong> is everything physical about a computer — things you can touch: the screen, keyboard, chips, cables, and case. <strong>Software</strong> is everything that isn't physical — the programs, apps, and instructions that tell the hardware what to do. Without software, hardware is just an expensive paperweight. Without hardware, software has nothing to run on.</p>`,
      intermediate: `<p>Software comes in two main types: <strong>System software</strong> (like an operating system — Windows, macOS, Linux) that manages the hardware and runs other programs, and <strong>Application software</strong> (like Chrome, Word, or a game) that does specific tasks for the user. The operating system is the crucial bridge between raw hardware and the apps you actually use.</p>`,
      advanced: `<p>The boundary between hardware and software blurs at the level of <strong>firmware</strong> — software permanently stored in hardware chips (like the BIOS/UEFI on your motherboard). There's also <strong>middleware</strong>, software that acts as a bridge between different systems. Modern hardware increasingly has programmable logic (FPGAs) where the hardware's own behavior can be altered by loading new configuration software — blurring the traditional line even further. The trend toward software-defined everything (networking, storage, radios) reflects how far this flexibility has spread.</p>`
    },
    quiz: [
      { q: "Which of these is hardware?", options: ["Microsoft Word", "The Windows operating system", "A web browser", "The keyboard you type on"], correct: 3, explain: "The keyboard is a physical component you can touch — that makes it hardware. Word, Windows, and browsers are all software." },
      { q: "What does an operating system do?", options: ["It's a type of game", "It manages the hardware and lets other programs run on it", "It connects you to the internet", "It's another word for antivirus software"], correct: 1, explain: "An operating system (like Windows, macOS, or Linux) manages all the hardware and provides a platform for other applications to run." },
      { q: "What is firmware?", options: ["Another word for software updates", "Software permanently stored in a hardware chip", "A type of antivirus", "The fastest type of internet connection"], correct: 1, explain: "Firmware is software that's baked into hardware chips — like the BIOS that starts your computer before the operating system loads." }
    ]
  },

  {
    id: "binary-basics",
    section: "How Computers Work",
    number: 3,
    title: "Binary — How Computers Count",
    difficulty: "Basic",
    summary: "Computers only understand on and off. Everything — numbers, letters, images — is stored as 1s and 0s.",
    animation: "encapsulation",
    compareData: {
      wraps: [
        { label: "OFF = 0", color: "#3D3880" },
        { label: "ON  = 1", color: "var(--violet)" },
        { label: "0101 = 5 in decimal", color: "var(--coral)" },
        { label: "01000001 = letter 'A'", color: "var(--yellow)" }
      ]
    },
    content: {
      basic: `<p>Computers are made of billions of tiny switches that are either <strong>on</strong> or <strong>off</strong>. On is represented as <code>1</code>, off as <code>0</code>. This two-state system is called <strong>binary</strong>. By combining 1s and 0s in patterns, a computer can represent any number, letter, image, or sound. Everything in a computer — every photo, every word, every video — is ultimately just a very long string of 1s and 0s.</p>`,
      intermediate: `<p>Each single 1 or 0 is called a <strong>bit</strong>. Eight bits make a <strong>byte</strong>. A byte can represent 256 different values (2⁸), which is enough to cover every letter, number and symbol on a keyboard. 1,000 bytes ≈ 1 kilobyte (KB), 1,000 KB ≈ 1 megabyte (MB), 1,000 MB ≈ 1 gigabyte (GB), and so on. When a file is "5MB," it means it contains roughly 5 million bytes, or 40 million individual bits.</p>`,
      advanced: `<p>Binary maps naturally to electronics: transistors (the fundamental unit of modern chips) are either conducting (1) or not (0). A modern CPU contains billions of transistors, each acting as a tiny switch. Binary arithmetic (addition, subtraction, AND, OR, NOT operations) is implemented directly in logic gates — circuits where combinations of transistors produce specific outputs. All higher-level operations (multiplication, floating-point math, string comparison) ultimately decompose into these basic binary operations.</p>`
    },
    quiz: [
      { q: "Why do computers use binary (1s and 0s)?", options: ["Because it was invented in 1901", "Because transistors are naturally either on or off", "To make things more complicated", "Binary is just one option — computers could use any system"], correct: 1, explain: "Transistors, the fundamental building blocks of chips, are naturally either conducting (on/1) or not (off/0), making binary the perfect match for electronics." },
      { q: "What is a 'bit'?", options: ["A type of cable", "A single 1 or 0 in binary", "Eight bytes of data", "The smallest unit of network speed"], correct: 1, explain: "A bit is the smallest unit of digital information — a single binary digit, either 1 or 0." },
      { q: "How many bits are in one byte?", options: ["4", "16", "8", "2"], correct: 2, explain: "One byte equals 8 bits. A byte can represent 256 different values (2 to the power of 8)." }
    ]
  },

  {
    id: "cpu-memory-storage",
    section: "How Computers Work",
    number: 4,
    title: "CPU, Memory & Storage Explained",
    difficulty: "Basic",
    summary: "The three core parts of any computer and exactly what role each one plays.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "CPU", desc: "The brain. Executes instructions billions of times per second. Fast but can only hold a tiny amount of data at once." },
        { label: "RAM", desc: "Short-term memory. Holds data the CPU is actively using. Fast, but loses everything when you power off." },
        { label: "Storage", desc: "Long-term memory. Hard drives and SSDs hold data permanently. Slower than RAM, but keeps everything when you turn off." }
      ]
    },
    content: {
      basic: `<p>Think of it like working at a desk. The <strong>CPU</strong> is you — the worker doing the actual thinking. <strong>RAM</strong> is your desk — where you keep things you're currently working on (easy to reach, but limited space). <strong>Storage</strong> (the hard drive or SSD) is a filing cabinet — holds everything permanently, but you have to get up to access it, so it's slower.</p>`,
      intermediate: `<p>The CPU constantly fetches data from RAM to work on, then writes results back to RAM. RAM never talks directly to the hard drive — the CPU has to move data between them. This is why opening a program feels fast once loaded (it's in RAM) but the first load can be slow (it had to be copied from the much slower hard drive into RAM first).</p>`,
      advanced: `<p>Between the CPU and RAM sits a hierarchy of caches (L1, L2, L3) — tiny, extremely fast memory banks built into or near the CPU chip. L1 cache is smallest but fastest (sub-nanosecond access), while L3 is larger but slower. This memory hierarchy exists because RAM access (~60-100ns) is still orders of magnitude slower than CPU clock cycles (~0.3ns at 3GHz). Cache hit/miss rates dramatically affect real-world performance — a program with poor data locality (jumping around in memory) can run 10-100x slower than one with good locality even with the same number of CPU instructions.</p>`
    },
    quiz: [
      { q: "Using the desk analogy, what does RAM represent?", options: ["The filing cabinet that stores everything long-term", "Your desk — where you keep things you're currently working on", "Your brain doing the thinking", "The electricity powering the room"], correct: 1, explain: "RAM is like your desk — limited space, very fast to access, but loses everything when the power goes off." },
      { q: "Why does opening a program feel slow the first time but fast after that?", options: ["The internet gets faster after the first load", "The first load copies the program from slow storage into fast RAM; after that it's already in RAM", "The CPU warms up and gets faster", "Programs install themselves more fully on second run"], correct: 1, explain: "The first launch reads from the slow hard drive/SSD into RAM. Subsequent launches use the RAM-cached version, which is much faster." },
      { q: "What happens to data in RAM when you turn off your computer?", options: ["It is saved automatically", "It is deleted — RAM is temporary and loses all data without power", "It moves to the CPU", "It stays in RAM until you delete it manually"], correct: 1, explain: "RAM requires constant power to hold data. The moment power is cut, everything in RAM is lost — which is why you save files to permanent storage." }
    ]
  },

  // ── Section 2: Operating Systems ───────────────────────
  {
    id: "what-is-an-os",
    section: "Operating Systems",
    number: 5,
    title: "What is an Operating System?",
    difficulty: "Basic",
    summary: "The master program that runs first and manages everything else — Windows, macOS, Linux.",
    animation: "layer-stack",
    compareData: {
      layersNumbered: false,
      layers: [
        { name: "Your apps", detail: "Chrome, Word, games — the programs you actually use" },
        { name: "Operating System", detail: "Windows, macOS, or Linux — the manager in the middle" },
        { name: "Hardware drivers", detail: "Translator software between the OS and specific hardware" },
        { name: "Hardware", detail: "CPU, RAM, disk, screen, keyboard — the physical machine" }
      ]
    },
    content: {
      basic: `<p>An <strong>operating system (OS)</strong> is the master program that runs first when you turn on a computer and stays running the whole time. It manages everything — the CPU, memory, storage, and any programs you open. Without an OS, you'd need to write direct hardware instructions every time you wanted to do anything, which is impossibly complex. The OS handles all of that so your apps don't have to.</p>`,
      intermediate: `<p>The OS acts as a referee between apps. When three apps all want to use the CPU at once, the OS decides who gets it and for how long. When two apps both want to write to the same file, the OS prevents conflicts. It also provides a set of standard services — like "display text on screen" or "save this file" — that any app can call on without knowing exactly what hardware is installed.</p>`,
      advanced: `<p>Modern OSes are built around the kernel — the minimal core that manages memory, processes, and hardware access. Everything else (file systems, networking, GUIs) is built on top. The <strong>kernel space / user space</strong> divide is fundamental to stability and security: user applications run in restricted user space and must make "system calls" to request privileged operations from the kernel. This isolation means a crashed app doesn't take down the whole system — the kernel keeps running and can terminate the faulty process cleanly.</p>`
    },
    quiz: [
      { q: "What does an operating system do?", options: ["It only manages the internet connection", "It's the master program that manages all hardware and lets apps run", "It's the same as an antivirus program", "It only runs when you open an app"], correct: 1, explain: "The operating system is the master program that manages all hardware resources and provides a platform for applications to run." },
      { q: "What is the 'kernel'?", options: ["A type of processor", "The minimal core of the OS that manages memory, processes and hardware", "Another word for RAM", "A kind of file system"], correct: 1, explain: "The kernel is the core part of the OS — the piece that actually talks to the hardware and manages critical resources." },
      { q: "Which of these is an operating system?", options: ["Google Chrome", "Microsoft Word", "macOS", "Adobe Photoshop"], correct: 2, explain: "macOS is Apple's operating system. Chrome, Word, and Photoshop are applications that run on top of an operating system." }
    ]
  },

  {
    id: "files-and-folders",
    section: "Operating Systems",
    number: 6,
    title: "Files, Folders & File Systems",
    difficulty: "Basic",
    summary: "How your computer organizes everything you save into a structure you can navigate.",
    animation: "topology",
    compareData: {
      diagrams: [
        { label: "Tree view", draw: "tree" }
      ]
    },
    content: {
      basic: `<p>A <strong>file</strong> is a named chunk of data saved on your computer — a document, photo, song, or program. A <strong>folder</strong> (also called a directory) is a container that holds files and other folders, letting you organize things. Files and folders form a tree structure with one starting point at the top — on Windows it's "C:\", on Mac and Linux it's "/".</p>`,
      intermediate: `<p>The system that manages how files are organized and stored on disk is called a <strong>file system</strong>. Different operating systems use different ones: Windows typically uses NTFS, macOS uses APFS, and Linux commonly uses ext4. The file system keeps track of where each file's actual data is on the physical disk, what it's called, who created it, when it was last changed, and how large it is.</p>`,
      advanced: `<p>At the disk level, a file system maintains an index (like an inode table in Linux) mapping each file's name to the physical location of its data blocks on disk. Files aren't necessarily stored contiguously — a large file might be split across many different disk locations (fragmentation), with the file system tracking all the pieces. This is why "defragmenting" a drive (rearranging file pieces to be contiguous) can improve performance on spinning hard drives (though SSDs don't benefit since they access any location equally fast).</p>`
    },
    quiz: [
      { q: "What is a folder (directory)?", options: ["A type of file format", "A container that holds files and other folders to help organize things", "A program that opens files", "A type of hard drive"], correct: 1, explain: "A folder is a container that organizes files and other folders, forming the tree-shaped structure you navigate on any computer." },
      { q: "What does a file system do?", options: ["Speeds up internet browsing", "Manages how files are organized and stored on disk", "Runs antivirus scans", "Controls the screen brightness"], correct: 1, explain: "The file system is the layer that manages where files live on disk, what they're called, and how they're organized." },
      { q: "What is file fragmentation?", options: ["When you accidentally split a file in two", "When a file's data is stored in non-contiguous pieces spread across the disk", "When two files have the same name", "When a file becomes too large to open"], correct: 1, explain: "Fragmentation means a file's data is split into pieces stored in different physical locations on disk, which can slow down access on spinning hard drives." }
    ]
  },

  {
    id: "processes-and-multitasking",
    section: "Operating Systems",
    number: 7,
    title: "Processes & Multitasking",
    difficulty: "Basic",
    summary: "How your computer appears to run many programs at once even though the CPU can only do one thing at a time.",
    animation: "dns-lookup",
    compareData: {
      chain: ["App 1 runs", "OS pauses it", "App 2 runs", "OS pauses it", "App 1 resumes"]
    },
    content: {
      basic: `<p>When you open a program, the OS creates a <strong>process</strong> — a running instance of that program, with its own memory. But here's the surprising thing: a CPU core can only actually run one instruction at a time. If you have 20 apps open, the OS is rapidly switching the CPU's attention between them — so fast (thousands of times per second) that it looks like they're all running simultaneously.</p>`,
      intermediate: `<p>This rapid switching is called <strong>context switching</strong>, and the whole system of managing it is called <strong>multitasking</strong>. The OS scheduler decides which process gets CPU time, for how long, and in what order — prioritizing things like audio playback (which needs consistent timing) over something like a background backup (which can wait). Modern computers also have multiple CPU cores, so they can genuinely run multiple processes truly in parallel, not just switch quickly between them.</p>`,
      advanced: `<p>Modern OSes use <strong>preemptive multitasking</strong> — the OS can forcibly take CPU control away from any process at any time, via hardware interrupts from the timer chip. This contrasts with older cooperative multitasking where each program had to voluntarily yield. Preemptive multitasking is why one crashed or frozen app doesn't freeze your whole computer — the OS can always step in and kill it. Threads are lightweight units within a single process that can run in parallel; a browser might use one thread per tab, sharing the same process memory but running independently on different CPU cores.</p>`
    },
    quiz: [
      { q: "How does a computer seem to run many apps at once if a CPU can only do one thing at a time?", options: ["It actually can't — only one app really works", "The OS rapidly switches the CPU's attention between processes thousands of times per second", "Each app uses a different part of the screen", "RAM handles the other apps while the CPU focuses on one"], correct: 1, explain: "The OS switches the CPU between processes so rapidly that it appears simultaneous — this is called context switching." },
      { q: "What is a process?", options: ["A type of file on disk", "A running instance of a program, with its own memory allocation", "A hardware component", "A type of internet request"], correct: 1, explain: "A process is what the OS creates when you launch a program — a running instance with its own allocated memory." },
      { q: "Why can't one frozen app freeze your entire modern computer?", options: ["It can — a frozen app always freezes everything", "Modern OSes use preemptive multitasking, so the OS can always forcibly take control back from a frozen process", "Frozen apps automatically restart themselves", "RAM prevents frozen apps from affecting other programs"], correct: 1, explain: "Preemptive multitasking means the OS can forcibly reclaim the CPU from any process at any time, allowing it to terminate frozen apps without crashing everything else." }
    ]
  },

  {
    id: "users-permissions-basics",
    section: "Operating Systems",
    number: 8,
    title: "Users & Permissions Basics",
    difficulty: "Basic",
    summary: "Why computers have user accounts and why not everyone can access or change everything.",
    animation: "layer-stack",
    compareData: {
      layersNumbered: false,
      layers: [
        { name: "Admin / Root", detail: "Full control — can change anything, install software, modify system files" },
        { name: "Regular users", detail: "Can use the computer normally, but can't change system settings" },
        { name: "Guests", detail: "Very limited access — can use the computer temporarily with minimal permissions" }
      ]
    },
    content: {
      basic: `<p>Computers support multiple <strong>user accounts</strong> so different people can use the same machine with separate files and settings. Critically, not all users have the same <strong>permissions</strong> — the rights to do certain things. An <strong>administrator</strong> can install software and change system settings; a regular user can use the computer normally but is blocked from changing important system files. This protects the system from accidental damage and malicious software.</p>`,
      intermediate: `<p>Permissions aren't just for users — every file and program has a set of permissions defining who can read it, change it, or run it. This is why you sometimes see "you don't have permission to do this" when trying to modify a system file: even if you're logged in, your account doesn't have the right level of access for that specific resource. Running as a limited user by default is a core security practice — malware can only do what your current user account is allowed to do.</p>`,
      advanced: `<p>The principle of <strong>least privilege</strong> — giving accounts only the minimum permissions needed for their job — is a foundational security concept. It limits the damage any single compromised account can cause. In enterprise environments, this is formalized through Role-Based Access Control (RBAC), where permissions are assigned to roles (like "IT admin" or "finance analyst") and users inherit permissions from their role, making it manageable across thousands of accounts without configuring each one individually.</p>`
    },
    quiz: [
      { q: "Why do operating systems have different user account types with different permissions?", options: ["To slow the computer down", "To protect the system — limiting what each user can change prevents accidental damage and limits malware impact", "Just for personalization purposes only", "It's optional — permissions don't actually affect security"], correct: 1, explain: "Permissions limit what each account can do, which protects the system from accidents and limits the damage malware or mistakes can cause." },
      { q: "What is the 'principle of least privilege'?", options: ["Give every user full admin access so they can always do their work", "Give accounts only the minimum permissions they actually need for their job", "Always use guest accounts instead of regular accounts", "Remove all user accounts and let everyone share one"], correct: 1, explain: "Least privilege means giving each account only the permissions it actually needs — so if it's compromised, the damage is limited." },
      { q: "When malware infects a limited user account, why is the damage limited?", options: ["Limited accounts have antivirus built in", "The malware can only do what the limited account is permitted to do — it can't modify system files or install system-wide software", "Limited accounts don't connect to the internet", "Malware can't run on non-admin accounts at all"], correct: 1, explain: "Malware inherits the permissions of the account it's running in. A limited account can't touch system files, so the malware's reach is restricted." }
    ]
  },

  // ── Section 3: The Internet ─────────────────────────────
  {
    id: "what-is-the-internet",
    section: "The Internet",
    number: 9,
    title: "What is the Internet?",
    difficulty: "Basic",
    summary: "The internet is just billions of computers connected together and agreed to speak the same language.",
    animation: "topology",
    compareData: {
      diagrams: [
        { label: "Local", svg: `
          <circle cx="200" cy="130" r="14" fill="var(--void)" stroke="var(--violet)" stroke-width="2"/>
          <text x="200" y="172" fill="var(--mist)" font-family="Fira Code" font-size="11" text-anchor="middle">Your Router</text>
          <circle cx="100" cy="60" r="10" fill="var(--void)" stroke="var(--border)" stroke-width="2"/>
          <text x="100" y="45" fill="var(--mist)" font-family="Fira Code" font-size="10" text-anchor="middle">Phone</text>
          <circle cx="200" cy="40" r="10" fill="var(--void)" stroke="var(--border)" stroke-width="2"/>
          <text x="200" y="25" fill="var(--mist)" font-family="Fira Code" font-size="10" text-anchor="middle">Laptop</text>
          <circle cx="300" cy="60" r="10" fill="var(--void)" stroke="var(--border)" stroke-width="2"/>
          <text x="300" y="45" fill="var(--mist)" font-family="Fira Code" font-size="10" text-anchor="middle">TV</text>
          <line x1="200" y1="116" x2="100" y2="70" stroke="var(--border)" stroke-width="2"/>
          <line x1="200" y1="116" x2="200" y2="50" stroke="var(--border)" stroke-width="2"/>
          <line x1="200" y1="116" x2="300" y2="70" stroke="var(--border)" stroke-width="2"/>
        `},
        { label: "Global", svg: `
          <circle cx="200" cy="130" r="60" fill="none" stroke="var(--violet)" stroke-width="1" stroke-dasharray="4,4" opacity="0.4"/>
          <circle cx="200" cy="130" r="100" fill="none" stroke="var(--coral)" stroke-width="1" stroke-dasharray="4,4" opacity="0.25"/>
          <circle cx="200" cy="130" r="14" fill="var(--void)" stroke="var(--violet)" stroke-width="2"/>
          <text x="200" y="155" fill="var(--mist)" font-family="Fira Code" font-size="10" text-anchor="middle">you</text>
          <circle cx="285" cy="80" r="10" fill="var(--void)" stroke="var(--coral)" stroke-width="2"/>
          <text x="285" y="65" fill="var(--mist)" font-family="Fira Code" font-size="10" text-anchor="middle">google.com</text>
          <circle cx="110" cy="75" r="10" fill="var(--void)" stroke="var(--coral)" stroke-width="2"/>
          <text x="110" y="60" fill="var(--mist)" font-family="Fira Code" font-size="10" text-anchor="middle">Server UK</text>
          <circle cx="310" cy="180" r="10" fill="var(--void)" stroke="var(--coral)" stroke-width="2"/>
          <text x="310" y="200" fill="var(--mist)" font-family="Fira Code" font-size="10" text-anchor="middle">Server AU</text>
          <line x1="214" y1="119" x2="275" y2="90" stroke="var(--border)" stroke-width="1.5"/>
          <line x1="186" y1="121" x2="120" y2="85" stroke="var(--border)" stroke-width="1.5"/>
          <line x1="211" y1="143" x2="300" y2="178" stroke="var(--border)" stroke-width="1.5"/>
          <text x="200" y="245" fill="var(--mist)" font-family="Fira Code" font-size="11" text-anchor="middle">billions of connected devices worldwide</text>
        `}
      ]
    },
    content: {
      basic: `<p>The <strong>internet</strong> is a global network of billions of devices — computers, phones, servers, fridges, cars — all connected together. It's not one single thing someone owns; it's a vast collection of smaller networks that all agreed to use the same rules (called <strong>protocols</strong>) to communicate. When you "go on the internet," your device is sending and receiving information from other devices worldwide, following those shared rules.</p>`,
      intermediate: `<p>The internet was originally designed so that information could be re-routed around broken connections — there's no single cable or building that, if destroyed, would stop the whole thing. Data travels in small pieces called <strong>packets</strong>, and each packet may take a different physical path through the network to reach the same destination, where they get reassembled. This decentralized design is why the internet is so resilient.</p>`,
      advanced: `<p>The internet's physical backbone consists of undersea fiber-optic cables crossing oceans, terrestrial fiber networks, and wireless links. Tier-1 ISPs (like AT&T, Deutsche Telekom, NTT) form the backbone, connected via peering agreements — mutual traffic exchange — without payment between them. Lower-tier ISPs pay upstream providers for connectivity, forming a hierarchical structure. The entire system is governed by technical standards bodies (IETF, ICANN) that define protocols through a process of open documentation called RFCs (Request for Comments), which anyone can read or contribute to.</p>`
    },
    quiz: [
      { q: "What is the internet?", options: ["A single giant computer owned by a company", "A global network of billions of devices connected together using shared rules", "The same thing as the World Wide Web", "A satellite system that sends data through space only"], correct: 1, explain: "The internet is a global network of billions of interconnected devices, all using shared protocols to communicate — not owned by any single entity." },
      { q: "Why was the internet designed so that data can take different paths?", options: ["To make it faster always", "To be resilient — if one path breaks, data reroutes around the damage", "To confuse hackers", "It wasn't designed that way — data always takes the same path"], correct: 1, explain: "The internet was originally designed for resilience — data can reroute around broken connections, so no single failure can take down the whole network." },
      { q: "What is a 'packet' in the context of internet data?", options: ["A physical envelope of cables", "A small piece of data — information is broken into packets that travel the network and reassemble at the destination", "A unit of internet speed", "A type of server"], correct: 1, explain: "Data sent over the internet is broken into small packets. Each packet may take a different path, and they reassemble at the destination." }
    ]
  },

  {
    id: "web-vs-internet",
    section: "The Internet",
    number: 10,
    title: "The Web vs The Internet",
    difficulty: "Basic",
    summary: "The internet is the network of connections. The web is just one thing that runs on it.",
    animation: "layer-stack",
    compareData: {
      layersNumbered: false,
      layers: [
        { name: "Websites & Web Apps", detail: "Things you access through a browser — runs on top of the Web" },
        { name: "World Wide Web (HTTP/HTTPS)", detail: "One service on the internet — linked pages using web browsers" },
        { name: "Email (SMTP)", detail: "Another internet service — completely separate from the web" },
        { name: "The Internet", detail: "The underlying global network — carries all of the above" }
      ]
    },
    content: {
      basic: `<p>People often use "internet" and "web" as if they mean the same thing, but they don't. The <strong>internet</strong> is the global network of connected devices — the infrastructure, the cables and connections. The <strong>World Wide Web</strong> is just one thing that runs on top of that network: a system of linked web pages you access through a browser. Email, video calls, gaming, and messaging apps all use the internet too, but they're not the web.</p>`,
      intermediate: `<p>The web specifically uses <strong>HTTP</strong> (or HTTPS for the secure version) as its communication protocol. When you type a web address, your browser sends an HTTP request, and a web server sends back an HTML file (the page's code). Your browser then interprets that HTML and displays the page. The web was invented by Tim Berners-Lee in 1989 — long after the internet existed — specifically to share documents between scientists.</p>`,
      advanced: `<p>The web operates over TCP/IP (the internet's core protocols) using the HTTP/HTTPS application protocol. Each web resource has a URL (Uniform Resource Locator) consisting of a protocol, domain name, optional path and query parameters. DNS translates the domain name to an IP address. The browser opens a TCP connection (with a TLS handshake for HTTPS), sends an HTTP request, receives a response, and renders the page — parsing HTML, loading CSS, executing JavaScript, and making additional requests for images, fonts and other resources, often totalling dozens to hundreds of separate requests for a single page load.</p>`
    },
    quiz: [
      { q: "Which is the correct relationship between the internet and the web?", options: ["They are exactly the same thing", "The web is one service that runs on the internet", "The internet is part of the web", "The web replaced the internet in 1990"], correct: 1, explain: "The internet is the global network infrastructure. The web (World Wide Web) is one service that runs on it, accessible through browsers using HTTP." },
      { q: "What protocol do web browsers use to load pages?", options: ["FTP", "SMTP", "HTTP / HTTPS", "SSH"], correct: 2, explain: "HTTP (HyperText Transfer Protocol) and its secure version HTTPS are the protocols browsers use to request and receive web pages." },
      { q: "Is email part of the World Wide Web?", options: ["Yes, email and the web are the same thing", "No — email uses its own protocols (like SMTP) and is a separate internet service from the web", "Only webmail (like Gmail in a browser) counts as email", "Email only works without the internet"], correct: 1, explain: "Email uses SMTP (and other protocols) and is a completely separate internet service from the web — both use the internet, but they're different systems." }
    ]
  },

  {
    id: "how-websites-work",
    section: "The Internet",
    number: 11,
    title: "How Websites Work",
    difficulty: "Basic",
    summary: "What actually happens when you type a web address and press Enter.",
    animation: "handshake",
    compareData: {
      exchange: {
        partyA: "Your browser",
        partyB: "Web server",
        steps: [
          { label: "DNS lookup → finds server IP", direction: "right", color: "var(--violet)" },
          { label: "HTTP request: GET /page", direction: "right", color: "var(--violet)" },
          { label: "Server sends back HTML/CSS/JS", direction: "left", color: "var(--coral)" }
        ]
      }
    },
    content: {
      basic: `<p>When you type a web address (like <code>google.com</code>) and press Enter, several things happen in under a second: your browser asks a DNS server to turn the name into an IP address, then connects to that address (a web server), asks for the page, and receives the files it needs to display it. The server is just another computer, somewhere in the world, whose job is to send web pages to anyone who asks.</p>`,
      intermediate: `<p>A website is made of three types of files: <strong>HTML</strong> (the structure and content — like the skeleton), <strong>CSS</strong> (the styling — colors, fonts, layout), and <strong>JavaScript</strong> (the interactivity — buttons, menus, live updates). Your browser downloads these files, then assembles them into the page you see. A "web server" is software (like Apache or Nginx) running on a computer that stores these files and sends them to browsers that request them.</p>`,
      advanced: `<p>Modern websites involve many more moving parts: a CDN (Content Delivery Network) that caches static assets at servers geographically close to users, dynamic content generated by server-side code (Python, Node.js, PHP) that queries databases in real time, and APIs that fetch data from other services. The browser doesn't just download one file — loading a modern page can involve hundreds of separate requests. HTTP/2 and HTTP/3 dramatically improve performance by allowing multiple requests to be sent simultaneously over one connection, rather than queuing them one at a time.</p>`
    },
    quiz: [
      { q: "What is the first thing your browser does when you type a web address?", options: ["Downloads the page immediately", "Does a DNS lookup to convert the domain name to an IP address", "Opens a connection to the nearest server", "Checks your internet speed"], correct: 1, explain: "Before connecting to anything, the browser uses DNS to translate the human-readable domain name into the IP address of the web server." },
      { q: "What do HTML, CSS, and JavaScript each do in a website?", options: ["HTML=speed, CSS=security, JS=design", "HTML=structure/content, CSS=styling, JS=interactivity", "They all do the same thing in different browsers", "HTML is for images, CSS is for text, JS is for videos"], correct: 1, explain: "HTML provides structure and content, CSS handles visual styling (colors, layout, fonts), and JavaScript adds interactivity and dynamic behavior." },
      { q: "What is a web server?", options: ["Your home Wi-Fi router", "Software (on a computer) that stores web files and sends them to browsers on request", "The internet itself", "A type of web browser"], correct: 1, explain: "A web server is software running on a computer that stores website files and responds to browsers' HTTP requests by sending those files." }
    ]
  },

  {
    id: "ip-addresses-domain-names",
    section: "The Internet",
    number: 12,
    title: "IP Addresses & Domain Names",
    difficulty: "Basic",
    summary: "Every device on the internet has a numbered address. Domain names are just human-friendly labels for those numbers.",
    animation: "packet-travel",
    compareData: { travel: { partyA: "google.com", partyB: "142.250.x.x", packetLabel: "DNS" } },
    content: {
      basic: `<p>Every device on the internet has a unique number called an <strong>IP address</strong> — like <code>142.250.190.68</code>. Computers communicate using these numbers. But humans find it much easier to remember names like "google.com" than long numbers. <strong>Domain names</strong> are human-friendly labels that get translated to IP addresses by a system called <strong>DNS</strong> — the internet's phone book.</p>`,
      intermediate: `<p>There are two versions of IP addresses in use: <strong>IPv4</strong> (like 192.168.1.1 — four numbers, each 0-255) and <strong>IPv6</strong> (like 2001:db8::1 — much longer, to support far more devices). IPv4 can support ~4 billion addresses, which sounded like plenty in 1980 but ran out. IPv6 can support 340 undecillion (340 followed by 36 zeros) addresses — enough for every grain of sand on Earth to have trillions of addresses.</p>`,
      advanced: `<p>DNS is a hierarchical, distributed database — no single server knows every domain's IP. When your browser looks up "google.com," your device asks a local resolver, which may ask root servers, TLD servers (.com), then Google's authoritative nameservers — receiving the final answer in milliseconds. Answers are cached for a period defined by the TTL (Time To Live) value, reducing repeat lookups. DNS is also a significant security surface: DNS spoofing, DNS hijacking, and DNS-based exfiltration are real attack vectors, which is why DNSSEC (cryptographically signed records) and DNS-over-HTTPS (encrypted lookups) exist.</p>`
    },
    quiz: [
      { q: "What is an IP address?", options: ["Your internet service provider's name", "A unique number assigned to every device on a network", "A type of web browser", "Your email address"], correct: 1, explain: "An IP address is a unique numerical identifier assigned to every device on a network, used by computers to find and communicate with each other." },
      { q: "What is the purpose of DNS?", options: ["To make internet connections faster", "To translate human-friendly domain names into IP addresses computers can use", "To protect against viruses", "To manage email addresses"], correct: 1, explain: "DNS (Domain Name System) translates memorable domain names like 'google.com' into the numerical IP addresses that computers actually use to connect." },
      { q: "Why was IPv6 created?", options: ["IPv4 was too slow", "IPv4 ran out of addresses — IPv6 provides a vastly larger address space", "IPv6 is more secure by default", "IPv4 didn't support mobile phones"], correct: 1, explain: "IPv4's ~4 billion addresses ran out. IPv6 provides an astronomically larger address space to accommodate the internet's continued growth." }
    ]
  },

  // ── Section 4: Data & Encoding ──────────────────────────
  {
    id: "how-data-is-encoded",
    section: "Data & Encoding",
    number: 13,
    title: "How Data is Encoded",
    difficulty: "Intermediate",
    summary: "How text, images, and sound are all converted into numbers so computers can store and process them.",
    animation: "encapsulation",
    compareData: {
      wraps: [
        { label: "letter 'A'", color: "var(--violet)" },
        { label: "ASCII code: 65", color: "var(--coral)" },
        { label: "binary: 01000001", color: "var(--yellow)" },
        { label: "stored on disk as voltage/magnetism", color: "var(--mist)" }
      ]
    },
    content: {
      basic: `<p>Since computers only understand numbers (specifically binary 1s and 0s), everything needs to be converted into numbers first. Text uses a system called <strong>ASCII</strong> (or <strong>Unicode</strong>) that assigns a unique number to every letter, digit, and symbol. Images are grids of dots (pixels), each with a number representing its color. Sounds are waves converted into thousands of number samples per second. Everything — text, images, video, music — is ultimately just a stream of numbers.</p>`,
      intermediate: `<p><strong>ASCII</strong> originally mapped 128 characters to numbers 0-127 — enough for English letters, numbers, and punctuation. <strong>Unicode</strong> expanded this to cover every writing system in the world, with over 140,000 characters. The most common encoding is <strong>UTF-8</strong>, which uses 1-4 bytes per character and is backward-compatible with ASCII. Images use formats like JPEG (lossy compression — removes some detail to make files smaller) or PNG (lossless — keeps every detail).</p>`,
      advanced: `<p>Data encoding involves deep tradeoffs. Lossy compression (JPEG for images, MP3 for audio, H.264 for video) uses perceptual models — understanding what the human eye/ear can't distinguish — to discard information that won't be noticed. Lossless compression (PNG, FLAC, ZIP) exploits statistical redundancy (patterns that repeat) to store data in fewer bits while allowing perfect reconstruction. Error-correcting codes add redundant data so that even if some bits are corrupted in transmission, the original can be reconstructed — used everywhere from CDs to deep-space communication to QR codes.</p>`
    },
    quiz: [
      { q: "How is the letter 'A' stored in a computer?", options: ["As a tiny picture of the letter", "As a number (like 65 in ASCII) stored in binary", "As the word 'Alpha' in code", "Computers can't actually store letters"], correct: 1, explain: "Text encoding systems like ASCII assign unique numbers to each character. 'A' = 65, which is then stored as the binary number 01000001." },
      { q: "What is the difference between lossy and lossless compression?", options: ["Lossy is faster to compress; lossless is slower — otherwise identical", "Lossy permanently removes some data for smaller files; lossless stores all data but makes files smaller by finding patterns", "Lossless is used for video; lossy is used for documents", "There is no difference — both store exactly the same data"], correct: 1, explain: "Lossy compression (like JPEG, MP3) permanently discards data for smaller files. Lossless (like PNG, FLAC) compresses without losing any data, so perfect reconstruction is possible." },
      { q: "Why was Unicode created to replace ASCII?", options: ["ASCII was too slow", "ASCII only covered 128 characters (mainly English); Unicode covers 140,000+ characters for all the world's writing systems", "ASCII had security flaws", "ASCII used too much storage space"], correct: 1, explain: "ASCII was limited to English characters. Unicode was created to encode the characters of every writing system in the world — over 140,000 characters." }
    ]
  },

  {
    id: "encryption-basics",
    section: "Data & Encoding",
    number: 14,
    title: "Encryption Basics",
    difficulty: "Intermediate",
    summary: "Scrambling data so only the intended recipient can read it — the backbone of internet security.",
    animation: "handshake",
    compareData: {
      exchange: {
        partyA: "Sender",
        partyB: "Receiver",
        steps: [
          { label: "original message", direction: "right", color: "var(--green)" },
          { label: "encrypted with key → scrambled", direction: "right", color: "var(--violet)" },
          { label: "receiver decrypts with key → readable", direction: "left", color: "var(--coral)" }
        ]
      }
    },
    content: {
      basic: `<p><strong>Encryption</strong> is the process of scrambling information so that only someone with the right "key" can unscramble and read it. Without encryption, any device your data passes through on the internet could read it — like sending a postcard instead of a sealed letter. HTTPS (the padlock in your browser's address bar) means the connection is encrypted, so your passwords and messages can't be read by others in the middle.</p>`,
      intermediate: `<p>There are two main types. <strong>Symmetric encryption</strong> uses the same key to encrypt and decrypt — fast, but the sender and receiver need to share the key somehow securely first. <strong>Asymmetric encryption</strong> uses a pair of keys: a <strong>public key</strong> (you share with everyone) to encrypt, and a <strong>private key</strong> (only you have) to decrypt. This solves the key-sharing problem — anyone can encrypt a message to you using your public key, but only you can decrypt it.</p>`,
      advanced: `<p>TLS (Transport Layer Security — what makes HTTPS work) combines both types: asymmetric encryption establishes a secure channel and exchanges a session key, then symmetric encryption handles the actual data transfer (since it's faster). The asymmetric step uses certificates (signed by Certificate Authorities) to prove you're talking to the real server and not an impersonator. Modern algorithms include AES for symmetric and RSA or elliptic-curve cryptography (ECC) for asymmetric — ECC achieves equivalent security to RSA with much shorter keys, making it increasingly preferred for performance-sensitive applications.</p>`
    },
    quiz: [
      { q: "What does encryption do?", options: ["Speeds up data transfer", "Scrambles data so only someone with the correct key can read it", "Compresses files to make them smaller", "Checks files for viruses"], correct: 1, explain: "Encryption scrambles data into an unreadable form. Only someone with the correct key can decrypt it back to the original — protecting data from being read in transit." },
      { q: "What is the difference between symmetric and asymmetric encryption?", options: ["Symmetric is older; asymmetric is newer", "Symmetric uses one shared key; asymmetric uses a public key to encrypt and a private key to decrypt", "Symmetric only works for text; asymmetric works for files", "They are functionally identical"], correct: 1, explain: "Symmetric uses one key for both encrypting and decrypting. Asymmetric uses a key pair: the public key encrypts, and only the matching private key can decrypt." },
      { q: "What does the padlock (🔒) in a browser's address bar tell you?", options: ["The website is 100% trustworthy and safe", "The connection is encrypted using HTTPS, so data between you and the server is scrambled", "You're connected to the fastest available server", "The website passed a government security check"], correct: 1, explain: "The padlock means the connection uses HTTPS (TLS encryption), so data in transit between you and the server is encrypted and can't be easily read by others." }
    ]
  },

  // ── Section 5: Programming Concepts ────────────────────
  {
    id: "what-is-programming",
    section: "Programming Concepts",
    number: 15,
    title: "What is Programming?",
    difficulty: "Basic",
    summary: "Writing step-by-step instructions for a computer to follow — exactly, every time.",
    animation: "encapsulation",
    compareData: {
      wraps: [
        { label: "Idea: add two numbers", color: "var(--violet)" },
        { label: "Code: a = 2 + 3", color: "var(--coral)" },
        { label: "Compiled/interpreted to machine code", color: "var(--yellow)" },
        { label: "CPU executes: output 5", color: "var(--green)" }
      ]
    },
    content: {
      basic: `<p><strong>Programming</strong> is writing precise step-by-step instructions (called <strong>code</strong>) that tell a computer exactly what to do. Computers follow instructions literally and perfectly — they don't guess what you mean. This means programming requires being very precise: a single missing comma or misspelled word can cause the whole program to fail. Programming languages (like Python, JavaScript, or Java) are the formal languages used to write these instructions.</p>`,
      intermediate: `<p>Code you write (called <strong>source code</strong>) is human-readable. But computers only understand binary instructions. Two processes bridge this gap: <strong>Compilation</strong> translates your entire code into machine code before it runs (fast at runtime, but requires a compile step — C and Go work this way). <strong>Interpretation</strong> translates and runs code line by line as you go (easier to test, but often slower — Python and JavaScript work this way). Some languages use both: Java compiles to bytecode, which is then interpreted by a virtual machine.</p>`,
      advanced: `<p>Modern programming involves many layers of abstraction — you rarely write machine code or even C for everyday programs. Higher-level languages trade some performance for dramatically improved developer productivity and safety. Managed languages (Java, C#, Python) add garbage collection — automatic memory management — eliminating whole classes of bugs (like use-after-free) at the cost of some unpredictability in when memory is cleaned up. The debate between compiled native performance and managed convenience drives most language design decisions today, with languages like Rust trying to offer manual memory control without garbage collection while still preventing memory safety bugs at compile time.</p>`
    },
    quiz: [
      { q: "Why does a single typo sometimes cause an entire program to fail?", options: ["Computers are overly strict for historical reasons", "Computers follow instructions literally and exactly — they can't guess what you meant to write", "Only beginner programs fail from typos", "Typos are just style issues and don't affect functionality"], correct: 1, explain: "Computers execute code exactly as written with no interpretation of intent. A typo can be syntactically invalid (causing an error) or silently change what the code does." },
      { q: "What is the difference between compilation and interpretation?", options: ["They are the same process", "Compilation translates all code to machine code before running; interpretation translates and runs code line by line", "Compilation is for websites; interpretation is for apps", "Interpreted programs run faster than compiled programs"], correct: 1, explain: "Compilation translates source code to machine code in full before execution (faster runtime). Interpretation translates and executes line-by-line (easier development but typically slower)." },
      { q: "What is source code?", options: ["The machine instructions a CPU actually runs", "The human-readable instructions a programmer writes, before compilation or interpretation", "A specific programming language", "Comments that explain the code but don't do anything"], correct: 1, explain: "Source code is the human-readable instructions written by programmers. It must be compiled or interpreted before the CPU can execute it." }
    ]
  },

  {
    id: "algorithms-and-logic",
    section: "Programming Concepts",
    number: 16,
    title: "Algorithms & Logic",
    difficulty: "Basic",
    summary: "An algorithm is a step-by-step recipe for solving a problem. Logic decides which steps run when.",
    animation: "dns-lookup",
    compareData: {
      chain: ["Input", "Step 1", "Step 2", "Decision?", "Output"]
    },
    content: {
      basic: `<p>An <strong>algorithm</strong> is a step-by-step set of instructions for solving a specific problem. A recipe is an algorithm. Directions from A to B are an algorithm. When you write code, you're expressing an algorithm in a language a computer can follow. Every app you use — from sorting your photo library to recommending a video — runs one or more algorithms to decide what to do.</p>`,
      intermediate: `<p>Algorithms use <strong>logic</strong> to make decisions: "if this is true, do this; otherwise, do that." They also use <strong>loops</strong> to repeat actions ("do this for every item in the list") and <strong>variables</strong> to remember information while running. The same problem can often be solved by many different algorithms — some much faster or more efficient than others. Choosing the right algorithm for the job is one of the core skills in computer science.</p>`,
      advanced: `<p>Algorithm efficiency is measured using <strong>Big O notation</strong>, which describes how runtime or memory grows as input size grows — O(1) is constant (equally fast regardless of input size), O(n) is linear (proportional to input), O(n²) is quadratic (gets dramatically worse with larger inputs). A poorly chosen algorithm can be the difference between a program completing in milliseconds and one that would take longer than the age of the universe. Sorting algorithms (mergesort, quicksort, heapsort) and search algorithms (binary search, hash tables) are foundational examples that appear in almost every real application.</p>`
    },
    quiz: [
      { q: "What is an algorithm?", options: ["A type of programming language", "A step-by-step set of instructions for solving a specific problem", "A computer chip that runs programs", "Another word for a bug in code"], correct: 1, explain: "An algorithm is a defined step-by-step procedure for solving a problem — the recipe your code follows. Every program runs one or more algorithms." },
      { q: "Why does the choice of algorithm matter?", options: ["It doesn't — all algorithms solve the same problem equally well", "Different algorithms for the same problem can have vastly different speeds and resource needs", "Algorithms only matter for academic computer science, not real apps", "Only the programming language matters, not the algorithm"], correct: 1, explain: "Different algorithms for the same task can vary dramatically in speed and efficiency. The right choice can mean milliseconds vs hours for large inputs." },
      { q: "What does a 'loop' do in an algorithm?", options: ["Causes the program to crash intentionally", "Repeats a set of instructions multiple times, typically once per item in a collection", "Connects to the internet", "Converts numbers to text"], correct: 1, explain: "A loop repeats a block of code — for example, 'do this once for every photo in the library' — without having to write the same code over and over." }
    ]
  },

  // ── Section 6: Networks & Communication ────────────────
  {
    id: "client-server-model",
    section: "Networks & Communication",
    number: 17,
    title: "Client & Server Model",
    difficulty: "Basic",
    summary: "Almost everything on the internet works by a client asking a server for something, and the server responding.",
    animation: "packet-travel",
    compareData: { travel: { partyA: "Client (you)", partyB: "Server", packetLabel: "REQUEST" } },
    content: {
      basic: `<p>Almost everything on the internet uses the same basic pattern: a <strong>client</strong> asks for something, and a <strong>server</strong> provides it. Your browser is a client — it asks a web server for a page, and the server sends it back. Your email app is a client — it asks an email server for your messages. The "client" is typically the device you're using; the "server" is a powerful computer somewhere that stores and delivers information or services.</p>`,
      intermediate: `<p>Servers are often just regular computers, but configured to always be on and respond to incoming requests. A single server can handle thousands of clients simultaneously. Large websites use many servers spread across the world so requests go to the nearest one (reducing delay). "Cloud computing" is essentially renting server capacity from large data centers instead of owning your own servers.</p>`,
      advanced: `<p>The client-server model's limitation is centralization — if the server goes down, clients get nothing. This drove the development of <strong>peer-to-peer (P2P)</strong> architectures where every participant is both client and server simultaneously, making the system resilient to individual node failures. BitTorrent is the classic example; blockchain networks are a more recent variant. Modern web architectures increasingly use <strong>microservices</strong> — where what looks like one server to the client is actually many small specialized servers communicating with each other internally — improving scalability and fault isolation.</p>`
    },
    quiz: [
      { q: "In the client-server model, what role does your web browser play?", options: ["It is a server — it sends pages to others", "It is a client — it requests pages from web servers", "It is both client and server equally", "It is neither — browsers work differently"], correct: 1, explain: "Your browser is a client: it sends HTTP requests asking web servers for pages, and the servers respond by sending those pages back." },
      { q: "What makes a computer a 'server'?", options: ["It must be a specially designed computer that can't run normal software", "It runs server software and is configured to always be available and respond to incoming requests", "It must be owned by a large company", "It must be physically located in a specific country"], correct: 1, explain: "Any computer can be a server — what makes it one is that it runs software configured to always be on and respond to client requests." },
      { q: "What is 'cloud computing'?", options: ["Computing that happens in the atmosphere", "Renting server/computing capacity from large data centers instead of owning your own hardware", "A type of Wi-Fi connection", "Software that only works when it's raining"], correct: 1, explain: "Cloud computing means using computing resources (servers, storage, processing) hosted by someone else's data center, accessed over the internet — rather than owning your own hardware." }
    ]
  },

  {
    id: "protocols-explained",
    section: "Networks & Communication",
    number: 18,
    title: "What are Protocols?",
    difficulty: "Basic",
    summary: "Protocols are agreed-upon rules for how two systems communicate — without them, nothing would understand each other.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "HTTP/HTTPS", desc: "How browsers request and receive web pages from servers." },
        { label: "SMTP/IMAP", desc: "How email is sent (SMTP) and received/synced (IMAP)." },
        { label: "TCP/IP", desc: "The core internet protocols: how data is broken into packets and routed." },
        { label: "SSH", desc: "How to securely log into and control a remote computer." }
      ]
    },
    content: {
      basic: `<p>A <strong>protocol</strong> is a set of agreed-upon rules that two systems follow when communicating. Without protocols, computers speaking different "languages" couldn't understand each other at all. Think of it like a formal conversation script: both sides know to follow the same rules, so they can understand each other even if they're completely different hardware or software. HTTP, email's SMTP, and the internet's core TCP/IP are all protocols.</p>`,
      intermediate: `<p>Protocols are layered — each handles one specific part of the communication. TCP/IP handles how data gets reliably from A to B. HTTP handles what the content of that data means (it's a web page request). This layering means a new application protocol (like HTTPS or WebSockets) can be built on top of TCP without changing TCP itself, and TCP can be updated without breaking HTTP. This separation of concerns is why the internet can evolve without everyone needing to change everything at once.</p>`,
      advanced: `<p>Protocols are formally defined in documents called <strong>RFCs</strong> (Requests for Comments), published by the IETF (Internet Engineering Task Force). Anyone can propose a new protocol through this open process. The OSI model provides a conceptual 7-layer framework (Physical, Data Link, Network, Transport, Session, Presentation, Application) that helps categorize where each protocol operates, though the internet's actual implementation maps more cleanly to the simpler 4-layer TCP/IP model. Understanding which layer a protocol operates at is fundamental to diagnosing network problems — is this a physical cable issue, a routing issue, or an application issue?</p>`
    },
    quiz: [
      { q: "What is a protocol in networking?", options: ["A type of cable connector", "Agreed-upon rules that define how two systems communicate", "A brand of networking hardware", "The physical path data travels through"], correct: 1, explain: "A protocol is a defined set of rules both sides agree to follow — enabling different systems to communicate and understand each other correctly." },
      { q: "Why are protocols layered?", options: ["To make them more complicated than necessary", "So each layer handles one concern, and layers can be updated independently without breaking others", "Layering makes protocols slower but safer", "Only one protocol layer actually does anything — the others are backups"], correct: 1, explain: "Layering separates concerns: each protocol handles one specific job. This means layers can evolve independently — improving HTTP doesn't require changing TCP." },
      { q: "What is an RFC?", options: ["A type of network cable standard", "A Request for Comments — the formal document that defines an internet protocol or standard", "A security certificate", "A type of IP address"], correct: 1, explain: "RFCs (Requests for Comments) are the official documents published by the IETF that define internet protocols and standards — the specification everyone implements." }
    ]
  },

  // ── Section 7: Security Fundamentals ───────────────────
  {
    id: "what-is-cybersecurity",
    section: "Security Fundamentals",
    number: 19,
    title: "What is Cybersecurity?",
    difficulty: "Basic",
    summary: "Protecting computers, networks, and data from theft, damage, or unauthorized access.",
    animation: "layer-stack",
    compareData: {
      layersNumbered: false,
      layers: [
        { name: "Application Security", detail: "Making sure apps and websites don't have bugs that can be exploited" },
        { name: "Network Security", detail: "Protecting data as it travels and controlling what can connect" },
        { name: "System Security", detail: "Securing the OS, user accounts, and configurations" },
        { name: "Physical Security", detail: "Protecting the actual hardware from physical access or theft" }
      ]
    },
    content: {
      basic: `<p><strong>Cybersecurity</strong> is the practice of protecting computers, networks, and data from unauthorized access, theft, or damage. As everything from banking to healthcare to power grids runs on connected computers, cybersecurity has become one of the most critical fields in technology. It's not just about stopping hackers — it's about making sure information stays private, systems stay available, and data stays accurate.</p>`,
      intermediate: `<p>Cybersecurity rests on three core goals, known as the <strong>CIA triad</strong>: <strong>Confidentiality</strong> (only authorized people can access data), <strong>Integrity</strong> (data can't be secretly modified), and <strong>Availability</strong> (systems work when they need to). Every security decision can be framed around which of these it protects — encryption protects confidentiality, checksums protect integrity, backups protect availability.</p>`,
      advanced: `<p>Cybersecurity is fundamentally about managing risk, not eliminating it — perfect security doesn't exist. Practitioners use threat modeling to identify what they're protecting, who might attack it, how, and what the impact would be. Defense-in-depth (multiple independent layers of protection) ensures no single failure leads to catastrophe. The adversarial nature of security distinguishes it from other engineering fields — defenders must protect everything, all the time; attackers only need to find one weakness, once. This asymmetry drives continuous evolution of both attack and defense techniques.</p>`
    },
    quiz: [
      { q: "What does the CIA triad stand for in cybersecurity?", options: ["Control, Intelligence, Access", "Confidentiality, Integrity, Availability", "Computer, Internet, Applications", "Central, Internal, Advanced"], correct: 1, explain: "The CIA triad — Confidentiality, Integrity, Availability — defines the three core security goals: keeping data private, keeping it accurate, and keeping systems running." },
      { q: "Why is cybersecurity described as 'managing risk' rather than 'eliminating risk'?", options: ["Because cybersecurity professionals are lazy", "Because perfect security doesn't exist — every system has some potential weakness, so the goal is to minimize and manage risk", "Because risk only exists for large companies, not individuals", "Because eliminating risk is easy and already done"], correct: 1, explain: "Perfect security is impossible — every system has some potential for failure or attack. Cybersecurity focuses on reducing risk to acceptable levels rather than claiming total elimination." },
      { q: "Why do attackers have an asymmetric advantage over defenders?", options: ["Attackers have better computers", "Defenders must protect everything all the time; attackers only need to find one weakness, once", "Security laws favor attackers", "Defenders aren't allowed to learn attack techniques"], correct: 1, explain: "This asymmetry is fundamental: defenders must keep everything secure at all times, while attackers just need to find one gap. This is why cybersecurity requires continuous vigilance." }
    ]
  },

  {
    id: "common-threats",
    section: "Security Fundamentals",
    number: 20,
    title: "Common Threats: Malware, Phishing & More",
    difficulty: "Basic",
    summary: "The most common ways attackers try to break into systems or steal your information.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "Phishing", desc: "Fake emails or websites that trick you into revealing passwords or clicking malicious links." },
        { label: "Malware", desc: "Malicious software — viruses, trojans, ransomware — that harms your system or steals data." },
        { label: "Password attacks", desc: "Guessing, stealing, or cracking passwords to gain unauthorized access." },
        { label: "Social engineering", desc: "Manipulating people psychologically to get them to reveal information or take actions." }
      ]
    },
    content: {
      basic: `<p>The most common threats aren't exotic technical attacks — they're tricks that exploit human behavior. <strong>Phishing</strong> is a fake email or website designed to look real, tricking you into entering your password. <strong>Malware</strong> is malicious software installed on your device that can steal data, encrypt your files for ransom, or spy on you. Most successful attacks use simple techniques because they work — a convincing fake email is far cheaper and easier than breaking cryptography.</p>`,
      intermediate: `<p><strong>Ransomware</strong> is a particularly devastating type of malware that encrypts all your files and demands payment for the key to decrypt them — it's crippled hospitals, governments, and companies worldwide. <strong>Social engineering</strong> attacks don't target technology at all — they target people, using psychological manipulation to trick someone into doing something harmful (like emailing a password "for IT support"). The human element is consistently the weakest link in security.</p>`,
      advanced: `<p>Modern attacks often chain multiple techniques: a phishing email delivers a macro-laden document (social engineering + malware delivery) that exploits a software vulnerability (technical attack) to escalate privileges and establish persistence, then laterally moves through the network to high-value targets before exfiltrating data or deploying ransomware. This "kill chain" model (developed by Lockheed Martin) helps defenders understand which stage to target for disruption. Even breaking one link in the chain — like blocking macro execution, or detecting lateral movement — can stop an otherwise successful attack.</p>`
    },
    quiz: [
      { q: "What is phishing?", options: ["A type of malware that encrypts your files", "A fake email or website designed to trick you into revealing sensitive information like passwords", "A network attack that floods a server", "A method of cracking encryption"], correct: 1, explain: "Phishing uses deceptive emails or websites that impersonate trusted entities to trick victims into revealing credentials or clicking malicious links." },
      { q: "What does ransomware do?", options: ["Steals your passwords and sends them to attackers", "Encrypts your files and demands payment for the key to unlock them", "Slows down your computer to mine cryptocurrency", "Deletes your operating system"], correct: 1, explain: "Ransomware encrypts a victim's files, making them inaccessible, then demands payment (ransom) in exchange for the decryption key." },
      { q: "Why is social engineering often more effective than technical hacking?", options: ["Technical hacking is illegal but social engineering is not", "It exploits human psychology rather than software — and humans are often the weakest security link", "Social engineering requires less skill than technical attacks", "Technical hacking stopped working after 2010"], correct: 1, explain: "Social engineering bypasses technical defenses by targeting human behavior — no code is needed when you can simply trick someone into giving you their password." }
    ]
  },

  {
    id: "passwords-and-authentication",
    section: "Security Fundamentals",
    number: 21,
    title: "Passwords & Authentication",
    difficulty: "Basic",
    summary: "How systems verify you're who you say you are, and how to not make it embarrassingly easy to break.",
    animation: "handshake",
    compareData: {
      exchange: {
        partyA: "You",
        partyB: "Login system",
        steps: [
          { label: "username + password", direction: "right", color: "var(--violet)" },
          { label: "system checks hash", direction: "left", color: "var(--coral)" },
          { label: "MFA code (optional)", direction: "right", color: "var(--violet)" }
        ]
      }
    },
    content: {
      basic: `<p><strong>Authentication</strong> is how a system verifies that you are who you claim to be. The most common method is a password — a secret only you know. Passwords are never stored directly on servers (a major breach would expose everyone's password). Instead, they're run through a <strong>hash function</strong> — a one-way process that converts your password to a scrambled string. When you log in, the server hashes what you typed and checks if it matches the stored hash.</p>`,
      intermediate: `<p><strong>Multi-Factor Authentication (MFA)</strong> adds a second verification step — something you have (a phone getting a code) or something you are (fingerprint) in addition to something you know (password). This means a stolen password alone isn't enough to log in. Strong passwords should be long, random, and unique per site. A <strong>password manager</strong> generates and stores strong unique passwords for you, so you only need to remember one master password.</p>`,
      advanced: `<p>Password storage security depends entirely on the hashing algorithm used. MD5 and SHA1 are fatally weak for passwords — modern GPUs can compute billions of hashes per second, making brute-force attacks trivial. Modern systems use dedicated password-hashing algorithms like <strong>bcrypt</strong>, <strong>Argon2</strong>, or <strong>scrypt</strong>, which are deliberately slow and memory-intensive to make brute-force impractical. They also include a random <strong>salt</strong> (random data added before hashing) so two users with the same password get different hashes, preventing rainbow table attacks. Passkeys — a newer standard replacing passwords with cryptographic key pairs — eliminate the password entirely, addressing phishing as well as brute-force attacks.</p>`
    },
    quiz: [
      { q: "Why don't websites store your actual password directly?", options: ["They don't have enough storage space", "If they did, a single breach would expose everyone's password in plain text; hashing converts it to an unreadable form", "Passwords are always sent to a central database instead", "It's required by law to delete all passwords immediately"], correct: 1, explain: "Storing plain-text passwords would be catastrophic in a breach. Hashing converts passwords to an irreversible scrambled form — the hash is stored, never the original password." },
      { q: "What does Multi-Factor Authentication (MFA) add?", options: ["A longer, more complex password requirement", "A second verification step (like a phone code) so a stolen password alone isn't enough to log in", "Automatic password changing every 30 days", "Fingerprint scanning for all logins"], correct: 1, explain: "MFA requires both something you know (password) and something you have (like a phone code), so stolen credentials alone can't grant access." },
      { q: "Why are algorithms like bcrypt preferred over MD5 for storing passwords?", options: ["bcrypt produces longer hashes", "bcrypt is deliberately slow, making brute-force attacks take far too long; MD5 is so fast modern hardware can test billions per second", "MD5 was banned by governments worldwide", "bcrypt works offline; MD5 requires internet access"], correct: 1, explain: "Password-specific algorithms like bcrypt are deliberately computationally expensive, making brute-force attacks impractical even with modern hardware." }
    ]
  },

  // ── Section 8: Data & Databases ────────────────────────
  {
    id: "what-is-a-database",
    section: "Data & Databases",
    number: 22,
    title: "What is a Database?",
    difficulty: "Basic",
    summary: "An organized system for storing, finding, and managing large amounts of information.",
    animation: "scale-zoom",
    compareData: {
      scales: [
        { label: "Spreadsheet", desc: "Fine for hundreds of rows — but manual, slow to search, poor for multiple users editing at once.", r: 35 },
        { label: "Small DB", desc: "Thousands of records, fast queries, multiple users safely. A local SQLite database.", r: 65 },
        { label: "Medium DB", desc: "Millions of records. A PostgreSQL or MySQL server handling a business.", r: 95 },
        { label: "Web-scale DB", desc: "Billions of records across many servers. Google, Amazon, banking systems.", r: 125 }
      ]
    },
    content: {
      basic: `<p>A <strong>database</strong> is an organized system for storing and finding information efficiently. Every app that needs to remember data uses one: Netflix stores what you've watched, Amazon stores your orders, your bank stores transactions. A database is better than storing data in files because it lets many users read and write simultaneously without corruption, and can find specific records almost instantly even among billions of entries.</p>`,
      intermediate: `<p>The most common type is a <strong>relational database</strong> — it stores data in tables (like spreadsheets) with rows and columns, and tables can be linked to each other. You query them using <strong>SQL</strong> (Structured Query Language) — a straightforward language for asking questions like "find all orders placed in the last 7 days." There are also <strong>NoSQL databases</strong> that store data differently (as documents, key-value pairs, or graphs) for cases where the rigid table structure doesn't fit well.</p>`,
      advanced: `<p>Database performance and reliability are determined by many factors: indexing (maintaining sorted data structures like B-trees so records can be found in O(log n) instead of scanning all rows), ACID properties (Atomicity, Consistency, Isolation, Durability — guarantees that ensure transactions are reliable even during failures), and replication (copying data to multiple servers for fault tolerance). Large-scale systems often trade some ACID guarantees for performance and availability — this tradeoff is captured by the <strong>CAP theorem</strong> (Consistency, Availability, Partition-tolerance — pick two), which explains why distributed database design involves difficult engineering choices with no single right answer.</p>`
    },
    quiz: [
      { q: "Why use a database instead of storing data in regular files?", options: ["Files don't support text; databases do", "Databases allow many users simultaneously, find records instantly, and prevent data corruption from multiple writers", "Files are slower to create than database entries", "Databases are more colorful and easier to look at"], correct: 1, explain: "Databases are built for simultaneous multi-user access, fast searching, and safe concurrent writes — things regular files handle poorly at scale." },
      { q: "What is SQL?", options: ["A type of database server hardware", "Structured Query Language — used to ask questions and retrieve data from relational databases", "A security protocol for databases", "A programming language for building apps"], correct: 1, explain: "SQL (Structured Query Language) is the standard language for querying relational databases — used to select, insert, update, and delete data." },
      { q: "What is the purpose of an index in a database?", options: ["To make the database look organized", "To maintain a sorted data structure that lets records be found in milliseconds instead of scanning every row", "To backup data automatically", "To encrypt sensitive columns"], correct: 1, explain: "An index is a pre-built sorted data structure that allows the database to find records almost instantly — instead of reading every single row to find a match." }
    ]
  },

  // ── Section 9: Cloud & Modern Tech ─────────────────────
  {
    id: "what-is-the-cloud",
    section: "Cloud & Modern Tech",
    number: 23,
    title: "What is 'The Cloud'?",
    difficulty: "Basic",
    summary: "Someone else's computer — specifically, data centers you rent computing power from over the internet.",
    animation: "packet-travel",
    compareData: { travel: { partyA: "Your device", partyB: "Cloud server", packetLabel: "DATA" } },
    content: {
      basic: `<p>"The cloud" is just a catchy name for using computers and storage that are owned and operated by someone else, accessed over the internet. When you save a file to Google Drive or iCloud, it's stored on Google's or Apple's servers in large data centers — that's the cloud. When you stream a video on Netflix, it's coming from Amazon's servers (Netflix uses Amazon Web Services). The cloud lets you access storage, software, and computing power without owning the hardware.</p>`,
      intermediate: `<p>Cloud providers like AWS (Amazon), Azure (Microsoft), and Google Cloud offer three main service types: <strong>IaaS</strong> (Infrastructure as a Service — rent raw servers/storage, you manage everything), <strong>PaaS</strong> (Platform as a Service — rent a managed platform; you just deploy your app), and <strong>SaaS</strong> (Software as a Service — rent finished software like Google Docs or Salesforce). The appeal: pay only for what you use, scale instantly, and let someone else handle hardware failures and maintenance.</p>`,
      advanced: `<p>Cloud computing enables architectures impossible with on-premises hardware: auto-scaling that adds servers in seconds when traffic spikes and removes them when it drops, globally distributed systems that replicate data across continents for low latency, and serverless computing where you deploy just a function and the cloud provider handles everything else (spinning up containers, routing traffic, billing per-invocation). The multi-cloud strategy — using several providers simultaneously — is increasingly adopted to avoid vendor lock-in and maximize resilience, though it adds significant operational complexity.</p>`
    },
    quiz: [
      { q: "What is 'the cloud' in simple terms?", options: ["A new type of internet connection", "Computing resources (servers, storage) owned by large companies, accessed over the internet for a fee", "Data stored in satellites orbiting Earth", "Wireless data that floats through the air"], correct: 1, explain: "The cloud means using computers, storage, and software that someone else owns (and maintains), accessed over the internet — rather than buying and running your own hardware." },
      { q: "What does SaaS (Software as a Service) mean?", options: ["You buy software and install it on your computer", "You rent and use finished software over the internet without managing any infrastructure", "Software that only works on servers", "A subscription to hardware upgrades"], correct: 1, explain: "SaaS means accessing ready-to-use software via the internet (like Google Docs or Spotify) — you don't install it or manage any servers; the provider handles everything." },
      { q: "What advantage does cloud computing provide that local servers struggle to match?", options: ["Local servers can't connect to the internet", "Instant scaling — adding capacity in seconds when demand spikes, rather than buying and installing new hardware", "Cloud is always cheaper in every situation", "Local servers can't run modern software"], correct: 1, explain: "Cloud platforms can provision additional server capacity in seconds during traffic spikes, then release it when no longer needed — something physically impossible with on-premises hardware." }
    ]
  },

  {
    id: "apis-explained",
    section: "Cloud & Modern Tech",
    number: 24,
    title: "APIs — How Apps Talk to Each Other",
    difficulty: "Intermediate",
    summary: "A defined way for different programs or services to communicate and share data.",
    animation: "handshake",
    compareData: {
      exchange: {
        partyA: "Your app",
        partyB: "External API",
        steps: [
          { label: "GET /weather?city=London", direction: "right", color: "var(--violet)" },
          { label: "200 OK + JSON data", direction: "left", color: "var(--coral)" },
          { label: "App displays the weather", direction: "right", color: "var(--green)" }
        ]
      }
    },
    content: {
      basic: `<p>An <strong>API</strong> (Application Programming Interface) is a defined way for two programs to communicate. When a weather app shows you the current temperature, it's probably asking a weather service's API for that data — it sends a request, and the API sends back the answer in a standard format. APIs let apps use each other's features and data without knowing how the other app works internally — like an electrical outlet that any appliance can plug into without needing to understand the power grid.</p>`,
      intermediate: `<p>Most modern web APIs are <strong>REST APIs</strong> — they use standard HTTP methods (GET to fetch, POST to create, PUT to update, DELETE to remove) and return data in <strong>JSON</strong> format (a simple text format computers and humans can both read). APIs often require an <strong>API key</strong> — a unique identifier that lets the provider track usage, enforce limits, and charge customers. This is how Stripe handles payments, how Google Maps is embedded in other sites, and how login-with-Google works.</p>`,
      advanced: `<p>REST is the dominant style but not the only one. <strong>GraphQL</strong> lets clients specify exactly what data they need (reducing over-fetching) but adds server complexity. <strong>gRPC</strong> uses Protocol Buffers (binary encoding) instead of JSON text, making it dramatically faster for high-throughput internal service communication. <strong>WebSockets</strong> replace the request-response model with a persistent bidirectional connection, enabling real-time features like live chat. API versioning, rate limiting, authentication strategies (OAuth 2.0, API keys, JWTs), and documentation standards (OpenAPI/Swagger) are the practical concerns that dominate real API design.</p>`
    },
    quiz: [
      { q: "What is an API?", options: ["A type of computer chip", "A defined way for two programs to communicate and share data", "A programming language for beginners", "A type of database"], correct: 1, explain: "An API (Application Programming Interface) is a defined contract for how programs communicate — specifying what requests can be made and what responses to expect." },
      { q: "What is JSON?", options: ["A JavaScript programming framework", "A simple text format used to structure data that both computers and humans can read", "A type of encryption", "A web browser"], correct: 1, explain: "JSON (JavaScript Object Notation) is a lightweight, readable text format commonly used for API responses — it structures data as key-value pairs and lists." },
      { q: "What is an API key used for?", options: ["To encrypt API responses", "To identify who is making requests, enabling usage tracking, rate limiting, and billing", "To store data on the API server", "As a password for the database behind the API"], correct: 1, explain: "API keys identify the caller — allowing providers to track usage, enforce per-customer rate limits, block abuse, and charge based on consumption." }
    ]
  },

  // ── Section 10: Digital Skills & Safety ────────────────
  {
    id: "staying-safe-online",
    section: "Digital Skills & Safety",
    number: 25,
    title: "Staying Safe Online",
    difficulty: "Basic",
    summary: "Practical habits that stop most attacks before they start — no technical expertise required.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "Use MFA", desc: "Turn on two-factor authentication on every important account. A stolen password alone won't be enough." },
        { label: "Unique passwords", desc: "Never reuse passwords. Use a password manager so you don't have to memorize them." },
        { label: "Update software", desc: "Most attacks exploit known, already-patched vulnerabilities. Keep everything updated." },
        { label: "Think before clicking", desc: "Phishing is the #1 attack method. Pause before clicking email links or entering passwords." }
      ]
    },
    content: {
      basic: `<p>Most successful cyberattacks succeed not because of sophisticated hacking, but because of avoidable mistakes: reusing passwords, clicking phishing links, using outdated software, or ignoring security warnings. The good news is that a few consistent habits protect against the vast majority of real-world attacks. You don't need to be a security expert — you just need to make yourself a harder target than average.</p>`,
      intermediate: `<p>The highest-impact habits are: (1) Use a unique, strong password for every account (a password manager handles this for you). (2) Enable multi-factor authentication wherever available. (3) Keep your OS and apps updated — patches close real vulnerabilities attackers are actively exploiting. (4) Be sceptical of unexpected emails, especially ones creating urgency ("your account will be closed!") or asking you to click links or enter credentials. (5) Only use HTTPS websites (check for the padlock) when entering sensitive information.</p>`,
      advanced: `<p>Security awareness training research shows that people make consistently poor security decisions under time pressure or social pressure — which is exactly what phishing and social engineering attacks exploit. Effective organizational security goes beyond telling employees "be careful" — it involves reducing friction for secure behavior (easy MFA options, password managers provided by the company), making insecure choices harder (blocking non-HTTPS sites, enforcing MFA), and running simulated phishing campaigns to identify and train vulnerable staff. The goal is to shift security from an individual responsibility to a systemic property of the environment.</p>`
    },
    quiz: [
      { q: "What is the single highest-impact security habit for most people?", options: ["Installing the most expensive antivirus available", "Using a unique, strong password for every account (enabled by a password manager)", "Never using public Wi-Fi under any circumstances", "Clearing your browser history every day"], correct: 1, explain: "Password reuse is one of the most exploited weaknesses — a breach on one site gives attackers access to all sites with the same password. Unique passwords (managed by a password manager) solve this." },
      { q: "Why does keeping software updated matter for security?", options: ["Updates add new features only — they have no security benefit", "Most attacks target known vulnerabilities that have already been patched — updates close those gaps", "Updates make your computer slower and more secure simultaneously", "Software updates are optional security theater"], correct: 1, explain: "Most real-world attacks exploit publicly known vulnerabilities that already have patches available. Keeping software updated closes those doors before attackers can walk through them." },
      { q: "What makes a phishing email effective?", options: ["It contains technical exploits that bypass antivirus", "It creates urgency or fear and impersonates a trusted source, bypassing critical thinking", "It's always sent from an obviously fake address", "Phishing only works on people with no technical knowledge"], correct: 1, explain: "Phishing works by exploiting human psychology — urgency, fear, and authority. These pressures make people act before thinking critically, regardless of their technical knowledge." }
    ]
  },

  {
    id: "privacy-and-data",
    section: "Digital Skills & Safety",
    number: 26,
    title: "Privacy & Your Data",
    difficulty: "Basic",
    summary: "What data apps and websites collect about you, and why it matters.",
    animation: "dns-lookup",
    compareData: {
      chain: ["You use an app", "App collects data", "Sold to data brokers", "Used for targeting / profiling"]
    },
    content: {
      basic: `<p>Almost every free app and website collects data about you — what you search, what you click, when you use it, where you are. This data is valuable because it lets companies show you targeted ads or sell insights to others. "If the product is free, you are the product" is the blunt way of putting it. Understanding what's collected and how it's used helps you make informed choices about what you share and with whom.</p>`,
      intermediate: `<p>The main types of data collected include: <strong>Identifiers</strong> (email, phone number, device ID), <strong>Behavioral data</strong> (what you searched, clicked, bought), <strong>Location data</strong> (where you go physically), and <strong>Inferred data</strong> (what companies guess about your interests, health, or income based on the above). Privacy regulations like GDPR (EU) and CCPA (California) give users rights over their data — to see what's stored, request deletion, and opt out of selling.</p>`,
      advanced: `<p>Modern tracking is remarkably sophisticated: even without cookies (which browsers increasingly block), websites use <strong>browser fingerprinting</strong> — combining dozens of characteristics (screen resolution, fonts installed, GPU, browser settings) that together uniquely identify your device. Data brokers aggregate information from hundreds of sources to build profiles with thousands of data points per person. <strong>Differential privacy</strong> (used by Apple and Google for some data collection) is a mathematical technique that adds calibrated noise to data so useful statistical insights can be derived without individual people's data being identifiable — representing a genuine attempt to balance utility with privacy.</p>`
    },
    quiz: [
      { q: "What does 'if the product is free, you are the product' mean?", options: ["Free products are always lower quality", "When an app costs nothing, it's often funded by collecting and monetizing your data", "Free apps are actually paid for by the government", "It means you have to work for the company to use their free product"], correct: 1, explain: "Many free apps and services make money by collecting user data and selling targeted advertising or data access — your attention and information are the revenue source." },
      { q: "What is browser fingerprinting?", options: ["Scanning your fingerprint to log into websites", "Identifying your device by combining many unique characteristics (screen size, fonts, settings) — even without cookies", "A way browsers store passwords", "A type of malware that tracks keystrokes"], correct: 1, explain: "Browser fingerprinting combines dozens of small device characteristics into a unique identifier that can track you across sites — bypassing cookie-based blocking." },
      { q: "What rights do regulations like GDPR give individuals regarding their personal data?", options: ["No rights — companies can do anything with your data", "Rights to see what data is stored, request deletion, and in some cases opt out of data selling", "Only the right to delete your account", "Only large companies must comply — small apps are exempt"], correct: 1, explain: "GDPR and similar regulations give people rights over their data: the right to access, correct, delete it, and in some cases object to processing — enforced by significant fines for violations." }
    ]
  },

  // ── Section 11: Tools & Concepts ───────────────────────
  {
    id: "version-control-basics",
    section: "Tools & Concepts",
    number: 27,
    title: "Version Control & Git Basics",
    difficulty: "Intermediate",
    summary: "A system that tracks every change you make to code — so you can go back, collaborate, and never lose work.",
    animation: "dns-lookup",
    compareData: {
      chain: ["Write code", "git add", "git commit", "git push", "Team sees it"]
    },
    content: {
      basic: `<p><strong>Version control</strong> is a system that tracks every change made to files over time, letting you go back to any previous version. <strong>Git</strong> is the most popular version control tool, used by almost every professional developer. Think of it as a detailed history log for your code — every change is recorded with a description of what you did and why, so you can always see what changed, when, and undo mistakes without losing everything.</p>`,
      intermediate: `<p>Git works with three areas: your <strong>working directory</strong> (where you edit files), the <strong>staging area</strong> (where you collect changes to save), and the <strong>repository</strong> (the full history of all commits). <code>git add</code> stages files; <code>git commit</code> saves a snapshot to history; <code>git push</code> shares it with others. <strong>GitHub</strong> is a website that hosts Git repositories online, making it easy to collaborate — multiple people can work on the same code, and Git manages merging their changes.</p>`,
      advanced: `<p>Git's design as a distributed VCS means every developer has the full history locally — enabling offline work and extremely fast operations. Branching is cheap (just a pointer to a commit), making feature branches standard practice: work in isolation, then merge back when ready. <strong>Pull requests</strong> (or merge requests) add a code review step before merging, which catches bugs and spreads knowledge. Git's storage model (content-addressed DAG of commits, trees, and blobs) is elegant but its CLI can be confusing — commands like <code>git rebase</code>, <code>git cherry-pick</code>, and <code>git reflog</code> are powerful but require understanding the underlying model to use safely.</p>`
    },
    quiz: [
      { q: "What does version control do?", options: ["Controls which version of Windows you use", "Tracks every change made to files over time, allowing you to review history and revert mistakes", "Manages software licenses and versions", "Speeds up code compilation"], correct: 1, explain: "Version control records a complete history of changes — what changed, when, and who made it — enabling collaboration and recovery from mistakes." },
      { q: "What does 'git commit' do?", options: ["Sends code to the internet", "Saves a snapshot of your staged changes to the local repository history", "Deletes the previous version of the file", "Compiles the code to check for errors"], correct: 1, explain: "git commit records a permanent snapshot of your staged changes in the local repository, with a message describing what you did." },
      { q: "What is GitHub?", options: ["A programming language", "A website that hosts Git repositories online, enabling collaboration", "The company that created Git", "A type of cloud database"], correct: 1, explain: "GitHub is a web platform that hosts Git repositories — it enables teams to collaborate on code, review changes, report issues, and share projects publicly." }
    ]
  },

  {
    id: "command-line-basics",
    section: "Tools & Concepts",
    number: 28,
    title: "The Command Line — Why It Still Matters",
    difficulty: "Basic",
    summary: "Why professionals still use text commands instead of clicking, and why it's more powerful than it looks.",
    animation: "compare-toggle",
    compareData: {
      labelA: "GUI (Click-based)",
      labelB: "Command line (Text-based)",
      descA: "Friendly, visual, easy to learn. But limited — you can only do what buttons exist for. Hard to automate.",
      descB: "Steeper start, but scriptable, automatable, available on any server, and often the only option for powerful admin tasks."
    },
    content: {
      basic: `<p>A <strong>command line interface (CLI)</strong> is a text-based way to control a computer by typing commands instead of clicking menus and icons. It looks intimidating at first, but it's extremely powerful: you can automate repetitive tasks, configure systems precisely, and access functionality that no graphical interface exposes. Most servers have no graphical interface at all — the command line is the only way in.</p>`,
      intermediate: `<p>The biggest advantage of the command line is <strong>scriptability</strong> — you can combine commands into scripts that run automatically, process thousands of files at once, or set up an entire server configuration with one command. Tasks that would take an hour clicking through menus can be done in seconds. Remote servers (including virtually all cloud infrastructure) are managed almost entirely through the command line, which is why it's essential for anyone working in IT, development, or cybersecurity.</p>`,
      advanced: `<p>The command line's power comes from composability — small, focused tools (grep, awk, sed, sort, uniq, xargs) that each do one thing well, combined through pipes into powerful one-liners. This Unix philosophy ("do one thing well, work together through text streams") contrasts with monolithic GUI applications. Shell scripting turns these compositions into reusable automation. Modern infrastructure management tools (Ansible, Terraform) and container orchestration (Kubernetes) are largely configured through text-based interfaces and scripts, meaning proficiency with the command line and text processing remains a core professional skill despite decades of GUI advancement.</p>`
    },
    quiz: [
      { q: "What is a key advantage the command line has over graphical interfaces?", options: ["Graphical interfaces are harder to use than the command line", "The command line is scriptable — tasks can be automated and run in sequence without manual clicking", "The command line is always faster at every task", "Graphical interfaces don't work on modern computers"], correct: 1, explain: "The command line's biggest advantage is automation — commands can be scripted, chained, and run automatically, something graphical clicking can't match." },
      { q: "Why do most servers have no graphical interface?", options: ["Graphical interfaces are illegal on servers", "GUIs use significant resources and aren't needed — the command line provides all necessary management capabilities more efficiently", "Servers use a different type of graphical interface that isn't visible", "Graphical interfaces are too slow to run on server hardware"], correct: 1, explain: "GUIs consume resources unnecessarily on servers that have no human sitting in front of them. The CLI provides complete control with minimal overhead." },
      { q: "What is the 'Unix philosophy' mentioned in this topic?", options: ["Always use the terminal, never use GUIs", "Build small focused tools that do one thing well and can be combined through text streams", "Unix is better than Windows in every way", "Command lines should be avoided when possible"], correct: 1, explain: "The Unix philosophy: build small, focused tools that each do one thing well, designed to be composed together through text pipes — creating powerful combinations from simple parts." }
    ]
  },

  // ── Section 12: Looking Forward ─────────────────────────
  {
    id: "open-source",
    section: "Looking Forward",
    number: 29,
    title: "Open Source & Free Software",
    difficulty: "Basic",
    summary: "Software whose code anyone can read, modify, and share — and why it powers most of the internet.",
    animation: "compare-toggle",
    compareData: {
      labelA: "Proprietary", labelB: "Open Source",
      descA: "Code is private. You can use the software but not see how it works. Changes controlled by the company.",
      descB: "Code is public. Anyone can study it, suggest fixes, and build on it. Often free to use. Linux, Firefox, and Android are examples."
    },
    content: {
      basic: `<p><strong>Open source software</strong> is software where the source code (the actual instructions that make it work) is publicly available for anyone to read, change, and share. This is the opposite of proprietary software (like Windows), where the code is kept secret. Open source is important because it powers most of the internet — Linux runs most servers, Apache and Nginx serve most web traffic, and Android (open source) runs most smartphones. It works through collaborative contribution from developers worldwide.</p>`,
      intermediate: `<p>Open source software is typically distributed under a <strong>license</strong> that sets the terms for use. Permissive licenses (like MIT, Apache) let anyone use the code for almost anything, including in commercial products. Copyleft licenses (like GPL) require that any modified versions also be released as open source. This "viral" property is intentional — it ensures improvements flow back to the community. Many companies build businesses around open source: offering support, hosting, or proprietary add-ons on top of freely available open source foundations.</p>`,
      advanced: `<p>The security implications of open source vs. proprietary are genuinely nuanced. Open source allows public scrutiny — many eyes reviewing code can catch vulnerabilities. But it also means attackers can study the code to find weaknesses. The Heartbleed vulnerability (2014) in OpenSSL — used by roughly two-thirds of HTTPS servers worldwide — was in open source code that had millions of users but was maintained by a tiny team with minimal funding, revealing how critical-infrastructure open source projects can be severely under-resourced despite their importance. This tension between openness and sustainability shapes ongoing debates in the open source community.</p>`
    },
    quiz: [
      { q: "What makes software 'open source'?", options: ["It must be completely free to use commercially", "The source code is publicly available for anyone to read, modify, and share", "It can only be used on Linux operating systems", "It was created by a community and never by a company"], correct: 1, explain: "Open source means the source code is publicly accessible — not necessarily free of charge (though it often is), but open to inspection, modification, and redistribution." },
      { q: "What is the difference between a permissive license (like MIT) and a copyleft license (like GPL)?", options: ["There is no meaningful difference", "Permissive allows use in proprietary products; copyleft requires derivative works to also be open source", "Permissive licenses cost money; copyleft is always free", "MIT is for software; GPL is for content like music and text"], correct: 1, explain: "Permissive licenses (MIT, Apache) let anyone use code commercially with few restrictions. Copyleft (GPL) requires that modified versions also be released under the same open license." },
      { q: "Name two major pieces of software infrastructure that are open source.", options: ["Windows and macOS", "Microsoft Word and Adobe Photoshop", "Linux (runs most servers) and Android (runs most smartphones)", "Gmail and Google Maps"], correct: 2, explain: "Linux and Android are huge examples. Linux runs the majority of the world's servers, cloud infrastructure, and supercomputers; Android powers most of the world's smartphones." }
    ]
  },

  {
    id: "artificial-intelligence-basics",
    section: "Looking Forward",
    number: 30,
    title: "Artificial Intelligence — What It Actually Is",
    difficulty: "Basic",
    summary: "AI is software trained on data to recognize patterns and make predictions — not actual thinking.",
    animation: "encapsulation",
    compareData: {
      wraps: [
        { label: "Raw training data", color: "var(--violet)" },
        { label: "Model learns patterns", color: "var(--coral)" },
        { label: "Model makes predictions", color: "var(--yellow)" },
        { label: "You see the result (text, image, decision)", color: "var(--green)" }
      ]
    },
    content: {
      basic: `<p><strong>Artificial Intelligence (AI)</strong> refers to computer systems that perform tasks that typically require human intelligence — recognizing speech, translating languages, generating text, or identifying objects in images. Despite the name, AI systems don't think or understand anything — they're sophisticated pattern-matching systems trained on enormous amounts of data. They find statistical patterns in that data and use those patterns to make predictions about new inputs.</p>`,
      intermediate: `<p><strong>Machine learning</strong> is the main technique behind modern AI — instead of being explicitly programmed with rules, the system learns rules from examples. Show it millions of labeled photos of cats and dogs, and it learns to distinguish them. <strong>Deep learning</strong> uses artificial neural networks (inspired loosely by how the brain works) with many layers that automatically learn increasingly abstract features from data. This is what powers image recognition, language models (like ChatGPT), and voice assistants.</p>`,
      advanced: `<p>Large Language Models (LLMs) like GPT-4 are transformer-based neural networks trained on vast text corpora to predict the next token in a sequence. Their remarkable capabilities emerge from scale — billions of parameters trained on trillions of tokens — rather than any explicit symbolic reasoning. This creates both impressive abilities and characteristic failures: they can produce fluent, confident-sounding text that is factually wrong (hallucination), struggle with precise logical reasoning, and reflect biases present in training data. Current AI research focuses on alignment (making AI systems do what humans actually want), interpretability (understanding why they produce specific outputs), and safety — ensuring systems remain beneficial and controllable as capabilities increase.</p>`
    },
    quiz: [
      { q: "What does an AI system actually do?", options: ["Thinks and reasons the same way humans do", "Finds statistical patterns in training data and uses them to make predictions about new inputs", "Accesses the internet to look up every answer", "Runs a database of every possible question and pre-written answer"], correct: 1, explain: "AI systems are trained on data to recognize patterns, then apply those patterns to make predictions — they match patterns statistically, not through understanding or reasoning." },
      { q: "What is machine learning?", options: ["Teaching students how to use computers", "A technique where systems learn from examples (data) rather than being explicitly programmed with rules", "Building robots that can learn physical tasks", "A programming language designed for AI"], correct: 1, explain: "Machine learning lets systems learn rules from data automatically — rather than a programmer writing explicit rules, the model discovers patterns in examples." },
      { q: "What is an AI 'hallucination'?", options: ["When AI sees things that aren't in images", "When an AI produces confident-sounding text that is factually incorrect", "A technical error that crashes the AI system", "When AI processes visual data incorrectly"], correct: 1, explain: "Hallucination refers to AI systems generating fluent, confident-sounding text that is factually wrong — a significant limitation of current LLMs that lack true world understanding." }
    ]
  },

  {
    id: "how-search-engines-work",
    section: "Looking Forward",
    number: 31,
    title: "How Search Engines Work",
    difficulty: "Intermediate",
    summary: "Crawling, indexing, and ranking billions of pages to find what you're looking for in milliseconds.",
    animation: "dns-lookup",
    compareData: {
      chain: ["Web crawler finds pages", "Content indexed", "Your query received", "Ranking algorithm runs", "Results shown"]
    },
    content: {
      basic: `<p>A search engine like Google does three things: <strong>crawls</strong> the web (automatically following links to discover pages), <strong>indexes</strong> those pages (storing information about their content), and <strong>ranks</strong> results (deciding which pages are most relevant to your search). When you search, you're not actually searching the live web — you're searching Google's pre-built index, which is why results come back in milliseconds despite the web having billions of pages.</p>`,
      intermediate: `<p>Ranking is the hard part. <strong>PageRank</strong> (Google's original algorithm) counted how many other pages link to a page as a measure of its authority — pages with many high-quality links rank higher. Modern ranking uses hundreds of signals beyond links: page load speed, mobile-friendliness, content freshness, click-through rates, and increasingly, AI models that understand the meaning behind both queries and pages. <strong>SEO</strong> (Search Engine Optimization) is the practice of making pages rank higher by aligning their content and structure with ranking signals.</p>`,
      advanced: `<p>At scale, search is an extraordinary engineering challenge: Google's index covers hundreds of billions of pages and is updated continuously as crawlers discover new and changed content. The serving infrastructure must handle billions of queries daily with sub-100ms response times. Modern search uses <strong>neural ranking models</strong> (like Google's BERT and MUM) that understand query intent semantically rather than matching keywords literally. Retrieval-augmented generation (RAG) architectures now combine traditional search with LLMs — retrieving relevant documents, then using an LLM to synthesize an answer from them — addressing LLM hallucination by grounding answers in retrieved evidence.</p>`
    },
    quiz: [
      { q: "When you search on Google, are you searching the live web?", options: ["Yes — Google checks every website in real time", "No — you're searching Google's pre-built index of pages it has already crawled", "It depends on the type of search", "Only image searches use the live web"], correct: 1, explain: "You're searching Google's pre-built index, assembled by crawlers over time — which is why results appear in milliseconds despite the web having billions of pages." },
      { q: "What was the key insight behind Google's original PageRank algorithm?", options: ["Pages with more text rank higher", "A page linked to by many other high-quality pages is likely more authoritative and useful", "Pages that load faster always rank higher", "Pages created by verified companies rank first"], correct: 1, explain: "PageRank treated links as votes — a page linked to by many other trusted pages is likely more authoritative. This signal was far better than keyword counting alone." },
      { q: "What is SEO?", options: ["A type of search engine alternative to Google", "Security Encryption Online — protecting searches from being tracked", "Search Engine Optimization — making web pages more likely to rank highly in search results", "The algorithm that decides search results"], correct: 2, explain: "SEO is the practice of optimizing websites to rank higher in search results — aligning content, structure, and performance with what ranking algorithms reward." }
    ]
  },

  {
    id: "internet-of-things",
    section: "Looking Forward",
    number: 32,
    title: "The Internet of Things (IoT)",
    difficulty: "Basic",
    summary: "Everyday objects — fridges, thermostats, cars, lights — connected to the internet and each other.",
    animation: "topology",
    compareData: {
      diagrams: [
        { label: "Smart home", svg: `
          <circle cx="200" cy="130" r="14" fill="var(--void)" stroke="var(--violet)" stroke-width="2"/>
          <text x="200" y="160" fill="var(--mist)" font-family="Fira Code" font-size="10" text-anchor="middle">Hub/Router</text>
          <circle cx="90" cy="65" r="10" fill="var(--void)" stroke="var(--coral)" stroke-width="2"/>
          <text x="90" y="50" fill="var(--mist)" font-family="Fira Code" font-size="10" text-anchor="middle">Thermostat</text>
          <circle cx="200" cy="40" r="10" fill="var(--void)" stroke="var(--coral)" stroke-width="2"/>
          <text x="200" y="25" fill="var(--mist)" font-family="Fira Code" font-size="10" text-anchor="middle">Door lock</text>
          <circle cx="310" cy="65" r="10" fill="var(--void)" stroke="var(--coral)" stroke-width="2"/>
          <text x="310" y="50" fill="var(--mist)" font-family="Fira Code" font-size="10" text-anchor="middle">Camera</text>
          <circle cx="90" cy="200" r="10" fill="var(--void)" stroke="var(--coral)" stroke-width="2"/>
          <text x="90" y="220" fill="var(--mist)" font-family="Fira Code" font-size="10" text-anchor="middle">Lights</text>
          <circle cx="310" cy="200" r="10" fill="var(--void)" stroke="var(--coral)" stroke-width="2"/>
          <text x="310" y="220" fill="var(--mist)" font-family="Fira Code" font-size="10" text-anchor="middle">Fridge</text>
          <line x1="190" y1="116" x2="98" y2="75" stroke="var(--border)" stroke-width="1.5"/>
          <line x1="200" y1="116" x2="200" y2="50" stroke="var(--border)" stroke-width="1.5"/>
          <line x1="210" y1="116" x2="302" y2="75" stroke="var(--border)" stroke-width="1.5"/>
          <line x1="190" y1="144" x2="98" y2="196" stroke="var(--border)" stroke-width="1.5"/>
          <line x1="210" y1="144" x2="302" y2="196" stroke="var(--border)" stroke-width="1.5"/>
        `}
      ]
    },
    content: {
      basic: `<p>The <strong>Internet of Things (IoT)</strong> refers to everyday physical objects that are connected to the internet and can send or receive data. Smart thermostats, connected door locks, fitness trackers, smart TVs, industrial sensors, and connected cars are all IoT devices. Instead of just a computer or phone being online, billions of ordinary objects now have network connections, small processors, and software — creating enormous potential for automation and data collection.</p>`,
      intermediate: `<p>IoT devices are typically small, low-power computers with sensors, network connectivity, and sometimes the ability to control physical things (motors, locks, valves). The challenge is managing billions of devices: keeping them updated, handling their data streams, and ensuring they stay secure. IoT has massive applications in industry ("Industry 4.0"): factories with thousands of sensors monitoring machines, cities with smart traffic lights, and agriculture with soil sensors — all generating data that can be analyzed to improve efficiency.</p>`,
      advanced: `<p>IoT presents severe security challenges that remain largely unsolved. Most IoT devices have minimal processing power and memory, making traditional security approaches difficult. Many ship with hardcoded credentials, receive no security updates, and are deployed in hard-to-reach locations for years. The Mirai botnet (2016) demonstrated the scale of the problem: it hijacked 600,000 IoT devices with default passwords to launch what was then the largest DDoS attack in history. Edge computing (processing data on or near the IoT device rather than sending everything to the cloud) is emerging as a necessary architectural shift — reducing latency, bandwidth costs, and privacy risks from centralizing all raw sensor data.</p>`
    },
    quiz: [
      { q: "What defines an 'Internet of Things' device?", options: ["Any device that costs less than $50", "A physical everyday object with internet connectivity and computing ability", "Only devices made after 2020", "Any device made by Amazon or Google"], correct: 1, explain: "IoT devices are physical everyday objects (not traditional computers or phones) that are internet-connected and can send, receive, or act on data." },
      { q: "What security risk do many IoT devices share?", options: ["They're too expensive to afford proper security", "Many ship with hardcoded or default credentials and receive few or no security updates", "IoT devices are immune to hacking because they're small", "Only devices connected to Wi-Fi have security risks"], correct: 1, explain: "Many IoT devices ship with default usernames/passwords, never receive security patches, and may run for years unmonitored — making them easy targets for attackers." },
      { q: "What is 'edge computing' in the IoT context?", options: ["Computing at the outer edges of a country's geography", "Processing data on or near the IoT device, rather than sending all raw data to a distant cloud server", "Using the device's screen as a computing interface", "A type of wireless networking standard for IoT"], correct: 1, explain: "Edge computing processes data locally on or near IoT devices — reducing latency, saving bandwidth, and limiting privacy exposure compared to sending all raw data to a cloud server." }
    ]
  },

  {
    id: "mobile-apps-explained",
    section: "Looking Forward",
    number: 33,
    title: "How Mobile Apps Work",
    difficulty: "Basic",
    summary: "What's actually happening inside the apps on your phone — native, web, and everything in between.",
    animation: "compare-toggle",
    compareData: {
      labelA: "Native app", labelB: "Web app",
      descA: "Built specifically for one platform (iOS or Android). Fastest, best access to device hardware. Installed from an app store.",
      descB: "Runs in the browser. Works on any device. Easier to update. But limited access to hardware features like camera or GPS."
    },
    content: {
      basic: `<p>Apps on your phone are just software — programs written specifically to run on mobile operating systems (iOS or Android). When you install an app from the App Store or Play Store, you're downloading the program's code to your device. The app then runs on your phone's processor and uses its screen, camera, GPS, and other features through APIs provided by the OS — similar to how desktop apps use Windows or macOS features.</p>`,
      intermediate: `<p>There are three main types: <strong>Native apps</strong> are written in platform-specific languages (Swift for iOS, Kotlin for Android) and have the best performance and hardware access. <strong>Web apps</strong> run in the browser and work across platforms. <strong>Cross-platform apps</strong> (using tools like React Native or Flutter) write code once and compile to native code for both iOS and Android — a practical compromise between development cost and performance. Most of what major apps like Instagram or TikTok do runs on remote servers — your phone is mostly the display layer.</p>`,
      advanced: `<p>Mobile platforms are tightly controlled by Apple and Google, who act as mandatory gatekeepers through their app stores — reviewing apps for policy compliance and taking a 15-30% revenue cut on purchases. This control enables security (vetting apps for malware) but also raises antitrust concerns. Mobile apps communicate with backend servers via APIs over HTTPS; the app itself often contains minimal logic or data, functioning as a thin client to web services. App security concerns include insecure data storage (credentials in plain text), insufficient transport security, reverse engineering of compiled code, and over-privileged permission requests — the mobile attack surface is different from but as rich as traditional desktop security.</p>`
    },
    quiz: [
      { q: "What does 'native app' mean?", options: ["An app made by the country you live in", "An app built specifically for one platform (iOS or Android) using that platform's own development tools", "Any app that came pre-installed on your phone", "An app with no internet connection required"], correct: 1, explain: "Native apps are built specifically for one platform (iOS or Android) using platform-specific languages and tools, giving the best performance and hardware access." },
      { q: "When you use an app like Instagram, where does most of the processing happen?", options: ["Entirely on your phone", "Mostly on remote servers — your phone mainly displays data fetched from the servers", "In the app store's servers", "Split 50/50 between phone and server at all times"], correct: 1, explain: "Most major apps are thin clients — your phone displays data and sends your actions, but the actual processing, storage, and logic runs on the company's servers." },
      { q: "What is a cross-platform app?", options: ["An app that works on computers and phones but not tablets", "An app built with tools that let one codebase compile to native apps for both iOS and Android", "An app shared between different companies", "An app that requires an internet connection on multiple platforms"], correct: 1, explain: "Cross-platform tools (like React Native or Flutter) let developers write code once that compiles to native iOS and Android apps — reducing development cost compared to maintaining two separate codebases." }
    ]
  },

  {
    id: "troubleshooting-basics",
    section: "Looking Forward",
    number: 34,
    title: "Troubleshooting — How to Think About Tech Problems",
    difficulty: "Basic",
    summary: "A systematic approach to diagnosing and fixing tech problems — the same logic professionals use.",
    animation: "dns-lookup",
    compareData: {
      chain: ["Identify symptom", "Is it new?", "What changed?", "Isolate the cause", "Test the fix"]
    },
    content: {
      basic: `<p>When something breaks, professionals don't guess randomly — they use a systematic process. The key questions are: What exactly is happening (symptom)? What should be happening instead (expected behavior)? Did anything change recently? Can I reproduce the problem? Narrowing down where the problem is — hardware, software, network, configuration — guides you toward the right fix without wasting time on irrelevant things.</p>`,
      intermediate: `<p>Good troubleshooting follows the scientific method: form a hypothesis ("the Wi-Fi is down"), test it specifically ("ping the router"), observe the result, and adjust. Changing multiple things at once makes it impossible to know what fixed it. Reading error messages carefully (they often tell you exactly what's wrong) and searching the exact error text online are underrated skills. Most problems have been encountered and solved by someone else — documentation and community forums exist for exactly this reason.</p>`,
      advanced: `<p>Professional-grade troubleshooting uses tools and techniques specific to the problem layer: network issues get packet captures (Wireshark) and diagnostic commands (ping, traceroute, nslookup); performance issues get profilers and resource monitors; application bugs get log analysis and debuggers. The skill of bisecting — narrowing a problem space by half with each test, like a binary search — accelerates diagnosis dramatically. Maintaining a change log ("what did I do last Tuesday that might have caused this?") is critical in complex systems where causation can be non-obvious. The meta-skill is knowing which layer of the stack to examine first based on the symptoms, saving enormous time compared to working through every possibility sequentially.</p>`
    },
    quiz: [
      { q: "Why is 'what changed recently?' one of the first troubleshooting questions?", options: ["Because newer things are always the cause of problems", "Changes are the most common cause of new problems — if something worked before and broke now, something changed", "To avoid looking at hardware issues", "It's just a polite way to start a conversation"], correct: 1, explain: "Most problems have a cause — something changed. Identifying recent changes (software updates, configuration edits, new hardware) immediately narrows the search space." },
      { q: "Why should you change only one thing at a time when troubleshooting?", options: ["It's faster to change one thing at a time", "If you change multiple things simultaneously, you can't know which change actually fixed the problem", "Changing multiple things at once can corrupt files", "Technical policy requires it"], correct: 1, explain: "Changing one thing at a time lets you identify the actual cause. Changing multiple things might fix the problem but leaves you unsure what worked — and unable to prevent recurrence." },
      { q: "What is the 'bisecting' technique in troubleshooting?", options: ["Dividing a computer's resources between two users", "Narrowing the problem space by half with each test, like a binary search, to find the root cause efficiently", "Asking two experts simultaneously", "Testing the first and last possible causes first"], correct: 1, explain: "Bisecting eliminates half the possibilities with each test — much faster than checking every possibility in sequence. It's the troubleshooting equivalent of binary search." }
    ]
  },

  {
    id: "where-to-learn-next",
    section: "Looking Forward",
    number: 35,
    title: "Where to Learn Next",
    difficulty: "Basic",
    summary: "The best free paths to take your learning further — whatever direction interests you most.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "Networking deep-dive", desc: "The Networking track here covers all 35 topics from LAN/WAN through routing, DNS, wireless, and security basics." },
        { label: "Linux Mastery", desc: "The Linux track covers 36 topics: terminal basics, permissions, scripting, package management, and system hardening." },
        { label: "Free coding practice", desc: "freeCodeCamp.org, The Odin Project, and CS50 (Harvard, free) are among the best beginner programming resources online." },
        { label: "Certifications", desc: "CompTIA IT Fundamentals+, CompTIA A+, and Google IT Support Certificate are recognized beginner credentials worth considering." }
      ]
    },
    content: {
      basic: `<p>You've now covered the foundations — how computers work, how the internet works, what software is, and the basics of security. From here, you can go deeper in any direction that interests you: the Networking track and Linux Mastery track on this site continue from exactly where this track leaves off. For coding, free resources like freeCodeCamp, CS50 (Harvard's free intro course), and The Odin Project are excellent next steps.</p>`,
      intermediate: `<p>If you're interested in cybersecurity specifically, the CompTIA Security+ certification is the most widely recognized entry-level credential. The Networking track here covers most of the foundation knowledge that certification builds on. TryHackMe and Hack The Box are hands-on platforms where you learn security by doing — working through guided challenges in safe, legal environments. Both have free beginner tiers.</p>`,
      advanced: `<p>For those heading toward professional technical roles: the networking knowledge here pairs with Cisco's CCNA for network engineering; the Linux knowledge pairs with RHCSA (Red Hat) or LFCS (Linux Foundation) for system administration. Software engineering paths typically start with a language (Python is recommended for beginners due to readability and broad application) before moving to data structures and algorithms, system design, and specializations. The most effective learning combines structured content (courses, books) with deliberate practice (projects, CTF challenges, contributing to open source) — passive consumption of tutorials rarely builds durable skills without active application.</p>`
    },
    quiz: [
      { q: "Which track on EasyToLearn is the best next step after Foundation if you want to understand how the internet works in depth?", options: ["Linux Mastery", "Networking", "Foundation again from the start", "There are no other tracks"], correct: 1, explain: "The Networking track covers all 35 networking topics in depth — from the basics of what a network is through TCP/IP, routing, DNS, wireless, and network security." },
      { q: "What makes TryHackMe and Hack The Box valuable learning platforms for cybersecurity?", options: ["They are government-certified training programs", "They provide hands-on practice in safe, legal environments — learning security by actually doing challenges", "They provide free cybersecurity certifications", "They replace the need for any other learning"], correct: 1, explain: "TryHackMe and Hack The Box provide guided, legal, hands-on security challenges — learning by doing in a safe environment is far more effective than just reading about security concepts." },
      { q: "What is generally the most effective approach to learning technical skills?", options: ["Watching as many videos as possible", "Combining structured content (courses, books) with active practice (projects, challenges)", "Reading documentation exclusively", "Memorizing technical specifications"], correct: 1, explain: "Passive content consumption builds limited skills. Combining structured learning with active practice — building projects, solving challenges — produces much more durable and usable knowledge." }
    ]
  },

  {
    id: "the-future-of-tech",
    section: "Looking Forward",
    number: 36,
    title: "The Future of Tech",
    difficulty: "Basic",
    summary: "A look at the technologies reshaping computing — AI, quantum, AR/VR, and what they might mean for you.",
    animation: "scale-zoom",
    compareData: {
      scales: [
        { label: "Today", desc: "AI assistants, cloud computing, smartphones, fast internet for most of the world.", r: 35 },
        { label: "Near future", desc: "AI deeply integrated into most software, autonomous vehicles common, AR glasses, 5G/6G everywhere.", r: 65 },
        { label: "Mid-term", desc: "Quantum computers solving specific problems, brain-computer interfaces, highly personalized AI.", r: 95 },
        { label: "Long-term", desc: "Genuinely uncertain — transformative technologies often arrive in unexpected forms.", r: 125 }
      ]
    },
    content: {
      basic: `<p>Technology evolves faster than anyone can predict precisely, but some trends are clear: <strong>AI</strong> is rapidly being integrated into almost every type of software. <strong>Quantum computing</strong> is approaching practical usefulness for specific problems (though not replacing regular computers). <strong>Augmented reality</strong> is slowly becoming wearable rather than phone-based. The most honest prediction is that the skills learned here — understanding how systems work, how they fail, and how to reason about them — will remain valuable regardless of which specific technologies dominate next decade.</p>`,
      intermediate: `<p><strong>Quantum computing</strong> uses quantum mechanical properties (superposition and entanglement) to perform certain calculations exponentially faster than classical computers — but only for specific types of problems. It will be transformative for cryptography (many current encryption methods would be broken by a powerful quantum computer), drug discovery, and optimization problems. It won't replace your laptop or phone for everyday tasks. The transition to "post-quantum cryptography" — encryption algorithms that remain secure against quantum computers — is already underway in standards bodies and large organizations.</p>`,
      advanced: `<p>Generative AI represents a genuine inflection point — for the first time, machines produce novel artifacts (text, code, images, video) rather than just classifying or predicting. The downstream effects on knowledge work, creative professions, and software development are profound and still unfolding. Neuromorphic computing (chip architectures inspired by biological brains, like Intel's Loihi) promises orders-of-magnitude improvements in energy efficiency for AI inference. The long-term trajectory of AI safety — ensuring increasingly capable AI systems remain aligned with human values as capabilities grow — is arguably the most important technical problem of the coming decades, and one where fundamental questions remain open.</p>`
    },
    quiz: [
      { q: "Why won't quantum computers replace regular computers for everyday tasks?", options: ["Quantum computers are slower than regular computers", "Quantum computers are only faster for specific mathematical problems — not for general computing tasks like email or browsing", "Regular computers are already too fast to improve on", "Quantum computers haven't been built yet"], correct: 1, explain: "Quantum computers offer exponential speedups for specific problem types (factoring, simulation) but aren't better for general computing — they're specialized tools, not universal replacements." },
      { q: "Why is 'post-quantum cryptography' already being worked on, even though powerful quantum computers don't widely exist yet?", options: ["It's just research with no urgency", "Transitioning encryption standards across global infrastructure takes years — preparation needs to start before the threat fully arrives", "Quantum computers have already broken current encryption", "Post-quantum cryptography makes computers quantum-powered"], correct: 1, explain: "Transitioning global infrastructure to new encryption standards takes many years. Working on post-quantum standards now means they'll be ready before quantum computers can break current encryption." },
      { q: "Which skills learned in this Foundation track remain most valuable as technology changes?", options: ["Memorizing specific product names and their current features", "Understanding how systems work, how they fail, and how to reason about them systematically", "Knowing which technologies are currently most popular", "Being able to use the latest AI tools"], correct: 1, explain: "Specific tools and products change rapidly. Understanding the underlying principles — how systems work, how to debug them, how to reason about new technology — provides durable value regardless of which specific technologies dominate the future." }
    ]
  }

];

// ── Helpers ──────────────────────────────────────────────
function getFoundationTopicById(id) {
  return FOUNDATION_TOPICS.find(t => t.id === id);
}
function getFoundationTopicsBySection() {
  const sections = {};
  FOUNDATION_TOPICS.forEach(t => {
    if (!sections[t.section]) sections[t.section] = [];
    sections[t.section].push(t);
  });
  return sections;
}
function getAdjacentFoundationTopics(id) {
  const index = FOUNDATION_TOPICS.findIndex(t => t.id === id);
  return {
    prev: index > 0 ? FOUNDATION_TOPICS[index - 1] : null,
    next: index < FOUNDATION_TOPICS.length - 1 ? FOUNDATION_TOPICS[index + 1] : null
  };
}
