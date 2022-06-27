import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) =>{

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return(
    <div>
      <Carousel { ...settings }>
      <Wrap>
        <a>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1211905C6F5DEAD5C0C75B1A57F38D102F892DAAA69C28464A882CC1970827E5/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2DB5F6CF7163036A8763318E24404882A6E4A1AC3E2BA75B7C0D53A7E372D180/compose?width=1440&aspectRatio=3.91&format=jpeg&label=391_scrim" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-scale.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1C8C16E4E135142F96B95E7E2C77DBD24CC7C500E45C3AB7BCA674FEFF3164FB/compose?width=1440&aspectRatio=3.91&format=jpeg&label=391_scrim" alt="" />
        </a>
      </Wrap>

      
      </Carousel>
    </div>
  )
}

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;