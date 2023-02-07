function App() {
  return (
    <div className="h-screen bg-cyan-200 flex items-center justify-center">
      <div className="w-80 bg-white p-5 rounded-xl text-center font-bold">
        <h1 className="text-2xl font-bold">Simple Counter App</h1>
        <h2 className="text-4xl my-3">{0}</h2>
        <div className="">
          <button className="btn bg-cyan-500 shadow-cyan-500/50">
            Increment
          </button>
          <button className="btn bg-pink-500 shadow-pink-500/50">
            Decrement
          </button>
          <button className="btn bg-indigo-500 shadow-indigo-500/50">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
