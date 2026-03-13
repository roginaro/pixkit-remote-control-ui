import { useState } from "react";
import ControlPad from "./components/ControlPad";

import "./App.css";

export default function App() {
  const [log, setLog] = useState([]);

  function handleCommand(cmd) {
    const entry = `${new Date().toLocaleTimeString()} → ${cmd}`;
    setLog((prev) => [entry, ...prev]);
  }

  return (
    <div className="app-container">
      <h1>Pixkit Remote Control Interface (Prototype)</h1>

      <ControlPad onCommand={handleCommand} />

      <div className="log-box">
        <h3>Command Log</h3>
        {log.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}
