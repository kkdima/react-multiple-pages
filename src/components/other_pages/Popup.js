import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import styled from 'styled-components';
import { device } from '../../theme/GlobalStyle';
import '../../styles/styles.scss';
import closebutton from '../../images/close-button.svg';

// export default class Popup extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             visible : false
//         };
//     }
    
//     openModal() {
//         this.setState({
//             visible : true
//         });
//     }

//     closeModal() {
//         this.setState({
//             visible : false
//         });
//     }

//     render() {
//         console.log(this.props);
// const Popup = ({ handleClose, visible, children }) => {
// const showHideClassname = visible ? "modal display-block" : "modal display-none";

export default class Popup extends React.Component {

    render() {
        return (
            <Modal 
                visible={this.props.visible}
                width="521"
                effect="fadeInUp"
                onClickAway={ this.props.handleClose }
            >
                <Wrapper>
                    <ButtonContainer>
                        <Button2
                            href="javascript:void(0);"
                            onClick={ this.props.handleClose }
                        >
                            <Img2 src={closebutton}/>
                        </Button2>
                    </ButtonContainer>
                    <Title>Sign Up</Title>
                    <Form>
                        <Input
                            name="name"
                            type="text"
                            placeholder="Name..."
                            onChange={e => this.setState({ })}
                        />
                        <Input
                            name="email"
                            type="text"
                            placeholder="Email..."
                            onChange={e => this.setState({ })}
                        />
                        <textarea
                            name="name"
                            type="text"
                            placeholder="Your question to us..."
                            onChange={e => this.setState({ })}
                        />
                    </Form>
                    <A2 href="javascript:void(0);" onClick={ this.props.handleClose }><Button>Submit</Button></A2>
                </Wrapper>
            </Modal>
        );
    };
}

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
    -webkit-appearance: none;
    border-style: solid;
    border:none;
    
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
  border-style: solid;
  border:none;  
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
    height: 25px;
    width: 25px;
    margin-top: 0;

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

const Button2 = styled.button`
  @media ${device.mobile} {
    margin: 15px 18px 0 0;
  }
  
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;