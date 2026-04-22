import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const App = () => {
  const [total, setTotal] = useState("");
  const [absent, setAbsent] = useState("");
  const [days, setDays] = useState("");
  const [result, setResult] = useState(null);

  const cardRef = useRef();
  const resultRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  const calculate = () => {
    const totalLectures = Number(total);
    const absentLectures = Number(absent);
    const futureDays = Number(days);

    const futureAbsents = futureDays * 8;

    const newTotal = totalLectures + futureAbsents;
    const newAbsent = absentLectures + futureAbsents;

    const attendance =
      ((newTotal - newAbsent) / newTotal) * 100;

    setResult({
      newTotal,
      newAbsent,
      attendance: attendance.toFixed(2),
    });

    setTimeout(() => {
      gsap.fromTo(
        resultRef.current,
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
      );
    }, 100);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{
        fontFamily: "Poppins, sans-serif",
        background: "linear-gradient(135deg, #0f172a, #020617)",
      }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(to_right,#fff_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Card */}
      <div
        ref={cardRef}
        className="relative w-full max-w-md p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
      >
        <h1 className="text-2xl font-semibold text-center text-white mb-4">
          Attendance Calculator
        </h1>

        {/* Inputs */}
        <div className="space-y-3">
          <input
            type="number"
            placeholder="Total Lectures"
            className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:ring-2 focus:ring-blue-500 outline-none"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
          />

          <input
            type="number"
            placeholder="Absent Lectures"
            className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:ring-2 focus:ring-blue-500 outline-none"
            value={absent}
            onChange={(e) => setAbsent(e.target.value)}
          />

          <input
            type="number"
            placeholder="Future Absent Days"
            className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:ring-2 focus:ring-blue-500 outline-none"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          onClick={calculate}
          className="w-full mt-4 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-transform"
        >
          Calculate
        </button>

        {/* Result */}
        {result && (
          <div
            ref={resultRef}
            className="mt-5 p-4 rounded-xl bg-black/40 border border-white/10 text-center"
          >
            <p className="text-gray-300">
              Total Lectures:{" "}
              <span className="text-white font-medium">
                {result.newTotal}
              </span>
            </p>
            <p className="text-gray-300">
              Total Absents:{" "}
              <span className="text-white font-medium">
                {result.newAbsent}
              </span>
            </p>

            {/* Number Font */}
            <p
              className="text-3xl mt-3 text-blue-400"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              {result.attendance}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;