import React from "react";
import "./styles.css";
import { ReactComponent as EllipseOneSvg } from "../../../assets/svgs/casestatus/ellipseone.svg";
import { ReactComponent as EllipseTwoSvg } from "../../../assets/svgs/casestatus/ellipsetwo.svg";
import { ReactComponent as EllipseThreeSvg } from "../../../assets/svgs/casestatus/ellipsethree.svg";
import { ReactComponent as EllipseFourSvg } from "../../../assets/svgs/casestatus/ellipsefour.svg";
import { ReactComponent as EllipseFiveSvg } from "../../../assets/svgs/casestatus/ellipsefive.svg";

export const PlanerCase = () => {
  return (
    <div className="planer-case-container">
      <div className="planer-caption-container-block">
        <span className="planer-caption-container-block-text">Статус дела</span>
      </div>
      <div className="planer-caption-container-checkbox-block mt16">
        <span className="planer-caption-container-checkbox-block-text">
          Запланировано
        </span>
        <div>
          <EllipseOneSvg />
        </div>
      </div>
      <div className="planer-caption-container-checkbox-block">
        <span className="planer-caption-container-checkbox-block-text">
          Выполнено
        </span>
        <div>
          <EllipseTwoSvg />
        </div>
      </div>
      <div className="planer-caption-container-checkbox-block">
        <span className="planer-caption-container-checkbox-block-text">
          Выполнено и совпало
        </span>
        <div>
          <EllipseThreeSvg />
        </div>
      </div>
      <div className="planer-caption-container-checkbox-block">
        <span className="planer-caption-container-checkbox-block-text">
          Допустимый перенос
        </span>
        <div>
          <EllipseFourSvg />
        </div>
      </div>
      <div className="planer-caption-container-checkbox-block">
        <span className="planer-caption-container-checkbox-block-text">
          Пропущено
        </span>
        <div>
          <EllipseFiveSvg />
        </div>
      </div>
      <div className="planer-caption-container-policy-block">
        <span className="planer-caption-container-policy-block-text">
          Для правильного планирования используйте
        </span>{" "}
        <span className="planer-caption-container-policy-block-textTwo">
          Правила работы
        </span>
      </div>
    </div>
  );
};
