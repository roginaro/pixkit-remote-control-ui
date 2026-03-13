import "./LightToggle.css";

export default function LightToggle({ value, onChange }) {
  return (
    <div className="light-container">
      <label className="light-label">Lights:</label>

      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        className="light-checkbox"
      />

      <span className="light-status">{value ? "ON" : "OFF"}</span>
    </div>
  );
}
