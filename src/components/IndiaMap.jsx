import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "/india.json";

const IndiaMap = ({ onStateClick }) => {
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
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => onStateClick(stateName)}
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
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default IndiaMap;
