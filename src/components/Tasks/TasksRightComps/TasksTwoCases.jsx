import React from "react";

export default function TasksTwoCases() {
  return (
    <div className="tasks-twoCases-container">
      <div className="tasks-twoCases-container-up-block">
        <span className="tasks-twoCases-container-up-text">Две цели дела</span>
      </div>
      <div className="tasks-twoCases-container-down-block">
        <div className="tasks-twoCases-container-down-block-child">
          <div className="tasks-twoCases-container-down-block-child-text-block">
            <span className="tasks-twoCases-container-down-block-child-text">
              1. Развивающее дело
            </span>
          </div>
          <div className="tasks-twoCases-container-down-block-child-input-block">
            <input
              className="tasks-twoCases-container-down-block-child-input"
              placeholder="Краткое название Дела (одно или два слова)"
            />
          </div>
        </div>
        <div className="tasks-twoCases-container-down-block-child">
          <div className="tasks-twoCases-container-down-block-child-text-block">
            <span className="tasks-twoCases-container-down-block-child-text">
              2. Минимальная продолжительность дела или иной количественный
              минимум (для разового выполнения)
            </span>
          </div>
          <div className="tasks-twoCases-container-down-block-child-input-block">
            <input
              className="tasks-twoCases-container-down-block-child-input"
              placeholder="Напишите ваш ответ"
            />
          </div>
        </div>
        <div className="tasks-twoCases-container-down-block-child">
          <div className="tasks-twoCases-container-down-block-child-text-block">
            <span className="tasks-twoCases-container-down-block-child-text">
              3. Обязательный минимум выполнения по плану - 5 дней в неделю
              (Дело можно выполнять даже 7 дней в неделю, но в курсе Дело
              заранее планируется только на 5 дней)
            </span>
          </div>
        </div>
        <div className="tasks-twoCases-container-down-block-child">
          <div className="tasks-twoCases-container-down-block-child-text-block">
            <span className="tasks-twoCases-container-down-block-child-text">
              4. Две Цели выполнения Дела («Внешняя» и «Внутренняя») <br />
              <br />
              Цель 1 «Внешняя» Какие внешние изменения в теле, действиях,
              результатах действий хочу иметь после завершения курса (новые
              умения, знания, прибавка силы, корректировка веса и т.п.)»
            </span>
          </div>
          <div className="tasks-twoCases-container-down-block-child-input-block">
            <textarea
              placeholder="Напишите ваш ответ"
              className="tasks-twoCases-container-down-block-child-textarea"
            ></textarea>
          </div>
        </div>
        <div className="tasks-twoCases-container-down-block-child">
          <div className="tasks-twoCases-container-down-block-child-text-block">
            <span className="tasks-twoCases-container-down-block-child-text">
              Количественное выражение Цели 1
            </span>
          </div>
          <div className="tasks-twoCases-container-down-block-child-input-block">
            <textarea
              placeholder="Например: похудеть на 3 кг, отжиматься не менее 8 раз, прочитать конкретную книжку (книжки), освоить язык программирования"
              className="tasks-twoCases-container-down-block-child-textarea"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
