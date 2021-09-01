import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
//import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      idValue: '',
      pwValue: '',
      type: 'password',
    };
  }
  handleIdInput = e => {
    this.setState({
      idValue: e.target.value,
    });
  };

  handlePasswordInput = e => {
    this.setState({
      pwValue: e.target.value,
    });
  };

  render() {
    return (
      <div className="LoginPage">
        <section className="container">
          <h1 className="logo">WeBucks</h1>
          <form className="loginForm">
            <input
              className="box"
              id="user"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              required
              value={this.idValue}
              onChange={this.handleIdInput}
            />
            <div className="pwdBox">
              <input
                className="box"
                id="pwd"
                type={this.state.type}
                placeholder="비밀번호"
                required
                value={this.pwValue}
                onChange={this.handlePasswordInput}
              />
              <div className="icon">
                <FontAwesomeIcon icon={faEye} />
              </div>
            </div>
            <Link to="/list-dabin" className="linkToList">
              <button
                type="button"
                className="box loginBtn"
                id={
                  this.state.idValue.includes('@') !== -1 &&
                  this.state.pwValue.length >= 5
                    ? 'changedBtnColor'
                    : 'unchangedBtnColor'
                }
                disabled={
                  this.state.idValue.includes('@') !== -1 &&
                  this.state.pwValue.length >= 5
                    ? false
                    : true
                }
              >
                로그인
              </button>
            </Link>
            <a className="forgetPwd" href="https://google.com">
              비밀번호를 잊으셨나요?
            </a>
          </form>
        </section>
      </div>
    );
  }
}

export default Login;
