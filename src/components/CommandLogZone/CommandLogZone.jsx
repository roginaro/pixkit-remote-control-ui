// src/components/CommandLogZone.jsx
import React from "react";
import "./CommandLogZone.css";

function CommandLogZone({ logs }) {
  return (
    <div className="log-zone">
      <div className="zone-header">
        <h2>Command Log</h2>
        <span className="log-count">{logs.length} entries</span>
      </div>

      <div className="log-list">
        {logs.length === 0 ? (
          <div className="log-empty">No commands executed yet</div>
        ) : (
          logs.map((log) => (
            <div key={log.id} className="log-entry">
              <div className="log-timestamp">
                {new Date(log.timestamp).toLocaleTimeString()}
              </div>
              <div className="log-content">
                <span className="log-command">{log.command}</span>
                {log.params && Object.keys(log.params).length > 0 && (
                  <span className="log-params">
                    {JSON.stringify(log.params)}
                  </span>
                )}
              </div>
              <span className={`log-status status-${log.status}`}>
                {log.status}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CommandLogZone;
