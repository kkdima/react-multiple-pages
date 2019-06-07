import React, { Component } from 'react';
import styled from 'styled-components';
import { device } from '../../theme/GlobalStyle';
import '../../styles/styles.scss';
import leaves from '../../images/Leaves.png';
import Popup from "../other_pages/Popup";


export default class FirstSection extends Component {
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
            <FirstScreenContainer>
                <Img src={leaves} id="illustrationLeaves"/>
                {/* <Img src={leaves}/> */}
                <InfoBlock>
                    <H1>A New Way to Invest in Agriculture!!</H1>
                    <P>Zou provides farmes, ranchers, private foresters, and agricultural producers with online self service applications and educational materials.</P>
                    <Button href="#!" data-micron="bounce" type="button" value="Open" onClick={this.openModal}>Invest Now</Button>
                    <Popup visible={this.state.visible} handleClose={this.closeModal}/>
                </InfoBlock>
            </FirstScreenContainer>
        );
    }
};

const FirstScreenContainer = styled.div`
  @media ${device.mobile} {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;
const Img = styled.img`
  @media ${device.mobile} {
    position: absolute;
    width: 20%;
    max-width: 160px;
    z-index: -1;
    margin-top: 500px;
    left: 0;
  }
  @media ${device.tablet} {
    max-height: 580px;
    height: 50%;
    max-width: 160px;
    width: 50%;
  }
  @media ${device.laptop} {
    margin-top: 450px;
  }
`;
const InfoBlock = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    margin-left: 30px;
    margin-right: 30px;
  }
  @media ${device.mobileL} {
    width: 365px;
  }
  @media ${device.tablet} {
    width: 473px;
    margin-top: 0px;
    margin-left: 50px;
  }
  @media ${device.laptop} {
    margin-top: 70px;
    max-width: 1200px;
  }
`;

const H1 = styled.h1`
  @media ${device.mobile} {
    font-family: 'Chivo', sans-serif;
    font-size: 37px;
    color: #000000;
    line-height: 64px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const P = styled.p`
  @media ${device.mobile} {
    font-family: 'Chivo', sans-serif;
    font-size: 18px;
    color: #263238;
    text-align: left;
    line-height: 32px;
    margin-top: 25px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const Button = styled.button`
  @media ${device.mobile} {
    box-shadow: 0 13px 20px 0 rgba(118, 196, 125, 0.41);
    background: #66BB6A;
    font-family: 'Chivo', sans-serif;
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
    line-height: 32px;
    width: 144px;
    height: 48px;
    border-radius: 5px;
    border-style: none;
    margin-top: 54px;
    margin-right: 8px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    float: left;
  }
`;

const Wrapper = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;

  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const Title = styled.h1`
  @media ${device.mobile} {
    font-family: 'Chivo', sans-serif;
    font-weight: bold;
    font-size: 36px;
    color: #141414;
    margin: 12px 0 38px 0;
    text-align: center;

  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const Input = styled.input`
  @media ${device.mobile} {
    display: flex;
    margin-bottom: 23px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const Form = styled.form`
  input::placeholder {
    color: #D6D6D6;
  }
  input {
    padding-left: 15px;
  }
  input:nth-of-type(1) {
    text-transform: capitalize;
  }
  input:nth-of-type(3) {
    height: 142px;
  }
  input:nth-of-type(3):focus {
    outline:none;
  }
  textarea {
    border: none;
    padding: 15px;
    width: 405px;
    height: 142px;
    text-transform: capitalize;
  }
  textarea::placeholder {
    color: #D6D6D6;
  }
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 58px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const ButtonContainer = styled.div`
  @media ${device.mobile} {
    /* border: 1px solid blue; */
    display: flex;
    justify-content: flex-end;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
  `;

const A2 = styled.div`
  Button {
    margin-bottom: 58px;
    margin-right: 0px;
  }
  Img {
    height: 25px;
  }
  @media ${device.mobile} {
    margin: 0 auto;
    buttom: 250px;    
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
  `;

const Img2 = styled.img`
  @media ${device.mobile} {
    /* border: 1px solid black; */
    height: 25px;
    width: 25px;
    margin-top: 0;
    /* position: relative; */
    /* left: 480px; */
    /* bottom: 500px; */
    /* z-index: 2; */
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const Button2 = styled.button`
  @media ${device.mobile} {
    /* border: 1px solid black; */
    margin: 15px 18px 0 0;
    /* left: 480px; */
    /* bottom: 500px; */
    /* position: relative; */

    /* margin: 0; */
    /* height: 25px; */
    /* width: 25px; */
    /* margin-top: 10px; */

    /* background: none; */
    /* display: inline-block; */
    /* background: yellow; */
  }
  
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;
