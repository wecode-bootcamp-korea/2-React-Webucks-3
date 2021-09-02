import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
      isIdPwValid: false,
    };
  }

  handleIdInput = event => {
    this.setState(
      {
        idValue: event.target.value,
      },
      this.checkValidation
    );
  };

  handlePwInput = event => {
    this.setState(
      {
        pwValue: event.target.value,
      },
      this.checkValidation
    );
  };

  checkValidation = () => {
    if (this.state.idValue.indexOf('@') > -1 && this.state.pwValue.length > 4) {
      this.setState({
        isIdPwValid: true,
      });
    } else {
      this.setState({
        isIdPwValid: false,
      });
    }
  };

  goToList = () => {
    this.props.history.push('/list-seungwan');
  };

  render() {
    return (
      <div className="Login">
        <div className="contentsWrapper">
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
            className={this.state.isIdPwValid ? 'valid' : 'invalid'}
            type="submit"
            form="userInfo"
            onClick={this.goToList}
            disabled={!this.state.isIdPwValid}
          >
            로그인
          </button>
          <a id="findPw" href="./">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
