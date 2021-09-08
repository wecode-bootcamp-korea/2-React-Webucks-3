import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { userId: '', userPw: '', isBtnPwClicked: false };
  }

  handleLoginFormInput = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleClickBtnPw = () => {
    const { isBtnPwClicked } = this.state;
    this.setState({ isBtnPwClicked: !isBtnPwClicked });
    this.inputPw.focus();
  };

  isUserIdValid = userId => {
    return userId.includes('@');
  };

  isUserPwValid = userPw => {
    return userPw.length >= 5;
  };

  render() {
    const {
      handleLoginFormInput,
      handleClickBtnPw,
      isUserIdValid,
      isUserPwValid,
    } = this;
    const { userId, userPw, isBtnPwClicked } = this.state;
    const isLoginBtnValid = isUserIdValid(userId) && isUserPwValid(userPw);

    return (
      <div className="Login">
        <section className="login-section">
          <div className="login-logo-wrap">WeBucks</div>
          <div className="loginForm-wrap">
            <form action="/list-junbeom" className="loginForm">
              <div className="input-wrap">
                <input
                  type="text"
                  name="userId"
                  onChange={handleLoginFormInput}
                  required
                />
                <label htmlFor="userId">
                  전화번호, 사용자 이름 또는 이메일
                </label>
              </div>
              <div className="input-wrap">
                <input
                  ref={ref => {
                    this.inputPw = ref;
                  }}
                  id="userPw"
                  type={isBtnPwClicked ? 'text' : 'password'}
                  name="userPw"
                  onChange={handleLoginFormInput}
                  required
                />
                <label htmlFor="userPw">비밀번호</label>
                <button
                  type="button"
                  className={isBtnPwClicked ? 'pw-btn hide' : 'pw-btn'}
                  onClick={handleClickBtnPw}
                >
                  show
                </button>
              </div>
              <div className="button-wrap">
                <button
                  type="submit"
                  id="loginBtn"
                  className={isLoginBtnValid ? 'able' : ''}
                  disabled={!isLoginBtnValid}
                >
                  로그인
                </button>
              </div>
            </form>
          </div>
          <div className="findPw-wrap">
            <Link className="findPw" to="#">
              비밀번호를 잊으셨나요?
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Login);
