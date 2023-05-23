import React from "react";
import "./styles.css";
import exclamation from "../../../assets/images/exclamation.png";
import { ReactComponent as LeftArrowActive } from "../../../assets/svgs/planersvgs/leftarrowact.svg";
import { ReactComponent as RightArrowActive } from "../../../assets/svgs/planersvgs/rightarrowact.svg";
import { ReactComponent as UpWordSvg } from "../../../assets/svgs/planersvgs/upword.svg";
import { PlanerCalendar } from "../PlanerCalendar/PlanerCalendar";
import { PlanerActualTime } from "../PlanerActualTime/PlanerActualTime";
import { PlanerMission } from "../PlanerMission/PlanerMission";
import { PlanerCaption } from "../PlanerCaption/PlanerCaption";
import { PlanerCase } from "../PlanerCase/PlanerCase";
export const PlanerMenu = () => {
  return (
    <div className="planer-menu-container background-filter">
      <div className="wrap-bg"></div>
      <div className="planer-menu-container-up-block">
        <div className="planer-menu-container-up-block-first">
          <div className="planer-menu-container-up-block-first-svg-block">
            <UpWordSvg />
          </div>
          <div>
            <div className="planer-menu-container-up-block-first-text-block">
              <span className="planer-menu-container-up-block-first-text-up">
                Выполнение недельного плана 1/5
              </span>
            </div>
            <div className="planer-menu-container-up-block-first-text-block-two">
              <span className="planer-menu-container-up-block-first-text-down">
                День обновляется в 4:00
              </span>
              <div>
                <img src={exclamation} alt="exclamation" />
              </div>
            </div>
          </div>
        </div>
        <div className="planer-menu-container-up-block-second">
          <span className="planer-menu-container-up-block-second-text-up">
            Нарушено правило планирования
          </span>
          <div className="planer-menu-container-up-block-second-svg-left">
            <LeftArrowActive />
          </div>
          <div className="planer-menu-container-up-block-second-time-block">
            <span className="planer-menu-container-up-block-second-time-text">
              18 июня-24 июня
            </span>
          </div>
          <div className="planer-menu-container-up-block-second-svg-right">
            <RightArrowActive />
          </div>
        </div>
      </div>
      <div className="planer-calendar-container">
        {[1, 2, 3, 4, 5, 6].map((value) => {
          return (
            <div className="fullwidth mr16">
              <PlanerCalendar value={value} />
            </div>
          );
        })}
        <div className="fullwidth">
          <PlanerCalendar value={7} />
        </div>
      </div>
      <div className="planer-menu-flex-team">
        <div className="fullwidth mr16">
          <div className="planer-menu-up-left-block">
            <PlanerActualTime />
          </div>
          <div className="planer-menu-down-left-block">
            <PlanerMission />
          </div>
          <div className="planer-menu-down-left-button-block">
            <div className="planer-menu-down-left-button">
              <span className="planer-menu-down-left-button-text">
                Сохранить план
              </span>
            </div>
          </div>
        </div>
        <div>
          <PlanerCaption />
          <div className="planer-menu-mt">
            <PlanerCase />
          </div>
        </div>
      </div>
    </div>
  );
};
