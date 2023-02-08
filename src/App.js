import BioData from "./components/BioData";
import persons from "./data";

function App() {
  return (
    <div className="bg-slate-800 py-10 min-h-screen text-slate-200 flex flex-col gap-10 justify-center items-center">
      {persons.map((person, index) => (
        <BioData person={person} key={index} />
      ))}
    </div>
  );
}

export default App;
