import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import {
  checkEmail,
  checkPassword,
} from '../../../components/Login/Validation';
import './Login.scss';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pwd: '',
      pwdView: false,
    };
  }

  btnRef = React.createRef();
  checkValidation = false;

  handleInput = e => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      this.handleValidation()
    );
  };

  handleValidation = () => {
    const { email, pwd } = this.state;

    if (checkEmail(email) && checkPassword(pwd)) {
      this.checkValidation = true;
      this.btnRef.current.className = 'loginBtn active';
      this.btnRef.current.disabled = false;
    } else {
      this.checkValidation = false;
      this.btnRef.current.className = 'loginBtn';
      this.btnRef.current.disabled = true;
    }
  };

  viewPwdBtn = () => {
    console.log(this.state.email);
    console.log(this.state.pwd);
    this.setState({
      pwdView: !this.state.pwdView,
    });
  };

  onClickSignupBtn = () => {
    fetch('/users/signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.pwd,
      }),
    })
      .then(response => response.json())
      .then(result => console.log(result));
  };

  onClickLoginBtn = () => {
    fetch('users/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.pwd,
      }),
    })
      .then(response => response.json())
      .then(result => console.log(result));
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
                  name="email"
                  value={this.email}
                  type="input"
                  maxLength="30"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  onChange={this.handleInput}
                  onBlur={this.handleValidation}
                />
                <div className="pwFiled">
                  <input
                    id="inputPw"
                    name="pwd"
                    value={this.pwd}
                    type={this.state.pwdView ? 'input' : 'passWord'}
                    maxLength="16"
                    placeholder="비밀번호"
                    onChange={this.handleInput}
                    onBlur={this.handleValidation}
                  />
                  <FontAwesomeIcon
                    className={
                      this.state.pwdView
                        ? 'closePasswordBtn'
                        : 'viewPasswordBtn'
                    }
                    icon={faEye}
                    onClick={this.viewPwdBtn}
                  />
                </div>
                <button
                  className="loginBtn"
                  type="button"
                  ref={this.btnRef}
                  // disabled={this.checkValidation ? false : true}
                  onClick={this.onClickSignupBtn}
                >
                  회원가입
                </button>
                <button
                  className="loginBtn"
                  type="button"
                  ref={this.btnRef}
                  // disabled={this.checkValidation ? false : true}
                  onClick={this.onClickLoginBtn}
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
