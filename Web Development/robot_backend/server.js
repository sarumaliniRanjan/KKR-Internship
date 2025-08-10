const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json()); 


let robot = {
  name: "Atlas-X1",
  status: "Idle",
  battery: 85
};


app.get("/api/robot", (req, res) => {
  res.json(robot);
});


app.post("/api/robot/status", (req, res) => {
  const { status } = req.body;
  if (status) {
    robot.status = status;
    return res.json({ message: "Status updated", robot });
  }
  res.status(400).json({ error: "Status is required" });
});

app.listen(5000, () => {
  console.log("✅ Server running on port 5000");
});
