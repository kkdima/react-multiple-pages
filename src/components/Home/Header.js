import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from '../../theme/GlobalStyle';
import '../../styles/styles.scss';
import MainIllustration from '../../images/MainIllustration.png';
import img from '../../images/logo.png';
import Popup from "../other_pages/Popup";

export default class Header extends Component {
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
            <Container>
                <LogoNavHolder>
                    <Logo src={img} id="logo"/>
                    <NavLinkWrapper>
                        <NavLink className="main-nav" activeClassName="main-nav-active" to="/" exact>Home</NavLink>
                        <NavLink className="main-nav" activeClassName="main-nav-active" to="/product" exact>Product</NavLink>
                        <NavLink className="main-nav" activeClassName="main-nav-active" to="/team" exact>Team</NavLink>
                        <NavLink className="main-nav" activeClassName="main-nav-active" to="/blog" exact>Blog</NavLink> 
                        <NavLink className="main-nav" activeClassName="main-nav-active" to="/contact" exact>Contact</NavLink>
                    </NavLinkWrapper>
                </LogoNavHolder>
                <LogoNavHolder2>
                    <Button data-micron="bounce" type="button" value="Open" onClick={this.openModal}>Sign Up</Button>
                    <Img src={MainIllustration} id="illustration"></Img>
                    <Popup visible={this.state.visible} handleClose={this.closeModal}/>
                </LogoNavHolder2>
            </Container>
        );
    }
}

// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :

const Container = styled.div`
  @media ${device.mobile} {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    align-items: flex-start;
    justify-content: space-between;
    font-family: 'Chivo', sans-serif;
    color: #000000;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    /* justify-content: center; */
  }
  `;

const LogoNavHolder = styled.div`
    display: flex;
    align-items: flex-start;
    /* max-width: 615px; */
    @media ${device.laptop} {
      padding-left: 50px;
      justify-content: center;
      /* border: solid black; */
      /* position: relative; */
      /* right: 300px; */
      }
  `;
  
const LogoNavHolder2 = styled.div`
    @media ${device.mobile} {
    }
    @media ${device.tablet} {
    }
    @media ${device.laptop} {
    }
`;

const NavLinkWrapper = styled.div`
  @media ${device.mobile} {
    display: flex;
    margin: 30px 25px;
    flex-direction: column;
    text-transform: uppercase;
    justify-content: flex-start;

    a:nth-child(1) {
      width: 49px;
    }
    a:nth-child(3) {
      width: 48px;
    }
    a:nth-child(4) {
      width: 43px;
    }
    a {
      margin-right: 29px;
      margin-bottom: 10px;
      /* border: 1px solid black; */
    }
  }
  @media ${device.tablet} {
    margin: 30px 50px;
  }
  @media ${device.laptop} {
    flex-direction: row;
    text-transform: capitalize;
    margin: 61px 0  0 117px;
    a {
      width: auto;
    }
    a:nth-child(1) {
      width: 46px;
    }
    a:nth-child(2) {
      width: 63px;
    }
    a:nth-child(3) {
      width: 43px;
    }
    a:nth-child(4) {
      width: 36px;
    }
    a:nth-child(5) {
      width: 61px;
    }

    /* Changing contrast color of the buttons from Nav menu if resizing window */
    @media (max-width: 1216px) {
      a:nth-child(5) {
        color: white;
      }
    }
  
    @media (max-width: 1142px) {
      a:nth-child(4) {
        color: white;
      }
    }
  
    @media (max-width: 1070px) {
      a:nth-child(3) {
        color: white;
      }
    }
  }
`;

const Logo = styled.img`
  src: url(${props => props.src});
  @media ${device.mobile} {
    display: none;
  }
  @media ${device.tablet} {
    margin-top: 45px;
  }
  @media ${device.laptop} {
    display: flex;
  }
  #logo {
    display: none;
    margin: 45px 10px 10px;
    margin-right: 117px;
  }
`;

const Button = styled.button`
  -webkit-tap-highlight-color: transparent;
  @media ${device.mobile} {
    border: 1px solid white;
    font-family: 'Chivo', sans-serif;
    min-height: 40px;
    min-width: 110px;
    text-align: center;
    font-size: 16px;
    color: #F1F8E9;
    border-radius: 5px;
    background: none;
    margin: 30px 30px 0px 0px;
    /* position: absolute; */
    /* margin: 20px 10% 10px 0; */
    /* margin-top: 25px; */
    /* right: 0%; */
  }
  @media ${device.tablet} {
    height: 48px;
    width: 128px;
    margin: 30px 30px 0px 0px;
  }
  @media ${device.laptop} {
    position: absolute;
    margin-top: 45px;
    right: 10%;

  }
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

  #illustration {
    position: relative;
    /* width: 55%; */
    top: 0;
    right: 0;
    z-index: -1;
  }

  @media ${device.mobile} {
    width: 50%;
    /* max-width: 660px; */
  }
  @media ${device.mobileL} {
  }
  @media ${device.tablet} {
    width: 40%;
    #illustration {
      width: 50%;
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
    }
  }
  @media ${device.laptop} {
    width: 620px;
    #illustration {
    }
  }
`;