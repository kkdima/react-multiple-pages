import React, { Component } from 'react';
import styled from 'styled-components';
import img from '../../images/logo.png';
import { device } from '../../theme/GlobalStyle';
import Popup from "../other_pages/Popup";

export default class Footer extends Component {
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
          <FooterContainer>
  
              <ContainerBanner>
                  <H2>The future of <Span>Farm Investing</Span> is Zou</H2>
                  <ButtonBanner href="#!" data-micron="bounce" type="button" value="Open" onClick={this.openModal}>Invest Now</ButtonBanner>
                  <Popup visible={this.state.visible} handleClose={this.closeModal}/>
              </ContainerBanner>

              <FirstLevel>
                  <FooterUls>
                      <Ul>
                          <Li>Company</Li>
                          <Li><A>About Us</A></Li>
                          <Li><A>Team</A></Li>
                          <Li><A>Careers</A></Li>
                          <Li><A>Contact</A></Li>
                      </Ul>
                      <Ul>
                          <Li>Invest</Li>
                          <Li><A>Features</A></Li>
                          <Li><A>How It Works</A></Li>
                          <Li><A>Pricing</A></Li>
                          <Li><A>Login</A></Li>
                      </Ul>
                      <Ul>
                          <Li>Legal</Li>
                          <Li><A>Privacy</A></Li>
                          <Li><A>Terms</A></Li>
                          <Li><A>Security</A></Li>
                      </Ul>
                  </FooterUls>
                  <FooterGreenBox>
                      <P>Blog Zou</P>
                      <P>Write email to us</P>
                      <P>info@zoufarm.com</P>
                      <Button data-micron="bounce" type="button" value="Open" onClick={this.openModal}>Sign Up</Button>
                  </FooterGreenBox>
              </FirstLevel>

              <Line></Line>

              <ThirdRow>
                  <Img src={img} id="logo"></Img>
                  <P>© Copyright 2018. kkdimaa.</P>
              </ThirdRow>

          </FooterContainer>
      );
  }
}

// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :

const ContainerBanner = styled.div`
  @media ${device.mobile} {
    width: 100%;
    /* height: 296px; */
    /* max-height: 296px; */
    background: #FFFFFF;
    box-shadow: -1px 25px 20px 0 #F2F2F2;
    font-family: Chivo-Bold;
    font-size: 36px;
    color: #000000;
    text-align: center;
    line-height: 64px;
    margin: 184px 0px 126px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    padding: 92px 20px 79px;
    /* border: solid black; */
    button {
      margin-top: 34px;
    }
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const  Span = styled.span`
  @media ${device.mobile} {
    display: inline-flex;
    font-family: 'Chivo', sans-serif;
    font-size: 36px;
    color: #63BC66;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;
const  H2 = styled.h2`
  @media ${device.mobile} {
    font-family: 'Chivo', sans-serif;
    font-weight: bold;
    font-size: 36px;
    color: #000000;
    margin-top: 0;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const ButtonBanner = styled.button`
  @media ${device.mobile} {
    box-shadow: 0 13px 20px 0 rgba(118, 196, 125, 0.41);
    background: #66BB6A;
    font-family: 'Chivo', sans-serif;
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
    line-height: 32px;
    width: 269px;
    height: 48px;
    border-radius: 5px;
    border-style: none;
    /* margin-top: 54px; */
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    float: left;
  }
`;

const FooterContainer = styled.div`
  @media ${device.mobile} {
    display: flex;
    max-width: 1056px;
    margin: 0 auto;
    justify-content: center;
    flex-direction: column;
    padding: 0px 25px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    padding: 0px 50px;
  }
`;
const FirstLevel = styled.div`
  @media ${device.mobile} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterUls = styled.div`
  @media ${device.mobile} {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    width: 590px;
  }
`;

const Ul = styled.ul`
  @media ${device.mobile} {
    Li:first-of-type {
      font-weight: bold;
      text-transform: uppercase;
      color: #000000;
    }
    padding: 0;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
  `;

const Li = styled.li`
  @media ${device.mobile} {
    list-style: none;
    font-size: 16px;
    color: #607D8B;
    text-align: left;
    line-height: 40px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const FooterGreenBox = styled.div`
  @media ${device.mobile} {
    P{
      padding-bottom: 20px;
    }
    P:first-of-type {
      font-weight: bold;
      font-size: 18px;
      padding-top: 32px;
    }
    P:last-of-type {
      font-weight: bold;
      font-size: 18px;
    }
    background: #66BB6A;
    width: 280px;
    height: 258px;
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 67px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    margin: 0;
  }
`;

const P = styled.p`
  @media ${device.mobile} {
    color: #ffffff;
    margin-left: 56px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const Line = styled.div`
  @media ${device.mobile} {
    width: 100%;
    height: 2px;
    background-color: #EEEEEE;
    margin: 0 auto;
    margin-top: 118px
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;
const Button = styled.button`
  @media ${device.mobile} {
    border: 1px solid #FFFFFF;
    font-family: 'Chivo', sans-serif;
    min-height: 40px;
    min-width: 110px;
    text-align: center;
    font-size: 16px;
    color: #F1F8E9;
    border-radius: 5px;
    background: none;
    margin-left: 56px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;
const ThirdRow = styled.div`
  @media ${device.mobile} {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 59px;
    margin-bottom: 40px;
    P {
      font-family: 'Chivo', sans-serif;
      font-size: 14px;
      color: #607D8B;
      margin-bottom: 5px;
    }
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

const A = styled.a`
  @media ${device.mobile} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

