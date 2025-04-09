import { useState } from "react";
import Dashboard from "./components/Dashboard";
import IndiaMap from "./components/IndiaMap";

function App() {
  const [selectedState, setSelectedState] = useState(null);

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto">
        <Dashboard selectedState={selectedState} />
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <IndiaMap onStateClick={setSelectedState} />
      </div>
    </div>
  );
}

export default App;
