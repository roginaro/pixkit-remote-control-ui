import { useState } from "react";
import "./App.css";
import ControlPad from "./components/ControlPad";
import SpeedSlider from "./components/SpeedSlider";
import ModeSelector from "./components/ModeSelector";
import LightToggle from "./components/LightToggle";
import StatusIndicator from "./components/StatusIndicator";
import CommandLog from "./components/CommandLog";

export default function App() {
  const [log, setLog] = useState([]);
  const [speed, setSpeed] = useState(0);
  const [mode, setMode] = useState("manual");
  const [lights, setLights] = useState(false);
  const [connected, setConnected] = useState(false);

  function handleCommand(cmd) {
    const entry = `${new Date().toLocaleTimeString()} → ${cmd}`;
    setLog((prev) => [entry, ...prev]);
  }

  return (
    <div className="app-container">
      <h2>Pixkit Remote Control Interface (Prototype)</h2>

      <StatusIndicator connected={connected} />

      <LightToggle
        value={lights}
        onChange={(l) => {
          setLights(l);
          const entry = `${new Date().toLocaleTimeString()} → Lights turned ${l ? "ON" : "OFF"}`;
          setLog((prev) => [entry, ...prev]);
        }}
      />

      <ModeSelector
        value={mode}
        onChange={(m) => {
          setMode(m);
          const entry = `${new Date().toLocaleTimeString()} → Mode changed to ${m}`;
          setLog((prev) => [entry, ...prev]);
        }}
      />

      <ControlPad onCommand={handleCommand} />

      <SpeedSlider
        value={speed}
        onChange={(s) => {
          setSpeed(s);
          const entry = `${new Date().toLocaleTimeString()} → Speed set to ${s}`;
          setLog((prev) => [entry, ...prev]);
        }}
      />
      <CommandLog entries={log} />
    </div>
  );
}
