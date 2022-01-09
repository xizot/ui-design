import React, { useEffect, useLayoutEffect, useState } from 'react';
import ModScoreItem from '../../components/ModScoreItem/ModScoreItem';
import { Grid, Typography } from '@mui/material';
import Section from '../../components/Section/Section';
import MovieInfoItem from '../../components/MovieInfoItem/MovieInfoItem';
import TotalScore from '../../components/TotalScore/TotalScore';
import { Paragraphy } from '../../GlobalElements';
import Actors from '../../components/Actors/Actors';
import Trailers from '../../components/Trailers/Trailers';
import { actors } from '../../components/Actors/Actors.data';
import { useParams } from 'react-router';
import { getDetailsById } from './MovieDetails.data';

function MovieDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (id) {
      const find = getDetailsById(+id);
      console.log(find);
      if (find) {
        setDetails(find);
      } else {
        setDetails({});
      }
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
        <Grid container spacing={2}>
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
              ”Trong một thế giới của hai thực tại-cuộc sống hàng ngày và những
              gì ẩn chứa đằng sau nó-Thomas Anderson sẽ phải lựa chọn đi theo
              con thỏ trắng một lần nữa. Sự lựa chọn, trong khi chỉ là ảo ảnh,
              vẫn là cách duy nhất để vào hoặc ra khỏi Ma trận, mạnh hơn, an
              toàn hơn, và nguy hiểm hơn bao giờ hết.”
              <br />
              <br /> The Matrix Resurrections sẽ chứng kiến ​​Keanu Reeves và
              Carrie-Anne Moss trở lại trong vai Neo và Trinity-Neo đang sống
              một cuộc sống dường như bình thường ở San Francisco với vai Thomas
              Anderson. Anh ta đang được bác sĩ trị liệu kê cho những viên thuốc
              màu xanh lam và dường như không nhận ra Trinity khi họ va vào
              nhau. Jada Pinkett-Smith cũng sẽ trở lại với vai Niobe, trong khi
              Lambert Wilson sẽ đóng lại vai The Merovingian và Daniel Bernhardt
              trở lại với vai Đặc vụ Johnson. Lana Wachowski, người đồng đạo
              diễn bộ ba Ma trận gốc với chị gái Lilly, trở lại với tư cách đạo
              diễn, cũng như đồng sáng tác và đồng sản xuất bộ phim (mặc dù lần
              này Lilly không tham gia). Trong khi đó, những sự bổ sung mới cho
              dàn diễn viên của nhượng quyền thương mại bao gồm Yahya
              Abdul-Mateen II trong vai Morpheus, Jessica Henwick, Neil Patrick
              Harris và Priyanka Chopra.
            </Paragraphy>
          </Grid>
        </Grid>
      </Section>
      <Section title="Nội dung phim">
        <Paragraphy variant="body1">{details.overview}</Paragraphy>
      </Section>
      <Actors actors={actors} loading={false} />
      <Trailers trailers={[0, 0, 0, 0, 0, 0, 0, 0]} />
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
