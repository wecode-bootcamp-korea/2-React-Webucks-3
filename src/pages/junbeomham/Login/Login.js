import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleUserIdChange = this.handleUserIdChange.bind(this);
    this.handleUserPwChange = this.handleUserPwChange.bind(this);
    this.state = { userId: '', userPw: '', isLoginBtnValid: false };
  }

  handleUserIdChange = event => {
    this.setState({
      userId: event.target.value,
      userPw: this.state.userPw,
      isLoginBtnValid:
        event.target.value.includes('@') && this.state.userPw.length >= 5,
    });
  };

  handleUserPwChange = event => {
    this.setState({
      userId: this.state.userId,
      userPw: event.target.value,
      isLoginBtnValid:
        this.state.userId.includes('@') && event.target.value.length >= 5,
    });
  };

  render() {
    console.log(this.state);
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
                  onChange={this.handleUserIdChange}
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
                  onChange={this.handleUserPwChange}
                  required
                />
                <label htmlFor="userPw">비밀번호</label>
                <button type="button" id="pw-btn" className="pw-btn">
                  show
                </button>
              </div>
              <div className="button-wrap">
                {/* button에 disabled 추가 */}
                <button
                  type="submit"
                  id="loginBtn"
                  className={this.state.isLoginBtnValid ? 'able' : ''}
                  disabled={!this.state.isLoginBtnValid}
                >
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
