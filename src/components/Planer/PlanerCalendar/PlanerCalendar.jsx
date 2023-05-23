import React from "react";
import "./styles.css";
import { ReactComponent as QuestionSvg } from "../../../assets/svgs/planersvgs/question.svg";

export const PlanerCalendar = ({ value }) => {
  return (
    <div className="calendar-container">
      <div className="calendar-container-up-block">
        <span className="calendar-container-up-block-weekday-text">Вт</span>
        <span className="calendar-container-up-block-day-text">19</span>
      </div>
      {value === 1 && (
        <>
          <div className="calendar-container-down-plan-one-block">
            <div className="calendar-container-down-plan-one-block-button">
              <span className="calendar-container-down-plan-one-block-text">
                Запланировать Дело
              </span>
            </div>
          </div>
        </>
      )}
      {value === 2 && (
        <>
          <div className="calendar-container-down-plan-two-block">
            <div className="calendar-container-down-plan-two-block-button">
              <span className="calendar-container-down-plan-two-block-text">
                Выходной
              </span>
            </div>
          </div>
        </>
      )}
      {value === 3 && (
        <>
          <div className="calendar-container-down-plan-three-block">
            <div className="calendar-container-down-plan-three-block-button">
              <div className="calendar-container-down-plan-three-block-button-center">
                <p className="calendar-container-down-plan-two-block-text">
                  16:00 - 18:00
                </p>
                <span className="calendar-container-down-plan-three-block-text">
                  16:30 - 5:17
                </span>
              </div>
            </div>
            <div className="calendar-container-down-plan-three-down-block-button">
              <QuestionSvg />
            </div>
          </div>
        </>
      )}
      {value === 4 && (
        <>
          <div className="calendar-container-down-plan-three-block">
            <div className="calendar-container-down-plan-three-block-button">
              <div className="calendar-container-down-plan-three-block-button-center">
                <p className="calendar-container-down-plan-two-block-text">
                  16:00 - 18:00
                </p>
                <span className="calendar-container-down-plan-three-block-text">
                  16:30 - 5:17
                </span>
              </div>
            </div>
            <div className="calendar-container-down-plan-three-down-block-button">
              <QuestionSvg />
            </div>
          </div>
        </>
      )}
      {value === 5 && (
        <>
          <div className="calendar-container-down-plan-three-block">
            <div className="calendar-container-down-plan-three-block-button">
              <div className="calendar-container-down-plan-three-block-button-center">
                <p className="calendar-container-down-plan-two-block-text">
                  16:00 - 18:00
                </p>
                <span className="calendar-container-down-plan-three-block-text">
                  16:30 - 5:17
                </span>
              </div>
            </div>
            <div className="calendar-container-down-plan-three-down-block-button">
              <QuestionSvg />
            </div>
          </div>
        </>
      )}
      {value === 6 && (
        <>
          <div className="calendar-container-down-plan-three-block">
            <div className="calendar-container-down-plan-three-block-button">
              <div className="calendar-container-down-plan-three-block-button-center">
                <p className="calendar-container-down-plan-two-block-text">
                  16:00 - 18:00
                </p>
                <span className="calendar-container-down-plan-three-block-text">
                  16:30 - 5:17
                </span>
              </div>
            </div>
            <div className="calendar-container-down-plan-three-down-block-button">
              <QuestionSvg />
            </div>
          </div>
        </>
      )}
      {value === 7 && (
        <>
          <div className="calendar-container-down-plan-three-block">
            <div className="calendar-container-down-plan-three-block-button">
              <div className="calendar-container-down-plan-three-block-button-center">
                <p className="calendar-container-down-plan-two-block-text">
                  16:00 - 18:00
                </p>
                <span className="calendar-container-down-plan-three-block-text">
                  16:30 - 5:17
                </span>
              </div>
            </div>
            <div className="calendar-container-down-plan-three-down-block-button">
              <QuestionSvg />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
