import React from "react";
import "./styles.css";
import { ReactComponent as ArrowLeftDisSvg } from "../../../assets/svgs/modaltaskssvgs/arrow-left-dis.svg";
import { ReactComponent as ArrowRightActSvg } from "../../../assets/svgs/modaltaskssvgs/arrow-right-act.svg";
export const TasksModal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "tasks-modal active" : "tasks-modal"}
      onClick={() => setActive(false)}
    >
      <div className="tasks-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="tasks-modal-content-text-up-block">
          <span className="tasks-modal-content-text-up">
            Как пользоваться развивающим курсом?
          </span>
        </div>
        <div className="tasks-modal-content-text-down-block">
          <p className="tasks-modal-content-text-down">
            Сразу подчеркиваем, что данный курс – специально спроектированный
            целостный процесс развития личностных качеств человека.
          </p>
          <p className="tasks-modal-content-text-down">
            Все задания и правила, которые приводятся в курсе, необходимы. Они
            являются элементами процесса, кристаллизующего ваши новые качества.
            Пропускать что-то, делать иначе - так, как кажется более удобным,
            значит, мешать своему процессу развития. Осознайте как можно четче:
            «Развивать, менять себя крайне сложно». Если бы это было не так, мы
            бы давно жили, как в сказке. Сразу настраивайтесь на то, что
            преобразовать себя будет непросто.
          </p>
          <p className="tasks-modal-content-text-down">
            Пусть вас поддерживает факт, что это возможно. И что перед вами
            реальный шанс продвинуть себя и свою жизнь!
          </p>
        </div>
        <div className="tasks-modal-content-arrows-block">
          <ArrowLeftDisSvg />
          <ArrowRightActSvg />
        </div>
      </div>
    </div>
  );
};
