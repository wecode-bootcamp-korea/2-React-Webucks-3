import React, { Component } from 'react';
import './ReviewList.scss';
import ReviewLikeBtn from './ReviewLikeBtn';
import ReviewDeleteBtn from './ReviewDeleteBtn';

class Review extends Component {
  constructor() {
    super();
    this.state = {
      reviewer: '',
      comment: '',
      commentList: [
        { id: 1, reviewer: 'coffee_lover', comment: '너무 맛있어요' },
        {
          id: 2,
          reviewer: 'CHOCOJ',
          comment: '오늘도 화이트 초콜릿 모카를 마시러 갑니다.',
        },
        {
          id: 3,
          reviewer: 'legend_dev',
          comment:
            '진짜 화이트 초콜릿 모카는 전설이다. 진짜 화이트 초콜릿 모카는 전설이다.',
        },
      ],
    };
  }

  nextId = React.createRef();

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitComment = e => {
    const { reviewer, comment } = this.state;
    let newCommentList = this.state.commentList;

    if (reviewer === '' || comment === '') {
      alert('리뷰가 제대로 입력되지 않았습니다. 알맞게 입력해주세요.');
    } else {
      newCommentList = newCommentList.concat({
        id: this.nextId.current + 4,
        reviewer: this.state.reviewer,
        comment: this.state.comment,
      });
      this.setState({
        commentList: newCommentList,
        reviewer: '',
        comment: '',
      });
      this.nextId.current += 1;
      e.preventDefault();
    }
  };

  handleDeleteCommentBtn = id => {
    const { commentList } = this.state;
    const resetCommentList = commentList.filter(comment => comment.id !== id);
    this.setState({
      commentList: resetCommentList,
    });
  };

  render() {
    return (
      <>
        {this.state.commentList.map(props => {
          return (
            <div className="reviewBox" key={props.id}>
              <div className="reviewDetailWrap">
                <p className="reviewer">{props.reviewer}</p>
                <p className="reviewDetail">{props.comment}</p>
                <span className="iconWrap">
                  <ReviewLikeBtn />
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
      </>
    );
  }
}

export default Review;
