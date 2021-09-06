import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <div className="commentWrap">
        <input
          type="text"
          placeholder="ID를 입력해주세요."
          className="inputReviewId"
        />
        <input
          type="text"
          placeholder="리뷰를 입력해주세요."
          className="inputReviewText"
        />
        <button className="ReviewSubmit">입력</button>
      </div>
    );
  }
}

export default Comment;
