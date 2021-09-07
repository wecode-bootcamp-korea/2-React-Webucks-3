import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
// import './ReviewLikeBtn.scss';

class ReviewDeleteBtn extends Component {
  render() {
    return (
      <>
        <FontAwesomeIcon
          className="deleteBtn"
          icon={faTrashAlt}
          onClick={() => this.props.handleDeleteCommentBtn(this.props.id)}
        />
      </>
    );
  }
}

export default ReviewDeleteBtn;
