// ============================================================
// EASYTOLEARN — Python for Security Topics Data (PYTHON TRACK)
// Same shape as the other track data files, with its own
// array/function names so all tracks can load together
// without clashing.
// Written in simple, plain English on purpose — beginner first.
// ============================================================

const PYTHON_TOPICS = [

  {
    id: "why-python-for-security",
    section: "Python for Security",
    number: 1,
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
    number: 2,
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
    number: 3,
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
  // ALL 3 PYTHON FOR SECURITY TOPICS COMPLETE.
  // More topics can be added here later following the same
  // shape as the other tracks.
  // ---------------------------------------------------------
];

// Helper: get a topic by its id (used by topic.html for Python track)
function getPythonTopicById(id) {
  return PYTHON_TOPICS.find(t => t.id === id);
}

// Helper: get topics grouped by section (used by python.html)
function getPythonTopicsBySection() {
  const sections = {};
  PYTHON_TOPICS.forEach(t => {
    if (!sections[t.section]) sections[t.section] = [];
    sections[t.section].push(t);
  });
  return sections;
}

// Helper: get next/previous topic for navigation arrows
function getAdjacentPythonTopics(id) {
  const index = PYTHON_TOPICS.findIndex(t => t.id === id);
  return {
    prev: index > 0 ? PYTHON_TOPICS[index - 1] : null,
    next: index < PYTHON_TOPICS.length - 1 ? PYTHON_TOPICS[index + 1] : null
  };
}
