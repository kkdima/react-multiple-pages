import React, {Component} from 'react';
import styled from 'styled-components';
import '../../styles/styles.scss';
import Slider from "react-slick";
import { device } from '../../theme/GlobalStyle';

import User from './InvestorCard';
import ArrowBack from '../../images/ArrowBack.png';
import ArrowForward from '../../images/ArrowForward.png';
import CombinedShape from '../../images/CombinedShape.png';
 
export default class SimpleSlider extends React.Component {
    constructor(props){
        super(props);

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);

        this.state = {
            position: 0,
            direction: 'next',
            sliding: false
        };
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '100px',
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,

                    }
                },
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 3,

                    }
                },
                {
                    breakpoint: 1920,
                    settings: {
                        slidesToShow: 4,
                    }
                },
            ]
        };
        const children = this.props.users;
        const { sliding, direction, position } = this.state;
        return (
            <FourthSectionContainer>
                <Title>
                    <Img src={CombinedShape}/>
                    <H2>What investors like you are saying about Zou</H2>
                </Title>
                {/* What is going on here with ref={...}???? */}
                <Slider ref={c => (this.slider = c)} {...settings} >
                    {
                        children.map((user, index) =>
                            <CarouselSlot
                                key={user.id}
                                // order={this.getOrder(user.id)}
                                position={ this.order }
                            >
                                <User {...user} />
                            </CarouselSlot>
                        )}
                </Slider>

                <Buttons>
                    <Button
                        data-micron="fade"
                        onClick={this.previous}
                    >
                        <Img src={ArrowBack}/>
                    </Button>
                    <Button
                        data-micron="fade"
                        onClick={this.next}
                    >
                        <Img id="last-button" src={ArrowForward}/>
                    </Button>
                </Buttons>
            </FourthSectionContainer>
        );
    }
}

const FourthSectionContainer = styled.div`
  @media ${device.mobile} {
    margin-top: 264px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const CarouselSlot = styled.div`
  flex: 0 1 80%;
  margin-right: 40px;
  order: ${(props) => props.order };
`;

const Buttons = styled.div`
  @media ${device.mobile} {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    margin: 0 auto;
    position: relative;
    max-width: 1200px;
    button:last-of-type {
      :active{
      background: #F7FAF7;
      }
    }
    button:first-of-type {
    background: #66BB6A;
    box-shadow: 0 25px 25px 0 rgba(118,196,125,0.31);
      :active {
        background: #37A03C;
      }
    }
    Img:first-of-type {
      position: relative;
      left: 20px;
    }
    #last-button {
      position: relative;
      left: 30px;
    }
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    width: 1024px;
  }
`;

const Button = styled.button`
  @media ${device.mobile} {
    background: #FFFFFF;
    box-shadow: -1px 13px 20px 0 #F0F2F4;
    border: 0px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-right: 16px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const Img = styled.img`
  @media ${device.mobile} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const H2 = styled.h2`
  @media ${device.mobile} {
    margin: 0px 10px;
    font-family: 'Chivo', sans-serif;
    font-weight: bold;
    font-size: 36px;
    color: #000000;
    line-height: 45px;
    max-width: 411px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const Title = styled.div`
  @media ${device.mobile} {
    display: flex;
    margin: 0 auto;
    margin-bottom: 131px;
    padding: 0 20px;
    max-width: 1096px;
    justify-content: flex-start;
    Img {
      position: absolute;
      margin-left: 10px;
    }
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    width: 1096px;
  }
`;
