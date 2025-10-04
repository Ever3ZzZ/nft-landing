import React from "react";
//Компонент Card принимает и отображает пропсы;
//Card — это универсальный компонент. Он не содержит своих данных, 
//а только принимает их через пропсы.

export default function Card({ image, series, title, price, tag, time }) {
  return (
    <div className="card">
      <div className="card-image">
        {/* Используем путь к картинке */}
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3>{series}</h3>
        <h2>{title}</h2>
        <p>Price: ${price}</p>
        {tag && <p>Tag: #{tag}</p>}
        {time && <p>Time left: {time} hours</p>}
        
      </div>
    </div>
  );
}
