

// import React from "react";
// import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
// import { FaPlane } from "react-icons/fa";
// import dummyData from "./dummyData";
// import projectionConfig from "./projectionConfig";

// // Capital coordinates (same as used in IndiaMap)
// const capitalCoordinates = {
//   "Andaman and Nicobar Islands": [92.7456, 11.6234],
//   "Andhra Pradesh": [80.515, 16.5062],
//   "Arunachal Pradesh": [93.615, 27.0844],
//   "Assam": [91.793, 26.1433],
//   "Bihar": [85.1376, 25.5941],
//   "Chandigarh": [76.7794, 30.7333],
//   "Chhattisgarh": [81.6296, 21.2514],
//   "Delhi": [77.2090, 28.6139],
//   "Dadra and Nagar Haveli and Daman and Diu": [72.8328, 20.3974],
//   "Goa": [73.818, 15.4909],
//   "Gujarat": [72.6369, 23.2156],
//   "Haryana": [76.7794, 30.7333],
//   "Himachal Pradesh": [77.1734, 31.1048],
//   "Jammu and Kashmir": [74.7973, 34.0837],
//   "Jharkhand": [85.3096, 23.3441],
//   "Karnataka": [77.5946, 12.9716],
//   "Kerala": [76.9366, 8.5241],
//   "Ladakh": [77.5833, 34.1526],
//   "Lakshadweep": [72.6369, 10.5667],
//   "Madhya Pradesh": [77.4126, 23.2599],
//   "Maharashtra": [72.8777, 19.0760],
//   "Manipur": [93.9368, 24.8170],
//   "Meghalaya": [91.8807, 25.5788],
//   "Mizoram": [92.7176, 23.7271],
//   "Nagaland": [94.1194, 25.6701],
//   "Odisha": [85.8245, 20.2961],
//   "Puducherry": [79.8083, 11.9416],
//   "Punjab": [76.7794, 30.7333],
//   "Rajasthan": [75.7873, 26.9124],
//   "Sikkim": [88.6065, 27.3314],
//   "Tamil Nadu": [80.2707, 13.0827],
//   "Telangana": [78.4867, 17.3850],
//   "Tripura": [91.2868, 23.8315],
//   "Uttarakhand": [78.0322, 30.3165],
//   "Uttar Pradesh": [80.9462, 26.8467],
//   "West Bengal": [88.3639, 22.5726],
// };

// const StateMap = ({ stateName }) => {
//   const geoUrl = `/states/${dummyData[stateName].name}.json`;

//   const config = projectionConfig[stateName] || {
//     center: [85, 25],
//     scale: 3000,
//   };

//   const coordinates = capitalCoordinates[stateName];
//   const hasAirport = dummyData[stateName]?.airport;

//   return (
//     <div className="w-full max-w-[600px] h-auto">
//       <ComposableMap
//         projection="geoMercator"
//         projectionConfig={config}
//         width={600}
//         height={600}
//         style={{ width: "100%", height: "auto" }}
//       >
//         <Geographies geography={geoUrl}>
//           {({ geographies }) =>
//             geographies.map((geo) => (
//               <Geography
//                 key={geo.rsmKey}
//                 geography={geo}
//                 style={{
//                   default: { fill: "#A5D8FF", outline: "none" },
//                   hover: { fill: "#3B82F6", outline: "none", cursor: "pointer" },
//                   pressed: { fill: "#1E3A8A", outline: "none" },
//                 }}
//               />
//             ))
//           }
//         </Geographies>

//         {/* Marker for the capital with airport */}
//         {hasAirport && coordinates && (
//           <Marker coordinates={coordinates}>
//             <FaPlane color="#DC2626" size={14} />
//           </Marker>
//         )}
//       </ComposableMap>
//     </div>
//   );
// };

// export default StateMap;


// import React from "react";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import dummyData from "./dummyData";
// import projectionConfig from "./projectionConfig";


// const StateMap = ({ stateName, regionName }) => {
//   const geoUrl = stateName
//     ? `/states/${dummyData[stateName]?.name}.json`
//     : regionName
//     ? `/regions/${regionName.toLowerCase()}.json`
//     : null;

//   const config =
//     projectionConfig[stateName] ||
//     projectionConfig[regionName] || {
//       center: [85, 25],
//       scale: 3000,
//     };

//   if (!geoUrl) return <div>Loading...</div>;

//   return (
//     <div className="w-full max-w-[600px] h-auto">
//       <ComposableMap
//         projection="geoMercator"
//         projectionConfig={config}
//         width={600}
//         height={600}
//         style={{ width: "100%", height: "auto" }}
//       >
//         <Geographies geography={geoUrl}>
//           {({ geographies }) =>
//             geographies.map((geo) => (
//               <Geography
//                 key={geo.rsmKey}
//                 geography={geo}
//                 style={{
//                   default: { fill: "#A5D8FF", outline: "none" },
//                   hover: { fill: "#3B82F6", outline: "none", cursor: "pointer" },
//                   pressed: { fill: "#1E3A8A", outline: "none" },
//                 }}
//               />
//             ))
//           }
//         </Geographies>
//       </ComposableMap>
//     </div>
//   );
// };

// export default StateMap;


import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { FaPlane } from "react-icons/fa";
import * as topojson from "topojson-client";
import * as d3 from "d3-geo";
import dummyData from "./dummyData";
import projectionConfig from "./projectionConfig";

// Regions and capitals
const regionMap = {
  North: [
    "Delhi", "Haryana", "Punjab", "Uttarakhand", "Himachal Pradesh",
    "Jammu and Kashmir", "Ladakh", "Chandigarh",
  ],
  South: [
    "Andhra Pradesh", "Karnataka", "Kerala", "Tamil Nadu", "Telangana",
    "Puducherry", "Lakshadweep",
  ],
  East: [
    "Bihar", "Jharkhand", "Odisha", "West Bengal", "Sikkim", "Assam",
    "Arunachal Pradesh", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Tripura",
  ],
  West: [
    "Rajasthan", "Gujarat", "Goa", "Maharashtra", "Madhya Pradesh",
    "Dadra and Nagar Haveli and Daman and Diu",
  ],
};

const capitalCoordinates = {
  Delhi: [77.1025, 28.7041],
  Haryana: [76.0856, 29.0588],
  Punjab: [75.3412, 31.1471],
  Uttarakhand: [78.0322, 30.3165],
  "Himachal Pradesh": [77.1734, 31.1048],
  "Jammu and Kashmir": [74.7973, 34.0837],
  Ladakh: [77.577, 34.1526],
  Chandigarh: [76.7794, 30.7333],
  "Andhra Pradesh": [80.648, 16.5062],
  Karnataka: [77.5946, 12.9716],
  Kerala: [76.9366, 8.5241],
  "Tamil Nadu": [80.2707, 13.0827],
  Telangana: [78.4867, 17.385],
  Puducherry: [79.8083, 11.9139],
  Lakshadweep: [72.6167, 10.5667],
  Bihar: [85.1376, 25.5941],
  Jharkhand: [85.3096, 23.3441],
  Odisha: [85.8245, 20.2961],
  "West Bengal": [88.3639, 22.5726],
  Sikkim: [88.5122, 27.3389],
  Assam: [91.7362, 26.2006],
  "Arunachal Pradesh": [93.6167, 27.1],
  Manipur: [93.9063, 24.817],
  Meghalaya: [91.8933, 25.5788],
  Mizoram: [92.9376, 23.1645],
  Nagaland: [94.5624, 26.1584],
  Tripura: [91.9882, 23.8315],
  Rajasthan: [75.7873, 26.9124],
  Gujarat: [72.5714, 23.0225],
  Goa: [74.124, 15.2993],
  Maharashtra: [72.8777, 19.076],
  "Madhya Pradesh": [77.4126, 23.2599],
  "Dadra and Nagar Haveli and Daman and Diu": [72.8333, 20.3974],
};

const StateMap = ({ stateName, regionName }) => {
  const [geoData, setGeoData] = useState(null);
  const [dynamicConfig, setDynamicConfig] = useState(null);
  const isRegion = !!regionName;
  const activeStates = isRegion ? regionMap[regionName] : [];

  const defaultConfig =
    projectionConfig[stateName] || {
      center: [85, 25],
      scale: 3000,
    };

  useEffect(() => {
    const loadGeoData = async () => {
      try {
        if (stateName) {
          const file = `/states/${dummyData[stateName]?.name}.json`;
          const response = await fetch(file);
          const topo = await response.json();
          const geo = topojson.feature(topo, topo.objects[Object.keys(topo.objects)[0]]);
          setGeoData(geo);
          setDynamicConfig(null); // Use fixed projection
        } else if (regionName) {
          const features = [];
          for (const state of activeStates) {
            const file = `/states/${dummyData[state]?.name}.json`;
            const response = await fetch(file);
            const topo = await response.json();
            const geo = topojson.feature(topo, topo.objects[Object.keys(topo.objects)[0]]);
            features.push(...geo.features);
          }
          const mergedGeo = { type: "FeatureCollection", features };
          setGeoData(mergedGeo);

          // Dynamic bounding box
          const width = 600;
const height = 600;
const [[x0, y0], [x1, y1]] = d3.geoPath().bounds(mergedGeo);

const dx = x1 - x0;
const dy = y1 - y0;
const cx = (x0 + x1) / 2;
const cy = (y0 + y1) / 2;

const scale = Math.min(width / dx, height / dy) * 40; // adjust multiplier if needed
const center = [cx, cy];

setDynamicConfig({ center, scale });

        }
      } catch (error) {
        console.error("Error loading map:", error);
      }
    };

    loadGeoData();
  }, [stateName, regionName]);

  if (!geoData) return <div>Loading map...</div>;

  return (
    <div className="w-full max-w-[600px] h-auto">
      {regionName && (
        <div className="text-red-500 font-bold mb-2">Showing Region: {regionName}</div>
      )}
      <ComposableMap
        projection="geoMercator"
        projectionConfig={dynamicConfig || defaultConfig}
        width={600}
        height={600}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoData}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: "#A5D8FF", outline: "none" },
                  hover: { fill: "#3B82F6", outline: "none", cursor: "pointer" },
                  pressed: { fill: "#1E3A8A", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Plane icon for state view */}
        {stateName && dummyData[stateName]?.airport && capitalCoordinates[stateName] && (
          <Marker coordinates={capitalCoordinates[stateName]}>
            <FaPlane color="red" size={18} />
          </Marker>
        )}

        {/* Plane icons for region view */}
        {isRegion &&
          activeStates.map(
            (state) =>
              dummyData[state]?.airport &&
              capitalCoordinates[state] && (
                <Marker key={state} coordinates={capitalCoordinates[state]}>
                  <FaPlane color="red" size={18} />
                </Marker>
              )
          )}
      </ComposableMap>
    </div>
  );
};

export default StateMap;
