import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Card from "./Card";

export default function Release() {
  return (
    <div className="releases">
      {/* Главный контейнер. Оборачивает весь компонент Release.
          Используется для группировки и стилизации всех внутренних элементов. */}
      <div className="release orange">
        {/* Первый блок релиза с классом "orange".
            Включает текстовый и графический контент. */}
        <div className="content">
          {/* Контейнер для текстового контента.
              Содержит заголовки, описания и ссылки. */}
          <h2 className="title">Initial Release 4/11</h2>
          <p className="description">
            {/* Описание релиза. Включает ссылку на внешний ресурс (OpenSea). */}
            We have released four limited edition NFTs early which can be bid on
            via <a href="#">OpenSea</a>
          </p>
          <p className="description">
            {/* Дополнительная информация о релизе. */}
            There will be the only four of these NFTs we ever make, so be sure
            not to miss out!
          </p>
          <p className="description">
            {/* Уточнение о благотворительности. */}
            50% of proceeds go to charity.
          </p>
          <a href="#" className="link">
            {/* Ссылка для проверки релиза. */}
            Check them out <BsArrowRight />
            {/* <BsArrowRight /> — иконка стрелки из библиотеки react-icons. */}
          </a>
        </div>
        <div className="image">
          {/* Контейнер для изображения релиза и декоративного элемента. */}
          <img src={`${import.meta.env.BASE_URL}release1.png`} alt="release 1" />
          {/* Картинка релиза. Путь указывает на файл в папке public. */}
          <div className="ellipse pink"></div>
          {/* Декоративный элемент в виде эллипса с классом "pink". */}
        </div>
      </div>
      <div className="release green">
        {/* Второй блок релиза с классом "green".
            Содержит карточку и текстовый контент. */}
        <div className="card-container">
          {/* Контейнер для компонента Card и декоративного эллипса. */}
          <Card
            image={`${import.meta.env.BASE_URL}release2.png`}
            alt="release2"
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
          {/* Компонент Card — переиспользуемый элемент с переданными пропсами. */}
          <div className="ellipse orange"></div>
          {/* Декоративный элемент в виде эллипса с классом "orange". */}
        </div>
        <div className="content">
          {/* Контейнер для текстового контента релиза. */}
          <h2 className="title">Initial Release 4/11</h2>
          <p className="description">
            {/* Описание релиза с ссылкой на OpenSea. */}
            We have released four limited edition NFTs early which can be bid on
            via <a href="#">OpenSea</a>
          </p>
          <p className="description">
            {/* Дополнительная информация о релизе. */}
            There will be the only four of these NFTs we ever make, so be sure
            not to miss out!
          </p>
          <p className="description">
            {/* Уточнение о благотворительности. */}
            50% of proceeds go to charity.
          </p>
          <a href="#" className="link">
            {/* Ссылка для проверки релиза. */}
            Check them out <BsArrowRight />
            {/* <BsArrowRight /> — иконка стрелки из библиотеки react-icons. */}
          </a>
        </div>
      </div>
    </div>
  );
}
