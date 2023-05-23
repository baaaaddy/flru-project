import React from "react";
import "./styles.css";

export const PlanerCaption = () => {
  return (
    <div className="planer-caption-container">
      <div className="planer-caption-container-block">
        <span className="planer-caption-container-block-text">Заголовок</span>
      </div>
      <div className="planer-caption-container-block-two">
        <div className="planer-caption-container-block-two-block-up">
          <p className="planer-caption-container-block-two-text-first">
            Объем выполнения - в %
          </p>
          <span className="planer-caption-container-block-two-text-second">
            Укажите так, как сами это ощущаете
          </span>
        </div>
        <div className="planer-caption-container-block-two-block">
          <p className="planer-caption-container-block-two-text-first">
            Сила нежеланий и иных помех - в %
          </p>
          <span className="planer-caption-container-block-two-text-second">
            Укажите так, как сами это ощущаете
          </span>
        </div>
        <div className="planer-caption-container-block-two-block">
          <p className="planer-caption-container-block-two-text-first">
            Сила желаний приступить к делу - в %
          </p>
          <span className="planer-caption-container-block-two-text-second">
            Укажите так, как сами это ощущаете
          </span>
        </div>
        <div className="planer-caption-container-block-two-block">
          <p className="planer-caption-container-block-two-text-first">
            Важная информация «для себя»
          </p>
          <span className="planer-caption-container-block-two-text-second">
            Укажите так, как сами это ощущаете
          </span>
        </div>
      </div>
    </div>
  );
};
