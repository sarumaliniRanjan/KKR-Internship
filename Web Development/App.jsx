import { useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("Idle");

  const updateStatus = (newStatus) => {
    setStatus(newStatus);
  };

  return (
    <>
      <header>Robot Dashboard</header>
      <main>
        <div className="section">
          <h2>Robot Status</h2>
          <p id="status-display">Status: <strong>{status}</strong></p>
          <p>Battery Level: <strong style={{ color: "green" }}>85%</strong></p>
        </div>

        <div className="section">
          <h2>🎮 Controls</h2>
          <div className="controls">
            <button onClick={() => updateStatus("Running")}>Start</button>
            <button onClick={() => updateStatus("Stopped")}>Stop</button>
            <button onClick={() => updateStatus("Resetting")}>Reset</button>
          </div>
        </div>

        <div className="section">
          <h2>Sensor Data</h2>
          <p className="sensor-placeholder">Sensor data will appear here...</p>
        </div>
      </main>
    </>
  );
}

export default App;

