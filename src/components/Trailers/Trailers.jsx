import React, { useEffect } from 'react';
import Slider from 'react-slick';
import CustomModal from '../CustomModal/CustomModal';
import NextArrow from '../NextArrow/NextArrow';
import PrevArrow from '../PrevArrow/PrevArrow';
import Section from '../Section/Section';
import TrailerItem from '../TrailerItem/TrailerItem';
import ReactPlayer from 'react-player';
import { ReactPlayerWrapper } from './Trailers.elements';
let player = null;
const youtubeTemplate = 'https://www.youtube.com/watch?v=';
const vimeoTemplate = 'https://player.vimeo.com/video/';
function Trailers({ trailers, loading = false }) {
  const [openModal, setOpenModal] = React.useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };
  const slider = React.useRef(null);
  const newSettings = {
    dots: false,
    infinite: trailers.length >= 3 ? true : false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: trailers.length >= 2 ? true : false,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: trailers.length >= 1 ? true : false,
        },
      },
    ],
  };

  return (
    <>
      <CustomModal open={openModal} onClose={closeModalHandler}>
        <ReactPlayerWrapper>
          <ReactPlayer
            url={vimeoTemplate + '284666413'}
            height="100%"
            width="100%"
            className="react-player"
            controls
          />
        </ReactPlayerWrapper>
      </CustomModal>
      <Section title="Video">
        <PrevArrow
          prev={'-20px'}
          prevmb={'-15px'}
          onClick={() => slider?.current?.slickPrev()}
        />
        <NextArrow
          next={'-20px'}
          nextmb={'-15px'}
          onClick={() => slider?.current?.slickNext()}
        />
        <Slider {...newSettings} ref={slider} className="movie-slider">
          {[0, 0, 0, 0, 0, 0].map((_, i) => (
            <TrailerItem
              key={i}
              loading={true}
              onOpenModal={openModalHandler}
            />
          ))}
        </Slider>
      </Section>
    </>
  );
}

export default Trailers;
