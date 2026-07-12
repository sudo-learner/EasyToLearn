// ============================================================
// EasyToLearn — Python for Security Topics Data (PYTHON TRACK ONLY)
// Same shape as js/topics-data.js (Networking), js/linux-topics-data.js,
// and js/foundation-topics-data.js, but with its own array and helper
// function names so all four tracks can load on the same page together.
// Written in plain English, beginner-first, security-flavored examples.
// ============================================================

const PYTHON_TOPICS = [

  // ============================================================
  // SECTION 1: PYTHON BASICS FOR SECURITY FOLKS
  // ============================================================
  {
    id: "why-python-security",
    section: "Python Basics for Security Folks",
    number: 1,
    title: "Why Python for Security?",
    difficulty: "Basic",
    summary: "Python is the go-to language in security work because it's fast to write and has huge libraries for networking, parsing, and automation.",
    animation: "compare-toggle",
    compareData: {
      labelA: "Python", labelB: "Bash / Shell",
      descA: "A full programming language — great for parsing complex data, talking to APIs, building real tools, and reusing code across projects.",
      descB: "Great for quick one-liners and chaining commands together, but gets messy fast for anything with real logic, data structures, or error handling."
    },
    content: {
      basic: `<p><strong>Python</strong> is a programming language that reads almost like plain English, which makes it quick to learn and quick to write. In security work, you're constantly needing small custom tools — a script to scan a list of IPs, a script to parse thousands of log lines, a script to check if passwords are weak. Python lets you build these fast.</p>
      <p>It's not the only option — security professionals also use Bash for quick terminal tasks — but Python is the default choice when a task needs real logic, needs to talk to the network, or needs to be reused later.</p>`,
      intermediate: `<p>Python's biggest advantage for security work is its library ecosystem. Need to talk to a website? The <code>requests</code> library does it in two lines. Need to build or read network packets? <code>scapy</code> handles it. Need cryptography? The <code>cryptography</code> library and built-in <code>hashlib</code> cover almost everything. This means you're rarely starting from scratch — most of the hard parts have already been solved by someone else and packaged into a library you can install.</p>`,
      advanced: `<p>Nearly every major security tool category has a Python foundation somewhere: exploit development frameworks, malware analysis sandboxes, SOC automation playbooks, and CTF solving scripts are all commonly written in Python. This isn't an accident — Python's readability makes tools easier to review and trust (important when the tool itself touches sensitive systems), and its "batteries included" standard library means a security engineer can prototype something useful in minutes rather than hours. Throughout this track, every topic ties a Python concept directly to a real security use case.</p>`
    },
    quiz: [
      { q: "What is the main reason Python is popular in security work?", options: ["It's the only language that can connect to the internet", "It reads clearly and has huge libraries for networking, parsing, and automation", "It's required by law for security tools", "It only runs on Linux"], correct: 1, explain: "Python's readability and rich library ecosystem (requests, scapy, hashlib, cryptography, etc.) make it fast to build custom security tools." },
      { q: "When might Bash still be a better choice than Python?", options: ["Never — Python always wins", "For quick one-line terminal tasks and chaining simple commands", "For any task involving more than one line of code", "For building websites"], correct: 1, explain: "Bash is great for fast, simple command-line tasks. Python becomes the better choice once you need real logic, data structures, or error handling." },
      { q: "What does it mean that Python has a rich 'library ecosystem'?", options: ["Python comes with physical books", "Other people have already written reusable code you can install and use, instead of building everything from scratch", "Python is only used in libraries", "You need a library card to use Python"], correct: 1, explain: "Libraries are pre-written, reusable code. Instead of writing your own networking or cryptography code, you install a library like requests or hashlib and use it directly." }
    ]
  },

  {
    id: "variables-and-data-types",
    section: "Python Basics for Security Folks",
    number: 2,
    title: "Variables & Data Types",
    difficulty: "Basic",
    summary: "Variables store values; Python's core data types — strings, integers, floats, and booleans — are the building blocks of every script you'll write.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "str", desc: "Text, in quotes — e.g. \"192.168.1.1\" or \"admin\". Used constantly for IPs, usernames, log lines, and file paths." },
        { label: "int", desc: "A whole number — e.g. 443 or 22. Used for port numbers, counts, and loop indexes." },
        { label: "float", desc: "A decimal number — e.g. 3.14 or 0.5. Used for things like time durations or percentages." },
        { label: "bool", desc: "True or False. Used constantly for checks like is_valid or is_admin." }
      ]
    },
    content: {
      basic: `<p>A <strong>variable</strong> is a named box that holds a value, created with a simple assignment: <code>port = 443</code>. Python has a few core data types you'll use constantly: <strong>strings</strong> (text, like an IP address or username), <strong>integers</strong> (whole numbers, like a port), <strong>floats</strong> (decimal numbers), and <strong>booleans</strong> (True or False, used for yes/no checks).</p>
      <p>Unlike some languages, Python figures out the type automatically — you never have to declare it yourself.</p>`,
      intermediate: `<p>Because Python is <strong>dynamically typed</strong>, the same variable name can hold a string one moment and an integer the next — Python just tracks the type behind the scenes. You can always check a variable's current type with the built-in <code>type()</code> function, which is genuinely useful when debugging a script that's behaving unexpectedly (a classic bug: trying to do math on a port number that was accidentally read in as a string from user input).</p>`,
      advanced: `<p>This flexibility is convenient but is also a real source of bugs in security tooling specifically — data coming in from the network, a file, or a command-line argument almost always arrives as a <strong>string</strong>, even if it "looks like" a number. Forgetting to convert a string port number with <code>int()</code> before comparing it to another integer is one of the most common beginner mistakes when writing scanning or parsing scripts, and it fails silently rather than crashing loudly in some cases — always a good habit to validate and convert input types explicitly.</p>`
    },
    quiz: [
      { q: "Which data type would you use to store a port number like 8080?", options: ["str", "int", "bool", "float"], correct: 1, explain: "Port numbers are whole numbers, so they're stored as an int (integer)." },
      { q: "What does it mean that Python is 'dynamically typed'?", options: ["Variables must be declared with a fixed type before use", "A variable's type is figured out automatically and can change as the script runs", "Only numbers can be stored in variables", "Types change randomly at runtime"], correct: 1, explain: "Python automatically figures out and tracks a variable's type — you never declare it, and the same variable name could later hold a different type of value." },
      { q: "Why can data read from a file or the network cause type-related bugs?", options: ["It always arrives already converted to the right type", "It usually arrives as a string, even if it looks like a number, so it needs explicit conversion", "Python cannot read data from files", "Strings and integers are treated identically in Python"], correct: 1, explain: "Data from files, network input, or user input typically arrives as text (a string) — even something like a port number — so it often needs to be explicitly converted with int() before being used as a number." }
    ]
  },

  {
    id: "control-flow",
    section: "Python Basics for Security Folks",
    number: 3,
    title: "Control Flow: if/else & Loops",
    difficulty: "Basic",
    summary: "if/else statements make decisions, and loops repeat work — together they're how a script scans a whole list of ports or IPs instead of just one.",
    animation: "dns-lookup",
    compareData: {
      chain: ["Start Loop", "Check Condition", "Run the Block", "Update / Next Item", "Repeat or Exit"]
    },
    content: {
      basic: `<p><strong>if/else</strong> statements let a script make decisions: <code>if port == 22: print("SSH")</code>. <strong>Loops</strong> let a script repeat an action — a <code>for</code> loop runs once for every item in a list (like scanning every port in a range), and a <code>while</code> loop keeps running as long as a condition stays true.</p>
      <p>Together, these two ideas are what turn a script from "does one thing once" into "checks 65,000 ports automatically."</p>`,
      intermediate: `<p>A typical security script combines both: a <code>for</code> loop walks through a list of targets (IPs, ports, or file lines), and inside that loop an <code>if</code> statement decides what to do with each one — for example, only printing the port if the connection attempt succeeded. Python also has <code>elif</code> for checking multiple conditions in sequence, and loop keywords like <code>break</code> (stop the loop early) and <code>continue</code> (skip to the next item) that give you finer control.</p>`,
      advanced: `<p>Indentation is not just a style choice in Python — it's how the language defines which lines belong inside a loop or if-block, since there are no curly braces. This trips up a lot of newcomers moving from other languages, and inconsistent indentation is one of the most common sources of a <code>IndentationError</code>. In performance-sensitive security tooling (like scanning a large IP range), it's also worth knowing that Python's loops are relatively slow compared to compiled languages, which is why real-world scanning tools often combine loops with threading or use libraries with optimized internals rather than pure Python loops for very large jobs.</p>`
    },
    quiz: [
      { q: "What does a for loop let a script do?", options: ["Make a single yes/no decision", "Repeat an action once for every item in a list or range", "Store a single value", "Connect to a website"], correct: 1, explain: "A for loop repeats a block of code once for each item in a sequence — like running a check on every port in a range." },
      { q: "In Python, what determines which lines of code belong inside an if statement or loop?", options: ["Curly braces { }", "Semicolons", "Indentation (consistent spacing)", "Capital letters"], correct: 2, explain: "Python uses indentation, not curly braces, to define which lines are 'inside' a block like a loop or if-statement." },
      { q: "What does the continue keyword do inside a loop?", options: ["Stops the loop completely", "Skips the rest of the current iteration and moves to the next item", "Restarts the whole script", "Prints the current value"], correct: 1, explain: "continue skips whatever code comes after it for the current iteration and jumps straight to the next item in the loop." }
    ]
  },

  {
    id: "functions-and-modules",
    section: "Python Basics for Security Folks",
    number: 4,
    title: "Functions & Modules",
    difficulty: "Basic",
    summary: "Functions package reusable logic under a name; modules package related functions into files you can import — the basis of every tool and library.",
    animation: "encapsulation",
    compareData: {
      wraps: [
        { label: "x, y", color: "var(--signal)" },
        { label: "def add(x, y):", color: "var(--amber)" },
        { label: "return x + y", color: "#a78bfa" },
        { label: "result = add(2, 3)", color: "var(--paper)" }
      ]
    },
    content: {
      basic: `<p>A <strong>function</strong> is a named, reusable block of code: <code>def scan_port(ip, port):</code> defines one, and calling <code>scan_port("10.0.0.1", 22)</code> runs it with those specific values. Functions let you write a piece of logic once and reuse it everywhere, instead of copy-pasting the same code repeatedly.</p>
      <p>A <strong>module</strong> is just a Python file full of related functions that you can <code>import</code> into another script — this is exactly how libraries like <code>requests</code> or <code>hashlib</code> work.</p>`,
      intermediate: `<p>Functions take <strong>parameters</strong> (the values you pass in) and can send a result back with <code>return</code>. Good security scripts are usually broken into small functions with clear jobs — one function to connect to a target, one to parse the response, one to log the result — rather than one giant block of code. This makes scripts far easier to test, debug, and reuse in a different project later.</p>`,
      advanced: `<p>Python's module system is also how you organize a larger tool into multiple files: <code>from mytool.scanner import scan_port</code> imports a function from a specific file inside a package. Understanding imports matters for security specifically because malicious Python code often hides its real behavior inside an innocuous-looking imported module, and because dependency confusion attacks exploit the way Python resolves package names during import — a reminder that even "just importing a library" carries some trust assumptions about where that code came from.</p>`
    },
    quiz: [
      { q: "What is a function in Python?", options: ["A type of variable", "A named, reusable block of code you can call with specific values", "A file that stores data permanently", "A network connection"], correct: 1, explain: "A function packages a piece of logic under a name so you can run it repeatedly with different input values instead of rewriting the code each time." },
      { q: "What does the return keyword do inside a function?", options: ["Deletes the function", "Sends a result value back to whatever called the function", "Restarts the script", "Prints an error"], correct: 1, explain: "return sends a value back out of the function so it can be used elsewhere in the script, like storing it in a variable." },
      { q: "What is a module in Python?", options: ["A single variable", "A Python file containing related functions that can be imported into other scripts", "A type of loop", "A hardware component"], correct: 1, explain: "A module is a file of Python code — often full of related functions — that you can import and reuse in a different script, exactly how libraries like requests work." }
    ]
  },

  {
    id: "lists-dicts-sets",
    section: "Python Basics for Security Folks",
    number: 5,
    title: "Lists, Dictionaries & Sets",
    difficulty: "Basic",
    summary: "Lists hold ordered items, dictionaries hold labeled key-value pairs, and sets hold unique values — picking the right one makes security scripts far simpler.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "list", desc: "An ordered, changeable collection — e.g. open_ports = [22, 80, 443]. Great for scan results in the order you found them." },
        { label: "dict", desc: "Key-value pairs — e.g. {\"port\": 443, \"service\": \"https\"}. Great for looking things up by name instead of position." },
        { label: "set", desc: "An unordered collection of unique values — e.g. seen_ips = set(). Automatically removes duplicates, and checking membership is very fast." },
        { label: "tuple", desc: "Like a list, but unchangeable once created — e.g. (\"10.0.0.1\", 22). Good for fixed pairs like an IP-and-port combo." }
      ]
    },
    content: {
      basic: `<p>A <strong>list</strong> holds items in order: <code>open_ports = [22, 80, 443]</code>. A <strong>dictionary</strong> holds labeled pairs so you can look things up by name: <code>info = {"ip": "10.0.0.1", "os": "Linux"}</code> lets you get the IP with <code>info["ip"]</code>. A <strong>set</strong> holds unique values only — adding the same item twice has no effect, which is perfect for keeping a list of IPs you've already scanned without duplicates.</p>`,
      intermediate: `<p>Choosing the right structure has real performance implications. Checking whether a value exists in a <strong>set</strong> is extremely fast, even with millions of entries, while checking a <strong>list</strong> the same way gets slower as the list grows because Python has to check each item one by one. This matters directly in security scripts — for example, checking whether an IP address is on a huge blocklist is a textbook case for a set rather than a list.</p>`,
      advanced: `<p>Under the hood, Python dictionaries and sets are built on <strong>hash tables</strong> — the same underlying idea used in cryptographic hashing, just applied differently. This is why lookups are so fast (near-constant time) regardless of size, and it's also why dictionary keys must be <strong>hashable</strong> (unchangeable) types like strings, numbers, or tuples — you can't use a list as a dictionary key. Real-world tools like intrusion detection systems lean heavily on sets and dictionaries internally precisely because they need to check huge volumes of IPs, hashes, or signatures against known-bad lists in real time.</p>`
    },
    quiz: [
      { q: "Which data structure is best for storing a list of IPs you've already scanned, with no duplicates?", options: ["list", "set", "float", "string"], correct: 1, explain: "A set automatically removes duplicates and is very fast to check for membership — ideal for tracking already-seen IPs." },
      { q: "How do you look up a value in a dictionary?", options: ["By its position number only", "By its key", "Dictionaries can't be looked up, only lists can", "By guessing"], correct: 1, explain: "Dictionaries store key-value pairs, so you look up a value using its key, e.g. info[\"ip\"]." },
      { q: "Why is checking membership in a set faster than in a list, especially for large collections?", options: ["Sets are always smaller than lists", "Sets use hash tables internally, giving near-constant-time lookups regardless of size", "Lists don't support checking membership at all", "There's no real performance difference"], correct: 1, explain: "Sets (and dictionaries) are built on hash tables, so checking if something exists is very fast even with huge collections, unlike lists which check items one by one." }
    ]
  },

  {
    id: "files-and-exceptions",
    section: "Python Basics for Security Folks",
    number: 6,
    title: "Reading Files & Handling Errors",
    difficulty: "Basic",
    summary: "Reading files lets scripts process logs and wordlists; try/except lets a script survive errors gracefully instead of crashing mid-scan.",
    animation: "compare-toggle",
    compareData: {
      labelA: "Without try/except", labelB: "With try/except",
      descA: "One bad line, one closed connection, or one missing file crashes the entire script — including all the results you'd already gathered.",
      descB: "The script catches the specific error, logs it or skips that item, and keeps running through the rest of the job."
    },
    content: {
      basic: `<p>Python opens files with <code>with open("access.log") as f:</code>, which reads the file and automatically closes it when done — this pattern is used constantly for reading logs and wordlists. Errors ("exceptions") happen when something goes wrong — a file doesn't exist, a network connection drops. Wrapping risky code in <code>try:</code> / <code>except:</code> lets your script catch that error and keep going instead of crashing.</p>`,
      intermediate: `<p>Good error handling names the specific exception you expect, like <code>except FileNotFoundError:</code> or <code>except ConnectionRefusedError:</code>, rather than catching everything blindly with a bare <code>except:</code>. This matters because a bare except can hide real bugs — if your script has a typo, catching all errors silently might make it look like it's "working" when it's actually failing on every single item.</p>`,
      advanced: `<p>In security tooling specifically, exception handling is often the difference between a scanner that completes a 10,000-host job and one that dies on host #4 because of one unexpected timeout. A common pattern is to catch expected network exceptions (timeouts, refused connections) per-target inside the loop, log them, and continue — while still letting truly unexpected errors surface so you notice real bugs. It's also worth knowing that overly broad exception handling can mask security-relevant failures, like a certificate validation error being silently swallowed during an HTTPS request, which is a real category of vulnerability in poorly written tools.</p>`
    },
    quiz: [
      { q: "What does the with open(...) as f: pattern do?", options: ["Opens a network socket", "Opens a file and automatically closes it when the block finishes", "Creates a new variable type", "Deletes a file"], correct: 1, explain: "The with statement opens the file and ensures it gets closed automatically afterward, even if an error happens inside the block." },
      { q: "Why is catching a specific exception like FileNotFoundError better than a bare except: that catches everything?", options: ["It's not better, they're identical", "A bare except can silently hide real bugs by catching errors you didn't anticipate", "Specific exceptions run faster", "Bare except is not allowed in Python"], correct: 1, explain: "Catching every possible error with a bare except can mask genuine bugs in your code, making it look like the script 'works' when it's actually failing silently." },
      { q: "Why does error handling matter especially for a scanner checking thousands of hosts?", options: ["It doesn't matter for scanning tasks", "One unexpected error (like a timeout) could crash the entire job without it, losing all results gathered so far", "Error handling makes scans run slower with no benefit", "Scanners never encounter errors"], correct: 1, explain: "Without proper error handling, a single unexpected issue (like one host timing out) can crash the whole script, losing progress on everything else it already scanned." }
    ]
  },

  // ============================================================
  // SECTION 2: WORKING WITH TEXT & DATA
  // ============================================================
  {
    id: "string-manipulation",
    section: "Working with Text & Data",
    number: 7,
    title: "String Manipulation for Log Parsing",
    difficulty: "Basic",
    summary: "Splitting, slicing, and searching strings is how a script turns a raw log line into structured, usable information.",
    animation: "scale-zoom",
    compareData: {
      scales: [
        { label: "Character", desc: "A single letter or symbol, like 'A' or '4' — the smallest unit of a string.", r: 30 },
        { label: "Word/Token", desc: "A meaningful chunk, like an IP address or a status code, usually separated by spaces.", r: 55 },
        { label: "Line", desc: "One full log entry — a timestamp, an IP, a request, and a status code, all together.", r: 85 },
        { label: "File", desc: "Thousands or millions of lines — the whole log file a script processes in one pass.", r: 120 }
      ]
    },
    content: {
      basic: `<p>A log line is just a string — text. Python gives you simple tools to pull it apart: <code>.split(" ")</code> breaks a line into pieces wherever there's a space, <code>.strip()</code> removes extra whitespace from the ends, and <code>"error" in line</code> checks whether a word appears anywhere in the string. These three tools alone can turn a messy raw log file into structured data your script can actually work with.</p>`,
      intermediate: `<p>Strings also support <strong>slicing</strong> — <code>line[0:19]</code> grabs a fixed-position chunk, like the timestamp at the start of a standardized log format. Combined with <code>.split()</code>, you can pull a specific field out of a structured line, like grabbing just the IP address or the HTTP status code from an Apache access log entry, without needing anything more complex than built-in string methods.</p>`,
      advanced: `<p>For log formats with any real variation — different field orders, optional sections, quoted strings containing spaces — simple <code>.split()</code> starts to break down, which is exactly where regular expressions (covered next) take over. But it's worth appreciating how far plain string methods get you: they're faster than regex for simple fixed-position or fixed-delimiter parsing, and far easier for a teammate to read and maintain six months later. A common real-world pattern in log analysis tools is to use fast string methods for an initial rough filter (like checking if "ERROR" appears in a line at all) before running a more expensive regex only on the lines that matched.</p>`
    },
    quiz: [
      { q: "What does the .split(\" \") method do to a string?", options: ["Deletes all spaces", "Breaks the string into a list of pieces wherever a space appears", "Converts the string to uppercase", "Counts the number of characters"], correct: 1, explain: "split(\" \") breaks a string into a list of separate pieces at every space, which is a common first step in parsing a log line." },
      { q: "What does string slicing, like line[0:19], do?", options: ["Deletes characters 0 through 19", "Grabs a specific chunk of the string by position", "Converts the string to a number", "Reverses the string"], correct: 1, explain: "Slicing grabs a specific range of characters from a string by position — useful for pulling a fixed-position field like a timestamp." },
      { q: "Why might a script check if 'ERROR' appears in a line before running a more complex regex on it?", options: ["Regex can't be used on log files", "A quick string check is faster and can filter out most lines before spending time on a more expensive regex", "It's required by Python syntax", "There's no benefit to doing this"], correct: 1, explain: "Simple string checks are fast. Doing a quick check first and only running expensive regex matching on lines that pass it is a common performance optimization." }
    ]
  },

  {
    id: "regex-basics",
    section: "Working with Text & Data",
    number: 8,
    title: "Regular Expressions for Pattern Matching",
    difficulty: "Intermediate",
    summary: "Regex describes text patterns in a compact syntax — perfect for pulling IPs, emails, or timestamps out of messy, unpredictable text.",
    animation: "layer-stack",
    compareData: {
      layersNumbered: false,
      layers: [
        { name: "Literal characters", detail: "Exact text to match, like the digits and dots in an IP pattern" },
        { name: "Character classes", detail: "A set of allowed characters, e.g. [0-9] means any single digit" },
        { name: "Quantifiers", detail: "How many times something repeats, e.g. {1,3} means 1 to 3 times" },
        { name: "Anchors & groups", detail: "^ and $ pin a match to the start/end of a line; ( ) captures a piece of the match" }
      ]
    },
    content: {
      basic: `<p>A <strong>regular expression</strong> (regex) is a compact pattern that describes what text you're looking for — instead of writing out every possible variation by hand. Python's built-in <code>re</code> module uses them: <code>re.findall(r"\\d+\\.\\d+\\.\\d+\\.\\d+", text)</code> pulls every IP-address-shaped string out of a block of text in one line.</p>
      <p>Regex is one of the most useful skills for log analysis, since real logs are messy and inconsistent, but the patterns you're hunting for (IPs, emails, error codes) are usually structured.</p>`,
      intermediate: `<p>Regex is built from a few core building blocks: character classes like <code>\\d</code> (any digit) or <code>\\w</code> (any letter/number), quantifiers like <code>+</code> (one or more) or <code>{1,3}</code> (between 1 and 3), and anchors like <code>^</code> (start of line) and <code>$</code> (end of line). Parentheses create <strong>capture groups</strong>, letting you pull out just the part of the match you care about — like capturing only the port number from a full "host:port" match.</p>`,
      advanced: `<p>Regex has real limitations worth knowing: it's genuinely bad at parsing deeply nested structures like JSON or HTML (people joke that "you cannot parse HTML with regex" for good reason), and badly written patterns can suffer from <strong>catastrophic backtracking</strong> — a performance bug where certain inputs make a regex take exponentially longer to process, which is an actual denial-of-service vector called ReDoS (Regular Expression Denial of Service) if user-controlled input reaches a vulnerable pattern. For structured formats, a real parser (like Python's <code>json</code> module) is almost always the better tool; regex shines for extracting patterns out of otherwise unstructured free text.</p>`
    },
    quiz: [
      { q: "What is a regular expression used for?", options: ["Encrypting data", "Describing and matching text patterns, like finding all IP addresses in a block of text", "Connecting to a network socket", "Storing key-value pairs"], correct: 1, explain: "Regex is a compact pattern language for describing what text to search for, ideal for pulling structured pieces (IPs, emails, timestamps) out of messy text." },
      { q: "What does a capture group, written with parentheses ( ), do in a regex?", options: ["It deletes that part of the match", "It lets you pull out just that specific part of the overall match", "It repeats the pattern infinitely", "It comments out that part of the pattern"], correct: 1, explain: "Parentheses create a capture group, letting you extract a specific piece of the match — like just the port number from a full host:port pattern." },
      { q: "What is 'ReDoS' (Regular Expression Denial of Service)?", options: ["A type of encryption attack", "A performance bug where certain inputs make a badly written regex take exponentially longer to process", "A method for writing faster regex", "A built-in Python security feature"], correct: 1, explain: "ReDoS happens when a poorly constructed regex pattern suffers catastrophic backtracking on certain inputs, causing it to take an extremely long time — a real denial-of-service risk if user input reaches it." }
    ]
  },

  {
    id: "json-data",
    section: "Working with Text & Data",
    number: 9,
    title: "Working with JSON",
    difficulty: "Basic",
    summary: "JSON is the standard format APIs use to send structured data; Python's json module converts it into native lists and dictionaries in one line.",
    animation: "encapsulation",
    compareData: {
      wraps: [
        { label: "\"active\"", color: "var(--signal)" },
        { label: "\"status\": \"active\"", color: "var(--amber)" },
        { label: "{\"status\": \"active\"}", color: "#a78bfa" },
        { label: "{\"host\": {...}, \"ports\": [...]}", color: "var(--paper)" }
      ]
    },
    content: {
      basic: `<p><strong>JSON</strong> (JavaScript Object Notation) is a text format for structured data that looks a lot like a Python dictionary: <code>{"ip": "10.0.0.1", "open": true}</code>. Almost every modern API — including most security tools and threat intel feeds — sends and receives data in JSON. Python's built-in <code>json</code> module converts it instantly: <code>json.loads(text)</code> turns a JSON string into a real Python dictionary you can work with directly.</p>`,
      intermediate: `<p>JSON supports nesting — objects inside objects, and lists inside objects — which mirrors exactly how Python nests dictionaries and lists. This is why converting between the two is so seamless: <code>json.loads()</code> turns JSON text into Python objects, and <code>json.dumps()</code> does the reverse, turning a Python dictionary back into a JSON string, for example before sending it to an API.</p>`,
      advanced: `<p>When parsing JSON from an untrusted or external source (like a third-party threat intel API), it's worth being defensive: use <code>.get("key", default)</code> instead of <code>["key"]</code> so a missing field doesn't crash your script, and wrap the parse itself in a try/except for <code>json.JSONDecodeError</code>, since a malformed or unexpected response is common in the real world. Unlike Python's <code>pickle</code> module (which can execute arbitrary code when loading untrusted data), JSON parsing is safe by design — one reason it's the preferred format for data crossing a trust boundary.</p>`
    },
    quiz: [
      { q: "What does json.loads() do?", options: ["Saves a Python object to a file", "Converts a JSON text string into a Python dictionary or list", "Deletes JSON data", "Connects to a website"], correct: 1, explain: "json.loads() parses a JSON-formatted string and converts it into native Python objects, like dictionaries and lists." },
      { q: "Why is using .get(\"key\", default) safer than data[\"key\"] when parsing an API response?", options: ["There's no difference", ".get() won't crash the script if the key happens to be missing — it returns a default value instead", "data[\"key\"] is faster", ".get() only works with JSON, not Python dictionaries"], correct: 1, explain: ".get() returns a default value if the key doesn't exist, instead of raising an error like data[\"key\"] would if the key is missing." },
      { q: "Why is JSON generally considered safer to parse than Python's pickle format for untrusted data?", options: ["JSON is encrypted by default", "pickle can execute arbitrary code when loading data; JSON parsing cannot", "JSON files are always smaller", "There's no safety difference"], correct: 1, explain: "Python's pickle format can execute arbitrary code during deserialization, making it dangerous for untrusted data. JSON parsing doesn't execute code, making it safe by design." }
    ]
  },

  {
    id: "csv-structured-data",
    section: "Working with Text & Data",
    number: 10,
    title: "CSV & Structured Data",
    difficulty: "Basic",
    summary: "CSV is a simple row-and-column text format common for exporting scan results, asset lists, and reports — Python's csv module handles it safely.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "CSV", desc: "Simple rows and columns separated by commas — great for spreadsheets and simple tabular data like a list of hosts and open ports." },
        { label: "JSON", desc: "Nested key-value structure — better for complex, hierarchical data like a full scan report with sub-sections." },
        { label: "Plain text", desc: "Unstructured — flexible but requires manual parsing (string methods or regex) to extract any specific field." }
      ]
    },
    content: {
      basic: `<p><strong>CSV</strong> (comma-separated values) is a simple text format for tabular data — rows and columns, just like a spreadsheet: <code>ip,port,status</code> on one line, then a value for each on the next. Python's built-in <code>csv</code> module reads it properly, handling tricky cases like commas inside quoted fields, which a naive <code>.split(",")</code> would get wrong.</p>`,
      intermediate: `<p><code>csv.DictReader</code> is especially useful — it reads each row as a dictionary using the header row as keys, so instead of remembering "column 2 is the port," you just write <code>row["port"]</code>. This is the format most security tools export to by default (vulnerability scanners, asset inventories, phishing reports), because it opens cleanly in Excel or Google Sheets for people who aren't writing scripts.</p>`,
      advanced: `<p>When a CSV file might have come from an external or automated source, treat it with the same caution as any other untrusted input: watch out for a real vulnerability called <strong>CSV injection</strong>, where a cell value starting with <code>=</code>, <code>+</code>, <code>-</code>, or <code>@</code> can be interpreted as a formula by spreadsheet software when the file is later opened, potentially triggering unwanted actions. If you're generating CSV reports from user-controlled data, prefix risky-looking values with a character like a single quote to neutralize this before writing the file.</p>`
    },
    quiz: [
      { q: "What does csv.DictReader let you do?", options: ["Encrypt a CSV file", "Read each row as a dictionary, using the header row as the keys", "Convert CSV directly to a network packet", "Delete duplicate rows automatically"], correct: 1, explain: "csv.DictReader reads rows as dictionaries keyed by the column headers, so you can access fields by name like row[\"port\"] instead of by position." },
      { q: "Why is Python's built-in csv module better than a simple .split(\",\") for reading CSV files?", options: ["There's no real difference", "The csv module correctly handles tricky cases like commas that appear inside quoted fields", "split(\",\") is faster in every case", "CSV files can't contain commas"], correct: 1, explain: "A naive split(\",\") breaks on commas that appear inside a quoted field's value. The csv module correctly parses these edge cases." },
      { q: "What is 'CSV injection'?", options: ["A way to encrypt CSV files", "A vulnerability where cell values starting with symbols like = or + get interpreted as formulas when opened in spreadsheet software", "A method for compressing CSV files", "A type of network attack unrelated to files"], correct: 1, explain: "CSV injection happens when a cell value beginning with a formula-triggering character (like =) is interpreted as a formula by spreadsheet software, which can be exploited if the file is opened later." }
    ]
  },

  {
    id: "dates-and-timestamps",
    section: "Working with Text & Data",
    number: 11,
    title: "Working with Dates & Timestamps",
    difficulty: "Basic",
    summary: "Log timelines and incident timing depend on correctly parsing and comparing timestamps — Python's datetime module handles the tricky parts.",
    animation: "compare-toggle",
    compareData: {
      labelA: "Naive datetime", labelB: "Timezone-aware datetime",
      descA: "Just stores a date and time with no timezone attached — easy to work with, but risky when comparing logs from systems in different timezones.",
      descB: "Stores the date, time, AND timezone — safe to compare across systems anywhere in the world, but requires a bit more setup."
    },
    content: {
      basic: `<p>Python's <code>datetime</code> module handles dates and times: <code>datetime.strptime(text, "%Y-%m-%d %H:%M:%S")</code> converts a text timestamp from a log file into a real datetime object you can compare, sort, and do math with — like checking whether two events happened within five minutes of each other, which is a common step in tying together related log entries during an investigation.</p>`,
      intermediate: `<p>Once you have real <code>datetime</code> objects instead of plain strings, comparisons and subtraction just work: <code>event2_time - event1_time</code> gives you a <code>timedelta</code> (a duration) that you can check against a threshold — the basis of detecting things like "five failed logins within one minute," a classic brute-force detection rule covered later in this track.</p>`,
      advanced: `<p>The single biggest source of timestamp bugs in real security tooling is <strong>timezone confusion</strong>. A "naive" datetime (no timezone attached) assumes everything is in the same timezone, which quietly breaks the moment you're correlating logs from servers in different regions or comparing local log times against a UTC-based threat feed. The fix is to always work in <strong>timezone-aware</strong> datetimes and normalize everything to UTC before comparing — a boring-sounding practice that has genuinely caused real incident investigations to draw wrong conclusions when skipped.</p>`
    },
    quiz: [
      { q: "What does datetime.strptime() do?", options: ["Deletes a timestamp", "Converts a text string into a real datetime object Python can compare and do math with", "Encrypts a date", "Connects to a time server over the network"], correct: 1, explain: "strptime() parses a text timestamp (based on a format you specify) into a proper datetime object, which can then be compared, sorted, or subtracted." },
      { q: "What is the risk of using 'naive' datetimes (with no timezone attached) in security log analysis?", options: ["There is no risk", "Comparing logs from systems in different timezones can silently give wrong results", "Naive datetimes are always slower", "Python doesn't allow naive datetimes"], correct: 1, explain: "Naive datetimes assume everything is in the same timezone. Comparing naive timestamps from systems in different timezones can produce silently incorrect results." },
      { q: "What does subtracting two datetime objects give you in Python?", options: ["A string", "A timedelta representing the duration between them", "An error — datetimes can't be subtracted", "A boolean"], correct: 1, explain: "Subtracting one datetime from another gives a timedelta object representing the duration between them, useful for checking if events happened within a certain time window." }
    ]
  },

  {
    id: "argparse-cli",
    section: "Working with Text & Data",
    number: 12,
    title: "Command-Line Arguments with argparse",
    difficulty: "Basic",
    summary: "argparse turns a script into a proper command-line tool with named flags, help text, and input validation, instead of hardcoded values.",
    animation: "dns-lookup",
    compareData: {
      chain: ["Raw argv (text)", "argparse Parser", "Validated Namespace", "Your Script's Logic"]
    },
    content: {
      basic: `<p>Instead of hardcoding a target IP inside your script and editing the file every time you want to scan something new, the built-in <code>argparse</code> module lets you define command-line flags: <code>python scanner.py --target 10.0.0.1 --port 443</code>. Your script defines what flags exist, and argparse handles reading them, converting types, and even generating a <code>--help</code> message automatically.</p>`,
      intermediate: `<p>argparse supports required vs optional arguments, default values, and type conversion — <code>parser.add_argument("--port", type=int, default=80)</code> automatically converts the text input into an integer and falls back to 80 if the flag isn't given. This is what turns a one-off script into something that feels like a real, reusable command-line tool other people (or your future self) can pick up and run without reading the source code first.</p>`,
      advanced: `<p>Well-designed CLI tools also validate their inputs before doing anything risky — for example, checking that a supplied IP address or CIDR range is actually well-formed (using the standard library's <code>ipaddress</code> module) before attempting to connect to it, rather than letting a malformed argument cause confusing errors deep inside the script. For any tool that will run with elevated privileges or touch other systems, treating command-line input as untrusted and validating it early is a good habit that pays off the first time someone (including you) fat-fingers an argument.</p>`
    },
    quiz: [
      { q: "What problem does argparse solve?", options: ["It encrypts command-line arguments", "It lets a script accept named flags and options from the command line instead of hardcoded values", "It replaces the need for functions", "It connects a script to the internet"], correct: 1, explain: "argparse lets you define command-line flags (like --target or --port) so users can configure the script's behavior without editing the source code." },
      { q: "What does type=int do when defining an argparse argument?", options: ["Deletes the argument", "Automatically converts the text input into an integer", "Makes the argument required", "Encrypts the value"], correct: 1, explain: "The type parameter tells argparse to automatically convert the raw text input into the specified type, like int, before your script uses it." },
      { q: "Why is it good practice to validate a CLI tool's inputs (like an IP address) before using them?", options: ["Validation is never necessary", "It catches malformed input early, preventing confusing errors or unintended actions deeper in the script", "It makes the script run slower with no benefit", "argparse does this automatically for all inputs"], correct: 1, explain: "Checking that inputs are well-formed before acting on them (especially for tools that connect to other systems) prevents confusing failures and reduces the chance of unintended behavior from bad input." }
    ]
  },

  // ============================================================
  // SECTION 3: NETWORKING WITH PYTHON
  // ============================================================
  {
    id: "sockets-port-scanner",
    section: "Networking with Python",
    number: 13,
    title: "Sockets: Building a Simple Port Scanner",
    difficulty: "Intermediate",
    summary: "The socket module is Python's direct line to the network — the same low-level tool that powers custom port scanners and network tools.",
    animation: "packet-travel",
    compareData: {
      travel: { partyA: "Your Script", partyB: "target:port", packetLabel: "connect()" }
    },
    content: {
      basic: `<p>Python's built-in <code>socket</code> module lets a script open a raw network connection, the same building block every networked program uses underneath. A simple port check tries to connect to one specific port on a target: if the connection succeeds, the port is open; if it's refused or times out, it's closed. Looping this check over a range of ports is literally how a basic port scanner works.</p>
      <p>This is standard, widely-taught networking education — always only scan systems you own or have explicit permission to test.</p>`,
      intermediate: `<p>The key method is <code>sock.connect_ex((ip, port))</code>, which attempts a connection and returns an error code instead of raising an exception — 0 means success (the port is open). Setting a short <code>sock.settimeout(1)</code> is essential; without it, a single unresponsive port could make your script hang far longer than the whole rest of the scan.</p>`,
      advanced: `<p>A basic connect-scan like this is intentionally the "noisy" version — it completes a full TCP handshake with every port, which shows up clearly in target-side logs and firewalls (tools like <code>nmap</code> support quieter techniques like a SYN scan, which never completes the handshake). Scanning is also legally sensitive: running port scans against systems you don't own or don't have written authorization to test can violate computer misuse laws in many countries, even if no damage occurs — this is why every legitimate use of this technique happens inside an authorized penetration test, a bug bounty scope, or your own lab environment.</p>`
    },
    quiz: [
      { q: "What does sock.connect_ex() return when a connection succeeds?", options: ["An error message", "0", "The IP address", "True"], correct: 1, explain: "connect_ex() returns an error code rather than raising an exception — a return value of 0 specifically means the connection succeeded, i.e. the port is open." },
      { q: "Why is setting a timeout with sock.settimeout() important in a port scanner?", options: ["It's not important", "Without it, one unresponsive port could make the entire scan hang far longer than expected", "It encrypts the connection", "It's required by Python syntax"], correct: 1, explain: "Without a timeout, a single non-responsive port could cause the script to wait indefinitely, dramatically slowing down or hanging the whole scan." },
      { q: "Why must port scanning only be done against systems you own or have explicit permission to test?", options: ["It's just a best practice with no real consequence otherwise", "Scanning systems without authorization can violate computer misuse laws in many countries, even without causing damage", "Port scanning is always illegal everywhere, with no exceptions", "Authorization is only needed for scanning government systems"], correct: 1, explain: "Scanning systems without authorization can be illegal in many jurisdictions regardless of intent or damage — legitimate use always happens within an authorized test, bug bounty scope, or your own environment." }
    ]
  },

  {
    id: "requests-library",
    section: "Networking with Python",
    number: 14,
    title: "Talking to the Web with Requests",
    difficulty: "Basic",
    summary: "The requests library is the standard way Python scripts send HTTP requests — the basis for API automation, OSINT tools, and simple web checks.",
    animation: "handshake",
    compareData: {
      exchange: {
        partyA: "Your Script", partyB: "Web Server",
        steps: [
          { label: "GET /api/data", direction: "right", color: "var(--signal)" },
          { label: "200 OK + JSON", direction: "left", color: "var(--amber)" }
        ]
      }
    },
    content: {
      basic: `<p>The <code>requests</code> library makes sending an HTTP request as simple as one line: <code>response = requests.get("https://example.com")</code>. You can then check <code>response.status_code</code> (200 means success) and read <code>response.text</code> or, for an API, <code>response.json()</code> to get the data back as a Python dictionary.</p>`,
      intermediate: `<p>Beyond simple GET requests, <code>requests</code> handles POST requests (sending data, like submitting a form or calling an API), custom headers (like an <code>Authorization</code> token for an API key), and timeouts — <code>requests.get(url, timeout=5)</code> is important to always set, since a hanging request with no timeout can freeze a script indefinitely, the same lesson as with raw sockets.</p>`,
      advanced: `<p>Two details matter a lot in real-world security tooling: always keep <code>verify=True</code> (the default) so TLS certificates are actually validated — disabling it to "get past an error" quietly removes protection against man-in-the-middle attacks, and should only ever be done knowingly in a controlled test environment. Second, when automating requests against any third-party service or API, respect rate limits and the target's terms of service; aggressive, unthrottled automated requests can look identical to a denial-of-service attempt from the receiving end, regardless of your actual intent.</p>`
    },
    quiz: [
      { q: "What does response.json() do when using the requests library?", options: ["Deletes the response", "Converts a JSON API response into a Python dictionary or list", "Sends a new request", "Encrypts the response"], correct: 1, explain: "response.json() parses a JSON-formatted response body and converts it into native Python data structures, ready to use directly." },
      { q: "Why should you always set a timeout when making a request with the requests library?", options: ["It's not necessary", "Without one, a hanging request could freeze the script indefinitely", "Timeouts make requests run slower", "Timeouts are required by the target server"], correct: 1, explain: "Just like with raw sockets, a request with no timeout can hang indefinitely if the server never responds, so setting one prevents the script from freezing." },
      { q: "Why is disabling TLS certificate verification (verify=False) risky?", options: ["It has no real downside", "It removes protection against man-in-the-middle attacks by skipping certificate validation", "It makes requests run faster with no tradeoffs", "It's required for all HTTPS requests"], correct: 1, explain: "Certificate verification confirms you're actually talking to the server you think you are. Disabling it removes that protection, exposing the connection to potential interception." }
    ]
  },

  {
    id: "web-vuln-scanner-concept",
    section: "Networking with Python",
    number: 15,
    title: "Building a Simple Web Security Checker",
    difficulty: "Intermediate",
    summary: "A basic security checker script inspects things like response headers and cookie flags — the concept behind automated web security scanning.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "Security Headers", desc: "Check if headers like Strict-Transport-Security or X-Content-Type-Options are present in the response." },
        { label: "Cookie Flags", desc: "Check whether cookies are set with the Secure and HttpOnly flags, which limit how they can be stolen or misused." },
        { label: "TLS Version", desc: "Check whether the server supports outdated, insecure versions of TLS instead of only modern ones." },
        { label: "Server Banner", desc: "Check what the server discloses about its software and version in response headers, which can reveal outdated software." }
      ]
    },
    content: {
      basic: `<p>A simple, defensive "security checker" script sends a request to a website with <code>requests</code> and then inspects the response for good hygiene: does it set the <code>Strict-Transport-Security</code> header? Are cookies marked <code>Secure</code> and <code>HttpOnly</code>? This kind of passive header inspection is how many free online "security header checker" tools actually work under the hood, and it's a genuinely useful, non-intrusive first pass before any deeper testing.</p>`,
      intermediate: `<p>Because this only reads response headers and never sends anything designed to break or manipulate the target, it's a good example of "passive" checking — safe to run against sites you don't administer, though checking with the owner first is still good practice. A script like this loops through a list of URLs, requests each one, and builds a simple report of which security headers are present or missing.</p>`,
      advanced: `<p>Passive header checking is the safe end of a spectrum that continues all the way to <strong>active</strong> vulnerability scanning — actually sending crafted inputs to see how an application responds (like testing for injection flaws). Active testing has real potential to affect the target application's data or availability, which is exactly why professional-grade scanners and any active testing of this kind is only ever done with explicit written authorization, defined scope, and often within a formal engagement like a penetration test or bug bounty program — never against systems without permission.</p>`
    },
    quiz: [
      { q: "What is a 'passive' security check, as described here?", options: ["A check that actively tries to break into a system", "A check that only reads information already being sent, like response headers, without sending anything designed to manipulate the target", "A check that requires no code at all", "A check performed only by automated bots, never humans"], correct: 1, explain: "Passive checks (like reading response headers) only observe information the server is already sending, without attempting to manipulate or break anything." },
      { q: "Why does an X-Content-Type-Options or Strict-Transport-Security header matter?", options: ["They have no security purpose", "They're examples of security headers that help protect against certain classes of attacks when present", "They only affect page load speed", "They replace the need for HTTPS entirely"], correct: 1, explain: "These are examples of security-related HTTP headers. Their presence (or absence) is a signal a security checker script can look for as part of basic web hygiene." },
      { q: "Why does active vulnerability testing require explicit authorization, unlike passive header checking?", options: ["It doesn't — both require the same level of permission", "Active testing sends crafted inputs that can affect the target's data or availability, so it needs a defined, authorized scope", "Active testing is always illegal, even with permission", "There's no meaningful difference between passive and active testing"], correct: 1, explain: "Active testing intentionally probes for weaknesses by sending crafted input, which can affect the target system — this is why it's only performed within an authorized, scoped engagement." }
    ]
  },

  {
    id: "scapy-packets",
    section: "Networking with Python",
    number: 16,
    title: "Parsing Packets with Scapy",
    difficulty: "Intermediate",
    summary: "Scapy lets Python read, build, and inspect raw network packets directly — a favorite tool for network analysis and understanding protocols hands-on.",
    animation: "encapsulation",
    compareData: {
      wraps: [
        { label: "Payload", color: "var(--signal)" },
        { label: "TCP | Payload", color: "var(--amber)" },
        { label: "IP | TCP | Payload", color: "#a78bfa" },
        { label: "Ethernet | IP | TCP | Payload", color: "var(--paper)" }
      ]
    },
    content: {
      basic: `<p><code>scapy</code> is a Python library for working directly with network packets — reading them off the wire, inspecting their fields, or even building your own from scratch. Reading a captured packet file (a <code>.pcap</code>) with scapy and printing <code>packet.summary()</code> shows you exactly what's inside — source and destination, protocol, and more — without needing a separate tool.</p>`,
      intermediate: `<p>Scapy represents a packet as layers stacked on top of each other, matching how packets actually work on the wire: <code>packet[IP].src</code> gets the source IP address, <code>packet[TCP].dport</code> gets the destination port. This layered structure is exactly the encapsulation concept from networking fundamentals, but here you can inspect and manipulate it directly in code.</p>`,
      advanced: `<p>Because scapy can both read and craft raw packets, it's a genuinely powerful learning and analysis tool — useful for understanding exactly how a protocol handshake looks on the wire, or for writing custom network diagnostics that off-the-shelf tools don't offer. That same power means crafting and sending packets (rather than just reading captured ones) should only be done on networks and systems you own or are explicitly authorized to test, since sending unusual or malformed packets to someone else's network can be disruptive and, without authorization, is not something this course covers or endorses.</p>`
    },
    quiz: [
      { q: "What does scapy let you do with network packets?", options: ["Only delete them", "Read, inspect, and build them directly in Python code", "Only encrypt them", "Convert them into CSV files"], correct: 1, explain: "Scapy is a library for reading, inspecting, and constructing raw network packets programmatically in Python." },
      { q: "How does scapy represent a packet's structure?", options: ["As a single flat string", "As stacked layers, matching how the packet is actually structured on the wire (e.g. Ethernet, IP, TCP)", "As a JSON object only", "As an image"], correct: 1, explain: "Scapy models packets as layers stacked on each other, mirroring real packet encapsulation, so you can access packet[IP].src or packet[TCP].dport directly." },
      { q: "Why is crafting and sending custom packets more sensitive than just reading captured ones?", options: ["There's no difference in sensitivity", "Sending unusual or malformed packets can be disruptive to a network, so it should only be done on systems you own or are authorized to test", "Reading packets is always illegal", "Scapy cannot actually send packets"], correct: 1, explain: "Sending crafted packets actively interacts with a network and can be disruptive, which is why it should only be done on your own network or with explicit authorization." }
    ]
  },

  {
    id: "dns-subdomain-enum",
    section: "Networking with Python",
    number: 17,
    title: "DNS Lookups & Subdomain Enumeration",
    difficulty: "Intermediate",
    summary: "Scripting DNS lookups lets a security researcher check which subdomains of a domain actually resolve — a core step in authorized reconnaissance.",
    animation: "dns-lookup",
    compareData: {
      chain: ["Your Script", "Resolver", "Root", "TLD (.com)", "Authoritative"]
    },
    content: {
      basic: `<p>Python's built-in <code>socket.gethostbyname("example.com")</code> resolves a domain name to an IP address in one line. A common security research task, called <strong>subdomain enumeration</strong>, checks a list of common subdomain names (like <code>mail</code>, <code>dev</code>, <code>staging</code>) against a target domain to see which ones actually resolve to a real server — often revealing forgotten or less-protected systems that are still exposed.</p>`,
      intermediate: `<p>A simple enumeration script loops through a wordlist of common subdomain names, tries to resolve each one (<code>subdomain + "." + domain</code>), and records the ones that succeed. Real tools also cross-check results against public sources like <strong>Certificate Transparency logs</strong> (public records of every TLS certificate ever issued), which often reveal subdomains that were never meant to be publicly known simply because a certificate was issued for them.</p>`,
      advanced: `<p>Subdomain enumeration is squarely part of the reconnaissance phase in an authorized penetration test or bug bounty engagement, and is generally considered lower-risk than active scanning since DNS lookups are a normal, everyday internet operation. That said, scope still matters: bug bounty programs typically define exactly which domains are in scope, and testing subdomains outside that defined scope — even with something as passive as a DNS lookup — is a common way researchers accidentally violate program rules, so always double-check scope documents carefully before enumerating.</p>`
    },
    quiz: [
      { q: "What does socket.gethostbyname() do?", options: ["Sends an email", "Resolves a domain name into an IP address", "Encrypts a domain name", "Scans open ports on a domain"], correct: 1, explain: "gethostbyname() performs a DNS lookup, converting a domain name like example.com into its corresponding IP address." },
      { q: "What is 'subdomain enumeration'?", options: ["Encrypting a list of domains", "Checking a list of possible subdomain names against a target domain to find which ones actually resolve", "Deleting DNS records", "A method for building network packets"], correct: 1, explain: "Subdomain enumeration checks common subdomain name guesses (like mail, dev, staging) against a domain to discover which ones resolve to real, potentially exposed servers." },
      { q: "Why do Certificate Transparency logs help with subdomain discovery?", options: ["They contain login credentials", "They're public records of every issued TLS certificate, which often reveal subdomain names that were never meant to be public", "They list every open port on a server", "They're unrelated to subdomains"], correct: 1, explain: "Certificate Transparency logs publicly record every TLS certificate issued, and since certificates specify the domain they cover, this often reveals subdomains that weren't otherwise publicly known." }
    ]
  },

  {
    id: "multithreading-scans",
    section: "Networking with Python",
    number: 18,
    title: "Multithreading for Faster Scans",
    difficulty: "Intermediate",
    summary: "Checking thousands of hosts one at a time is slow because each request spends most of its time waiting — threading lets many run at once.",
    animation: "topology",
    compareData: {
      diagrams: [
        { label: "Sequential", draw: "bus" },
        { label: "Threaded", draw: "mesh" }
      ]
    },
    content: {
      basic: `<p>A network request spends most of its time just <strong>waiting</strong> for a reply, not actually using the CPU. Checking 1,000 hosts one after another means waiting 1,000 times in a row, even though your computer is mostly idle during each wait. Python's <code>threading</code> module (or the higher-level <code>concurrent.futures.ThreadPoolExecutor</code>) lets you run many of these waiting operations at the same time, dramatically cutting total scan time.</p>`,
      intermediate: `<p><code>ThreadPoolExecutor(max_workers=20)</code> is the simplest way to parallelize a scan: it manages a pool of 20 threads and hands each one a target to check, moving on to the next target as soon as a thread frees up. This pattern shows up constantly in security tooling — checking many hosts, many URLs, or many subdomains — anywhere the bottleneck is waiting on the network rather than heavy local computation.</p>`,
      advanced: `<p>It's important to understand <em>why</em> threading works so well here specifically: Python's Global Interpreter Lock (GIL) means only one thread executes Python bytecode at a time, so threading gives no speedup for CPU-heavy work like number crunching. But network waiting releases the GIL, so threads genuinely overlap during I/O — which is exactly the situation in most scanning tasks. For CPU-bound work (like hashing millions of passwords), <code>multiprocessing</code> is the right tool instead, since it uses separate processes that bypass the GIL entirely. Choosing threading vs multiprocessing based on whether your bottleneck is waiting or computing is a genuinely important distinction.</p>`
    },
    quiz: [
      { q: "Why does scanning many hosts one at a time waste time?", options: ["Because Python is too slow to send requests", "Because most of the time is spent waiting for a reply, during which the computer is mostly idle", "Because hosts always respond instantly", "Because scanning requires no waiting at all"], correct: 1, explain: "Each network request spends most of its time waiting for a response, not using the CPU — checking hosts one at a time means repeating this wasted wait over and over." },
      { q: "What does ThreadPoolExecutor(max_workers=20) do?", options: ["Encrypts scan results", "Manages a pool of 20 threads that can check multiple targets at the same time", "Limits the scan to 20 total hosts", "Slows down the scan intentionally"], correct: 1, explain: "It creates a pool of worker threads (20 in this case) that can each independently check a target, allowing many checks to happen concurrently instead of one at a time." },
      { q: "Why does threading speed up network scanning but not CPU-heavy tasks like password hashing, due to Python's GIL?", options: ["Threading speeds up everything equally", "The GIL only allows one thread to run Python code at a time, but it's released during network waiting — so threads overlap for I/O but not for CPU work", "The GIL doesn't affect threading at all", "Password hashing is always faster than network scanning"], correct: 1, explain: "Python's GIL lets only one thread run Python bytecode at once, but it's released while waiting on network I/O — so threads genuinely overlap for network waits, but not for CPU-bound work like hashing, where multiprocessing is the better tool." }
    ]
  },

  {
    id: "rest-apis-security",
    section: "Networking with Python",
    number: 19,
    title: "Working with REST APIs for Security Tools",
    difficulty: "Intermediate",
    summary: "Most modern security tools and threat feeds expose a REST API — learning to authenticate, query, and handle rate limits unlocks automation.",
    animation: "handshake",
    compareData: {
      exchange: {
        partyA: "Your Script", partyB: "Security API",
        steps: [
          { label: "GET + API Key Header", direction: "right", color: "var(--signal)" },
          { label: "200 OK + JSON Data", direction: "left", color: "var(--amber)" },
          { label: "Next Request (respecting rate limit)", direction: "right", color: "var(--signal)" }
        ]
      }
    },
    content: {
      basic: `<p>A <strong>REST API</strong> is a standard way for two programs to talk to each other over HTTP, usually exchanging JSON. Many security tools — threat intelligence feeds, vulnerability databases, SIEM platforms — expose an API so you can query them programmatically instead of clicking through a web dashboard. Using <code>requests</code> with an API typically means adding an <strong>API key</strong> to the request headers to authenticate: <code>headers = {"Authorization": "Bearer YOUR_KEY"}</code>.</p>`,
      intermediate: `<p>Most APIs enforce <strong>rate limits</strong> — a maximum number of requests allowed per minute or hour — and will respond with a <code>429 Too Many Requests</code> status code if you exceed it. Well-behaved automation checks the status code and, on a 429, waits before retrying rather than hammering the endpoint. Many APIs also include a <code>Retry-After</code> header telling you exactly how long to wait.</p>`,
      advanced: `<p>API keys are secrets, and mishandling them is a genuinely common real-world security incident: hardcoding a key directly in a script that later gets committed to a public GitHub repository is one of the most frequent ways credentials leak, and automated scanners actively search public repos for exactly this pattern. The correct approach — covered in more depth in the environment variables topic later in this track — is to load API keys from environment variables or a secrets manager, never from a string literal in your source code.</p>`
    },
    quiz: [
      { q: "What does adding a header like Authorization: Bearer YOUR_KEY do when calling an API?", options: ["Encrypts the entire request", "Authenticates your script to the API so it knows who's making the request", "Deletes rate limits", "Converts the response to CSV"], correct: 1, explain: "An Authorization header with an API key tells the API who is making the request, allowing it to authenticate and authorize the call." },
      { q: "What does a 429 status code typically mean?", options: ["The request succeeded", "You've exceeded the API's rate limit and should slow down or wait before retrying", "The server is permanently down", "Your API key is invalid"], correct: 1, explain: "429 Too Many Requests indicates you've exceeded the rate limit. Well-behaved scripts check for this and wait before retrying, often using a Retry-After header." },
      { q: "Why is hardcoding an API key directly in a script's source code risky?", options: ["It's not risky at all", "If the code is ever committed to a public repository, the key can leak — and automated scanners actively search for exactly this", "Hardcoded keys make requests slower", "API keys can't be hardcoded in Python"], correct: 1, explain: "Hardcoded secrets that end up in a public repository (even accidentally) are one of the most common real-world causes of credential leaks, and this pattern is actively targeted by automated scanners searching public code." }
    ]
  },

  // ============================================================
  // SECTION 4: CRYPTOGRAPHY & SECRETS
  // ============================================================
  {
    id: "hashlib-hashing",
    section: "Cryptography & Secrets",
    number: 20,
    title: "Hashing with hashlib",
    difficulty: "Intermediate",
    summary: "Hashing turns any input into a fixed-length fingerprint — the basis for checking file integrity, detecting known malware, and storing passwords safely.",
    animation: "encapsulation",
    compareData: {
      wraps: [
        { label: "\"hi\"", color: "var(--signal)" },
        { label: "\"Hello, World!\"", color: "var(--amber)" },
        { label: "an entire 4GB file", color: "#a78bfa" },
        { label: "always → fixed-length hash", color: "var(--paper)" }
      ]
    },
    content: {
      basic: `<p>A <strong>hash function</strong> takes any input — a short word or an entire file — and produces a fixed-length string of characters called a <strong>hash</strong> (or digest). Python's built-in <code>hashlib</code> makes this simple: <code>hashlib.sha256(b"hello").hexdigest()</code> gives you the SHA-256 hash of the text "hello". The same input always produces the exact same hash, and even a tiny change to the input produces a completely different hash.</p>`,
      intermediate: `<p>This property makes hashing perfect for <strong>integrity checking</strong>: if you hash a file before and after downloading it and the hashes match, you know the file wasn't corrupted or tampered with. It's also how malware analysts identify known-bad files — a file's SHA-256 hash acts as a unique fingerprint that can be checked against databases of known malware hashes, without needing to analyze the file's actual contents.</p>`,
      advanced: `<p>Not all hash algorithms are equal for security purposes: <strong>MD5</strong> and <strong>SHA-1</strong> are considered cryptographically broken — researchers have demonstrated practical <strong>collisions</strong> (two different inputs producing the same hash), so they should never be used for anything security-sensitive, though they're still fine for simple non-security checks like deduplicating files. <strong>SHA-256</strong> and the SHA-3 family remain strong choices today. Critically, a general-purpose hash like SHA-256 is deliberately fast — which makes it the <em>wrong</em> choice for password storage specifically, since speed helps an attacker guess passwords faster. Password hashing needs a deliberately slow algorithm, covered in the next topic.</p>`
    },
    quiz: [
      { q: "What is a key property of a hash function?", options: ["The output length changes based on the input length", "The same input always produces the same fixed-length output, and small input changes produce very different output", "Hashes can be reversed to reveal the original input", "Hash functions require an internet connection"], correct: 1, explain: "A hash function always produces the same fixed-length output for the same input, and even a tiny change to the input causes a completely different hash — a property used for integrity checking." },
      { q: "Why are MD5 and SHA-1 no longer recommended for security purposes?", options: ["They are too slow to be practical", "Researchers have demonstrated practical collisions, meaning two different inputs can produce the same hash", "They only work on text, not files", "They were never widely used"], correct: 1, explain: "MD5 and SHA-1 are considered cryptographically broken because collisions (two different inputs producing the same hash) have been practically demonstrated, undermining their security guarantees." },
      { q: "Why is a fast general-purpose hash like SHA-256 a poor choice for storing passwords?", options: ["It's not fast enough", "Its speed is actually a weakness for password storage, since it helps attackers guess passwords faster during a brute-force attempt", "SHA-256 cannot be used with hashlib", "Passwords can't be hashed at all"], correct: 1, explain: "General-purpose hashes are designed to be fast, which is a disadvantage for password storage — a deliberately slow, purpose-built algorithm is needed to make brute-forcing passwords impractical." }
    ]
  },

  {
    id: "cryptography-library",
    section: "Cryptography & Secrets",
    number: 21,
    title: "Encrypting Data with the cryptography Library",
    difficulty: "Advanced",
    summary: "The cryptography library provides vetted, production-grade encryption in Python — turning readable data into ciphertext and back with a key.",
    animation: "handshake",
    compareData: {
      exchange: {
        partyA: "Plaintext", partyB: "Encrypted Channel",
        steps: [
          { label: "Encrypt with key", direction: "right", color: "var(--signal)" },
          { label: "Ciphertext stored/sent", direction: "right", color: "var(--amber)" },
          { label: "Decrypt with same key", direction: "left", color: "var(--signal)" }
        ]
      }
    },
    content: {
      basic: `<p>Encryption transforms readable data ("plaintext") into unreadable data ("ciphertext") using a key, and the same key (in symmetric encryption) reverses the process. Python's <code>cryptography</code> library provides a simple, high-level tool for this called <code>Fernet</code>: <code>Fernet.generate_key()</code> creates a key, and <code>Fernet(key).encrypt(data)</code> encrypts it — designed specifically so it's hard to use incorrectly.</p>`,
      intermediate: `<p>Fernet isn't just basic encryption — it also includes a timestamp and an authentication check, meaning it detects if ciphertext has been tampered with and can reject messages older than a specified age. This "authenticated encryption" property matters: encryption without authentication can be vulnerable to an attacker modifying the ciphertext in ways that produce predictable changes in the decrypted output, even without knowing the key.</p>`,
      advanced: `<p>The golden rule in applied cryptography is: <strong>never write your own encryption algorithm, and be very cautious even writing your own protocol around a trusted algorithm</strong>. Subtle mistakes — reusing a nonce, choosing a weak mode of operation, skipping authentication — can silently destroy the security guarantees even when using a strong underlying algorithm like AES. This is exactly why libraries like <code>cryptography</code> provide high-level, "hard to misuse" recipes like Fernet rather than only exposing low-level primitives: the goal is steering developers toward safe defaults instead of expecting everyone to be a cryptography expert.</p>`
    },
    quiz: [
      { q: "What does Fernet.generate_key() do?", options: ["Encrypts a file directly", "Creates a symmetric key used to encrypt and decrypt data with Fernet", "Deletes an existing key", "Connects to a remote server"], correct: 1, explain: "generate_key() creates a new symmetric key, which is then used with Fernet to both encrypt and decrypt data." },
      { q: "What extra protection does Fernet provide beyond basic encryption?", options: ["None — it's identical to plain encryption", "Authentication that detects if ciphertext has been tampered with, plus an optional timestamp check", "It makes encryption reversible without a key", "It automatically emails you the key"], correct: 1, explain: "Fernet includes built-in authentication, which detects tampering with the ciphertext, and can also reject messages older than a specified time." },
      { q: "What is the 'golden rule' of applied cryptography mentioned here?", options: ["Always write your own encryption algorithm for maximum control", "Never write your own encryption algorithm — use trusted, vetted libraries instead", "Encryption is unnecessary if you trust your users", "Only use encryption for files, never for network traffic"], correct: 1, explain: "The golden rule is to never roll your own cryptography — subtle implementation mistakes can silently break security even when using a strong underlying algorithm, which is why vetted libraries are essential." }
    ]
  },

  {
    id: "password-hashing-salting",
    section: "Cryptography & Secrets",
    number: 22,
    title: "Password Hashing & Salting",
    difficulty: "Advanced",
    summary: "Storing passwords safely means hashing them with a unique salt and a deliberately slow algorithm, so even a stolen database resists cracking.",
    animation: "compare-toggle",
    compareData: {
      labelA: "Plain SHA-256 hash", labelB: "Salted, slow hash (bcrypt/argon2)",
      descA: "Fast to compute, and identical passwords produce identical hashes — attackers use precomputed 'rainbow tables' to crack these extremely quickly.",
      descB: "A unique random salt is added per password before hashing with a deliberately slow algorithm, making precomputed tables useless and brute-forcing impractically slow."
    },
    content: {
      basic: `<p>Never store a password in plain text, and never store it as a plain, unsalted hash either. A <strong>salt</strong> is a random value added to a password before hashing, unique to each user, so two users with the identical password get completely different stored hashes. Purpose-built password hashing libraries like <code>bcrypt</code> handle the salt automatically: <code>bcrypt.hashpw(password, bcrypt.gensalt())</code> generates a salted hash in one call.</p>`,
      intermediate: `<p>Salting defeats <strong>rainbow tables</strong> — massive precomputed lists mapping common passwords to their hashes, which let an attacker crack a plain unsalted hash almost instantly by simple lookup. With a unique salt per password, the attacker would need a separate precomputed table for every possible salt, which is computationally infeasible. bcrypt (and its more modern successor, <strong>Argon2</strong>) also include a "work factor" — a deliberately tunable slowness that increases as computers get faster, keeping brute-force attempts impractically slow even years later.</p>`,
      advanced: `<p>The reason general-purpose fast hashes like plain SHA-256 are unsuitable here (as flagged in the hashing topic) comes down to attacker economics: a fast hash lets an attacker with stolen hash data test billions of password guesses per second on modern GPU hardware. A deliberately slow, memory-hard algorithm like Argon2 forces each guess to consume meaningful time and memory, cutting attacker throughput by orders of magnitude. This is also why password hashing algorithms need periodic "work factor" increases over time — what was slow enough on 2015 hardware may be crackable far faster on 2026 hardware, so security teams should revisit these settings periodically rather than treating them as a one-time decision.</p>`
    },
    quiz: [
      { q: "What is a 'salt' in password hashing?", options: ["A type of encryption key", "A unique random value added to each password before hashing, so identical passwords produce different hashes", "A backup copy of the password", "A method for compressing passwords"], correct: 1, explain: "A salt is a random value unique to each password, added before hashing, so that even identical passwords produce different stored hashes." },
      { q: "Why do salts defeat rainbow table attacks?", options: ["Salts encrypt the password so it can never be hashed", "Rainbow tables are precomputed for specific hashes; a unique salt per password would require a separate table for every possible salt, which is infeasible", "Rainbow tables only work on encrypted data", "Salts have nothing to do with rainbow tables"], correct: 1, explain: "Rainbow tables are precomputed hash lookups. A unique salt per password means an attacker would need a separate precomputed table per salt value, making the attack impractical." },
      { q: "Why is a deliberately slow algorithm like bcrypt or Argon2 better for password hashing than a fast hash like plain SHA-256?", options: ["Slowness has no security benefit", "Slowness limits how many password guesses an attacker can test per second, even with powerful hardware", "Fast hashes cannot be used with salts", "Slow algorithms are only for encrypting files, not passwords"], correct: 1, explain: "A deliberately slow, memory-hard algorithm significantly limits how fast an attacker can test password guesses, even using powerful modern hardware — a critical defense if a password database is ever stolen." }
    ]
  },

  {
    id: "secrets-tokens",
    section: "Cryptography & Secrets",
    number: 23,
    title: "Generating Secure Secrets & Tokens",
    difficulty: "Intermediate",
    summary: "Session tokens, API keys, and password reset links all need truly unpredictable randomness — Python's secrets module is built for exactly this.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "random module", desc: "Fast and good for simulations or games, but NOT cryptographically secure — its output can be predicted, making it unsafe for anything security-sensitive." },
        { label: "secrets module", desc: "Python's purpose-built module for generating passwords, tokens, and keys using a cryptographically secure random source." },
        { label: "os.urandom()", desc: "The lowest-level source of secure randomness, pulling directly from the operating system's secure random generator." }
      ]
    },
    content: {
      basic: `<p>Python's built-in <code>random</code> module is <strong>not safe</strong> for anything security-sensitive — its numbers are predictable enough that an attacker who sees some output can potentially predict future values. For anything like session tokens, password reset links, or API keys, use the <code>secrets</code> module instead: <code>secrets.token_urlsafe(32)</code> generates a secure, random, URL-safe token in one line.</p>`,
      intermediate: `<p>The <code>secrets</code> module was added to Python specifically to stop developers from accidentally using the regular <code>random</code> module for security purposes — it offers <code>secrets.token_hex()</code> for a hex string, <code>secrets.token_urlsafe()</code> for a URL-safe string, and <code>secrets.choice()</code> for securely picking a random item from a list (useful for generating a random password from a character set).</p>`,
      advanced: `<p>The underlying reason regular <code>random</code> is unsafe is that it's a <strong>pseudo-random number generator (PRNG)</strong> seeded deterministically — given enough observed outputs, its entire internal state can sometimes be reconstructed, after which every future "random" value becomes predictable. <code>secrets</code> (and <code>os.urandom()</code> underneath it) instead draws from the operating system's cryptographically secure random source, which pulls from genuine sources of entropy (hardware noise, timing jitter) specifically designed to be unpredictable even to an attacker who has seen prior output. This distinction — CSPRNG vs regular PRNG — is one of the most consequential mistakes to get right in real security-critical code.</p>`
    },
    quiz: [
      { q: "Why is Python's regular random module unsafe for generating security tokens?", options: ["It's too slow", "Its output can potentially be predicted by an attacker, since it's not cryptographically secure", "It doesn't support generating strings", "It requires an internet connection"], correct: 1, explain: "The random module is a standard pseudo-random generator, not built for security — its output is predictable enough in principle that it shouldn't be used for anything security-sensitive like tokens or keys." },
      { q: "What does secrets.token_urlsafe(32) do?", options: ["Deletes a token", "Generates a cryptographically secure, random, URL-safe string", "Encrypts an existing token", "Connects to a token server"], correct: 1, explain: "token_urlsafe() generates a secure random string suitable for things like session tokens or password reset links, safe for use in URLs." },
      { q: "What is the key difference between a regular PRNG and a CSPRNG (cryptographically secure random number generator)?", options: ["There's no real difference", "A CSPRNG draws from genuine, unpredictable entropy sources, while a regular PRNG can potentially be reconstructed from observed output", "CSPRNGs are always slower with no other difference", "Regular PRNGs are only used for encryption, never randomness"], correct: 1, explain: "A CSPRNG is specifically designed so its output can't be predicted even by someone who has seen prior output, drawing from genuine entropy sources — a regular PRNG offers no such guarantee." }
    ]
  },

  {
    id: "encoding-vs-encryption",
    section: "Cryptography & Secrets",
    number: 24,
    title: "Encoding vs Encryption vs Hashing",
    difficulty: "Basic",
    summary: "These three are often confused, but they solve completely different problems — mixing them up is one of the most common security mistakes.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "Encoding (e.g. Base64)", desc: "Converts data into a different format for compatibility — not secret at all, and reversible by anyone with no key needed. Never use it to 'hide' sensitive data." },
        { label: "Encryption", desc: "Converts data into unreadable ciphertext using a key, reversible only with that key. Used to protect confidentiality of data that needs to be read again later." },
        { label: "Hashing", desc: "Converts data into a fixed-length fingerprint, not reversible at all. Used for integrity checks and storing passwords — you never need the original value back." }
      ]
    },
    content: {
      basic: `<p>These three sound similar but do very different jobs. <strong>Encoding</strong> (like Base64) just changes data's format — it's not secret at all, and anyone can decode it instantly with no key, using <code>base64.b64decode()</code>. <strong>Encryption</strong> makes data unreadable and requires a key to reverse. <strong>Hashing</strong> is one-way — you can never get the original data back from a hash, by design.</p>`,
      intermediate: `<p>A genuinely common real-world mistake: developers sometimes Base64-encode a password or API key and think it's "protected" — it isn't, at all. Base64 is just a text-safe representation of binary data, reversible instantly by anyone, with zero security value. If confidentiality matters, you need encryption (reversible with a key). If you need to verify data hasn't changed, or store something you'll never need to retrieve in its original form (like a password), you need hashing.</p>`,
      advanced: `<p>Choosing the wrong tool from these three has caused real security incidents — Base64-"encoded" credentials found in configuration files or client-side JavaScript, mistaken for encryption, have been the root cause of numerous credential exposures. The mental model worth internalizing: encoding answers "how do I represent this data safely in a different format," encryption answers "how do I keep this data confidential until the right party needs it back," and hashing answers "how do I create a fixed fingerprint that verifies integrity or authenticates without ever storing the original."</p>`
    },
    quiz: [
      { q: "Is Base64 encoding a form of encryption?", options: ["Yes, it's just as secure as encryption", "No — it just changes the data's format and is instantly reversible by anyone with no key required", "Yes, but only for text data", "No, because Base64 cannot be reversed at all"], correct: 1, explain: "Base64 is encoding, not encryption. It has zero security value on its own — anyone can decode it instantly with no key, so it should never be used to protect sensitive data." },
      { q: "Which of the three (encoding, encryption, hashing) is reversible only with a specific key?", options: ["Encoding", "Encryption", "Hashing", "All three are reversible without a key"], correct: 1, explain: "Encryption is designed to be reversible, but only by someone with the correct decryption key — unlike encoding (reversible by anyone) and hashing (not reversible at all)." },
      { q: "Why is finding Base64-'encoded' credentials in a config file a real security concern?", options: ["It isn't a concern — Base64 provides strong protection", "Base64 provides no actual confidentiality, so anyone who finds the encoded string can trivially decode it back to the original credential", "Base64-encoded data is always corrupted", "Config files can't contain Base64 data"], correct: 1, explain: "Since Base64 is trivially and instantly reversible with no key, credentials that are merely Base64-encoded (rather than encrypted) offer essentially no real protection if discovered." }
    ]
  },

  // ============================================================
  // SECTION 5: AUTOMATION & SYSTEM INTERACTION
  // ============================================================
  {
    id: "subprocess-system-commands",
    section: "Automation & System Interaction",
    number: 25,
    title: "Running System Commands with subprocess",
    difficulty: "Intermediate",
    summary: "The subprocess module lets Python run external commands (like nmap or grep) and capture their output — bridging scripts with existing tools.",
    animation: "packet-travel",
    compareData: {
      travel: { partyA: "Your Script", partyB: "Operating System", packetLabel: "run(cmd)" }
    },
    content: {
      basic: `<p>Sometimes the easiest way to do something is to run an existing command-line tool rather than reimplementing it in Python. The <code>subprocess</code> module does this: <code>subprocess.run(["ls", "-la"], capture_output=True, text=True)</code> runs a command and captures its output as text your script can then process further.</p>`,
      intermediate: `<p>Passing the command as a <strong>list</strong> of arguments (<code>["ping", "-c", "1", target]</code>) rather than a single string is the safer, recommended approach — it avoids the shell interpreting any part of your input as a special character. The alternative, <code>shell=True</code>, runs the command through the actual system shell, which opens the door to a serious vulnerability if any part of the command includes untrusted input.</p>`,
      advanced: `<p>This is exactly the mechanism behind <strong>command injection</strong>, a classic and still-common real-world vulnerability class: if a script builds a shell command by directly inserting user-supplied input (say, a "hostname" field from a web form) into a <code>shell=True</code> call, an attacker can supply something like <code>"; rm -rf /"</code> and have it executed as a second command. The fix is straightforward but must be deliberate: always pass arguments as a list (never build a raw shell string from untrusted input), and if <code>shell=True</code> is ever unavoidable, rigorously validate and sanitize every piece of external input first.</p>`
    },
    quiz: [
      { q: "What does subprocess.run() let a Python script do?", options: ["Only read files", "Run an external command-line program and capture its output", "Only connect to the internet", "Encrypt data"], correct: 1, explain: "subprocess.run() executes an external system command and can capture its output, letting Python scripts leverage existing command-line tools." },
      { q: "Why is passing a command as a list of arguments safer than a single string with shell=True?", options: ["There's no safety difference", "A list avoids the shell interpreting any part of the input as a special character, reducing injection risk", "Lists run faster with no security benefit", "shell=True is always required for subprocess to work"], correct: 1, explain: "Passing arguments as a list bypasses shell interpretation of special characters, which is safer, especially when any part of the command might include external or user-supplied input." },
      { q: "What is 'command injection'?", options: ["A performance optimization technique", "A vulnerability where untrusted input is inserted into a shell command, letting an attacker execute unintended commands", "A method for compressing command output", "A type of encryption attack"], correct: 1, explain: "Command injection happens when untrusted input is directly inserted into a shell command (especially with shell=True), allowing an attacker to inject and execute additional commands of their choosing." }
    ]
  },

  {
    id: "automating-log-analysis",
    section: "Automation & System Interaction",
    number: 26,
    title: "Automating File & Log Analysis",
    difficulty: "Intermediate",
    summary: "Combining file reading, string matching, and simple counting turns a folder full of raw logs into an automated summary of what actually happened.",
    animation: "scale-zoom",
    compareData: {
      scales: [
        { label: "One Line", desc: "A single log entry — check it against a pattern, extract a field, or count an occurrence.", r: 30 },
        { label: "One File", desc: "Thousands of lines processed in a loop, building up counts and findings as you go.", r: 60 },
        { label: "One Folder", desc: "Many rotated log files (log.1, log.2, log.3...) processed together as one combined dataset.", r: 90 },
        { label: "A Whole System", desc: "Logs pulled from many machines and centralized for one script to analyze at once.", r: 120 }
      ]
    },
    content: {
      basic: `<p>A basic log analysis script combines skills from earlier in this track: open a file, loop through each line, check each line against a pattern (a simple string check or a regex), and count or collect matches. Something as simple as counting how many lines contain "Failed password" in an authentication log is a real, useful first step toward spotting a brute-force attempt.</p>`,
      intermediate: `<p>Python's <code>glob</code> module (<code>glob.glob("/var/log/auth.log*")</code>) lets a script process an entire folder of rotated log files together, rather than one file at a time, which matters because most systems rotate logs regularly (keeping <code>auth.log</code>, <code>auth.log.1</code>, <code>auth.log.2</code>, etc.). Using a <code>collections.Counter</code> is a clean way to tally how many times each IP address or username appears, instantly surfacing the most active offenders without writing manual counting logic.</p>`,
      advanced: `<p>Real production log analysis tools (SIEM platforms, in essence) formalize exactly this pattern at scale: continuously ingest logs, apply pattern-matching rules, maintain running counts and time windows, and trigger alerts when thresholds are crossed. Building a small version of this yourself is one of the best ways to genuinely understand what a SIEM is doing under the hood, rather than treating it as a black box — and it directly sets up the brute-force detector topic later in this section, which adds a time-window threshold on top of exactly this kind of counting.</p>`
    },
    quiz: [
      { q: "What is a simple first step for detecting brute-force attempts in an authentication log?", options: ["Deleting the log file", "Counting how many lines contain a phrase like 'Failed password'", "Encrypting the log file", "Ignoring the log entirely"], correct: 1, explain: "Simply counting occurrences of a phrase like 'Failed password' is a basic but genuinely useful first step in spotting potential brute-force activity in a log." },
      { q: "Why is Python's glob module useful for log analysis?", options: ["It encrypts log files", "It lets you process an entire folder of rotated log files (like auth.log, auth.log.1, auth.log.2) together", "It deletes old log files automatically", "It only works with JSON files"], correct: 1, explain: "glob lets a script match and process multiple files at once, which is useful since most systems rotate logs into several files (auth.log, auth.log.1, etc.) rather than one single ever-growing file." },
      { q: "How does building a small custom log analysis script relate to understanding SIEM platforms?", options: ["They are completely unrelated", "A SIEM formalizes the same core pattern — ingesting logs, matching patterns, counting, and alerting on thresholds — just at a larger scale", "SIEMs don't analyze logs at all", "Building scripts has no educational value for understanding SIEMs"], correct: 1, explain: "SIEM platforms do essentially the same thing a custom script does — ingest logs, apply matching rules, track counts, and alert on thresholds — just at much larger scale, so building your own version helps demystify what's happening under the hood." }
    ]
  },

  {
    id: "bruteforce-detector",
    section: "Automation & System Interaction",
    number: 27,
    title: "Building a Brute-Force Login Detector",
    difficulty: "Advanced",
    summary: "Combining timestamps, counting, and a time window lets a script flag suspicious patterns like many failed logins from one IP in a short span.",
    animation: "dns-lookup",
    compareData: {
      chain: ["Failed Login Seen", "Look Up IP's Recent Count", "Count++", "Compare to Threshold", "Alert if Exceeded"]
    },
    content: {
      basic: `<p>A brute-force login attempt typically shows up in logs as many failed login attempts, from the same source, in a short amount of time. A simple defensive detector script reads a log, and for every failed-login line, records the source IP and timestamp; if the same IP accumulates more than a set number of failures (say, 5) within a set time window (say, 1 minute), it flags that IP as suspicious.</p>`,
      intermediate: `<p>This combines several earlier topics directly: a <strong>dictionary</strong> mapping each IP to a <strong>list</strong> of its recent failure <strong>timestamps</strong>, and on each new failure, removing timestamps older than the time window before checking if the remaining count exceeds the threshold. This "sliding window" approach is more accurate than a simple total count, since it specifically catches <em>rapid</em> bursts of failures rather than flagging an IP that failed five times slowly spread across an entire week.</p>`,
      advanced: `<p>This kind of rule-based detection is exactly the logic underneath real intrusion detection and account lockout systems, and it comes with genuine tradeoffs to consider: too strict a threshold generates false positives (a legitimate user who mistyped their password a few times gets flagged), too loose a threshold misses genuinely slow, low-and-slow brute-force attempts specifically designed to stay under simple thresholds. Production systems often layer in additional signals — like checking against known-malicious IP reputation lists, or requiring multiple detection rules to agree — rather than relying on a single threshold alone.</p>`
    },
    quiz: [
      { q: "What pattern typically indicates a brute-force login attempt in logs?", options: ["A single successful login", "Many failed login attempts from the same source within a short time window", "Any failed login at all, regardless of frequency", "A user logging in from a new location once"], correct: 1, explain: "Brute-force attempts typically show up as many failed attempts from the same source in a short time span, which is why detectors look for both volume and time window together." },
      { q: "Why does a 'sliding window' approach work better than a simple total failure count?", options: ["It doesn't work better — a total count is always sufficient", "It specifically catches rapid bursts of failures, rather than flagging an IP that failed slowly over a long period", "Sliding windows are simpler to code than total counts", "Total counts can't be implemented in Python"], correct: 1, explain: "A sliding window only counts failures within a recent time period, which correctly targets rapid bursts (real brute-force behavior) without falsely flagging occasional failures spread out over a long time." },
      { q: "What is a real tradeoff of setting a brute-force detection threshold too strictly?", options: ["There are no tradeoffs to strict thresholds", "It can generate false positives, flagging legitimate users who simply mistyped their password a few times", "Strict thresholds always miss all real attacks", "Strict thresholds make the script run slower"], correct: 1, explain: "An overly strict threshold risks flagging normal user behavior (like a few mistyped passwords) as malicious, creating false positives — a genuine tradeoff against catching real attacks." }
    ]
  },

  {
    id: "env-vars-secrets-mgmt",
    section: "Automation & System Interaction",
    number: 28,
    title: "Environment Variables & Secrets Management",
    difficulty: "Intermediate",
    summary: "Secrets like API keys and passwords should never live in source code — environment variables (and proper secrets managers) keep them out of it.",
    animation: "compare-toggle",
    compareData: {
      labelA: "Hardcoded in source code", labelB: "Loaded from environment variable",
      descA: "The secret sits in plain text in the script file, gets committed to version control, and is visible to anyone who can read the code.",
      descB: "The secret lives outside the code entirely; the script reads it at runtime, so the actual value never appears in the source file or repository history."
    },
    content: {
      basic: `<p>Never write <code>api_key = "sk_live_abc123"</code> directly into a script. Instead, store secrets as <strong>environment variables</strong> — values set outside the script, in the operating system or a <code>.env</code> file — and read them at runtime: <code>os.environ.get("API_KEY")</code>. This keeps the actual secret value out of the source code entirely, so it's never accidentally committed to version control.</p>`,
      intermediate: `<p>The <code>python-dotenv</code> library makes local development easier by loading variables from a <code>.env</code> file into <code>os.environ</code> automatically, so you can keep secrets in one untracked local file. Critically, that <code>.env</code> file must be listed in <code>.gitignore</code> — otherwise you've simply moved the hardcoded secret from the script into a file that still gets committed, defeating the entire purpose.</p>`,
      advanced: `<p>Environment variables are a solid baseline but have real limitations at scale: they can potentially leak through process listings, crash dumps, or child process environments, and they don't offer built-in rotation, auditing, or fine-grained access control. Production systems handling genuinely sensitive secrets typically graduate to a dedicated <strong>secrets manager</strong> (like HashiCorp Vault, AWS Secrets Manager, or similar), which centralizes secrets, logs every access, supports automatic rotation, and never requires the secret to sit in a plain environment variable on disk at all. Knowing when a project has outgrown "just use environment variables" is itself a useful security judgment call.</p>`
    },
    quiz: [
      { q: "Why shouldn't an API key be hardcoded directly into a Python script?", options: ["Hardcoding is always faster and safer", "It risks being committed to version control and exposed to anyone who can read the source code", "Python doesn't allow storing strings in variables", "Hardcoded values run slower than environment variables"], correct: 1, explain: "A hardcoded secret sits in plain text in the source file, which risks accidental exposure the moment it's committed to version control or shared." },
      { q: "Why must a .env file be added to .gitignore?", options: ["It's not necessary if the file is small", "Without it, the .env file (and the secrets inside it) would still get committed to version control, defeating the purpose of moving secrets out of the source code", ".gitignore is unrelated to environment variables", "Adding it to .gitignore encrypts the file automatically"], correct: 1, explain: "If .env isn't in .gitignore, it will still be tracked and committed, meaning the secrets inside it end up exposed in version control history anyway — exactly what environment variables were meant to avoid." },
      { q: "What is a key advantage a dedicated secrets manager offers over plain environment variables?", options: ["Secrets managers are always simpler to set up", "Features like automatic rotation, access auditing, and fine-grained access control, which plain environment variables don't provide", "Environment variables cannot store any string data", "There's no real difference between the two approaches"], correct: 1, explain: "Dedicated secrets managers add capabilities like automatic secret rotation, detailed access logging, and fine-grained permissions — meaningful upgrades over plain environment variables for production-grade secret handling." }
    ]
  },

  {
    id: "log-monitor-ids",
    section: "Automation & System Interaction",
    number: 29,
    title: "Writing a Simple Log Monitoring Tool",
    difficulty: "Advanced",
    summary: "Watching a log file in real time and reacting to new lines as they appear is the core loop behind every intrusion detection and alerting tool.",
    animation: "layer-stack",
    compareData: {
      layersNumbered: false,
      layers: [
        { name: "Watch the File", detail: "Continuously check for new lines appended to a log file, like the Unix 'tail -f' command" },
        { name: "Match Patterns", detail: "Check each new line against known suspicious patterns (regex or simple string checks)" },
        { name: "Track State", detail: "Update counters or timestamps needed for patterns that depend on history, like brute-force detection" },
        { name: "Trigger an Alert", detail: "Print, log, send an email, or call a webhook when a match crosses a defined threshold" }
      ]
    },
    content: {
      basic: `<p>Rather than analyzing a static log file after the fact, a monitoring tool watches a log file <strong>as it grows</strong>, reacting to new lines the moment they appear — the same idea as the Unix <code>tail -f</code> command. A simple Python version opens the file, seeks to the end, and then loops, checking for and reading any new lines that have been appended since the last check.</p>`,
      intermediate: `<p>Each new line gets run through the pattern-matching and counting logic built up earlier in this track — checking for specific keywords, applying a brute-force-style time-window count, or matching a regex — and when a rule's condition is met, the script triggers an action: printing an alert, writing to a separate alert log, or (with more setup) sending a notification through an API like the ones covered earlier.</p>`,
      advanced: `<p>This four-stage loop — watch, match, track state, alert — is genuinely the architecture underneath real intrusion detection systems and SIEM alerting pipelines, just usually distributed across many servers and handling vastly more volume and rule complexity. Building even a simple version yourself is one of the most effective ways to internalize concepts like alert fatigue (too many low-value alerts causing real ones to get ignored) and the tuning tradeoffs between catching more real incidents versus generating more false positives, since you'll hit both problems firsthand the moment your simple tool runs against a real, busy log file.</p>`
    },
    quiz: [
      { q: "What does a log monitoring tool do differently from a one-time log analysis script?", options: ["Nothing — they're identical", "It watches the log file continuously, reacting to new lines as they're appended, rather than analyzing a static file once", "It deletes the log file after analysis", "It only works on encrypted logs"], correct: 1, explain: "A monitoring tool continuously watches for new lines being appended to a log file in real time, rather than processing a fixed, already-complete file." },
      { q: "What are the four stages of the monitoring loop described here?", options: ["Encrypt, decrypt, hash, verify", "Watch the file, match patterns, track state, trigger an alert", "Download, upload, delete, restore", "Connect, authenticate, disconnect, reconnect"], correct: 1, explain: "The loop watches for new log lines, matches them against known patterns, tracks any state needed (like counts over time), and triggers an alert when a condition is met." },
      { q: "What is 'alert fatigue', and why does building a simple monitoring tool help you understand it?", options: ["It's a hardware issue unrelated to monitoring", "Too many low-value alerts can cause real, important alerts to get ignored — a tradeoff you'll encounter firsthand tuning even a simple tool against real log data", "Alert fatigue only affects large enterprise systems, never small scripts", "It refers to a script running out of memory"], correct: 1, explain: "Alert fatigue happens when excessive low-value alerts cause important ones to be overlooked. Running even a simple monitoring tool against a busy real log quickly surfaces this tradeoff between sensitivity and noise." }
    ]
  },

  // ============================================================
  // SECTION 6: PRACTICAL SECURITY TOOLING
  // ============================================================
  {
    id: "web-scraping-osint",
    section: "Practical Security Tooling",
    number: 30,
    title: "Web Scraping for OSINT",
    difficulty: "Intermediate",
    summary: "OSINT (open-source intelligence) gathers publicly available information — Python's requests and BeautifulSoup automate collecting it at scale.",
    animation: "packet-travel",
    compareData: {
      travel: { partyA: "Your Script", partyB: "Public Website", packetLabel: "GET" }
    },
    content: {
      basic: `<p><strong>OSINT</strong> (Open-Source Intelligence) means gathering information that's already publicly available — company websites, public social media profiles, press releases — and is a standard, legitimate part of security research and threat intelligence. The <code>BeautifulSoup</code> library, combined with <code>requests</code>, lets a script fetch a webpage and pull out specific pieces of information from its HTML structure, like every email address listed on a company's public "contact" page.</p>`,
      intermediate: `<p><code>BeautifulSoup(html, "html.parser")</code> parses raw HTML into a structure you can search, like <code>soup.find_all("a")</code> to get every link on a page. Combined with a loop, this can automate collecting the same piece of information across many pages, which would be tedious to do by hand — for example, systematically checking employee names listed across a company's public "team" pages.</p>`,
      advanced: `<p>Even though the information is public, responsible scraping still matters: check a site's <code>robots.txt</code> file (a standard that indicates which parts of a site the owner prefers not be automatically crawled), throttle your requests so you're not hammering the target's servers, and be mindful that a site's terms of service may explicitly restrict automated scraping even of public content. In security research specifically, OSINT gathered this way commonly feeds into things like phishing-susceptibility assessments or reconnaissance for an authorized engagement — always with the same scope and authorization considerations as any other testing activity.</p>`
    },
    quiz: [
      { q: "What does OSINT stand for?", options: ["Operating System Internet Networking Tool", "Open-Source Intelligence", "Online Security Intelligence Network", "Offline System Integrity"], correct: 1, explain: "OSINT stands for Open-Source Intelligence — gathering information that is already publicly available, a standard and legitimate part of security research." },
      { q: "What does BeautifulSoup help a Python script do?", options: ["Encrypt web traffic", "Parse HTML content into a searchable structure so you can extract specific information from a webpage", "Send emails automatically", "Scan network ports"], correct: 1, explain: "BeautifulSoup parses raw HTML into a structure you can search and navigate, letting you pull out specific elements like links, text, or contact information." },
      { q: "Why should scraping be done responsibly even when the data is public?", options: ["Responsible scraping isn't necessary for public data", "Sites may have a robots.txt indicating crawling preferences, terms of service restricting automated access, and servers that can be overwhelmed by aggressive scraping", "Public data is always exempt from any restrictions", "robots.txt files are legally binding contracts"], correct: 1, explain: "Even public data can come with crawling preferences (robots.txt), terms of service restrictions, and server load considerations, so responsible scraping means respecting these even though the information itself is public." }
    ]
  },

  {
    id: "searching-iocs-strings",
    section: "Practical Security Tooling",
    number: 31,
    title: "Searching for IOCs & Suspicious Strings",
    difficulty: "Intermediate",
    summary: "Indicators of Compromise (IOCs) — known-bad IPs, hashes, or domains — can be searched for automatically across files and logs with Python.",
    animation: "scale-zoom",
    compareData: {
      scales: [
        { label: "One String", desc: "A single suspicious value — an IP, domain, or hash — you're checking for a match.", r: 30 },
        { label: "One File", desc: "Scanning through a single file's text or extracted strings for any IOC matches.", r: 60 },
        { label: "A Folder", desc: "Checking many files at once, like every file in a suspicious download directory.", r: 90 },
        { label: "A Threat Feed", desc: "Comparing against thousands of known-bad indicators pulled from a shared intelligence source.", r: 120 }
      ]
    },
    content: {
      basic: `<p>An <strong>IOC</strong> (Indicator of Compromise) is a specific, known artifact associated with malicious activity — a bad IP address, a malware file's hash, a known-bad domain name. A simple Python script can load a list of known IOCs (often from a shared threat intelligence feed) into a <strong>set</strong>, then check log entries, file hashes, or extracted strings against that set to flag any matches.</p>`,
      intermediate: `<p>For files specifically, extracting readable text from an otherwise binary file (similar to the Unix <code>strings</code> command) can reveal suspicious hardcoded values — like a command-and-control domain name embedded in a malware sample. Python can replicate this simply by scanning a file's bytes for sequences of printable characters above a minimum length, then checking each extracted string against known-bad patterns or IOC lists.</p>`,
      advanced: `<p>IOC-based detection has a well-known limitation worth understanding: it's <strong>reactive</strong> — it only catches threats that are already known and documented in a feed, and sophisticated attackers routinely change IPs, domains, and file hashes specifically to evade this kind of matching. This is why mature security programs pair IOC matching (fast, cheap, good for known threats) with behavioral detection (like the brute-force detector built earlier, which looks for patterns rather than exact known values) — each approach catches different categories of threats that the other misses.</p>`
    },
    quiz: [
      { q: "What is an IOC (Indicator of Compromise)?", options: ["A programming error", "A specific, known artifact associated with malicious activity, like a bad IP, domain, or file hash", "A type of encryption key", "A Python library for networking"], correct: 1, explain: "An IOC is a known, specific artifact tied to malicious activity — such as a known-bad IP address, domain, or malware file hash — used to detect related threats." },
      { q: "Why is a set a good data structure for storing a large list of known IOCs to check against?", options: ["Sets can only store one value", "Checking whether something exists in a set is very fast, even with a huge list of IOCs", "Sets automatically encrypt their contents", "Lists work better for this purpose"], correct: 1, explain: "As covered in the lists/dicts/sets topic, checking membership in a set is very fast regardless of size, making it ideal for checking values against a large IOC list." },
      { q: "What is a key limitation of IOC-based detection?", options: ["It has no limitations", "It's reactive — it only catches threats already known and documented, missing attackers who deliberately change their IPs, domains, or file hashes", "It only works on Windows systems", "IOC detection requires no data at all"], correct: 1, explain: "IOC matching only catches known, previously documented indicators. Attackers who change their infrastructure or file hashes can evade it, which is why it's typically paired with behavioral detection methods." }
    ]
  },

  {
    id: "password-strength-checker",
    section: "Practical Security Tooling",
    number: 32,
    title: "Building a Password Strength Checker",
    difficulty: "Intermediate",
    summary: "Combining string checks, regex, and a common-password list, a script can estimate how resistant a password would be to guessing or cracking.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "Length", desc: "Longer passwords are exponentially harder to brute-force — length matters more than almost any other single factor." },
        { label: "Character Variety", desc: "Mixing uppercase, lowercase, digits, and symbols increases the total number of possible combinations an attacker must try." },
        { label: "Common Password List", desc: "Checking against a list of the most commonly used (and most commonly cracked) passwords catches predictable choices instantly." },
        { label: "Patterns", desc: "Simple keyboard patterns (like 'qwerty' or '12345') or repeated characters are easy for attackers to guess even if the password is 'long'." }
      ]
    },
    content: {
      basic: `<p>A basic password strength checker combines several checks: is the password long enough (length is genuinely one of the most important factors)? Does it mix uppercase, lowercase, digits, and symbols? Is it found on a list of extremely common passwords (like "password123")? Each check contributes a point (or subtracts one), and the total gives a rough strength score.</p>`,
      intermediate: `<p>Checking against a common-password list is arguably the single most valuable check, since real-world password breaches show attackers overwhelmingly try known-common passwords first — a password that's technically "long" but happens to be on a leaked list offers almost no real protection. Python's <code>re</code> module makes character-variety checks simple: <code>re.search(r"[A-Z]", password)</code> checks for at least one uppercase letter, and similar patterns cover digits and symbols.</p>`,
      advanced: `<p>A more rigorous approach than simple point-scoring is estimating actual <strong>entropy</strong> — the mathematical measure of how many guesses an attacker would realistically need. Libraries like <code>zxcvbn</code> (originally from Dropbox, with Python ports available) go further than naive character-class rules by recognizing common patterns, keyboard walks, and word substitutions (like "P@ssw0rd") that naive rule-based checkers would score as "strong" despite being highly guessable in practice — a good reminder that simple rule-based scoring can be misleadingly optimistic compared to how real attackers actually operate.</p>`
    },
    quiz: [
      { q: "Why is checking a password against a common-password list often considered the single most valuable check?", options: ["It isn't valuable at all", "Real-world attackers overwhelmingly try known-common passwords first, so this check catches highly guessable passwords that other checks might miss", "Common password lists are illegal to use", "Length matters more than this check in every case"], correct: 1, explain: "Attackers commonly try known, frequently-used passwords first in real attacks, so checking against a common-password list catches highly guessable choices that might otherwise score well on length or character variety alone." },
      { q: "What does re.search(r\"[A-Z]\", password) check for?", options: ["Whether the password is too long", "Whether the password contains at least one uppercase letter", "Whether the password matches a common password list", "Whether the password contains a number"], correct: 1, explain: "This regex pattern checks for the presence of at least one uppercase letter (A through Z) anywhere in the password string." },
      { q: "Why might a naive rule-based password checker overestimate the strength of something like 'P@ssw0rd'?", options: ["It can't overestimate strength — the rules are always accurate", "It might score well on character variety (uppercase, symbol, digit) despite being a highly common and guessable substitution pattern that real attackers already anticipate", "P@ssw0rd is actually a very strong password by any measure", "Naive checkers always require a common-password list check"], correct: 1, explain: "A password like 'P@ssw0rd' can pass simple character-variety rules (it has uppercase, a symbol, and a digit) while still being highly guessable, since attackers specifically anticipate common letter-to-symbol substitutions." }
    ]
  },

  {
    id: "building-cli-tool",
    section: "Practical Security Tooling",
    number: 33,
    title: "Packaging Your Own Security CLI Tool",
    difficulty: "Advanced",
    summary: "Pulling functions, argparse, and error handling together turns a personal script into a polished, shareable command-line security tool.",
    animation: "encapsulation",
    compareData: {
      wraps: [
        { label: "one script.py", color: "var(--signal)" },
        { label: "+ argparse CLI", color: "var(--amber)" },
        { label: "+ functions & error handling", color: "#a78bfa" },
        { label: "= a real, packaged tool", color: "var(--paper)" }
      ]
    },
    content: {
      basic: `<p>A polished security CLI tool combines everything covered in this track: <strong>functions</strong> to organize logic, <strong>argparse</strong> for a clean command-line interface, <strong>try/except</strong> so it doesn't crash on the first unexpected input, and clear output the user can actually read. The difference between a "quick script" and a "real tool" is mostly this kind of structure and polish, not fundamentally new Python concepts.</p>`,
      intermediate: `<p>A well-organized tool typically separates concerns into different files: one module for the core logic (like the actual scanning or checking functions), one for the command-line interface itself (argparse setup), and a small entry-point script that ties them together. This structure — familiar from any real software project — makes the tool easier to test (you can test the logic functions directly without going through the CLI) and easier to extend later.</p>`,
      advanced: `<p>To actually share a tool, Python's packaging ecosystem (a <code>pyproject.toml</code> file, structured as an installable package) lets others install it with <code>pip install your-tool</code> and run it as a proper command, rather than manually downloading a script file. Before sharing any security tool publicly, it's worth reviewing it with the same scrutiny you'd want applied to any tool that touches networks or systems: clear documentation of what it does (and doesn't do), sensible defaults that don't accidentally encourage misuse, and honest scoping of what authorization the tool assumes the user already has before running it.</p>`
    },
    quiz: [
      { q: "What mainly separates a 'quick script' from a polished, real command-line tool?", options: ["Completely different programming concepts that don't overlap at all", "Structure and polish — organizing logic into functions, a clean CLI with argparse, and proper error handling", "Real tools cannot be written in Python", "Quick scripts are always more advanced"], correct: 1, explain: "A polished tool mostly applies the same core concepts (functions, argparse, error handling) with more structure and care, rather than requiring fundamentally different programming techniques." },
      { q: "Why is separating CLI logic from core logic (into different files/modules) beneficial?", options: ["It has no real benefit", "It lets you test the core logic directly without going through the command-line interface, and makes the tool easier to extend later", "Python requires this separation to run at all", "It makes the tool run faster with no other benefit"], correct: 1, explain: "Separating the core logic from the CLI interface makes the underlying functions easier to test directly and makes the overall tool easier to maintain and extend over time." },
      { q: "What should you consider before publicly sharing a security tool you've built?", options: ["Nothing beyond making sure the code runs without errors", "Clear documentation of what it does, sensible defaults that discourage misuse, and honest scoping of what authorization a user should already have", "Tools should never include any documentation", "Public sharing requires no additional consideration beyond code quality"], correct: 1, explain: "Sharing a security tool responsibly means documenting its purpose clearly, choosing defaults that don't encourage misuse, and being explicit about the authorization a user needs before running it against any target." }
    ]
  },

  {
    id: "testing-and-venv",
    section: "Practical Security Tooling",
    number: 34,
    title: "Virtual Environments & Managing Dependencies",
    difficulty: "Basic",
    summary: "Virtual environments keep each project's installed libraries separate, avoiding version conflicts between different tools on the same machine.",
    animation: "compare-toggle",
    compareData: {
      labelA: "Global install", labelB: "Virtual environment (venv)",
      descA: "Every library goes into one shared system-wide Python install — two projects needing different versions of the same library will conflict.",
      descB: "Each project gets its own isolated set of installed libraries, so different projects can use different (even conflicting) library versions safely."
    },
    content: {
      basic: `<p>Installing every Python library globally on your system eventually causes conflicts: one security tool might need version 1 of a library while another needs version 2. A <strong>virtual environment</strong> solves this by giving each project its own isolated space for installed packages: <code>python -m venv myenv</code> creates one, and activating it makes any <code>pip install</code> afterward go into that isolated space instead of system-wide.</p>`,
      intermediate: `<p>A <code>requirements.txt</code> file lists exactly which libraries (and versions) a project needs — <code>requests==2.31.0</code>, for example — so anyone else (or your future self, on a different machine) can recreate the exact same environment with <code>pip install -r requirements.txt</code>. This reproducibility matters a lot for security tools specifically, where an unexpected library version change could subtly alter how a script behaves.</p>`,
      advanced: `<p>Dependency management has real security implications beyond just avoiding version conflicts: installing packages introduces <strong>supply chain risk</strong> — you're trusting that every library (and every library that library depends on) is what it claims to be. Pinning exact versions in <code>requirements.txt</code>, checking packages against known vulnerability databases before adding them to a project, and being cautious with typo-squatted package names (a malicious package with a name deliberately similar to a popular one) are all part of responsibly managing dependencies for any tool, security-focused or otherwise.</p>`
    },
    quiz: [
      { q: "What problem does a virtual environment solve?", options: ["It encrypts installed libraries", "It isolates each project's installed packages, preventing version conflicts between projects on the same machine", "It speeds up Python code execution", "It replaces the need for functions and modules"], correct: 1, explain: "A virtual environment gives each project its own isolated set of installed packages, so different projects can use different (even conflicting) versions of the same library without interfering with each other." },
      { q: "What is the purpose of a requirements.txt file?", options: ["It stores encryption keys", "It lists the exact libraries and versions a project needs, so the same environment can be recreated elsewhere", "It's a log file of errors", "It replaces the need for a virtual environment"], correct: 1, explain: "requirements.txt records exactly which packages and versions a project depends on, allowing anyone to recreate the same environment with pip install -r requirements.txt." },
      { q: "What is 'supply chain risk' in the context of installing Python packages?", options: ["The risk that a package will be too large to download", "The risk that a library (or one of its own dependencies) isn't actually trustworthy or safe, since installing it means trusting its entire chain of dependencies", "A risk that only affects physical hardware shipments", "There is no real risk associated with installing packages"], correct: 1, explain: "Supply chain risk refers to the fact that installing a package means trusting it (and everything it depends on) to be legitimate and safe — a real concern given risks like malicious or typo-squatted packages." }
    ]
  },

  {
    id: "ethics-and-legal",
    section: "Practical Security Tooling",
    number: 35,
    title: "Ethics & Legal Boundaries in Security Scripting",
    difficulty: "Basic",
    summary: "Every technique in this track is powerful and dual-use — the line between legitimate security work and a crime is authorization, every time.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "Authorized Pentest", desc: "Explicit, documented, written permission from the system's owner, with a clearly defined scope of what can be tested." },
        { label: "Bug Bounty Program", desc: "A company's own published program defining exactly which systems and techniques are in scope for researchers to test." },
        { label: "CTF / Your Own Lab", desc: "Practicing on systems you built or a competition explicitly designed for this purpose — no ambiguity about permission." },
        { label: "Unauthorized Access", desc: "Testing or scanning any system without clear permission — this is illegal in most countries, regardless of intent or whether damage occurred." }
      ]
    },
    content: {
      basic: `<p>Every technique in this track — port scanning, packet crafting, subdomain enumeration, brute-force detection logic — is genuinely <strong>dual-use</strong>: the exact same skill defends systems or attacks them, depending entirely on who is running it and whether they have permission. The single most important rule in all of security work is simple: <strong>only test systems you own, or that you have clear, written authorization to test</strong>.</p>`,
      intermediate: `<p>In most countries, laws like the U.S. Computer Fraud and Abuse Act (and equivalents elsewhere) criminalize accessing or testing a computer system without authorization — and importantly, this generally doesn't require proving malicious intent or actual damage; simply lacking permission is often enough to constitute a violation. This is exactly why legitimate security work always happens within a clearly defined, documented scope: a signed penetration testing agreement, a company's published bug bounty program terms, or your own personal lab environment.</p>`,
      advanced: `<p>Beyond the legal line, there's a professional and ethical culture worth internalizing as you build real skills: responsible disclosure (reporting a discovered vulnerability to the affected organization privately, giving them reasonable time to fix it before any public discussion), respecting defined scope even when a more interesting target is tempting, and being honest about the limits of your own authorization even under pressure. These habits are what separate a security career built on trust from one that ends a career (or starts a criminal case) — and they matter just as much as any technical skill covered elsewhere in this track.</p>`
    },
    quiz: [
      { q: "What does it mean that security techniques like port scanning are 'dual-use'?", options: ["They only work on dual-core processors", "The exact same technique can be used defensively or offensively, depending entirely on who's using it and whether they have authorization", "They require two people to operate", "They can only be used once per script"], correct: 1, explain: "Dual-use means the identical technical skill or tool can serve legitimate defensive/research purposes or malicious purposes — the determining factor is authorization, not the technique itself." },
      { q: "Under laws like the Computer Fraud and Abuse Act, what typically matters most in determining a violation?", options: ["Whether actual damage occurred", "Whether the person had authorization to access or test the system, regardless of intent or damage", "Whether the attacker used Python specifically", "Whether the system was password-protected"], correct: 1, explain: "These laws generally focus on whether access was authorized — lacking permission can constitute a violation even without malicious intent or provable damage." },
      { q: "What is 'responsible disclosure'?", options: ["Publicly announcing a vulnerability immediately upon discovery", "Privately reporting a discovered vulnerability to the affected organization, giving them reasonable time to fix it before any public discussion", "Never reporting vulnerabilities to anyone", "Selling vulnerability information to the highest bidder"], correct: 1, explain: "Responsible disclosure means reporting a vulnerability privately to the organization responsible for it, allowing time to fix the issue before going public — a core part of professional security ethics." }
    ]
  }

];

// ── Helpers ──────────────────────────────────────────────
function getPythonTopicById(id) {
  return PYTHON_TOPICS.find(t => t.id === id);
}
function getPythonTopicsBySection() {
  const sections = {};
  PYTHON_TOPICS.forEach(t => {
    if (!sections[t.section]) sections[t.section] = [];
    sections[t.section].push(t);
  });
  return sections;
}
function getAdjacentPythonTopics(id) {
  const index = PYTHON_TOPICS.findIndex(t => t.id === id);
  return {
    prev: index > 0 ? PYTHON_TOPICS[index - 1] : null,
    next: index < PYTHON_TOPICS.length - 1 ? PYTHON_TOPICS[index + 1] : null
  };
}
