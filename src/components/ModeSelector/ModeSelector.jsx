import "./ModeSelector.css";

export default function ModeSelector({ value, onChange }) {
  return (
    <div className="mode-container">
      <label className="mode-label">Mode:</label>

      <select
        className="mode-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="manual">Manual</option>
        <option value="assisted">Assisted</option>
      </select>
    </div>
  );
}
