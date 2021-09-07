/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import TopNav from '../../../components/Nav/TopNav';
import DetailTitle from '../../../components/DetailTitle';
import Footer from '../../../components/Footer';
import './Detail.scss';
import DetailContainer from '../../../components/DetailContainer';

class Detail extends Component {
  render() {
    return (
      <>
        <header>
          <TopNav />
        </header>

        <acticle>
          <DetailTitle />
          <DetailContainer
            alt={'나이트로바닐라크림'}
            src={'/images/jihoonhan/나이트로바닐라크림.jpg'}
            kor={'나이트로 바닐라 크림'}
            eng={'Nitro Vanilla Cream'}
            summary={
              '부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을 한번에 느껴보세요!'
            }
            size={'Tall(톨) / 355ml (12 fl oz)'}
            kcal={75}
            fat={2}
            protein={1}
            natrium={20}
            sugar={10}
            caffeine={245}
            allergen={'우유'}
          />
        </acticle>

        <footer>
          <Footer />
        </footer>
      </>
    );
  }
}

export default Detail;
