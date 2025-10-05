import React from "react";
import clients1 from "../public/clients1.png";
import clients2 from "../public/clients2.png";
import clients3 from "../public/clients3.png";
import clients4 from "../public/clients4.png";
import clients5 from "../public/clients5.png";

export default function Clients() {
  const data = [clients1, clients2, clients3, clients4, clients5];
  return (
    <div className="clients">
      <div className="container">
        <div className="clients-container"> 
          {data.map((client, index)=> (
            <div className = "client" key = {index}>
              <img src = {client} alt = "client" />
          
        </div>
          ))}
      </div>
    </div>
    </div>
  );
}