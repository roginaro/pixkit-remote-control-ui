import "./SpeedSlider.css";

export default function SpeedSlider({ value, onChange }) {
  return (
    <div className="speed-container">
      <label className="speed-label">Speed: {value}</label>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="speed-slider"
      />
    </div>
  );
}
