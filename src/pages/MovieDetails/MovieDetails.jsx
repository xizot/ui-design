import React, { useEffect, useLayoutEffect, useState } from 'react';
import ModScoreItem from '../../components/ModScoreItem/ModScoreItem';
import { Grid } from '@mui/material';
import Section from '../../components/Section/Section';
import MovieInfoItem from '../../components/MovieInfoItem/MovieInfoItem';
import TotalScore from '../../components/TotalScore/TotalScore';
import { Paragraphy } from '../../GlobalElements';
import Actors from '../../components/Actors/Actors';
import Trailers from '../../components/Trailers/Trailers';
import { useParams } from 'react-router';
import { getDetailsById } from './MovieDetails.data';

function MovieDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [actors, setActors] = useState([]);
  const [trailers, setTrailers] = useState([]);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getMovieDetailHandler = async (id) => {
    try {
      const find = await getDetailsById(+id);
      if (find) {
        setDetails(find);
        setActors([...find.credits.cast, ...find.credits.crew]);
        setTrailers(find.videos.results);
      } else {
        setDetails({});
      }
    } catch (error) {
      alert('Đã có lỗi xảy ra');
    }
  };

  useEffect(() => {
    if (id) {
      getMovieDetailHandler(id);
    }
  }, [id]);
  return (
    <div>
      <Section title="Thông tin phim">
        <Grid container spacing={2}>
          <Grid item xs={6} md={2}>
            <div className="img-ratio2x3">
              <img src={details.poster_path} alt="movie image" />
            </div>
          </Grid>
          <Grid item xs={12} md={10}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <MovieInfoItem title="Tên phim" content={details.title} />
                <MovieInfoItem
                  title="Thời lượng"
                  content={`${details.runtime} phút`}
                />
                <MovieInfoItem
                  title="Thể loại"
                  content={details.genres?.map((item) => item.name)?.join(', ')}
                />
                <MovieInfoItem title="Trạng thái" content={details.status} />
                <MovieInfoItem
                  title="Năm sản xuất"
                  content={details.release_date}
                />
                <MovieInfoItem
                  title="Ngôn Ngữ"
                  content={details.spoken_languages
                    ?.map((item) => item.name)
                    ?.join(', ')}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TotalScore
                  score={details.vote_average}
                  review={details.vote_count}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Section>
      <Section title="Đánh giá từ kamflex">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={5}>
            <ModScoreItem title="Diễn xuất" score={1} />
            <ModScoreItem title="Nội dung" score={3} />
            <ModScoreItem title="Hình ảnh" score={2} />
            <ModScoreItem title="Âm thanh" score={4} />
            <ModScoreItem title="Kỹ xảo" score={5} />
            <ModScoreItem title="Tổng kết" score={4} />
          </Grid>
          <Grid item xs={12} md={7} className="col-7 col-sm-12">
            <Paragraphy variant="body1">
              Điểm trừ lớn nhất của phim chính là sự hư cấu và vô lý trong các
              tình tiết của phim. Mặc dù cốt truyện phim mới lạ thú vị nhưng
              nhiều sự việc trong Bản án từ đia ngục phải nói là quá điêu, nặng
              tính sắp đặt và hơi bị lố. Dẫu biết phim thuộc thể loại giả tưởng
              nhưng nhiều lúc xem mà cảm thấy lấn cấn và khó chịu lắm kìa các
              bạn, đơn giản bởi vì ngoài đời không ai làm như thế hết, đúng là
              chỉ có phim mới làm như vậy để tăng sự kịch tính mà thôi. Hạt sạn
              to bự này khiến phim trở nên mất điểm hẳn trong mắt người xem.
            </Paragraphy>
          </Grid>
        </Grid>
      </Section>
      <Section title="Nội dung phim">
        <Paragraphy variant="body1">{details.overview}</Paragraphy>
      </Section>

      {actors?.length > 0 && <Actors actors={actors} loading={false} />}
      {trailers?.length > 0 && <Trailers trailers={trailers} />}

      <section className="c-section p-reviews">
        <h3 className="c-section__title c-title">Đánh giá từ người xem</h3>
        <div className="c-section__content">
          <div className="p-reviews__login u-shadow-4">
            <p className="p-reviews__login__text c-paragraphy">
              Bạn chưa đăng nhập <br />
              Hãy đăng nhập để gửi đánh giá nhé
            </p>
            <button className="p-reviews__login__button c-btn c-btn--primary">
              Đăng nhập
            </button>
          </div>
          <div id="reviews" />
          <div className="p-reviews__paginate">
            <ul className="c-paginate u-center">
              <li className="c-paginate__prev c-paginate__item">
                <i className="bx bx-chevron-left" />
              </li>
              <li className="c-paginate__item selected c-paginate__num">1</li>
              <li className="c-paginate__item c-paginate__num">2</li>
              <li className="c-paginate__item c-paginate__num">3</li>
              <li className="c-paginate__item u-pe-none">...</li>
              <li className="c-paginate__item c-paginate__num">7</li>
              <li className="c-paginate__item c-paginate__num">8</li>
              <li className="c-paginate__next c-paginate__item">
                <i className="bx bx-chevron-right" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MovieDetails;
