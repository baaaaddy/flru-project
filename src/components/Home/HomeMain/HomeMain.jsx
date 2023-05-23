import React from "react";
import "./styles.css";
import { ReactComponent as LeftMainSvg } from "../../../assets/svgs/leftMain.svg";
import { ReactComponent as QuestionSvg } from "../../../assets/svgs/question.svg";
import { ReactComponent as PeopleSvg } from "../../../assets/svgs/people.svg";
import { useNavigate } from "react-router-dom";
import { Header } from "../../Header/Header";

export const HomeMain = () => {
  const navigate = useNavigate();
  const [scroll, setScroll] = React.useState(0);
  const MiddleTextArr = [
    "Задания",
    "Дневник",
    "Планер",
    "Статистика",
    "Видео",
    "Теория",
    "Конспекты",
  ];
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleUpButton = () => {
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="homeMain-container">
      <div className="content">
        <div
          className={
            scroll < 1 ? "homeMain-menu-block" : "homeMain-menu-block-scroll"
          }
        >
          <div className="homeMain-menu-left-block">
            <LeftMainSvg />
          </div>
          <div className="homeMain-menu-middle-block">
            {MiddleTextArr.map((text, index) => {
              if (text === "Планер") {
                return (
                  <div
                    className="homeMain-menu-middle-text-block"
                    key={index}
                    onClick={() => navigate("/planer")}
                  >
                    <span
                      className={
                        scroll < 1
                          ? "homeMain-menu-middle-text"
                          : "homeMain-menu-middle-text-scroll"
                      }
                    >
                      {text}
                    </span>
                  </div>
                );
              }
              if (text === "Задания") {
                return (
                  <div
                    className="homeMain-menu-middle-text-block"
                    key={index}
                    onClick={() => navigate("/tasks")}
                  >
                    <span
                      className={
                        scroll < 1
                          ? "homeMain-menu-middle-text"
                          : "homeMain-menu-middle-text-scroll"
                      }
                    >
                      {text}
                    </span>
                  </div>
                );
              }
              return (
                <div className="homeMain-menu-middle-text-block" key={index}>
                  <span
                    className={
                      scroll < 1
                        ? "homeMain-menu-middle-text"
                        : "homeMain-menu-middle-text-scroll"
                    }
                  >
                    {text}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="homeMain-menu-right-block">
            <div className="homeMain-menu-right-block-svg">
              <QuestionSvg />
            </div>
            <div>
              <PeopleSvg />
            </div>
          </div>
        </div>

        <div className="homeMain-center-block">
          <div className="homeMain-center-text-up-block">
            {/* со шрифтом траблы */}
            <span className="homeMain-center-text-up">
              Развитие самоэффективности
            </span>
          </div>
          <div className="homeMain-center-text-down-block">
            <span className="homeMain-center-text-down">
              С другой стороны консультация с широким активом влечет за собой
              процесс внедрения и модернизации системы обучения кадров,
              соответствует насущным потребностям.
            </span>
          </div>
          <div className="homeMain-center-button-block">
            <span className="homeMain-center-button-text">Приобрести курс</span>
          </div>
        </div>
      </div>
    </div>
  );
};
