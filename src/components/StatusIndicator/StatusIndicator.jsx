import "./StatusIndicator.css";

export default function StatusIndicator({ connected }) {
  return (
    <div className={`status-box ${connected ? "ok" : "fail"}`}>
      Status: {connected ? "Connected" : "Disconnected (placeholder)"}
    </div>
  );
}
