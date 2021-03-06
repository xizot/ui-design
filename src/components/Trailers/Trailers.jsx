import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import CustomModal from '../CustomModal/CustomModal';
import NextArrow from '../NextArrow/NextArrow';
import PrevArrow from '../PrevArrow/PrevArrow';
import Section from '../Section/Section';
import TrailerItem from '../TrailerItem/TrailerItem';
import ReactPlayer from 'react-player';
import { ReactPlayerContent, ReactPlayerWrapper } from './Trailers.elements';

const youtubeTemplate = 'https://www.youtube.com/watch?v=';
const vimeoTemplate = 'https://player.vimeo.com/video/';
function Trailers({ trailers, loading = false }) {
  const [openModal, setOpenModal] = useState(false);
  const [url, setUrl] = useState('');
  const [isYoutube, setIsYoutube] = useState(false);

  const openModalHandler = (trailer) => {
    if (trailer) {
      if (trailer.site.toLowerCase() === 'youtube') {
        setUrl(youtubeTemplate + trailer.key);
      } else {
        setUrl(vimeoTemplate + trailer.key);
      }
      setOpenModal(true);
    }
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };
  const slider = React.useRef(null);
  const newSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };
  useEffect(() => {
    if (trailers?.length > 0 && trailers[0].site.toLowerCase() === 'youtube') {
      setIsYoutube(true);
    }
  }, [trailers]);
  return (
    <>
      <CustomModal open={openModal} onClose={closeModalHandler}>
        <ReactPlayerWrapper>
          <ReactPlayerContent>
            <ReactPlayer
              url={url}
              height="100%"
              width="100%"
              className="react-player"
              controls
              playing
            />
          </ReactPlayerContent>
        </ReactPlayerWrapper>
      </CustomModal>
      <Section title="Video" loading={loading ? 1 : 0}>
        <PrevArrow
          prev={'-20px'}
          prevmb={'-15px'}
          onClick={() => slider?.current?.slickPrev()}
          loading={loading ? 1 : 0}
        />
        <NextArrow
          next={'-20px'}
          nextmb={'-15px'}
          onClick={() => slider?.current?.slickNext()}
          loading={loading ? 1 : 0}
        />
        <Slider {...newSettings} ref={slider} className="movie-slider">
          {loading
            ? [0, 0, 0, 0].map((_, i) => (
                <TrailerItem key={i} loading={loading ? 1 : 0} />
              ))
            : trailers?.length > 0 &&
              trailers.map((trailer, i) => (
                <TrailerItem
                  key={i}
                  index={i + 1}
                  loading={loading ? 1 : 0}
                  imgSrc={
                    isYoutube &&
                    `https://img.youtube.com/vi/${trailer.key}/hqdefault.jpg`
                  }
                  onOpenModal={() => openModalHandler(trailer)}
                />
              ))}
        </Slider>
      </Section>
    </>
  );
}

export default Trailers;
