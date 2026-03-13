import "./CommandLog.css";

export default function CommandLog({ entries }) {
  return (
    <div className="commandlog-container">
      <h3 className="commandlog-title">Command Log</h3>

      <div className="commandlog-box">
        {entries.length === 0 && (
          <div className="commandlog-empty">No commands yet</div>
        )}

        {entries.map((item, index) => (
          <div key={index} className="commandlog-entry">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
