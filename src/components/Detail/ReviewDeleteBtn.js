import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import './ReviewDeleteBtn.scss';

class ReviewDeleteBtn extends Component {
  render() {
    return (
      <div className="deleteBtnWrap">
        <FontAwesomeIcon
          className="deleteBtn"
          icon={faTrashAlt}
          onClick={() => this.props.handleDeleteCommentBtn(this.props.id)}
        />
      </div>
    );
  }
}

export default ReviewDeleteBtn;
