import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import './DetailReview.scss';

class Review extends Component {
  constructor() {
    super();
    this.state = {
      heartClicked: false,
      userInpttedId: '',
      userInputtedComment: '',
      comments: [
        {
          commentId: 1,
          userId: 'coffee_lover',
          userComment: '너무 맛있어요!',
          heartClicked: false,
        },
        {
          commentId: 2,
          userId: 'CHOCO7',
          userComment: '오늘도 나이트로 바닐라 크림을 마시러 갑니다.',
          heartClicked: false,
        },
        {
          commentId: 3,
          userId: 'legend_dev',
          userComment: '진짜 나이트로 바닐라 크림은 전설이다.',
          heartClicked: false,
        },
      ],
    };
    this.handleInput = this.handleInput.bind(this);
    this.enterKeyPressed = this.enterKeyPressed.bind(this);
    this.addComment = this.addComment.bind(this);
    this.handleCommentLike = this.handleCommentLike.bind(this);
    this.commentHeartClass = this.commentHeartClass.bind(this);
    this.handleCommentDelete = this.handleCommentDelete.bind(this);
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  enterKeyPressed = e => {
    if (e.key === 'Enter') {
      this.addComment();
    }
  };

  addComment = () => {
    let commented = this.state.comments;
    if (this.state.userInputtedComment !== '') {
      commented = commented.concat({
        commentId: this.state.comments.length
          ? this.state.comments[this.state.comments.length - 1].commentId + 1
          : 1,
        userId:
          this.state.userInpttedId === '' ? '(익명)' : this.state.userInpttedId,
        userComment: this.state.userInputtedComment,
      });
      this.setState({
        comments: commented,
        userInpttedId: '',
        userInputtedComment: '',
      });
    }
  };

  handleCommentLike = r => {
    let comments = [...this.state.comments];
    let index = comments.indexOf(r);
    let comment = { ...comments[index] };
    comment.heartClicked = !comment.heartClicked;
    comments[index] = comment;
    this.setState({ comments });
  };

  commentHeartClass = comment => {
    const { comments } = this.state;
    let heartClass = 'reviewHeart';
    heartClass = comments[comments.indexOf(comment)].heartClicked
      ? 'reviewHeart fas'
      : 'reviewHeart';
    return heartClass;
  };

  handleCommentDelete = comment => {
    const comments = this.state.comments.filter(r => r !== comment);
    this.setState({ comments });
  };

  render() {
    return (
      <div className="review">
        <p className="reviewHeader">리뷰</p>
        <div className="comments">
          <ul className="reviewUl">
            {this.state.comments.map(r => {
              return (
                <li className="commentRow" key={r.commentId}>
                  <p className="userName">{r.userId}</p>
                  <p className="userComment">{r.userComment}</p>
                  <FontAwesomeIcon
                    className={this.commentHeartClass(r)}
                    icon={r.heartClicked ? fasHeart : farHeart}
                    onClick={() => this.handleCommentLike(r)}
                  />
                  <FontAwesomeIcon
                    className="commentDeleteBtn"
                    icon={faBackspace}
                    onClick={() => this.handleCommentDelete(r)}
                  />
                </li>
              );
            })}
          </ul>
          <input
            value={this.state.userInpttedId}
            name="userInpttedId"
            className="newId"
            placeholder="닉네임"
            onChange={this.handleInput}
            onKeyPress={this.enterKeyPressed}
            autoComplete="off"
          />
          <input
            value={this.state.userInputtedComment}
            name="userInputtedComment"
            className="newComment"
            placeholder="리뷰를 입력해주세요."
            onChange={this.handleInput}
            onKeyPress={this.enterKeyPressed}
          />
        </div>
      </div>
    );
  }
}
export default Review;
