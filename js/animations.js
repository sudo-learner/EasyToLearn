// ============================================================
// NETLEARN — Animations
// Each function takes a container element and draws/animates
// an SVG or HTML scene into it. Same function = reusable across
// many topics (e.g. "packet-travel" works for any "A sends to B" idea).
// Click-to-step controls let the user move through stages themselves.
// ============================================================

const Animations = {

  // ---- Generic single item moving from point A to point B ----
  // Reads window._currentTopicCompareData.travel = { partyA, partyB, packetLabel }
  // Falls back to generic "Device A / Device B" if a topic doesn't supply its own.
  "packet-travel": function (el) {
    const t = (window._currentTopicCompareData && window._currentTopicCompareData.travel) || {
      partyA: "Device A", partyB: "Device B", packetLabel: "D"
    };
    el.innerHTML = `
      <span class="stage-label">CLICK STEP TO ADVANCE</span>
      <svg viewBox="0 0 600 200" width="100%" style="max-width:560px">
        <!-- Point A -->
        <rect x="40" y="80" width="90" height="50" rx="4" fill="none" stroke="var(--signal-dim)" stroke-width="2"/>
        <text x="85" y="150" fill="var(--slate)" font-family="IBM Plex Mono" font-size="12" text-anchor="middle">${t.partyA}</text>
        <!-- Point B -->
        <rect x="470" y="80" width="90" height="50" rx="4" fill="none" stroke="var(--signal-dim)" stroke-width="2"/>
        <text x="515" y="150" fill="var(--slate)" font-family="IBM Plex Mono" font-size="12" text-anchor="middle">${t.partyB}</text>
        <!-- Connecting line -->
        <line x1="130" y1="105" x2="470" y2="105" stroke="var(--ink-line)" stroke-width="2"/>
        <!-- The moving item -->
        <rect id="pkt" x="130" y="92" width="${18 + t.packetLabel.length * 7}" height="26" rx="4" fill="var(--signal)"/>
        <text id="pkt-label" x="${130 + (18 + t.packetLabel.length * 7) / 2}" y="110" fill="var(--ink)" font-family="IBM Plex Mono" font-size="10" text-anchor="middle">${t.packetLabel}</text>
      </svg>
      <div class="anim-controls">
        <button onclick="Animations._packetStep(this)">Step →</button>
        <button onclick="Animations['packet-travel'](this.closest('.anim-stage'))">Reset</button>
      </div>
    `;
  },

  _packetStep: function (btn) {
    const svg = btn.closest('.anim-stage').querySelector('svg');
    const pkt = svg.querySelector('#pkt');
    const label = svg.querySelector('#pkt-label');
    const pktWidth = parseFloat(pkt.getAttribute('width'));
    const current = parseFloat(pkt.getAttribute('x'));
    const startX = 130;
    const endX = 470 - pktWidth;
    const target = current < (startX + endX) / 2 ? endX : startX;
    pkt.style.transition = 'x 0.8s ease';
    label.style.transition = 'x 0.8s ease';
    pkt.setAttribute('x', target);
    label.setAttribute('x', target + pktWidth / 2);
  },

  // ---- Generic stacked-layer diagram, click a layer to see its detail ----
  // Reads window._currentTopicCompareData.layers (array of {name, detail}) for
  // per-topic content. Falls back to the OSI Model layers if a topic doesn't
  // supply its own (keeps old Networking topics working unchanged).
  "layer-stack": function (el) {
    const data = (window._currentTopicCompareData && window._currentTopicCompareData.layers) || [
      { name: "Application", detail: "What the user touches — browsers, apps" },
      { name: "Presentation", detail: "Formats/encrypts data for the receiver" },
      { name: "Session", detail: "Manages the ongoing conversation" },
      { name: "Transport", detail: "Reliable delivery — TCP / UDP live here" },
      { name: "Network", detail: "Routing across networks — IP lives here" },
      { name: "Data Link", detail: "Delivery between directly connected devices — MAC" },
      { name: "Physical", detail: "Raw bits over the wire or air" }
    ];
    const numbered = (window._currentTopicCompareData && window._currentTopicCompareData.layersNumbered) !== false;
    el.innerHTML = `
      <span class="stage-label">CLICK A LAYER</span>
      <div style="width:100%; max-width:440px;">
        ${data.map((layer, i) => `
          <div class="osi-layer" data-i="${i}" onclick="Animations._highlightLayer(this)"
            style="padding:14px 18px; margin-bottom:4px; background:var(--ink); border:1px solid var(--ink-line);
            border-radius:4px; font-family:'IBM Plex Mono'; font-size:13px; cursor:pointer; display:flex;
            justify-content:space-between; transition:border-color .2s, background .2s;">
            <span>${numbered ? (data.length - i) + ". " : ""}${layer.name}</span>
            <span class="osi-detail" style="color:var(--slate); font-size:11px; display:none;"></span>
          </div>
        `).join('')}
      </div>
    `;
    window._layerData = data;
  },

  _highlightLayer: function (div) {
    const data = window._layerData;
    document.querySelectorAll('.osi-layer').forEach(l => {
      l.style.borderColor = 'var(--ink-line)';
      l.style.background = 'var(--ink)';
      l.querySelector('.osi-detail').style.display = 'none';
    });
    div.style.borderColor = 'var(--signal)';
    div.style.background = 'rgba(94,234,212,0.06)';
    const i = parseInt(div.dataset.i);
    const detail = div.querySelector('.osi-detail');
    detail.textContent = data[i].detail;
    detail.style.display = 'inline';
  },

  // ---- Generic 2-party, multi-step exchange diagram (handshake-style) ----
  // Reads window._currentTopicCompareData.exchange = { partyA, partyB, steps: [{label, direction, color}] }
  // Falls back to the TCP 3-way handshake if a topic doesn't supply its own.
  "handshake": function (el) {
    const ex = (window._currentTopicCompareData && window._currentTopicCompareData.exchange) || {
      partyA: "Client", partyB: "Server",
      steps: [
        { label: "SYN", direction: "right", color: "var(--signal)" },
        { label: "SYN-ACK", direction: "left", color: "var(--amber)" },
        { label: "ACK", direction: "right", color: "var(--signal)" }
      ]
    };
    const stepY = (i) => 100 + i * 35;
    el.innerHTML = `
      <span class="stage-label">STEP 0 OF ${ex.steps.length}</span>
      <svg viewBox="0 0 600 ${100 + ex.steps.length * 35 + 30}" width="100%" style="max-width:560px" id="hs-svg">
        <rect x="40" y="40" width="80" height="50" rx="4" fill="none" stroke="var(--signal-dim)" stroke-width="2"/>
        <text x="80" y="32" fill="var(--slate)" font-family="IBM Plex Mono" font-size="12" text-anchor="middle">${ex.partyA}</text>
        <rect x="480" y="40" width="80" height="50" rx="4" fill="none" stroke="var(--signal-dim)" stroke-width="2"/>
        <text x="520" y="32" fill="var(--slate)" font-family="IBM Plex Mono" font-size="12" text-anchor="middle">${ex.partyB}</text>

        <line x1="120" y1="65" x2="480" y2="65" stroke="var(--ink-line)" stroke-width="1.5"/>

        ${ex.steps.map((s, i) => `
          <g id="arrow${i+1}" opacity="0">
            <line x1="${s.direction === 'right' ? 120 : 480}" y1="${stepY(i)}" x2="${s.direction === 'right' ? 480 : 120}" y2="${stepY(i)}"
              stroke="${s.color}" stroke-width="2" marker-end="url(#arrowhead${i % 2 === 0 ? '' : '2'})"/>
            <text x="300" y="${stepY(i) - 8}" fill="${s.color}" font-family="IBM Plex Mono" font-size="13" text-anchor="middle">${s.label}</text>
          </g>
        `).join('')}

        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6 Z" fill="var(--signal)"/>
          </marker>
          <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6 Z" fill="var(--amber)"/>
          </marker>
        </defs>
      </svg>
      <div class="anim-controls">
        <button onclick="Animations._handshakeStep(this)">Next Step →</button>
        <button onclick="Animations.handshake(this.closest('.anim-stage'))">Reset</button>
      </div>
    `;
    el.dataset.step = 0;
    el.dataset.totalSteps = ex.steps.length;
  },

  _handshakeStep: function (btn) {
    const stage = btn.closest('.anim-stage');
    const total = parseInt(stage.dataset.totalSteps);
    let step = parseInt(stage.dataset.step || 0) + 1;
    if (step > total) step = 0;
    stage.dataset.step = step;
    stage.querySelector('.stage-label').textContent = `STEP ${step} OF ${total}`;
    for (let i = 1; i <= total; i++) {
      stage.querySelector(`#arrow${i}`).style.opacity = i <= step ? 1 : 0;
    }
  },

  // ---- Generic step-chain diagram (a request passing through several stops) ----
  // Reads window._currentTopicCompareData.chain = ["Step 1", "Step 2", ...]
  // Falls back to the DNS resolution chain if a topic doesn't supply its own.
  "dns-lookup": function (el) {
    const chain = (window._currentTopicCompareData && window._currentTopicCompareData.chain) ||
      ["You", "Resolver", "Root", "TLD (.com)", "Authoritative"];
    const spacing = chain.length > 1 ? Math.min(125, 560 / (chain.length - 1)) : 0;
    el.innerHTML = `
      <span class="stage-label">STEP 0 OF ${chain.length - 1}</span>
      <div style="display:flex; flex-direction:column; align-items:center; gap:20px; width:100%;">
        <svg viewBox="0 0 ${70 + (chain.length - 1) * spacing + 70} 160" width="100%" style="max-width:600px" id="dns-svg">
          ${chain.map((label, i) => `
            <g id="dns-node-${i}">
              <circle cx="${70 + i * spacing}" cy="60" r="26" fill="var(--ink)" stroke="var(--ink-line)" stroke-width="2" id="dns-circle-${i}"/>
              <text x="${70 + i * spacing}" y="105" fill="var(--slate)" font-family="IBM Plex Mono" font-size="11" text-anchor="middle">${label}</text>
            </g>
          `).join('')}
        </svg>
      </div>
      <div class="anim-controls">
        <button onclick="Animations._dnsStep(this)">Next Step →</button>
        <button onclick="Animations['dns-lookup'](this.closest('.anim-stage'))">Reset</button>
      </div>
    `;
    el.dataset.step = -1;
    el.dataset.chainLength = chain.length;
  },

  _dnsStep: function (btn) {
    const stage = btn.closest('.anim-stage');
    const lastIndex = parseInt(stage.dataset.chainLength) - 1;
    let step = parseInt(stage.dataset.step) + 1;
    if (step > lastIndex) step = 0;
    stage.dataset.step = step;
    stage.querySelector('.stage-label').textContent = `STEP ${step} OF ${lastIndex}`;
    for (let i = 0; i <= lastIndex; i++) {
      const circle = stage.querySelector(`#dns-circle-${i}`);
      circle.setAttribute('stroke', i <= step ? 'var(--signal)' : 'var(--ink-line)');
      circle.setAttribute('fill', i === step ? 'rgba(94,234,212,0.15)' : 'var(--ink)');
    }
  },

  // ---- Generic "small to large" scale comparison (circles of increasing size) ----
  // Reads window._currentTopicCompareData.scales = [{label, desc, r}]
  // Falls back to PAN/LAN/MAN/WAN if a topic doesn't supply its own.
  "scale-zoom": function (el) {
    const scales = (window._currentTopicCompareData && window._currentTopicCompareData.scales) || [
      { label: "PAN", desc: "A few meters — Bluetooth earbuds", r: 30 },
      { label: "LAN", desc: "One building — home or office Wi-Fi", r: 55 },
      { label: "MAN", desc: "One city — links between offices", r: 85 },
      { label: "WAN", desc: "Global — the internet itself", r: 120 }
    ];
    el.innerHTML = `
      <span class="stage-label">CLICK EACH SCALE</span>
      <div style="display:flex; gap:24px; align-items:flex-end; flex-wrap:wrap; justify-content:center;">
        ${scales.map((s, i) => `
          <div onclick="Animations._showScale(${i})" style="text-align:center; cursor:pointer;">
            <div style="width:${s.r}px; height:${s.r}px; border-radius:50%; border:2px solid var(--signal-dim);
              margin:0 auto 10px; transition:border-color .2s;" id="scale-circle-${i}"></div>
            <div class="mono" style="font-size:13px; color:var(--paper);">${s.label}</div>
          </div>
        `).join('')}
      </div>
      <p id="scale-desc" class="mono" style="margin-top:20px; color:var(--slate); font-size:13px; text-align:center; min-height:20px;"></p>
    `;
    window._scaleData = scales;
  },

  _showScale: function (i) {
    document.querySelectorAll('[id^="scale-circle-"]').forEach(c => c.style.borderColor = 'var(--signal-dim)');
    document.getElementById(`scale-circle-${i}`).style.borderColor = 'var(--signal)';
    document.getElementById('scale-desc').textContent = window._scaleData[i].desc;
  },

  // ---- Generic click-to-switch diagram set (shapes, structures, layouts) ----
  // Reads window._currentTopicCompareData.diagrams = [{label, draw: "shapeKey"}]
  // Falls back to network topology shapes (Star/Bus/Ring/Mesh) if not supplied.
  // "draw" must be one of the built-in shape keys below, OR a topic can supply
  // its own raw SVG markup per item via "svg" instead of "draw".
  "topology": function (el) {
    const diagrams = (window._currentTopicCompareData && window._currentTopicCompareData.diagrams) || [
      { label: "Star", draw: "star" },
      { label: "Bus", draw: "bus" },
      { label: "Ring", draw: "ring" },
      { label: "Mesh", draw: "mesh" }
    ];
    el.innerHTML = `
      <span class="stage-label">CLICK AN OPTION</span>
      <div style="display:flex; flex-direction:column; align-items:center; gap:16px; width:100%;">
        <div class="anim-controls" style="margin-top:0;">
          ${diagrams.map((d,i) => `<button onclick="Animations._drawTopology(${i}, this)" data-shape="${i}">${d.label}</button>`).join('')}
        </div>
        <svg viewBox="0 0 400 260" width="100%" style="max-width:380px" id="topo-svg"></svg>
      </div>
    `;
    window._topoData = diagrams;
    Animations._drawTopology(0, null);
  },

  _drawTopology: function (i, btn) {
    const svg = document.getElementById('topo-svg');
    const diagrams = window._topoData;
    const item = diagrams[i];
    const nodeDot = (cx, cy) => `<circle cx="${cx}" cy="${cy}" r="10" fill="var(--ink)" stroke="var(--signal)" stroke-width="2"/>`;
    const line = (x1,y1,x2,y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--ink-line)" stroke-width="2"/>`;
    let html = "";

    if (item.svg) {
      // Topic supplied its own raw SVG markup for this item directly.
      html = item.svg;
    } else if (item.draw === "star") {
      const center = [200,130];
      const outer = [[200,40],[290,90],[290,170],[200,220],[110,170],[110,90]];
      outer.forEach(p => html += line(center[0],center[1],p[0],p[1]));
      html += nodeDot(center[0], center[1]);
      outer.forEach(p => html += nodeDot(p[0],p[1]));
    } else if (item.draw === "bus") {
      html += line(40,130,360,130);
      [40,104,168,232,296,360].forEach(x => html += nodeDot(x,130));
    } else if (item.draw === "ring") {
      const pts = [[200,40],[290,90],[290,170],[200,220],[110,170],[110,90]];
      pts.forEach((p,idx) => {
        const next = pts[(idx+1)%pts.length];
        html += line(p[0],p[1],next[0],next[1]);
      });
      pts.forEach(p => html += nodeDot(p[0],p[1]));
    } else if (item.draw === "mesh") {
      const pts = [[200,40],[290,90],[290,170],[200,220],[110,170],[110,90]];
      pts.forEach((p,a) => pts.forEach((q,b) => { if (a<b) html += line(p[0],p[1],q[0],q[1]); }));
      pts.forEach(p => html += nodeDot(p[0],p[1]));
    } else if (item.draw === "tree") {
      // Simple rooted tree: one root, branching down two levels — good for filesystem hierarchies
      const root = [200, 36];
      const mid = [[110, 110], [200, 110], [290, 110]];
      const leaves = [[70,190],[150,190],[250,190],[330,190]];
      mid.forEach(p => html += line(root[0], root[1], p[0], p[1]));
      html += line(mid[0][0], mid[0][1], leaves[0][0], leaves[0][1]);
      html += line(mid[0][0], mid[0][1], leaves[1][0], leaves[1][1]);
      html += line(mid[2][0], mid[2][1], leaves[2][0], leaves[2][1]);
      html += line(mid[2][0], mid[2][1], leaves[3][0], leaves[3][1]);
      html += nodeDot(root[0], root[1]);
      mid.forEach(p => html += nodeDot(p[0], p[1]));
      leaves.forEach(p => html += nodeDot(p[0], p[1]));
    }
    svg.innerHTML = html;

    if (btn) {
      document.querySelectorAll('.anim-controls button').forEach(b => b.style.color = 'var(--slate)');
      btn.style.color = 'var(--signal)';
    }
  },

  // ---- Generic "things getting wrapped/built up in stages" animation ----
  // Reads window._currentTopicCompareData.wraps = [{label, color}]
  // Falls back to the TCP/IP encapsulation example if a topic doesn't supply its own.
  "encapsulation": function (el) {
    el.innerHTML = `
      <span class="stage-label">CLICK TO ADD THE NEXT STAGE</span>
      <div id="encap-box" style="display:flex; align-items:center; justify-content:center; min-height:140px;">
        <div id="encap-inner" style="padding:20px 28px; background:var(--signal); color:var(--ink); border-radius:6px; font-family:'IBM Plex Mono'; font-size:13px; transition:all .3s;"></div>
      </div>
      <div class="anim-controls">
        <button onclick="Animations._encapStep(this)">Next Stage →</button>
        <button onclick="Animations.encapsulation(this.closest('.anim-stage'))">Reset</button>
      </div>
    `;
    el.dataset.step = 0;
    const wraps = (window._currentTopicCompareData && window._currentTopicCompareData.wraps) || [
      { label: "DATA", color: "var(--signal)" },
      { label: "TCP | DATA", color: "var(--amber)" },
      { label: "IP | TCP | DATA", color: "#a78bfa" },
      { label: "FRAME | IP | TCP | DATA", color: "var(--paper)" }
    ];
    window._encapData = wraps;
    el.querySelector('#encap-inner').textContent = wraps[0].label;
    el.querySelector('#encap-inner').style.background = wraps[0].color;
  },

  _encapStep: function (btn) {
    const stage = btn.closest('.anim-stage');
    const wraps = window._encapData;
    let step = parseInt(stage.dataset.step);
    step = (step + 1) % wraps.length;
    stage.dataset.step = step;
    const inner = stage.querySelector('#encap-inner');
    inner.textContent = wraps[step].label;
    inner.style.background = wraps[step].color;
    inner.style.color = 'var(--ink)';
    inner.style.padding = `${20 + step*6}px ${28 + step*10}px`;
  },

  // ---- Generic item comparison grid (hardware, protocols, attack types, etc.) ----
  // Reads window._currentTopicCompareData.items (set by topic.html) for real per-topic content.
  "hardware-compare": function (el) {
    const items = (window._currentTopicCompareData && window._currentTopicCompareData.items) || [
      { label: "Item A", desc: "No comparison data provided for this topic." },
      { label: "Item B", desc: "No comparison data provided for this topic." }
    ];
    el.innerHTML = `
      <span class="stage-label">CLICK EACH ITEM</span>
      <div style="display:flex; gap:14px; flex-wrap:wrap; justify-content:center;">
        ${items.map((it,i) => `
          <div onclick="Animations._showHardware(${i})" id="hw-${i}" style="cursor:pointer; padding:18px 22px; background:var(--ink); border:1px solid var(--ink-line); border-radius:8px; text-align:center; min-width:100px;">
            <div class="mono" style="font-size:14px; color:var(--paper);">${it.label}</div>
          </div>
        `).join('')}
      </div>
      <p id="hw-desc" class="mono" style="margin-top:20px; color:var(--slate); font-size:13px; text-align:center; min-height:20px; max-width:480px;">Click an item above to see what it does.</p>
    `;
    window._hwData = items;
  },

  _showHardware: function (i) {
    document.querySelectorAll('[id^="hw-"]').forEach(el => { if (el.id.startsWith('hw-') && !el.id.includes('desc')) el.style.borderColor = 'var(--ink-line)'; });
    document.getElementById(`hw-${i}`).style.borderColor = 'var(--signal)';
    document.getElementById('hw-desc').textContent = window._hwData[i].desc;
  },

  // ---- Generic before/after or two-column toggle comparison ----
  // Reads window._currentTopicCompareData (set by topic.html) for real per-topic content.
  // Falls back to a generic message if a topic hasn't supplied compare data.
  "compare-toggle": function (el) {
    const data = window._currentTopicCompareData || {
      labelA: "Option A", labelB: "Option B",
      descA: "No comparison data provided for this topic.",
      descB: "No comparison data provided for this topic."
    };
    el.innerHTML = `
      <span class="stage-label">CLICK TO COMPARE</span>
      <div class="anim-controls" style="margin-top:0; margin-bottom:20px;">
        <button onclick="Animations._toggleCompare(0, this)" data-side="0" style="color:var(--signal);">${data.labelA}</button>
        <button onclick="Animations._toggleCompare(1, this)" data-side="1">${data.labelB}</button>
      </div>
      <div id="compare-display" class="mono" style="text-align:center; color:var(--paper); font-size:14px; max-width:460px; line-height:1.6;">${data.descA}</div>
    `;
    el.dataset.descA = data.descA;
    el.dataset.descB = data.descB;
  },

  _toggleCompare: function (side, btn) {
    const stage = btn.closest('.anim-stage');
    const display = stage.querySelector('#compare-display');
    display.textContent = side === 0 ? stage.dataset.descA : stage.dataset.descB;
    stage.querySelectorAll('.anim-controls button').forEach(b => b.style.color = 'var(--slate)');
    btn.style.color = 'var(--signal)';
  }
};
