import React from 'react';
import styled from 'styled-components';
import { device } from '../../theme/GlobalStyle';

const Product = () => {
    return (
        <Wrapper>
            Product page
        </Wrapper>
    );
};

export default Product;

const Wrapper = styled.h2`
  @media ${device.mobile} {
      margin-top: 90px;
      text-align: center;
      margin: 200px 0 500px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;
