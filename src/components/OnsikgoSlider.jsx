import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "../images/onsikgo/media-1.gif";
import Image2 from "../images/onsikgo/media-2.gif";
import Image3 from "../images/onsikgo/media-3.gif";
import Image4 from "../images/onsikgo/media-4.gif";
import Image5 from "../images/onsikgo/media-5.gif";
import Image6 from "../images/onsikgo/media-6.gif";

const Image = styled.img`
  height: 35rem;
  width: 15rem;
  object-fit: cover;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default class OnsikgoSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <Box>
            <Image src={Image1} />
          </Box>
          <Box>
            <Image src={Image2} />
          </Box>
          <Box>
            <Image src={Image3} />
          </Box>
          <Box>
            <Image src={Image4} />
          </Box>
          <Box>
            <Image src={Image5} />
          </Box>
          <Box>
            <Image src={Image6} />
          </Box>
        </Slider>
      </div>
    );
  }
}
