import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "../images/tmdb/media-1.png";
import Image2 from "../images/tmdb/media-2.png";
import Image3 from "../images/tmdb/media-3.png";
import Image4 from "../images/tmdb/media-4.png";
import Image5 from "../images/tmdb/media-5.png";
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

export default class TmdbSlider extends Component {
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
        </Slider>
      </div>
    );
  }
}
