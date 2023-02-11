import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment1Handler = () => setCount((prevState) => prevState + 1);
  const increment10Handler = () => setCount((prevState) => prevState + 10);
  const increment100Handler = () => setCount((prevState) => prevState + 100);

  const decrement1Handler = () => setCount((prevState) => prevState - 1);
  const decrement10Handler = () => setCount((prevState) => prevState - 10);
  const decrement100Handler = () => setCount((prevState) => prevState - 100);

  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 to-pink-500 flex items-center justify-center">
      <div className="w-[500] bg-white shadow-xl p-5 rounded-xl text-center font-bold">
        <h1 className="text-2xl font-bold">Multiple Counter</h1>
        <h2 className="text-4xl my-3">{count}</h2>
        <div className="grid grid-cols-3">
          <button
            onClick={increment1Handler}
            className="btn bg-cyan-500 shadow-cyan-500/50"
          >
            Increment By 1
          </button>
          <button
            onClick={increment10Handler}
            className="btn bg-pink-500 shadow-pink-500/50"
          >
            Increment By 10
          </button>
          <button
            onClick={increment100Handler}
            className="btn bg-indigo-500 shadow-indigo-500/50"
          >
            Increment By 100
          </button>
          <button
            onClick={decrement1Handler}
            className="btn bg-cyan-500 shadow-cyan-500/50"
          >
            Decrement By 1
          </button>
          <button
            onClick={decrement10Handler}
            className="btn bg-pink-500 shadow-pink-500/50"
          >
            Decrement By 10
          </button>
          <button
            onClick={decrement100Handler}
            className="btn bg-indigo-500 shadow-indigo-500/50"
          >
            Decrement By 100
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
