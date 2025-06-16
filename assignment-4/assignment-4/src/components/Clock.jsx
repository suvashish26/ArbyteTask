import React, { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Setting up the interval to update time every second
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleaning up interval on unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Formating time
  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="text-3xl font-mono text-center p-4">{formattedTime}</div>
  );
}

export default DigitalClock;
