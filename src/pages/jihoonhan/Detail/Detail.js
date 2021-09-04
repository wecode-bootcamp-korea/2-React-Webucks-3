/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import TopNav from '../../../components/Nav/TopNav';
import Footer from '../../../components/DetailFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

import './Detail.scss';

library.add(faHeart, faHeartRegular);

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heartClicked: false,
      whichIcon: faHeartRegular,
      iconClassName: 'far faHeart',
      userInpttedId: '',
      userInputtedComment: '',
      comments: [
        {
          commentId: 1,
          userId: 'coffee_lover',
          userComment: '너무 맛있어요!',
        },
        {
          commentId: 2,
          userId: 'CHOCO7',
          userComment: '오늘도 화이트 초콜릿 모카를 마시러 갑니다.',
        },
        {
          commentId: 3,
          userId: 'legend_dev',
          userComment: '진짜 화이트 초콜릿 모카는 전설이다.',
        },
      ],
    };
  }

  heartOnOff = () => {
    this.setState({ heartClicked: !this.state.heartClicked });
    this.state.heartClicked
      ? this.setState({ whichIcon: faHeart, iconClassName: 'fas faHeart' })
      : this.setState({
          whichIcon: faHeartRegular,
          iconClassName: 'far faHeart',
        });
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  enterKeyPressed = e => {
    if (e.key === 'Enter') {
      this.addComment();
      this.setState({});
    }
  };

  addComment = () => {
    let commented = this.state.comments;
    if (this.state.userInputtedComment !== '') {
      commented = commented.concat({
        commentId: Math.floor(Math.random() * 10000) + 1,
        userId: this.state.userInpttedId,
        userComment: this.state.userInputtedComment,
      });
      this.setState({
        comments: commented,
        userInpttedId: '',
        userInputtedComment: '',
      });
    }
  };

  render() {
    return (
      <>
        <TopNav />

        <div className="nameColdbrew">
          <span>콜드 브루</span>
        </div>
        <div className="arrow-nav">
          <nav>
            <ul>
              <li>
                <a>홈</a>
              </li>
              <li>&gt;</li>
              <li>
                <a>MENU</a>
              </li>
              <li>&gt;</li>
              <li>
                <a>음료</a>
              </li>
              <li>&gt;</li>
              <li>
                <a>브루드 커피</a>
              </li>
              <li>&gt;</li>
              <li>
                <a>아이스 커피</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="container">
          <img
            alt="나이트로바닐라크림"
            src="/images/jihoonhan/나이트로바닐라크림.jpg"
          />
          <div className="table">
            <div className="coffename">
              <span className="kor">나이트로 바닐라 크림</span>
              <span className="eng">
                <br />
                Nitro vanilla Cream
              </span>
              <a className="heart">
                <a
                  className={this.state.iconClassName}
                  onClick={this.heartOnOff}
                >
                  <FontAwesomeIcon icon={this.state.whichIcon} />
                </a>
              </a>
            </div>
            <div className="coffee-detail">
              부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을 한번에
              느껴보세요!
            </div>
            <div className="size">
              <span className="jepum">제품 영양 정보</span>
              <span className="ryang">Tall(톨) / 355ml (12 fl oz)</span>
            </div>

            <div className="ingredients">
              <div className="ingredients-name">
                <span>
                  1회 제공량 (kcal)
                  <br />
                </span>
                <span>
                  포화지방 (g)
                  <br />
                </span>
                <span>단백질 (g)</span>
              </div>
              <div className="measure-left">
                <span className="measure">
                  75
                  <br />
                </span>
                <span className="measure">
                  2<br />
                </span>
                <span className="measure">1</span>
              </div>
              <div className="ingredients-name">
                <span>
                  나트륨 (mg)
                  <br />
                </span>
                <span>
                  당류 (g)
                  <br />
                </span>
                <span>카페인 (mg)</span>
              </div>
              <div className="measure-right">
                <span className="measure">
                  20
                  <br />
                </span>
                <span className="measure">
                  10
                  <br />
                </span>
                <span className="measure">245</span>
              </div>
            </div>

            <div className="allergic">알레르기 유발 요인: 우유</div>
            <div className="review">
              <p>리뷰</p>
            </div>

            <div className="comments">
              <ul>
                {this.state.comments.map((reply, id) => {
                  return (
                    <li className="commentRow" key={id}>
                      <p className="username">{reply.userId}</p>
                      <p>{reply.userComment}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <input
              value={this.state.userInpttedId}
              name="userInpttedId"
              className="newId"
              placeholder="아이디"
              onChange={this.handleInput}
              onKeyPress={this.enterKeyPressed}
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
        <Footer />
      </>
    );
  }
}

export default Detail;
