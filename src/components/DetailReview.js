import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import './DetailReview.scss';

class DetailReview extends Component {
  constructor() {
    super();
    this.state = {
      heartClicked: false,
      userInputtedId: '',
      userInputtedComment: '',
      comments: [
        {
          commentId: 1,
          userId: '나: ',
          userComment: '나서스',
          heartClicked: false,
        },
        {
          commentId: 2,
          userId: '이: ',
          userComment: '이렐리아',
          heartClicked: false,
        },
        {
          commentId: 3,
          userId: '트: ',
          userComment: '트리스타나',
          heartClicked: false,
        },
      ],
    };
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
    const { userInputtedId, comments, userInputtedComment } = this.state;
    let commented = comments;
    if (userInputtedComment !== '') {
      commented = commented.concat({
        commentId: comments.length
          ? comments[comments.length - 1].commentId + 1
          : 1,
        userId: userInputtedId === '' ? '(익명)' : userInputtedId,
        userComment: userInputtedComment,
      });
      this.setState({
        comments: commented,
        userInpttedId: '',
        userInputtedComment: '',
      });
    }
  };

  handleCommentLike = review => {
    let comments = [...this.state.comments];
    let index = comments.indexOf(review);
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
    const comments = this.state.comments.filter(review => review !== comment);
    this.setState({ comments });
  };

  render() {
    return (
      <div className="review">
        <p className="reviewHeader">리뷰</p>
        <div className="comments">
          <ul className="reviewUl">
            {this.state.comments.map(review => {
              return (
                <li className="commentRow" key={review.commentId}>
                  <p className="userName">{review.userId}</p>
                  <p className="userComment">{review.userComment}</p>
                  <FontAwesomeIcon
                    className={this.commentHeartClass(review)}
                    icon={review.heartClicked ? fasHeart : farHeart}
                    onClick={() => this.handleCommentLike(review)}
                  />
                  <FontAwesomeIcon
                    className="commentDeleteBtn"
                    icon={faBackspace}
                    onClick={() => this.handleCommentDelete(review)}
                  />
                </li>
              );
            })}
          </ul>
          <input
            value={this.state.userInputtedId}
            name="userInputtedId"
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
export default DetailReview;
