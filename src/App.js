import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const calculateTimeLeft = () => {
    const difference = new Date("2025-04-07T00:00:00") - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#0E0E0EFF",
        fontFamily: "degular",
        display: "flex",
        flexDirection: "column",
        padding: "0 10%",
        height: "100vh",
        textAlign: "center",
        color: "white",
      }}
      className="App-header"
    >
      <h4 style={{ fontWeight: 400, paddingBottom: "10px" }}>
        🚧 WEBSITE UNDER CONSTRUCTION 🚧 <br />
        WE APOLOGIZE FOR THE INCONVENIENCE
      </h4>
      <div style={{ fontSize: "28px" }}>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
        {timeLeft.seconds}s
      </div>
      <div>
        <p>
          For any request please contact me here: info@alessandrogiustini.com
        </p>
      </div>
    </div>
  );
}

export default App;
