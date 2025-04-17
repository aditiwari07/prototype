

// import dummyData from "./dummyData";

// const Dashboard = ({ hoveredState, selectedState, isExpanded, onGoBack }) => {
//   const data =
//     hoveredState && dummyData[hoveredState]
//       ? dummyData[hoveredState]
//       : selectedState && dummyData[selectedState]
//       ? dummyData[selectedState]
//       : null;

//   const displayState = hoveredState || selectedState;

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">State Data Dashboard</h2>
//       {data ? (
//         <div className="bg-white rounded-xl p-4 shadow-md space-y-3">
//           <h3 className="text-xl font-semibold">{displayState}</h3>
//           <p><strong>Population:</strong> {data.population}</p>
//           <p><strong>Capital:</strong> {data.capital}</p>

//           {isExpanded && (
//             <button
//               onClick={onGoBack}
//               className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg"
//             >
//               Go Back
//             </button>
//           )}
//         </div>
//       ) : (
//         <p className="text-gray-500">Hover over a state to view details.</p>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

import dummyData from "./dummyData";

const regionMap = {
  North: [
    "Delhi", "Haryana", "Punjab", "Uttarakhand",
    "Himachal Pradesh", "Jammu and Kashmir", "Ladakh", "Chandigarh"
  ],
  South: [
    "Andhra Pradesh", "Karnataka", "Kerala", "Tamil Nadu",
    "Telangana", "Puducherry", "Lakshadweep"
  ],
  East: [
    "Bihar", "Jharkhand", "Odisha", "West Bengal", "Sikkim",
    "Assam", "Arunachal Pradesh", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Tripura"
  ],
  West: [
    "Rajasthan", "Gujarat", "Goa", "Maharashtra",
    "Madhya Pradesh", "Dadra and Nagar Haveli and Daman and Diu"
  ],
};

const Dashboard = ({
  hoveredState,
  selectedState,
  isExpanded,
  onGoBack,
  onExpand,
  viewMode,
  setViewMode,
  onRegionClick,
  selectedRegion
}) => {
  const isRegionView = viewMode === "region";
  const data = dummyData[selectedState || hoveredState];

  const handleToggleView = () => {
    setViewMode(isRegionView ? "state" : "region");
    onGoBack();
  };

  const handleRegionClick = (region) => {
    onRegionClick(region);
  };

  const getRegionData = (regionName) => {
    const states = regionMap[regionName];
    let populationSum = 0;
    const capitalList = [];

    states.forEach((state) => {
      const stateData = dummyData[state];
      if (stateData) {
        const pop = parseFloat(stateData.population.replace("M", ""));
        populationSum += pop;
        capitalList.push(stateData.capital);
      }
    });

    return {
      population: `${populationSum.toFixed(1)}M`,
      capitals: capitalList.join(", ")
    };
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Data Dashboard</h2>
        <button
          onClick={handleToggleView}
          className="px-3 py-1 bg-purple-600 text-white rounded-lg"
        >
          {isRegionView ? "See Statewise" : "See Regionwise"}
        </button>
      </div>

      {isRegionView ? (
        selectedRegion ? (
          <div className="bg-white rounded-xl p-4 shadow-md">
            <h3 className="text-xl font-semibold mb-2">{selectedRegion} Region</h3>
            <p><strong>Total Population:</strong> {getRegionData(selectedRegion).population}</p>
            <p><strong>Capitals:</strong> {getRegionData(selectedRegion).capitals}</p>
            <button
              onClick={onGoBack}
              className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg"
            >
              Go Back
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            {Object.keys(regionMap).map((region) => (
              <button
                key={region}
                onClick={() => handleRegionClick(region)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                {region} Region
              </button>
            ))}
          </div>
        )
      ) : data ? (
        <div className="bg-white rounded-xl p-4 shadow-md space-y-3">
          <h3 className="text-xl font-semibold">{selectedState || hoveredState}</h3>
          <p><strong>Population:</strong> {data.population}</p>
          <p><strong>Capital:</strong> {data.capital}</p>

          {selectedState && !isExpanded ? (
            <button
              onClick={onExpand}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Expand
            </button>
          ) : selectedState && isExpanded ? (
            <button
              onClick={onGoBack}
              className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg"
            >
              Go Back
            </button>
          ) : null}
        </div>
      ) : (
        <p className="text-gray-500">Hover or click on a state to view details.</p>
      )}
    </div>
  );
};

export default Dashboard;
