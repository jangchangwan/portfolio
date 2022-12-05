import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "../images/chuanione/media-1.gif";
import Image2 from "../images/chuanione/media-2.gif";
import Image3 from "../images/chuanione/media-3.gif";
import Image4 from "../images/chuanione/media-4.gif";
import Image5 from "../images/chuanione/media-5.gif";
import Image6 from "../images/chuanione/media-6.gif";
import Image7 from "../images/chuanione/media-7.gif";
import Image8 from "../images/chuanione/media-8.gif";

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
`;

export default class ChuAniOneSlider extends Component {
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
          <Box>
            <Image src={Image7} />
          </Box>
          <Box>
            <Image src={Image8} />
          </Box>
        </Slider>
      </div>
    );
  }
}
