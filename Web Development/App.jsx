import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [robot, setRobot] = useState({
    name: "",
    status: "",
    battery: 0
  });

  const fetchRobotData = () => {
    axios.get("http://localhost:5000/api/robot")
      .then((res) => {
        setRobot(res.data);
      })
      .catch((err) => {
        console.error("Error fetching robot data:", err);
      });
  };

  
  useEffect(() => {
    fetchRobotData();
  }, []);

  const updateStatus = (newStatus) => {
    axios.post("http://localhost:5000/api/robot/status", { status: newStatus })
      .then(() => {
        fetchRobotData(); 
      })
      .catch((err) => {
        console.error("Error updating status:", err);
      });
  };

  return (
    <>
      <header> Robot Dashboard</header>
      <main>
       
        <div className="section">
          <h2> Robot Status</h2>
          <p><strong>Name:</strong> {robot.name}</p>
          <p id="status-display">Status: <strong>{robot.status}</strong></p>
          <p>Battery Level: <strong style={{ color: "green" }}>{robot.battery}%</strong></p>
        </div>

      
        <div className="section">
          <h2> Controls</h2>
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


