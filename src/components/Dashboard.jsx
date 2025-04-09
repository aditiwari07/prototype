import React from "react";

const dummyData = {
  "Andhra Pradesh": { population: "53M", capital: "Amaravati" },
  "Arunachal Pradesh": { population: "1.7M", capital: "Itanagar" },
  "Assam": { population: "35M", capital: "Dispur" },
  "Bihar": { population: "124M", capital: "Patna" },
  "Chhattisgarh": { population: "30M", capital: "Raipur" },
  "Goa": { population: "1.6M", capital: "Panaji" },
  "Gujarat": { population: "62M", capital: "Gandhinagar" },
  "Haryana": { population: "28M", capital: "Chandigarh" },
  "Himachal Pradesh": { population: "7.4M", capital: "Shimla" },
  "Jharkhand": { population: "39M", capital: "Ranchi" },
  "Karnataka": { population: "68M", capital: "Bengaluru" },
  "Kerala": { population: "35M", capital: "Thiruvananthapuram" },
  "Madhya Pradesh": { population: "85M", capital: "Bhopal" },
  "Maharashtra": { population: "112M", capital: "Mumbai" },
  "Manipur": { population: "3.1M", capital: "Imphal" },
  "Meghalaya": { population: "3.8M", capital: "Shillong" },
  "Mizoram": { population: "1.2M", capital: "Aizawl" },
  "Nagaland": { population: "2.2M", capital: "Kohima" },
  "Odisha": { population: "46M", capital: "Bhubaneswar" },
  "Punjab": { population: "30M", capital: "Chandigarh" },
  "Rajasthan": { population: "81M", capital: "Jaipur" },
  "Sikkim": { population: "0.7M", capital: "Gangtok" },
  "Tamil Nadu": { population: "78M", capital: "Chennai" },
  "Telangana": { population: "40M", capital: "Hyderabad" },
  "Tripura": { population: "4.2M", capital: "Agartala" },
  "Uttar Pradesh": { population: "240M", capital: "Lucknow" },
  "Uttarakhand": { population: "11M", capital: "Dehradun" },
  "West Bengal": { population: "99M", capital: "Kolkata" },
  "Andaman and Nicobar Islands": { population: "0.38M", capital: "Port Blair" },
  "Chandigarh": { population: "1.1M", capital: "Chandigarh" },
  "Dadra and Nagar Haveli and Daman and Diu": { population: "0.6M", capital: "Daman" },
  "Delhi": { population: "32M", capital: "New Delhi" },
  "Jammu and Kashmir": { population: "13M", capital: "Srinagar" },
  "Ladakh": { population: "0.3M", capital: "Leh" },
  "Lakshadweep": { population: "0.07M", capital: "Kavaratti" },
  "Puducherry": { population: "1.2M", capital: "Puducherry" },
};

const Dashboard = ({ selectedState }) => {
  const data = selectedState ? dummyData[selectedState] : null;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">State Data Dashboard</h2>
      {data ? (
        <div className="bg-white rounded-xl p-4 shadow-md">
          <h3 className="text-xl font-semibold mb-2">{selectedState}</h3>
          <p><strong>Population:</strong> {data.population}</p>
          <p><strong>Capital:</strong> {data.capital}</p>
        </div>
      ) : (
        <p className="text-gray-500">Click on a state to view details.</p>
      )}
    </div>
  );
};

export default Dashboard;