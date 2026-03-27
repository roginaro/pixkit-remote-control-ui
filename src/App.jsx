import React, { useState } from "react";
import StatusIndicator from "./components/StatusIndicator/StatusIndicator";
import ModeSelector from "./components/ModeSelector/ModeSelector";
import SpeedSlider from "./components/SpeedSlider/SpeedSlider";
import LightToggle from "./components/LightToggle/LightToggle";
import ControlPad from "./components/ControlPad/ControlPad";
import CommandLog from "./components/CommandLog/CommandLog";
import "./App.css";

function App() {
  // Estados do sistema
  const [connected, setConnected] = useState(false);
  const [mode, setMode] = useState("manual");
  const [speed, setSpeed] = useState(50);
  const [lightsOn, setLightsOn] = useState(false);
  const [commandLog, setCommandLog] = useState([]);

  // Handler de comandos
  const handleCommand = (command) => {
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = `[${timestamp}] ${command} (Speed: ${speed}, Mode: ${mode})`;

    setCommandLog((prev) => [logEntry, ...prev].slice(0, 50)); // Limita a 50 entradas
  };

  // Handler de mudança de modo
  const handleModeChange = (newMode) => {
    setMode(newMode);
    handleCommand(`MODE_CHANGED: ${newMode.toUpperCase()}`);
  };

  // Handler de mudança de velocidade
  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
    handleCommand(`SPEED_CHANGED: ${newSpeed}`);
  };

  // Handler de toggle de luzes
  const handleLightToggle = (isOn) => {
    setLightsOn(isOn);
    handleCommand(`LIGHTS_${isOn ? "ON" : "OFF"}`);
  };

  return (
    <div className="app-container">
      {/* ========================================
          STATUS & INDICATORS ZONE (Topo)
          Informações contextuais do sistema
      ======================================== */}
      <div className="status-indicators-zone">
        <div className="zone-header">
          <h2>System Status</h2>
        </div>

        <div className="status-grid">
          <StatusIndicator connected={connected} />

          <div className="status-item">
            <span className="status-label">Operating Mode:</span>
            <span className="status-value">{mode.toUpperCase()}</span>
          </div>

          <div className="status-item">
            <span className="status-label">Current Speed:</span>
            <span className="status-value">{speed}</span>
          </div>

          <div className="status-item">
            <span className="status-label">Lights:</span>
            <span className="status-value">{lightsOn ? "ON" : "OFF"}</span>
          </div>
        </div>
      </div>

      <div className="main-content">
        {/* ========================================
            CONTROL ZONE (Esquerda)
            Elementos de interação/comandos
        ======================================== */}
        <div className="control-zone">
          <div className="zone-header">
            <h2>Control Panel</h2>
            <span className="zone-badge">Commands</span>
          </div>

          <div className="control-section">
            <h3>Movement Control</h3>
            <ControlPad onCommand={handleCommand} />
          </div>

          <div className="control-section">
            <h3>Parameters</h3>
            <ModeSelector value={mode} onChange={handleModeChange} />
            <SpeedSlider value={speed} onChange={handleSpeedChange} />
            <LightToggle value={lightsOn} onChange={handleLightToggle} />
          </div>
        </div>

        {/* ========================================
            COMMAND LOG ZONE (Direita)
            Histórico de ações executadas
        ======================================== */}
        <div className="command-log-zone">
          <div className="zone-header">
            <h2>Activity Log</h2>
            <span className="log-count">{commandLog.length} entries</span>
          </div>

          <CommandLog entries={commandLog} />
        </div>
      </div>
    </div>
  );
}

export default App;
