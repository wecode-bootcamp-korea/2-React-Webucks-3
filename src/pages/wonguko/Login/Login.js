import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    this.setState({
      pwdView: !this.state.pwdView,
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
                <Link to="/list-wongu">
                  <button
                    className="loginBtn"
                    type="button"
                    ref={this.btnRef}
                    disabled={this.checkValidation ? false : true}
                  >
                    로그인
                  </button>
                </Link>
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
