import React from "react";
import "./styles.css";
import { ReactComponent as LeftArrowSvg } from "../../../assets/svgs/leftArrow.svg";
import { ReactComponent as RightArrowSvg } from "../../../assets/svgs/rightArrow.svg";
import avatar from "../../../assets/images/avatar.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export const HomeMainCenter = () => {
  const textArr = ["Как пользоваться", "Опыт других", "Схема работы"];

  return (
    <div className="homeMain-container-center">
      <div className="content">
        <div className="homeMain-container-center-up-block">
          {textArr.map((text, index) => {
            if (index === 0) {
              return (
                <div
                  className="homeMain-container-center-up-block-menuContFirst"
                  key={index}
                >
                  <div className="homeMain-container-center-up-block-menuCont-text-up-block">
                    <span className="homeMain-container-center-up-block-menuCont-text-up">
                      {text}
                    </span>
                  </div>
                  <div className="homeMain-container-center-up-block-menuCont-text-middle-block">
                    <span className="homeMain-container-center-up-block-menuCont-text-middle">
                      Разнообразный и богатый опыт начало повседневной работы
                    </span>
                  </div>
                  <div className="homeMain-container-center-up-block-menuCont-text-down-block">
                    <span className="homeMain-container-center-up-block-menuCont-text-down">
                      Подробнее
                    </span>
                  </div>
                </div>
              );
            }
            return (
              <div
                className="homeMain-container-center-up-block-menuCont"
                key={index}
              >
                <div className="homeMain-container-center-up-block-menuCont-text-up-block">
                  <span className="homeMain-container-center-up-block-menuCont-text-up">
                    {text}
                  </span>
                </div>
                <div className="homeMain-container-center-up-block-menuCont-text-middle-block">
                  <span className="homeMain-container-center-up-block-menuCont-text-middle">
                    Разнообразный и богатый опыт начало повседневной работы
                  </span>
                </div>
                <div className="homeMain-container-center-up-block-menuCont-text-down-block">
                  <span className="homeMain-container-center-up-block-menuCont-text-down">
                    Подробнее
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="homeMain-container-center-down-block">
          <div className="swiper-button image-swiper-button-next">
            <RightArrowSvg />
          </div>
          <div className="swiper-button image-swiper-button-prev">
            <LeftArrowSvg />
          </div>
          <Swiper
            navigation={{
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="homeMain-container-center-down-block-middle">
                <div className="homeMain-container-center-down-block-middle-left-block">
                  <div className="homeMain-container-center-down-block-middle-left-img">
                    <img src={avatar} alt="avatar" />
                  </div>
                  <div className="homeMain-container-center-down-block-middle-left-text-block-up">
                    <span className="homeMain-container-center-down-block-middle-left-text-block-up-text">
                      Киктенко Максим
                    </span>
                  </div>
                  <div className="homeMain-container-center-down-block-middle-left-text-block-down">
                    <span className="homeMain-container-center-down-block-middle-left-text-block-down-text">
                      Автор курса
                    </span>
                  </div>
                </div>
                <div className="border"></div>
                <div className="homeMain-container-center-down-block-middle-right-block">
                  <span className="homeMain-container-center-down-block-middle-right-block-text">
                    Что делаем, то и развиваем. Уступаем привычным желаниям
                    отложить, «позволить себе слабость» - тренируем мешающие
                    привычки. Стараемся делать нужное дело - тренируем силу «Я».
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="homeMain-container-center-down-block-middle">
                <div className="homeMain-container-center-down-block-middle-left-block">
                  <div className="homeMain-container-center-down-block-middle-left-img">
                    <img src={avatar} alt="avatar" />
                  </div>
                  <div className="homeMain-container-center-down-block-middle-left-text-block-up">
                    <span className="homeMain-container-center-down-block-middle-left-text-block-up-text">
                      Киктенко Максим
                    </span>
                  </div>
                  <div className="homeMain-container-center-down-block-middle-left-text-block-down">
                    <span className="homeMain-container-center-down-block-middle-left-text-block-down-text">
                      Автор курса
                    </span>
                  </div>
                </div>
                <div className="border"></div>
                <div className="homeMain-container-center-down-block-middle-right-block">
                  <span className="homeMain-container-center-down-block-middle-right-block-text">
                    Что делаем, то и развиваем. Уступаем привычным желаниям
                    отложить, «позволить себе слабость» - тренируем мешающие
                    привычки. Стараемся делать нужное дело - тренируем силу «Я».
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* <div className="homeMain-container-center-down-svg-block-right">
          <RightArrowSvg />
        </div> */}
        </div>
      </div>
    </div>
  );
};
