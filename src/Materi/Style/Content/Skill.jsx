import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './content.scss'
import img1 from '../../../Images/carousel/img1.jpeg'
import img2 from '../../../Images/carousel/img2.jpeg'
import img3 from '../../../Images/carousel/img3.jpeg'
import img4 from '../../../Images/carousel/img4.jpeg'
import img5 from '../../../Images/carousel/img5.jpeg'
import img6 from '../../../Images/carousel/img6.jpeg'
import img7 from '../../../Images/carousel/img7.jpeg'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <div className="skill">

      <p>- Laporan Bounty -</p>
      <Slider className='slider' {...settings}>
        <div>
          <img src={img1} alt="Slide 1" />
        </div>
        <div>
          <img src={img2} alt="Slide 2" />
        </div>
        <div>
          <img src={img3} alt="Slide 3" />
        </div>
        <div>
          <img src={img4} alt="Slide 3" />
        </div>
        <div>
          <img src={img5} alt="Slide 3" />
        </div>
        <div>
          <img src={img6} alt="Slide 3" />
        </div>
        <div>
          <img src={img7} alt="Slide 3" />
        </div>
      </Slider>
      </div>
    </div>
  );
};

export default Carousel;
