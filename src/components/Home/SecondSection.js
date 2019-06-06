import React from 'react';
import styled from 'styled-components';
import '../../styles/styles.scss';
import { device } from '../../theme/GlobalStyle';
import InfoBox1 from '../../images/InfoBox1.png';
import InfoBox2 from '../../images/InfoBox2.png';
import InfoBox3 from '../../images/InfoBox3.png';
import background from '../../images/background.png';

export default () => (
    <SecondSectionContainer>
        <Img src={background}/>
        <SecondSectionParagraph>
            <H2>New Opportunities</H2>
            <P>We are the first and the only crowdfunding platform enabling you to help finance our farmers.</P>
        </SecondSectionParagraph>
        <InfoBoxContainer>
            <InfoBox>
                <ImgBox src={InfoBox1} />
                <H3>Connect with our farmers</H3>
                <Pbox>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione</Pbox>
            </InfoBox>
            <InfoBoxGreen>
                <ImgBox src={InfoBox2} />
                <H3>Connect with our farmers</H3>
                <Pbox>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione</Pbox>
            </InfoBoxGreen>
            <InfoBox>
                <ImgBox src={InfoBox3} />
                <H3>Connect with our farmers</H3>
                <Pbox>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione</Pbox>
            </InfoBox>
        </InfoBoxContainer>
        <Line></Line>
    </SecondSectionContainer>
);

// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :
// STYLES STYLES STYLES STYLES STYLES STYLES :

const SecondSectionContainer = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-flow: column;
  }
  @media ${device.tablet} {
    justify-content: center;
  }
  @media ${device.laptop} {
    margin-top: 228px; 
  }
`;

const SecondSectionParagraph = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-flow: column;
    max-width: 552px;
    justify-content: center;
    margin: 0 auto;
    margin-top: 80px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    margin: 0 auto;
  }
`;

const H2 = styled.h2`
  @media ${device.mobile} {
    font-family: 'Chivo', sans-serif;
    font-weight: bold;
    font-size: 36px;
    color: #000000;
    text-align: center;
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
    color: #324148;
    text-align: center;
    line-height: 32px;
    margin-left: 10px;
    margin-right: 10px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const InfoBoxContainer = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-flow: column;
    justify-content: center;
    margin: 0 auto;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    flex-flow: row;
  }
`;

const InfoBox = styled.div`
  @media ${device.mobile} {
    background: #FFFFFF;
    box-shadow: -1px 13px 20px 0 #F0F2F4;
    margin: 98px 18px 0;
    max-width: 328px;
    min-height: 328px;
    border-radius: 5px;
    display: flex;
    align-items: flex-start;
    flex-flow: column;
    align-content: space-between;
    padding: 46px 25px;
  }
  @media ${device.tablet} {

  }
  @media ${device.laptop} {
  }
`;

const InfoBoxGreen = styled(InfoBox)`
  h3, p {
    color: #FFFFFF;
  }
  @media ${device.mobile} {
    background: #66BB6A;
    box-shadow: 0 25px 25px 0 rgba(118,196,125,0.31);
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const Pbox = styled.p`
  @media ${device.mobile} {
    font-family: 'Chivo', sans-serif;
    font-weight: lighter;
    font-size: 16px;
    color: #263238;
    line-height: 24px;
    z-index: 2;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const H3 = styled.h3`
  @media ${device.mobile} {
    padding: 25px 0px;
    font-family: 'Chivo', sans-serif;
    font-weight: bold;
    font-weight:bold;
    font-size: 18px;
    color: #263238;
    text-align: left;
    line-height: 24px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const ImgBox = styled.img`
  @media ${device.mobile} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

const Img = styled.img`
  @media ${device.mobile} {
    position: absolute;
    z-index: -2;
    top: 1000px;
    background: #ffffff;
    width: 100%;
  }
  @media ${device.tablet} {
    top: 840px;
  }
  @media ${device.laptop} {
  }
`;

const Line = styled.div`
  @media ${device.mobile} {
    width: 100%;
    max-width: 1200px;
    height: 2px;
    background-color: #EEEEEE;
    margin: 0 auto;
    margin-top: 118px;
    margin-bottom: 82px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;