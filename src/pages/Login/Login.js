import React, { Component } from "react";
import "./Login.scss";

export default class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="loginContainer">
          <section className="loginWrap">
            <header className="loginTitle">WeBucks</header>
            <form
              className="loginForm"
              action="#"
              acceptCharset="utf-8"
              name="login_form"
              method="post"
            >
              <fieldset className="inputWrap">
                <input
                  id="inputId"
                  type="text"
                  maxLength="30"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                />
                <div className="pwFiled">
                  <input
                    id="inputPw"
                    type="password"
                    maxLength="16"
                    placeholder="비밀번호"
                  />
                  <i className="fas fa-eye" id="viewPasswordBtn"></i>
                </div>
                <button
                  // onClick="location.href = `list.html`"
                  id="loginBtn"
                  type="button"
                  disabled
                >
                  로그인
                </button>
              </fieldset>
            </form>
            <div className="findPwdWrap">
              <p className="findPwd">비밀번호를 잊으셨나요?</p>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
