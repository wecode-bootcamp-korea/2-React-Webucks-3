import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputId: '',
      inputPw: '',
      isActive: false,
      opacity: 0.5,
    };
  }

  handleInput = event => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => this.handleBtnActive()
    );
  };

  handleBtnActive = () => {
    this.state.inputId.includes('@') && this.state.inputPw.length >= 5
      ? this.setState({ isActive: true })
      : this.setState({ isActive: false });
  };

  goToList = () => {
    if (this.state.isActive) {
      this.props.history.push('/list-jihoon');
    }
  };

  render() {
    return (
      <div className="loginBox">
        <span className="logo">WeBucks</span>

        <input
          id="id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          value={this.inputId}
          name="inputId"
          autoComplete="off"
          onChange={this.handleInput}
        />

        <input
          id="pw"
          type="password"
          placeholder="비밀번호"
          value={this.inputPw}
          name="inputPw"
          onChange={this.handleInput}
        />

        <button
          type="button"
          className={this.state.isActive ? 'loginBtn btnActivated' : 'loginBtn'}
          disabled={this.state.isActive ? null : 'disabled'}
          onClick={this.goToList}
        >
          로그인
        </button>

        <span id="forgotPassword">비밀번호를 잊으셨나요?</span>
      </div>
    );
  }
}

export default Login;
