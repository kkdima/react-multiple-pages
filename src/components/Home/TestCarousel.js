import React, {Component} from 'react';
import styled from 'styled-components';
import '../../styles/styles.scss';
import Slider from "react-slick";
import { device } from '../../theme/GlobalStyle';

import User from './InvestorCard';


export default class TestCarousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        var settings = {
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
          return (
            <Slider {...settings}>
              <div>
                <User/>
              </div>
              <div>
                <User/>
              </div>
              <div>
                <User/>
              </div>
              <div>
                <User/>
              </div>
              <div>
                <User/>
              </div>
              <div>
                <User/>
              </div>
            </Slider>
          );
    }
}