import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { userId: '', userPw: '' };
  }

  handleLoginFormInput = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { handleLoginFormInput } = this;
    const { userId, userPw } = this.state;
    const isLoginBtnValid = userId.includes('@') && userPw.length >= 5;

    return (
      <div className="Login">
        <section className="login-section">
          <div className="login-logo-wrap">WeBucks</div>
          <div className="loginForm-wrap">
            <form action="/list-junbeom" className="loginForm">
              <div className="input-wrap">
                <input
                  id="userId"
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
                  id="userPw"
                  type="password"
                  name="userPw"
                  onChange={handleLoginFormInput}
                  required
                />
                <label htmlFor="userPw">비밀번호</label>
                <button type="button" id="pw-btn" className="pw-btn">
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
