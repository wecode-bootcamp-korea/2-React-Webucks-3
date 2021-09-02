import React, { Component } from 'react';
import './Login.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pwd: '',
    };
  }

  handleIdInput = e => {
    this.setState({
      email: e.target.value,
      pwd: e.target.value,
    });
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
                />
                <div className="pwFiled">
                  <input
                    id="inputPw"
                    type="password"
                    maxLength="16"
                    placeholder="비밀번호"
                    onChange={this.handleIdInput}
                  />
                  <FontAwesomeIcon id="viewPasswordBtn" icon={faEye} />
                </div>
                <button id="loginBtn" type="button" disabled>
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
