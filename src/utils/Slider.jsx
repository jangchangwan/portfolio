import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class ChuAniOneSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
    return (
      <div>
        <Slider {...settings}>
          <Box>
            <Image src="1" />
          </Box>
          <Box>
            <Image src="2" />
          </Box>
          <Box>
            <Image src="3" />
          </Box>
        </Slider>
      </div>
    );
  }
}
