import React, { Component } from "react";
import { CheckValidation as CheckVal } from "../../../shared/Validation";
import "./Login.scss";

export default class Login extends Component {
  loginBtnActivationRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      emailValidation: false,
      pwValidation: false,
    };
  }

  handleIdInput = (e) => {
    const inputId = e.target.value;

    if (CheckVal.RequireRule(inputId) && CheckVal.EmailCheck(inputId)) {
      this.setState({
        email: inputId,
        emailValidation: true,
      });
    }
  };

  handlePwInput = (e) => {
    const inputPwd = e.target.value;

    if (CheckVal.RequireRule(inputPwd) && CheckVal.CheckPassword(inputPwd)) {
      this.setState({
        password: inputPwd,
        pwValidation: true,
      });
    }
  };

  activeLogin = () => {
    const loginBtn = this.loginBtnActivationRef;
    const checkEmail = this.state.emailValidation;
    const checkPassword = this.state.pwValidation;

    if (checkEmail && checkPassword) {
      loginBtn.current.disabled = false;
      loginBtn.current.style.opacity = 1;
    }
  };

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
                  onChange={this.handleIdInput}
                  onBlur={this.activeLogin}
                />
                <div className="pwFiled">
                  <input
                    id="inputPw"
                    type="password"
                    maxLength="16"
                    placeholder="비밀번호"
                    onChange={this.handlePwInput}
                    onBlur={this.activeLogin}
                  />
                  <i className="fas fa-eye" id="viewPasswordBtn"></i>
                </div>
                <button
                  // onClick="location.href = `list.html`"
                  id="loginBtn"
                  type="button"
                  ref={this.loginBtnActivationRef}
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
