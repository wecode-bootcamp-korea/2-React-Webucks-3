import React, { Component } from 'react';
import LikeButton from '../../../components/LikeButton/LikeButton';
import './Review.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

class Review extends Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      commentList: [],
      id: 0,
    };
  }

  getValue = e => {
    this.setState({
      comment: e.target.value,
    });
  };

  addReview = e => {
    if (this.state.comment.length > 0) {
      this.setState({
        commentList: this.state.commentList.concat(this.state.comment),
        comment: e.target.value,
        id: (this.state.id += 1),
      });
    } else {
      alert('한 글자 이상 입력해주세요 ⊙﹏⊙');
    }
    console.log(this.state.commentList);
  };

  addReviewByEnter = e => {
    if (e.key === 'Enter') {
      this.addReview();
    }
  };

  removeReview = id => {
    console.log(this.state);
    const newCommentList = this.state.commentList.filter(
      comment => comment.num !== id
    );
    this.setState({
      commentList: newCommentList,
    });
  };

  render() {
    return (
      <>
        <div className="review">
          <h3>리뷰</h3>
          <div className="comments">
            <ul className="commentsBox">
              {this.state.commentList.map((comment, id) => {
                return (
                  <li key={id}>
                    <p>{comment}</p>
                    <LikeButton className="commentLikeButton" />
                    <i onClick={this.removeReview}>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </i>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="pushBox">
            <input
              className="reviewText"
              type="text"
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
