// ============================================================
// NETLEARN — Linux Mastery Topics Data  (LINUX TRACK ONLY)
// Same shape as js/topics-data.js (the Networking track), but
// this file has its own array and its own helper function names
// so both tracks can be loaded on the same page without clashing.
// Written in simple, plain English on purpose — beginner first.
// ============================================================

const LINUX_TOPICS = [

  // ============================================================
  // SECTION 1: LINUX FUNDAMENTALS
  // ============================================================
  {
    id: "what-is-linux",
    section: "Linux Fundamentals",
    number: 1,
    title: "What is Linux?",
    difficulty: "Basic",
    summary: "The free, open operating system that powers most servers, phones, and security tools.",
    animation: "layer-stack",
    compareData: {
      layersNumbered: false,
      layers: [
        { name: "Applications", detail: "Programs you actually run — browsers, editors, tools" },
        { name: "Desktop / Shell", detail: "The graphical desktop, or the command-line shell" },
        { name: "Distribution tools", detail: "Package manager, default settings — what makes Ubuntu feel different from Fedora" },
        { name: "GNU utilities", detail: "Core command-line tools (ls, cp, bash) most distros share" },
        { name: "Linux Kernel", detail: "The core engine — talks directly to the hardware" },
        { name: "Hardware", detail: "The actual physical computer — CPU, memory, disk" }
      ]
    },
    content: {
      basic: `
        <p><strong>Linux</strong> is a type of operating system — the same kind of thing as Windows or macOS. An operating system is the software that lets your computer's hardware (the screen, keyboard, hard drive) actually run programs.</p>
        <p>What makes Linux special is that it's <strong>free and open source</strong>. "Open source" means anyone can look at the actual code that makes it work, change it, and share their own version. That's why there isn't just one "Linux" — there are many versions, called <strong>distributions</strong> (or "distros" for short), like Ubuntu, Debian, Fedora, and Kali Linux.</p>
        <p>At the very center of every distro is something called the <strong>kernel</strong> — the core piece of software that talks directly to the computer's hardware. Everything else (menus, apps, the desktop you see) is built around that kernel.</p>
      `,
      intermediate: `
        <p>Think of Linux in two parts: the <strong>kernel</strong> (the engine) and the <strong>distribution</strong> (the whole car built around that engine). The kernel itself is the same basic core across most distros, but each distribution adds its own tools, look, package manager, and defaults on top of it.</p>
        <p>This is why Ubuntu and Kali Linux feel different to use, even though deep down they're both running a very similar kernel. Some distros are built for everyday desktop use (Ubuntu, Linux Mint), some for servers (Debian, CentOS), and some for specific jobs like cybersecurity testing (Kali Linux, Parrot OS).</p>
      `,
      advanced: `
        <p>Technically, Linux is just the kernel — a single piece of software originally written by Linus Torvalds in 1991. What people casually call "Linux" (the full operating system with a desktop, apps, etc.) is more accurately called <strong>GNU/Linux</strong>, since most of the everyday tools (the command-line tools, compilers, and utilities) come from a separate project called GNU.</p>
        <p>This matters in the real world because Linux runs almost all of the internet's servers, most of the world's smartphones (Android is built on the Linux kernel), and nearly every major cloud platform — which is exactly why anyone serious about cybersecurity needs to be comfortable with it. Most of the tools security professionals use day-to-day only run properly on Linux.</p>
      `
    },
    quiz: [
      { q: "What does 'open source' mean?", options: ["The software is hidden and secret", "Anyone can view, change, and share the actual code", "It only works on open Wi-Fi networks", "It costs money to use"], correct: 1, explain: "Open source means the code behind the software is publicly visible, and anyone can change or share their own version of it." },
      { q: "What is the 'kernel' of an operating system?", options: ["The desktop wallpaper", "The core software that talks directly to the hardware", "A type of antivirus", "A web browser"], correct: 1, explain: "The kernel is the core piece of software that lets the operating system actually control the computer's hardware." },
      { q: "Which of these is an example of a Linux distribution?", options: ["Windows 11", "macOS", "Ubuntu", "iOS"], correct: 2, explain: "Ubuntu is a popular Linux distribution. Windows, macOS, and iOS are not built on the Linux kernel." }
    ]
  },

  {
    id: "filesystem-hierarchy",
    section: "Linux Fundamentals",
    number: 2,
    title: "The Linux Filesystem Hierarchy",
    difficulty: "Basic",
    summary: "How Linux organizes every file on the system into one single folder tree starting at /.",
    animation: "topology",
    compareData: {
      diagrams: [
        { label: "The Tree", draw: "tree" }
      ]
    },
    content: {
      basic: `
        <p>In Linux, every single file and folder on the computer lives inside one giant tree that starts at a single point called <strong>root</strong>, written as just a forward slash: <code>/</code>. There's no "C: drive" like on Windows — everything, even other hard drives, gets attached somewhere inside that one tree.</p>
        <p>Some important folders you'll see all the time:</p>
        <ul>
          <li><strong>/home</strong> — where each user's personal files live (like "My Documents")</li>
          <li><strong>/etc</strong> — configuration files that control how programs behave</li>
          <li><strong>/bin</strong> and <strong>/usr/bin</strong> — where many programs/commands actually live</li>
          <li><strong>/var</strong> — files that change often, like logs</li>
          <li><strong>/tmp</strong> — temporary files that get cleared out regularly</li>
        </ul>
      `,
      intermediate: `
        <p>This single-tree design is intentional and very different from Windows. Because everything hangs off one root <code>/</code>, you can plug in a USB drive, a network folder, or even another computer's storage, and Linux just attaches ("mounts") it as a folder somewhere inside the same tree — no separate drive letters needed.</p>
        <p>Most folder names follow the <strong>Filesystem Hierarchy Standard (FHS)</strong>, a shared convention most distros agree on, which is why <code>/etc</code> means "configuration files" on almost any Linux system you sit down at, not just one specific distro.</p>
      `,
      advanced: `
        <p>A few folders matter a lot for security work specifically. <strong>/etc/passwd</strong> and <strong>/etc/shadow</strong> hold user account information (the second one holds the actual password hashes). <strong>/var/log</strong> holds system and security logs that are often the first place an investigator looks after an incident. <strong>/proc</strong> isn't a real folder on disk at all — it's a "virtual" filesystem the kernel generates on the fly, giving you a live window into running processes and system information, which is why tools like <code>top</code> and <code>ps</code> are able to show real-time data.</p>
      `
    },
    quiz: [
      { q: "What is the single starting point of every Linux filesystem called?", options: ["C:", "Home", "Root, written as /", "Desktop"], correct: 2, explain: "Linux organizes everything into one tree starting at root, written as a single forward slash /." },
      { q: "Which folder typically holds a regular user's personal files?", options: ["/etc", "/home", "/bin", "/var"], correct: 1, explain: "/home is where each user's personal files and folders live, similar to 'My Documents' on Windows." },
      { q: "Which file holds users' actual password hashes?", options: ["/etc/passwd", "/etc/shadow", "/var/log", "/tmp"], correct: 1, explain: "/etc/shadow stores the actual password hashes; /etc/passwd holds basic account info but not the real password data." }
    ]
  },

  {
    id: "shell-basics",
    section: "Linux Fundamentals",
    number: 3,
    title: "Shell Basics — What is a Terminal & Shell?",
    difficulty: "Basic",
    summary: "The text-based window where you type commands, and the program that reads and runs them.",
    animation: "handshake",
    compareData: {
      exchange: {
        partyA: "You",
        partyB: "Shell",
        steps: [
          { label: "you type a command", direction: "right", color: "var(--signal)" },
          { label: "shell runs it", direction: "left", color: "var(--amber)" },
          { label: "shell shows the result", direction: "left", color: "var(--signal)" }
        ]
      }
    },
    content: {
      basic: `
        <p>A <strong>terminal</strong> is just a window where you type text commands instead of clicking icons. A <strong>shell</strong> is the actual program running inside that window that reads what you type, figures out what you mean, and runs it. The most common shell on Linux is called <strong>bash</strong>.</p>
        <p>It works like a simple back-and-forth conversation: you type a command and press Enter, the shell runs it, then shows you the result and waits for your next command.</p>
      `,
      intermediate: `
        <p>People often use "terminal" and "shell" interchangeably, but they're technically different things: the terminal is just the window/program displaying text, while the shell is the actual command interpreter running inside it. You could open different shells (bash, zsh, fish) inside the very same terminal window.</p>
        <p>The shell also gives you a <strong>prompt</strong> — usually showing your username, computer name, and current folder — right before you type each command, so you always know where you are.</p>
      `,
      advanced: `
        <p>Bash (<strong>Bourne Again SHell</strong>) is the default on most Linux distributions and is itself a small programming language — which is exactly why "Scripting & Automation" later in this track is really just "using the shell to write small programs." Other shells like <strong>zsh</strong> (popular for its extra features) and <strong>fish</strong> (friendlier defaults) are largely bash-compatible for everyday commands but diverge in scripting syntax.</p>
        <p>For cybersecurity work specifically, comfort with the shell is non-negotiable — nearly every penetration testing tool, log analysis workflow, and remote server interaction happens through a terminal, often over SSH to a machine with no graphical interface at all.</p>
      `
    },
    quiz: [
      { q: "What's the difference between a terminal and a shell?", options: ["They are exactly the same thing", "The terminal is the window; the shell is the program inside it that runs your commands", "The shell is only for Windows", "A terminal can only display images"], correct: 1, explain: "The terminal is the window you see and type into; the shell is the actual program interpreting and running your typed commands." },
      { q: "What is the most common default shell on Linux?", options: ["PowerShell", "bash", "Python", "Notepad"], correct: 1, explain: "Bash (Bourne Again SHell) is the default shell on most Linux distributions." },
      { q: "Why does the shell matter especially for cybersecurity work?", options: ["It doesn't matter at all", "Most security tools and remote servers are operated through the command line/terminal", "Shells are only used for gaming", "Cybersecurity never involves Linux"], correct: 1, explain: "Most security tools, remote servers, and log analysis work happen through the terminal, often without any graphical interface available." }
    ]
  },

  {
    id: "basic-navigation",
    section: "Linux Fundamentals",
    number: 4,
    title: "Basic Navigation Commands (ls, cd, pwd)",
    difficulty: "Basic",
    summary: "The three commands you'll type more than any others — to look around, move, and check where you are.",
    animation: "topology",
    compareData: {
      diagrams: [
        { label: "pwd", svg: `
          <text x="200" y="50" fill="var(--slate)" font-family="IBM Plex Mono" font-size="12" text-anchor="middle">pwd shows where you are right now:</text>
          <rect x="60" y="90" width="280" height="40" rx="4" fill="none" stroke="var(--signal)" stroke-width="2"/>
          <text x="200" y="115" fill="var(--signal)" font-family="IBM Plex Mono" font-size="13" text-anchor="middle">/home/alex/projects</text>
        `},
        { label: "ls", svg: `
          <text x="200" y="40" fill="var(--slate)" font-family="IBM Plex Mono" font-size="12" text-anchor="middle">ls lists what's inside the current folder:</text>
          <rect x="40" y="70" width="90" height="36" rx="4" fill="none" stroke="var(--signal-dim)" stroke-width="2"/>
          <text x="85" y="93" fill="var(--paper)" font-family="IBM Plex Mono" font-size="11" text-anchor="middle">notes.txt</text>
          <rect x="155" y="70" width="90" height="36" rx="4" fill="none" stroke="var(--signal-dim)" stroke-width="2"/>
          <text x="200" y="93" fill="var(--paper)" font-family="IBM Plex Mono" font-size="11" text-anchor="middle">photos/</text>
          <rect x="270" y="70" width="90" height="36" rx="4" fill="none" stroke="var(--signal-dim)" stroke-width="2"/>
          <text x="315" y="93" fill="var(--paper)" font-family="IBM Plex Mono" font-size="11" text-anchor="middle">script.sh</text>
        `},
        { label: "cd photos", svg: `
          <text x="200" y="40" fill="var(--slate)" font-family="IBM Plex Mono" font-size="12" text-anchor="middle">cd moves you into a folder:</text>
          <rect x="40" y="70" width="120" height="36" rx="4" fill="none" stroke="var(--ink-line)" stroke-width="2"/>
          <text x="100" y="93" fill="var(--slate)" font-family="IBM Plex Mono" font-size="11" text-anchor="middle">projects (was here)</text>
          <text x="200" y="115" fill="var(--amber)" font-family="IBM Plex Mono" font-size="14" text-anchor="middle">↓ cd photos</text>
          <rect x="120" y="130" width="160" height="36" rx="4" fill="none" stroke="var(--signal)" stroke-width="2"/>
          <text x="200" y="153" fill="var(--signal)" font-family="IBM Plex Mono" font-size="11" text-anchor="middle">photos/ (now here)</text>
        `}
      ]
    },
    content: {
      basic: `
        <p>Three commands get you moving around the filesystem:</p>
        <ul>
          <li><strong>pwd</strong> — "print working directory" — shows you exactly where you currently are</li>
          <li><strong>ls</strong> — "list" — shows you the files and folders in your current location</li>
          <li><strong>cd</strong> — "change directory" — moves you into a different folder, e.g. <code>cd Documents</code></li>
        </ul>
        <p>You'll type these three commands more than almost anything else when using Linux.</p>
      `,
      intermediate: `
        <p>A few useful shortcuts make these commands much faster: <code>cd ..</code> moves up one folder level, <code>cd ~</code> jumps straight to your home folder, and <code>cd /</code> jumps to the very root of the whole filesystem. <code>ls -l</code> shows a detailed listing (permissions, size, date), and <code>ls -a</code> shows hidden files too — hidden files and folders in Linux just start with a dot, like <code>.config</code>.</p>
      `,
      advanced: `
        <p>Combining flags is common practice: <code>ls -la</code> shows a detailed listing including hidden files in one command. Tab-completion (pressing Tab while typing a path) is one of the biggest productivity boosters in the shell — it auto-completes file and folder names and reduces typos, which matters a lot when working with long paths during incident response or system administration under time pressure.</p>
      `
    },
    quiz: [
      { q: "Which command shows your current location in the filesystem?", options: ["ls", "cd", "pwd", "find"], correct: 2, explain: "pwd (print working directory) tells you exactly which folder you're currently in." },
      { q: "What does cd .. do?", options: ["Deletes the current folder", "Moves up one folder level", "Lists hidden files", "Creates a new folder"], correct: 1, explain: "cd .. moves you up one level in the folder structure, toward the parent folder." },
      { q: "How do you tell a file or folder is 'hidden' in Linux?", options: ["It's colored red", "Its name starts with a dot (.)", "It has no name at all", "It's stored in /tmp only"], correct: 1, explain: "Hidden files and folders in Linux are simply ones whose names begin with a dot, like .config." }
    ]
  },

  // ============================================================
  // SECTION 2: FILE & DIRECTORY MANAGEMENT
  // ============================================================
  {
    id: "file-management-basics",
    section: "File & Directory Management",
    number: 5,
    title: "Creating, Moving, Copying, Deleting Files",
    difficulty: "Basic",
    summary: "The core commands for managing files: mkdir, touch, cp, mv, and rm.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "mkdir", desc: "Makes a new, empty folder. Example: mkdir notes" },
        { label: "touch", desc: "Creates a new, empty file. Example: touch notes.txt" },
        { label: "cp", desc: "Copies a file, leaving the original in place. Example: cp notes.txt backup.txt" },
        { label: "mv", desc: "Moves a file, OR renames it — it does both jobs. Example: mv notes.txt archive/" },
        { label: "rm", desc: "Deletes a file immediately and permanently — no recycle bin. Example: rm notes.txt" }
      ]
    },
    content: {
      basic: `
        <p>Five commands cover almost everything you need to manage files and folders:</p>
        <ul>
          <li><strong>mkdir</strong> — make a new folder, e.g. <code>mkdir notes</code></li>
          <li><strong>touch</strong> — create a new empty file, e.g. <code>touch notes.txt</code></li>
          <li><strong>cp</strong> — copy a file, e.g. <code>cp notes.txt backup.txt</code></li>
          <li><strong>mv</strong> — move OR rename a file (it does both jobs), e.g. <code>mv notes.txt archive/</code></li>
          <li><strong>rm</strong> — delete a file, e.g. <code>rm notes.txt</code></li>
        </ul>
      `,
      intermediate: `
        <p>A common surprise for beginners: Linux's <code>rm</code> command does not send files to a recycle bin — it deletes them right away, permanently. Always double check before running <code>rm</code>, especially with wildcards (covered next topic). To delete a folder and everything inside it, you typically add flags: <code>rm -r foldername</code> ("recursive," meaning go inside and delete everything).</p>
      `,
      advanced: `
        <p>The combination <code>rm -rf</code> is infamous in the Linux world — the <code>-f</code> ("force") flag skips confirmation prompts entirely, and combined with <code>-r</code> it will silently delete an entire folder tree with zero warnings. This single command, run against the wrong path (especially as root), is one of the most common ways people accidentally destroy a system. Good practice: always double-check the exact path before running any destructive command, and consider tools like <code>trash-cli</code> if you want recycle-bin-style safety nets.</p>
      `
    },
    quiz: [
      { q: "Which command creates a new empty file?", options: ["mkdir", "touch", "cp", "rm"], correct: 1, explain: "touch creates a new empty file. mkdir creates a folder instead." },
      { q: "Does Linux's rm command send deleted files to a recycle bin?", options: ["Yes, always", "No — files are deleted immediately and permanently", "Only on Ubuntu", "Only if you use sudo"], correct: 1, explain: "Unlike many graphical file managers, the rm command deletes files immediately with no recycle bin by default." },
      { q: "What does the -f flag do when combined with rm -r?", options: ["Makes the deletion faster only", "Skips all confirmation prompts, making accidental mass-deletion easier", "Backs up files before deleting", "Only works on empty folders"], correct: 1, explain: "The -f (force) flag skips confirmations, which is why rm -rf is notorious for accidental, irreversible deletions." }
    ]
  },

  {
    id: "file-viewing-editing",
    section: "File & Directory Management",
    number: 6,
    title: "File Viewing & Editing (cat, nano, vim basics)",
    difficulty: "Basic",
    summary: "How to look inside a text file and make simple edits without leaving the terminal.",
    animation: "compare-toggle",
    compareData: {
      labelA: "nano", labelB: "vim",
      descA: "Beginner-friendly. Shows on-screen shortcuts at the bottom. Great for quick edits.",
      descB: "Very powerful but has a learning curve. Has different 'modes' for typing vs giving commands. Standard on almost every Linux server."
    },
    content: {
      basic: `
        <p>To quickly look inside a text file without editing it, use <strong>cat</strong> — it just prints the whole file straight to your screen, e.g. <code>cat notes.txt</code>.</p>
        <p>To actually edit a file, you need a text editor that works inside the terminal. Two common ones are <strong>nano</strong> (very beginner-friendly, shows shortcuts at the bottom of the screen) and <strong>vim</strong> (very powerful, but has a learning curve).</p>
      `,
      intermediate: `
        <p><code>cat</code> works great for short files, but for long files it's better to use <code>less</code>, which lets you scroll through a file page by page instead of dumping everything onto your screen at once. Press <code>q</code> to quit out of <code>less</code> when you're done.</p>
        <p>For editing, <strong>nano</strong> is the easiest starting point — you can just start typing, and the shortcuts (like Ctrl+O to save, Ctrl+X to exit) are always shown on screen.</p>
      `,
      advanced: `
        <p><strong>Vim</strong> deserves special attention because it's installed by default on nearly every Linux server you'll ever touch, including minimal ones with nothing else available — so it's worth learning at least the basics even if you prefer nano day-to-day. Vim works in "modes": you start in <strong>Normal mode</strong> (for moving around and giving commands), press <code>i</code> to enter <strong>Insert mode</strong> (for actually typing text), and press <code>Esc</code> to go back to Normal mode. To save and quit, go back to Normal mode and type <code>:wq</code> then Enter. Many beginners' first vim experience is getting "stuck" inside it — knowing this one escape sequence solves that almost every time.</p>
      `
    },
    quiz: [
      { q: "What does the cat command do?", options: ["Deletes a file", "Prints the contents of a file to the screen", "Creates a new folder", "Copies a file"], correct: 1, explain: "cat displays a file's full contents directly in the terminal." },
      { q: "Why is vim worth learning even if you prefer nano?", options: ["Vim is required by law", "Vim is installed by default on nearly every Linux server, even minimal ones", "Nano doesn't actually work", "Vim is only for programmers"], correct: 1, explain: "Vim ships by default on almost every Linux system, so it's often the only editor available on a minimal server." },
      { q: "How do you save and exit vim?", options: ["Press Ctrl+S", "Go to Normal mode and type :wq then Enter", "Close the terminal window", "Press the Delete key"], correct: 1, explain: "From Normal mode (press Esc to get there), typing :wq and pressing Enter saves the file and quits vim." }
    ]
  },

  {
    id: "wildcards-globbing",
    section: "File & Directory Management",
    number: 7,
    title: "Wildcards & Globbing",
    difficulty: "Basic",
    summary: "Special symbols that let you match many filenames at once instead of typing each one out.",
    animation: "encapsulation",
    compareData: {
      wraps: [
        { label: "*.txt", color: "var(--signal)" },
        { label: "matches: notes.txt", color: "var(--amber)" },
        { label: "matches: notes.txt, todo.txt", color: "#a78bfa" },
        { label: "matches: notes.txt, todo.txt, log.txt", color: "var(--paper)" }
      ]
    },
    content: {
      basic: `
        <p><strong>Wildcards</strong> are special symbols that act as placeholders so you can match many files at once instead of typing each filename individually.</p>
        <p>The most common one is the <strong>asterisk (*)</strong>, which means "anything." For example, <code>*.txt</code> matches every file ending in .txt, and <code>photo*</code> matches every file starting with "photo."</p>
      `,
      intermediate: `
        <p>Another useful wildcard is the <strong>question mark (?)</strong>, which matches exactly one unknown character — so <code>file?.txt</code> matches <code>file1.txt</code> and <code>fileA.txt</code>, but not <code>file10.txt</code> (because that's two extra characters, not one).</p>
        <p>This whole system is technically called <strong>globbing</strong>. It's extremely useful combined with commands like <code>rm</code> or <code>cp</code> — but that power is also exactly why it's risky.</p>
      `,
      advanced: `
        <p>Be especially careful combining wildcards with destructive commands. Running <code>rm *</code> in the wrong folder deletes everything in that folder instantly, with no confirmation by default. A classic safety habit: run the equivalent <code>ls</code> command first (e.g. <code>ls *.txt</code>) to see exactly what would be affected before swapping <code>ls</code> for <code>rm</code> in the same command. Globbing is handled by the shell itself, not by the individual command — meaning the shell expands <code>*.txt</code> into the full list of matching filenames before the command (like rm or cp) ever sees it.</p>
      `
    },
    quiz: [
      { q: "What does the * wildcard match?", options: ["Exactly one character", "Nothing at all", "Any number of any characters", "Only numbers"], correct: 2, explain: "The asterisk (*) is a wildcard that matches any sequence of characters, including none at all." },
      { q: "What is this system of matching filenames with wildcards called?", options: ["Piping", "Globbing", "Scripting", "Mounting"], correct: 1, explain: "This pattern-matching system for filenames is called globbing." },
      { q: "Why should you be cautious using rm with wildcards?", options: ["rm with wildcards is always blocked by Linux", "It can delete many files at once instantly, often with no confirmation", "Wildcards don't work with rm", "It only works on Windows"], correct: 1, explain: "Combining rm with a wildcard can delete many matching files immediately and irreversibly, so it's easy to accidentally delete more than intended." }
    ]
  },

  {
    id: "finding-files",
    section: "File & Directory Management",
    number: 8,
    title: "Finding Files (find, locate, which)",
    difficulty: "Basic",
    summary: "Three different tools for answering 'where is this file?' depending on what you already know.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "find", desc: "Searches in real-time through actual folders you specify. Slower but always accurate and very flexible (can search by name, size, date, type, and more)." },
        { label: "locate", desc: "Searches a pre-built index of the whole filesystem. Extremely fast, but can be slightly out of date if files changed very recently." },
        { label: "which", desc: "Tells you exactly which file is run when you type a command's name, e.g. which python shows the exact program location." }
      ]
    },
    content: {
      basic: `
        <p>Three different commands help you find things, depending on what you need:</p>
        <ul>
          <li><strong>find</strong> — searches through real folders right now, e.g. <code>find /home -name "notes.txt"</code></li>
          <li><strong>locate</strong> — searches a pre-built index of the whole system, much faster but can be slightly outdated</li>
          <li><strong>which</strong> — tells you exactly which program runs when you type a command's name, e.g. <code>which python</code></li>
        </ul>
      `,
      intermediate: `
        <p><code>find</code> is the most powerful and flexible of the three because it can search by far more than just name — by file size, by how recently it was modified, by file type, and more. The tradeoff is speed: since it searches live, it can take longer on large filesystems compared to <code>locate</code>, which just checks an already-built index.</p>
      `,
      advanced: `
        <p><code>find</code> becomes especially powerful in security and system administration contexts when combined with its action flags — for example, finding every file modified in the last 24 hours, or every file with unusually open permissions, are both common first steps when investigating a potentially compromised system. <code>locate</code>'s index (often updated by a background job called <code>updatedb</code>) means it can occasionally miss files created moments ago, which is exactly the tradeoff that makes <code>find</code> the more trustworthy tool during an active investigation, despite being slower.</p>
      `
    },
    quiz: [
      { q: "Which tool searches in real-time and supports searching by size, date, and type?", options: ["locate", "find", "which", "cat"], correct: 1, explain: "find searches live through the filesystem and supports very flexible criteria like size, date modified, and file type." },
      { q: "Why might locate occasionally miss a file that was just created?", options: ["locate is broken by default", "It searches a pre-built index that updates periodically, not in real time", "locate only works on text files", "New files are always hidden"], correct: 1, explain: "locate relies on a periodically updated index, so very recently created files might not appear yet." },
      { q: "What does the 'which' command tell you?", options: ["How much disk space is free", "The exact location of the program that runs for a given command name", "The current date and time", "A list of all users on the system"], correct: 1, explain: "which shows you the exact file path of the program that would run when you type a given command." }
    ]
  },

  // ============================================================
  // SECTION 3: PERMISSIONS & OWNERSHIP
  // ============================================================
  {
    id: "users-groups-ownership",
    section: "Permissions & Ownership",
    number: 9,
    title: "Users, Groups & Ownership Basics",
    difficulty: "Basic",
    summary: "How Linux keeps track of who owns each file and who's allowed to touch it.",
    animation: "layer-stack",
    compareData: {
      layersNumbered: false,
      layers: [
        { name: "root (UID 0)", detail: "The administrator account — can access and change anything" },
        { name: "Regular users", detail: "Each has their own UID, home folder, and personal files" },
        { name: "Groups", detail: "Bundle multiple users together to share access at once" },
        { name: "Files", detail: "Every file tracks exactly one owning user and one owning group" }
      ]
    },
    content: {
      basic: `
        <p>Linux is built to be used by many people on the same machine, so every file has an <strong>owner</strong> — the user who created it (or who it was assigned to). Every file also belongs to a <strong>group</strong> — a way of bundling multiple users together so you can give a whole team access at once, instead of one person at a time.</p>
        <p>Every file on the system tracks both of these: which single user owns it, and which group it belongs to.</p>
      `,
      intermediate: `
        <p>A user can belong to multiple groups at once. This is how Linux handles shared access cleanly — for example, a "developers" group might be able to edit certain project files, while only the file's specific individual owner can edit their own personal settings. You can check your own groups with the command <code>groups</code>.</p>
      `,
      advanced: `
        <p>Under the hood, every user has a numeric <strong>UID</strong> (User ID) and every group has a numeric <strong>GID</strong> (Group ID) — the human-readable usernames are really just a friendly label mapped to these numbers behind the scenes, stored in <code>/etc/passwd</code> and <code>/etc/group</code>. UID 0 is always reserved for the root (administrator) user, no matter what that account happens to be named. This numeric system is also why deleting a user account doesn't automatically erase the meaning of files they used to own — those files just end up "owned" by a UID that no longer maps to any username.</p>
      `
    },
    quiz: [
      { q: "What does every file on Linux track regarding ownership?", options: ["Only the file size", "Which single user owns it and which group it belongs to", "Only the creation date", "Nothing — Linux doesn't track ownership"], correct: 1, explain: "Every Linux file tracks both an individual owner (a user) and a group it belongs to." },
      { q: "Why do groups exist in Linux?", options: ["To make files load faster", "To give a whole set of users shared access at once, instead of granting access one person at a time", "To change file colors", "Groups are not a real Linux feature"], correct: 1, explain: "Groups let administrators grant the same access to many users at once, rather than configuring permissions individually for each person." },
      { q: "What numeric UID is always reserved for the root user?", options: ["1", "100", "0", "999"], correct: 2, explain: "UID 0 is always the root (administrator) account, regardless of what that account is actually named." }
    ]
  },

  {
    id: "file-permissions",
    section: "Permissions & Ownership",
    number: 10,
    title: "Understanding File Permissions (rwx)",
    difficulty: "Intermediate",
    summary: "How Linux controls exactly who can read, write, or run each file using a simple 3-part system.",
    animation: "layer-stack",
    compareData: {
      layersNumbered: false,
      layers: [
        { name: "Owner (rwx)", detail: "What the specific user who owns this file can do" },
        { name: "Group (rwx)", detail: "What members of the file's assigned group can do" },
        { name: "Everyone else (rwx)", detail: "What every other user on the system can do" }
      ]
    },
    content: {
      basic: `
        <p>Every file in Linux has permissions that control three kinds of access:</p>
        <ul>
          <li><strong>r (read)</strong> — can you view/open the file?</li>
          <li><strong>w (write)</strong> — can you change/edit the file?</li>
          <li><strong>x (execute)</strong> — can you run it as a program?</li>
        </ul>
        <p>And these permissions are set separately for three different groups of people: the file's <strong>owner</strong>, its <strong>group</strong>, and <strong>everyone else</strong> on the system.</p>
      `,
      intermediate: `
        <p>Running <code>ls -l</code> shows permissions as a 10-character code like <code>-rwxr-xr--</code>. The first character tells you the type (- for a regular file, d for a directory). The next 9 characters are three groups of three: owner permissions, group permissions, then everyone-else permissions — each group showing r, w, x (or a dash if that permission isn't granted).</p>
      `,
      advanced: `
        <p>These permissions can also be represented as numbers, which becomes essential once you start using <code>chmod</code> (next topic): read = 4, write = 2, execute = 1, and you add them together per group. So <code>rwx</code> = 4+2+1 = 7, <code>r-x</code> = 4+1 = 5, and <code>r--</code> = 4. A permission setting of <code>754</code> means owner=rwx(7), group=r-x(5), everyone else=r--(4) — this numeric shorthand is what you'll see constantly in real-world Linux documentation and security hardening guides.</p>
      `
    },
    quiz: [
      { q: "What does the 'x' permission allow?", options: ["Deleting a file", "Reading a file's contents", "Running the file as a program", "Renaming a file"], correct: 2, explain: "The execute (x) permission allows a file to be run as a program or script." },
      { q: "Permissions are set separately for which three groups?", options: ["Past, present, future", "Owner, group, and everyone else", "Admin, guest, and root", "Read, write, and delete"], correct: 1, explain: "Linux permissions apply separately to the file's owner, its assigned group, and everyone else on the system." },
      { q: "In numeric permission notation, what does 7 represent?", options: ["Read only", "Write only", "Read + write + execute (4+2+1)", "No permissions at all"], correct: 2, explain: "7 = 4(read) + 2(write) + 1(execute) — full permissions for that group." }
    ]
  },

  {
    id: "chmod-chown",
    section: "Permissions & Ownership",
    number: 11,
    title: "chmod & chown in Depth",
    difficulty: "Intermediate",
    summary: "The two commands used to actually change a file's permissions and its owner.",
    animation: "compare-toggle",
    compareData: {
      labelA: "chmod", labelB: "chown",
      descA: "Changes WHAT a user/group is allowed to do with a file — read, write, or execute. Example: chmod 755 script.sh",
      descB: "Changes WHO owns a file — which user and/or group it belongs to. Example: chown alice:developers file.txt"
    },
    content: {
      basic: `
        <p>Two commands let you actually control permissions:</p>
        <ul>
          <li><strong>chmod</strong> ("change mode") — changes what actions are allowed on a file, e.g. <code>chmod 755 script.sh</code> makes a script runnable</li>
          <li><strong>chown</strong> ("change owner") — changes who owns a file, e.g. <code>chown alice file.txt</code> gives ownership to user "alice"</li>
        </ul>
      `,
      intermediate: `
        <p><code>chmod</code> can be used with the numeric system from the last topic (like <code>chmod 644 file.txt</code>) or with letter shortcuts (<code>chmod +x script.sh</code> just adds execute permission without touching anything else). <code>chown</code> can change the owner, the group, or both at once using a colon: <code>chown alice:developers file.txt</code> sets alice as owner and developers as the group, in one command.</p>
      `,
      advanced: `
        <p>A common real-world pattern: a script you just downloaded or wrote often isn't executable yet by default, so <code>chmod +x scriptname.sh</code> is one of the most frequently typed commands by any Linux user. From a security standpoint, overly permissive settings — like <code>chmod 777</code> (read+write+execute for absolutely everyone) — are a frequent finding in security audits, since they let any user on the system modify or run that file. Tightening permissions to the minimum needed (the "principle of least privilege") is a core habit in both system administration and cybersecurity.</p>
      `
    },
    quiz: [
      { q: "Which command changes a file's permissions?", options: ["chown", "chmod", "mkdir", "ls"], correct: 1, explain: "chmod ('change mode') is used to change what a file's permissions allow." },
      { q: "What does chmod +x do?", options: ["Deletes the file", "Adds execute permission without changing anything else", "Changes the file's owner", "Removes all permissions"], correct: 1, explain: "chmod +x adds the execute permission to a file, commonly used to make a script runnable." },
      { q: "Why is chmod 777 often flagged in security audits?", options: ["It's not a real permission setting", "It gives full read, write, and execute access to absolutely everyone on the system", "It only affects the file's color", "It makes files load faster"], correct: 1, explain: "chmod 777 grants full access to everyone, violating the principle of least privilege and creating a security risk." }
    ]
  },

  {
    id: "sudo-root",
    section: "Permissions & Ownership",
    number: 12,
    title: "sudo & the Root User",
    difficulty: "Intermediate",
    summary: "How Linux lets trusted users temporarily act as the all-powerful administrator account, safely.",
    animation: "handshake",
    compareData: {
      exchange: {
        partyA: "You",
        partyB: "System",
        steps: [
          { label: "sudo [command]", direction: "right", color: "var(--signal)" },
          { label: "confirm your password", direction: "left", color: "var(--amber)" },
          { label: "command runs as root, just this once", direction: "left", color: "var(--signal)" }
        ]
      }
    },
    content: {
      basic: `
        <p><strong>Root</strong> is the name of the special administrator account on Linux that can do absolutely anything on the system — read any file, change any setting, delete anything. It's extremely powerful, and extremely easy to break something badly if you're logged in as root all the time by accident.</p>
        <p>Instead of logging in directly as root, most systems use <strong>sudo</strong> ("superuser do") — it lets a trusted regular user temporarily run a single command with root's full power, then go right back to being a normal limited user.</p>
      `,
      intermediate: `
        <p>Typing <code>sudo</code> before a command (e.g. <code>sudo apt update</code>) asks the system to run just that one command as root, usually after confirming your own password. This is far safer than staying logged in as root permanently, because you only get that full power for the single moment you actually need it — reducing the chance of an accidental system-breaking command.</p>
      `,
      advanced: `
        <p>Who's allowed to use <code>sudo</code>, and for which commands, is controlled by a configuration file called <code>/etc/sudoers</code> (almost always edited safely using the special command <code>visudo</code>, which checks for syntax errors before saving — editing it directly with a normal text editor risks locking yourself out entirely). In security-conscious environments, sudo access is often restricted to only specific commands per user, rather than full unrestricted root access, following the same "least privilege" principle from the permissions topic. Sudo usage is also logged by default, which makes it a key trail for auditing who ran what administrative action and when.</p>
      `
    },
    quiz: [
      { q: "What is the 'root' user in Linux?", options: ["A regular limited user", "The special administrator account with full control over the system", "A type of file", "A network protocol"], correct: 1, explain: "Root is the all-powerful administrator account that can access and change anything on the system." },
      { q: "Why is using sudo generally safer than staying logged in as root all the time?", options: ["sudo is slower, which prevents mistakes", "sudo grants full power only for the single command run, reducing accidental damage", "sudo doesn't actually work", "Root access is identical to sudo in every way"], correct: 1, explain: "sudo gives temporary, command-specific root power rather than permanent full access, lowering the risk of accidental system-wide mistakes." },
      { q: "What file controls who is allowed to use sudo and for what?", options: ["/etc/passwd", "/etc/sudoers", "/home/sudo", "/var/log/sudo"], correct: 1, explain: "/etc/sudoers (typically edited safely with the visudo command) controls sudo permissions for users." }
    ]
  },

  // ============================================================
  // SECTION 4: PROCESSES & SYSTEM MONITORING
  // ============================================================
  {
    id: "what-is-a-process",
    section: "Processes & System Monitoring",
    number: 13,
    title: "What is a Process? (PID, PPID)",
    difficulty: "Basic",
    summary: "Every running program is a 'process' with its own unique ID number that the system tracks.",
    animation: "layer-stack",
    compareData: {
      layersNumbered: false,
      layers: [
        { name: "PID 1 (init/systemd)", detail: "The very first process — every other process descends from this" },
        { name: "Your shell", detail: "Started by the system when you open a terminal" },
        { name: "A command you run", detail: "Becomes a 'child' process of your shell, with its own new PID" },
        { name: "PPID", detail: "Every process remembers the PID of whatever process started it" }
      ]
    },
    content: {
      basic: `
        <p>Every time a program runs on Linux — whether it's a web browser, a text editor, or a tiny background task — it becomes a <strong>process</strong>. Every single process gets a unique number called a <strong>PID</strong> (Process ID) the moment it starts, so the system (and you) can keep track of it.</p>
      `,
      intermediate: `
        <p>Processes also know which other process started them, called the <strong>PPID</strong> (Parent Process ID). For example, when you run a command in your terminal, your shell is the "parent," and the command you just ran is its "child" process. This creates a whole family tree of processes, all the way back to the very first process the system starts when it boots up (which always has PID 1).</p>
      `,
      advanced: `
        <p>This parent-child relationship matters a lot for both troubleshooting and security investigation. If a parent process is killed while children are still running, those children either get "adopted" by PID 1 or get terminated too, depending on how the system is configured. Security analysts often examine a process's full ancestry (its chain of parents) to understand whether a suspicious process was launched normally by a user, or was spawned unexpectedly by something else — like a web server process unexpectedly spawning a shell, which is a classic sign of a successful attack.</p>
      `
    },
    quiz: [
      { q: "What is a PID?", options: ["A type of file permission", "A unique number assigned to every running process", "The name of a Linux distribution", "A network port number"], correct: 1, explain: "A PID (Process ID) is a unique number every running process gets when it starts." },
      { q: "What does PPID stand for?", options: ["Primary Process Identification", "Parent Process ID — the ID of the process that started this one", "Permanent Process Index", "Public Process Identifier"], correct: 1, explain: "PPID is the Parent Process ID — it identifies which process started the current one." },
      { q: "Why might a security analyst look at a process's parent chain?", options: ["To check the file's color", "To see if a process was launched normally or unexpectedly, which can indicate an attack", "To find the file's creation date", "Parent chains have no security relevance"], correct: 1, explain: "An unusual parent-child relationship (like a web server spawning a shell) can be a strong signal of a security compromise." }
    ]
  },

  {
    id: "viewing-processes",
    section: "Processes & System Monitoring",
    number: 14,
    title: "Viewing Processes (ps, top, htop)",
    difficulty: "Basic",
    summary: "Three tools for seeing exactly what's running on your system right now.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "ps", desc: "Takes a single snapshot of running processes at this exact moment. Good for scripts and quick checks." },
        { label: "top", desc: "Shows a live, constantly updating list of processes, sorted by resource usage. Built into nearly every Linux system." },
        { label: "htop", desc: "A friendlier, color-coded, scrollable version of top. Very popular, but not always installed by default." }
      ]
    },
    content: {
      basic: `
        <p>Three common tools let you see what's running:</p>
        <ul>
          <li><strong>ps</strong> — takes a single snapshot of currently running processes, e.g. <code>ps aux</code> for a full list</li>
          <li><strong>top</strong> — shows a live, constantly updating view of processes, sorted by how much CPU they're using</li>
          <li><strong>htop</strong> — a friendlier, color-coded version of top, easier to read but not always pre-installed</li>
        </ul>
      `,
      intermediate: `
        <p><code>ps aux</code> is one of the most commonly typed commands on Linux — it lists every process from every user, along with its PID, how much CPU and memory it's using, and the exact command that started it. <code>top</code> updates this view continuously instead of showing just one moment in time, which is more useful for watching a system's behavior as it happens.</p>
      `,
      advanced: `
        <p>During an investigation or performance issue, the workflow is often: use <code>top</code> or <code>htop</code> to spot a process consuming unusual resources, note its PID, then use <code>ps -p [PID] -f</code> to get the full detail on exactly what that specific process is and who launched it. Unexplained processes consuming high CPU, or processes running under unexpected usernames, are common early indicators that something is wrong — whether that's a misbehaving application or an actual compromise.</p>
      `
    },
    quiz: [
      { q: "What's the key difference between ps and top?", options: ["They are identical commands", "ps takes a single snapshot; top shows a continuously updating live view", "ps only works on servers", "top cannot show CPU usage"], correct: 1, explain: "ps shows a one-time snapshot of processes, while top continuously refreshes to show live activity." },
      { q: "What does ps aux typically show for each process?", options: ["Only the process name", "PID, CPU/memory usage, and the exact command that started it", "The file's permissions only", "Network bandwidth usage only"], correct: 1, explain: "ps aux gives a detailed listing including PID, resource usage, and the full command line for every running process." },
      { q: "Why might an unexplained process using high CPU be worth investigating?", options: ["High CPU usage is always normal and safe", "It can be an early sign of a misbehaving app or a security compromise", "CPU usage has nothing to do with security", "Linux automatically blocks all suspicious processes"], correct: 1, explain: "Unexplained high resource usage is a common early indicator of either a performance problem or a potential security issue worth investigating." }
    ]
  },

  {
    id: "killing-processes",
    section: "Processes & System Monitoring",
    number: 15,
    title: "Killing & Managing Processes",
    difficulty: "Basic",
    summary: "How to stop a program that's frozen, misbehaving, or that you simply need to shut down.",
    animation: "packet-travel",
    compareData: { travel: { partyA: "kill command", partyB: "PID 1234", packetLabel: "SIGTERM" } },
    content: {
      basic: `
        <p>When a program freezes or you need to stop it, you can <strong>kill</strong> its process using its PID: <code>kill 1234</code> (replacing 1234 with the actual PID). If you don't know the PID, <code>killall firefox</code> lets you kill a process by name instead.</p>
      `,
      intermediate: `
        <p><code>kill</code> actually sends a "signal" to the process rather than forcefully destroying it directly — by default it sends a polite request (called SIGTERM) asking the program to shut itself down cleanly, saving any work first if it can. If a process ignores that and refuses to close, <code>kill -9 [PID]</code> sends a much more forceful signal (SIGKILL) that the operating system enforces immediately, with no chance for the program to clean up.</p>
      `,
      advanced: `
        <p>Because SIGKILL gives a process zero chance to clean up, it should be a last resort — a database process killed with SIGKILL mid-write, for example, can leave corrupted data behind, whereas SIGTERM gives it a chance to finish safely first. There are actually many other signals beyond these two (SIGHUP, SIGSTOP, SIGCONT, and more), each with a different meaning, which is why professional admins generally try the gentle SIGTERM first and only escalate to SIGKILL if the process truly won't respond.</p>
      `
    },
    quiz: [
      { q: "What does the basic kill command actually do by default?", options: ["Immediately force-destroys the process with no warning", "Sends a polite shutdown request (SIGTERM) the program can respond to cleanly", "Deletes the program's files permanently", "Only works on background processes"], correct: 1, explain: "By default, kill sends SIGTERM — a request for the process to shut down gracefully, not an immediate forced termination." },
      { q: "What does kill -9 do differently?", options: ["Nothing different at all", "Sends SIGKILL, a forceful signal the OS enforces immediately with no cleanup chance", "Restarts the process instead of stopping it", "Only works for root-owned processes"], correct: 1, explain: "kill -9 sends SIGKILL, which forcefully terminates a process immediately, skipping any cleanup it might have been doing." },
      { q: "Why should SIGKILL generally be a last resort?", options: ["It's slower than SIGTERM", "It gives the process no chance to clean up, which can cause issues like data corruption", "SIGKILL doesn't actually stop anything", "It requires a special license to use"], correct: 1, explain: "Because SIGKILL forces immediate termination with no cleanup, it risks problems like corrupted data if the process was mid-task." }
    ]
  },

  {
    id: "system-monitoring",
    section: "Processes & System Monitoring",
    number: 16,
    title: "System Resource Monitoring (df, free, uptime)",
    difficulty: "Basic",
    summary: "Quick commands to check disk space, memory usage, and how long the system has been running.",
    animation: "scale-zoom",
    compareData: {
      scales: [
        { label: "Healthy", desc: "Plenty of free disk and memory — system runs smoothly", r: 35 },
        { label: "Busy", desc: "Resources getting used heavily, but still functioning fine", r: 65 },
        { label: "Strained", desc: "Low free space/memory — performance starts to suffer", r: 95 },
        { label: "Critical", desc: "Nearly full — services may start failing, including logging itself", r: 125 }
      ]
    },
    content: {
      basic: `
        <p>Three quick commands give you a snapshot of your system's health:</p>
        <ul>
          <li><strong>df</strong> ("disk free") — shows how much storage space is used and available, e.g. <code>df -h</code> for human-readable sizes</li>
          <li><strong>free</strong> — shows how much memory (RAM) is being used and how much is free, e.g. <code>free -h</code></li>
          <li><strong>uptime</strong> — shows how long the system has been running since its last restart</li>
        </ul>
      `,
      intermediate: `
        <p>The <code>-h</code> flag (used with both <code>df</code> and <code>free</code>) stands for "human-readable" — without it, sizes show up in raw bytes, which are hard to read at a glance; with it, you get friendly units like MB, GB, and TB instead. <code>uptime</code> also conveniently shows the system's current "load average," a rough measure of how busy the system has been recently.</p>
      `,
      advanced: `
        <p>A consistently full disk (shown by <code>df</code>) is one of the most common, preventable causes of total system failure — many services simply stop working correctly once their disk is full, including logging itself, which can ironically make it harder to even diagnose what went wrong. Monitoring these basic resources over time (rather than just checking once) is the foundation of more advanced system monitoring tools used in real production environments, which essentially automate running commands like these continuously and alert someone before a problem becomes critical.</p>
      `
    },
    quiz: [
      { q: "What does the df command show?", options: ["Running processes", "Disk space used and available", "Network connections", "User login history"], correct: 1, explain: "df ('disk free') shows how much storage space is used and how much is available." },
      { q: "What does the -h flag do when used with df or free?", options: ["Hides all output", "Shows sizes in human-readable units like MB/GB instead of raw bytes", "Deletes old files automatically", "Shows hidden files only"], correct: 1, explain: "The -h flag converts raw byte counts into easy-to-read units like MB, GB, and TB." },
      { q: "Why is a full disk particularly dangerous for a Linux system?", options: ["It has no real effect on anything", "Many services, including logging, can stop working properly once disk space runs out", "It only affects desktop wallpaper", "Full disks automatically fix themselves"], correct: 1, explain: "A full disk can cause services — including the logging system itself — to fail, making the problem both severe and harder to diagnose." }
    ]
  },

  // ============================================================
  // SECTION 5: SHELL POWER TOOLS
  // ============================================================
  {
    id: "pipes-redirection",
    section: "Shell Power Tools",
    number: 17,
    title: "Pipes & Redirection (|, >, >>, <)",
    difficulty: "Intermediate",
    summary: "How to send one command's output into another command, or into a file, instead of just your screen.",
    animation: "packet-travel",
    compareData: { travel: { partyA: "ls", partyB: "grep", packetLabel: "OUTPUT" } },
    content: {
      basic: `
        <p>By default, a command's output just prints to your screen — but you can redirect it elsewhere:</p>
        <ul>
          <li><strong>|</strong> (pipe) — sends one command's output directly into another command as input, e.g. <code>ls | grep notes</code></li>
          <li><strong>></strong> — saves output into a file, overwriting it, e.g. <code>ls > filelist.txt</code></li>
          <li><strong>>></strong> — saves output into a file, but adds to the end instead of overwriting, e.g. <code>echo "new line" >> notes.txt</code></li>
        </ul>
      `,
      intermediate: `
        <p>The pipe symbol (<code>|</code>) is one of the most powerful ideas in the whole Linux philosophy: instead of one giant tool trying to do everything, you chain together several small, focused tools, each one passing its output to the next. For example, <code>ps aux | grep firefox</code> lists all processes, then filters that list down to just the ones mentioning "firefox."</p>
      `,
      advanced: `
        <p>This "small tools chained together" philosophy is core to how Linux command-line work scales to complex tasks — a single pipeline like <code>cat access.log | grep "404" | wc -l</code> reads a log file, filters for error lines, then counts them, accomplishing in one line what might otherwise take a custom program to write. There's also <code><</code> (input redirection), which feeds a file's contents into a command as if you'd typed it, and <code>2></code> specifically redirects error messages separately from normal output — useful when you want to capture errors in their own log file.</p>
      `
    },
    quiz: [
      { q: "What does the pipe symbol (|) do?", options: ["Deletes a file", "Sends one command's output directly into another command as input", "Creates a new folder", "Comments out a line"], correct: 1, explain: "The pipe (|) takes the output of one command and feeds it as input into the next command." },
      { q: "What's the difference between > and >>?", options: ["They are identical", "> overwrites a file's contents; >> adds new content to the end", "> only works with text files", ">> deletes files"], correct: 1, explain: "> replaces a file's entire contents with new output, while >> appends new output to the end without erasing what's already there." },
      { q: "What core Linux philosophy does the pipe symbol reflect?", options: ["One giant program should do everything", "Chaining small, focused tools together to accomplish complex tasks", "Pipes are a security risk and should be avoided", "Every command should run in isolation"], correct: 1, explain: "Pipes embody the Linux philosophy of combining small, single-purpose tools together rather than relying on one massive program." }
    ]
  },

  {
    id: "grep-text-searching",
    section: "Shell Power Tools",
    number: 18,
    title: "grep & Text Searching",
    difficulty: "Intermediate",
    summary: "The go-to tool for searching text inside files — used constantly in logs, code, and configs.",
    animation: "dns-lookup",
    compareData: {
      chain: ["Whole log file", "grep \"error\"", "Only matching lines shown"]
    },
    content: {
      basic: `
        <p><strong>grep</strong> searches for a specific word or pattern of text inside a file (or many files), and shows you every matching line. For example, <code>grep "error" logfile.txt</code> shows every line in that file containing the word "error."</p>
      `,
      intermediate: `
        <p>Useful grep flags: <code>-i</code> makes the search case-insensitive (so it finds "Error," "ERROR," and "error" all at once), <code>-r</code> searches recursively through every file inside a whole folder, and <code>-n</code> shows the line number of each match, which is helpful for jumping straight to the right spot in a large file.</p>
      `,
      advanced: `
        <p>Grep supports <strong>regular expressions</strong> (regex) — a much more powerful pattern language than a plain word search, letting you match things like "any line starting with an IP address" or "any line containing exactly 3 digits followed by a dash." Combined with pipes from the previous topic, grep becomes a core tool for log analysis and security investigation: a command like <code>grep "Failed password" /var/log/auth.log</code> can instantly surface every failed login attempt on a server, often the very first step when checking whether a system has been targeted by a brute-force attack.</p>
      `
    },
    quiz: [
      { q: "What does grep do?", options: ["Deletes matching lines from a file", "Searches for and displays lines matching a pattern of text", "Creates new files", "Changes file permissions"], correct: 1, explain: "grep searches through text for a given pattern and displays every matching line." },
      { q: "What does the -i flag do with grep?", options: ["Makes the search case-insensitive", "Deletes the searched file", "Only searches image files", "Searches in reverse order"], correct: 0, explain: "-i makes grep's search case-insensitive, matching words regardless of uppercase or lowercase." },
      { q: "Why is grep especially useful for security investigation?", options: ["It automatically blocks attackers", "It can quickly filter huge log files down to relevant lines, like failed login attempts", "grep only works on encrypted files", "It has no relevance to security work"], correct: 1, explain: "grep lets investigators quickly pull out relevant lines (like failed logins) from large log files, which is often an early step in checking for attacks." }
    ]
  },

  {
    id: "sed-awk-basics",
    section: "Shell Power Tools",
    number: 19,
    title: "sed & awk Basics",
    difficulty: "Intermediate",
    summary: "Two classic tools for editing text automatically and pulling specific columns out of structured data.",
    animation: "compare-toggle",
    compareData: {
      labelA: "sed", labelB: "awk",
      descA: "Best for find-and-replace style edits across text. Example: sed 's/old/new/g' file.txt replaces every 'old' with 'new'.",
      descB: "Best for working with columns of data. Example: awk '{print $1}' file.txt prints just the first column of every line."
    },
    content: {
      basic: `
        <p><strong>sed</strong> ("stream editor") is mainly used for find-and-replace style edits across text, without opening a full editor. For example, <code>sed 's/cat/dog/g' file.txt</code> replaces every "cat" with "dog" in that file's output.</p>
        <p><strong>awk</strong> is built for working with text that's organized into columns. For example, <code>awk '{print $1}' file.txt</code> prints just the first column of every line.</p>
      `,
      intermediate: `
        <p>Both tools are designed to process text one line at a time, automatically, which makes them ideal for handling large files where manually editing in a text editor would be impractical. A common real pattern: pipe a command's output into sed or awk to clean it up or extract just the part you need, rather than scrolling through raw output by eye.</p>
      `,
      advanced: `
        <p>sed's substitution syntax <code>s/pattern/replacement/flags</code> supports full regular expressions, not just plain text, making it capable of complex bulk text transformations in a single line. awk is technically a small programming language in its own right — beyond printing columns, it supports variables, conditionals, and loops, which is why complex log-parsing or report-generating one-liners (sometimes intimidatingly long) are a notorious but powerful part of Linux command-line culture. In practice, most beginners only need a handful of common sed/awk patterns memorized rather than deep mastery of either.</p>
      `
    },
    quiz: [
      { q: "What is sed primarily used for?", options: ["Listing running processes", "Find-and-replace style text editing", "Checking disk space", "Managing user permissions"], correct: 1, explain: "sed is a stream editor mainly used for automated find-and-replace text edits." },
      { q: "What is awk especially good at?", options: ["Deleting files", "Working with column-organized text data", "Managing network connections", "Compiling source code"], correct: 1, explain: "awk excels at processing and extracting specific columns from structured, column-based text data." },
      { q: "Why are sed and awk well-suited to large files?", options: ["They require a graphical interface", "They process text automatically, line by line, without needing manual editing", "They only work on small files", "They permanently modify the original file with no option to preview"], correct: 1, explain: "Both tools process text automatically and line-by-line, making them efficient for large files where manual editing wouldn't be practical." }
    ]
  },

  {
    id: "shell-variables-environment",
    section: "Shell Power Tools",
    number: 20,
    title: "Shell Variables & Environment",
    difficulty: "Intermediate",
    summary: "How the shell stores small pieces of information, including settings that affect your whole session.",
    animation: "layer-stack",
    compareData: {
      layersNumbered: false,
      layers: [
        { name: "Plain variable", detail: "name=\"Alex\" — only visible inside this exact shell session" },
        { name: "export-ed variable", detail: "export name=\"Alex\" — visible to programs launched from this shell too" },
        { name: "$PATH", detail: "A special variable listing folders the shell searches for commands" },
        { name: "~/.bashrc", detail: "Startup file that re-applies your variables every time a new terminal opens" }
      ]
    },
    content: {
      basic: `
        <p>A <strong>variable</strong> in the shell is just a named piece of information you can store and reuse. You create one like this: <code>name="Alex"</code>, and use it later with a dollar sign: <code>echo $name</code> prints "Alex."</p>
        <p>Some special variables, called <strong>environment variables</strong>, are automatically available everywhere in your session and affect how programs behave — for example, <code>$HOME</code> always holds the path to your home folder, and <code>$PATH</code> controls which folders the shell searches through when you type a command name.</p>
      `,
      intermediate: `
        <p><code>$PATH</code> is especially important to understand: when you type a command like <code>python</code>, the shell doesn't magically know where that program lives — it searches through every folder listed in <code>$PATH</code>, in order, until it finds a matching program. This is exactly why a command can say "command not found" even if the program is installed somewhere on disk — if its folder isn't listed in <code>$PATH</code>, the shell simply won't find it.</p>
      `,
      advanced: `
        <p>Environment variables set in one shell session don't automatically apply to every future session — that's why people add lines like <code>export PATH=$PATH:/new/folder</code> to startup files such as <code>~/.bashrc</code>, so the setting gets re-applied every time a new terminal opens. The <code>export</code> keyword specifically makes a variable available to any programs launched from that shell, not just the shell itself — a plain variable without export stays local to the current shell session only. Misconfigured or maliciously modified <code>$PATH</code> variables are also a known attack technique, where an attacker tricks a system into running a fake malicious program instead of the real one, by sneaking a lookalike file earlier in the search order.</p>
      `
    },
    quiz: [
      { q: "How do you use the value stored in a shell variable called 'name'?", options: ["name()", "$name", "#name", "&name"], correct: 1, explain: "Putting a dollar sign before a variable name, like $name, retrieves its stored value." },
      { q: "What does the $PATH environment variable control?", options: ["The current date", "Which folders the shell searches to find a command's program", "How much disk space is free", "The current username"], correct: 1, explain: "$PATH lists the folders the shell searches through, in order, to locate the program behind a typed command." },
      { q: "What does the 'export' keyword do to a shell variable?", options: ["Deletes the variable", "Makes it available to other programs launched from that shell, not just the shell itself", "Encrypts the variable's value", "Saves the variable permanently to disk automatically"], correct: 1, explain: "export makes a variable's value visible to any child programs launched from that shell session, not just the shell itself." }
    ]
  },

  // ============================================================
  // SECTION 6: PACKAGE MANAGEMENT
  // ============================================================
  {
    id: "what-is-a-package-manager",
    section: "Package Management",
    number: 21,
    title: "What is a Package Manager?",
    difficulty: "Basic",
    summary: "The tool that installs, updates, and removes software for you, automatically handling what each program needs.",
    animation: "layer-stack",
    compareData: {
      layersNumbered: false,
      layers: [
        { name: "You request a program", detail: "e.g. sudo apt install nginx" },
        { name: "Package manager checks dependencies", detail: "Figures out what else this program needs to run" },
        { name: "Downloads from a trusted repository", detail: "Software that's typically been checked and signed by maintainers" },
        { name: "Installs everything in the right order", detail: "The program plus all its dependencies, automatically" }
      ]
    },
    content: {
      basic: `
        <p>A <strong>package manager</strong> is a tool that installs, updates, and removes software for you — instead of manually downloading files from random websites like you might on Windows. It also automatically handles <strong>dependencies</strong> — other pieces of software a program needs in order to work.</p>
      `,
      intermediate: `
        <p>Software is distributed as <strong>packages</strong> — bundled files containing the program plus information about what else it needs to run properly. When you ask the package manager to install something, it checks for any missing dependencies and installs those too, automatically, in the right order — saving you from having to track all of that down yourself.</p>
      `,
      advanced: `
        <p>Packages typically come from trusted online <strong>repositories</strong> ("repos") maintained by the distribution, which is also a security feature: software installed through the package manager has generally been checked and signed by the distribution's maintainers, making it far safer than downloading and running random installers from arbitrary websites. This is one reason experienced Linux users are often wary of installation instructions that say "download this file from our website and run it" instead of using the standard package manager.</p>
      `
    },
    quiz: [
      { q: "What does a package manager do?", options: ["Only deletes files", "Installs, updates, and removes software, automatically handling what it needs to run", "Manages network connections only", "Creates new user accounts"], correct: 1, explain: "A package manager handles installing, updating, and removing software, including automatically resolving what other software it depends on." },
      { q: "What is a 'dependency' in this context?", options: ["A type of file permission", "Other software a program needs installed in order to work properly", "A network protocol", "A kind of user account"], correct: 1, explain: "A dependency is another piece of software that a program relies on to function, which the package manager installs automatically." },
      { q: "Why is installing software through a package manager generally safer than downloading random installers?", options: ["It's not actually safer", "Repository software is typically checked and signed by trusted maintainers", "Package managers don't actually install anything", "Random downloads are always identical to package manager installs"], correct: 1, explain: "Software from official repositories has generally been vetted and signed by the distribution's maintainers, unlike arbitrary downloads from the open internet." }
    ]
  },

  {
    id: "apt-dpkg",
    section: "Package Management",
    number: 22,
    title: "apt / dpkg (Debian-based)",
    difficulty: "Basic",
    summary: "The package management tools used by Debian, Ubuntu, Mint, Kali, and other related distributions.",
    animation: "compare-toggle",
    compareData: {
      labelA: "apt", labelB: "dpkg",
      descA: "The everyday tool you actually use. Handles downloading packages, plus all their dependencies, automatically. Example: sudo apt install nginx",
      descB: "The lower-level tool apt is built on top of. Installs a single package file directly (like a .deb file) but does NOT resolve dependencies automatically."
    },
    content: {
      basic: `
        <p>On Debian-based distributions (Debian, Ubuntu, Linux Mint, Kali Linux, and many others), the main package manager command is <strong>apt</strong>. Common commands:</p>
        <ul>
          <li><code>sudo apt update</code> — refreshes the list of available packages and their latest versions</li>
          <li><code>sudo apt install nginx</code> — installs a program (in this example, the nginx web server)</li>
          <li><code>sudo apt remove nginx</code> — uninstalls a program</li>
        </ul>
      `,
      intermediate: `
        <p><code>apt update</code> doesn't actually install anything by itself — it just refreshes apt's local knowledge of what's currently available in the repositories. The actual upgrade step is a separate command, <code>sudo apt upgrade</code>, which installs newer versions of anything you already have installed. Running update before upgrade is standard practice, since upgrade needs fresh information to know what's actually new.</p>
      `,
      advanced: `
        <p><strong>apt</strong> is actually a friendlier front-end built on top of a lower-level tool called <strong>dpkg</strong>, which handles individual <code>.deb</code> package files directly but doesn't resolve dependencies on its own — that automatic dependency-solving is exactly what apt adds on top. You'll sometimes still use dpkg directly, like <code>dpkg -l</code> to list all currently installed packages, or when manually installing a standalone <code>.deb</code> file you downloaded directly rather than from a repository.</p>
      `
    },
    quiz: [
      { q: "What does 'sudo apt update' actually do?", options: ["Installs all available updates immediately", "Refreshes the local list of available packages and their versions", "Deletes outdated software", "Restarts the computer"], correct: 1, explain: "apt update only refreshes apt's knowledge of what's available in the repositories — it doesn't install or upgrade anything by itself." },
      { q: "What is dpkg's relationship to apt?", options: ["They are unrelated tools", "apt is a friendlier front-end built on top of the lower-level dpkg", "dpkg replaced apt entirely", "dpkg only works on Windows"], correct: 1, explain: "apt is built on top of dpkg, adding automatic dependency resolution that dpkg alone doesn't provide." },
      { q: "Which distributions commonly use apt as their package manager?", options: ["Only Windows variants", "Debian, Ubuntu, Linux Mint, Kali Linux, and related distros", "Only macOS", "Only Android phones"], correct: 1, explain: "apt is the standard package manager across Debian-based distributions, including Ubuntu, Mint, and Kali Linux." }
    ]
  },

  {
    id: "yum-dnf-rpm",
    section: "Package Management",
    number: 23,
    title: "yum / dnf / rpm (Red Hat-based)",
    difficulty: "Basic",
    summary: "The package management tools used by Red Hat, CentOS, Fedora, and related distributions.",
    animation: "compare-toggle",
    compareData: {
      labelA: "dnf / yum", labelB: "rpm",
      descA: "The everyday tool you actually use, similar to apt. Handles dependencies automatically. Example: sudo dnf install nginx",
      descB: "The lower-level tool, similar to dpkg. Installs a single .rpm package file directly, without automatic dependency resolution."
    },
    content: {
      basic: `
        <p>On Red Hat-based distributions (Red Hat Enterprise Linux, CentOS, Fedora, Rocky Linux, and others), the package manager is <strong>dnf</strong> (or its older predecessor, <strong>yum</strong>, still common on older systems). Common commands work very similarly to apt:</p>
        <ul>
          <li><code>sudo dnf install nginx</code> — installs a program</li>
          <li><code>sudo dnf update</code> — updates all installed software</li>
          <li><code>sudo dnf remove nginx</code> — uninstalls a program</li>
        </ul>
      `,
      intermediate: `
        <p>Unlike apt, <code>dnf update</code> handles both refreshing package information AND actually installing updates in a single command, simplifying the two-step apt process (update then upgrade) into one. <strong>yum</strong> is the older tool that dnf eventually replaced, fixing several performance and dependency-resolution issues yum had — but yum is often still installed as an alias that quietly redirects to dnf on modern systems, for backward compatibility.</p>
      `,
      advanced: `
        <p>Just like apt sits on top of dpkg, <strong>dnf</strong> sits on top of a lower-level tool called <strong>rpm</strong> (Red Hat Package Manager), which handles individual <code>.rpm</code> package files but, like dpkg, doesn't resolve dependencies automatically on its own. Knowing both ecosystems (apt/dpkg for Debian-based systems, and dnf/rpm for Red Hat-based systems) matters in real-world IT and security work, since you'll encounter both families of distributions regularly, especially across different company environments and cloud server images.</p>
      `
    },
    quiz: [
      { q: "What package manager is standard on Fedora and CentOS?", options: ["apt", "dnf", "npm", "brew"], correct: 1, explain: "dnf is the standard package manager on Red Hat-based distributions like Fedora and CentOS." },
      { q: "What is yum's relationship to dnf?", options: ["They are completely unrelated tools", "yum is the older tool that dnf replaced, fixing several of its issues", "yum only works on Windows", "dnf is older than yum"], correct: 1, explain: "yum is the predecessor that dnf replaced, improving on performance and dependency handling, though yum often still works as an alias on modern systems." },
      { q: "What is rpm's role compared to dnf?", options: ["rpm is unrelated to dnf entirely", "rpm is the lower-level tool dnf is built on top of, similar to dpkg under apt", "rpm only removes software, never installs it", "rpm is a network protocol"], correct: 1, explain: "rpm is the lower-level package tool that dnf builds on, adding automatic dependency resolution — the same relationship dpkg has with apt." }
    ]
  },

  {
    id: "compiling-from-source",
    section: "Package Management",
    number: 24,
    title: "Compiling From Source Basics",
    difficulty: "Intermediate",
    summary: "What it means to build a program yourself from its original code, instead of installing a ready-made package.",
    animation: "encapsulation",
    compareData: {
      wraps: [
        { label: "source code", color: "var(--signal)" },
        { label: "./configure → checked", color: "var(--amber)" },
        { label: "make → compiled", color: "#a78bfa" },
        { label: "sudo make install → installed", color: "var(--paper)" }
      ]
    },
    content: {
      basic: `
        <p>Sometimes software isn't available as a ready-made package for your distribution — or you specifically want the very latest version. In that case, you can <strong>compile from source</strong>, meaning you download the program's original code and turn it into a runnable program yourself, on your own machine.</p>
        <p>The classic three-step pattern looks like this:</p>
        <ol>
          <li><code>./configure</code> — checks your system and prepares the build</li>
          <li><code>make</code> — actually compiles the code into a working program</li>
          <li><code>sudo make install</code> — copies the finished program into the right system folders</li>
        </ol>
      `,
      intermediate: `
        <p>"Compiling" means converting human-readable source code into the actual machine instructions your computer's processor can run directly. This process can take anywhere from seconds to hours depending on the size of the program. The <code>./configure</code> step specifically checks that your system has everything the build needs (other libraries, tools, etc.) before starting, and will give you a clear error message if something required is missing.</p>
      `,
      advanced: `
        <p>Compiling from source gives you more control (custom build options, the absolute latest code, ability to inspect exactly what you're running) but comes with real tradeoffs: it bypasses your package manager's automatic dependency tracking and update mechanism entirely, meaning you're now personally responsible for tracking security updates for that specific piece of software going forward. This is exactly why, for most everyday software, package managers remain the better default — source compilation is generally reserved for specific cases: software unavailable as a package, needing a feature not included in the packaged version, or genuine research/development work where inspecting and modifying the actual source code is the whole point.</p>
      `
    },
    quiz: [
      { q: "What does 'compiling from source' mean?", options: ["Downloading a ready-made package", "Converting a program's original code into a runnable program yourself", "Deleting old software versions", "Changing file permissions"], correct: 1, explain: "Compiling from source means taking the original human-readable code and converting it into an actual runnable program on your machine." },
      { q: "What is the classic three-step compile pattern?", options: ["install, update, remove", "./configure, make, sudo make install", "apt, dnf, rpm", "ls, cd, pwd"], correct: 1, explain: "The traditional compile-from-source pattern is ./configure (prepare), make (build), then sudo make install (install)." },
      { q: "What's a key downside of compiling software from source instead of using a package manager?", options: ["There are no downsides at all", "You lose automatic dependency tracking and become responsible for tracking security updates yourself", "Compiled software never works correctly", "Source code cannot be compiled on Linux"], correct: 1, explain: "Compiling bypasses the package manager's automatic update and dependency tracking, putting that responsibility on you instead." }
    ]
  },

  // ============================================================
  // SECTION 7: NETWORKING ON LINUX
  // ============================================================
  {
    id: "checking-network-config",
    section: "Networking on Linux",
    number: 25,
    title: "Checking Network Config (ip, ifconfig)",
    difficulty: "Basic",
    summary: "Commands to see your IP address and other network settings directly from the Linux terminal.",
    animation: "compare-toggle",
    compareData: {
      labelA: "ip", labelB: "ifconfig",
      descA: "The modern, currently maintained command. Example: ip addr show — recommended for all current systems.",
      descB: "The older, classic command. Still works on many systems but is considered deprecated/legacy in newer distributions."
    },
    content: {
      basic: `
        <p>To check your network settings (like your IP address) directly from the terminal, two commands are commonly used:</p>
        <ul>
          <li><strong>ip addr show</strong> (often shortened to <code>ip a</code>) — the modern, currently recommended command</li>
          <li><strong>ifconfig</strong> — the older, classic command that many people still know, but is being phased out</li>
        </ul>
      `,
      intermediate: `
        <p>The <code>ip</code> command is part of a newer suite of networking tools (called <code>iproute2</code>) that's now the standard across modern Linux distributions, while <code>ifconfig</code> comes from an older toolset that's no longer actively maintained and isn't even installed by default on some newer systems. Despite this, you'll still see <code>ifconfig</code> referenced constantly in older tutorials and documentation, so recognizing it is still useful even if <code>ip</code> is what you should actually reach for today.</p>
      `,
      advanced: `
        <p>Beyond just viewing settings, <code>ip</code> is far more capable overall — <code>ip route</code> shows the system's routing table (where traffic gets sent based on destination), and <code>ip link</code> shows and can control individual network interfaces directly, including enabling/disabling them. For anyone moving toward networking-adjacent security work, comfort with <code>ip</code>'s full command family (not just <code>ip addr</code>) becomes valuable quickly, since it's the standard tool for diagnosing connectivity issues directly from the command line on any modern Linux machine.</p>
      `
    },
    quiz: [
      { q: "Which command is the modern, currently recommended way to check network settings on Linux?", options: ["ifconfig", "ip addr show (or ip a)", "ping", "curl"], correct: 1, explain: "ip addr show (often shortened to ip a) is the modern, actively maintained command for checking network configuration." },
      { q: "Why is ifconfig still worth recognizing even though it's outdated?", options: ["It's actually the newest command available", "It's referenced constantly in older tutorials and documentation, even though ip is now preferred", "ifconfig doesn't exist anymore at all", "ifconfig is faster than ip"], correct: 1, explain: "Even though ip is now standard, ifconfig appears so often in older material that recognizing it remains useful." },
      { q: "What does 'ip route' show you?", options: ["A list of installed software", "The system's routing table, showing where traffic gets sent based on destination", "The current date and time", "A list of logged-in users"], correct: 1, explain: "ip route displays the routing table, which determines where outgoing network traffic gets directed based on its destination." }
    ]
  },

  {
    id: "testing-connectivity",
    section: "Networking on Linux",
    number: 26,
    title: "Testing Connectivity (ping, traceroute, curl)",
    difficulty: "Basic",
    summary: "Three commands to check if a connection works, and exactly where it might be failing.",
    animation: "packet-travel",
    compareData: { travel: { partyA: "your machine", partyB: "google.com", packetLabel: "PING" } },
    content: {
      basic: `
        <p>Three commands help diagnose network problems:</p>
        <ul>
          <li><strong>ping</strong> — checks if another device is reachable at all, e.g. <code>ping google.com</code></li>
          <li><strong>traceroute</strong> — shows every "hop" (intermediate device) your connection passes through on the way to its destination</li>
          <li><strong>curl</strong> — actually fetches data from a web address, useful for testing if a website or API is responding correctly</li>
        </ul>
      `,
      intermediate: `
        <p><code>ping</code> sends small test messages and waits to see if (and how quickly) they get a reply — it's usually the very first command people run when troubleshooting "is the internet even working?" <code>traceroute</code> goes a level deeper, revealing each individual router your connection passes through along the way, which helps pinpoint exactly where a slowdown or failure is happening, rather than just confirming the final destination is unreachable.</p>
      `,
      advanced: `
        <p><code>curl</code> is especially valuable beyond basic connectivity testing because it lets you interact directly with web servers and APIs from the command line — sending custom requests, checking HTTP response codes, and inspecting headers, all without needing a full browser. This makes it a staple tool in both web development and security testing, where being able to script and automate requests (rather than manually clicking through a browser) is essential. A typical real-world troubleshooting order is: ping first (is anything reachable at all?), then traceroute if ping fails partway (where exactly does it break?), then curl if you need to test a specific web service's actual response, not just basic reachability.</p>
      `
    },
    quiz: [
      { q: "What does ping primarily check?", options: ["File permissions", "Whether another device is reachable on the network", "Disk space usage", "Installed software versions"], correct: 1, explain: "ping checks basic reachability by sending small test messages and seeing if they get a reply." },
      { q: "What does traceroute show that ping doesn't?", options: ["File contents", "Each individual hop/router the connection passes through to reach its destination", "CPU usage", "Installed packages"], correct: 1, explain: "traceroute reveals every intermediate router along the path, helping pinpoint exactly where a connection issue is occurring." },
      { q: "Why is curl particularly useful for security and development work?", options: ["It only works on Windows", "It lets you send requests and inspect responses from web servers/APIs directly from the command line, enabling automation", "curl can only download images", "It replaces the need for any networking knowledge"], correct: 1, explain: "curl allows scripted, automatable interaction with web servers and APIs, which is valuable for both development testing and security assessment work." }
    ]
  },

  {
    id: "ssh-remote-access",
    section: "Networking on Linux",
    number: 27,
    title: "SSH — Remote Access Basics",
    difficulty: "Intermediate",
    summary: "The standard, secure way to log into and control another Linux computer over a network.",
    animation: "handshake",
    compareData: {
      exchange: {
        partyA: "Your computer",
        partyB: "Remote server",
        steps: [
          { label: "ssh user@host", direction: "right", color: "var(--signal)" },
          { label: "server checks your key", direction: "left", color: "var(--amber)" },
          { label: "encrypted session opens", direction: "right", color: "var(--signal)" }
        ]
      }
    },
    content: {
      basic: `
        <p><strong>SSH</strong> (Secure Shell) lets you log into another Linux computer over a network and control it through the terminal, as if you were sitting right in front of it. The basic command is: <code>ssh username@hostname</code>, for example <code>ssh alice@192.168.1.10</code>.</p>
      `,
      intermediate: `
        <p>As the name suggests, SSH encrypts the entire connection, so anyone intercepting the traffic between you and the remote machine can't read what's being typed or sent. This is essential, since SSH is exactly how most servers (which usually have no screen or keyboard attached at all) are actually managed day-to-day — almost all remote Linux administration happens over SSH.</p>
      `,
      advanced: `
        <p>While password-based SSH login works, the stronger and more standard practice is <strong>SSH key authentication</strong>: you generate a matching pair of cryptographic keys (a private key you keep secret on your own machine, and a public key you place on the remote server), and the two mathematically verify each other without ever transmitting a password at all. This is both more secure (no password to brute-force or steal in transit) and more convenient (no typing a password every time). Disabling password-based SSH login entirely, in favor of key-only authentication, is a standard hardening step on any server exposed to the internet, since automated brute-force login attempts against SSH are extremely common and constant on public-facing servers.</p>
      `
    },
    quiz: [
      { q: "What does SSH let you do?", options: ["Only browse the web", "Securely log into and control another Linux computer over a network", "Only transfer files, never run commands", "Edit local files only"], correct: 1, explain: "SSH (Secure Shell) provides secure, encrypted remote access and control of another computer over a network." },
      { q: "Why is SSH's encryption important?", options: ["It makes the connection faster only", "It prevents anyone intercepting the traffic from reading what's being sent", "Encryption is optional and rarely used", "It only matters for file transfers"], correct: 1, explain: "SSH encrypts the entire session, protecting what's typed and transmitted from anyone intercepting the network traffic." },
      { q: "Why is SSH key authentication generally considered stronger than password login?", options: ["Keys are easier to guess than passwords", "There's no password to brute-force or steal in transit, and it relies on matching cryptographic keys instead", "Key authentication doesn't actually use encryption", "Keys expire automatically every day"], correct: 1, explain: "Key-based authentication removes the password entirely from the login process, eliminating password brute-forcing and interception as attack methods." }
    ]
  },

  {
    id: "linux-firewalls",
    section: "Networking on Linux",
    number: 28,
    title: "Linux Firewalls (iptables/ufw basics)",
    difficulty: "Intermediate",
    summary: "How Linux controls which network traffic is allowed in and out of a machine.",
    animation: "compare-toggle",
    compareData: {
      labelA: "iptables", labelB: "ufw",
      descA: "The powerful, detailed, lower-level firewall tool. Very flexible, but has a steeper learning curve and more complex syntax.",
      descB: "'Uncomplicated Firewall' — a simplified front-end built on top of iptables, designed to be beginner-friendly. Example: sudo ufw allow 22"
    },
    content: {
      basic: `
        <p>A <strong>firewall</strong> controls which network traffic is allowed to reach (or leave) a Linux machine, based on rules you set. Two common tools manage this:</p>
        <ul>
          <li><strong>iptables</strong> — the powerful, detailed, classic Linux firewall tool</li>
          <li><strong>ufw</strong> ("Uncomplicated Firewall") — a simplified, beginner-friendly tool built on top of iptables</li>
        </ul>
      `,
      intermediate: `
        <p>With <code>ufw</code>, common tasks become single simple commands: <code>sudo ufw allow 22</code> permits SSH traffic (port 22) through, while <code>sudo ufw deny 80</code> blocks regular web traffic (port 80). <code>iptables</code> can do everything ufw does and far more, but its syntax is considerably more complex and unforgiving — a small mistake in an iptables rule can accidentally lock you out of your own server entirely.</p>
      `,
      advanced: `
        <p>Firewall rules typically follow a "default deny" philosophy in security-conscious setups: block everything by default, then explicitly allow only the specific traffic that's actually needed — rather than allowing everything and trying to block just the bad stuff. This is considered far safer because it's much easier to reason about (and audit) "only these specific things are allowed in" than "everything is allowed except this growing list of things we've blocked." Modern Linux systems are increasingly shifting toward <strong>nftables</strong> as the next-generation replacement for iptables, though iptables remains extremely common in existing systems and documentation, so understanding its basic concepts is still valuable.</p>
      `
    },
    quiz: [
      { q: "What does a firewall do?", options: ["Speeds up internet connections", "Controls which network traffic is allowed in and out of a machine", "Manages user passwords", "Compiles source code"], correct: 1, explain: "A firewall controls and filters network traffic based on configured rules, deciding what's allowed in or out." },
      { q: "What is ufw's relationship to iptables?", options: ["They are unrelated, competing tools", "ufw is a simplified, beginner-friendly front-end built on top of iptables", "iptables is built on top of ufw", "ufw replaced iptables entirely on all systems"], correct: 1, explain: "ufw simplifies firewall management by providing an easier interface on top of the more complex iptables underneath." },
      { q: "What does a 'default deny' firewall philosophy mean?", options: ["Allow everything by default and block only known bad traffic", "Block everything by default, and explicitly allow only what's actually needed", "Firewalls should never block any traffic", "Default deny means the firewall is turned off"], correct: 1, explain: "Default deny means starting from 'nothing is allowed' and explicitly permitting only necessary traffic, which is generally considered safer and easier to audit." }
    ]
  },

  // ============================================================
  // SECTION 8: SCRIPTING & AUTOMATION
  // ============================================================
  {
    id: "intro-bash-scripting",
    section: "Scripting & Automation",
    number: 29,
    title: "Intro to Bash Scripting",
    difficulty: "Intermediate",
    summary: "How to save a list of commands into a file so you can run them all at once, anytime.",
    animation: "encapsulation",
    compareData: {
      wraps: [
        { label: "#!/bin/bash", color: "var(--signal)" },
        { label: "#!/bin/bash + commands", color: "var(--amber)" },
        { label: "chmod +x script.sh", color: "#a78bfa" },
        { label: "./script.sh → runs!", color: "var(--paper)" }
      ]
    },
    content: {
      basic: `
        <p>A <strong>bash script</strong> is just a text file containing a list of commands, saved so you can run all of them at once instead of typing each one individually every time. Scripts usually end in <code>.sh</code> and start with a special first line called a <strong>shebang</strong>: <code>#!/bin/bash</code>, which tells the system exactly which program should run this file.</p>
      `,
      intermediate: `
        <p>To actually run a script, it first needs execute permission (using <code>chmod +x script.sh</code>, from the Permissions topic earlier), then you run it with <code>./script.sh</code>. The shebang line at the top means you don't have to manually type <code>bash script.sh</code> every time — the system already knows which interpreter to use just by reading that file.</p>
      `,
      advanced: `
        <p>Scripts become genuinely powerful once they include variables, conditionals, and loops (the next topic) — turning a fixed list of one-time commands into a reusable, flexible tool that adapts its behavior based on input or conditions. In real system administration and cybersecurity work, bash scripts are everywhere: automating routine maintenance tasks, processing log files in bulk, or chaining together multiple security tools into a single repeatable workflow — which is exactly why scripting ability marks a real turning point from "knowing some Linux commands" to "actually automating real work."</p>
      `
    },
    quiz: [
      { q: "What is a bash script?", options: ["A type of file permission", "A text file containing a list of commands to run together", "A network protocol", "A graphical desktop application"], correct: 1, explain: "A bash script is simply a text file containing commands, saved so they can all be run together instead of typed individually each time." },
      { q: "What does the shebang line (#!/bin/bash) do?", options: ["It's just a comment with no real function", "It tells the system exactly which program should run this script file", "It deletes the script after running", "It encrypts the script's contents"], correct: 1, explain: "The shebang line tells the system which interpreter (in this case, bash) should be used to execute the script." },
      { q: "What turns a simple script into a genuinely flexible, reusable tool?", options: ["Making the file longer", "Adding variables, conditionals, and loops so it can adapt its behavior", "Renaming the file extension", "Removing all comments"], correct: 1, explain: "Variables, conditionals, and loops let a script adapt its behavior dynamically, rather than just running a fixed list of commands every time." }
    ]
  },

  {
    id: "bash-variables-loops-conditionals",
    section: "Scripting & Automation",
    number: 30,
    title: "Variables, Loops & Conditionals in Bash",
    difficulty: "Intermediate",
    summary: "The three building blocks that let a script make decisions and repeat actions automatically.",
    animation: "layer-stack",
    compareData: {
      layersNumbered: false,
      layers: [
        { name: "Variables", detail: "name=\"Alex\" — store a value to reuse later with $name" },
        { name: "Conditionals (if/else)", detail: "Make decisions: if this is true, do this; otherwise, do that" },
        { name: "Loops (for/while)", detail: "Repeat an action automatically for every matching item" }
      ]
    },
    content: {
      basic: `
        <p>Three building blocks make bash scripts genuinely useful:</p>
        <ul>
          <li><strong>Variables</strong> — store a value to reuse, e.g. <code>name="Alex"</code></li>
          <li><strong>Conditionals (if/else)</strong> — make decisions: "if this is true, do this; otherwise, do that"</li>
          <li><strong>Loops (for/while)</strong> — repeat an action multiple times automatically</li>
        </ul>
      `,
      intermediate: `
        <p>A basic conditional looks like: <code>if [ "$name" = "Alex" ]; then echo "Hello Alex"; fi</code> — checking if a condition is true before running the code inside. A basic loop looks like: <code>for file in *.txt; do echo "$file"; done</code> — running the same block of code once for every matching file, automatically, without writing it out by hand for each one.</p>
      `,
      advanced: `
        <p>Combining these three building blocks is what turns a script from "a fixed list of one-time commands" into genuine automation: a script can loop through every log file in a folder, check (with a conditional) whether each one contains a specific warning sign, and take a different action depending on the result — all without any further human input. This combination of variables, conditionals, and loops is the same core foundation underlying virtually every programming language, not just bash, which is part of why learning bash scripting often makes picking up other languages later noticeably easier.</p>
      `
    },
    quiz: [
      { q: "What does a conditional (if/else) let a script do?", options: ["Store a single value", "Make decisions and run different code depending on whether something is true", "Repeat an action automatically", "Delete files automatically"], correct: 1, explain: "Conditionals let a script choose between different actions based on whether a specified condition is true or false." },
      { q: "What does a loop let a script do?", options: ["Make a yes/no decision", "Repeat the same action automatically for multiple items, without writing it out by hand each time", "Store a single piece of text", "Connect to the internet"], correct: 1, explain: "Loops let a script automatically repeat an action across many items (like files) without manually writing the same code for each one." },
      { q: "Why might learning bash's variables, conditionals, and loops make learning other programming languages easier later?", options: ["Bash and other languages are identical", "These are the same core building blocks underlying virtually every programming language", "Other languages don't use variables or loops at all", "There's no connection between bash and other languages"], correct: 1, explain: "Variables, conditionals, and loops are foundational concepts shared across nearly all programming languages, so bash gives a useful head start." }
    ]
  },

  {
    id: "cron-jobs-scheduling",
    section: "Scripting & Automation",
    number: 31,
    title: "Cron Jobs & Task Scheduling",
    difficulty: "Intermediate",
    summary: "How to make Linux automatically run a command or script at specific times, with no one having to remember.",
    animation: "handshake",
    compareData: {
      exchange: {
        partyA: "crontab",
        partyB: "Your script",
        steps: [
          { label: "scheduled time arrives", direction: "right", color: "var(--signal)" },
          { label: "cron runs the script automatically", direction: "right", color: "var(--amber)" },
          { label: "no human had to remember", direction: "right", color: "var(--signal)" }
        ]
      }
    },
    content: {
      basic: `
        <p><strong>cron</strong> is a built-in Linux tool that runs commands or scripts automatically at scheduled times — without anyone needing to remember to run them manually. You set this up by editing your <strong>crontab</strong> (cron table) with the command <code>crontab -e</code>.</p>
      `,
      intermediate: `
        <p>Each line in a crontab follows a five-field time pattern (minute, hour, day of month, month, day of week) followed by the command to run. For example, <code>0 2 * * * /home/user/backup.sh</code> runs the backup script every single day at exactly 2:00 AM. The asterisks mean "every" — so a field full of asterisks except the hour and minute means "run at this specific time, every day, every month, every weekday."</p>
      `,
      advanced: `
        <p>Cron is the backbone of countless real-world automated maintenance tasks: nightly backups, log rotation, security scans, certificate renewal checks, and more. A common practical gotcha for beginners: cron jobs run with a much more limited environment than your interactive terminal session, often without your usual <code>$PATH</code> settings — which is why scripts that work perfectly when run manually sometimes silently fail when run by cron, unless you use full absolute paths for commands and files inside the script rather than relying on shortcuts that work in your regular terminal.</p>
      `
    },
    quiz: [
      { q: "What does cron do?", options: ["Manages file permissions", "Automatically runs commands or scripts at scheduled times", "Compiles source code", "Checks network connectivity"], correct: 1, explain: "cron is a built-in Linux scheduler that automatically runs commands or scripts at specified times, without manual intervention." },
      { q: "What does a crontab line's time pattern generally control?", options: ["File size limits", "Exactly when (minute, hour, day, month, weekday) the command should run", "Which user can edit the file", "The script's programming language"], correct: 1, explain: "The five time fields in a crontab line specify exactly when the scheduled command should execute." },
      { q: "Why might a script that works fine when run manually fail when run by cron?", options: ["Cron jobs never actually run anything", "Cron jobs run with a more limited environment, often missing your usual $PATH settings", "Cron only works on weekends", "Scripts cannot be run by cron at all"], correct: 1, explain: "Cron jobs run in a more limited environment than an interactive terminal session, which can cause scripts relying on the usual $PATH to fail unless absolute paths are used." }
    ]
  },

  {
    id: "first-real-script",
    section: "Scripting & Automation",
    number: 32,
    title: "Writing Your First Real Script",
    difficulty: "Intermediate",
    summary: "Putting everything together — variables, conditionals, loops, and good habits — into one working script.",
    animation: "encapsulation",
    compareData: {
      wraps: [
        { label: "basic commands", color: "var(--signal)" },
        { label: "+ variables & comments", color: "var(--amber)" },
        { label: "+ conditionals & loops", color: "#a78bfa" },
        { label: "+ error checking ($?) → reliable", color: "var(--paper)" }
      ]
    },
    content: {
      basic: `
        <p>A genuinely useful first script combines everything from the past few topics: variables to store information, conditionals to make decisions, and loops to repeat actions — all wrapped with a clear shebang line at the top and proper execute permissions set with chmod.</p>
        <p>A simple, real example: a script that checks if a backup folder exists, and if not, creates it, then copies today's files into it — fully automatically, every time it's run.</p>
      `,
      intermediate: `
        <p>Good scripting habits matter as much as the syntax itself: always add comments (lines starting with <code>#</code>) explaining what each section does, check whether things exist before assuming they do (like checking a folder exists before trying to use it), and test your script in a safe location first before running it somewhere that actually matters, especially if it deletes or moves files.</p>
      `,
      advanced: `
        <p>Professional scripts typically also handle errors gracefully rather than assuming everything will always work perfectly — checking the exit status of commands (using <code>$?</code>, which holds the result code of the last command that ran) and responding appropriately if something failed, rather than blindly continuing as if it succeeded. This habit of defensive scripting — assuming things can go wrong and explicitly checking for it — is exactly the mindset that separates a script that works fine in testing from one that's actually safe to rely on in a real, unattended, automated environment like a cron job running unsupervised in the middle of the night.</p>
      `
    },
    quiz: [
      { q: "What's a recommended habit when writing scripts that delete or move files?", options: ["Run them immediately on important data with no testing", "Test them in a safe location first before running them somewhere that matters", "Never add any comments", "Avoid using variables entirely"], correct: 1, explain: "Testing potentially destructive scripts in a safe environment first helps catch mistakes before they affect anything important." },
      { q: "What does $? hold in a bash script?", options: ["The current username", "The exit status (result code) of the last command that ran", "The current date", "A random number"], correct: 1, explain: "$? stores the exit status of the most recently executed command, which scripts can check to see if that command succeeded or failed." },
      { q: "Why does 'defensive scripting' (checking if things succeeded, if folders exist, etc.) matter especially for automated tasks like cron jobs?", options: ["It doesn't matter for automated tasks", "Unattended scripts have no human watching to catch problems, so the script itself needs to handle unexpected situations safely", "Defensive scripting only applies to manual commands", "Cron jobs automatically fix any script errors"], correct: 1, explain: "Since automated/unattended scripts run without a human watching, they need to handle unexpected situations themselves rather than assuming everything will always go as planned." }
    ]
  },

  // ============================================================
  // SECTION 9: SYSTEM ADMINISTRATION & SECURITY
  // ============================================================
  {
    id: "linux-boot-process",
    section: "System Administration & Security",
    number: 33,
    title: "Linux Boot Process (BIOS/UEFI → systemd)",
    difficulty: "Advanced",
    summary: "The step-by-step journey a computer takes from being switched on to showing you a working desktop or login.",
    animation: "layer-stack",
    compareData: {
      layersNumbered: true,
      layers: [
        { name: "systemd starts services", detail: "Starts networking, logging, and everything else, in dependency order" },
        { name: "Kernel takes over", detail: "Takes control of the hardware, hands off to PID 1" },
        { name: "Bootloader (GRUB)", detail: "Loads the actual Linux kernel into memory" },
        { name: "BIOS/UEFI", detail: "The very first thing that runs — basic hardware checks"  }
      ]
    },
    content: {
      basic: `
        <p>When you turn on a Linux computer, several things happen in order before you actually see a login screen:</p>
        <ol>
          <li><strong>BIOS/UEFI</strong> — built-in firmware on the motherboard runs basic hardware checks and finds a place to load the operating system from</li>
          <li><strong>Bootloader</strong> (commonly GRUB) — a small program that loads the actual Linux kernel into memory</li>
          <li><strong>Kernel</strong> — starts up and takes control of the hardware</li>
          <li><strong>Init system</strong> (commonly systemd) — starts all the background services and eventually shows you the login screen</li>
        </ol>
      `,
      intermediate: `
        <p>UEFI is the modern replacement for the older BIOS standard, offering faster boot times and support for larger hard drives, though both serve the same basic purpose of being the very first thing that runs. <strong>GRUB</strong> (Grand Unified Bootloader) is the most common bootloader on Linux — it's what shows you a menu if you have multiple operating systems installed, letting you pick which one to actually boot into.</p>
      `,
      advanced: `
        <p>Once the kernel is running, it hands control to PID 1 — the very first real process, almost always <strong>systemd</strong> on modern distributions, which then starts every other background service (networking, logging, scheduled tasks, and more) in the correct dependency order. Understanding this boot sequence matters for real troubleshooting: if a system won't boot at all, knowing which stage it's failing at (firmware, bootloader, kernel, or systemd) tells you exactly where to focus your investigation, rather than guessing blindly. It's also security-relevant: a compromised bootloader or kernel sitting "below" the operating system itself can be extremely difficult to detect using normal security tools that only run after the system has already fully booted.</p>
      `
    },
    quiz: [
      { q: "What is the first thing that runs when you turn on a Linux computer?", options: ["The desktop environment", "BIOS/UEFI firmware on the motherboard", "systemd", "The login screen"], correct: 1, explain: "BIOS/UEFI firmware runs first, performing basic hardware checks before anything related to the actual operating system loads." },
      { q: "What is GRUB?", options: ["A type of file permission", "The most common Linux bootloader, which loads the kernel into memory", "A package manager", "A text editor"], correct: 1, explain: "GRUB (Grand Unified Bootloader) is the common Linux bootloader responsible for loading the kernel and, if needed, offering a menu to choose between multiple installed operating systems." },
      { q: "Why does understanding the boot sequence help with troubleshooting?", options: ["It doesn't help at all", "Knowing which stage (firmware, bootloader, kernel, systemd) is failing tells you exactly where to focus your investigation", "Boot sequences are identical to file permissions", "Only software engineers need to know this"], correct: 1, explain: "Identifying which specific boot stage is failing narrows down exactly where the underlying problem lies, rather than guessing randomly." }
    ]
  },

  {
    id: "systemd-services",
    section: "System Administration & Security",
    number: 34,
    title: "systemd & Managing Services",
    difficulty: "Advanced",
    summary: "How modern Linux starts, stops, and manages background programs that keep running behind the scenes.",
    animation: "handshake",
    compareData: {
      exchange: {
        partyA: "You",
        partyB: "systemd",
        steps: [
          { label: "systemctl start nginx", direction: "right", color: "var(--signal)" },
          { label: "service starts running", direction: "left", color: "var(--amber)" },
          { label: "systemctl status nginx → confirms it's healthy", direction: "right", color: "var(--signal)" }
        ]
      }
    },
    content: {
      basic: `
        <p><strong>systemd</strong> is the system that manages <strong>services</strong> — background programs that keep running even when you're not actively using them, like a web server or a printer manager. The main command for controlling services is <strong>systemctl</strong>:</p>
        <ul>
          <li><code>sudo systemctl start nginx</code> — starts a service</li>
          <li><code>sudo systemctl stop nginx</code> — stops a service</li>
          <li><code>sudo systemctl status nginx</code> — checks if a service is currently running and healthy</li>
          <li><code>sudo systemctl enable nginx</code> — makes a service start automatically every time the computer boots</li>
        </ul>
      `,
      intermediate: `
        <p>There's an important difference between <strong>start/stop</strong> (affects the service right now, this session) and <strong>enable/disable</strong> (affects whether it automatically starts on every future boot) — you can enable a service without starting it immediately, or start one without enabling it for next time, since these two settings are completely independent of each other.</p>
      `,
      advanced: `
        <p>systemd organizes services using configuration files called <strong>unit files</strong>, which define exactly how a service should start, what it depends on, and how it should be restarted if it crashes. This dependency-aware design is precisely why systemd can boot a complex system efficiently — starting independent services in parallel rather than one at a time, while still correctly waiting for genuine dependencies (like networking being ready before a service that needs network access tries to start). From a security standpoint, regularly auditing exactly which services are enabled on a system — using <code>systemctl list-unit-files --state=enabled</code> — is a common hardening step, since every unnecessary running service is one more potential target for an attacker.</p>
      `
    },
    quiz: [
      { q: "What's the difference between 'start' and 'enable' for a systemd service?", options: ["They do exactly the same thing", "start affects the service right now; enable controls whether it starts automatically on future boots", "enable immediately starts the service and start does nothing", "Only root can use start, anyone can use enable"], correct: 1, explain: "start/stop control the service's current running state, while enable/disable control whether it automatically launches on future system boots — these are independent settings." },
      { q: "What is a systemd 'unit file'?", options: ["A type of log file", "A configuration file defining how a service should start, its dependencies, and restart behavior", "A network configuration setting", "A user account file"], correct: 1, explain: "Unit files define exactly how systemd should manage a particular service, including startup behavior and dependencies on other services." },
      { q: "Why might auditing enabled services be considered a security hardening step?", options: ["Enabled services have no security relevance", "Every unnecessary running service is a potential target for an attacker", "Disabling services always breaks the system", "Only disabled services can be attacked"], correct: 1, explain: "Each running, unnecessary service represents additional attack surface, so reviewing and disabling unneeded services reduces potential entry points for an attacker." }
    ]
  },

  {
    id: "logs-log-management",
    section: "System Administration & Security",
    number: 35,
    title: "Logs & Log Management (/var/log, journalctl)",
    difficulty: "Advanced",
    summary: "Where Linux records what's happening on the system, and how to actually search through that record.",
    animation: "dns-lookup",
    compareData: {
      chain: ["Event happens", "Written to /var/log", "journalctl -u [service]", "You investigate"]
    },
    content: {
      basic: `
        <p>Linux keeps detailed records of what's happening on the system, called <strong>logs</strong>, mostly stored in the <code>/var/log</code> folder. These records cover everything from successful and failed logins, to errors from individual applications, to system startup messages.</p>
        <p>Modern systemd-based systems also provide <strong>journalctl</strong>, a command specifically for searching through systemd's own centralized logging system, called the <strong>journal</strong>.</p>
      `,
      intermediate: `
        <p>Common useful files inside <code>/var/log</code> include <code>auth.log</code> (login attempts, both successful and failed) and <code>syslog</code> (general system messages from many different programs). <code>journalctl</code> offers powerful filtering options — <code>journalctl -u nginx</code> shows logs from just one specific service, and <code>journalctl --since "1 hour ago"</code> filters by time, both far more convenient than manually scrolling through raw log files by eye.</p>
      `,
      advanced: `
        <p>Logs are often the single most important resource during a security investigation — they're frequently the only record of exactly what happened, when, and from where, after an incident. This is exactly why attackers sometimes specifically try to delete or alter logs to cover their tracks, which is in turn why security-conscious setups often send logs to a separate, remote logging server in real time — so that even if an attacker fully compromises and alters the original machine's local logs, an untouched copy still exists elsewhere for investigators to examine. Regularly reviewing logs (rather than only checking them after something has already gone wrong) is itself a meaningful, proactive security practice on its own.</p>
      `
    },
    quiz: [
      { q: "Where are most traditional Linux log files stored?", options: ["/home", "/var/log", "/etc", "/tmp"], correct: 1, explain: "/var/log is the standard location for most traditional Linux log files." },
      { q: "What does journalctl -u nginx do?", options: ["Installs the nginx service", "Shows logs specifically from the nginx service", "Deletes nginx's logs", "Restarts the nginx service"], correct: 1, explain: "journalctl -u [service] filters the systemd journal to show logs from just that specific service." },
      { q: "Why do security-conscious setups often send logs to a separate remote server?", options: ["It makes logs load faster locally", "So an untouched copy survives even if an attacker alters logs on the original compromised machine", "Remote logging is required by every operating system", "It has no real security benefit"], correct: 1, explain: "Centralized remote logging ensures an intact copy of logs exists even if an attacker manages to delete or alter logs on the compromised local machine." }
    ]
  },

  {
    id: "linux-hardening-basics",
    section: "System Administration & Security",
    number: 36,
    title: "Linux Hardening Basics",
    difficulty: "Advanced",
    summary: "Practical first steps to make a Linux system meaningfully harder for an attacker to break into.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "Keep Updated", desc: "Regularly apply security updates via your package manager — most real-world attacks exploit known, already-patched vulnerabilities." },
        { label: "Limit Access", desc: "Use SSH keys instead of passwords, disable root login over SSH, and apply least-privilege permissions everywhere." },
        { label: "Reduce Surface", desc: "Disable and remove services you don't actually need running — every unnecessary service is a potential way in." },
        { label: "Watch & Log", desc: "Review logs regularly, and consider remote/centralized logging so an attacker can't simply erase the evidence." }
      ]
    },
    content: {
      basic: `
        <p><strong>Hardening</strong> means making practical changes to a system specifically to make it harder for an attacker to break into or move around inside. It's not one single action — it's a collection of good habits and settings, several of which you've already learned across this track:</p>
        <ul>
          <li>Keep software updated (Package Management topics)</li>
          <li>Use SSH keys, not passwords, for remote access (SSH topic)</li>
          <li>Apply least-privilege permissions (Permissions topics)</li>
          <li>Disable services you don't actually need (systemd topic)</li>
          <li>Review your logs regularly (Logs topic)</li>
        </ul>
      `,
      intermediate: `
        <p>Most successful real-world attacks don't rely on exotic, never-before-seen techniques — they exploit basic gaps like unpatched known vulnerabilities, weak or reused passwords, or services left running unnecessarily with default settings. This is exactly why hardening is mostly about consistently applying fundamentals well, rather than chasing exotic defenses while skipping the basics — the boring, repeated work of keeping things updated and minimal is what actually stops the vast majority of real attacks.</p>
      `,
      advanced: `
        <p>Beyond individual settings, established hardening frameworks like the <strong>CIS Benchmarks</strong> (Center for Internet Security) provide detailed, distribution-specific checklists covering hundreds of individual settings, letting organizations systematically verify and audit their configuration rather than relying on memory or ad-hoc checklists. Tools like <strong>Lynis</strong> can automatically scan a system and report exactly which hardening recommendations it currently fails to meet. The deeper mindset behind all of this is <strong>defense in depth</strong> — assuming no single protective measure will be perfect, and layering multiple independent safeguards (updates, permissions, limited services, monitoring, logging) so that one failure doesn't immediately mean total compromise. This same defense-in-depth thinking is the natural bridge from "knowing Linux" into the broader world of cybersecurity that this platform is ultimately building toward.</p>
      `
    },
    quiz: [
      { q: "What does 'hardening' a Linux system mean?", options: ["Making the system run faster", "Making practical changes that make the system harder for an attacker to break into", "Installing more software", "Increasing disk storage space"], correct: 1, explain: "Hardening refers to applying practical security improvements specifically aimed at making a system more resistant to attack." },
      { q: "What do most successful real-world attacks actually exploit, according to this topic?", options: ["Exotic, never-before-seen techniques", "Basic gaps like unpatched known vulnerabilities, weak passwords, or unnecessary running services", "Only zero-day vulnerabilities discovered by elite hackers", "Hardware failures only"], correct: 1, explain: "Most real-world attacks succeed by exploiting basic, well-known weaknesses, which is why consistent fundamentals matter more than chasing exotic defenses." },
      { q: "What is the 'defense in depth' mindset?", options: ["Relying on a single perfect security measure", "Layering multiple independent safeguards so one failure doesn't mean total compromise", "Avoiding all security measures to keep things simple", "Only securing the most important file on the system"], correct: 1, explain: "Defense in depth means using multiple, independent layers of protection, so the failure of any single layer doesn't automatically lead to a full system compromise." }
    ]
  }

  // ---------------------------------------------------------
  // ALL 36 LINUX MASTERY TOPICS COMPLETE.
  // Follows the exact same shape as the Networking track's
  // topics-data.js, just with its own array/function names
  // so both tracks can load side-by-side without clashing.
  // ---------------------------------------------------------
];

// Helper: get a topic by its id (used by topic.html for Linux track)
function getLinuxTopicById(id) {
  return LINUX_TOPICS.find(t => t.id === id);
}

// Helper: get topics grouped by section (used by linux.html)
function getLinuxTopicsBySection() {
  const sections = {};
  LINUX_TOPICS.forEach(t => {
    if (!sections[t.section]) sections[t.section] = [];
    sections[t.section].push(t);
  });
  return sections;
}

// Helper: get next/previous topic for navigation arrows
function getAdjacentLinuxTopics(id) {
  const index = LINUX_TOPICS.findIndex(t => t.id === id);
  return {
    prev: index > 0 ? LINUX_TOPICS[index - 1] : null,
    next: index < LINUX_TOPICS.length - 1 ? LINUX_TOPICS[index + 1] : null
  };
}
