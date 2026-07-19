// ============================================================
// EASYTOLEARN — Core Security Concepts Topics Data (SECURITY TRACK)
// Same shape as js/topics-data.js and js/linux-topics-data.js,
// with its own array/function names so all tracks can load
// together without clashing.
// Written in simple, plain English on purpose — beginner first.
// ============================================================

const SECURITY_TOPICS = [

  // ============================================================
  // SECTION 1: THE BIG IDEAS
  // ============================================================
  {
    id: "cia-triad",
    section: "The Big Ideas",
    number: 1,
    title: "The CIA Triad — Confidentiality, Integrity, Availability",
    difficulty: "Basic",
    summary: "The three goals every security decision is trying to protect, in one simple model.",
    animation: "layer-stack",
    compareData: {
      layersNumbered: false,
      layers: [
        { name: "Confidentiality", detail: "Only the right people can see the data" },
        { name: "Integrity", detail: "The data has not been changed or tampered with" },
        { name: "Availability", detail: "The data and systems are there when you need them" }
      ]
    },
    content: {
      basic: `
        <p>Whenever anyone talks about "security," they are really talking about protecting three things. Together these are called the <strong>CIA Triad</strong> — nothing to do with the spy agency, just a simple memory trick.</p>
        <ul>
          <li><strong>Confidentiality</strong> — keeping secrets secret. Only people who are allowed to see something can see it.</li>
          <li><strong>Integrity</strong> — keeping data correct. No one can secretly change your data without you knowing.</li>
          <li><strong>Availability</strong> — keeping things working. The system or data is there and usable when you need it.</li>
        </ul>
        <p>Every security tool or rule you will ever learn about is really just trying to protect one (or more) of these three things.</p>
      `,
      intermediate: `
        <p>These three goals often pull against each other, and good security is really about finding the right balance. For example, locking a system down very tightly protects confidentiality, but if it's locked down so much that real users can't get their work done, you've hurt availability.</p>
        <p>A password protects confidentiality. A checksum or digital signature protects integrity. A backup system or a second server protects availability. Most attacks target one of these three directly — stealing data (confidentiality), changing data (integrity), or knocking a service offline (availability).</p>
      `,
      advanced: `
        <p>In real security planning, you rate how important each part of the triad is for a given system, because that decides what controls make sense. A hospital's patient database needs very high integrity (wrong medical data can hurt someone) and high confidentiality (privacy laws), but a public news website cares most about availability — an attacker taking the site offline is the real threat there, more than someone reading an already-public article.</p>
        <p>Modern frameworks sometimes extend the triad with ideas like <strong>non-repudiation</strong> (proving who really did an action, so they can't deny it) and <strong>authenticity</strong> (proving something really came from where it claims to), but CIA remains the foundation almost every certification and job interview starts from.</p>
      `
    },
    quiz: [
      { q: "What does the 'C' in the CIA Triad stand for?", options: ["Cybersecurity", "Confidentiality", "Compliance", "Cryptography"], correct: 1, explain: "Confidentiality means only the people who are allowed to see data can see it." },
      { q: "An attacker who secretly edits a company's financial records is mainly attacking which part of the triad?", options: ["Confidentiality", "Integrity", "Availability", "Authentication"], correct: 1, explain: "Changing data without permission is an attack on integrity — the data is no longer trustworthy or correct." },
      { q: "A website going offline during a big traffic flood is a failure of which part of the triad?", options: ["Confidentiality", "Integrity", "Availability", "Authorization"], correct: 2, explain: "Availability means the system is there and usable when needed — an outage is a direct hit to availability." }
    ]
  },

  {
    id: "threat-vulnerability-risk",
    section: "The Big Ideas",
    number: 2,
    title: "Threat vs Vulnerability vs Risk",
    difficulty: "Basic",
    summary: "Three words people mix up constantly — and the simple way to always tell them apart.",
    animation: "handshake",
    compareData: {
      exchange: {
        partyA: "Threat",
        partyB: "Vulnerability",
        steps: [
          { label: "threat looks for a weakness", direction: "right", color: "var(--amber)" },
          { label: "vulnerability is the open door", direction: "left", color: "var(--signal)" },
          { label: "risk = threat meets vulnerability", direction: "right", color: "var(--amber)" }
        ]
      }
    },
    content: {
      basic: `
        <p>These three words get used interchangeably in normal conversation, but in security they mean very specific, different things:</p>
        <ul>
          <li><strong>Threat</strong> — anything that could cause harm. A hacker, a virus, even a natural disaster like a flood.</li>
          <li><strong>Vulnerability</strong> — a weakness that could be exploited. An unlocked door, outdated software, a weak password.</li>
          <li><strong>Risk</strong> — the actual chance of harm happening, combining both. Risk only exists when a threat can actually reach a vulnerability.</li>
        </ul>
        <p>A simple way to remember it: a vulnerability with no threat targeting it is low risk. A threat with no vulnerability to exploit can't do much damage.</p>
      `,
      intermediate: `
        <p>Think of an old, unlocked house (the vulnerability) in a neighborhood with no burglars (no threat) — the risk is actually low, even though the door is unlocked. Now put that same unlocked house in a high-crime area (a real threat) — the risk shoots up, even though nothing about the house itself changed.</p>
        <p>This is why security teams don't just fix every possible weakness blindly — they prioritize based on risk, which considers both how likely a threat is to show up and how bad the damage would be if it succeeded.</p>
      `,
      advanced: `
        <p>Formally, risk is often expressed as a function of <strong>likelihood</strong> and <strong>impact</strong>: Risk ≈ Threat × Vulnerability × Impact. Security professionals use this to build risk matrices, ranking issues from low to critical so limited time and budget go to the highest-risk problems first, rather than treating every finding as equally urgent.</p>
        <p>This is also why "vulnerability" and "exploit" aren't the same thing either — a vulnerability is the weakness itself, while an <strong>exploit</strong> is the actual code or technique a threat uses to take advantage of that weakness. A vulnerability can exist for years with no known exploit, which changes its real-world risk significantly.</p>
      `
    },
    quiz: [
      { q: "Outdated, unpatched software on a server is an example of a...", options: ["Threat", "Vulnerability", "Risk", "Exploit"], correct: 1, explain: "Outdated software is a weakness that could be exploited — that makes it a vulnerability." },
      { q: "A hacker actively trying to break into systems is an example of a...", options: ["Vulnerability", "Threat", "Patch", "Firewall"], correct: 1, explain: "A threat is anything that could cause harm — a hacker is a classic example of a threat." },
      { q: "Why might the same vulnerability have very different risk levels in two different companies?", options: ["Risk is always identical everywhere", "Risk depends on both the vulnerability and the threats actually likely to target it", "Vulnerabilities can only exist in one company at a time", "Risk only depends on the size of the company"], correct: 1, explain: "Risk combines the vulnerability with how likely a real threat is to exploit it, so the same weakness can carry very different risk depending on context." }
    ]
  },

  // ============================================================
  // SECTION 2: PROVING WHO YOU ARE
  // ============================================================
  {
    id: "authentication-vs-authorization",
    section: "Proving Who You Are",
    number: 3,
    title: "Authentication vs Authorization",
    difficulty: "Basic",
    summary: "Proving who you are is a completely different step from being allowed to do something.",
    animation: "handshake",
    compareData: {
      exchange: {
        partyA: "You",
        partyB: "System",
        steps: [
          { label: "who are you? (authentication)", direction: "right", color: "var(--signal)" },
          { label: "identity confirmed", direction: "left", color: "var(--signal)" },
          { label: "what can you do? (authorization)", direction: "right", color: "var(--amber)" }
        ]
      }
    },
    content: {
      basic: `
        <p>These two words sound similar but mean very different things, and mixing them up is one of the most common beginner mistakes in security.</p>
        <ul>
          <li><strong>Authentication</strong> — proving you are who you say you are. Logging in with a password, fingerprint, or code.</li>
          <li><strong>Authorization</strong> — what you're allowed to do once you're in. Can you read a file? Edit it? Delete it?</li>
        </ul>
        <p>A simple example: showing your ID at the airport is authentication. Whether your ticket lets you into the first-class lounge is authorization.</p>
      `,
      intermediate: `
        <p>A system always checks authentication first, then authorization. You can be fully authenticated (logged in successfully) but still be denied access to something specific because you're not authorized for it — like a regular employee logging into a company system successfully, but being blocked from viewing HR salary records.</p>
        <p>Most login systems separate these two on purpose: authentication happens once per session, while authorization gets checked repeatedly, every single time you try to do something inside the system.</p>
      `,
      advanced: `
        <p>Modern authentication increasingly uses <strong>multi-factor authentication (MFA)</strong> — combining something you know (password), something you have (a phone or security key), and something you are (fingerprint, face). This matters because a stolen password alone becomes much less dangerous if the attacker doesn't also have your second factor.</p>
        <p>Authorization, meanwhile, is usually managed through models like <strong>Role-Based Access Control (RBAC)</strong>, where permissions are assigned to a role (like "Manager" or "Admin") rather than to individual people, making it far easier to manage access across a large organization without granting excess permissions one person at a time.</p>
      `
    },
    quiz: [
      { q: "Entering your password to log in is an example of...", options: ["Authorization", "Authentication", "Encryption", "Availability"], correct: 1, explain: "Entering a password proves who you are, which is authentication." },
      { q: "A logged-in employee being blocked from viewing another department's private files is an example of...", options: ["Failed authentication", "Authorization working correctly", "A vulnerability", "A threat"], correct: 1, explain: "The employee already proved who they are (authentication succeeded); the system is simply not authorizing them to see those specific files." },
      { q: "Why is Multi-Factor Authentication (MFA) considered stronger than a password alone?", options: ["It's slower, which confuses attackers", "It requires more than one type of proof, so a stolen password alone isn't enough", "It replaces the need for authorization", "It makes passwords unnecessary"], correct: 1, explain: "MFA requires an extra factor beyond just a password, so even a stolen password isn't enough on its own to get in." }
    ]
  },

  {
    id: "passwords-best-practices",
    section: "Proving Who You Are",
    number: 4,
    title: "Passwords & Why Most Advice Was Wrong for Years",
    difficulty: "Basic",
    summary: "Length beats complexity, reuse is the real danger, and password managers solve most of the problem.",
    animation: "topology",
    compareData: {
      diagrams: [ { label: "Weak vs Strong", draw: "tree" } ]
    },
    content: {
      basic: `
        <p>For a long time, common advice was "use a mix of letters, numbers, and symbols, and change it every 90 days." Most of that turned out to actually make passwords weaker in practice, because people responded by making small, predictable tweaks like <code>Password1!</code> → <code>Password2!</code>.</p>
        <p>Current best practice from security experts is simpler:</p>
        <ul>
          <li>Make passwords <strong>long</strong> — length matters more than complexity.</li>
          <li>Use a <strong>different password for every single account</strong>.</li>
          <li>Use a <strong>password manager</strong> to generate and remember them for you.</li>
        </ul>
      `,
      intermediate: `
        <p>The single biggest real-world danger isn't a "weak" password — it's <strong>password reuse</strong>. When one website gets breached and your password leaks, attackers immediately try that same email/password combination on banks, email providers, and social media. This is called <strong>credential stuffing</strong>, and it's one of the most common ways accounts actually get taken over.</p>
        <p>A password manager solves this cleanly: it generates a long, random, unique password for every site and remembers them all for you, so you only need to remember one master password.</p>
      `,
      advanced: `
        <p>From a math standpoint, a long random passphrase like <code>correct-horse-battery-staple</code> can have more total combinations (entropy) than a short complex-looking password like <code>P@ssw0rd!</code>, while being far easier for a human to actually remember — which is why NIST's modern password guidelines shifted away from mandatory complexity rules and forced periodic changes, and toward length, breach-checking, and blocking commonly-known-bad passwords instead.</p>
        <p>Well-designed systems also never store your actual password — they store a <strong>hash</strong> (a one-way scrambled version). When you log in, the system hashes what you typed and compares the hashes, so even the company itself can't see your real password, and a stolen database of hashes is much harder for an attacker to turn back into usable passwords.</p>
      `
    },
    quiz: [
      { q: "What is generally considered more important for password strength today?", options: ["Changing it every 30 days", "Length, more than complexity", "Using only symbols", "Making it easy to guess but memorable"], correct: 1, explain: "Modern guidance favors longer passwords/passphrases over short, complex-looking ones that people struggle to remember." },
      { q: "What is 'credential stuffing'?", options: ["Creating extra-long passwords", "Trying a leaked email/password pair across many other websites", "A type of firewall", "Encrypting a password twice"], correct: 1, explain: "Credential stuffing is when attackers take a leaked username/password pair and try it on many other sites, hoping the person reused it." },
      { q: "Why do well-designed systems store a 'hash' of your password instead of the password itself?", options: ["Hashes take up less storage space", "So even the company can't see your real password, and a stolen hash database is harder to reverse", "Hashing makes passwords load faster", "It's required for authorization"], correct: 1, explain: "Hashing is a one-way process, so storing hashes instead of real passwords protects users even if the database itself is stolen." }
    ]
  },

  // ============================================================
  // SECTION 3: PROTECTING DATA
  // ============================================================
  {
    id: "encryption-basics",
    section: "Protecting Data",
    number: 5,
    title: "Encryption Basics — Turning Data into Nonsense (on Purpose)",
    difficulty: "Basic",
    summary: "How scrambling data with a key keeps it safe, even if someone steals it.",
    animation: "layer-stack",
    compareData: {
      layersNumbered: true,
      layers: [
        { name: "Plaintext", detail: "The original, readable data" },
        { name: "Encryption + Key", detail: "The scrambling process using a secret key" },
        { name: "Ciphertext", detail: "The scrambled, unreadable result" }
      ]
    },
    content: {
      basic: `
        <p><strong>Encryption</strong> is the process of scrambling readable data (called <strong>plaintext</strong>) into unreadable nonsense (called <strong>ciphertext</strong>) using a secret <strong>key</strong>. Only someone with the correct key can unscramble it back (<strong>decryption</strong>).</p>
        <p>This means that even if an attacker steals encrypted data — from a stolen laptop, an intercepted message, or a hacked database — it's useless to them without the key.</p>
      `,
      intermediate: `
        <p>There are two main types of encryption. <strong>Symmetric encryption</strong> uses the exact same key to both lock and unlock data — fast, but both sides need to somehow already share that same secret key safely. <strong>Asymmetric encryption</strong> uses a matched pair of keys — a <strong>public key</strong> anyone can see, and a <strong>private key</strong> only you keep secret. Data locked with your public key can only be unlocked with your private key.</p>
        <p>Asymmetric encryption solves the "how do we share a secret key safely" problem, which is why it's the backbone of secure web browsing (HTTPS) — your browser and the website never need to have met before to set up a secure connection.</p>
      `,
      advanced: `
        <p>In practice, most real systems use both types together, since asymmetric encryption is much slower than symmetric. This is exactly how HTTPS works: asymmetric encryption is used briefly at the very start of a connection just to safely agree on a shared symmetric key, and then all the actual data transfer uses fast symmetric encryption from that point on.</p>
        <p>It's also worth knowing the difference between encryption "at rest" (data sitting on a hard drive or in a database) and "in transit" (data moving across a network). Both matter — encrypting data in transit stops someone intercepting it on the wire, while encrypting data at rest protects it if a device or server is physically stolen or improperly accessed.</p>
      `
    },
    quiz: [
      { q: "What is 'ciphertext'?", options: ["The original readable message", "The scrambled, unreadable version of a message", "A type of password", "A firewall rule"], correct: 1, explain: "Ciphertext is what plaintext becomes after encryption — scrambled and unreadable without the right key." },
      { q: "What is the main advantage of asymmetric encryption over symmetric encryption?", options: ["It's always faster", "It solves the problem of safely sharing a secret key between two sides that haven't met", "It doesn't require any keys at all", "It only works on Linux systems"], correct: 1, explain: "Asymmetric encryption uses a public/private key pair, so two sides can set up secure communication without ever having shared a secret key in advance." },
      { q: "Encrypting a database stored on a company's server protects data...", options: ["In transit only", "At rest", "Only during login", "Only from internal employees"], correct: 1, explain: "Data sitting in storage (like a database on disk) is described as data 'at rest' — encrypting it protects against theft of the physical storage or unauthorized access to the files." }
    ]
  },

  {
    id: "malware-types",
    section: "Protecting Data",
    number: 6,
    title: "Malware — Viruses, Worms, Trojans & Ransomware Explained",
    difficulty: "Basic",
    summary: "The most common types of malicious software, and the key difference between each one.",
    animation: "topology",
    compareData: {
      diagrams: [ { label: "How malware spreads", draw: "tree" } ]
    },
    content: {
      basic: `
        <p><strong>Malware</strong> ("malicious software") is any program designed to cause harm. It's a broad umbrella term covering many specific types:</p>
        <ul>
          <li><strong>Virus</strong> — attaches itself to a real, legitimate file and spreads when that file is shared or run.</li>
          <li><strong>Worm</strong> — spreads on its own across a network, with no human needing to click anything.</li>
          <li><strong>Trojan</strong> — disguises itself as something useful or harmless to trick you into installing it.</li>
          <li><strong>Ransomware</strong> — encrypts your files and demands payment to unlock them.</li>
          <li><strong>Spyware</strong> — secretly watches and records what you do, like keystrokes or screenshots.</li>
        </ul>
      `,
      intermediate: `
        <p>The key differences are mostly about <strong>how they spread</strong> and <strong>what they do once inside</strong>. A virus needs a host file and human action (like opening an infected document); a worm actively hunts for other vulnerable machines on its own, which is why worms can spread far faster and wider than viruses.</p>
        <p>Ransomware has become one of the most financially damaging malware types for organizations, because it directly disrupts availability (the "A" in the CIA Triad) — files become completely unusable until a ransom is paid, or until the organization restores from a clean backup.</p>
      `,
      advanced: `
        <p>Modern attacks rarely use just one type of malware — they chain them together. A common pattern: a phishing email delivers a Trojan, which quietly installs spyware to steal login credentials, which are then used to move across the network, eventually deploying ransomware across as many systems as possible before the attacker triggers encryption everywhere at once for maximum impact.</p>
        <p>This is why modern defense relies on <strong>defense in depth</strong> rather than a single antivirus tool — email filtering to catch phishing, endpoint detection to catch unusual behavior, network segmentation to slow lateral movement, and offline backups as a last resort if everything else fails.</p>
      `
    },
    quiz: [
      { q: "What makes a 'worm' different from a 'virus'?", options: ["Worms need a human to click something to spread; viruses don't", "Worms spread on their own across a network without human action, unlike a typical virus which needs a host file", "Worms only affect phones", "There is no real difference"], correct: 1, explain: "Worms actively spread across networks by themselves, while a virus typically needs to attach to a file and be run or shared by a person." },
      { q: "What does ransomware typically do?", options: ["Secretly records your keystrokes", "Encrypts your files and demands payment to unlock them", "Slows down your internet connection only", "Deletes your antivirus software only"], correct: 1, explain: "Ransomware locks up files with encryption and demands a ransom payment in exchange for the decryption key." },
      { q: "Why do modern attacks often chain several types of malware together?", options: ["It's required by law for attackers to use multiple tools", "Each stage (initial access, spying, spreading, final damage) is often handled by a different specialized tool", "It makes the attack easier to detect", "Chaining malware is actually not something real attackers do"], correct: 1, explain: "Real-world attacks are often multi-stage, using different tools for gaining access, spying, spreading, and finally causing damage." }
    ]
  },

  // ============================================================
  // SECTION 4: HUMAN & NETWORK DEFENSES
  // ============================================================
  {
    id: "social-engineering",
    section: "Human & Network Defenses",
    number: 7,
    title: "Social Engineering — Hacking the Human, Not the Machine",
    difficulty: "Basic",
    summary: "Why tricking a person is often easier for an attacker than breaking through technical defenses.",
    animation: "handshake",
    compareData: {
      exchange: {
        partyA: "Attacker",
        partyB: "Victim",
        steps: [
          { label: "creates urgency or trust", direction: "right", color: "var(--amber)" },
          { label: "victim acts without checking", direction: "left", color: "var(--signal)" },
          { label: "attacker gets access", direction: "right", color: "var(--amber)" }
        ]
      }
    },
    content: {
      basic: `
        <p><strong>Social engineering</strong> is the art of manipulating people into giving up information or access, instead of breaking through technical security. It works because it targets human trust, fear, and urgency — things firewalls can't defend against.</p>
        <p>Common types:</p>
        <ul>
          <li><strong>Phishing</strong> — fake emails pretending to be from a trusted source, tricking you into clicking a link or giving up a password.</li>
          <li><strong>Pretexting</strong> — inventing a believable fake story (like posing as IT support) to get information.</li>
          <li><strong>Baiting</strong> — offering something tempting (like a free download or a found USB drive) that's actually malicious.</li>
        </ul>
      `,
      intermediate: `
        <p>Social engineering works so well because it exploits normal, healthy human instincts — wanting to be helpful, respecting authority, or reacting quickly to urgency ("Your account will be closed in 1 hour!"). Attackers don't need to find a technical flaw at all if they can just convince someone to hand over a password directly.</p>
        <p><strong>Spear phishing</strong> is a more targeted, researched version of phishing aimed at one specific person, often using real details about them (their job title, a real coworker's name) to seem far more convincing than a generic mass email.</p>
      `,
      advanced: `
        <p>Security awareness training exists specifically because technical controls alone can't stop social engineering — a well-crafted phishing email can bypass every firewall and antivirus simply by convincing a human to click "allow" or type a password into a fake page. This is why social engineering is consistently one of the top initial access methods in real-world breaches, year after year.</p>
        <p>Organizations combat this with layered defenses: email filtering to reduce volume, simulated phishing tests to build habits, MFA so a stolen password alone isn't enough, and a clear, blame-free process for reporting suspicious messages quickly, since the speed of reporting often matters more than preventing every single click.</p>
      `
    },
    quiz: [
      { q: "What is 'phishing'?", options: ["A type of firewall", "Fake emails or messages pretending to be trustworthy, to trick you into clicking a link or giving up information", "A method of encrypting data", "A password strength test"], correct: 1, explain: "Phishing uses fake, trustworthy-looking messages to trick people into clicking malicious links or handing over sensitive info." },
      { q: "Why does social engineering work well against even strong technical security?", options: ["It targets human trust and urgency, which firewalls and antivirus can't defend against directly", "It always involves breaking encryption", "It requires advanced hacking tools", "It only works on outdated software"], correct: 0, explain: "Social engineering bypasses technical defenses by manipulating a person directly, rather than attacking the system itself." },
      { q: "What makes 'spear phishing' different from regular phishing?", options: ["It's sent to millions of random people at once", "It's a highly targeted, researched attack aimed at one specific person", "It only happens over the phone", "It doesn't involve any deception"], correct: 1, explain: "Spear phishing is personalized and targeted at a specific individual, often using real details about them to seem convincing." }
    ]
  },

  {
    id: "firewalls-basics",
    section: "Human & Network Defenses",
    number: 8,
    title: "Firewalls — The Gatekeeper of a Network",
    difficulty: "Basic",
    summary: "How firewalls decide what traffic gets in and out, based on a set of rules.",
    animation: "topology",
    compareData: {
      diagrams: [ { label: "Allowed vs Blocked Traffic", draw: "tree" } ]
    },
    content: {
      basic: `
        <p>A <strong>firewall</strong> is a security checkpoint that controls what network traffic is allowed in and out of a system or network, based on a set of rules. Think of it as a gatekeeper checking every visitor against a guest list before letting them through.</p>
        <p>A basic firewall rule might say: "allow web traffic on port 443, block everything else by default." That single rule can stop a huge amount of unwanted or malicious traffic automatically.</p>
      `,
      intermediate: `
        <p>Firewalls can filter traffic in different ways. Simple ones look only at basic info like source, destination, and port number. More advanced ones — called <strong>stateful firewalls</strong> — actually track ongoing connections, so they can tell the difference between a brand new incoming connection and a reply to something you already asked for.</p>
        <p>Firewalls can also live in different places: a <strong>network firewall</strong> protects an entire network at its edge, while a <strong>host-based firewall</strong> runs on a single device (like the one built into Windows or macOS), protecting that one machine specifically.</p>
      `,
      advanced: `
        <p><strong>Next-Generation Firewalls (NGFW)</strong> go further, inspecting the actual content of traffic (not just headers), able to identify specific applications, block known malicious patterns, and even integrate with intrusion detection systems. This lets them catch threats that a simple port-and-address firewall would completely miss, since modern malicious traffic often deliberately uses common, "allowed" ports like 443 to blend in.</p>
        <p>A good default security posture follows the principle of <strong>"default deny"</strong> — block everything by default, and only explicitly allow the specific traffic that's actually needed. This is far safer than "default allow, block known bad stuff," because it doesn't rely on already knowing every possible threat in advance.</p>
      `
    },
    quiz: [
      { q: "What is the main job of a firewall?", options: ["To encrypt all stored data", "To control what network traffic is allowed in and out, based on rules", "To generate strong passwords", "To back up files automatically"], correct: 1, explain: "A firewall acts as a gatekeeper, deciding what traffic is allowed based on a defined set of rules." },
      { q: "What can a 'stateful' firewall do that a simple one can't?", options: ["Encrypt data automatically", "Track ongoing connections, telling a new request apart from a reply to one you already made", "Generate passwords for users", "Physically block USB ports"], correct: 1, explain: "Stateful firewalls track the state of active connections, allowing smarter decisions than simply checking each packet in isolation." },
      { q: "What does the 'default deny' approach mean?", options: ["Allow everything, and block only known bad traffic", "Block everything by default, and only allow specifically what's needed", "Disable the firewall entirely", "Only apply rules on weekends"], correct: 1, explain: "Default deny blocks all traffic unless it's specifically allowed, which is generally safer than trying to list every possible bad thing to block." }
    ]
  },

  {
    id: "network-attacks-common",
    section: "Human & Network Defenses",
    number: 9,
    title: "Common Attack Types — DoS, Man-in-the-Middle, SQL Injection",
    difficulty: "Intermediate",
    summary: "Three attack patterns that show up constantly across almost every area of cybersecurity.",
    animation: "handshake",
    compareData: {
      exchange: {
        partyA: "Attacker",
        partyB: "Target",
        steps: [
          { label: "floods / intercepts / injects", direction: "right", color: "var(--amber)" },
          { label: "system breaks, leaks, or misbehaves", direction: "left", color: "var(--signal)" }
        ]
      }
    },
    content: {
      basic: `
        <p>Three attack types come up again and again in cybersecurity, and it's worth knowing each one clearly:</p>
        <ul>
          <li><strong>Denial of Service (DoS)</strong> — flooding a system with so much traffic or so many requests that real users can't use it anymore. A <strong>DDoS</strong> (Distributed DoS) does this using many computers at once.</li>
          <li><strong>Man-in-the-Middle (MITM)</strong> — an attacker secretly sits between two parties communicating, able to read or even change the data passing between them, without either side noticing.</li>
          <li><strong>SQL Injection</strong> — sneaking malicious database commands into a website's input field (like a search box), tricking the website's database into running commands it shouldn't.</li>
        </ul>
      `,
      intermediate: `
        <p>DoS attacks directly target <strong>availability</strong> — they don't need to steal or change any data, just overwhelm the system so it can't respond to legitimate requests. MITM attacks often target <strong>confidentiality</strong> (reading private data) and sometimes <strong>integrity</strong> (changing it in transit), which is exactly why encryption like HTTPS matters — it stops an attacker in the middle from being able to read or usefully tamper with the data even if they intercept it.</p>
        <p>SQL Injection happens when a website trusts user input too much — it takes what you typed and pastes it directly into a database command, instead of treating it as pure data. A classic example: typing something like <code>' OR '1'='1</code> into a login box can trick a poorly-written system into logging you in without a real password.</p>
      `,
      advanced: `
        <p>Defenses map directly to each attack type. Against DoS: rate limiting, traffic filtering, and content delivery networks that absorb large traffic spikes before they reach the real server. Against MITM: strong encryption (HTTPS/TLS) and certificate validation, so a device can verify it's really talking to the server it thinks it is. Against SQL Injection: <strong>parameterized queries</strong> (also called prepared statements), which keep user input strictly separated from the actual database command structure, so malicious input can never be interpreted as a command.</p>
        <p>Notice the pattern: none of these defenses is "one magic tool." Each attack type has a specific root cause, and the fix addresses that root cause directly — which is a good general lesson for how security defenses are actually designed.</p>
      `
    },
    quiz: [
      { q: "What is the main goal of a Denial of Service (DoS) attack?", options: ["To steal passwords", "To overwhelm a system so real users can't use it", "To secretly read encrypted data", "To install ransomware"], correct: 1, explain: "DoS attacks flood a system with traffic or requests specifically to make it unavailable to legitimate users." },
      { q: "In a Man-in-the-Middle attack, what is the attacker doing?", options: ["Flooding a server with traffic", "Secretly sitting between two communicating parties to read or alter their data", "Guessing passwords repeatedly", "Scanning for open ports"], correct: 1, explain: "A MITM attacker secretly intercepts communication between two parties, potentially reading or changing the data." },
      { q: "What is the main defense against SQL Injection?", options: ["Using a firewall only", "Parameterized queries, which keep user input separate from actual database commands", "Encrypting the website's homepage", "Blocking all user input entirely"], correct: 1, explain: "Parameterized queries ensure user input is always treated as data, never as part of the executable database command, which prevents injection." }
    ]
  },

  {
    id: "security-mindset",
    section: "Human & Network Defenses",
    number: 10,
    title: "Thinking Like a Defender — Least Privilege & Defense in Depth",
    difficulty: "Intermediate",
    summary: "Two simple principles that quietly shape almost every good security decision.",
    animation: "layer-stack",
    compareData: {
      layersNumbered: false,
      layers: [
        { name: "Perimeter", detail: "Firewall, network edge defenses" },
        { name: "Network", detail: "Segmentation, monitoring" },
        { name: "System", detail: "Patching, hardening, antivirus" },
        { name: "Application", detail: "Secure coding, input validation" },
        { name: "Data", detail: "Encryption, access control, backups" }
      ]
    },
    content: {
      basic: `
        <p>Two ideas quietly show up behind almost every good security decision:</p>
        <ul>
          <li><strong>Principle of Least Privilege</strong> — give people (and programs) only the exact access they need to do their job, nothing more. A cashier doesn't need admin access to the whole store's finances.</li>
          <li><strong>Defense in Depth</strong> — use multiple layers of protection, so if one layer fails, others are still there to catch the problem. Like a castle with a moat, walls, and guards — not just one lock on the front door.</li>
        </ul>
        <p>Neither of these is one specific tool — they're mindsets that guide how everything else gets designed.</p>
      `,
      intermediate: `
        <p>Least privilege limits the damage a mistake or a compromised account can cause. If an employee's account only has access to what they actually need, then even if an attacker steals that account, the damage they can do is limited to that small slice of access — rather than the whole company's systems.</p>
        <p>Defense in depth accepts an important, humbling fact: no single security control is perfect. Firewalls get misconfigured, passwords get leaked, employees get tricked. By stacking multiple independent layers, one failure doesn't automatically mean total compromise — an attacker has to defeat several defenses in a row, not just one.</p>
      `,
      advanced: `
        <p>These two principles work together well in real architecture design. <strong>Network segmentation</strong> is essentially least privilege applied to network access — splitting a network into smaller zones so that compromising one part (say, a guest Wi-Fi network) doesn't automatically give an attacker a path into sensitive internal systems.</p>
        <p>In modern security thinking, this has evolved further into <strong>Zero Trust</strong> — an approach that assumes no user or device should be automatically trusted just because it's "inside" the network perimeter. Every request gets verified on its own merits, continuously, rather than trusting someone simply because they got past the front gate once. It's really least privilege and defense in depth taken to their logical conclusion.</p>
      `
    },
    quiz: [
      { q: "What does the 'Principle of Least Privilege' mean?", options: ["Give everyone full admin access for convenience", "Give people and programs only the access they actually need to do their job", "Only trust the most senior employees", "Remove all access controls entirely"], correct: 1, explain: "Least privilege means limiting access strictly to what's actually necessary, reducing potential damage if that access is misused or stolen." },
      { q: "What is the core idea behind 'Defense in Depth'?", options: ["Relying on one very strong security tool", "Using multiple independent layers of protection, so one failure doesn't mean total compromise", "Only defending the most obvious entry point", "Avoiding all security tools to reduce cost"], correct: 1, explain: "Defense in depth stacks multiple layers, so an attacker has to get through several independent defenses, not just one." },
      { q: "How does the 'Zero Trust' approach relate to least privilege and defense in depth?", options: ["It replaces both ideas with a single firewall rule", "It applies both ideas continuously, verifying every request instead of trusting anything just because it's 'inside' the network", "It removes the need for authentication entirely", "It only applies to cloud systems, never on-premise ones"], correct: 1, explain: "Zero Trust extends least privilege and defense in depth by continuously verifying every request, rather than automatically trusting anything already inside the network." }
    ]
  },

  // ============================================================
  // SECTION 5: PYTHON FOR SECURITY
  // ============================================================
  {
    id: "why-python-for-security",
    section: "Python for Security",
    number: 11,
    title: "Why Python Is a Security Analyst's Favorite Tool",
    difficulty: "Basic",
    summary: "You don't need to be a professional programmer — a little Python goes a long way in security work.",
    animation: "handshake",
    compareData: {
      exchange: {
        partyA: "Repetitive Task",
        partyB: "Python Script",
        steps: [
          { label: "boring, error-prone by hand", direction: "right", color: "var(--amber)" },
          { label: "written once, run instantly, every time", direction: "left", color: "var(--signal)" }
        ]
      }
    },
    content: {
      basic: `
        <p>Python is the most widely used programming language in cybersecurity — not because it's the fastest, but because it's <strong>simple to read and quick to write</strong>. A short Python script can check hundreds of passwords, scan a list of websites, or search log files for suspicious activity in seconds, work that would take a person hours to do by hand.</p>
        <p>You don't need to become a professional software developer. Most security scripting is small, focused programs — a few dozen lines that do one specific job well.</p>
      `,
      intermediate: `
        <p>Python has a huge collection of ready-made libraries that security work relies on directly: <code>hashlib</code> for hashing passwords, <code>socket</code> for talking to networks directly, <code>requests</code> for interacting with websites, and specialized libraries like <code>scapy</code> for building and inspecting network packets. This means you rarely start from zero — you're usually combining existing building blocks.</p>
        <p>This is also why so many well-known security tools (like parts of Metasploit's tooling, or many custom scanners) are written in Python — it's fast enough to build with, and other security professionals can read and modify your code easily.</p>
      `,
      advanced: `
        <p>In professional security roles, Python scripting shows up constantly in practical, everyday ways: automating repetitive tasks (checking hundreds of servers for a specific vulnerability), parsing huge log files to find the "needle in the haystack," building small proof-of-concept tools to demonstrate a vulnerability responsibly, and gluing different security tools together so their output can be automatically compared or combined.</p>
        <p>You already have a real head start here — the <code>hashlib</code>, <code>os</code>, and <code>sys</code> modules you've already used, and a project like a password manager using SHA-256 hashing, are the exact same building blocks security scripting relies on. The topics ahead simply point those same skills at security-specific problems.</p>
      `
    },
    quiz: [
      { q: "Why is Python so popular in cybersecurity work specifically?", options: ["It's the only language that can run on Linux", "It's simple to read and write, and has ready-made libraries for common security tasks", "It's required by law for security tools", "It only works with antivirus software"], correct: 1, explain: "Python's readability and its large collection of existing libraries make it fast to build small, focused security tools with." },
      { q: "What kind of tasks does Python scripting typically handle in security work?", options: ["Only designing company logos", "Repetitive tasks like checking many systems, parsing logs, and building small proof-of-concept tools", "Physically repairing broken hardware", "Replacing the need for firewalls entirely"], correct: 1, explain: "Python is mainly used to automate repetitive, time-consuming tasks that would be slow and error-prone to do manually." },
      { q: "Which Python module is commonly used for hashing data, like passwords?", options: ["socket", "hashlib", "tkinter", "turtle"], correct: 1, explain: "hashlib provides hashing functions (like SHA-256) commonly used to store passwords securely instead of as plain text." }
    ]
  },

  {
    id: "hashing-with-python",
    section: "Python for Security",
    number: 12,
    title: "Hashing Data with Python's hashlib",
    difficulty: "Intermediate",
    summary: "The same one-way scrambling idea from Encryption Basics — now as a few lines of real code.",
    animation: "layer-stack",
    compareData: {
      layersNumbered: true,
      layers: [
        { name: "Input text", detail: "e.g. a password: \"mypassword123\"" },
        { name: "hashlib.sha256()", detail: "One-way hashing function" },
        { name: "Hash output", detail: "Fixed-length scrambled result, e.g. \"ef92b778...\"" }
      ]
    },
    content: {
      basic: `
        <p>Earlier, in <em>Encryption Basics</em>, you learned that well-designed systems store a <strong>hash</strong> of a password instead of the real password. In Python, this takes just a few lines using the built-in <code>hashlib</code> module:</p>
        <pre style="background:var(--bg-elevated);padding:14px 16px;border-radius:8px;overflow-x:auto;"><code>import hashlib

password = "mypassword123"
hashed = hashlib.sha256(password.encode()).hexdigest()
print(hashed)</code></pre>
        <p>Running this always produces the exact same scrambled result for the exact same input — but there's no way to reverse it back into the original password just by looking at the hash.</p>
      `,
      intermediate: `
        <p>This "same input always gives the same output" property is exactly how login systems check your password without ever storing it. When you log in, the system hashes what you just typed and compares that new hash to the one stored from when you signed up. If they match, you typed the right password — the system never needed to store or even look at your actual password to check it.</p>
        <p>You may have already built something close to this: a password manager using SHA-256 hashing is doing precisely this pattern — hash the input, compare hashes, never store the raw password.</p>
      `,
      advanced: `
        <p>In real production systems, plain <code>hashlib.sha256()</code> alone isn't quite enough for passwords specifically, because it's fast — which sounds good, but actually helps an attacker who's trying millions of password guesses per second against a stolen hash database. That's why real systems use slower, purpose-built password hashing functions like <strong>bcrypt</strong> or <strong>Argon2</strong>, which are deliberately slow and also add a random <strong>salt</strong> (extra random data mixed in per-user) so two users with the same password don't end up with identical hashes.</p>
        <p>Plain SHA-256 (what <code>hashlib</code> gives you directly) is still exactly the right tool for other jobs though — like verifying a downloaded file hasn't been tampered with, or fingerprinting data for integrity checks, where speed is actually a feature, not a weakness.</p>
      `
    },
    quiz: [
      { q: "What happens if you hash the exact same input twice with hashlib.sha256()?", options: ["You get a different result each time", "You get the exact same result both times", "It throws an error the second time", "The password is automatically decrypted"], correct: 1, explain: "Hashing is deterministic — the same input always produces the same hash output, which is what makes password checking possible without storing the real password." },
      { q: "Why isn't plain hashlib.sha256() ideal for storing passwords in a real production system?", options: ["It's too slow to be practical", "It's very fast, which actually helps an attacker guessing millions of passwords against a stolen hash database", "It doesn't work on Linux", "hashlib cannot hash text at all"], correct: 1, explain: "SHA-256's speed is a downside for password storage specifically, since it makes brute-force guessing against stolen hashes much faster for an attacker." },
      { q: "What is a 'salt' in password hashing?", options: ["A type of encryption key", "Random extra data mixed into each password before hashing, so identical passwords don't produce identical hashes", "A firewall setting", "A Python error message"], correct: 1, explain: "A salt adds randomness per-user, so even if two people use the same password, their stored hashes look completely different." }
    ]
  },

  {
    id: "simple-port-scanner",
    section: "Python for Security",
    number: 13,
    title: "Building a Simple Port Scanner in Python",
    difficulty: "Intermediate",
    summary: "Using the socket module to check which doors (ports) are open on a machine you own or have permission to test.",
    animation: "topology",
    compareData: {
      diagrams: [ { label: "Scanning ports one by one", draw: "tree" } ]
    },
    content: {
      basic: `
        <p>A <strong>port scanner</strong> checks a computer to see which network "doors" (ports) are open and listening for connections. Python's built-in <code>socket</code> module can do this in a simple loop:</p>
        <pre style="background:var(--bg-elevated);padding:14px 16px;border-radius:8px;overflow-x:auto;"><code>import socket

target = "127.0.0.1"   # only scan systems you own or have permission to test
for port in range(20, 100):
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.settimeout(0.3)
    result = s.connect_ex((target, port))
    if result == 0:
        print(f"Port {port} is open")
    s.close()</code></pre>
        <p>This tries to connect to each port in a range, one at a time, and reports back the ones that respond.</p>
      `,
      intermediate: `
        <p>This is exactly what real tools like Nmap do at a basic level, just far more optimized and feature-rich. Writing your own simple version is a great way to actually understand what's happening underneath a professional tool, instead of just clicking a button and trusting the output.</p>
        <p><strong>This one point matters more than the code itself:</strong> scanning a system you don't own or don't have written permission to test is illegal in most places, even if you mean no harm. Always scan only your own machines, or systems inside a legal practice environment (like Hack The Box, TryHackMe, or a lab you've set up yourself).</p>
      `,
      advanced: `
        <p>The simple loop above is a "connect scan" — it completes a full TCP handshake with every port, which is slow and easy for a target to log. Professional scanners like Nmap default to a faster "SYN scan," which sends only the first handshake packet and never completes the connection, making it quicker and quieter, though it requires lower-level network access than a beginner script typically has.</p>
        <p>Beyond scanning, this same <code>socket</code> foundation is what lets you build far more useful security tooling later — simple network clients/servers for testing, tools that check whether a specific service is actually running as expected, or scripts that automatically verify a fix was deployed correctly across many machines at once.</p>
      `
    },
    quiz: [
      { q: "What does a port scanner check?", options: ["Which passwords are weak", "Which network ports on a target are open and accepting connections", "How much disk space is free", "Which files are encrypted"], correct: 1, explain: "A port scanner checks a range of ports to see which ones respond, telling you which services might be running and reachable." },
      { q: "Which Python module was used to build the simple port scanner in this topic?", options: ["hashlib", "socket", "turtle", "tkinter"], correct: 1, explain: "The socket module lets Python create network connections directly, which is what the scanner uses to test each port." },
      { q: "Why is it important to only scan systems you own or have explicit permission to test?", options: ["It's just a matter of politeness", "Scanning systems without permission is illegal in most places, even without causing damage", "Scanners don't work on other people's systems", "Permission is only needed for scanning government systems"], correct: 1, explain: "Unauthorized scanning is illegal in most jurisdictions regardless of intent, which is why practicing only on your own systems or legal lab environments matters." }
    ]
  }

  // ---------------------------------------------------------
  // ALL 13 CORE SECURITY CONCEPTS TOPICS COMPLETE (5 sections).
  // Follows the exact same shape as the Networking/Linux tracks,
  // with its own array/function names so all tracks can load
  // side-by-side without clashing.
  // ---------------------------------------------------------
];

// Helper: get a topic by its id (used by topic.html for Security track)
function getSecurityTopicById(id) {
  return SECURITY_TOPICS.find(t => t.id === id);
}

// Helper: get topics grouped by section (used by security.html)
function getSecurityTopicsBySection() {
  const sections = {};
  SECURITY_TOPICS.forEach(t => {
    if (!sections[t.section]) sections[t.section] = [];
    sections[t.section].push(t);
  });
  return sections;
}

// Helper: get next/previous topic for navigation arrows
function getAdjacentSecurityTopics(id) {
  const index = SECURITY_TOPICS.findIndex(t => t.id === id);
  return {
    prev: index > 0 ? SECURITY_TOPICS[index - 1] : null,
    next: index < SECURITY_TOPICS.length - 1 ? SECURITY_TOPICS[index + 1] : null
  };
}
