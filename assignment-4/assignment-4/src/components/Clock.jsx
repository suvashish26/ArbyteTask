// import React, { useEffect, useState } from "react";

// function DigitalClock() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     // Setting up the interval to update time every second
//     const intervalId = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     // Cleaning up interval on unmount
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   // Formating time
//   const formattedTime = time.toLocaleTimeString();

//   return (
//     <div className="text-3xl font-mono text-center p-4">{formattedTime}</div>
//   );
// }

// export default DigitalClock;
import React, { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-80 h-48 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold text-gray-700 mb-2">
          Current Time
        </h1>
        <div className="text-4xl font-mono text-blue-600">{formattedTime}</div>
      </div>
    </div>
  );
}

export default DigitalClock;
