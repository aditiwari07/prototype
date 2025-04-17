


// import { useState } from "react";
// import Dashboard from "./components/Dashboard";
// import IndiaMap from "./components/IndiaMap";
// import StateMap from "./components/StateMap";

// const App = () => {
//   const [selectedState, setSelectedState] = useState(null);
//   const [hoveredState, setHoveredState] = useState(null);
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleStateClick = (stateName) => {
//     setSelectedState(stateName);
//     setIsExpanded(true); // Immediately expand on click
//   };

//   const handleGoBack = () => {
//     setIsExpanded(false);
//     setSelectedState(null);
//   };

//   return (
//     <div className="flex flex-col md:flex-row gap-4 p-4">
//       <div className="md:w-1/2 w-full">
//         <Dashboard
//           hoveredState={hoveredState}
//           selectedState={selectedState}
//           isExpanded={isExpanded}
//           onGoBack={handleGoBack}
//         />
//       </div>
//       <div className="md:w-1/2 w-full">
//         {isExpanded && selectedState ? (
//           <StateMap stateName={selectedState} />
//         ) : (
//           <IndiaMap
//             onStateClick={handleStateClick}
//             onStateHover={setHoveredState}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import IndiaMap from "./components/IndiaMap";
import StateMap from "./components/StateMap";

const App = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [viewMode, setViewMode] = useState("state");
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleStateClick = (stateName) => {
    setSelectedState(stateName);
    setIsExpanded(true);
  };

  const handleRegionClick = (regionName) => {
    setSelectedRegion(regionName);
    setIsExpanded(true);
  };

  const handleGoBack = () => {
    setIsExpanded(false);
    setSelectedState(null);
    setSelectedRegion(null);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <div className="md:w-1/2 w-full">
        <Dashboard
          hoveredState={hoveredState}
          selectedState={selectedState}
          isExpanded={isExpanded}
          onGoBack={handleGoBack}
          onExpand={() => setIsExpanded(true)}
          viewMode={viewMode}
          setViewMode={setViewMode}
          onRegionClick={handleRegionClick}
          selectedRegion={selectedRegion}
        />
      </div>
      <div className="md:w-1/2 w-full">
        {isExpanded ? (
          selectedState ? (
            <StateMap stateName={selectedState} />
          ) : selectedRegion ? (
            <StateMap regionName={selectedRegion} />
          ) : null
        ) : (
          <IndiaMap
            onStateClick={handleStateClick}
            onStateHover={setHoveredState}
            viewMode={viewMode}
          />
        )}
      </div>
    </div>
  );
};

export default App;
