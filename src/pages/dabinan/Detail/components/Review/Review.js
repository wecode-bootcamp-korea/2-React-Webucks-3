import React, { Component } from 'react';
import './Review.scss';
import LikeButton from '../../../components/LikeButton/LikeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

class Review extends Component {
  constructor() {
    super();
    this.maxId = 3;
    this.state = {
      userValue: '',
      textValue: '',
      comments: [
        { id: 1, userName: 'jeju', comment: '비자림이 그저 forest?' },
        { id: 2, userName: 'dabin', comment: '흑임자 쑥 프라푸치노 드세요' },
        { id: 3, userName: 'darling', comment: '멍멍멍멍 왈왈왈왈' },
      ],
    };
  }

  getValue = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  addReview = e => {
    const { userValue, textValue } = this.state;
    let newComments = this.state.comments;
    this.maxId = this.maxId + 1;
    if (userValue !== '' && textValue !== '') {
      newComments = newComments.concat({
        id: this.maxId,
        userName: this.state.userValue,
        comment: this.state.textValue,
      });
      this.setState({
        comments: newComments,
        userValue: '',
        textValue: '',
      });
    } else {
      alert('이름과 댓글 모두 입력해주세요 ♡◟(●•ᴗ•●)◞♡');
    }
  };

  addReviewByEnter = e => {
    if (e.key === 'Enter') {
      this.addReview();
      e.target.value = '';
    }
  };

  removeReview = id => {
    if (window.confirm('진짜진짜 삭제하고 싶어요? (ʘ言ʘ╬)')) {
      const { comments } = this.state;
      const nextComments = comments.filter(comment => comment.id !== id);
      this.setState({
        comments: nextComments,
      });
    }
  };

  render() {
    return (
      <>
        <div className="Review">
          <h3 className="reviewTitle">리뷰</h3>
          <div className="comments">
            <ul className="commentsBox">
              {this.state.comments.map((review, id) => {
                return (
                  <li className="addedReview" key={id}>
                    <p className="addedName">{review.userName}</p>
                    <p className="addedComment">{review.comment}</p>
                    <LikeButton className="commentLikeButton" />
                    <i onClick={() => this.removeReview(review.id)}>
                      <FontAwesomeIcon icon={faTrashAlt} key={review.id} />
                    </i>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="pushBox">
            <input
              className="userNameInput"
              name="userValue"
              type="text"
              value={this.state.userValue}
              placeholder="name"
              required
              onChange={this.getValue}
              onKeyPress={this.addReviewByEnter}
            />
            <input
              className="reviewText"
              name="textValue"
              type="text"
              value={this.state.textValue}
              placeholder="리뷰를 입력해주세요"
              required
              onChange={this.getValue}
              onKeyPress={this.addReviewByEnter}
            />
            <button className="push" onClick={this.addReview}>
              POST
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Review;
