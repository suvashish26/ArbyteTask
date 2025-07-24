import React from "react";
import NavigationBar from "../components/NavigationBar";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-800">
      <NavigationBar />

      <main className="flex flex-col items-center justify-center text-center px-6 py-20">
        {/* Typewriter Hero */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Hi, I'm{" "}
          <span className="text-blue-600">
            <Typewriter
              words={[
                "Suvashish",
                "a Frontend Developer",
                "a React Enthusiast",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
          I build responsive, clean, and user-friendly web applications with
          React and Tailwind.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            to="Projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            View Projects
          </Link>
          <Link
            to="About"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition"
          >
            Contact Me
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
