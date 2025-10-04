import React from "react";
import Card from "./Card";

// SuperRare содержит логику для создания карточек, базовые настройки
export default function SuperRare() {
  const data = [
    {
      image: "/super1.png",
      series: "Gloop Series",
      title: "Purple Man",
      price: 2.99,
      tag: 12983,
      time: 1,
      week: 2,
    },
    {
      image: "/super2.png",
      series: "Gloop Series",
      title: "Beige",
      price: 3.99,
      tag: 12984,
      time: 2,
    },
    {
      image: "/super3.png",
      series: "Gloop Series",
      title: "Red Man",
      price: 4.99,
      tag: 12985,
      time: 3,
    },
    {
      image: "/super4.png",
      series: "Gloop Series",
      title: "Green Man",
      price: 5.99,
      tag: 12986,
      time: 4,
    },
  ];

  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">LE Super Rare Auction</h2>
        <p className="description">
          We have released four limited edition NFTs early, which can be bid on
          via <a href="#">OpenSea</a>.
        </p>
      </div>

      <div className="cards">
        {data.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            series={item.series}
            title={item.title}
            price={item.price}
            tag={item.tag}
            time={item.time}
          />
        ))}
      </div>
    </div>
  );
}
