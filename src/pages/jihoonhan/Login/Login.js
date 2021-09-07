import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputId: '',
      inputPw: '',
      isActive: false,
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
          className="loginInput"
          id="id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          value={this.inputId}
          name="inputId"
          autoComplete="off"
          onChange={this.handleInput}
        />

        <input
          className="loginInput"
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
          disabled={this.state.isActive ? false : true}
          onClick={this.goToList}
        >
          로 그 인
        </button>

        <span className="forgotPassword">비밀번호를 잊으셨나요?</span>
      </div>
    );
  }
}

export default Login;
