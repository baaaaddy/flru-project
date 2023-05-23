import React from "react";
import "./styles.css";
import { ReactComponent as EllipseOne } from "../../../assets/svgs/planersvgs/ellipseone.svg";
import { ReactComponent as EllipseTwo } from "../../../assets/svgs/planersvgs/ellipsetwo.svg";
import { ReactComponent as EllipseThree } from "../../../assets/svgs/planersvgs/ellipsethree.svg";
import { ReactComponent as EllipseFour } from "../../../assets/svgs/planersvgs/ellipsefour.svg";

export const PlanerMission = () => {
  return (
    <div className="planer-mission-container">
      <div className="planer-mission-container-text-block">
        <div className="planer-mission-container-mission-block">
          <span className="planer-mission-container-mission-block-text">
            Ваше задание
          </span>
        </div>
        <div className="planer-mission-container-mission-blockTwo">
          <span className="planer-mission-container-mission-block-textTwo">
            Название: Бег
          </span>
        </div>
      </div>
      <div className="planer-mission-container-completion-block">
        <div>
          <span className="planer-mission-container-completion-block-text">
            Объем выполнения:
          </span>
          <span className="star">*</span>
        </div>
        <div className="planer-mission-container-completion-block-precent-block">
          <span className="planer-mission-container-completion-block-precent-text">
            100%
          </span>
        </div>
      </div>
      <div className="planer-mission-container-power-block">
        <div className="planer-mission-container-power-block-first">
          <div className="planer-mission-container-power-block-text-block">
            <span className="planer-mission-container-power-block-text-block">
              Сила желания
            </span>
            <span className="star">*</span>
          </div>
          <div className="planer-mission-container-power-block-scale-block">
            <div className="planer-mission-container-power-block-scale">
              <EllipseOne />
              <EllipseTwo />
              <EllipseThree />
              <EllipseFour />
            </div>
            <div className="planer-mission-container-power-block-scale-text-block">
              <div className="planer-mission-container-power-block-scale-text-block-child">
                <span className="planer-mission-container-power-block-scale-text">
                  Ноль
                </span>
              </div>
              <div className="line"></div>
              <div className="planer-mission-container-power-block-scale-text-block-child">
                <span className="planer-mission-container-power-block-scale-text">
                  Слабо
                </span>
              </div>
              <div className="line"></div>
              <div className="planer-mission-container-power-block-scale-text-block-child">
                <span className="planer-mission-container-power-block-scale-text">
                  Средне
                </span>
              </div>
              <div className="line"></div>
              <div className="planer-mission-container-power-block-scale-text-block-child">
                <span className="planer-mission-container-power-block-scale-text">
                  Сильно
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="planer-mission-container-power-block-first">
          <div className="planer-mission-container-power-block-text-block">
            <span className="planer-mission-container-power-block-text-block">
              Сила желания
            </span>
            <span className="star">*</span>
          </div>
          <div className="planer-mission-container-power-block-scale-block">
            <div className="planer-mission-container-power-block-scale">
              <EllipseOne />
              <EllipseTwo />
              <EllipseThree />
              <EllipseFour />
            </div>
            <div className="planer-mission-container-power-block-scale-text-block">
              <div className="planer-mission-container-power-block-scale-text-block-child">
                <span className="planer-mission-container-power-block-scale-text">
                  Ноль
                </span>
              </div>
              <div className="line"></div>
              <div className="planer-mission-container-power-block-scale-text-block-child">
                <span className="planer-mission-container-power-block-scale-text">
                  Слабо
                </span>
              </div>
              <div className="line"></div>
              <div className="planer-mission-container-power-block-scale-text-block-child">
                <span className="planer-mission-container-power-block-scale-text">
                  Средне
                </span>
              </div>
              <div className="line"></div>
              <div className="planer-mission-container-power-block-scale-text-block-child">
                <span className="planer-mission-container-power-block-scale-text">
                  Сильно
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="planer-mission-container-pause-block">
        <div>
          <div className="planer-mission-container-pause-block-containter">
            <div className="planer-mission-container-pause-block-text-block">
              <span className="planer-mission-container-pause-block-text">
                Удалось сделать Паузу?
              </span>
            </div>
            <div className="planer-mission-container-pause-block-reply-block">
              <div className="planer-mission-container-pause-block-reply-one">
                <span className="planer-mission-container-pause-block-reply-text">
                  Да
                </span>
              </div>
              <div className="planer-mission-container-pause-block-reply-two">
                <span className="planer-mission-container-pause-block-reply-text">
                  Нет
                </span>
              </div>
            </div>
          </div>
          <div className="planer-mission-container-pause-block-containter-down">
            <div className="planer-mission-container-pause-block-text-block-down">
              <span className="planer-mission-container-pause-block-text">
                Удалось порадоваться после завершения Дела?
              </span>
            </div>
            <div className="planer-mission-container-pause-block-reply-block">
              <div className="planer-mission-container-pause-block-reply-one">
                <span className="planer-mission-container-pause-block-reply-text">
                  Да
                </span>
              </div>
              <div className="planer-mission-container-pause-block-reply-two">
                <span className="planer-mission-container-pause-block-reply-text">
                  Нет
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="planer-mission-container-pause-block-containterTwo">
          <div className="planer-mission-container-pause-block-text-block">
            <span className="planer-mission-container-pause-block-text">
              Удалось усилить желание?
            </span>
          </div>
          <div className="planer-mission-container-pause-block-reply-block">
            <div className="planer-mission-container-pause-block-reply-one">
              <span className="planer-mission-container-pause-block-reply-text">
                Да
              </span>
            </div>
            <div className="planer-mission-container-pause-block-reply-two">
              <span className="planer-mission-container-pause-block-reply-text">
                Нет
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="planer-mission-container-button-block">
        <div className="planer-mission-container-button">
          <span className="planer-mission-container-button-text">
            Сохранить
          </span>
        </div>
      </div>
    </div>
  );
};
