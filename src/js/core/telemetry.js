/* ==========================================================================
   ANTARES TELEMETRY ENGINE
   ========================================================================== */

export const initTelemetry = () => {
    const latencyEl = document.getElementById('latency-value');
    const bandwidthEl = document.getElementById('bandwidth-value');
    const scanningTextEl = document.getElementById('scanning-text');
    const progressBarEl = document.getElementById('hud-progress-bar');

    if (!latencyEl && !bandwidthEl && !scanningTextEl && !progressBarEl) return;

    // 1. High-precision Fluctuations
    const fluctuateStats = () => {
        if (latencyEl) {
            // Fluctuate between 0.00037 and 0.00045
            const baseLatency = 0.00037;
            const randomVariance = Math.random() * 0.00008;
            const latencyValue = (baseLatency + randomVariance).toFixed(5);
            latencyEl.textContent = `${latencyValue} MS`;
        }

        if (bandwidthEl) {
            // Fluctuate between 900.05 and 900.95
            const baseBandwidth = 900.05;
            const randomVariance = Math.random() * 0.90;
            const bandwidthValue = (baseBandwidth + randomVariance).toFixed(2);
            bandwidthEl.textContent = `${bandwidthValue} PB/S`;
        }
    };

    // Update stats every 600ms
    const statsInterval = setInterval(fluctuateStats, 600);

    // 2. HUD Scan Messages Sequence
    const scanningSequences = [
        "SCANNING_OBJECTIVE...",
        "ACQUIRING_SYSTEM_COORDINATES...",
        "LOCKING_INTELLIGENCE_NODES...",
        "ANALYZING_VISOR_GEOMETRY...",
        "SYNCING_LOCAL_CORE...",
        "ENCRYPTING_COMMUNICATION_LINK...",
        "SECURE_PROTOCOL_ESTABLISHED."
    ];

    let sequenceIndex = 0;
    const rotateScanningText = () => {
        if (!scanningTextEl) return;
        sequenceIndex = (sequenceIndex + 1) % scanningSequences.length;
        scanningTextEl.textContent = scanningSequences[sequenceIndex];
    };

    // Rotate text message every 4 seconds
    const scanningInterval = setInterval(rotateScanningText, 4000);

    // 3. Progress bar visual fluctuation
    const updateProgressBar = () => {
        if (!progressBarEl) return;
        // Fluctuates progress between 40% and 98%
        const randomWidth = Math.floor(Math.random() * (98 - 40 + 1) + 40);
        progressBarEl.style.width = `${randomWidth}%`;
        progressBarEl.style.transition = "width 1.2s cubic-bezier(0.16, 1, 0.3, 1)";
    };

    // Update progress bar every 1.5 seconds
    const progressInterval = setInterval(updateProgressBar, 1500);

    // Return cleanup function to prevent memory leaks if main module is reloaded
    return () => {
        clearInterval(statsInterval);
        clearInterval(scanningInterval);
        clearInterval(progressInterval);
    };
};
