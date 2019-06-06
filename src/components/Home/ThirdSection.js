import React, { Component } from 'react';
import styled from 'styled-components';
import '../../styles/styles.scss';
import { device } from '../../theme/GlobalStyle';
import photobox1 from '../../images/photobox1.png';
import photobox2 from '../../images/photobox2.png';
import Popup from "../other_pages/Popup";

export default class ThirdSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        };
    }
    
  openModal = () => {
      this.setState({ visible : true });
  };
  
  closeModal = () => {
      this.setState({ visible : false });
  };

  render() {
      return (
          <ThirdSectionContainer>
              <TextContainer>
                  <H2>Invest on your convenience</H2>
                  <P>Autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla</P>
              </TextContainer>
              
              <Popup visible={this.state.visible} handleClose={this.closeModal}/>

              <PhotosContainer>
                  <PhotoItem>
                      <Img src={photobox1}/>
                      <ColorOverlay></ColorOverlay>
                      <Text>
                          <P>NEW FARM TODAY</P>
                          <Line></Line>
                          <H2>Short terms investment</H2>
                          <P>Invest in farms that will be ready for harvest in 3-18 months</P>
                          <Button data-micron="bounce" type="button" value="Open" onClick={this.openModal}>Browse Farm</Button>
                      </Text>
                  </PhotoItem>
                  <PhotoItem>
                      <Img src={photobox2}/>
                      <ColorOverlay></ColorOverlay>
                      <Text>
                          <P>FULLY FUNDED</P>
                          <Line></Line>
                          <H2>Long terms investment</H2>
                          <P>Consider farms that have long term investment program.</P>
                          <Button data-micron="bounce" type="button" value="Open" onClick={this.openModal}>Learn more</Button>
                      </Text>
                  </PhotoItem>
              </PhotosContainer>

              <HowItWorksBanner>
                  {/* <Img2 src={backgroundImg}/> */}
                  <TextPart>
                      <H2>How it works</H2>
                      <P>Take your pick from the supply chain and participate in agribusiness projects that are backed up not only by Zou, but also by the best land, family heritage, innovation and overall superior expertise.</P>
                      <Points>
                          <CircleNumber>
                              <P id="GreenLetter">01</P>
                          </CircleNumber>
                          <Line id='line'></Line>
                          <CircleNumber>
                              <P>02</P>
                          </CircleNumber>
                          <Line id='line'></Line>
                          <CircleNumber>
                              <P>03</P>
                          </CircleNumber>
                          <Line id='line'></Line>
                          <CircleNumber>
                              <P>04</P>
                          </CircleNumber>
                      </Points>
                      <LastParagraph>
                          <H2>Select your farmshare and complete reservation form.</H2>
                          <P>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere</P>
                      </LastParagraph>
                  </TextPart>
              </HowItWorksBanner>
          </ThirdSectionContainer>
      );
  }
}

// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :

const Img2 = styled.img`
  @media ${device.mobile} {
    z-index: -1;
    position: relative;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const TextPart = styled.div`
  @media ${device.mobile} {
    z-index: 2;
    position: relative;
    /* border: solid black; */
    /* bottom: 600px; */
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const ThirdSectionContainer = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const TextContainer = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0px 25px;
    H2, P {
    }
    H2 {
      margin-bottom: 0.8em;
      line-height: 1.2em;
    }
  }
  @media ${device.tablet} {
    margin: 0px 72px;
  }
  @media ${device.laptop} {
    H2, P {
      text-align: left;
    }
  }
`;

const PhotosContainer = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 94px;
    margin-bottom: 60px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const PhotoItem = styled.div`
  @media ${device.mobile} {
    position: relative;
    width: 100%;
    /* width: 512px; */
    height: 416px;

    border-radius: 5px;
    margin: 0 auto;
    overflow-y: hidden;
    overflow-x: hidden;
    /* background-color: green; */
    :first-child {
      margin-bottom: 50px;
    }
  }
  @media ${device.ThirdSectionImageSize} {
    width: 512px;
  }
  @media ${device.laptop} {
    :first-child {
      margin-bottom: 0px;
    }
    margin: 0;
  }
`;

const Text = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    z-index: 3;
    position: relative;
    padding-left: 67px;
    

    /* border: solid black; */

    
    P, H2 {
      font-family: 'Chivo', sans-serif;
      position: relative;
      max-width: 248px;
      color: #FFFFFF;
    }
    P:first-of-type {
      font-size: 14px;
      color: #66BB6A;
      letter-spacing: 2.8px;
      line-height: 24px;
      margin-top: 39px;
    }
    P:last-of-type {
      font-size: 16px;
      color: #E2EFD2;
      line-height: 24px;
      margin-top: 0;
      margin-bottom: 29px;
    }
    H2 {
      font-family: 'Chivo', sans-serif;
      font-weight: bold;
      font-size: 31px;
      text-align: left;
      line-height: 40px;
      margin-bottom: 17px;
      margin-top: 61px;
    }
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    /* bottom: 820px; */
  }
`;

const P = styled.p`
  @media ${device.mobile} {
    font-family: 'Chivo', sans-serif;
    font-size: 18px;
    color: #324148;
    line-height: 32px;
    max-width: 700px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const Points = styled.div`
  @media ${device.mobile} {
    display: none;
    #GreenLetter {
      color: #66BB6A;
    }
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    #line {
      margin: 0;
      height: 2px;
      color: #A5D6A7;
      display: flex;
      align-items: center;
      position: relative;
      top: 37px;
      width: 90px;
    }
    margin-top: 20px;
  }
  @media ${device.laptop} {
    width: 704px;
    #line {
      width: 139px;
    }
  }
`;

const LastParagraph = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    justify-content: center;
    H2, P {
      margin-left: 30px;
      margin-right: 30px;
    }
    H2 {
      /* margin-top: 0px; */
      /* width: 280px;  */
      /* max-width: 280px; */
    }
    P {
      max-width: 352px;
    }
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    H2, P {
      /* text-align: left; */
      margin-left: 0px;
      margin-right: 0px;
    }
    display: flex;
    justify-content: center;
    /* flex-direction: row; */
    /* margin-top: 106px; */
  }
`;

const CircleNumber = styled.div`
  @media ${device.mobile} {
    :first-of-type {
      background: #A5D6A7;
    }
    border-radius: 50%;
    color: #A5D6A7;
    border: solid white 2px;;
    display: flex;
    width: 72px;
    height: 72px;
    flex-direction: row;
    P {
      position: relative;
      top: 20px;
      right: 2px;
    }
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const H2 = styled.h2`
  @media ${device.mobile} {
    font-family: 'Chivo', sans-serif;
    font-weight: bold;
    font-size: 36px;
    line-height: 64px;
    color: #000000;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const Img = styled.img`
  @media ${device.mobile} {
    position: absolute;
    z-index: 0;
    height: 416px;
    object-fit: cover;
  }
  @media ${device.tablet} {
    max-height: 416px;
  }
  @media ${device.laptop} {
  }
`;

const ColorOverlay = styled.div`
  @media ${device.mobile} {
    position: absolute;
    z-index: 1;
    bottom: 0px;
    width: 512px;
    min-height: 200px;
    opacity: 0.6;
    background-image: linear-gradient(-180deg, rgba(97,118,127,0.00) 0%, #324148 100%);
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const Line = styled.div`
  @media ${device.mobile} {
    background: #FFFFFF;
    width: 56px;
    height: 4px;
    border-radius: 2px;
    position: relative;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const Button = styled.button`
  @media ${device.mobile} {
    background: #FFFFFF;
    font-family: 'Chivo', sans-serif;
    font-size: 18px;
    color: #66BB6A;
    text-align: center;
    line-height: 32px;
    position: relative;
    border-radius: 5px;
    width: 200px;
    height: 48px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const HowItWorksBanner = styled.div`
  @media ${device.mobile} {
    /* white-space: pre-line; */
    background-color: #66BB6A;
    padding: 60px 0px 60px 0px;

    /* height: 100%; */
    H2 {
      font-family: 'Chivo', sans-serif;
      font-weight: bold;
      color: #FFFFFF;
      text-align: center;
      line-height: 64px;
      margin-bottom: 12px;
    }
    P {
      font-family: 'Chivo', sans-serif;
      color: #E8F5E9;
      text-align: center;
      margin: 0 auto;
    }
    P:first-of-type {
      margin-bottom: 0px;
    }
    H2:last-of-type {
      font-family: 'Chivo', sans-serif;
      font-weight: bold;
      font-size: 24px;
      color: #FFFFFF;
      line-height: 32px;
    }
  }
  @media ${device.mobileL} {
    margin: 117px 0px 0px;
    height: 720px;
    
    display: flex;
    flex-direction: column;
    padding: 100px 30px 0 30px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    border-radius: 5px;
    margin: 117px 0px 0px;
    max-width: 1200px;
    P:first-of-type {
      margin-bottom: 20px;
    }
  }
`;