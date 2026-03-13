import "./ControlPad.css";

export default function ControlPad({ onCommand }) {
  return (
    <div className="controlpad-container">
      <button className="control-btn up" onClick={() => onCommand("FORWARD")}>
        ▲
      </button>

      <div className="middle-row">
        <button className="control-btn left" onClick={() => onCommand("LEFT")}>
          ◀
        </button>

        <button className="control-btn stop" onClick={() => onCommand("STOP")}>
          ■
        </button>

        <button
          className="control-btn right"
          onClick={() => onCommand("RIGHT")}
        >
          ▶
        </button>
      </div>

      <button className="control-btn down" onClick={() => onCommand("REVERSE")}>
        ▼
      </button>
    </div>
  );
}
