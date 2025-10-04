import React from "react";
import Card from "../src/Card";
//<img src="/release2.png" alt="release2" />
//Рендер 2-ух карточек чисто для Free секции
import "../src/scss/sections/_free.scss";

export default function Free() {
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src="/icon.png" alt="icon" />
          </div>
          <h2 className="title">Free NFT for early birds</h2>
          <p className="description">
            Sign up today and you'll get a free NFT when we launch
          </p>
 
        </div>
      </div>
      <div className="cards">
        
        <div className="card1"> {/*Дает пропсы для Card*/}
        <Card
          image ="/super1.png" alt="release2" 
          series = "Floop Series"
          title = "Purple Man"
          price = {2.99}
          tag ={123983}
          time = {1}
        />
        </div>
        <div className="card2">
        <Card
          image ="/release2.png" alt="release2" 
          series = "Gloop Series"
          title = "Purple Man"
          price = {2.99}
          tag ={123983}
          time = {2}
          />
        </div>
      </div>
    </div>
  );
}
