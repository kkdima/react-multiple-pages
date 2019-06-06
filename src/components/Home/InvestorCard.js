import React from 'react';
import styled from 'styled-components';
import { device } from '../../theme/GlobalStyle';

const User = (props) =>
    <InvestorBoxWrapper>
        <InvestorBox>
            <WithAva>
                <Img src="https://api.adorable.io/avatars/75/abott@adorable.png"/>
                <WithAvaH3>
                    <H3>
                        {props.name}
                    </H3>
                    <H3>
                        {props.email}
                    </H3>
                </WithAvaH3>
            </WithAva>
            <P>{props.company.catchPhrase} {props.company.bs}</P>
        </InvestorBox>
    </InvestorBoxWrapper>;

export default User;

export const InvestorBoxWrapper = styled.div`
  @media ${device.mobile} {
    display: inline-flex;
    flex-direction: row;
    margin-bottom: 56px;
    position: relative;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const Img = styled.img`
  @media ${device.mobile} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

export const WithAvaH3 = styled.div`
  margin-top: 20px;
`;

export const WithAva = styled.div`
  @media ${device.mobile} {
    display: flex;
    align-items: flex-start;
    margin: 47px 0px 0px 48px;
    Img {
      background: #FFFFFF;
      border-radius: 50%;
      box-shadow: 0 3px 20px 0 rgba(0,0,0,0.22);
      margin-right: 25px;
    }
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

export const H3 = styled.h3`
  @media ${device.mobile} {
    white-space: pre;
    font-family: Chivo-Bold;
    font-size: 18px;
    color: #263238;
    line-height: 24px;
    margin-bottom: 1em;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;
export const P = styled.p`
  @media ${device.mobile} {
    margin-top: 27px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

export const InvestorBox = styled.div`
  @media ${device.mobile} {
    margin: 0;
    width: 408px;
    height: 296px;
    border-radius: 5px;
    background: #FFFFFF;
    box-shadow: -1px 13px 20px 0px #F0F2F4;
    font-size: 18px;
    line-height: 32px;
    font-family: 'Chivo', sans-serif;
    color: #324148;
    H3:first-of-type {
      color: #66BB6A;
      line-height: 0em;
    }
    H3 {
      width: 200px;
      font-family: 'Chivo', sans-serif;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
    }
    P {
      width: 312px;
      margin-left: 48px;
    }
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;
export const Span = styled.span``;