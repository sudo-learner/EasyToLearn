// ============================================================
// NETLEARN — Networking Topics Data  (NETWORKING TRACK ONLY)
// Each topic follows the same shape so the template (topic.html)
// can render ANY topic just by reading its id from the URL.
// To add a new topic later: copy one object, change the values.
// See js/linux-topics-data.js for the Linux track's equivalent file.
// ============================================================

const TOPICS = [

  // ============================================================
  // SECTION 1: NETWORKING FUNDAMENTALS
  // ============================================================
  {
    id: "what-is-a-network",
    section: "Fundamentals",
    number: 1,
    title: "What is a Network?",
    difficulty: "Basic",
    summary: "The idea of connecting devices so they can share data and resources.",
    animation: "packet-travel",
    compareData: { travel: { partyA: "Your Laptop", partyB: "Printer", packetLabel: "DATA" } },
    content: {
      basic: `
        <p>A <strong>network</strong> is simply two or more devices connected together so they can share information. Your phone connecting to your laptop, your laptop connecting to a printer, or your whole house connecting to the internet — all of these are networks.</p>
        <p>Every network needs three basic things:</p>
        <ul>
          <li><strong>Devices</strong> — computers, phones, printers, servers (called "nodes" or "hosts")</li>
          <li><strong>A way to connect</strong> — cables (wired) or radio signals (wireless)</li>
          <li><strong>A set of rules</strong> — called protocols, so devices understand each other's messages</li>
        </ul>
      `,
      intermediate: `
        <p>Networks exist so resources can be shared instead of duplicated. Instead of every computer in an office needing its own printer or internet line, a network lets many devices share a few resources efficiently.</p>
        <p>Networks are usually described by their <strong>scope</strong> (how big an area they cover) and their <strong>topology</strong> (how the devices are arranged) — both covered in upcoming topics.</p>
      `,
      advanced: `
        <p>At a deeper level, a network is a graph: nodes (devices) connected by edges (links), where data moves as discrete units. Modern networks are <strong>packet-switched</strong> — data is broken into small addressed chunks, routed independently, then reassembled at the destination. This differs from older <strong>circuit-switched</strong> networks (like traditional telephone lines), which dedicated one physical path per conversation.</p>
        <p>This packet-switching decision is why thousands of unrelated conversations can share the same physical cable simultaneously.</p>
      `
    },
    quiz: [
      { q: "What are the three basic things every network needs?", options: ["Devices, a connection method, and rules (protocols)", "A router, a modem, and Wi-Fi", "A server, a client, and a firewall", "Cables, electricity, and software"], correct: 0, explain: "Every network needs devices, a way to connect them, and shared rules so they understand each other." },
      { q: "What is packet-switching?", options: ["Dedicating one physical line to a single conversation", "Breaking data into small addressed chunks that travel independently", "A type of firewall rule", "A method for compressing files"], correct: 1, explain: "Packet-switching breaks data into independently-routed packets reassembled at the destination — how the modern internet works." },
      { q: "Which of these is NOT typically called a 'node' on a network?", options: ["A laptop", "A printer", "A server", "A protocol"], correct: 3, explain: "A protocol is a rule, not a device. Nodes are physical devices like laptops, printers, and servers." }
    ]
  },

  {
    id: "types-of-networks",
    section: "Fundamentals",
    number: 2,
    title: "Types of Networks (LAN, WAN, MAN, PAN)",
    difficulty: "Basic",
    summary: "How networks are classified by the size of area they cover.",
    animation: "scale-zoom",
    content: {
      basic: `
        <p>Networks come in different sizes depending on how much area they cover:</p>
        <ul>
          <li><strong>PAN (Personal Area Network):</strong> Tiny range — Bluetooth between your phone and earbuds.</li>
          <li><strong>LAN (Local Area Network):</strong> One building or campus — your home Wi-Fi or office network.</li>
          <li><strong>MAN (Metropolitan Area Network):</strong> A city-sized network connecting multiple offices.</li>
          <li><strong>WAN (Wide Area Network):</strong> Huge distances — the internet itself is the largest WAN.</li>
        </ul>
      `,
      intermediate: `
        <p>The size of a network affects design choices. LANs are owned by one organization, so they use fast, cheap technology like Ethernet. WANs cross public infrastructure owned by many companies (ISPs), so they rely on routing protocols to find paths across networks that don't inherently trust each other.</p>
      `,
      advanced: `
        <p>The LAN/WAN distinction maps onto trust boundaries and latency budgets. A LAN typically has sub-millisecond latency and physical access control. A WAN must assume hostile intermediate networks, handle variable latency (10–300ms+), and depend on protocols like BGP to dynamically reroute around failures.</p>
      `
    },
    quiz: [
      { q: "Which network type covers the smallest area?", options: ["WAN", "MAN", "LAN", "PAN"], correct: 3, explain: "PAN covers the smallest range — a few meters, like Bluetooth devices." },
      { q: "The internet is best described as which type of network?", options: ["LAN", "PAN", "WAN", "MAN"], correct: 2, explain: "The internet spans the globe, making it the largest example of a WAN." },
      { q: "Why do WANs need routing protocols more critically than LANs?", options: ["WANs use more electricity", "WANs cross networks owned by many different organizations", "WANs only use wireless signals", "WANs don't use IP addresses"], correct: 1, explain: "WANs span independently-owned networks, so routing protocols are essential to find and maintain paths." }
    ]
  },

  {
    id: "network-topologies",
    section: "Fundamentals",
    number: 3,
    title: "Network Topologies (Star, Bus, Ring, Mesh)",
    difficulty: "Basic",
    summary: "The physical or logical layout pattern that devices on a network follow.",
    animation: "topology",
    content: {
      basic: `
        <p>A <strong>topology</strong> is the shape or pattern that describes how devices are connected. Common ones:</p>
        <ul>
          <li><strong>Star:</strong> Every device connects to one central point (like a switch). Most home/office networks use this.</li>
          <li><strong>Bus:</strong> All devices share one single cable line. Older, rarely used today.</li>
          <li><strong>Ring:</strong> Each device connects to exactly two others, forming a loop.</li>
          <li><strong>Mesh:</strong> Every device connects to every other device directly — very redundant, very expensive.</li>
        </ul>
      `,
      intermediate: `
        <p>Star topology dominates modern LANs because a single cable failure only knocks out one device, not the whole network — and centralizing at a switch makes troubleshooting easy. Bus topology, by contrast, means one cable break can take down the entire segment, which is why it's largely historical now.</p>
      `,
      advanced: `
        <p>Mesh topologies appear today not in cabling but in <strong>logical</strong> form — for example, mesh Wi-Fi systems and data-center "leaf-spine" architectures use mesh-like redundancy at the software/routing layer while the physical cabling underneath is usually still organized as a star. Full physical mesh scales as O(n²) connections, which is why it's reserved for small, critical-redundancy scenarios (e.g. core internet backbone links between major ISPs).</p>
      `
    },
    quiz: [
      { q: "Which topology is most common in modern home and office LANs?", options: ["Bus", "Ring", "Star", "Mesh"], correct: 2, explain: "Star topology, with devices connecting to a central switch, is standard because it isolates failures to single devices." },
      { q: "What is the main downside of a bus topology?", options: ["It's too expensive", "One cable break can take down the entire network segment", "It requires wireless signals", "It can only connect 2 devices"], correct: 1, explain: "Because all devices share one cable, a single break disrupts the whole segment." },
      { q: "Why is full physical mesh topology rare at large scale?", options: ["It's not secure", "Connections grow extremely fast as devices are added (O(n²))", "It doesn't support IP addresses", "It only works wirelessly"], correct: 1, explain: "Connecting every device to every other device scales poorly — the number of connections grows quadratically." }
    ]
  },

  {
    id: "client-server-vs-p2p",
    section: "Fundamentals",
    number: 4,
    title: "Client-Server vs Peer-to-Peer",
    difficulty: "Basic",
    summary: "Two fundamentally different ways devices can be organized to share resources.",
    animation: "compare-toggle",
    compareData: {
      labelA: "Client-Server", labelB: "Peer-to-Peer",
      descA: "One central server provides a service; many clients request it. Easy to secure and manage, but the server is a single point of failure.",
      descB: "No central server — every device is both client and server, sharing directly with peers. No single point of failure, but harder to secure and coordinate."
    },
    content: {
      basic: `
        <p><strong>Client-Server:</strong> One powerful device (the server) provides a service, and many devices (clients) request it. Example: when you visit a website, your browser is the client, and the website's server provides the page.</p>
        <p><strong>Peer-to-Peer (P2P):</strong> There's no central server — every device (peer) can act as both client and server, sharing directly with other peers. Example: some file-sharing systems and certain blockchain networks.</p>
      `,
      intermediate: `
        <p>Client-server is easier to secure and manage (one place to control access, apply updates, backup data) but creates a <strong>single point of failure</strong> — if the server goes down, every client loses service. P2P avoids that single point of failure since data is distributed across many peers, but is harder to secure and coordinate consistently.</p>
      `,
      advanced: `
        <p>Most "real" systems are hybrids. Modern P2P systems like BitTorrent still use centralized <strong>trackers</strong> to help peers discover each other initially, even though the actual data transfer is peer-to-peer. Similarly, many "client-server" cloud services now use <strong>CDNs</strong> (content delivery networks) — a distributed layer of servers — to avoid the single-server bottleneck while keeping the simplicity of client-server trust models.</p>
      `
    },
    quiz: [
      { q: "In the client-server model, what is the client?", options: ["The device requesting a service", "The device providing the service", "The cable connecting them", "The protocol being used"], correct: 0, explain: "The client is the device making the request, like your browser asking for a webpage." },
      { q: "What is a major downside of pure client-server architecture?", options: ["It's always slower", "A single point of failure if the server goes down", "It can't use encryption", "It only works on LANs"], correct: 1, explain: "If the one central server fails, all clients lose access — a single point of failure." },
      { q: "What do many P2P systems like BitTorrent still rely on?", options: ["A central tracker to help peers find each other", "A single hard-coded IP address", "No internet connection at all", "A dedicated mesh cable"], correct: 0, explain: "Even decentralized P2P systems often use a tracker for initial peer discovery, even though file transfer itself is peer-to-peer." }
    ]
  },

  // ============================================================
  // SECTION 2: THE OSI & TCP/IP MODELS
  // ============================================================
  {
    id: "osi-model",
    section: "OSI & TCP/IP Models",
    number: 5,
    title: "The OSI Model (7 Layers)",
    difficulty: "Intermediate",
    summary: "The universal 7-layer framework for understanding how data moves across a network.",
    animation: "layer-stack",
    content: {
      basic: `
        <p>The <strong>OSI Model</strong> breaks down "how data travels across a network" into 7 simpler layers, stacked on top of each other. Each layer has one job, and only talks to the layers directly above and below it.</p>
        <p>From bottom to top:</p>
        <ol>
          <li><strong>Physical</strong> — actual cables, signals, voltages</li>
          <li><strong>Data Link</strong> — getting data between two directly connected devices (MAC addresses live here)</li>
          <li><strong>Network</strong> — getting data across multiple networks (IP addresses live here)</li>
          <li><strong>Transport</strong> — reliable delivery, ordering (TCP/UDP live here)</li>
          <li><strong>Session</strong> — managing the conversation between two devices</li>
          <li><strong>Presentation</strong> — formatting/encrypting data so both sides understand it</li>
          <li><strong>Application</strong> — what the user actually interacts with (browsers, email apps)</li>
        </ol>
      `,
      intermediate: `
        <p>A popular memory trick (bottom to top): <em>"Please Do Not Throw Sausage Pizza Away"</em> (Physical, Data Link, Network, Transport, Session, Presentation, Application).</p>
        <p>When you send data, it travels <strong>down</strong> the stack on your device, getting wrapped with more information at each layer (<strong>encapsulation</strong>), crosses the wire, then travels <strong>up</strong> the stack on the receiving device, getting unwrapped (<strong>decapsulation</strong>).</p>
      `,
      advanced: `
        <p>OSI is a <em>conceptual</em> reference, not literally how the internet is implemented — the real internet uses the simpler 4-layer TCP/IP model. OSI remains the standard teaching/troubleshooting framework because its granularity helps isolate exactly where a problem occurs ("is this a Layer 2 switching issue or a Layer 3 routing issue?").</p>
        <p>Each layer adds its own header as data is encapsulated — a raw Ethernet frame on the wire contains an IP packet, inside which is a TCP segment, inside which is your application data. Tools like Wireshark let you visually peel back these layers.</p>
      `
    },
    quiz: [
      { q: "Which OSI layer handles IP addresses?", options: ["Physical", "Data Link", "Network", "Transport"], correct: 2, explain: "The Network layer (Layer 3) handles IP addressing and routing." },
      { q: "What is 'encapsulation' in networking?", options: ["Encrypting all network traffic", "Wrapping data with extra header info as it moves down the layers", "Compressing data before sending", "Blocking unauthorized devices"], correct: 1, explain: "Encapsulation wraps data with additional headers at each layer as it travels down the stack for sending." },
      { q: "Why do professionals still use the OSI model if the internet runs on TCP/IP?", options: ["It's required by law", "It's more granular and helps isolate exactly where problems occur", "It's faster than TCP/IP", "OSI and TCP/IP are the same thing"], correct: 1, explain: "OSI's extra granularity makes it powerful for troubleshooting and teaching, even though the internet runs on TCP/IP." }
    ]
  },

  {
    id: "tcp-ip-model",
    section: "OSI & TCP/IP Models",
    number: 6,
    title: "The TCP/IP Model",
    difficulty: "Intermediate",
    summary: "The practical 4-layer model that the real internet actually runs on.",
    animation: "layer-stack",
    compareData: {
      layersNumbered: false,
      layers: [
        { name: "Application", detail: "Combines OSI's Session + Presentation + Application — HTTP, DNS, email" },
        { name: "Transport", detail: "Same as OSI's Transport — TCP/UDP reliable or fast delivery" },
        { name: "Internet", detail: "Same as OSI's Network — IP addressing and routing" },
        { name: "Link", detail: "Combines OSI's Physical + Data Link — getting onto the wire/air" }
      ]
    },
    content: {
      basic: `
        <p>While OSI has 7 layers for teaching, the actual internet runs on the simpler <strong>TCP/IP model</strong>, with 4 layers:</p>
        <ol>
          <li><strong>Link</strong> — combines OSI's Physical + Data Link</li>
          <li><strong>Internet</strong> — same as OSI's Network layer (IP addressing)</li>
          <li><strong>Transport</strong> — same as OSI's Transport (TCP/UDP)</li>
          <li><strong>Application</strong> — combines OSI's Session + Presentation + Application</li>
        </ol>
      `,
      intermediate: `
        <p>TCP/IP isn't just simpler — it's the model the internet's actual protocols (IP, TCP, UDP, HTTP, etc.) were built around historically, predating OSI's formal 7-layer design. OSI was created later as a more thorough, vendor-neutral teaching reference.</p>
      `,
      advanced: `
        <p>This is why real protocol stacks don't cleanly map to 7 OSI layers — something like TLS technically spans the boundary between Transport and Application in practice, and many "Session layer" functions are simply absorbed into application logic (e.g. cookies and sessions in HTTP). Understanding both models means knowing OSI is the textbook map, while TCP/IP is the actual territory.</p>
      `
    },
    quiz: [
      { q: "How many layers does the TCP/IP model have?", options: ["7", "5", "4", "3"], correct: 2, explain: "TCP/IP has 4 layers: Link, Internet, Transport, and Application." },
      { q: "Which model actually underlies how the real internet works?", options: ["OSI", "TCP/IP", "Both equally", "Neither"], correct: 1, explain: "The internet's actual protocols were built around the TCP/IP model; OSI is mainly a teaching/reference framework." },
      { q: "What does the TCP/IP 'Application' layer combine from OSI?", options: ["Physical and Data Link", "Session, Presentation, and Application", "Network and Transport", "Just Application"], correct: 1, explain: "TCP/IP's single Application layer absorbs what OSI splits into Session, Presentation, and Application." }
    ]
  },

  {
    id: "encapsulation-decapsulation",
    section: "OSI & TCP/IP Models",
    number: 7,
    title: "How Data Travels (Encapsulation & Decapsulation)",
    difficulty: "Intermediate",
    summary: "The step-by-step process of wrapping and unwrapping data as it crosses a network.",
    animation: "encapsulation",
    content: {
      basic: `
        <p>Imagine mailing a letter: you write the message (data), put it in an envelope (more info added), then put that envelope inside a shipping box (even more info added). That's <strong>encapsulation</strong> — your raw data gets wrapped with extra headers at each layer as it's prepared to be sent.</p>
        <p>When it arrives, the receiver does the reverse — opens the box, then the envelope, to get to the original message. That's <strong>decapsulation</strong>.</p>
      `,
      intermediate: `
        <p>In real networking terms: your application data gets a <strong>TCP header</strong> added (forming a segment), then an <strong>IP header</strong> added (forming a packet), then a <strong>Frame header/trailer</strong> added (forming a frame) before it hits the physical wire. Each header contains the information that specific layer needs to do its job — port numbers for TCP, IP addresses for IP, MAC addresses for the frame.</p>
      `,
      advanced: `
        <p>This layered wrapping is what allows different layers to evolve independently — Ethernet frames don't need to know anything about IP, and IP doesn't need to know anything about TCP vs UDP above it. This is a textbook example of the <strong>separation of concerns</strong> principle in systems design. Packet analysis tools like Wireshark display exactly these nested headers, letting you click into a captured frame and see the Ethernet header, then IP header, then TCP header, then the raw payload, all in sequence.</p>
      `
    },
    quiz: [
      { q: "What is encapsulation similar to in the letter-mailing analogy?", options: ["Throwing away the envelope", "Wrapping a message in increasingly larger containers", "Reading the letter", "Losing the package"], correct: 1, explain: "Encapsulation wraps the original data in successive headers, just like a letter goes into an envelope, then a box." },
      { q: "What is added to data to form a 'segment' in TCP/IP?", options: ["A Frame header", "An IP header", "A TCP header", "A MAC address"], correct: 2, explain: "Adding a TCP header to raw application data forms what's called a segment." },
      { q: "What principle does layered encapsulation demonstrate?", options: ["Encryption", "Separation of concerns", "Compression", "Load balancing"], correct: 1, explain: "Each layer only knows about its own header, letting layers evolve independently — a classic separation of concerns design." }
    ]
  },

  // ============================================================
  // SECTION 3: ADDRESSING
  // ============================================================
  {
    id: "ip-addressing",
    section: "Addressing",
    number: 8,
    title: "IP Addressing (IPv4 Basics)",
    difficulty: "Basic",
    summary: "How every device on a network gets a unique numerical address.",
    animation: "packet-travel",
    compareData: { travel: { partyA: "192.168.1.5", partyB: "192.168.1.10", packetLabel: "PKT" } },
    content: {
      basic: `
        <p>An <strong>IP address</strong> is a unique number assigned to each device on a network, like a postal address for data. IPv4 addresses look like four numbers separated by dots: <code>192.168.1.1</code>, where each number ranges from 0–255.</p>
        <p>There are two main types:</p>
        <ul>
          <li><strong>Public IP:</strong> Visible on the internet, unique worldwide</li>
          <li><strong>Private IP:</strong> Used inside your home/office network, not directly reachable from the internet (e.g. addresses starting with 192.168 or 10.)</li>
        </ul>
      `,
      intermediate: `
        <p>IPv4 has about 4.3 billion possible addresses — which sounds like a lot, but the explosive growth of internet-connected devices exhausted the public supply years ago. This is why private IP ranges exist: many devices inside a home or office share one public IP via a process called <strong>NAT (Network Address Translation)</strong>, covered in its own topic.</p>
      `,
      advanced: `
        <p>The 4.3 billion address ceiling comes from IPv4 using 32 bits (2³² combinations). Address space is further divided into <strong>classes</strong> (historically A, B, C) and reserved ranges (e.g. 127.0.0.1 for localhost, 169.254.x.x for link-local auto-configuration when DHCP fails). Modern networks rely on <strong>CIDR notation</strong> (e.g. /24) rather than the old class system for flexible address allocation — covered in the Subnetting topic.</p>
      `
    },
    quiz: [
      { q: "How many numbers make up an IPv4 address?", options: ["2", "3", "4", "6"], correct: 2, explain: "IPv4 addresses are four numbers (0-255) separated by dots, e.g. 192.168.1.1." },
      { q: "What is a private IP address used for?", options: ["Public websites only", "Devices inside a home/office network not directly reachable from the internet", "Government networks exclusively", "Encrypting traffic"], correct: 1, explain: "Private IPs are used inside local networks and aren't directly routable from the public internet." },
      { q: "Why did IPv4 addresses run out?", options: ["They were too expensive", "32-bit addressing only allows about 4.3 billion combinations, vastly exceeded by connected devices", "ISPs blocked new addresses", "IPv4 was replaced by Wi-Fi"], correct: 1, explain: "IPv4's 32-bit structure caps it at roughly 4.3 billion addresses, which the growth of internet devices exceeded." }
    ]
  },

  {
    id: "subnetting",
    section: "Addressing",
    number: 9,
    title: "Subnetting (CIDR & Subnet Masks)",
    difficulty: "Advanced",
    summary: "Dividing one large network into smaller, more manageable sub-networks.",
    animation: "encapsulation",
    compareData: {
      wraps: [
        { label: "192.168.1.0/24", color: "var(--signal)" },
        { label: "network: 192.168.1 | host: .0", color: "var(--amber)" },
        { label: "256 addresses total", color: "#a78bfa" },
        { label: "254 usable (− network & broadcast)", color: "var(--paper)" }
      ]
    },
    content: {
      basic: `
        <p><strong>Subnetting</strong> means splitting one big network into smaller pieces (subnets). Think of it like dividing one large office floor into separate departments — each with its own space, but still part of the same building.</p>
        <p>A <strong>subnet mask</strong> (like <code>255.255.255.0</code>) tells devices which part of an IP address is the "network" part and which part is the "device" part.</p>
      `,
      intermediate: `
        <p>Modern networking uses <strong>CIDR notation</strong> (Classless Inter-Domain Routing) instead of the old class system — written as a slash followed by a number, like <code>192.168.1.0/24</code>. The number after the slash tells you how many bits are reserved for the network portion; the rest are available for individual devices.</p>
        <p>A /24 network has 8 bits left for devices, meaning 256 possible addresses (minus 2 reserved ones) — a common size for a small office.</p>
      `,
      advanced: `
        <p>Subnetting exists for two key reasons: efficient address allocation (you don't waste a huge address block on a small office) and traffic isolation (broadcast traffic stays within its own subnet, improving performance and security). Calculating subnets requires binary math: the subnet mask is ANDed with an IP address to determine the network portion, and the number of usable hosts in a subnet is 2^(host bits) − 2 (subtracting the network address and broadcast address). VLSM (Variable Length Subnet Masking) takes this further, allowing different-sized subnets within the same network for maximum efficiency.</p>
      `
    },
    quiz: [
      { q: "What does subnetting accomplish?", options: ["Encrypts network traffic", "Divides one large network into smaller, manageable pieces", "Speeds up Wi-Fi signals", "Blocks malicious devices"], correct: 1, explain: "Subnetting splits a large network into smaller subnets for better organization, address efficiency, and traffic isolation." },
      { q: "In CIDR notation /24, how many bits are used for the network portion?", options: ["8", "16", "24", "32"], correct: 2, explain: "The number after the slash (24) indicates how many bits are reserved for the network portion." },
      { q: "Why subtract 2 when calculating usable host addresses in a subnet?", options: ["For redundancy", "To reserve the network address and broadcast address", "Because of rounding", "To leave room for growth"], correct: 1, explain: "Every subnet reserves one address for the network itself and one for broadcasting to all devices in it." }
    ]
  },

  {
    id: "ipv6-basics",
    section: "Addressing",
    number: 10,
    title: "IPv6 Basics",
    difficulty: "Intermediate",
    summary: "The next-generation addressing system designed to solve IPv4's address shortage.",
    animation: "compare-toggle",
    compareData: {
      labelA: "IPv4", labelB: "IPv6",
      descA: "32-bit addresses, about 4.3 billion total — already exhausted. Written as four numbers, e.g. 192.168.1.1. Needs NAT to share addresses.",
      descB: "128-bit addresses, roughly 340 undecillion total — practically unlimited. Written as 8 hex groups, e.g. 2001:db8::8a2e:370:7334. Removes the need for NAT in most cases."
    },
    content: {
      basic: `
        <p><strong>IPv6</strong> is the newer version of IP addressing, created because IPv4 was running out of addresses. Instead of 4 numbers like IPv4, IPv6 addresses are much longer and look like this: <code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code>.</p>
        <p>IPv6 has so many possible addresses that running out again is essentially not a practical concern.</p>
      `,
      intermediate: `
        <p>IPv6 uses 128 bits (vs IPv4's 32 bits), written as 8 groups of 4 hexadecimal digits separated by colons. Leading zeros in a group can be omitted, and one sequence of consecutive zero groups can be replaced with "::" — for example <code>2001:db8::8a2e:370:7334</code>.</p>
        <p>IPv6 also removes the need for NAT in most cases, since every device can have its own public-reachable address.</p>
      `,
      advanced: `
        <p>128 bits gives roughly 340 undecillion addresses (3.4×10³⁸) — enough to assign trillions of addresses to every person on Earth. Beyond just more space, IPv6 simplifies router processing (a fixed, simpler header format vs IPv4's variable options), has built-in support for <strong>IPSec</strong>, and uses <strong>SLAAC</strong> (Stateless Address Autoconfiguration) letting devices self-assign addresses without a DHCP server. Adoption has been slow due to the cost and complexity of migrating existing infrastructure — most networks today run IPv4 and IPv6 simultaneously, a setup called <strong>dual-stack</strong>.</p>
      `
    },
    quiz: [
      { q: "Why was IPv6 created?", options: ["To make networks slower but more secure", "Because IPv4 was running out of available addresses", "To replace Wi-Fi", "To remove the need for routers"], correct: 1, explain: "IPv6 exists primarily to solve IPv4's address exhaustion problem with a vastly larger address space." },
      { q: "How many bits does an IPv6 address use?", options: ["32", "64", "128", "256"], correct: 2, explain: "IPv6 uses 128-bit addresses, compared to IPv4's 32 bits." },
      { q: "What is 'dual-stack' in networking?", options: ["Running two firewalls", "Running IPv4 and IPv6 simultaneously on the same network", "Stacking two routers physically", "A type of VPN"], correct: 1, explain: "Dual-stack means a network supports both IPv4 and IPv6 at the same time during the long migration period." }
    ]
  },

  {
    id: "mac-addresses",
    section: "Addressing",
    number: 11,
    title: "MAC Addresses",
    difficulty: "Basic",
    summary: "The unique hardware identifier built into every network device.",
    animation: "packet-travel",
    compareData: { travel: { partyA: "AA:BB:CC:11", partyB: "DD:EE:FF:22", packetLabel: "FRAME" } },
    content: {
      basic: `
        <p>A <strong>MAC address</strong> (Media Access Control address) is a unique identifier burned into a device's network hardware at the factory — like a serial number. It looks like <code>00:1A:2B:3C:4D:5E</code>.</p>
        <p>Unlike IP addresses (which can change depending on what network you join), a MAC address is meant to stay fixed to the physical network card itself.</p>
      `,
      intermediate: `
        <p>MAC addresses operate at OSI Layer 2 (Data Link) and are used for communication <strong>within</strong> a local network segment — switches use MAC addresses to know exactly which port to forward a frame to. IP addresses, by contrast, operate at Layer 3 and are used to route data <strong>across</strong> different networks. The two work together: IP gets data to the right network, MAC gets it to the right device on that network.</p>
      `,
      advanced: `
        <p>The first half of a MAC address (the first 3 bytes) is the <strong>OUI (Organizationally Unique Identifier)</strong>, assigned to the manufacturer — meaning you can often identify a device's maker just from its MAC address. Despite being "burned in," MAC addresses can be spoofed in software, which is both a legitimate privacy technique (many modern OSes randomize MAC addresses when connecting to public Wi-Fi to prevent tracking) and a potential attack vector (MAC spoofing can be used to bypass MAC-based access control lists).</p>
      `
    },
    quiz: [
      { q: "What is a MAC address primarily used for?", options: ["Routing data across the internet", "Identifying a device within a local network segment", "Encrypting data", "Assigning IP addresses"], correct: 1, explain: "MAC addresses operate at Layer 2 and identify devices within the same local network segment." },
      { q: "What does the first half of a MAC address typically indicate?", options: ["The device's IP address", "The manufacturer (OUI)", "The network's subnet mask", "The device's physical location"], correct: 1, explain: "The first 3 bytes form the OUI, which identifies the manufacturer of the network hardware." },
      { q: "Why might a modern device randomize its MAC address?", options: ["To save battery", "To prevent tracking on public Wi-Fi networks", "To increase internet speed", "It's required by all routers"], correct: 1, explain: "MAC randomization is a privacy feature that prevents a device from being tracked across different Wi-Fi networks over time." }
    ]
  },

  // ============================================================
  // SECTION 4: CORE PROTOCOLS
  // ============================================================
  {
    id: "tcp-vs-udp",
    section: "Core Protocols",
    number: 12,
    title: "TCP vs UDP",
    difficulty: "Intermediate",
    summary: "The two fundamental ways data can be transported across a network.",
    animation: "compare-toggle",
    compareData: {
      labelA: "TCP", labelB: "UDP",
      descA: "Reliable but slower. Guarantees data arrives, in order, resending anything lost. Used for web browsing, email, file downloads.",
      descB: "Fast but unreliable. Sends data with no delivery guarantee or resending. Used for video calls, gaming, live streaming where speed matters more than perfection."
    },
    content: {
      basic: `
        <p><strong>TCP (Transmission Control Protocol):</strong> Reliable but slower. It guarantees data arrives, arrives in order, and resends anything lost. Used for things where accuracy matters — web browsing, email, file downloads.</p>
        <p><strong>UDP (User Datagram Protocol):</strong> Fast but unreliable. It sends data without checking if it arrived or resending lost pieces. Used where speed matters more than perfection — video calls, online gaming, live streaming.</p>
      `,
      intermediate: `
        <p>TCP achieves reliability through the 3-way handshake (establishing the connection), sequence numbers (tracking order), and acknowledgments (confirming receipt) — all of which add overhead. UDP skips all of that, sending data immediately with no setup, no guarantee, and far less overhead, which is exactly why it's preferred when a slightly dropped video frame is acceptable but lag is not.</p>
      `,
      advanced: `
        <p>The real distinction is about trade-offs: TCP optimizes for correctness at the cost of latency (a single lost packet can stall an entire TCP stream waiting for retransmission — called "head-of-line blocking"), while UDP optimizes for latency at the cost of correctness. This is precisely why modern protocols like <strong>QUIC</strong> (which underlies HTTP/3) are built on top of UDP, but reimplement reliability features in a way that avoids TCP's head-of-line blocking — getting most of TCP's correctness with much better real-world performance, especially on lossy mobile networks.</p>
      `
    },
    quiz: [
      { q: "Which protocol guarantees data arrives in order and retransmits lost packets?", options: ["UDP", "TCP", "Both equally", "Neither"], correct: 1, explain: "TCP provides reliability through retransmission and ordering — UDP does not." },
      { q: "Why would a video call prefer UDP over TCP?", options: ["UDP is more secure", "UDP avoids the delay of waiting for retransmitted lost packets", "UDP uses less data overall", "TCP doesn't work over Wi-Fi"], correct: 1, explain: "For live video, a slightly dropped frame is preferable to the lag caused by waiting for TCP retransmission." },
      { q: "What modern protocol is built on UDP but adds back reliability features?", options: ["HTTP/1.1", "FTP", "QUIC (used in HTTP/3)", "DNS"], correct: 2, explain: "QUIC runs over UDP but reimplements reliability in a way that avoids TCP's head-of-line blocking issue." }
    ]
  },

  {
    id: "tcp-handshake",
    section: "Core Protocols",
    number: 13,
    title: "The TCP 3-Way Handshake",
    difficulty: "Intermediate",
    summary: "How two devices agree to start a reliable conversation before sending real data.",
    animation: "handshake",
    content: {
      basic: `
        <p>Before two devices send real data to each other using TCP, they perform a quick "introduction" called the <strong>3-way handshake</strong>:</p>
        <ol>
          <li><strong>SYN</strong> — Computer A says "Hi, I want to talk, here's my starting sequence number."</li>
          <li><strong>SYN-ACK</strong> — Computer B replies "Got it, I want to talk too, here's mine."</li>
          <li><strong>ACK</strong> — Computer A replies "Great, let's go."</li>
        </ol>
        <p>Only after these 3 steps does actual data start flowing.</p>
      `,
      intermediate: `
        <p>This handshake exists because TCP is <strong>connection-oriented and reliable</strong> — unlike UDP, it guarantees data arrives, in order, without duplication. The handshake lets both sides agree on starting <strong>sequence numbers</strong>, used to track exactly which bytes have been sent and received, enabling retransmission of lost data and correct reordering.</p>
      `,
      advanced: `
        <p>The handshake also negotiates options affecting performance and security: <strong>Maximum Segment Size (MSS)</strong>, <strong>window scaling</strong> (for high-throughput connections), and <strong>SACK</strong> support. This handshake is also the target of the classic <strong>SYN flood</strong> denial-of-service attack, where an attacker sends many SYN packets without completing the handshake, exhausting the server's connection table. Modern defenses like <strong>SYN cookies</strong> make servers stateless during the handshake's first step, neutralizing this attack.</p>
      `
    },
    quiz: [
      { q: "What are the three steps of the TCP handshake, in order?", options: ["ACK, SYN, SYN-ACK", "SYN, SYN-ACK, ACK", "SYN, ACK, SYN-ACK", "ACK, ACK, SYN"], correct: 1, explain: "The handshake always goes SYN → SYN-ACK → ACK." },
      { q: "Why does TCP need a handshake but UDP doesn't?", options: ["UDP is older than TCP", "TCP is connection-oriented and reliable; UDP is not", "UDP doesn't use IP addresses", "Handshakes are only needed for encrypted traffic"], correct: 1, explain: "TCP's reliability guarantees require an agreed-upon connection state — UDP skips this for speed." },
      { q: "What attack specifically targets the TCP handshake process?", options: ["Phishing", "SQL Injection", "SYN flood", "Cross-site scripting"], correct: 2, explain: "A SYN flood sends many SYN packets without completing the handshake, exhausting server resources." }
    ]
  },

  {
    id: "dns",
    section: "Core Protocols",
    number: 14,
    title: "DNS — How Domain Names Resolve",
    difficulty: "Intermediate",
    summary: "How a human-readable name like 'example.com' turns into a machine-usable IP address.",
    animation: "dns-lookup",
    content: {
      basic: `
        <p><strong>DNS (Domain Name System)</strong> is like the internet's phone book. Computers communicate using IP addresses, but humans prefer names like google.com. DNS converts the name you type into the IP address your computer actually needs.</p>
        <p>The basic journey:</p>
        <ol>
          <li>Your device asks a <strong>DNS resolver</strong> "what's the IP for this name?"</li>
          <li>The resolver checks its cache — if it doesn't know, it asks further up the chain</li>
          <li>Eventually an answer comes back, and your browser connects directly to that IP address</li>
        </ol>
      `,
      intermediate: `
        <p>DNS is organized as a hierarchy. A full lookup involves a <strong>Root server</strong> (knows where top-level domains like .com live), a <strong>TLD server</strong> (knows the specific domain's nameservers), and the <strong>Authoritative nameserver</strong> (has the actual final answer).</p>
        <p>This hierarchy is why DNS scales to the entire internet — no single server needs to know every domain's address, just who to ask next.</p>
      `,
      advanced: `
        <p>DNS record types beyond the basic A record (IPv4) include <strong>AAAA</strong> (IPv6), <strong>CNAME</strong> (alias), <strong>MX</strong> (mail server), <strong>TXT</strong> (used for SPF/DKIM verification), and <strong>NS</strong> (nameserver delegation).</p>
        <p>DNS is a frequent attack surface: <strong>DNS spoofing/cache poisoning</strong> tricks a resolver into caching a fake answer; <strong>DNS tunneling</strong> abuses queries to smuggle data past firewalls. Defenses include <strong>DNSSEC</strong> (cryptographically signs responses) and <strong>DNS-over-HTTPS/TLS</strong> (encrypts the query itself).</p>
      `
    },
    quiz: [
      { q: "What does DNS primarily do?", options: ["Encrypts internet traffic", "Translates domain names into IP addresses", "Blocks malicious websites", "Speeds up downloads"], correct: 1, explain: "DNS translates human-friendly domain names into IP addresses computers use to connect." },
      { q: "Which DNS record type points to an IPv6 address?", options: ["A", "AAAA", "MX", "CNAME"], correct: 1, explain: "AAAA records map a domain to an IPv6 address; A records handle IPv4." },
      { q: "What does DNSSEC protect against?", options: ["Slow internet speeds", "Tampering with DNS responses", "Too many devices on one network", "Running out of IP addresses"], correct: 1, explain: "DNSSEC cryptographically signs DNS responses, helping ensure they haven't been tampered with." }
    ]
  },

  {
    id: "dhcp",
    section: "Core Protocols",
    number: 15,
    title: "DHCP — How Devices Get IP Addresses",
    difficulty: "Intermediate",
    summary: "The automatic process that assigns an IP address to your device when it joins a network.",
    animation: "handshake",
    compareData: {
      exchange: {
        partyA: "Your device",
        partyB: "DHCP server",
        steps: [
          { label: "Discover", direction: "right", color: "var(--signal)" },
          { label: "Offer", direction: "left", color: "var(--amber)" },
          { label: "Request", direction: "right", color: "var(--signal)" },
          { label: "Acknowledge", direction: "left", color: "var(--amber)" }
        ]
      }
    },
    content: {
      basic: `
        <p><strong>DHCP (Dynamic Host Configuration Protocol)</strong> automatically gives your device an IP address when it joins a network — that's why you can connect to any Wi-Fi network without manually typing in an IP address.</p>
        <p>When your device joins a network, it essentially asks "can someone give me an address?" and a DHCP server (often built into your router) responds with one to use.</p>
      `,
      intermediate: `
        <p>The DHCP process follows 4 steps, often remembered as <strong>DORA</strong>: <strong>Discover</strong> (device broadcasts "is there a DHCP server?"), <strong>Offer</strong> (server responds with an available address), <strong>Request</strong> (device formally asks to use that address), <strong>Acknowledge</strong> (server confirms the assignment).</p>
        <p>Along with the IP address, DHCP also hands out the subnet mask, default gateway, and DNS server addresses — everything a device needs to function on the network.</p>
      `,
      advanced: `
        <p>DHCP leases are temporary, not permanent — addresses are leased for a configurable duration and must be renewed, allowing networks to reclaim addresses from devices that have disconnected. This is critical in environments with limited address pools (like public Wi-Fi). Security-wise, an attacker can run a rogue DHCP server on a network to hand out malicious gateway/DNS settings, redirecting victims' traffic — a technique sometimes paired with ARP spoofing for full man-in-the-middle positioning. Defenses include <strong>DHCP snooping</strong> on managed switches, which only allows DHCP responses from trusted, pre-configured ports.</p>
      `
    },
    quiz: [
      { q: "What does DHCP automatically assign to a device?", options: ["A MAC address", "An IP address (and related network settings)", "A firewall rule", "A domain name"], correct: 1, explain: "DHCP automatically hands out IP addresses plus subnet mask, gateway, and DNS info." },
      { q: "What does the 'D' in the DORA process stand for?", options: ["Delete", "Discover", "Decrypt", "Deny"], correct: 1, explain: "DORA stands for Discover, Offer, Request, Acknowledge — the device starts by broadcasting a Discover message." },
      { q: "What security risk involves DHCP?", options: ["DHCP servers can't be hacked", "A rogue DHCP server can hand out malicious gateway/DNS settings", "DHCP encrypts all network traffic automatically", "DHCP prevents all network attacks"], correct: 1, explain: "An attacker running a rogue DHCP server can redirect victims' traffic by handing out malicious network settings." }
    ]
  },

  {
    id: "http-https",
    section: "Core Protocols",
    number: 16,
    title: "HTTP / HTTPS",
    difficulty: "Basic",
    summary: "The protocol that powers the web, and the secure encrypted version of it.",
    animation: "compare-toggle",
    compareData: {
      labelA: "HTTP", labelB: "HTTPS",
      descA: "Unencrypted. Your browser's requests and the server's responses travel in plain text, readable by anyone watching the connection.",
      descB: "Encrypted with TLS. The entire exchange is wrapped in an encrypted tunnel, hiding the content from network eavesdroppers."
    },
    content: {
      basic: `
        <p><strong>HTTP (HyperText Transfer Protocol)</strong> is the protocol your browser uses to request and receive web pages. <strong>HTTPS</strong> is the same thing, but encrypted using TLS — meaning no one snooping on the connection can read what's being sent.</p>
        <p>You can tell which one you're using by the address bar: <code>http://</code> is unencrypted, <code>https://</code> is encrypted (and shows a lock icon in most browsers).</p>
      `,
      intermediate: `
        <p>HTTP works on a simple request-response model: your browser sends a <strong>request</strong> (e.g. "GET me this page"), and the server sends back a <strong>response</strong> with a status code (200 = OK, 404 = not found, 500 = server error) plus the actual content.</p>
        <p>HTTPS wraps this entire exchange inside a TLS-encrypted tunnel, established before any HTTP data is sent — meaning even the URL path and headers are hidden from network eavesdroppers, though the destination server's IP and domain name (via DNS, unless using DNS-over-HTTPS) typically remain visible.</p>
      `,
      advanced: `
        <p>HTTP has evolved across major versions: HTTP/1.1 (one request per connection at a time, leading to head-of-line blocking), HTTP/2 (multiplexes many requests over one connection, dramatically reducing latency), and HTTP/3 (built on QUIC/UDP instead of TCP, avoiding TCP-level head-of-line blocking entirely). HTTPS's TLS handshake itself has evolved too — TLS 1.3 reduced the handshake to effectively one round trip, compared to two in TLS 1.2, directly improving page load speed. Without HTTPS, an attacker on the same network (e.g. public Wi-Fi) can perform a trivial <strong>man-in-the-middle</strong> attack to read or alter traffic — this is precisely why browsers now flag plain HTTP sites as "Not Secure."</p>
      `
    },
    quiz: [
      { q: "What's the main difference between HTTP and HTTPS?", options: ["HTTPS is faster", "HTTPS encrypts the connection using TLS", "HTTP only works on mobile", "HTTPS doesn't use the internet"], correct: 1, explain: "HTTPS is HTTP wrapped in TLS encryption, protecting the data from eavesdroppers." },
      { q: "What does HTTP status code 404 mean?", options: ["Server error", "Success", "Not found", "Redirect"], correct: 2, explain: "404 means the requested resource was not found on the server." },
      { q: "What major improvement did HTTP/2 introduce?", options: ["Removing the need for IP addresses", "Multiplexing many requests over a single connection", "Eliminating encryption", "Replacing DNS"], correct: 1, explain: "HTTP/2 allows many requests to share one connection simultaneously, reducing latency compared to HTTP/1.1." }
    ]
  },

  {
    id: "ftp-smtp",
    section: "Core Protocols",
    number: 17,
    title: "FTP, SMTP & Other Application Protocols",
    difficulty: "Intermediate",
    summary: "Specialized protocols for file transfer and email, beyond the web's HTTP.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "FTP", desc: "Uploading/downloading files between computers. Port 20/21. Plain FTP sends data in cleartext — use SFTP/FTPS instead." },
        { label: "SMTP", desc: "Sending email between servers. Port 25, or 587 for encrypted submission." },
        { label: "POP3/IMAP", desc: "Retrieving email from a mail server to your device." },
        { label: "SSH", desc: "Securely controlling a remote computer's command line. Port 22, encrypted by design." }
      ]
    },
    content: {
      basic: `
        <p>Beyond HTTP for browsing, other protocols handle specific jobs:</p>
        <ul>
          <li><strong>FTP (File Transfer Protocol):</strong> Uploading/downloading files between computers</li>
          <li><strong>SMTP (Simple Mail Transfer Protocol):</strong> Sending email</li>
          <li><strong>POP3/IMAP:</strong> Retrieving email from a mail server to your device</li>
          <li><strong>SSH (Secure Shell):</strong> Securely controlling a remote computer's command line</li>
        </ul>
      `,
      intermediate: `
        <p>Each of these protocols runs on a specific, well-known <strong>port number</strong> — a kind of "channel number" on top of an IP address that tells the receiving device which service the data is for. FTP traditionally uses ports 20/21, SMTP uses port 25 (or 587 for modern encrypted submission), SSH uses port 22, and HTTP/HTTPS use 80/443.</p>
      `,
      advanced: `
        <p>Plain FTP and the original SMTP/POP3/IMAP were designed in an era before encryption was standard, transmitting credentials and data in cleartext — a serious security liability if intercepted. Modern practice replaces them with encrypted variants: <strong>SFTP</strong> or <strong>FTPS</strong> for file transfer, and SMTP/IMAP/POP3 wrapped in TLS (often called "SMTPS," "IMAPS," etc., typically on different port numbers like 465 or 993). Recognizing which protocol uses which port is also a fundamental skill in network security — unusual port activity is often the first sign of compromise during traffic analysis.</p>
      `
    },
    quiz: [
      { q: "What is SMTP primarily used for?", options: ["Browsing websites", "Sending email", "Transferring files only", "Remote desktop access"], correct: 1, explain: "SMTP (Simple Mail Transfer Protocol) is used to send email between servers." },
      { q: "What is a 'port number' in networking?", options: ["A physical socket on a router", "A number identifying which service on a device the data is meant for", "A type of IP address", "A network cable type"], correct: 1, explain: "Port numbers identify which specific service/application on a device should receive incoming data." },
      { q: "Why is plain (unencrypted) FTP considered a security risk?", options: ["It's too slow", "It transmits credentials and data in cleartext, visible to anyone intercepting traffic", "It doesn't support large files", "It requires a VPN"], correct: 1, explain: "Plain FTP sends data, including login credentials, without encryption — easily readable if intercepted." }
    ]
  },

  // ============================================================
  // SECTION 5: NETWORKING HARDWARE
  // ============================================================
  {
    id: "routers",
    section: "Networking Hardware",
    number: 18,
    title: "Routers",
    difficulty: "Basic",
    summary: "The device that connects different networks together and directs traffic between them.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "Router", desc: "Connects different networks together using IP addresses (Layer 3). Decides where traffic should go next." },
        { label: "Switch", desc: "Connects devices within the same network using MAC addresses (Layer 2)." },
        { label: "Firewall", desc: "Filters traffic in or out based on security rules, often paired with a router." }
      ]
    },
    content: {
      basic: `
        <p>A <strong>router</strong> connects different networks together — most commonly, it connects your home network to the internet. It looks at the destination of incoming data and decides where to send it next.</p>
        <p>Your home router usually does several jobs at once: routing traffic to the internet, running DHCP to assign addresses to your devices, and often acting as a basic firewall.</p>
      `,
      intermediate: `
        <p>Routers operate at OSI Layer 3 (Network), using IP addresses to make forwarding decisions — unlike switches, which operate at Layer 2 using MAC addresses. A router maintains a <strong>routing table</strong>: a list of known networks and the best path to reach each one.</p>
      `,
      advanced: `
        <p>Enterprise and ISP-grade routers build their routing tables dynamically using <strong>routing protocols</strong> (like OSPF or BGP) rather than static manual entries, allowing them to automatically adjust to network failures or new connections within seconds. A router's core job — deciding the "next hop" for a packet based on its destination IP — is computed using algorithms that find the most efficient path through a constantly-changing graph of interconnected networks, which is one of the most studied problems in computer networking.</p>
      `
    },
    quiz: [
      { q: "What is the primary job of a router?", options: ["Storing files", "Connecting different networks and directing traffic between them", "Blocking all incoming traffic", "Assigning MAC addresses"], correct: 1, explain: "Routers connect separate networks (like your home LAN and the internet) and decide how to forward traffic between them." },
      { q: "At which OSI layer do routers primarily operate?", options: ["Layer 1 (Physical)", "Layer 2 (Data Link)", "Layer 3 (Network)", "Layer 7 (Application)"], correct: 2, explain: "Routers work at Layer 3, making forwarding decisions based on IP addresses." },
      { q: "What is a 'routing table'?", options: ["A list of connected MAC addresses", "A list of known networks and the best path to reach each one", "A firewall rule list", "A DNS cache"], correct: 1, explain: "A routing table stores known destination networks along with the best path to reach them." }
    ]
  },

  {
    id: "switches",
    section: "Networking Hardware",
    number: 19,
    title: "Switches",
    difficulty: "Basic",
    summary: "The device that intelligently connects devices within the same local network.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "Switch", desc: "Smart — learns which device is on which port using MAC addresses, sends data only where it needs to go (Layer 2)." },
        { label: "Hub", desc: "Dumb — repeats all incoming data to every port, with no awareness of who it's for." },
        { label: "Router", desc: "Connects different networks together using IP addresses (Layer 3), unlike a switch which stays within one network." }
      ]
    },
    content: {
      basic: `
        <p>A <strong>switch</strong> connects multiple devices within the same local network (like all the computers in an office). Unlike older hubs, a switch is smart — it learns which device is connected to which port and sends data only to the correct destination, instead of blasting it everywhere.</p>
      `,
      intermediate: `
        <p>Switches operate at OSI Layer 2, using <strong>MAC addresses</strong> to make forwarding decisions. They build and maintain a <strong>MAC address table</strong> by watching incoming traffic and noting which MAC address is reachable on which physical port — this is how a switch "learns" the network layout automatically, with no configuration needed.</p>
      `,
      advanced: `
        <p>Modern <strong>managed switches</strong> go far beyond basic forwarding — supporting VLANs (logically separating one physical switch into multiple isolated networks), Quality of Service (prioritizing certain traffic types), port mirroring (copying traffic to a monitoring port for security analysis), and DHCP snooping (preventing rogue DHCP servers). The distinction between an unmanaged "dumb" switch and a managed switch is essentially the difference between a consumer device and enterprise infrastructure capable of being configured, monitored, and secured.</p>
      `
    },
    quiz: [
      { q: "What does a switch use to decide where to send data?", options: ["IP addresses", "MAC addresses", "Domain names", "Port numbers only"], correct: 1, explain: "Switches operate at Layer 2 and use MAC addresses to forward data to the correct device." },
      { q: "How does a switch learn which device is on which port?", options: ["Manual configuration is always required", "By watching incoming traffic and noting source MAC addresses per port", "It asks a DNS server", "It uses GPS"], correct: 1, explain: "Switches automatically build a MAC address table by observing the source address of incoming frames on each port." },
      { q: "What is a key feature of managed switches that basic unmanaged switches lack?", options: ["The ability to power on", "VLAN support for logically separating networks", "The ability to connect cables", "Basic data forwarding"], correct: 1, explain: "Managed switches support advanced features like VLANs, QoS, and port mirroring — unmanaged switches just forward traffic with no configuration." }
    ]
  },

  {
    id: "hubs",
    section: "Networking Hardware",
    number: 20,
    title: "Hubs",
    difficulty: "Basic",
    summary: "The simplest (and now mostly obsolete) device for connecting devices on a network.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "Hub", desc: "Repeats incoming data to every other port with zero intelligence. Operates at Layer 1 (Physical) only." },
        { label: "Switch", desc: "Learns which device is on which port and forwards data only where it needs to go. Replaced hubs almost entirely." },
        { label: "Router", desc: "Connects entirely separate networks together, unlike a hub which just repeats signals within one." }
      ]
    },
    content: {
      basic: `
        <p>A <strong>hub</strong> is the simplest networking device — when data arrives on one port, it repeats that data out to <strong>every other port</strong>, with zero intelligence about who it's actually meant for. Every connected device receives all traffic and has to figure out for itself whether a message was meant for it.</p>
      `,
      intermediate: `
        <p>This "repeat to everyone" behavior makes hubs extremely inefficient as more devices are added — all devices share the same bandwidth and the same <strong>collision domain</strong> (only one device can successfully transmit at a time without data colliding). This is exactly why switches replaced hubs almost entirely in modern networks.</p>
      `,
      advanced: `
        <p>Hubs operate purely at OSI Layer 1 (Physical) — they have no concept of MAC addresses, frames, or any data structure at all; they simply repeat electrical signals. This also makes hubs a security liability in any context where they still appear: since every device sees all traffic, a single compromised or malicious device can passively capture (sniff) all data flowing through the hub with zero special effort, including unencrypted passwords or session data. You'll essentially never find hubs in modern production networks — they're mainly of historical/educational interest now.</p>
      `
    },
    quiz: [
      { q: "What does a hub do when data arrives on one port?", options: ["Sends it only to the intended device", "Repeats it to every other connected port", "Blocks it for inspection", "Encrypts it"], correct: 1, explain: "Hubs have no intelligence — they repeat incoming data to all other ports regardless of the intended destination." },
      { q: "What networking concept describes devices on a hub competing to transmit without colliding?", options: ["Subnet mask", "Collision domain", "DNS cache", "Routing table"], correct: 1, explain: "All devices on a hub share one collision domain, meaning only one can transmit successfully at a time." },
      { q: "Why are hubs considered a security risk where they still exist?", options: ["They use too much power", "Any connected device can passively see all network traffic", "They don't support IP addresses", "They're too expensive to replace"], correct: 1, explain: "Since hubs broadcast all traffic to every port, any device can capture all data flowing through it with no special effort." }
    ]
  },

  {
    id: "firewalls",
    section: "Networking Hardware",
    number: 21,
    title: "Firewalls",
    difficulty: "Intermediate",
    summary: "The security checkpoint that filters traffic entering or leaving a network.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "Packet Filter", desc: "Checks individual packets against simple rules (e.g. block port 23), with no awareness of the broader conversation." },
        { label: "Stateful Firewall", desc: "Tracks entire connections, automatically allowing return traffic for connections you initiated." },
        { label: "NGFW", desc: "Next-Generation Firewall — inspects traffic up to the Application layer, detecting malware patterns via deep packet inspection." }
      ]
    },
    content: {
      basic: `
        <p>A <strong>firewall</strong> is a security checkpoint that inspects network traffic and decides whether to allow or block it, based on a set of rules. Think of it as a bouncer for your network — checking IDs (source/destination, port, protocol) before letting anything through.</p>
        <p>Firewalls exist as both standalone hardware devices and as software running on individual computers (like the built-in firewall on Windows or macOS).</p>
      `,
      intermediate: `
        <p>Basic firewalls use <strong>packet filtering</strong> — checking individual packets against rules like "block all traffic to port 23" without any awareness of the broader conversation. More advanced <strong>stateful firewalls</strong> track entire connections, understanding that a response packet belongs to a connection you initiated, and allowing it through automatically — even if no specific rule mentions it — while still blocking unsolicited inbound traffic.</p>
      `,
      advanced: `
        <p>Modern <strong>Next-Generation Firewalls (NGFW)</strong> go further, inspecting traffic up to Layer 7 (Application) — meaning they can distinguish between different applications using the same port, detect and block malware signatures within traffic, and integrate with intrusion prevention systems. This is fundamentally different from simple port-blocking: an NGFW might allow port 443 (HTTPS) traffic for normal web browsing but block it specifically when it detects traffic patterns matching a known command-and-control channel — a capability sometimes called "deep packet inspection."</p>
      `
    },
    quiz: [
      { q: "What is the basic job of a firewall?", options: ["Speed up internet connections", "Inspect traffic and decide whether to allow or block it based on rules", "Assign IP addresses", "Translate domain names"], correct: 1, explain: "A firewall filters traffic according to a rule set, blocking or allowing it based on criteria like source, destination, and port." },
      { q: "What distinguishes a 'stateful' firewall from a basic packet filter?", options: ["It's faster at encryption", "It tracks entire connections, not just individual packets in isolation", "It only works on wireless networks", "It blocks all traffic by default with no exceptions"], correct: 1, explain: "Stateful firewalls understand connection context, automatically allowing return traffic for connections you initiated." },
      { q: "What capability defines a Next-Generation Firewall (NGFW)?", options: ["Only blocking specific IP addresses", "Inspecting traffic up to the Application layer, including detecting malware patterns", "Running exclusively on mobile devices", "Replacing the need for routers"], correct: 1, explain: "NGFWs perform deep packet inspection at the application layer, going far beyond simple port/IP filtering." }
    ]
  },

  {
    id: "modems-access-points",
    section: "Networking Hardware",
    number: 22,
    title: "Modems & Access Points",
    difficulty: "Basic",
    summary: "The devices that connect your home to the internet and provide wireless access.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "Modem", desc: "Connects your home network to your Internet Service Provider, translating between their infrastructure and your equipment." },
        { label: "Access Point", desc: "Provides wireless (Wi-Fi) connectivity, letting devices join the network without a cable." },
        { label: "Router", desc: "Connects networks together and directs traffic. Many home devices combine modem + router + access point in one box." }
      ]
    },
    content: {
      basic: `
        <p>A <strong>modem</strong> connects your home network to your Internet Service Provider (ISP), translating signals between your provider's infrastructure (cable, fiber, DSL) and the networking equipment in your home.</p>
        <p>An <strong>access point (AP)</strong> provides wireless (Wi-Fi) connectivity, letting devices join the network without a cable. Many home "routers" are actually combo devices — modem + router + access point all in one box.</p>
      `,
      intermediate: `
        <p>Separating these functions matters more in larger setups: a business might have one modem (provided by the ISP), a separate dedicated router (handling traffic decisions), and multiple access points spread around a building to provide consistent Wi-Fi coverage everywhere — all working together rather than being one all-in-one box.</p>
      `,
      advanced: `
        <p>In enterprise environments, access points are typically <strong>centrally managed</strong> by a wireless controller, allowing seamless handoff as a device moves between APs (so a phone walking through a building doesn't drop its connection switching from one AP's coverage to another's), consistent security policy enforcement across all APs, and coordinated channel/power management to minimize interference between nearby APs — a discipline called RF (radio frequency) planning, critical in dense deployments like stadiums or large offices.</p>
      `
    },
    quiz: [
      { q: "What does a modem primarily do?", options: ["Provide Wi-Fi only", "Connect your home network to your Internet Service Provider", "Block malicious traffic", "Assign MAC addresses"], correct: 1, explain: "A modem translates between your ISP's infrastructure and your home network equipment." },
      { q: "What does an access point provide?", options: ["Wired-only connectivity", "Wireless (Wi-Fi) connectivity for devices", "DNS resolution", "Email delivery"], correct: 1, explain: "Access points let devices connect to the network wirelessly via Wi-Fi." },
      { q: "Why do enterprise deployments use centrally managed access points?", options: ["To save electricity", "To enable seamless handoff between APs and consistent security policy", "Because single APs are illegal in offices", "To eliminate the need for a router"], correct: 1, explain: "Centralized management allows smooth device handoff between APs and consistent security and channel planning across a building." }
    ]
  },

  // ============================================================
  // SECTION 6: ROUTING & SWITCHING
  // ============================================================
  {
    id: "how-routing-works",
    section: "Routing & Switching",
    number: 23,
    title: "How Routing Works (Static vs Dynamic)",
    difficulty: "Intermediate",
    summary: "The two fundamental approaches routers use to decide where to send traffic.",
    animation: "compare-toggle",
    compareData: {
      labelA: "Static Routing", labelB: "Dynamic Routing",
      descA: "An administrator manually types in the exact path data should take. Simple and predictable, but never adapts automatically if the network changes.",
      descB: "Routers automatically share information and calculate the best paths themselves, adapting in real time if a link goes down."
    },
    content: {
      basic: `
        <p><strong>Static routing</strong> means a network administrator manually types in the exact path data should take — simple but inflexible, since it never adapts automatically if something changes.</p>
        <p><strong>Dynamic routing</strong> means routers automatically share information with each other and figure out the best paths themselves, adapting in real time if a link goes down.</p>
      `,
      intermediate: `
        <p>Static routing makes sense for small, simple, rarely-changing networks — it's predictable and doesn't consume processing power on calculations. Dynamic routing makes sense for larger or more complex networks where manually updating every router's configuration every time something changes would be impossible to maintain.</p>
      `,
      advanced: `
        <p>Dynamic routing protocols fall into two broad families: <strong>distance-vector</strong> protocols (like RIP), which share entire routing tables with neighbors and choose paths based on simple metrics like hop count, and <strong>link-state</strong> protocols (like OSPF), which build a complete map of the network topology and calculate the mathematically shortest path using algorithms like Dijkstra's. Link-state protocols converge faster and scale better but require more processing power and memory — a classic engineering trade-off repeated throughout networking.</p>
      `
    },
    quiz: [
      { q: "What is the main drawback of static routing?", options: ["It's too expensive", "It doesn't automatically adapt if the network changes", "It requires too much processing power", "It only works wirelessly"], correct: 1, explain: "Static routes are manually configured and won't adjust automatically if a link fails or the network changes." },
      { q: "What do link-state routing protocols build to calculate paths?", options: ["A list of MAC addresses", "A complete map of the network topology", "A DNS cache", "A firewall rule set"], correct: 1, explain: "Link-state protocols like OSPF build a full topology map and calculate shortest paths using algorithms like Dijkstra's." },
      { q: "Why might a small, simple network prefer static routing?", options: ["It's required by law", "It's predictable and doesn't consume processing power on calculations", "It's the only option for small networks", "Dynamic routing doesn't work on small networks"], correct: 1, explain: "For simple, rarely-changing networks, static routing's simplicity outweighs the benefits of automatic adaptation." }
    ]
  },

  {
    id: "routing-protocols",
    section: "Routing & Switching",
    number: 24,
    title: "Routing Protocols (RIP, OSPF, BGP)",
    difficulty: "Advanced",
    summary: "The specific languages routers use to share path information with each other.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "RIP", desc: "Very old and simple — picks paths based on hop count alone. Rarely used today." },
        { label: "OSPF", desc: "Widely used inside large organizations. Calculates the truly shortest path considering link speed (a link-state protocol)." },
        { label: "BGP", desc: "Holds the entire internet together. Used between different organizations/ISPs that don't automatically trust each other." }
      ]
    },
    content: {
      basic: `
        <p>Three commonly mentioned routing protocols, from simplest to most complex:</p>
        <ul>
          <li><strong>RIP (Routing Information Protocol):</strong> Very old and simple, picks paths based on hop count alone. Rarely used today.</li>
          <li><strong>OSPF (Open Shortest Path First):</strong> Used widely inside large organizations, calculates the truly shortest path considering link speed.</li>
          <li><strong>BGP (Border Gateway Protocol):</strong> The protocol that holds the entire internet together, used between different organizations/ISPs.</li>
        </ul>
      `,
      intermediate: `
        <p>RIP and OSPF are both <strong>Interior Gateway Protocols (IGPs)</strong> — used within a single organization's network. BGP is an <strong>Exterior Gateway Protocol (EGP)</strong> — used between separate autonomous networks (like different ISPs) that don't automatically trust each other. This is a fundamentally different problem: IGPs optimize for the fastest technical path, while BGP often factors in business relationships and policy (an ISP might intentionally avoid routing through a competitor even if that path is technically faster).</p>
      `,
      advanced: `
        <p>BGP is essentially the protocol that makes "the internet" a single connected entity rather than thousands of separate networks — every major ISP runs BGP to announce which IP ranges it can deliver traffic to. This also makes BGP a critical point of trust: because BGP has historically had limited built-in verification, a misconfigured or malicious BGP announcement (called a <strong>route hijack</strong>) can redirect huge portions of internet traffic to the wrong place — this has happened accidentally (taking down major services for hours) and has also been used deliberately for traffic interception. Newer efforts like <strong>RPKI (Resource Public Key Infrastructure)</strong> aim to cryptographically verify that an organization is authorized to announce a given IP range.</p>
      `
    },
    quiz: [
      { q: "Which protocol holds the global internet together by connecting different ISPs?", options: ["RIP", "OSPF", "BGP", "DHCP"], correct: 2, explain: "BGP (Border Gateway Protocol) is the Exterior Gateway Protocol used between separate autonomous networks like ISPs." },
      { q: "What does IGP stand for, and where is it used?", options: ["Interior Gateway Protocol — within a single organization's network", "Internet Generation Protocol — for new devices only", "Internal Group Process — for firewall rules", "Initial Gateway Process — for first-time setup"], correct: 0, explain: "Interior Gateway Protocols like RIP and OSPF operate within one organization's network, unlike BGP which works between organizations." },
      { q: "What is a 'BGP route hijack'?", options: ["A type of virus", "A misconfigured or malicious announcement that redirects internet traffic incorrectly", "A firewall feature", "A DNS attack"], correct: 1, explain: "A route hijack happens when BGP announces incorrect routing information, redirecting traffic — sometimes accidentally, sometimes maliciously." }
    ]
  },

  {
    id: "vlans",
    section: "Routing & Switching",
    number: 25,
    title: "VLANs (Virtual LANs)",
    difficulty: "Intermediate",
    summary: "Logically separating one physical network into multiple isolated virtual networks.",
    animation: "topology",
    compareData: {
      diagrams: [
        { label: "VLAN 10 (Guest)", svg: `
          <circle cx="100" cy="80" r="10" fill="var(--ink)" stroke="var(--signal)" stroke-width="2"/>
          <circle cx="160" cy="80" r="10" fill="var(--ink)" stroke="var(--signal)" stroke-width="2"/>
          <circle cx="130" cy="40" r="10" fill="var(--ink)" stroke="var(--signal)" stroke-width="2"/>
          <line x1="130" y1="40" x2="100" y2="80" stroke="var(--ink-line)" stroke-width="2"/>
          <line x1="130" y1="40" x2="160" y2="80" stroke="var(--ink-line)" stroke-width="2"/>
          <text x="130" y="115" fill="var(--slate)" font-family="IBM Plex Mono" font-size="11" text-anchor="middle">isolated — Guest devices</text>
        `},
        { label: "VLAN 20 (Employees)", svg: `
          <circle cx="270" cy="80" r="10" fill="var(--ink)" stroke="var(--amber)" stroke-width="2"/>
          <circle cx="330" cy="80" r="10" fill="var(--ink)" stroke="var(--amber)" stroke-width="2"/>
          <circle cx="300" cy="40" r="10" fill="var(--ink)" stroke="var(--amber)" stroke-width="2"/>
          <line x1="300" y1="40" x2="270" y2="80" stroke="var(--ink-line)" stroke-width="2"/>
          <line x1="300" y1="40" x2="330" y2="80" stroke="var(--ink-line)" stroke-width="2"/>
          <text x="300" y="115" fill="var(--slate)" font-family="IBM Plex Mono" font-size="11" text-anchor="middle">isolated — Employee devices</text>
        `},
        { label: "Both (same switch)", svg: `
          <rect x="80" y="170" width="280" height="24" rx="4" fill="none" stroke="var(--ink-line)" stroke-width="2"/>
          <text x="220" y="186" fill="var(--slate)" font-family="IBM Plex Mono" font-size="10" text-anchor="middle">one physical switch</text>
          <circle cx="100" cy="80" r="10" fill="var(--ink)" stroke="var(--signal)" stroke-width="2"/>
          <circle cx="160" cy="80" r="10" fill="var(--ink)" stroke="var(--signal)" stroke-width="2"/>
          <circle cx="270" cy="80" r="10" fill="var(--ink)" stroke="var(--amber)" stroke-width="2"/>
          <circle cx="330" cy="80" r="10" fill="var(--ink)" stroke="var(--amber)" stroke-width="2"/>
          <line x1="100" y1="80" x2="100" y2="170" stroke="var(--signal)" stroke-width="2"/>
          <line x1="160" y1="80" x2="160" y2="170" stroke="var(--signal)" stroke-width="2"/>
          <line x1="270" y1="80" x2="270" y2="170" stroke="var(--amber)" stroke-width="2"/>
          <line x1="330" y1="80" x2="330" y2="170" stroke="var(--amber)" stroke-width="2"/>
          <text x="220" y="230" fill="var(--slate)" font-family="IBM Plex Mono" font-size="11" text-anchor="middle">same hardware, two separate networks</text>
        `}
      ]
    },
    content: {
      basic: `
        <p>A <strong>VLAN (Virtual LAN)</strong> lets you logically split one physical switch/network into multiple separate networks, even though everything is plugged into the same physical hardware. Devices in different VLANs can't talk to each other directly, even if connected to the exact same switch — just like having multiple separate networks, without needing separate physical switches for each.</p>
      `,
      intermediate: `
        <p>VLANs are commonly used to separate traffic by department or purpose — e.g. a "Guest Wi-Fi" VLAN, an "Employees" VLAN, and a "Security Cameras" VLAN, all on the same physical infrastructure but logically isolated from each other for both organization and security. Each VLAN gets tagged with an ID number, and switches use that tag (defined by the <strong>802.1Q</strong> standard) to know which logical network a piece of traffic belongs to.</p>
      `,
      advanced: `
        <p>VLANs operate at OSI Layer 2, meaning devices in different VLANs cannot communicate without a Layer 3 device (a router, or a switch with routing capability called a "Layer 3 switch") to pass traffic between them — this is intentional, since it lets administrators control exactly which VLANs are allowed to talk to each other through firewall-like rules at that routing point. This is a foundational technique in network segmentation, a core cybersecurity principle: if an attacker compromises one device on the "Guest" VLAN, proper VLAN isolation prevents them from directly reaching sensitive devices on the "Employees" or "Servers" VLAN.</p>
      `
    },
    quiz: [
      { q: "What does a VLAN allow you to do?", options: ["Increase internet speed", "Logically separate one physical network into isolated virtual networks", "Replace the need for IP addresses", "Eliminate the need for switches"], correct: 1, explain: "VLANs let you create multiple logically isolated networks on the same physical switching hardware." },
      { q: "What standard defines VLAN tagging?", options: ["802.11", "802.1Q", "TCP/IP", "DHCP"], correct: 1, explain: "The 802.1Q standard defines how VLAN tags are added to network traffic." },
      { q: "How does VLAN segmentation improve security?", options: ["It encrypts all traffic automatically", "It limits how far an attacker can move if they compromise one device", "It blocks all internet access", "It eliminates the need for passwords"], correct: 1, explain: "Proper VLAN isolation contains a compromise to one segment, preventing direct lateral movement to other VLANs." }
    ]
  },

  {
    id: "nat",
    section: "Routing & Switching",
    number: 26,
    title: "NAT (Network Address Translation)",
    difficulty: "Intermediate",
    summary: "How many private devices share a single public IP address.",
    animation: "encapsulation",
    compareData: {
      wraps: [
        { label: "192.168.1.5 (private)", color: "var(--signal)" },
        { label: "router translates the address", color: "var(--amber)" },
        { label: "203.0.113.1 (shared public IP)", color: "#a78bfa" },
        { label: "response routed back to .5 via port table", color: "var(--paper)" }
      ]
    },
    content: {
      basic: `
        <p><strong>NAT (Network Address Translation)</strong> lets many devices on a private network (using private IP addresses) share one single public IP address when accessing the internet. Your router does this automatically — every device in your home shares your one public IP, even though each has its own private IP internally.</p>
      `,
      intermediate: `
        <p>The most common form, <strong>PAT (Port Address Translation)</strong> — sometimes just called NAT — tracks which internal device made which outgoing connection by assigning each one a unique combination of port numbers, then translating responses back to the correct internal device. This is what lets dozens of devices in a house share one public IP simultaneously without confusion.</p>
      `,
      advanced: `
        <p>NAT was originally a stopgap measure to slow IPv4 address exhaustion, but it has had a lasting side effect: it acts as an implicit, basic firewall, since unsolicited inbound connections have no NAT table entry to match against and are dropped by default — this is part of why home networks have historically been reasonably safe from direct internet-based attacks without much active configuration. However, NAT also complicates certain applications (like peer-to-peer connections or some VoIP setups) that need a way for outside devices to initiate contact, which is solved using techniques like <strong>port forwarding</strong>, <strong>STUN/TURN</strong> servers, or <strong>UPnP</strong> (automatic, sometimes risky, NAT traversal).</p>
      `
    },
    quiz: [
      { q: "What is the main purpose of NAT?", options: ["To encrypt traffic", "To let many private devices share one public IP address", "To assign MAC addresses", "To block malicious websites"], correct: 1, explain: "NAT translates between private internal addresses and a single shared public address." },
      { q: "What does PAT add on top of basic NAT?", options: ["Encryption", "Tracking connections using unique port number combinations", "DNS resolution", "Wireless connectivity"], correct: 1, explain: "PAT (Port Address Translation) uses port numbers to track which internal device owns which outgoing connection." },
      { q: "Why does NAT act like a basic firewall?", options: ["It encrypts all data", "Unsolicited inbound connections have no matching NAT entry and get dropped", "It blocks all websites by default", "It requires a password for every connection"], correct: 1, explain: "Since NAT only expects responses to connections initiated from inside, unrequested inbound traffic has nothing to match against and is dropped." }
    ]
  },

  // ============================================================
  // SECTION 7: WIRELESS NETWORKING
  // ============================================================
  {
    id: "wifi-standards",
    section: "Wireless Networking",
    number: 27,
    title: "Wi-Fi Standards (802.11 a/b/g/n/ac/ax)",
    difficulty: "Basic",
    summary: "The evolving generations of wireless networking technology.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "802.11b/g", desc: "Early Wi-Fi, slow by today's standards." },
        { label: "802.11n (Wi-Fi 4)", desc: "Introduced multiple antennas for better speed and range." },
        { label: "802.11ac (Wi-Fi 5)", desc: "Much faster, widely used today." },
        { label: "802.11ax (Wi-Fi 6/6E)", desc: "Current generation — better performance in crowded environments using OFDMA." }
      ]
    },
    content: {
      basic: `
        <p>Wi-Fi has evolved through several generations, each faster and more capable than the last, all part of the <strong>802.11</strong> family of standards:</p>
        <ul>
          <li><strong>802.11b/g:</strong> Early Wi-Fi, slow by today's standards</li>
          <li><strong>802.11n (Wi-Fi 4):</strong> Introduced multiple antennas for better speed/range</li>
          <li><strong>802.11ac (Wi-Fi 5):</strong> Much faster, widely used today</li>
          <li><strong>802.11ax (Wi-Fi 6/6E):</strong> The current generation, better performance in crowded environments</li>
        </ul>
      `,
      intermediate: `
        <p>Newer Wi-Fi generations didn't just get "faster" in a simple sense — they improved how efficiently the limited radio spectrum is shared among many devices. Wi-Fi 6 (802.11ax), for example, introduced <strong>OFDMA</strong> (Orthogonal Frequency-Division Multiple Access), letting an access point serve multiple devices in a single transmission instead of one at a time — hugely beneficial in crowded places like stadiums or apartment buildings.</p>
      `,
      advanced: `
        <p>Wi-Fi standards operate across different frequency bands with different trade-offs: 2.4GHz has longer range but more interference (shared with microwaves, Bluetooth, and many other devices) and fewer non-overlapping channels; 5GHz offers more bandwidth and less interference but shorter range and worse wall penetration; 6GHz (Wi-Fi 6E) opens a wide swath of clean, uncongested spectrum but with even shorter range. Modern access points often perform <strong>band steering</strong>, automatically nudging capable devices toward the better-performing band, balancing the network without requiring manual intervention.</p>
      `
    },
    quiz: [
      { q: "What family of standards does all modern Wi-Fi belong to?", options: ["802.3", "802.11", "TCP/IP", "OSI"], correct: 1, explain: "Wi-Fi standards are all part of the IEEE 802.11 family." },
      { q: "What key improvement did Wi-Fi 6 (802.11ax) introduce?", options: ["The ability to use Ethernet cables", "OFDMA, letting an access point serve multiple devices in a single transmission", "Unlimited range", "Mandatory encryption for the first time"], correct: 1, explain: "OFDMA allows efficient sharing of a single transmission among multiple devices, improving performance in crowded environments." },
      { q: "What is a trade-off of the 5GHz Wi-Fi band compared to 2.4GHz?", options: ["More interference, less bandwidth", "More bandwidth and less interference, but shorter range", "It can't be used indoors", "It requires a wired connection"], correct: 1, explain: "5GHz offers more bandwidth and less congestion but doesn't travel as far or penetrate walls as well as 2.4GHz." }
    ]
  },

  {
    id: "wireless-security",
    section: "Wireless Networking",
    number: 28,
    title: "Wireless Security (WEP, WPA, WPA2, WPA3)",
    difficulty: "Intermediate",
    summary: "The evolution of Wi-Fi encryption standards, from badly broken to genuinely secure.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "WEP", desc: "The original, extremely weak — broken in minutes with free tools. Never use this." },
        { label: "WPA", desc: "A quick fix for WEP's flaws, still considered weak today." },
        { label: "WPA2", desc: "Strong and widely used for over a decade, using AES encryption. Still acceptable if WPA3 isn't available." },
        { label: "WPA3", desc: "The current standard — adds SAE key exchange and Enhanced Open for encrypting even password-free networks." }
      ]
    },
    content: {
      basic: `
        <p>Wi-Fi security has evolved through several standards:</p>
        <ul>
          <li><strong>WEP:</strong> The original, extremely weak — broken in minutes with free tools. Never use this.</li>
          <li><strong>WPA:</strong> A quick fix for WEP's flaws, still considered weak today.</li>
          <li><strong>WPA2:</strong> Strong and widely used for over a decade, still acceptable if WPA3 isn't available.</li>
          <li><strong>WPA3:</strong> The current standard, with stronger protections, especially on public networks.</li>
        </ul>
      `,
      intermediate: `
        <p>WEP's weakness came from fundamentally flawed cryptographic design — it reused encryption keys in a way that let attackers mathematically recover the password by capturing enough traffic, regardless of password strength. WPA2 fixed this with much stronger encryption (AES), but introduced its own well-known weakness in the 4-way handshake used when devices connect, which can be captured and attacked offline.</p>
      `,
      advanced: `
        <p>WPA3 addresses WPA2's handshake weakness with <strong>SAE (Simultaneous Authentication of Equals)</strong>, a more robust key exchange that resists offline password-guessing attacks even if an attacker captures the entire handshake — a property called "forward secrecy" combined with resistance to offline dictionary attacks. WPA3 also introduces <strong>Enhanced Open</strong>, which encrypts traffic even on networks with no password at all (like public Wi-Fi), protecting against passive eavesdropping in scenarios that were previously completely unencrypted. Despite WPA3's existence, mixed-mode networks (supporting both WPA2 and WPA3 simultaneously, for backward compatibility) can sometimes be downgraded by an attacker to force the weaker WPA2 handshake — a reminder that backward compatibility itself is often a security trade-off.</p>
      `
    },
    quiz: [
      { q: "Which Wi-Fi security standard is considered extremely weak and should never be used?", options: ["WPA3", "WPA2", "WEP", "WPA"], correct: 2, explain: "WEP has fundamental cryptographic flaws and can be broken in minutes with widely available tools." },
      { q: "What encryption does WPA2 use that WEP lacked?", options: ["No encryption at all", "AES, a much stronger encryption standard", "Only password-based locking", "Bluetooth pairing"], correct: 1, explain: "WPA2 introduced AES encryption, far stronger than WEP's broken cryptographic design." },
      { q: "What does WPA3's 'Enhanced Open' feature do?", options: ["Removes the need for passwords entirely on all networks", "Encrypts traffic even on networks with no password, protecting against passive eavesdropping", "Makes Wi-Fi faster", "Blocks all unknown devices automatically"], correct: 1, explain: "Enhanced Open encrypts traffic even on open (no-password) networks, which were previously sent completely in the clear." }
    ]
  },

  // ============================================================
  // SECTION 8: NETWORK SECURITY BASICS
  // ============================================================
  {
    id: "vpns",
    section: "Network Security Basics",
    number: 29,
    title: "VPNs (Virtual Private Networks)",
    difficulty: "Intermediate",
    summary: "How an encrypted tunnel lets you securely access a network or browse privately.",
    animation: "packet-travel",
    compareData: { travel: { partyA: "You", partyB: "VPN Server", packetLabel: "🔒" } },
    content: {
      basic: `
        <p>A <strong>VPN (Virtual Private Network)</strong> creates an encrypted "tunnel" between your device and a VPN server. All your traffic travels through this tunnel, hidden from anyone watching the network in between (like on public Wi-Fi) — and to websites you visit, your traffic appears to come from the VPN server's location, not your own.</p>
      `,
      intermediate: `
        <p>VPNs serve two main use cases: <strong>remote access</strong> (an employee connecting securely into their company's private network from home, as if physically in the office) and <strong>privacy/location masking</strong> (consumer VPN services hiding your traffic from your ISP and changing your apparent location). Both rely on the same core idea — an encrypted tunnel — but are configured very differently for each purpose.</p>
      `,
      advanced: `
        <p>Modern VPN protocols include <strong>IPsec</strong> (often used for site-to-site or enterprise remote access, operating at the Network layer), <strong>OpenVPN</strong> (widely supported, flexible, runs over standard TCP/UDP), and <strong>WireGuard</strong> (a newer, much simpler codebase — making it easier to audit for security flaws — with excellent performance). It's important to understand a VPN's actual security boundary: it protects your traffic from your local network and ISP, but the VPN provider itself can see everything you do unless you have other end-to-end protections in place — meaning a VPN shifts trust rather than eliminating it.</p>
      `
    },
    quiz: [
      { q: "What does a VPN fundamentally create?", options: ["A faster internet connection", "An encrypted tunnel between your device and a VPN server", "A new IP address permanently assigned to your device", "A firewall rule"], correct: 1, explain: "A VPN's core function is an encrypted tunnel that protects traffic from being seen by anyone in between." },
      { q: "What are the two main use cases for VPNs?", options: ["Gaming and streaming only", "Remote access to a private network, and privacy/location masking", "Sending email and browsing only", "Replacing Wi-Fi entirely"], correct: 1, explain: "VPNs are used both for secure remote access to private networks and for general privacy/location masking." },
      { q: "What is an important limitation of VPN privacy protection?", options: ["VPNs slow down all traffic to zero", "The VPN provider itself can see your traffic unless other protections are in place", "VPNs only work on mobile devices", "VPNs can't be detected at all"], correct: 1, explain: "A VPN shifts who can see your traffic — your ISP can't, but the VPN provider potentially can, unless additional end-to-end protections exist." }
    ]
  },

  {
    id: "proxies",
    section: "Network Security Basics",
    number: 30,
    title: "Proxies",
    difficulty: "Intermediate",
    summary: "An intermediary server that sits between you and the internet, relaying requests on your behalf.",
    animation: "packet-travel",
    compareData: { travel: { partyA: "You", partyB: "Website", packetLabel: "REQ" } },
    content: {
      basic: `
        <p>A <strong>proxy server</strong> sits between your device and the internet, forwarding your requests on your behalf. To the website you're visiting, the request appears to come from the proxy, not from you directly.</p>
        <p>Common uses include hiding your IP address, accessing content restricted by location, and organizations filtering/monitoring employee internet access.</p>
      `,
      intermediate: `
        <p>Proxies and VPNs are often confused but solve different problems. A typical proxy operates at the application level (often just for specific traffic, like web browsing) and frequently isn't encrypted between you and the proxy — whereas a VPN encrypts and tunnels <strong>all</strong> traffic at the network level, regardless of application. A proxy is often faster and simpler for narrow use cases (like routing only browser traffic) but provides weaker overall privacy guarantees.</p>
      `,
      advanced: `
        <p>There are several distinct proxy types worth distinguishing: a <strong>forward proxy</strong> sits in front of clients, relaying their outbound requests (common in corporate environments for content filtering and monitoring); a <strong>reverse proxy</strong> sits in front of servers, receiving client requests and forwarding them to backend servers — used heavily for load balancing, SSL termination, and hiding backend server details (tools like Nginx and Cloudflare operate this way). A <strong>transparent proxy</strong> intercepts traffic without the client's explicit configuration or awareness, often used by ISPs or corporate networks, raising its own privacy and consent considerations.</p>
      `
    },
    quiz: [
      { q: "What does a proxy server do?", options: ["Encrypts all device storage", "Sits between you and the internet, forwarding requests on your behalf", "Replaces the need for a router", "Assigns IP addresses to devices"], correct: 1, explain: "A proxy relays your requests so the destination sees the proxy's address rather than yours directly." },
      { q: "How does a typical proxy differ from a VPN?", options: ["A proxy always encrypts everything; VPNs don't", "A proxy often only handles specific traffic and may not encrypt; a VPN encrypts all traffic at the network level", "They are exactly the same thing", "Proxies only work on mobile devices"], correct: 1, explain: "VPNs tunnel and encrypt all network traffic, while proxies are often narrower in scope and not always encrypted." },
      { q: "What is a 'reverse proxy' commonly used for?", options: ["Hiding a client's identity from servers", "Sitting in front of servers for load balancing, SSL termination, and hiding backend details", "Blocking all internet access", "Assigning MAC addresses"], correct: 1, explain: "Reverse proxies sit in front of backend servers, distributing load and handling tasks like SSL termination." }
    ]
  },

  {
    id: "common-network-attacks",
    section: "Network Security Basics",
    number: 31,
    title: "Common Network Attacks (MITM, Sniffing, Spoofing)",
    difficulty: "Intermediate",
    summary: "A conceptual introduction to how attackers exploit weaknesses in network communication.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "Sniffing", desc: "Passively capturing network traffic to read its contents — easy on unencrypted connections or shared media." },
        { label: "Spoofing", desc: "Pretending to be a different device or address (faking a MAC or IP) to trick a network into trusting you." },
        { label: "Man-in-the-Middle", desc: "Secretly positioning between two communicating parties, able to read or alter the traffic passing between them." }
      ]
    },
    content: {
      basic: `
        <p>Three foundational attack concepts worth understanding at a conceptual level:</p>
        <ul>
          <li><strong>Sniffing:</strong> Passively capturing network traffic to read its contents — easy on unencrypted connections or shared media like old hubs.</li>
          <li><strong>Spoofing:</strong> Pretending to be a different device or address than you really are (e.g. faking a MAC or IP address) to trick a network into trusting you.</li>
          <li><strong>Man-in-the-Middle (MITM):</strong> Secretly positioning yourself between two communicating parties, able to read or even alter the traffic passing between them.</li>
        </ul>
      `,
      intermediate: `
        <p>These concepts often combine: an attacker might use <strong>ARP spoofing</strong> on a local network to trick devices into sending their traffic through the attacker's machine first, achieving a man-in-the-middle position, then use sniffing tools to read whatever isn't encrypted. This is exactly why encryption (HTTPS, WPA3, VPNs) matters so much — it doesn't prevent an attacker from intercepting traffic, but it prevents them from reading or usefully altering it.</p>
      `,
      advanced: `
        <p>From a defender's perspective, these attack categories map directly onto network security controls: <strong>encryption</strong> (TLS, WPA3) defeats sniffing's usefulness even when interception succeeds; <strong>mutual authentication</strong> (certificate pinning, 802.1X) defeats spoofing by verifying identity cryptographically rather than trusting claimed addresses; and <strong>network segmentation plus monitoring</strong> (IDS/IPS systems watching for anomalous ARP behavior or unexpected traffic patterns) helps detect MITM positioning attempts in progress. Understanding these three concepts is foundational groundwork for nearly every topic in a cybersecurity curriculum that follows.</p>
      `
    },
    quiz: [
      { q: "What is 'sniffing' in a network security context?", options: ["Actively blocking traffic", "Passively capturing network traffic to read its contents", "Assigning new IP addresses", "Encrypting data automatically"], correct: 1, explain: "Sniffing is the passive capture of network traffic, which is especially effective against unencrypted communications." },
      { q: "What does 'spoofing' involve?", options: ["Encrypting your own traffic", "Pretending to be a different device or address to gain trust", "Speeding up a network connection", "Blocking unwanted websites"], correct: 1, explain: "Spoofing means faking an identity, like a MAC or IP address, to trick a network or device into trusting the attacker." },
      { q: "Why does encryption help against man-in-the-middle attacks even if interception still happens?", options: ["It physically blocks the attacker's device", "It prevents the intercepted data from being read or usefully altered", "It makes the network faster", "It removes the need for passwords"], correct: 1, explain: "Encryption doesn't stop interception, but it makes the intercepted traffic unreadable and tamper-evident to the attacker." }
    ]
  },

  // ============================================================
  // SECTION 9: ADVANCED TOPICS
  // ============================================================
  {
    id: "nat-deep-dive",
    section: "Advanced Topics",
    number: 32,
    title: "Network Address Translation — Deep Dive",
    difficulty: "Advanced",
    summary: "A closer technical look at how NAT actually rewrites packets in real time.",
    animation: "encapsulation",
    compareData: {
      wraps: [
        { label: "outgoing: src 192.168.1.5:51000", color: "var(--signal)" },
        { label: "router rewrites + logs the mapping", color: "var(--amber)" },
        { label: "sent as: src 203.0.113.1:61000", color: "#a78bfa" },
        { label: "reply arrives → table lookup → routed to .5", color: "var(--paper)" }
      ]
    },
    content: {
      basic: `
        <p>We covered the basics of NAT earlier — letting many private devices share one public IP. This deep dive looks at exactly <strong>how</strong> that rewriting happens at the packet level.</p>
        <p>When your device sends a packet to the internet, your router doesn't just forward it — it actually rewrites the packet's source IP address (and often source port) before sending it onward, then remembers this change so it can correctly rewrite the response on the way back.</p>
      `,
      intermediate: `
        <p>The router maintains a <strong>NAT translation table</strong>, recording each active connection: the internal private IP/port, the external public IP/port it was translated to, and the destination the connection was made to. When a response arrives, the router looks up the table to find which internal device the response belongs to and rewrites the destination address accordingly before forwarding it inward.</p>
      `,
      advanced: `
        <p>Different NAT implementations vary in how strictly they match returning traffic, classified historically as <strong>Full Cone</strong>, <strong>Restricted Cone</strong>, <strong>Port-Restricted Cone</strong>, and <strong>Symmetric</strong> NAT — each with different rules about which external addresses/ports are allowed to send traffic back through an established mapping. This classification matters enormously for peer-to-peer applications (like VoIP or gaming) attempting NAT traversal: Symmetric NAT, the strictest type, is notoriously difficult for outside peers to traverse without a relay server, which is exactly why TURN servers exist as a fallback when direct peer-to-peer connection through NAT fails.</p>
      `
    },
    quiz: [
      { q: "What does a router actually do to a packet during NAT?", options: ["Encrypts the entire packet", "Rewrites the source IP address (and often port) before forwarding it", "Deletes the packet's destination", "Converts it to a different protocol entirely"], correct: 1, explain: "NAT works by rewriting the source address/port of outgoing packets and remembering the mapping for the return trip." },
      { q: "What does a NAT translation table store?", options: ["A list of blocked websites", "Internal IP/port, external IP/port, and destination for each active connection", "DNS cache entries", "Wi-Fi passwords"], correct: 1, explain: "The translation table tracks each connection's internal and external address/port mapping so responses can be routed correctly." },
      { q: "Why is Symmetric NAT considered the hardest type for peer-to-peer traversal?", options: ["It's the fastest type", "It has the strictest rules about which external addresses can send traffic back", "It doesn't use port numbers", "It only works with IPv6"], correct: 1, explain: "Symmetric NAT's strict matching rules make it very difficult for outside peers to establish direct connections, often requiring a relay (TURN) server." }
    ]
  },

  {
    id: "qos",
    section: "Advanced Topics",
    number: 33,
    title: "Quality of Service (QoS)",
    difficulty: "Advanced",
    summary: "How networks prioritize certain traffic to maintain performance for critical applications.",
    animation: "compare-toggle",
    compareData: {
      labelA: "Without QoS", labelB: "With QoS",
      descA: "All traffic competes equally for bandwidth. A large download can noticeably degrade a simultaneous video call.",
      descB: "Traffic is classified and prioritized (e.g. via DSCP marking). Critical traffic like video calls gets guaranteed bandwidth or priority queuing ahead of bulk downloads."
    },
    content: {
      basic: `
        <p><strong>Quality of Service (QoS)</strong> is a set of techniques for managing network traffic so important data gets priority over less important data when bandwidth is limited. For example, a video call might be prioritized over a background file download, so the call doesn't stutter while the download continues at a slightly slower pace.</p>
      `,
      intermediate: `
        <p>QoS works by classifying traffic into categories (often based on the application or protocol) and then applying different treatment to each category — higher-priority traffic might get guaranteed minimum bandwidth, lower latency queuing, or be allowed to "jump the queue" ahead of bulk traffic like large downloads. Without QoS, all traffic competes equally, meaning a large download can noticeably degrade the quality of a simultaneous video call.</p>
      `,
      advanced: `
        <p>QoS is typically implemented through traffic marking (using fields like <strong>DSCP</strong> in the IP header to tag a packet's priority class) combined with router/switch queuing algorithms that respect those markings — common approaches include <strong>priority queuing</strong> (strict priority for marked traffic, risking starvation of lower-priority traffic under heavy load) and <strong>weighted fair queuing</strong> (guaranteeing every traffic class at least some bandwidth, proportioned by weight, even under congestion). QoS matters most on constrained links — a home network's connection to the ISP, or a corporate WAN link — since on a fast, uncongested local network, there's rarely enough contention for QoS to make a visible difference.</p>
      `
    },
    quiz: [
      { q: "What is the main purpose of QoS?", options: ["To encrypt network traffic", "To prioritize important traffic over less important traffic when bandwidth is limited", "To assign IP addresses automatically", "To block malicious websites"], correct: 1, explain: "QoS manages traffic priority, ensuring critical applications get better treatment when bandwidth is constrained." },
      { q: "What IP header field is commonly used to mark a packet's priority for QoS?", options: ["TTL", "DSCP", "MAC address", "Subnet mask"], correct: 1, explain: "DSCP (Differentiated Services Code Point) is the field used to tag a packet's priority class for QoS purposes." },
      { q: "Where does QoS make the biggest practical difference?", options: ["On extremely fast, uncongested local networks", "On constrained links where bandwidth contention actually occurs, like a home internet connection", "Only inside data centers", "Only on wireless networks"], correct: 1, explain: "QoS matters most when there's real contention for limited bandwidth, such as a home's connection to its ISP." }
    ]
  },

  {
    id: "sdn",
    section: "Advanced Topics",
    number: 34,
    title: "Software Defined Networking (SDN)",
    difficulty: "Advanced",
    summary: "A modern architecture that separates network decision-making from the hardware that forwards data.",
    animation: "topology",
    compareData: {
      diagrams: [
        { label: "Traditional", svg: `
          <circle cx="80" cy="100" r="14" fill="var(--ink)" stroke="var(--signal)" stroke-width="2"/>
          <circle cx="180" cy="100" r="14" fill="var(--ink)" stroke="var(--signal)" stroke-width="2"/>
          <circle cx="280" cy="100" r="14" fill="var(--ink)" stroke="var(--signal)" stroke-width="2"/>
          <text x="80" y="140" fill="var(--slate)" font-family="IBM Plex Mono" font-size="10" text-anchor="middle">own brain</text>
          <text x="180" y="140" fill="var(--slate)" font-family="IBM Plex Mono" font-size="10" text-anchor="middle">own brain</text>
          <text x="280" y="140" fill="var(--slate)" font-family="IBM Plex Mono" font-size="10" text-anchor="middle">own brain</text>
          <text x="180" y="200" fill="var(--slate)" font-family="IBM Plex Mono" font-size="11" text-anchor="middle">each device decides independently</text>
        `},
        { label: "SDN", svg: `
          <rect x="140" y="30" width="80" height="36" rx="4" fill="none" stroke="var(--amber)" stroke-width="2"/>
          <text x="180" y="53" fill="var(--amber)" font-family="IBM Plex Mono" font-size="10" text-anchor="middle">Controller</text>
          <circle cx="80" cy="140" r="12" fill="var(--ink)" stroke="var(--signal)" stroke-width="2"/>
          <circle cx="180" cy="140" r="12" fill="var(--ink)" stroke="var(--signal)" stroke-width="2"/>
          <circle cx="280" cy="140" r="12" fill="var(--ink)" stroke="var(--signal)" stroke-width="2"/>
          <line x1="180" y1="66" x2="80" y2="140" stroke="var(--ink-line)" stroke-width="2"/>
          <line x1="180" y1="66" x2="180" y2="140" stroke="var(--ink-line)" stroke-width="2"/>
          <line x1="180" y1="66" x2="280" y2="140" stroke="var(--ink-line)" stroke-width="2"/>
          <text x="180" y="200" fill="var(--slate)" font-family="IBM Plex Mono" font-size="11" text-anchor="middle">one brain, devices just forward</text>
        `}
      ]
    },
    content: {
      basic: `
        <p>Traditionally, every router and switch makes its own decisions independently, each running its own software. <strong>Software Defined Networking (SDN)</strong> changes this by separating the "decision-making brain" (the control plane) from the "data-moving muscle" (the data plane), centralizing the brain into one programmable controller that manages many devices at once.</p>
      `,
      intermediate: `
        <p>In an SDN architecture, simple switches just forward packets exactly as instructed, while a centralized <strong>SDN controller</strong> calculates routing logic for the entire network and pushes forwarding rules down to every device. This makes large networks dramatically easier to manage and reconfigure — an administrator can change network-wide behavior through software/API calls instead of manually configuring dozens or hundreds of individual devices.</p>
      `,
      advanced: `
        <p>SDN is implemented through protocols like <strong>OpenFlow</strong>, which standardizes how a controller communicates forwarding rules to switches, regardless of hardware vendor. This architecture underpins much of modern cloud infrastructure — large data centers use SDN to dynamically reconfigure network paths in response to changing traffic patterns or failures, something impossible to do manually at that scale. SDN also introduces new security considerations: the centralized controller becomes a high-value target, since compromising it could grant control over the entire network's traffic flow — a single point of both convenience and risk that didn't exist in fully distributed traditional networking.</p>
      `
    },
    quiz: [
      { q: "What does SDN separate from traditional networking hardware?", options: ["Physical cables from devices", "The decision-making logic (control plane) from the packet-forwarding hardware (data plane)", "IP addresses from MAC addresses", "Wired from wireless connections"], correct: 1, explain: "SDN centralizes network decision-making into a controller, separate from the simpler forwarding hardware." },
      { q: "What protocol commonly standardizes communication between an SDN controller and switches?", options: ["HTTP", "OpenFlow", "DHCP", "DNS"], correct: 1, explain: "OpenFlow is the widely used protocol for SDN controllers to push forwarding rules to switches." },
      { q: "What new security risk does SDN's centralized controller introduce?", options: ["It has no risks at all", "It becomes a high-value target — compromising it could control the entire network", "It eliminates the need for any security measures", "It only affects wireless networks"], correct: 1, explain: "Because the controller manages the whole network's behavior, it becomes a single, high-value point of attack." }
    ]
  },

  {
    id: "ipv6-transition",
    section: "Advanced Topics",
    number: 35,
    title: "IPv6 Transition Mechanisms",
    difficulty: "Advanced",
    summary: "How networks bridge the gap while migrating from IPv4 to IPv6.",
    animation: "hardware-compare",
    compareData: {
      items: [
        { label: "Dual-Stack", desc: "Running both IPv4 and IPv6 simultaneously on the same network and devices. The most common approach today." },
        { label: "Tunneling", desc: "Wrapping IPv6 traffic inside IPv4 packets (or vice versa) to cross networks that only support one. E.g. 6to4, Teredo." },
        { label: "Translation", desc: "Converting between IPv4 and IPv6 at a gateway when two devices only speak different versions. E.g. NAT64 + DNS64." }
      ]
    },
    content: {
      basic: `
        <p>Since the internet can't switch from IPv4 to IPv6 overnight (too many devices, too much existing infrastructure), several "bridge" techniques help the two coexist during the long migration period:</p>
        <ul>
          <li><strong>Dual-stack:</strong> Running both IPv4 and IPv6 simultaneously on the same network and devices.</li>
          <li><strong>Tunneling:</strong> Wrapping IPv6 traffic inside IPv4 packets (or vice versa) to cross networks that only support one.</li>
          <li><strong>Translation:</strong> Converting between IPv4 and IPv6 traffic at a gateway, for when two devices only speak different versions.</li>
        </ul>
      `,
      intermediate: `
        <p><strong>Dual-stack</strong> is the most straightforward and widely deployed approach today — devices simply have both an IPv4 and IPv6 address, and use whichever the destination supports (modern operating systems generally prefer IPv6 when both are available). Tunneling techniques like <strong>6to4</strong> and <strong>Teredo</strong> were historically important for early adopters needing IPv6 connectivity across an IPv4-only ISP, though they've become less necessary as native IPv6 support has grown.</p>
      `,
      advanced: `
        <p>Translation mechanisms like <strong>NAT64</strong> (translating between IPv6-only clients and IPv4-only servers) remain relevant in environments deliberately built IPv6-only from the start, such as some mobile carrier networks, which use NAT64 combined with <strong>DNS64</strong> (synthesizing IPv6-compatible DNS responses for IPv4-only destinations) to let IPv6-only devices reach the still-substantial portion of the internet that hasn't adopted IPv6. The overall transition has taken far longer than originally anticipated when IPv6 was designed in the 1990s, illustrating how difficult it is to change foundational internet infrastructure once it's deeply entrenched — a lesson relevant well beyond networking.</p>
      `
    },
    quiz: [
      { q: "What does 'dual-stack' mean in IPv6 transition?", options: ["Using two routers for redundancy", "Running both IPv4 and IPv6 simultaneously on the same network/device", "Doubling network speed", "Using two different ISPs"], correct: 1, explain: "Dual-stack means a device or network supports both IPv4 and IPv6 at the same time." },
      { q: "What does NAT64 do?", options: ["Doubles available IPv4 addresses", "Translates between IPv6-only clients and IPv4-only servers", "Encrypts IPv6 traffic", "Blocks IPv4 traffic entirely"], correct: 1, explain: "NAT64 allows IPv6-only devices to reach IPv4-only destinations by translating between the two protocols at a gateway." },
      { q: "Why has the IPv4-to-IPv6 transition taken so long?", options: ["IPv6 doesn't actually work", "Changing deeply entrenched, foundational internet infrastructure is inherently slow and complex", "No one needs more IP addresses", "IPv6 was banned in many countries"], correct: 1, explain: "The transition illustrates how difficult and slow it is to change foundational infrastructure that the entire internet depends on." }
    ]
  }

  // ---------------------------------------------------------
  // ALL 35 NETWORKING TOPICS COMPLETE.
  // TO ADD A TOPIC FOR A NEW TRACK (e.g. Linux) LATER:
  // create a separate file (e.g. linux-topics-data.js) with
  // its own TOPICS array and its own track page, OR extend
  // this same pattern with a "track" field if you want one
  // combined topic list across multiple subjects.
  // ---------------------------------------------------------
];

// Helper: get a topic by its id (used by topic.html)
function getTopicById(id) {
  return TOPICS.find(t => t.id === id);
}

// Helper: get topics grouped by section (used by networking.html)
function getTopicsBySection() {
  const sections = {};
  TOPICS.forEach(t => {
    if (!sections[t.section]) sections[t.section] = [];
    sections[t.section].push(t);
  });
  return sections;
}

// Helper: get next/previous topic for navigation arrows
function getAdjacentTopics(id) {
  const index = TOPICS.findIndex(t => t.id === id);
  return {
    prev: index > 0 ? TOPICS[index - 1] : null,
    next: index < TOPICS.length - 1 ? TOPICS[index + 1] : null
  };
}
