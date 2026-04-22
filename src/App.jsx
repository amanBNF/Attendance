// import React, { useState } from "react";

// const App = () => {
//   const [total, setTotal] = useState("");
//   const [absent, setAbsent] = useState("");
//   const [days, setDays] = useState("");
//   const [result, setResult] = useState(null);

//   const calculate = () => {
//     const t = Number(total);
//     const a = Number(absent);
//     const d = Number(days);

//     const futureAbsents = d * 8;

//     const newTotal = t + futureAbsents;
//     const newAbsent = a + futureAbsents;

//     const attendance = ((newTotal - newAbsent) / newTotal) * 100;

//     // 🎯 Safe bunk calculation
//     let safeBunk = 0;
//     while (
//       ((newTotal - (newAbsent + safeBunk)) /
//         (newTotal + safeBunk)) *
//         100 >=
//       75
//     ) {
//       safeBunk++;
//     }
//     safeBunk--;

//     // 📉 Recovery calculation
//     let recovery = 0;
//     if (attendance < 75) {
//       while (
//         ((newTotal + recovery - newAbsent) /
//           (newTotal + recovery)) *
//           100 <
//         75
//       ) {
//         recovery++;
//       }
//     }

//     setResult({
//       newTotal,
//       newAbsent,
//       attendance: attendance.toFixed(2),
//       safeBunk,
//       recovery,
//     });
//   };

//   // 🎨 color based on attendance
//   const getColor = (att) => {
//     if (att >= 75) return "text-green-400";
//     if (att >= 60) return "text-yellow-400";
//     return "text-red-400";
//   };

//   return (
//     <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4 text-white">
//       <div className="w-full max-w-md bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-xl">

//         <h1 className="text-2xl text-center font-semibold mb-4">
//           Attendance Tracker
//         </h1>

//         {/* Inputs */}
//         <div className="space-y-3">
//           <input
//             type="number"
//             placeholder="Total Lectures"
//             className="w-full p-3 rounded bg-white/10 border border-white/10"
//             value={total}
//             onChange={(e) => setTotal(e.target.value)}
//           />

//           <input
//             type="number"
//             placeholder="Absent Lectures"
//             className="w-full p-3 rounded bg-white/10 border border-white/10"
//             value={absent}
//             onChange={(e) => setAbsent(e.target.value)}
//           />

//           <input
//             type="number"
//             placeholder="Future Absent Days"
//             className="w-full p-3 rounded bg-white/10 border border-white/10"
//             value={days}
//             onChange={(e) => setDays(e.target.value)}
//           />
//         </div>

//         {/* Button */}
//         <button
//           onClick={calculate}
//           className="w-full mt-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:scale-105 transition"
//         >
//           Calculate
//         </button>

//         {/* Result */}
//         {result && (
//           <div className="mt-6 text-center">

//             {/* 🔵 Circular Progress */}
//             <div className="relative w-32 h-32 mx-auto mb-4">
//               <div className="absolute inset-0 rounded-full border-8 border-gray-700"></div>
//               <div
//                 className="absolute inset-0 rounded-full border-8 border-blue-500"
//                 style={{
//                   clipPath: `inset(${100 - result.attendance}% 0 0 0)`
//                 }}
//               ></div>
//               <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
//                 {result.attendance}%
//               </div>
//             </div>

//             <p>Total: {result.newTotal}</p>
//             <p>Absent: {result.newAbsent}</p>

//             <p className={`mt-2 text-lg font-bold ${getColor(result.attendance)}`}>
//               Attendance: {result.attendance}%
//             </p>

//             {/* 🎯 Safe bunk */}
//             <p className="mt-3">
//               You can bunk <span className="font-bold">{result.safeBunk}</span> more lectures safely
//             </p>

//             {/* 📉 Recovery */}
//             {result.recovery > 0 && (
//               <p className="mt-2 text-red-400">
//                 Attend next <span className="font-bold">{result.recovery}</span> lectures to reach 75%
//               </p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;


// import React, { useState } from "react";

// const App = () => {
//   const [total, setTotal] = useState("");
//   const [absent, setAbsent] = useState("");
//   const [days, setDays] = useState("");

//   // 🔮 New feature states
//   const [futureTotalDays, setFutureTotalDays] = useState("");
//   const [futureAbsentDays, setFutureAbsentDays] = useState("");

//   const [result, setResult] = useState(null);

//   const calculate = () => {
//     const t = Number(total);
//     const a = Number(absent);
//     const d = Number(days);

//     const futureAbsents = d * 8;

//     const newTotal = t + futureAbsents;
//     const newAbsent = a + futureAbsents;

//     const attendance = ((newTotal - newAbsent) / newTotal) * 100;

//     // 🎯 Safe bunk
//     let safeBunk = 0;
//     while (
//       ((newTotal - (newAbsent + safeBunk)) /
//         (newTotal + safeBunk)) *
//         100 >=
//       75
//     ) {
//       safeBunk++;
//     }
//     safeBunk--;

//     // 📉 Recovery
//     let recovery = 0;
//     if (attendance < 75) {
//       while (
//         ((newTotal + recovery - newAbsent) /
//           (newTotal + recovery)) *
//           100 <
//         75
//       ) {
//         recovery++;
//       }
//     }

//     // 🔮 Prediction feature
//     const N = Number(futureTotalDays);
//     const A = Number(futureAbsentDays);

//     let predictedAttendance = null;

//     if (N > 0 && A <= N) {
//       const futureLectures = N * 8;
//       const futureAbsentLectures = A * 8;

//       const totalAfter = t + futureLectures;
//       const absentAfter = a + futureAbsentLectures;

//       predictedAttendance =
//         ((totalAfter - absentAfter) / totalAfter) * 100;
//     }

//     setResult({
//       newTotal,
//       newAbsent,
//       attendance: attendance.toFixed(2),
//       safeBunk,
//       recovery,
//       predictedAttendance:
//         predictedAttendance !== null
//           ? predictedAttendance.toFixed(2)
//           : null,
//     });
//   };

//   const getColor = (att) => {
//     if (att >= 75) return "text-green-400";
//     if (att >= 60) return "text-yellow-400";
//     return "text-red-400";
//   };

//   return (
//     <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4 text-white">
//       <div className="w-full max-w-md bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-xl">

//         <h1 className="text-2xl text-center font-semibold mb-4">
//           Attendance Tracker
//         </h1>

//         {/* Inputs */}
//         <div className="space-y-3">
//           <input
//             type="number"
//             placeholder="Total Lectures"
//             className="w-full p-3 rounded bg-white/10 border border-white/10"
//             value={total}
//             onChange={(e) => setTotal(e.target.value)}
//           />

//           <input
//             type="number"
//             placeholder="Absent Lectures"
//             className="w-full p-3 rounded bg-white/10 border border-white/10"
//             value={absent}
//             onChange={(e) => setAbsent(e.target.value)}
//           />

//           <input
//             type="number"
//             placeholder="Future Absent Days (simple)"
//             className="w-full p-3 rounded bg-white/10 border border-white/10"
//             value={days}
//             onChange={(e) => setDays(e.target.value)}
//           />
//         </div>

//         {/* 🔮 Prediction Section (NEW DIV) */}
//         <div className="mt-5 p-4 rounded-xl bg-black/40 border border-white/10">
//           <h2 className="text-lg font-semibold mb-2 text-purple-400">
//             Future Attendance Predictor
//           </h2>

//           <div className="space-y-2">
//             <input
//               type="number"
//               placeholder="Next Total Days"
//               className="w-full p-2 rounded bg-white/10 border border-white/10"
//               value={futureTotalDays}
//               onChange={(e) => setFutureTotalDays(e.target.value)}
//             />

//             <input
//               type="number"
//               placeholder="Days You Will Be Absent"
//               className="w-full p-2 rounded bg-white/10 border border-white/10"
//               value={futureAbsentDays}
//               onChange={(e) => setFutureAbsentDays(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Button */}
//         <button
//           onClick={calculate}
//           className="w-full mt-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:scale-105 transition"
//         >
//           Calculate
//         </button>

//         {/* Results */}
//         {result && (
//           <div className="mt-6 text-center">

//             <p>Total: {result.newTotal}</p>
//             <p>Absent: {result.newAbsent}</p>

//             <p className={`mt-2 text-lg font-bold ${getColor(result.attendance)}`}>
//               Attendance: {result.attendance}%
//             </p>

//             {/* 🎯 Safe bunk */}
//             <p className="mt-3">
//               You can bunk <span className="font-bold">{result.safeBunk}</span> more lectures safely
//             </p>

//             {/* 📉 Recovery */}
//             {result.recovery > 0 && (
//               <p className="mt-2 text-red-400">
//                 Attend next <span className="font-bold">{result.recovery}</span> lectures to reach 75%
//               </p>
//             )}

//             {/* 🔮 Prediction Result */}
//             {result.predictedAttendance && (
//               <div className="mt-4 p-4 rounded-xl bg-black/50 border border-purple-500/30">
//                 <p className="text-gray-300">
//                   After {futureTotalDays} days (absent {futureAbsentDays} days):
//                 </p>
//                 <p className="text-2xl font-bold text-purple-400">
//                   {result.predictedAttendance}%
//                 </p>
//               </div>
//             )}

//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;


// import React, { useState } from "react";

// const App = () => {
//   // Main inputs
//   const [total, setTotal] = useState("");
//   const [absent, setAbsent] = useState("");
//   const [days, setDays] = useState("");

//   // Prediction inputs
//   const [futureTotalDays, setFutureTotalDays] = useState("");
//   const [futureAbsentDays, setFutureAbsentDays] = useState("");

//   const [result, setResult] = useState(null);

//   // Popup state (with memory)
//   const [showPopup, setShowPopup] = useState(
//     !localStorage.getItem("seenPopup")
//   );

//   const handleStart = () => {
//     localStorage.setItem("seenPopup", "true");
//     setShowPopup(false);
//   };

//   const calculate = () => {
//     const t = Number(total);
//     const a = Number(absent);
//     const d = Number(days);

//     if (t === 0) return;

//     const futureAbsents = d * 8;

//     const newTotal = t + futureAbsents;
//     const newAbsent = a + futureAbsents;

//     const attendance = ((newTotal - newAbsent) / newTotal) * 100;

//     // 🎯 Safe bunk
//     let safeBunk = 0;
//     while (
//       ((newTotal - (newAbsent + safeBunk)) /
//         (newTotal + safeBunk)) *
//         100 >=
//       75
//     ) {
//       safeBunk++;
//     }
//     safeBunk--;

//     // 📉 Recovery
//     let recovery = 0;
//     if (attendance < 75) {
//       while (
//         ((newTotal + recovery - newAbsent) /
//           (newTotal + recovery)) *
//           100 <
//         75
//       ) {
//         recovery++;
//       }
//     }

//     // 🔮 Prediction
//     const N = Number(futureTotalDays);
//     const A = Number(futureAbsentDays);

//     let predictedAttendance = null;

//     if (N > 0 && A <= N) {
//       const futureLectures = N * 8;
//       const futureAbsentLectures = A * 8;

//       const totalAfter = t + futureLectures;
//       const absentAfter = a + futureAbsentLectures;

//       predictedAttendance =
//         ((totalAfter - absentAfter) / totalAfter) * 100;
//     }

//     setResult({
//       newTotal,
//       newAbsent,
//       attendance: attendance.toFixed(2),
//       safeBunk,
//       recovery,
//       predictedAttendance:
//         predictedAttendance !== null
//           ? predictedAttendance.toFixed(2)
//           : null,
//     });
//   };

//   const getColor = (att) => {
//     if (att >= 75) return "text-green-400";
//     if (att >= 60) return "text-yellow-400";
//     return "text-red-400";
//   };

//   return (
//     <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4 text-white">

//       {/* 🔥 POPUP */}
//       {showPopup && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
//           <div className="bg-[#0f172a] max-w-md w-full p-6 rounded-2xl border border-white/10 shadow-xl">

//             <h2 className="text-xl font-semibold mb-3 text-center text-purple-400">
//               Welcome 👋
//             </h2>

//             <p className="text-sm text-gray-300 mb-3">
//               📌 Instructions:
//             </p>

//             <ul className="text-sm text-gray-400 space-y-2 mb-5">
//               <li>• Enter total and absent lectures</li>
//               <li>• 1 day = 8 lectures</li>
//               <li>• Use predictor for future planning</li>
//               <li>• Maintain at least 75% attendance</li>
//             </ul>

//             <button
//               onClick={handleStart}
//               className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:scale-105 transition"
//             >
//               OK, Continue
//             </button>
//           </div>
//         </div>
//       )}

//       {/* MAIN CARD */}
//       <div className="w-full max-w-md bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-xl">

//         <h1 className="text-2xl text-center font-semibold mb-4">
//           Attendance Tracker
//         </h1>

//         {/* Inputs */}
//         <div className="space-y-3">
//           <input
//             type="number"
//             placeholder="Total Lectures"
//             className="w-full p-3 rounded bg-white/10 border border-white/10"
//             value={total}
//             onChange={(e) => setTotal(e.target.value)}
//           />

//           <input
//             type="number"
//             placeholder="Absent Lectures"
//             className="w-full p-3 rounded bg-white/10 border border-white/10"
//             value={absent}
//             onChange={(e) => setAbsent(e.target.value)}
//           />

//           <input
//             type="number"
//             placeholder="Future Absent Days (simple)"
//             className="w-full p-3 rounded bg-white/10 border border-white/10"
//             value={days}
//             onChange={(e) => setDays(e.target.value)}
//           />
//         </div>

//         {/* 🔮 Predictor Section */}
//         <div className="mt-5 p-4 rounded-xl bg-black/40 border border-white/10">
//           <h2 className="text-lg font-semibold mb-2 text-purple-400">
//             Future Attendance Predictor
//           </h2>

//           <div className="space-y-2">
//             <input
//               type="number"
//               placeholder="Next Total Days"
//               className="w-full p-2 rounded bg-white/10 border border-white/10"
//               value={futureTotalDays}
//               onChange={(e) => setFutureTotalDays(e.target.value)}
//             />

//             <input
//               type="number"
//               placeholder="Days You Will Be Absent"
//               className="w-full p-2 rounded bg-white/10 border border-white/10"
//               value={futureAbsentDays}
//               onChange={(e) => setFutureAbsentDays(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Button */}
//         <button
//           onClick={calculate}
//           className="w-full mt-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:scale-105 transition"
//         >
//           Calculate
//         </button>

//         {/* Results */}
//         {result && (
//           <div className="mt-6 text-center">

//             <p>Total: {result.newTotal}</p>
//             <p>Absent: {result.newAbsent}</p>

//             <p className={`mt-2 text-lg font-bold ${getColor(result.attendance)}`}>
//               Attendance: {result.attendance}%
//             </p>

//             <p className="mt-3">
//               You can bunk <span className="font-bold">{result.safeBunk}</span> more lectures safely
//             </p>

//             {result.recovery > 0 && (
//               <p className="mt-2 text-red-400">
//                 Attend next <span className="font-bold">{result.recovery}</span> lectures to reach 75%
//               </p>
//             )}

//             {result.predictedAttendance && (
//               <div className="mt-4 p-4 rounded-xl bg-black/50 border border-purple-500/30">
//                 <p className="text-gray-300">
//                   After {futureTotalDays} days (absent {futureAbsentDays} days):
//                 </p>
//                 <p className="text-2xl font-bold text-purple-400">
//                   {result.predictedAttendance}%
//                 </p>
//               </div>
//             )}

//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;


// import React, { useState } from "react";

// const App = () => {
//   // Main inputs
//   const [total, setTotal] = useState("");
//   const [absent, setAbsent] = useState("");
//   const [days, setDays] = useState("");

//   // Predictor inputs
//   const [futureTotalDays, setFutureTotalDays] = useState("");
//   const [futureAbsentDays, setFutureAbsentDays] = useState("");

//   // 🆕 Attendance after N days (no absence)
//   const [attendDays, setAttendDays] = useState("");

//   const [result, setResult] = useState(null);

//   const [showPopup, setShowPopup] = useState(
//     !localStorage.getItem("seenPopup")
//   );

//   const handleStart = () => {
//     localStorage.setItem("seenPopup", "true");
//     setShowPopup(false);
//   };

//   const calculate = () => {
//     const t = Number(total);
//     const a = Number(absent);
//     const d = Number(days);

//     if (t === 0) return;

//     // 🔹 Basic future absents
//     const futureAbsents = d * 8;

//     const newTotal = t + futureAbsents;
//     const newAbsent = a + futureAbsents;

//     const attendance = ((newTotal - newAbsent) / newTotal) * 100;

//     // 🎯 Safe bunk
//     let safeBunk = 0;
//     while (
//       ((newTotal - (newAbsent + safeBunk)) /
//         (newTotal + safeBunk)) *
//         100 >=
//       75
//     ) {
//       safeBunk++;
//     }
//     safeBunk--;

//     // 📉 Recovery
//     let recovery = 0;
//     if (attendance < 75) {
//       while (
//         ((newTotal + recovery - newAbsent) /
//           (newTotal + recovery)) *
//           100 <
//         75
//       ) {
//         recovery++;
//       }
//     }

//     // 🔮 Custom prediction
//     const N = Number(futureTotalDays);
//     const A = Number(futureAbsentDays);

//     let predictedAttendance = null;

//     if (N > 0 && A <= N) {
//       const totalAfter = t + N * 8;
//       const absentAfter = a + A * 8;

//       predictedAttendance =
//         ((totalAfter - absentAfter) / totalAfter) * 100;
//     }

//     // 🆕 Attendance after N days (no absence)
//     const attendN = Number(attendDays);
//     let attendPrediction = null;

//     if (attendN > 0) {
//       const totalAfter = t + attendN * 8;
//       const absentAfter = a; // no new absences

//       attendPrediction =
//         ((totalAfter - absentAfter) / totalAfter) * 100;
//     }

//     setResult({
//       newTotal,
//       newAbsent,
//       attendance: attendance.toFixed(2),
//       safeBunk,
//       recovery,
//       predictedAttendance:
//         predictedAttendance !== null
//           ? predictedAttendance.toFixed(2)
//           : null,
//       attendPrediction:
//         attendPrediction !== null
//           ? attendPrediction.toFixed(2)
//           : null,
//     });
//   };

//   const getColor = (att) => {
//     if (att >= 75) return "text-green-400";
//     if (att >= 60) return "text-yellow-400";
//     return "text-red-400";
//   };

//   return (
//     <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4 text-white">

//       {/* 🔥 POPUP */}
//       {showPopup && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
//           <div className="bg-[#0f172a] max-w-md w-full p-6 rounded-2xl border border-white/10 shadow-xl">
//             <h2 className="text-xl font-semibold mb-3 text-center text-purple-400">
//               Welcome 👋
//             </h2>

//             <ul className="text-sm text-gray-400 space-y-2 mb-5">
//               <li>• Enter total & absent lectures</li>
//               <li>• 1 day = 8 lectures</li>
//               <li>• Plan future absences smartly</li>
//               <li>• Maintain ≥ 75% attendance</li>
//             </ul>

//             <button
//               onClick={handleStart}
//               className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"
//             >
//               OK, Continue
//             </button>
//           </div>
//         </div>
//       )}

//       {/* MAIN */}
//       <div className="w-full max-w-md bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl">

//         <h1 className="text-2xl text-center mb-4 font-semibold">
//           Attendance Tracker
//         </h1>

//         {/* Inputs */}
//         <div className="space-y-3">
//           <input
//             type="number"
//             placeholder="Total Lectures"
//             className="w-full p-3 bg-white/10 rounded"
//             value={total}
//             onChange={(e) => setTotal(e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Absent Lectures"
//             className="w-full p-3 bg-white/10 rounded"
//             value={absent}
//             onChange={(e) => setAbsent(e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Future Absent Days"
//             className="w-full p-3 bg-white/10 rounded"
//             value={days}
//             onChange={(e) => setDays(e.target.value)}
//           />
//         </div>

//         {/* 🔮 Predictor */}
//         <div className="mt-4 p-4 bg-black/40 rounded">
//           <h2 className="text-purple-400 mb-2">
//             Future Absence Predictor
//           </h2>
//           <input
//             type="number"
//             placeholder="Next Total Days"
//             className="w-full p-2 mb-2 bg-white/10 rounded"
//             value={futureTotalDays}
//             onChange={(e) => setFutureTotalDays(e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Absent Days"
//             className="w-full p-2 bg-white/10 rounded"
//             value={futureAbsentDays}
//             onChange={(e) => setFutureAbsentDays(e.target.value)}
//           />
//         </div>

//         {/* 🆕 Attend All Predictor */}
//         <div className="mt-4 p-4 bg-black/40 rounded">
//           <h2 className="text-blue-400 mb-2">
//             Attendance if You Attend All
//           </h2>
//           <input
//             type="number"
//             placeholder="Next Days (no absence)"
//             className="w-full p-2 bg-white/10 rounded"
//             value={attendDays}
//             onChange={(e) => setAttendDays(e.target.value)}
//           />
//         </div>

//         <button
//           onClick={calculate}
//           className="w-full mt-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded"
//         >
//           Calculate
//         </button>

//         {/* Results */}
//         {result && (
//           <div className="mt-6 text-center">

//             <p className={getColor(result.attendance)}>
//               Attendance: {result.attendance}%
//             </p>

//             <p className="mt-2">
//               Safe bunk: {result.safeBunk}
//             </p>

//             {result.recovery > 0 && (
//               <p className="text-red-400">
//                 Attend next {result.recovery} lectures
//               </p>
//             )}

//             {/* Prediction */}
//             {result.predictedAttendance && (
//               <div className="mt-4 bg-black/50 p-3 rounded">
//                 <p>After planned absence:</p>
//                 <p className="text-purple-400 text-xl">
//                   {result.predictedAttendance}%
//                 </p>
//               </div>
//             )}

//             {/* 🆕 Attend all result */}
//             {result.attendPrediction && (
//               <div className="mt-4 bg-black/50 p-3 rounded">
//                 <p>If you attend all classes:</p>
//                 <p className="text-blue-400 text-xl">
//                   {result.attendPrediction}%
//                 </p>
//               </div>
//             )}

//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";

const App = () => {
  // Main inputs
  const [total, setTotal] = useState("");
  const [absent, setAbsent] = useState("");
  const [days, setDays] = useState("");

  // Predictor inputs
  const [futureTotalDays, setFutureTotalDays] = useState("");
  const [futureAbsentDays, setFutureAbsentDays] = useState("");

  // Hidden feature
  const [attendDays, setAttendDays] = useState("");
  const [showAttendFeature, setShowAttendFeature] = useState(false);

  const [result, setResult] = useState(null);

  const [showPopup, setShowPopup] = useState(
    !localStorage.getItem("seenPopup")
  );

  const handleStart = () => {
    localStorage.setItem("seenPopup", "true");
    setShowPopup(false);
  };

  const calculate = () => {
    const t = Number(total);
    const a = Number(absent);
    const d = Number(days);

    if (t === 0) return;

    const futureAbsents = d * 8;

    const newTotal = t + futureAbsents;
    const newAbsent = a + futureAbsents;

    const attendance = ((newTotal - newAbsent) / newTotal) * 100;

    // 🎯 Safe bunk
    let safeBunk = 0;
    while (
      ((newTotal - (newAbsent + safeBunk)) /
        (newTotal + safeBunk)) *
        100 >=
      75
    ) {
      safeBunk++;
    }
    safeBunk--;

    // 📉 Recovery
    let recovery = 0;
    if (attendance < 75) {
      while (
        ((newTotal + recovery - newAbsent) /
          (newTotal + recovery)) *
          100 <
        75
      ) {
        recovery++;
      }
    }

    // 🔮 Prediction
    const N = Number(futureTotalDays);
    const A = Number(futureAbsentDays);

    let predictedAttendance = null;

    if (N > 0 && A <= N) {
      const totalAfter = t + N * 8;
      const absentAfter = a + A * 8;

      predictedAttendance =
        ((totalAfter - absentAfter) / totalAfter) * 100;
    }

    // 🆕 Hidden feature calculation
    const attendN = Number(attendDays);
    let attendPrediction = null;

    if (attendN > 0) {
      const totalAfter = t + attendN * 8;
      const absentAfter = a;

      attendPrediction =
        ((totalAfter - absentAfter) / totalAfter) * 100;
    }

    setResult({
      attendance: attendance.toFixed(2),
      safeBunk,
      recovery,
      predictedAttendance:
        predictedAttendance !== null
          ? predictedAttendance.toFixed(2)
          : null,
      attendPrediction:
        attendPrediction !== null
          ? attendPrediction.toFixed(2)
          : null,
    });
  };

  const getColor = (att) => {
    if (att >= 75) return "text-green-400";
    if (att >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4 text-white">

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="bg-[#0f172a] max-w-md w-full p-6 rounded-2xl border border-white/10">
            <h2 className="text-xl text-center text-purple-400 mb-3">
              Welcome 👋
            </h2>

            <ul className="text-sm text-gray-400 space-y-2 mb-5">
              <li>• Enter total & absent lectures</li>
              <li>• 1 day = 8 lectures</li>
              <li>• Plan your attendance smartly</li>
            </ul>

            <button
              onClick={handleStart}
              className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded"
            >
              OK, Continue
            </button>
          </div>
        </div>
      )}

      {/* MAIN */}
      <div className="w-full max-w-md bg-white/5 p-6 rounded-2xl border border-white/10">

        <h1 className="text-2xl text-center mb-4 font-semibold">
          Attendance Tracker
        </h1>

        {/* Inputs */}
        <div className="space-y-3">
          <input
            type="number"
            placeholder="Total Lectures"
            className="w-full p-3 bg-white/10 rounded"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
          />
          <input
            type="number"
            placeholder="Absent Lectures"
            className="w-full p-3 bg-white/10 rounded"
            value={absent}
            onChange={(e) => setAbsent(e.target.value)}
          />
          <input
            type="number"
            placeholder="Future Absent Days"
            className="w-full p-3 bg-white/10 rounded"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
        </div>

        {/* Predictor */}
        <div className="mt-4 p-4 bg-black/40 rounded">
          <h2 className="text-purple-400 mb-2">
            Future Absence Predictor
          </h2>
          <input
            type="number"
            placeholder="Next Total Days"
            className="w-full p-2 mb-2 bg-white/10 rounded"
            value={futureTotalDays}
            onChange={(e) => setFutureTotalDays(e.target.value)}
          />
          <input
            type="number"
            placeholder="Absent Days"
            className="w-full p-2 bg-white/10 rounded"
            value={futureAbsentDays}
            onChange={(e) => setFutureAbsentDays(e.target.value)}
          />
        </div>

        {/* 🔥 Toggle Button */}
        <button
          onClick={() => setShowAttendFeature(!showAttendFeature)}
          className="w-full mt-4 py-2 bg-white/10 rounded hover:bg-white/20 transition"
        >
          {showAttendFeature ? "Hide Extra Feature" : "Show Extra Feature"}
        </button>

        {/* Hidden Section */}
        {showAttendFeature && (
          <div className="mt-4 p-4 bg-black/40 rounded">
            <h2 className="text-blue-400 mb-2">
              Attendance if You Attend All
            </h2>
            <input
              type="number"
              placeholder="Next Days (no absence)"
              className="w-full p-2 bg-white/10 rounded"
              value={attendDays}
              onChange={(e) => setAttendDays(e.target.value)}
            />
          </div>
        )}

        <button
          onClick={calculate}
          className="w-full mt-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded"
        >
          Calculate
        </button>

        {/* Results */}
        {result && (
          <div className="mt-6 text-center">

            <p className={getColor(result.attendance)}>
              Attendance: {result.attendance}%
            </p>

            <p className="mt-2">
              Safe bunk: {result.safeBunk}
            </p>

            {result.recovery > 0 && (
              <p className="text-red-400">
                Attend next {result.recovery} lectures
              </p>
            )}

            {result.predictedAttendance && (
              <div className="mt-4 bg-black/50 p-3 rounded">
                <p>After planned absence:</p>
                <p className="text-purple-400 text-xl">
                  {result.predictedAttendance}%
                </p>
              </div>
            )}

            {showAttendFeature && result.attendPrediction && (
              <div className="mt-4 bg-black/50 p-3 rounded">
                <p>If you attend all classes:</p>
                <p className="text-blue-400 text-xl">
                  {result.attendPrediction}%
                </p>
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  );
};

export default App;