

import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { FaPlane } from "react-icons/fa";
import dummyData from "./dummyData";

const capitalCoordinates = {
  "Andaman and Nicobar Islands": [92.7456, 11.6234],
  "Andhra Pradesh": [80.515, 16.5062],
  "Arunachal Pradesh": [93.615, 27.0844],
  "Assam": [91.793, 26.1433],
  "Bihar": [85.1376, 25.5941],
  "Chandigarh": [76.7794, 30.7333],
  "Chhattisgarh": [81.6296, 21.2514],
  "Delhi": [77.2090, 28.6139],
  "Dadra and Nagar Haveli and Daman and Diu": [72.8328, 20.3974],
  "Goa": [73.818, 15.4909],
  "Gujarat": [72.6369, 23.2156],
  "Haryana": [76.7794, 30.7333],
  "Himachal Pradesh": [77.1734, 31.1048],
  "Jammu and Kashmir": [74.7973, 34.0837],
  "Jharkhand": [85.3096, 23.3441],
  "Karnataka": [77.5946, 12.9716],
  "Kerala": [76.9366, 8.5241],
  "Ladakh": [77.5833, 34.1526],
  "Lakshadweep": [72.6369, 10.5667],
  "Madhya Pradesh": [77.4126, 23.2599],
  "Maharashtra": [72.8777, 19.0760],
  "Manipur": [93.9368, 24.8170],
  "Meghalaya": [91.8807, 25.5788],
  "Mizoram": [92.7176, 23.7271],
  "Nagaland": [94.1194, 25.6701],
  "Odisha": [85.8245, 20.2961],
  "Puducherry": [79.8083, 11.9416],
  "Punjab": [76.7794, 30.7333],
  "Rajasthan": [75.7873, 26.9124],
  "Sikkim": [88.6065, 27.3314],
  "Tamil Nadu": [80.2707, 13.0827],
  "Telangana": [78.4867, 17.3850],
  "Tripura": [91.2868, 23.8315],
  "Uttarakhand": [78.0322, 30.3165],
  "Uttar Pradesh": [80.9462, 26.8467],
  "West Bengal": [88.3639, 22.5726]
};


const geoUrl = "/india.json";

const IndiaMap = ({ onStateClick, onStateHover }) => {
  return (
    <div className="w-full max-w-[600px] h-auto">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 1000, center: [82, 22] }}
        width={600}
        height={600}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const stateName = geo.properties.st_nm;
              const hasAirport = dummyData[stateName]?.airport;
              const coordinates = capitalCoordinates[stateName];

              return (
                <React.Fragment key={geo.rsmKey}>
                  <Geography
                    geography={geo}
                    onClick={() => onStateClick(stateName)}
                    onMouseEnter={() => onStateHover(stateName)}
                    onMouseLeave={() => onStateHover(null)}
                    style={{
                      default: { fill: "#A5D8FF", outline: "none" },
                      hover: {
                        fill: "#3B82F6",
                        outline: "none",
                        cursor: "pointer",
                      },
                      pressed: { fill: "#1E3A8A", outline: "none" },
                    }}
                  />
                  {hasAirport && coordinates && (
                    <Marker coordinates={coordinates}>
                      <FaPlane color="#DC2626" size={12} />
                    </Marker>
                  )}
                </React.Fragment>
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default IndiaMap;
