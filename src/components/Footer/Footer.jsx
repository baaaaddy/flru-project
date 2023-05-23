import React from "react";
import "./styles.css";
import { ReactComponent as EllipseDis } from "../../assets/svgs/footer/footerellipseDis.svg";
import { ReactComponent as EllipseAct } from "../../assets/svgs/footer/footerellipseAct.svg";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-block-one">
        <div>
          <span className="footer-container-block-text-up">
            +7 (915) 444-44-44
          </span>
        </div>
        <div>
          <span className="footer-container-block-text-down">
            info@naporoge.ru
          </span>
        </div>
        <div>
          <span className="footer-container-block-text-down">@naporoge</span>
        </div>
      </div>
      <div className="footer-container-block-two">
        <div className="footer-flex">
          <div className="hoverNone">
            <EllipseDis />
          </div>
          <div className="hoverAct">
            <EllipseAct />
          </div>
          <span className="footer-container-block-text-second">
            О проекте «На пороге»
          </span>
        </div>
        <div className="footer-flex">
          <div className="hoverNone">
            <EllipseDis />
          </div>
          <div className="hoverAct">
            <EllipseAct />
          </div>
          <span className="footer-container-block-text-second">
            Политика конфиденциальности
          </span>
        </div>
        <div className="footer-flex">
          <div className="hoverNone">
            <EllipseDis />
          </div>
          <div className="hoverAct">
            <EllipseAct />
          </div>
          <span className="footer-container-block-text-second">
            Договор оферты
          </span>
        </div>
      </div>
      <div className="footer-container-block-three">
        <div className="footer-flex">
          <div className="hoverNone">
            <EllipseDis />
          </div>
          <div className="hoverAct">
            <EllipseAct />
          </div>
          <span className="footer-container-block-text-second">
            Что может дать мне курс развития самоуправления?
          </span>
        </div>
        <div className="footer-flex">
          <div className="hoverNone">
            <EllipseDis />
          </div>
          <div className="hoverAct">
            <EllipseAct />
          </div>
          <span className="footer-container-block-text-second">
            Что такое дело и как его подобрать?
          </span>
        </div>
        <div className="footer-flex">
          <div className="hoverNone">
            <EllipseDis />
          </div>
          <div className="hoverAct">
            <EllipseAct />
          </div>
          <span className="footer-container-block-text-second">
            Все вопросы и ответы
          </span>
        </div>
      </div>
      <div className="footer-container-block-four">
        <span className="footer-container-block-text-four">
          ИП Киктенко Максим Вячеславович ИНН 770407593206 ОГРНИП 32377400066301
          Москва, Смоленская набережная, д.2
        </span>
      </div>
    </div>
  );
};
