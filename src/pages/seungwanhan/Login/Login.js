import React, { Component } from 'react';
import './Login.scss';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
    };
  }

  handleIdInput = event => this.setState({ idValue: event.target.value });

  handlePwInput = event => this.setState({ pwValue: event.target.value });

  checkIdPwValidation = () =>
    this.state.idValue.indexOf('@') > -1 && this.state.pwValue.length > 4;

  goToList = () => this.props.history.push('/list-seungwan');

  render() {
    let isLoginBtnActive = this.checkIdPwValidation();

    return (
      <div className="Login">
        <main className="contentsWrapper">
          <section className="logo">
            <span>WeBucks</span>
          </section>

          <form id="userInfo">
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleIdInput}
            />
            <input
              type="password"
              placeholder="비밀번호"
              onChange={this.handlePwInput}
            />
          </form>

          <button
            id="btnLogin"
            className={isLoginBtnActive ? 'active' : 'deactive'}
            type="submit"
            form="userInfo"
            onClick={this.goToList}
            disabled={!isLoginBtnActive}
          >
            로그인
          </button>

          <a id="findPw" href="./">
            비밀번호를 잊으셨나요?
          </a>
        </main>
      </div>
    );
  }
}
