import React from 'react';
import Slider from 'react-slick';
import ActorItem from '../ActorItem/ActorItem';
import ActorItemSkeleton from '../ActorItem/ActorItemSkeleton';
import NextArrow from '../NextArrow/NextArrow';
import PrevArrow from '../PrevArrow/PrevArrow';
import Section from '../Section/Section';

function Actors({ actors, loading = false }) {
  const slider = React.useRef(null);
  const newSettings = {
    infinite: actors?.length > 8 ? true : false,
    slidesToShow: actors?.length > 8 ? 1 : 8,
    slidesToScroll: actors?.length > 8 ? 1 : 8,
    variableWidth: actors?.length > 8 ? true : false,
    responsive: [
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
          slidesToScroll: 2,
          infinite: actors?.length >= 2 ? true : false,
        },
      },
    ],
  };

  return (
    <Section title="Diễn viên và doàn làm phim" loading={loading ? 1 : 0}>
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
          ? [0, 0, 0, 0, 0, 0, 0, 0, 0].map((_, i) => (
              <ActorItemSkeleton key={i} />
            ))
          : actors?.length > 0 &&
            actors.map((actor, i) => (
              <ActorItem
                key={i}
                imgSrc={actor.profile_path}
                name={actor.name}
                position={actor.known_for_department}
              />
            ))}
      </Slider>
    </Section>
  );
}

export default Actors;
