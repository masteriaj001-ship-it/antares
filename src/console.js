class AntaresConsoleController {
    constructor(config = {}) {
        this.isActive = true;
        this.agents = [];
        this.maxLogs = 50;
        this.intervalId = null;
        this.logIntervalId = null;
        this.telemetryIntervalId = null;
        this.selectedAgentId = null;
        this.lastLogTime = 0;
        this.pendingLogs = [];
        this.debounceTimer = null;
    }

    initialize() {
        this.initAgents();
        this.renderAgentGrid();
        this.bindEvents();
        this.startStream();
    }

    initAgents() {
        this.agents = [
            { id: 'agt_01', name: 'ATLAS', role: 'Implementador de Código', status: 'active' },
            { id: 'agt_02', name: 'NYX', role: 'Atmósfera Visual', status: 'active' },
            { id: 'agt_03', name: 'ECHO', role: 'Auditor de Especificaciones', status: 'active' },
            { id: 'agt_04', name: 'SENTINEL', role: 'Guardián del Sandbox', status: 'idle' },
            { id: 'agt_05', name: 'HERMES', role: 'Enrutador de Protocolos', status: 'active' },
            { id: 'agt_06', name: 'CHRONOS', role: 'Motor de Animación GSAP', status: 'active' },
            { id: 'agt_07', name: 'HESTIA', role: 'Gestor de Estado y Cache', status: 'idle' },
            { id: 'agt_08', name: 'ARES', role: 'Optimizador de LCP/GPU', status: 'active' },
            { id: 'agt_09', name: 'ZEPHYR', role: 'Controlador de FOUC/CSS', status: 'error' }
        ];

        this.agents.forEach(agent => {
            agent.latency = (Math.random() * 0.0006 + 0.00025) * 1000;
            agent.threads = Math.floor(Math.random() * 8) + 1;
            agent.memory = Math.random() * 0.5 + 0.2;
        });
    }

    renderAgentGrid() {
        const grid = document.getElementById('agent-grid');
        if (!grid) return;

        grid.innerHTML = '';

        this.agents.forEach(agent => {
            const node = document.createElement('div');
            node.className = 'agent-node';
            node.dataset.agentId = agent.id;

            node.innerHTML = `
                <span class="node-status ${agent.status}"></span>
                <span class="node-id">${agent.id.toUpperCase()}</span>
                <span class="node-name">${agent.name}</span>
                <span class="node-role">${agent.role}</span>
            `;

            node.addEventListener('click', () => this.selectAgent(agent.id));
            grid.appendChild(node);
        });

        this.updateActiveAgents();
    }

    bindEvents() {
        const playPauseBtn = document.getElementById('play-pause-btn');
        if (playPauseBtn) {
            playPauseBtn.addEventListener('click', () => this.toggleSimulation());
        }

        const closeDetailBtn = document.getElementById('close-detail');
        if (closeDetailBtn) {
            closeDetailBtn.addEventListener('click', () => this.closeDetailPanel());
        }
    }

    startStream() {
        this.updateTelemetry();
        this.pushInitialLogs();

        this.telemetryIntervalId = setInterval(() => {
            if (this.isActive) this.updateTelemetry();
        }, 600);

        this.scheduleNextLog();
    }

    stopStream() {
        if (this.intervalId) clearTimeout(this.intervalId);
        if (this.telemetryIntervalId) clearInterval(this.telemetryIntervalId);
        if (this.logIntervalId) clearInterval(this.logIntervalId);
        if (this.debounceTimer) clearTimeout(this.debounceTimer);
    }

    toggleSimulation() {
        this.isActive = !this.isActive;

        const btn = document.getElementById('play-pause-btn');
        const pulse = document.getElementById('pulse-indicator');
        const streamDot = document.querySelector('.stream-dot');

        if (this.isActive) {
            btn.innerHTML = '<span class="btn-icon">&#x275A;&#x275A;</span><span class="btn-text">[ PAUSAR MONITOREO ]</span>';
            pulse.classList.remove('paused');
            const streamStatus = document.querySelector('.stream-status');
            if (streamStatus) streamStatus.textContent = 'TRANSMISIÓN EN VIVO';
            streamDot.style.animation = 'pulse 1s ease-in-out infinite';
            this.scheduleNextLog();
        } else {
            btn.innerHTML = '<span class="btn-icon">&#x25B6;</span><span class="btn-text">[ REANUDAR SIMULACIÓN ]</span>';
            pulse.classList.add('paused');
            const streamStatus = document.querySelector('.stream-status');
            if (streamStatus) streamStatus.textContent = 'TRANSMISIÓN PAUSADA';
            streamDot.style.animation = 'none';
            if (this.logIntervalId) clearTimeout(this.logIntervalId);
        }
    }

    updateTelemetry() {
        const latency = Math.random() * 0.0006 + 0.00025;
        const latencyValue = document.getElementById('latency-value');
        if (latencyValue) {
            latencyValue.textContent = latency.toFixed(6);
        }

        const cpuBars = document.querySelectorAll('.cpu-bar');
        const cpuLoad = Math.floor(Math.random() * 36) + 12;
        const activeBars = Math.ceil(cpuLoad / 8);

        cpuBars.forEach((bar, i) => {
            if (i < activeBars) {
                bar.classList.add('active');
                bar.style.height = `${Math.random() * 10 + 6}px`;
            } else {
                bar.classList.remove('active');
                bar.style.height = '4px';
            }
        });
    }

    updateActiveAgents() {
        const activeCount = this.agents.filter(a => a.status === 'active').length;
        const counter = document.getElementById('active-agents');
        if (counter) {
            counter.textContent = String(activeCount).padStart(2, '0');
        }
    }

    pushInitialLogs() {
        const initialLogs = [
            { category: 'system', level: 'success', message: 'NÚCLEO EN LÍNEA: Inicializando orquestación de agentes...' },
            { category: 'system', level: 'success', message: 'CONEXIÓN EXITOSA: Servidor Vite sirviendo en puerto activo.' }
        ];

        initialLogs.forEach((log, i) => {
            setTimeout(() => this.pushLog(log), i * 200);
        });
    }

    scheduleNextLog() {
        if (!this.isActive) return;

        const delay = Math.random() * 1000 + 800;
        this.logIntervalId = setTimeout(() => {
            this.generateLog();
            this.scheduleNextLog();
        }, delay);
    }

    generateLog() {
        const protocols = ['TCP', 'UDP', 'HTTP/3', 'gRPC', 'WebSocket'];
        const categories = ['system', 'agent', 'security', 'network'];
        const levels = ['info', 'info', 'info', 'success', 'warn', 'error'];

        const messages = [
            'Handshake protocol completed',
            'Cache invalidation triggered',
            'Memory buffer threshold reached',
            'Thread pool resize initiated',
            'Encryption handshake success',
            'Connection pool rotation',
            'Telemetry batch transmitted',
            'Health check passed',
            'Rate limiter triggered',
            'Agent heartbeat acknowledged',
            'Data integrity verified',
            'Load balancer redirect',
            'Circuit breaker engaged',
            'Token refresh cycle',
            'Priority queue overflow warning',
            'Zero-downtime deployment sync',
            'Consensus protocol voted',
            'Deadlock detection resolved'
        ];

        const log = {
            category: categories[Math.floor(Math.random() * categories.length)],
            level: levels[Math.floor(Math.random() * levels.length)],
            message: `${protocols[Math.floor(Math.random() * protocols.length)]} | ${messages[Math.floor(Math.random() * messages.length)]}`
        };

        const now = Date.now();
        if (now - this.lastLogTime < 100) {
            this.pendingLogs.push(log);
            this.handleDebounce();
            return;
        }

        this.pushLog(log);
        this.lastLogTime = now;
    }

    handleDebounce() {
        if (this.debounceTimer) return;

        this.debounceTimer = setTimeout(() => {
            if (this.pendingLogs.length > 1) {
                const count = this.pendingLogs.length;
                const groupLog = {
                    category: 'system',
                    level: 'info',
                    message: `MULTIPLE_AGENTS_SYNCED (x${count})`
                };
                this.pushLog(groupLog, true);
            }
            this.pendingLogs = [];
            this.debounceTimer = null;
        }, 100);
    }

    pushLog(log, isGrouped = false) {
        const terminal = document.getElementById('terminal');
        if (!terminal) return;

        const timestamp = this.getTimestamp();
        const logLine = document.createElement('div');
        logLine.className = 'log-line';

        const categoryMap = {
            system: 'SYS',
            agent: 'AGT',
            security: 'SEC',
            network: 'NET'
        };
        const categoryLabel = categoryMap[log.category] || 'LOG';

        logLine.innerHTML = `
            <span class="timestamp">[${timestamp}]</span>
            <span class="level-${log.level}">
                <span class="category">[${categoryLabel}]</span>
                <span class="message">${log.message}</span>
            </span>
        `;

        terminal.appendChild(logLine);

        while (terminal.children.length > this.maxLogs) {
            terminal.removeChild(terminal.firstChild);
        }

        terminal.scrollTop = terminal.scrollHeight;
    }

    getTimestamp() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const ms = String(now.getMilliseconds()).padStart(3, '0');
        return `${hours}:${minutes}:${seconds}.${ms}`;
    }

    selectAgent(id) {
        this.selectedAgentId = id;

        document.querySelectorAll('.agent-node').forEach(node => {
            node.classList.remove('selected');
        });

        const selectedNode = document.querySelector(`[data-agent-id="${id}"]`);
        if (selectedNode) {
            selectedNode.classList.add('selected');
        }

        this.showAgentDetail(id);
    }

    showAgentDetail(agentId) {
        const agent = this.agents.find(a => a.id === agentId);
        if (!agent) return;

        const panel = document.getElementById('agent-detail-panel');
        const content = document.getElementById('agent-detail-content');

        if (!panel || !content) return;

        const statusClass = agent.status === 'active' ? 'green' : agent.status === 'error' ? 'red' : 'amber';
        const memoryPercent = (agent.memory * 100).toFixed(1);

        content.innerHTML = `
            <div class="agent-detail">
                <div class="detail-section">
                    <div class="detail-section-title">Información del Agente</div>
                    <div class="detail-row">
                        <span class="detail-label">ID</span>
                        <span class="detail-value indigo">${agent.id.toUpperCase()}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Nombre</span>
                        <span class="detail-value">${agent.name}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Rol</span>
                        <span class="detail-value">${agent.role}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">ESTADO DE EJECUCIÓN</span>
                        <span class="detail-value ${statusClass}">● ${agent.status === 'active' ? 'ACTIVO' : agent.status === 'error' ? 'FALLO' : 'INACTIVO'}</span>
                    </div>
                </div>

                <div class="detail-section">
                    <div class="detail-section-title">Métricas de Rendimiento</div>
                    <div class="detail-row">
                        <span class="detail-label">LATENCIA DE RESPUESTA</span>
                        <span class="detail-value">${agent.latency.toFixed(6)} ms</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Hilos Activos</span>
                        <span class="detail-value indigo">${agent.threads}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">CAPACIDAD DEL BUFFER</span>
                        <span class="detail-value">${memoryPercent}%</span>
                    </div>
                    <div class="memory-bar">
                        <div class="memory-bar-fill" style="width: ${memoryPercent}%"></div>
                    </div>
                </div>
            </div>
        `;

        panel.classList.add('open');
    }

    closeDetailPanel() {
        const panel = document.getElementById('agent-detail-panel');
        if (panel) {
            panel.classList.remove('open');
        }

        document.querySelectorAll('.agent-node').forEach(node => {
            node.classList.remove('selected');
        });

        this.selectedAgentId = null;
    }
}

window.AntaresConsole = AntaresConsoleController;

document.addEventListener('DOMContentLoaded', () => {
    const console = new AntaresConsoleController();
    console.initialize();
    window.antaresConsoleInstance = console;
});
