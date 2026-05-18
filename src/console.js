/**
 * ANTARES OPERATIONAL CONSOLE CONTROLLER
 * Strict Implementation of /antares/specs/console.spec.md
 */

class AntaresConsoleController {
    constructor() {
        this.isActive = true;
        this.maxLogs = 50;
        this.logCount = 0;
        this.intervalId = null;
        this.telemetryIntervalId = null;
        this.selectedAgentId = null;
        
        // Hardcoded realistic agent initial states (3x3 grid)
        this.agents = [
            { id: 'agt_01', name: 'Protocol Orchestrator', status: 'active', latency: 0.24, threads: 8, memory: 0.65 },
            { id: 'agt_02', name: 'Autonomous Executor', status: 'active', latency: 0.12, threads: 6, memory: 0.42 },
            { id: 'agt_03', name: 'Adaptive Learner', status: 'active', latency: 0.76, threads: 4, memory: 0.88 },
            { id: 'agt_04', name: 'Memory Synapser', status: 'idle', latency: 0.04, threads: 1, memory: 0.15 },
            { id: 'agt_05', name: 'Security Sentinel', status: 'active', latency: 0.08, threads: 2, memory: 0.28 },
            { id: 'agt_06', name: 'Network Connector', status: 'active', latency: 0.32, threads: 5, memory: 0.53 },
            { id: 'agt_07', name: 'Storage Pipeline', status: 'idle', latency: 0.05, threads: 1, memory: 0.09 },
            { id: 'agt_08', name: 'Buffer Sync', status: 'active', latency: 0.18, threads: 3, memory: 0.35 },
            { id: 'agt_09', name: 'Cache Resolver', status: 'error', latency: 0.00, threads: 0, memory: 0.00 }
        ];

        // Tactical simulated log messages patterns
        this.logTemplates = [
            { category: 'system', level: 'info', message: 'PROTOCOL_ORCHESTRATOR: Sync dump completed.' },
            { category: 'agent', level: 'success', message: 'AUTONOMOUS_EXECUTOR: State synchronized with cluster.' },
            { category: 'network', level: 'info', message: 'NETWORK_CONNECTOR: Connection established in gateway G-34.' },
            { category: 'security', level: 'info', message: 'SECURITY_SENTINEL: Port scan mitigated successfully.' },
            { category: 'agent', level: 'info', message: 'ADAPTIVE_LEARNER: Weight decay calculation updated.' },
            { category: 'system', level: 'warn', message: 'BUFFER_SYNC: Flush buffer queue near max-load (85%).' },
            { category: 'security', level: 'warn', message: 'SECURITY_SENTINEL: Access hash expired for node agt_04.' },
            { category: 'network', level: 'error', message: 'CACHE_RESOLVER: Node response timed out (gRPC fail).' },
            { category: 'system', level: 'success', message: 'CONSOLE_CONTROLLER: Heartbeat verified.' }
        ];
    }

    /**
     * Initializes console DOM binding and setups initial states
     */
    initialize() {
        console.log('[ANTARES] Initiating Operational Console Module...');

        // Bind DOM nodes
        this.dom = {
            latency: document.getElementById('latency-value'),
            activeAgents: document.getElementById('active-agents'),
            playPauseBtn: document.getElementById('play-pause-btn'),
            pulse: document.getElementById('pulse-indicator'),
            agentGrid: document.getElementById('agent-grid'),
            terminal: document.getElementById('terminal'),
            detailPanel: document.getElementById('agent-detail-panel'),
            detailContent: document.getElementById('agent-detail-content'),
            closeDetailBtn: document.getElementById('close-detail'),
            svgLines: document.querySelectorAll('.network-line'),
            cpuBars: [
                document.getElementById('cpu-bar-1'),
                document.getElementById('cpu-bar-2'),
                document.getElementById('cpu-bar-3'),
                document.getElementById('cpu-bar-4'),
                document.getElementById('cpu-bar-5'),
                document.getElementById('cpu-bar-6')
            ]
        };

        // Render standard Grid Nodes
        this.renderAgentGrid();

        // Setup DOM event listeners
        this.dom.playPauseBtn.addEventListener('click', () => this.toggleSimulationState());
        this.dom.closeDetailBtn.addEventListener('click', () => this.closeAgentDetail());

        // Start loops
        this.startStream();
        this.startTelemetryLoop();
        this.triggerInitialTelemetryUpdate();

        // Initial setup for pulse
        if (this.dom.pulse) {
            this.dom.pulse.classList.add('pulsing');
        }
    }

    /**
     * Render matrix of agent nodes inside DOM
     */
    renderAgentGrid() {
        if (!this.dom.agentGrid) return;
        this.dom.agentGrid.innerHTML = '';

        this.agents.forEach(agent => {
            const node = document.createElement('div');
            node.className = `agent-node ${this.selectedAgentId === agent.id ? 'selected' : ''}`;
            node.dataset.id = agent.id;
            
            node.innerHTML = `
                <div class="node-header">
                    <span class="node-name" title="${agent.name}">${agent.name}</span>
                    <span class="node-status-indicator ${agent.status}"></span>
                </div>
                <div class="node-footer">
                    <span class="node-id">${agent.id.toUpperCase()}</span>
                    <span class="node-latency">${agent.status === 'error' ? '--.--' : agent.latency.toFixed(2)} ms</span>
                </div>
            `;

            // Click listener for node selection
            node.addEventListener('click', () => this.selectAgent(agent.id));
            this.dom.agentGrid.appendChild(node);
        });
    }

    /**
     * Toggles play/pause state
     */
    toggleSimulationState() {
        this.isActive = !this.isActive;
        
        if (this.isActive) {
            this.startStream();
            this.startTelemetryLoop();
            
            // UI Update
            this.dom.playPauseBtn.classList.remove('paused');
            this.dom.playPauseBtn.querySelector('.btn-icon').innerHTML = '&#x275A;&#x275A;';
            this.dom.playPauseBtn.querySelector('.btn-text').innerText = 'PAUSE';
            this.dom.pulse.classList.add('pulsing');
            
            this.pushLog({
                category: 'system',
                level: 'info',
                message: 'CONSOLE_CONTROLLER: Simulation stream resumed.'
            });
        } else {
            this.stopStream();
            
            // UI Update
            this.dom.playPauseBtn.classList.add('paused');
            this.dom.playPauseBtn.querySelector('.btn-icon').innerHTML = '&#9654;';
            this.dom.playPauseBtn.querySelector('.btn-text').innerText = 'PLAY';
            this.dom.pulse.classList.remove('pulsing');
            
            this.pushLog({
                category: 'system',
                level: 'warn',
                message: 'CONSOLE_CONTROLLER: Simulation stream suspended by user.'
            });
        }
    }

    /**
     * Start log dynamic stream generator
     */
    startStream() {
        if (this.intervalId) clearInterval(this.intervalId);

        const triggerNextLog = () => {
            const nextInterval = Math.floor(Math.random() * 1000) + 800; // random 800ms-1800ms
            this.intervalId = setTimeout(() => {
                if (this.isActive) {
                    this.generateSimulatedLog();
                    triggerNextLog();
                }
            }, nextInterval);
        };
        
        triggerNextLog();
    }

    /**
     * Stops simulation stream timer
     */
    stopStream() {
        if (this.intervalId) {
            clearTimeout(this.intervalId);
            this.intervalId = null;
        }
        if (this.telemetryIntervalId) {
            clearInterval(this.telemetryIntervalId);
            this.telemetryIntervalId = null;
        }
        
        // Zero-out variable animation bars
        this.dom.cpuBars.forEach(bar => {
            if (bar) bar.style.height = '10%';
        });
    }

    /**
     * Start telemetry loops updating dynamic variables in DOM
     */
    startTelemetryLoop() {
        if (this.telemetryIntervalId) clearInterval(this.telemetryIntervalId);

        this.telemetryIntervalId = setInterval(() => {
            if (!this.isActive) return;
            this.updateSystemTelemetry();
        }, 600); // refresh every 600ms
    }

    triggerInitialTelemetryUpdate() {
        this.updateSystemTelemetry();
        this.pushLog({
            category: 'system',
            level: 'success',
            message: 'CORE_SYSTEM_ONLINE: Console stream active and monitoring node hashes.'
        });
    }

    /**
     * Dynamic calculations updating header indicators
     */
    updateSystemTelemetry() {
        // Latency simulation (0.00025ms to 0.00085ms -> represented in UI)
        const baseLatency = (Math.random() * (0.85 - 0.25) + 0.25).toFixed(4);
        if (this.dom.latency) {
            this.dom.latency.innerText = baseLatency;
        }

        // Active Agents Calculation
        const activeCount = this.agents.filter(a => a.status === 'active').length;
        if (this.dom.activeAgents) {
            this.dom.activeAgents.innerText = `0${activeCount}`;
        }

        // Update CPU Graph bars sutilmente
        this.dom.cpuBars.forEach(bar => {
            if (!bar) return;
            const newHeight = Math.floor(Math.random() * (90 - 15) + 15);
            bar.style.height = `${newHeight}%`;
            
            if (newHeight > 70) {
                bar.classList.add('active');
            } else {
                bar.classList.remove('active');
            }
        });

        // Update selected agent if panel is open to simulate live data
        if (this.selectedAgentId) {
            this.updateAgentDetails(this.selectedAgentId, false);
        }
    }

    /**
     * Pick a random template and push a simulated operation line
     */
    generateSimulatedLog() {
        const randomIndex = Math.floor(Math.random() * this.logTemplates.length);
        const template = this.logTemplates[randomIndex];
        
        // Randomly modify message slightly to avoid total repetitive feel
        let cleanMsg = template.message;
        if (template.category === 'agent') {
            const randomAgent = this.agents[Math.floor(Math.random() * this.agents.length)];
            cleanMsg = cleanMsg.replace('AUTONOMOUS_EXECUTOR', randomAgent.name.toUpperCase().replace(' ', '_'));
        }

        this.pushLog({
            category: template.category,
            level: template.level,
            message: cleanMsg
        });
    }

    /**
     * Inject structured logging into simulated terminal DOM
     */
    pushLog(log) {
        if (!this.dom.terminal) return;

        // Clean initial No-JS fallback placeholder on first log injection
        const fallback = this.dom.terminal.querySelector('.noscript-fallback');
        if (fallback) {
            fallback.remove();
        }

        // Create timestamp
        const now = new Date();
        const hrs = String(now.getHours()).padStart(2, '0');
        const mins = String(now.getMinutes()).padStart(2, '0');
        const secs = String(now.getSeconds()).padStart(2, '0');
        const ms = String(now.getMilliseconds()).padStart(3, '0');
        const timeStr = `${hrs}:${mins}:${secs}.${ms}`;

        const logNode = document.createElement('div');
        logNode.className = `log-line ${log.level || 'info'}`;
        logNode.innerHTML = `
            <span class="log-timestamp">[${timeStr}]</span>
            <span class="log-category ${log.category}">[${log.category}]</span>
            <span class="log-message">${log.message}</span>
        `;

        this.dom.terminal.appendChild(logNode);
        this.logCount++;

        // Memory leak prevention (limits terminal logs list to 50 entries)
        if (this.logCount > this.maxLogs) {
            const firstLog = this.dom.terminal.querySelector('.log-line');
            if (firstLog) firstLog.remove();
            this.logCount--;
        }

        // Smooth scroll to bottom
        this.dom.terminal.scrollTop = this.dom.terminal.scrollHeight;
    }

    /**
     * Handles agent node selection
     */
    selectAgent(agentId) {
        this.selectedAgentId = agentId;
        
        // Re-render Nodes Grid to reflect selection state
        this.renderAgentGrid();

        // Highlight visual lines relative to network connections
        this.highlightNetworkLines(agentId);

        // Slide Open drawer panel
        this.updateAgentDetails(agentId, true);
        this.dom.detailPanel.classList.add('open');

        this.pushLog({
            category: 'agent',
            level: 'info',
            message: `CONSOLE_CONTROLLER: Focus locked on node ${agentId.toUpperCase()} for full diagnostic diagnostic diagnostic telemetry.`
        });
    }

    /**
     * Highlighting SVG network connections relative to clicked agent
     */
    highlightNetworkLines(agentId) {
        // Toggle connections dynamically for dramatic cinemática
        this.dom.svgLines.forEach((line, index) => {
            if (!line) return;
            
            // Randomly toggle line state relative to selection
            const randomActive = (index + agentId.charCodeAt(agentId.length - 1)) % 2 === 0;
            if (randomActive) {
                line.classList.add('active');
            } else {
                line.classList.remove('active');
            }
        });
    }

    /**
     * Updates and renders detail drawer pane
     */
    updateAgentDetails(agentId, focusTransition = false) {
        if (!this.dom.detailContent) return;

        const agent = this.agents.find(a => a.id === agentId);
        if (!agent) return;

        // Simulated fluctuant data
        let liveLatency = agent.latency;
        let liveMemory = agent.memory;
        
        if (this.isActive && agent.status !== 'error') {
            // Apply slight fluctuant values to denote active diagnostic
            liveLatency = Math.max(0.01, agent.latency + (Math.random() * 0.1 - 0.05));
            liveMemory = Math.max(0.05, Math.min(0.99, agent.memory + (Math.random() * 0.04 - 0.02)));
        }

        const cleanMemPercent = Math.round(liveMemory * 100);

        this.dom.detailContent.innerHTML = `
            <div class="detail-card">
                <span class="detail-card-label">IDENTIFIER</span>
                <span class="detail-card-value">${agent.id.toUpperCase()}</span>
            </div>
            
            <div class="detail-card">
                <span class="detail-card-label">SYSTEM NAME</span>
                <span class="detail-card-value">${agent.name.toUpperCase()}</span>
            </div>

            <div class="detail-card">
                <span class="detail-card-label">OPERATING STATUS</span>
                <span class="detail-card-value" style="color: ${agent.status === 'active' ? '#10B981' : agent.status === 'idle' ? '#F59E0B' : '#EF4444'}">
                    ● ${agent.status.toUpperCase()}
                </span>
            </div>

            <div class="detail-card">
                <span class="detail-card-label">DIAGNOSTIC LATENCY</span>
                <span class="detail-card-value">${agent.status === 'error' ? '--.--' : liveLatency.toFixed(4)} ms</span>
            </div>

            <div class="detail-card">
                <span class="detail-card-label">ACTIVE EXECUTOR THREADS</span>
                <span class="detail-card-value">${agent.threads} CORES</span>
            </div>

            <div class="detail-card">
                <div class="metric-row">
                    <span class="detail-card-label">BUFFER CAPACITY</span>
                    <span class="detail-card-value" style="font-size: 0.8rem;">${cleanMemPercent}%</span>
                </div>
                <div class="metric-bar-container">
                    <div class="metric-bar-fill" style="width: ${cleanMemPercent}%; background-color: ${cleanMemPercent > 80 ? '#EF4444' : 'var(--accent-indigo)'}"></div>
                </div>
            </div>
        `;
    }

    /**
     * Close diagnostic details drawer pane
     */
    closeAgentDetail() {
        this.selectedAgentId = null;
        this.dom.detailPanel.classList.remove('open');
        this.renderAgentGrid();
        
        // Remove SVG line highlights
        this.dom.svgLines.forEach(line => {
            if (line) line.classList.remove('active');
        });

        this.pushLog({
            category: 'agent',
            level: 'info',
            message: 'CONSOLE_CONTROLLER: Telemetry stream diagnostic closed. Returned to general cluster observation.'
        });
    }
}

// Instantiate and expose globally to window scope
window.addEventListener('DOMContentLoaded', () => {
    window.AntaresConsole = new AntaresConsoleController();
    window.AntaresConsole.initialize();
});
