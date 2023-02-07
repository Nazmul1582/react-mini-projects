import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const incrementHandler = () => setCount((prevState) => prevState + 1);

  const decrementHandler = () => setCount((prevState) => prevState - 1);

  const resetHandler = () => setCount(0);

  return (
    <div className="h-screen bg-cyan-200 flex items-center justify-center">
      <div className="w-80 bg-white p-5 rounded-xl text-center font-bold">
        <h1 className="text-2xl font-bold">Simple Counter App</h1>
        <h2 className="text-4xl my-3">{count}</h2>
        <div>
          <button
            onClick={incrementHandler}
            className="btn bg-cyan-500 shadow-cyan-500/50"
          >
            Increment
          </button>
          <button
            onClick={decrementHandler}
            className="btn bg-pink-500 shadow-pink-500/50"
          >
            Decrement
          </button>
          <button
            onClick={resetHandler}
            className="btn bg-indigo-500 shadow-indigo-500/50"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
