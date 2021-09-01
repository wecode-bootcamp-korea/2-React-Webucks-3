import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <section className="login-section">
          <div className="login-logo-wrap">WeBucks</div>
          <div className="loginForm-wrap">
            <form action="/list-junbeom" className="loginForm">
              <div className="input-wrap">
                <input id="userId" type="text" required />
                <label htmlFor="userId">
                  전화번호, 사용자 이름 또는 이메일
                </label>
              </div>
              <div className="input-wrap">
                <input id="userPw" type="password" required />
                <label htmlFor="userPw">비밀번호</label>
                <button type="button" id="pw-btn" className="pw-btn">
                  show
                </button>
              </div>
              <div className="button-wrap">
                {/* button에 disabled 추가 */}
                <button type="submit" id="loginBtn">
                  로그인
                </button>
              </div>
            </form>
          </div>
          <div className="findPw-wrap">
            <a className="findPw" href="#">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Login);
