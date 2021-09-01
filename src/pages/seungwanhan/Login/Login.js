import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  goToList = () => {
    console.log(this.props);
    this.props.history.push('/list');
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
              id="iptId"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input id="iptPw" type="password" placeholder="비밀번호" />
          </form>
          <button
            id="btnLogin"
            type="submit"
            form="userInfo"
            onClick={this.goToList}
          >
            로그인
          </button>
          <a id="findPw" href="">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
