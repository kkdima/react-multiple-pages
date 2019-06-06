import React, {Component} from 'react';
import styled from 'styled-components';
import '../../styles/styles.scss';
import { device } from '../../theme/GlobalStyle';

import ArrowBack from '../../images/ArrowBack.png';
import ArrowForward from '../../images/ArrowForward.png';
import CombinedShape from '../../images/CombinedShape.png';
import User from './InvestorCard';
// import { useSwipeable, Swipeable } from 'react-swipeable';

export default class FourthSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            position: 0,
            direction: 'next',
            sliding: false
        };
    }

    getOrder(itemPosition) {
        const { position } = this.state;
        const numItems = this.props.users.length || 10;
        if (itemPosition - position < 0) {
            return numItems - Math.abs(itemPosition - position);
        }
        return itemPosition - position;
    }

    doSliding = (direction, position) => {
        let newPosition;
        if (direction === 'next') {
            newPosition = this.state.position - 1;
        } else {
            newPosition = this.state.position + 1;
        }

        this.setState({
            sliding: true,
            direction,
            position
        });

        setTimeout(() => {
            this.setState({
                sliding: false
            });
        }, 50);
    }
  
  nextSlide = () => {
      const { position } = this.state;
      const numItems = this.props.users.length || 1;

      this.doSliding('next', position === numItems ? 0 : position + 1);
  }

  prevSlide = () => {
      const { position } = this.state;
      const numItems = this.props.users.length;

      this.doSliding('prev', position === 0 ? numItems - 1 : position - 1);
  }

  render() {
      const children = this.props.users;
      const { sliding, direction, position } = this.state;
      return (
          <FourthSectionContainer>
              <Title>
                  <Img src={CombinedShape}/>
                  <H2>What investors like you are saying about Zou</H2>
              </Title>
              <Wrapper>
                  <CarouselContainer
                      sliding={ sliding }
                      direction={ direction }
                  >
                      {
                          children.map((user, index) =>
                              <CarouselSlot
                                  key={user.id}
                                  order={this.getOrder(user.id)}
                                  position={ this.order }
                              >
                                  <User {...user} />
                              </CarouselSlot>
                          )}
                  </CarouselContainer>
              </Wrapper>
              <Buttons>
                  <Button
                      data-micron="fade"
                      onClick={ () => this.prevSlide()}
                  >
                      <Img src={ArrowBack}/>
                  </Button>
                  <Button
                      data-micron="fade"
                      onClick={ () => this.nextSlide()}
                  >
                      <Img id="last-button" src={ArrowForward}/>
                  </Button>
              </Buttons>
          </FourthSectionContainer>
      );
  }
}

// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :

const FourthSectionContainer = styled.div`
  @media ${device.mobile} {
    /* border: solid 1px grey; */
    margin-top: 100px;
    display: flex;
    flex-direction: column;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const Wrapper = styled.div`
  @media ${device.mobile} {
  overflow-x: hidden;
  width: 100%;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;
const CarouselContainer = styled.div`
  @media ${device.mobile} {
    display: flex;
    margin: 121px 0 20px 20px;
    transition: ${(props) => props.sliding ? 'none' : 'transform 1s ease-in-out'};

    transform: ${(props) => {
        if (!props.sliding && props.direction === 'next') return 'translateX(calc(-20%))';
        if (!props.sliding && props.direction === 'prev') return 'translateX(0%)';
        if (props.direction === 'prev') return 'translateX(-20%)';
        return 'translateX(0%)';
    }};
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    width: 100%;
    justify-items: center;
  }
`;

const CarouselSlot = styled.div`
  flex: 0 1 80%;
  margin-right: 40px;
  order: ${(props) => props.order };
`;

const H2 = styled.h2`
  @media ${device.mobile} {
    margin: 0px 10px;
    font-family: Chivo-Regular;
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

const Img = styled.img`
  @media ${device.mobile} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const Title = styled.div`
  @media ${device.mobile} {
    margin: 0 auto;
    Img {
      position: absolute;
      margin-left: 10px;
    }
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    width: 1024px;
  }
`;

const Buttons = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    position: relative;
    /* bottom: 500px; */
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

// const WhiteGradient = styled.div`
//   @media ${device.mobile} {
//     display: flex;
//     justify-content: space-between;
//     width: 100%;
//     position: relative;
//     bottom: 300px;
//   }
//   @media ${device.tablet} {
//   }
//   @media ${device.laptop} {
//   }
// `;

// const LeftSide = styled.div`
//   @media ${device.mobile} {
//     background-image: linear-gradient(270deg, rgba(255,255,255,0.00) 17%, #FFFFFF 62%);
//     width: 408px;
//     height: 296px;
//     position: relative;
//     right: 150px;
//   }
//   @media ${device.tablet} {
//   }
//   @media ${device.laptop} {
//   }
// `;
// const RightSide = styled.div`
//   @media ${device.mobile} {
//     background-image: linear-gradient(90deg, rgba(255,255,255,0.00) 17%, #FFFFFF 62%);
//     width: 408px;
//     height: 296px;
//     position: relative;
//     left: 150px;
//   }
//   @media ${device.tablet} {
//   }
//   @media ${device.laptop} {
//   }
// `;