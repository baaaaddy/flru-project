import React from "react";
import "./styles.css";
import { ReactComponent as LeftMainSvg } from "../../assets/svgs/leftMain.svg";
import { ReactComponent as QuestionSvg } from "../../assets/svgs/question.svg";
import { ReactComponent as PeopleSvg } from "../../assets/svgs/people.svg";
import { useNavigate } from "react-router-dom";

export const Header = ({ active }) => {
  const MiddleTextArr = [
    "Задания",
    "Дневник",
    "Планер",
    "Статистика",
    "Видео",
    "Теория",
    "Конспекты",
  ];
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <div className="header-menu-block">
        <div className="header-menu-left-block" onClick={() => navigate("/")}>
          <LeftMainSvg />
        </div>
        <div className="header-menu-middle-block">
          {MiddleTextArr.map((text, index) => {
            if (text === "Задания" && active !== "Задания") {
              return (
                <div
                  className="header-menu-middle-text-block"
                  key={index}
                  onClick={() => navigate("/tasks")}
                >
                  <span className="header-menu-middle-text">Задания</span>
                </div>
              );
            }
            if (text === "Планер" && active !== "Планер") {
              return (
                <div
                  className="header-menu-middle-text-block"
                  key={index}
                  onClick={() => navigate("/planer")}
                >
                  <span className="header-menu-middle-text">Планер</span>
                </div>
              );
            }
            if (text === active) {
              return (
                <div className="header-menu-middle-text-block" key={index}>
                  <span className="header-menu-middle-text-active">{text}</span>
                </div>
              );
            }
            return (
              <div className="header-menu-middle-text-block" key={index}>
                <span className="header-menu-middle-text">{text}</span>
              </div>
            );
          })}
        </div>
        <div className="header-menu-right-block">
          <div className="header-menu-right-block-svg">
            <QuestionSvg />
          </div>
          <div>
            <PeopleSvg />
          </div>
        </div>
      </div>
    </div>
  );
};
