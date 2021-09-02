import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
      type: 'password',
      clicked: false,
      activateLoginBtn: false,
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value }, () => {
      this.changeLoginBtn();
    });
  };

  changeLoginBtn = e => {
    const { idValue, pwValue } = this.state;
    let isLoginValid = idValue.includes('@') && pwValue.length >= 5;
    this.setState({
      activateLoginBtn: isLoginValid,
    });
  };

  render() {
    return (
      <div className="LoginPage">
        <section className="loginContainer">
          <h1 className="loginPageLogo">WeBucks</h1>
          <form className="loginForm">
            <input
              className="loginBox"
              id="user"
              name="idValue"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              required
              value={this.idValue}
              onChange={this.handleInput}
            />
            <div className="pwdBox">
              <input
                className="loginBox"
                id="pwd"
                name="pwValue"
                type={this.state.clicked ? 'text' : 'password'}
                placeholder="비밀번호"
                required
                value={this.pwValue}
                onChange={this.handleInput}
              />
              <i
                className="eyeIcon"
                onKeyDown={() => {
                  this.setState({
                    clicked: !this.state.clicked,
                  });
                }}
              >
                <FontAwesomeIcon
                  icon={this.state.clicked ? faEyeSlash : faEye}
                />
              </i>
            </div>
            <Link to="/list-dabin" className="linkToList">
              <button
                type="button"
                className="loginBox loginBtn"
                id={
                  this.state.activateLoginBtn
                    ? 'changedLoginBtnColor'
                    : 'unchangedLoginBtnColor'
                }
                disabled={this.state.activateLoginBtn ? false : true}
              >
                로그인
              </button>
            </Link>
            <a className="forgetPwd" href="http://localhost:3000/">
              비밀번호를 잊으셨나요?
            </a>
          </form>
        </section>
      </div>
    );
  }
}

export default Login;
