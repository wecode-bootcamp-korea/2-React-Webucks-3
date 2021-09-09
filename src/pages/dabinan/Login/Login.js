import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwdValue: '',
      showPwd: false,
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { idValue, pwdValue, showPwd } = this.state;
    let activateLoginBtn = idValue.includes('@') && pwdValue.length >= 5;
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
              value={idValue}
              onChange={this.handleInput}
            />
            <div className="pwdBox">
              <input
                className="loginBox"
                id="pwd"
                name="pwdValue"
                type={showPwd ? 'text' : 'password'}
                placeholder="비밀번호"
                required
                value={pwdValue}
                onChange={this.handleInput}
                autoComplete="off"
              />
              <i
                className="eyeIcon"
                onClick={() => {
                  this.setState({
                    showPwd: !showPwd,
                  });
                }}
              >
                <FontAwesomeIcon icon={showPwd ? faEyeSlash : faEye} />
              </i>
            </div>
            <Link to="/list-dabin" className="linkToList">
              <button
                className="loginBox loginBtn"
                id={
                  activateLoginBtn
                    ? 'changedLoginBtnColor'
                    : 'unchangedLoginBtnColor'
                }
                disabled={activateLoginBtn ? false : true}
              >
                로그인
              </button>
            </Link>
            <Link to="/" className="forgetPwd">
              비밀번호를 잊으셨나요?
            </Link>
          </form>
        </section>
      </div>
    );
  }
}

export default Login;
