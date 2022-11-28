import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "../images/abuyz/media-1.gif";
import Image2 from "../images/abuyz/media-2.gif";
import Image3 from "../images/abuyz/media-3.gif";
import Image4 from "../images/abuyz/media-4.gif";
import Image5 from "../images/abuyz/media-5.gif";
import Image6 from "../images/abuyz/media-6.gif";
import Image7 from "../images/abuyz/media-7.gif";
import Image8 from "../images/abuyz/media-8.gif";
import Image9 from "../images/abuyz/media-9.gif";
import Image10 from "../images/abuyz/media-10.gif";
import Image11 from "../images/abuyz/media-11.gif";
import Image12 from "../images/abuyz/media-12.gif";
import Image13 from "../images/abuyz/media-13.gif";
import Image14 from "../images/abuyz/media-14.gif";

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
          <Box>
            <Image src={Image9} />
          </Box>
          <Box>
            <Image src={Image10} />
          </Box>
          <Box>
            <Image src={Image11} />
          </Box>
          <Box>
            <Image src={Image12} />
          </Box>
          <Box>
            <Image src={Image13} />
          </Box>
          <Box>
            <Image src={Image14} />
          </Box>
        </Slider>
      </div>
    );
  }
}
