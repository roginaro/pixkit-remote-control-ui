import React from "react";
import "./StatusIndicatorsZone.css";

function StatusIndicatorsZone({ status }) {
  return (
    <div className="status-zone">
      <div className="status-item">
        <span className="status-label">Operating Mode:</span>
        <span className={`status-value mode-${status.mode.toLowerCase()}`}>
          {status.mode}
        </span>
      </div>

      <div className="status-item">
        <span className="status-label">Connection:</span>
        <div className="connection-indicator">
          <span
            className={`status-dot ${status.connected ? "connected" : "disconnected"}`}
          ></span>
          <span className="status-value">
            {status.connected ? "Connected" : "Disconnected"}
          </span>
        </div>
      </div>

      <div className="status-item">
        <span className="status-label">Last Update:</span>
        <span className="status-value">
          {status.lastUpdate
            ? new Date(status.lastUpdate).toLocaleTimeString()
            : "N/A"}
        </span>
      </div>
    </div>
  );
}

export default StatusIndicatorsZone;
