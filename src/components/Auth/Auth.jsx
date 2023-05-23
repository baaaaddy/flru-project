import React from "react";
import "./styles.css";
import { ReactComponent as LogoSvg } from "../../assets/svgs/leftMain.svg";

export const Auth = () => {
  //   const [passwordСipher, setPasswordСipher] = React.useState(false);
  return (
    <div className="auth-container">
      <div className="auth-menu-block">
        <div className="auth-menu-up-block">
          <LogoSvg />
          <span className="auth-menu-up-block-text">Регистрация</span>
        </div>
        <div className="auth-menu-inputs-block">
          <input className="auth-menu-input" placeholder="Имя" />
          <input
            className="auth-menu-input"
            placeholder="E-mail"
            type="email"
          />
          <input
            className="auth-menu-input"
            placeholder="Пароль"
            // type={passwordСipher ? "password" : "text"}
          />
        </div>
        <div className="auth-menu-policy-block">
          <div className="auth-menu-policy-block-checkbox-block">
            <div className="checkmark-height">
              <label class="container">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div className="auth-menu-policy-block-checkbox-block-child">
              <span className="auth-menu-policy-block-checkbox-block-text">
                Согласен с
              </span>{" "}
              <a
                className="auth-menu-policy-block-checkbox-block-text-two"
                href="/policy"
              >
                Политикой обработки персональных данных и правила пользования
                сайтом
              </a>
            </div>
          </div>
        </div>
        <div className="auth-menu-policy-block-two">
          <div className="auth-menu-policy-block-checkbox-block">
            <div className="checkmark-height">
              <label class="container">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div className="auth-menu-policy-block-checkbox-block-child">
              <a
                className="auth-menu-policy-block-checkbox-block-text-two"
                href="/policy"
              >
                Подтвердите, что вы не робот
              </a>
            </div>
          </div>
        </div>
        <div className="auth-menu-down-block">
          <div className="auth-menu-button-block">
            <span className="auth-menu-button-block-text">
              Зарегистрироваться
            </span>
          </div>
          <div>
            <span className="auth-menu-down-block-text">
              У вас уже есть аккаунт?{" "}
            </span>
            <span className="auth-menu-down-block-text-two">Войти</span>
          </div>
        </div>
      </div>
    </div>
  );
};
