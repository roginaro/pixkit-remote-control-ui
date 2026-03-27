// src/components/ControlZone.jsx
import React, { useState } from "react";
import "./ControlZone.css";

function ControlZone({ onCommand }) {
  const [selectedAction, setSelectedAction] = useState("");
  const [params, setParams] = useState({});

  const handleExecute = () => {
    if (!selectedAction) return;

    onCommand({
      type: selectedAction,
      params: params,
    });

    // Reset
    setSelectedAction("");
    setParams({});
  };

  return (
    <div className="control-zone">
      <div className="zone-header">
        <h2>Control Panel</h2>
        <span className="zone-badge">Commands</span>
      </div>

      <div className="control-section">
        <h3>Actions</h3>
        <div className="button-group">
          <button
            className={`control-btn ${selectedAction === "START" ? "active" : ""}`}
            onClick={() => setSelectedAction("START")}
          >
            Start
          </button>
          <button
            className={`control-btn ${selectedAction === "STOP" ? "active" : ""}`}
            onClick={() => setSelectedAction("STOP")}
          >
            Stop
          </button>
          <button
            className={`control-btn ${selectedAction === "RESET" ? "active" : ""}`}
            onClick={() => setSelectedAction("RESET")}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="control-section">
        <h3>Parameters</h3>
        <div className="param-inputs">
          <input
            type="number"
            placeholder="Speed"
            value={params.speed || ""}
            onChange={(e) => setParams({ ...params, speed: e.target.value })}
          />
          <input
            type="number"
            placeholder="Duration"
            value={params.duration || ""}
            onChange={(e) => setParams({ ...params, duration: e.target.value })}
          />
        </div>
      </div>

      <button
        className="execute-btn"
        onClick={handleExecute}
        disabled={!selectedAction}
      >
        Execute Command
      </button>
    </div>
  );
}

export default ControlZone;
