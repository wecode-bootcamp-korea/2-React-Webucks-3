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
      type: 'password',
      clicked: false,
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { idValue, pwdValue, clicked } = this.state;
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
              value={this.idValue}
              onChange={this.handleInput}
            />
            <div className="pwdBox">
              <input
                className="loginBox"
                id="pwd"
                name="pwdValue"
                type={clicked ? 'text' : 'password'}
                placeholder="비밀번호"
                required
                value={this.pwdValue}
                onChange={this.handleInput}
              />
              <i
                className="eyeIcon"
                onClick={() => {
                  this.setState({
                    clicked: !clicked,
                  });
                }}
              >
                <FontAwesomeIcon icon={clicked ? faEyeSlash : faEye} />
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
