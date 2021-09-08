import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
    };
  }

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { idValue, pwValue } = this.state;
    let isLoginBtnActive = idValue.indexOf('@') > -1 && pwValue.length > 4;

    return (
      <div className="Login">
        <div className="loginContainer">
          <section className="logo">
            <span>WeBucks</span>
          </section>

          <form id="userInfo">
            <input
              name="idValue"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleInput}
            />
            <input
              name="pwValue"
              type="password"
              placeholder="비밀번호"
              onChange={this.handleInput}
            />
            <button
              className={isLoginBtnActive ? 'active' : 'deactive'}
              form="userInfo"
              onClick={() => this.props.history.push('/list-seungwan')}
              disabled={!isLoginBtnActive}
            >
              로그인
            </button>
          </form>

          <Link id="findPw" to="./">
            비밀번호를 잊으셨나요?
          </Link>
        </div>
      </div>
    );
  }
}
