
  


import { useEffect, useState } from "react";

const Card = ({ name, flag }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
        border: "1px solid gray",
        borderRadius: "10px",
        width: "200px",
        height: "200px",
        // marginTop:"20px"
      }}
    >
      <img src={flag} alt={`flag of ${name}`} style={{ width: "80px", height: "80px", marginTop:"20px" }} />
      <h2>{name}</h2>
    </div>
  );
};

const Endpoint = "https://xcountries-backend.azurewebsites.net/all";

export default function HomePage() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch(Endpoint)
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
      // .catch((error) => console.error("Error fetching data", error));
      // .catch((error) => console.error("Error fetching data:", error));
    // .console.error(`Error fetching data: ${error.message}`);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {apiData.map(({ name, flag, abbr }) => (
        <Card key={abbr} name={name} flag={flag} />
      ))}
    </div>
  );
}


