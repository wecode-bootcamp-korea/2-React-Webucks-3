import React, { Component } from 'react';
import ReviewLikeBtn from './ReviewLikeBtn';
import ReviewDeleteBtn from './ReviewDeleteBtn';
import './ReviewList.scss';

class Review extends Component {
  constructor() {
    super();
    this.nextId = React.createRef();
    this.nextId.current = 4;
    this.state = {
      reviewer: '',
      comment: '',
      commentList: [
        {
          id: 1,
          reviewer: 'coffee_lover',
          comment: '너무 맛있어요',
          isLikeReview: false,
        },
        {
          id: 2,
          reviewer: 'CHOCOJ',
          comment: '오늘도 화이트 초콜릿 모카를 마시러 갑니다.',
          isLikeReview: false,
        },
        {
          id: 3,
          reviewer: 'legend_dev',
          comment:
            '진짜 화이트 초콜릿 모카는 전설이다. 진짜 화이트 초콜릿 모카는 전설이다.',
          isLikeReview: false,
        },
      ],
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitComment = e => {
    const { reviewer, comment, commentList } = this.state;
    let newCommentList = [...commentList];
    if (reviewer === '' || comment === '') {
      alert('리뷰가 제대로 입력되지 않았습니다. 알맞게 입력해주세요.');
    } else {
      newCommentList = newCommentList.concat({
        id: this.nextId.current,
        reviewer: this.state.reviewer,
        comment: this.state.comment,
        isLikeReview: false,
      });
      this.setState({
        commentList: newCommentList,
        reviewer: '',
        comment: '',
        isLikeReview: false,
      });
      this.nextId.current += 1;
      e.preventDefault();
    }
  };

  handleReviewLikeBtn = event => {
    const selectId = Number(event.target.id);

    const newCommentList = this.state.commentList.map(el => {
      if (el.id === selectId) {
        el.isLikeReview = !el.isLikeReview;
        return el;
      } else {
        return el;
      }
    });
    this.setState({
      commentList: newCommentList,
    });
  };

  handleDeleteCommentBtn = id => {
    const { commentList } = this.state;
    this.setState({
      commentList: commentList.filter(comment => comment.id !== id),
    });
  };

  render() {
    return (
      <div className="reviewContainer">
        {this.state.commentList.map(props => {
          return (
            <div className="reviewBox" key={props.id}>
              <div className="reviewDetailWrap">
                <p className="reviewer">{props.reviewer}</p>
                <p className="reviewDetail">{props.comment}</p>
                <span className="iconWrap">
                  <ReviewLikeBtn
                    id={props.id}
                    isLikeReview={props.isLikeReview}
                    handleReviewLikeBtn={this.handleReviewLikeBtn}
                  />
                  <ReviewDeleteBtn
                    id={props.id}
                    handleDeleteCommentBtn={this.handleDeleteCommentBtn}
                  />
                </span>
              </div>
            </div>
          );
        })}
        <div className="commentWrap">
          <input
            type="text"
            name="reviewer"
            value={this.state.reviewer}
            placeholder="ID를 입력해주세요."
            className="inputReviewId"
            onChange={this.handleInput}
          />
          <input
            type="text"
            name="comment"
            value={this.state.comment}
            placeholder="리뷰를 입력해주세요."
            className="inputReviewText"
            onChange={this.handleInput}
          />
          <button className="ReviewSubmit" onClick={this.handleSubmitComment}>
            입력
          </button>
        </div>
      </div>
    );
  }
}

export default Review;
