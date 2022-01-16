import React, { useEffect, useLayoutEffect, useState } from 'react';
import ModScoreItem from '../../components/ModScoreItem/ModScoreItem';
import { Grid, Pagination, Skeleton } from '@mui/material';
import Section from '../../components/Section/Section';
import MovieInfoItem from '../../components/MovieInfoItem/MovieInfoItem';
import TotalScore from '../../components/TotalScore/TotalScore';
import { Paragraphy } from '../../GlobalElements';
import Actors from '../../components/Actors/Actors';
import Trailers from '../../components/Trailers/Trailers';
import { Navigate, useParams } from 'react-router';
import { getDetailsById, getFakeReview } from './MovieDetails.data';
import BoxLogin from '../../components/BoxLogin/BoxLogin';
import { ImageOverlay, PaginationWapper } from './MovieDetails.elements';
import Comment from '../../components/Comment/Comment';
import { useSelector } from 'react-redux';
import BoxEditComment from '../../components/Comment/BoxEditComment';
import BoxWriteComment from '../../components/Comment/BoxWriteComment';
function MovieDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [actors, setActors] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [error, setError] = useState(false);
  const [review, setReview] = useState([]);
  const rated = useSelector((state) => state.rated.data);
  const [hasComment, setHasComment] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const getMovieDetailHandler = async (id) => {
    try {
      setError(false);
      setLoading(true);
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
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      getMovieDetailHandler(id);
    }
    setReview(getFakeReview());
  }, [id]);

  useEffect(() => {
    if (rated.find((rate) => +rate.id === +id)) {
      setHasComment(true);
    } else {
      setHasComment(false);
    }
  }, [rated, id]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (error) return <Navigate to="/" />;
  return (
    <div>
      <Section title="Thông tin phim" loading={loading ? 1 : 0}>
        {!loading && <ImageOverlay src={details.backdrop_path} alt="" />}
        <Grid container spacing={2}>
          <Grid item xs={6} md={2}>
            <div className="img-ratio2x3">
              {loading ? (
                <Skeleton variant="rectangular" className="img" />
              ) : (
                <img src={details.poster_path} alt="movie" />
              )}
            </div>
          </Grid>
          <Grid item xs={12} md={10}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                {loading ? (
                  <>
                    <MovieInfoItem loading={loading ? 1 : 0} />
                    <MovieInfoItem loading={loading ? 1 : 0} />
                    <MovieInfoItem loading={loading ? 1 : 0} />
                    <MovieInfoItem loading={loading ? 1 : 0} />
                    <MovieInfoItem loading={loading ? 1 : 0} />
                    <MovieInfoItem loading={loading ? 1 : 0} />
                  </>
                ) : (
                  <>
                    <MovieInfoItem
                      title="Tên phim"
                      content={details.title}
                      hideTitle={1}
                      size="large"
                      color="#7C4D4A"
                    />

                    <MovieInfoItem
                      title="Thời lượng"
                      content={`${details.runtime} phút`}
                    />
                    <MovieInfoItem
                      title="Thể loại"
                      content={details.genres
                        ?.map((item) => item.name)
                        ?.join(', ')}
                    />
                    <MovieInfoItem
                      title="Trạng thái"
                      content={details.status}
                    />
                    <MovieInfoItem
                      title="Năm sản xuất"
                      content={details.release_date?.slice(0, 4)}
                    />
                    <MovieInfoItem
                      title="Ngôn Ngữ"
                      content={details.spoken_languages
                        ?.map((item) => item.name)
                        ?.join(', ')}
                    />
                  </>
                )}
              </Grid>
              <Grid item xs={12} md={4}>
                <TotalScore
                  loading={loading ? 1 : 0}
                  score={details.vote_average}
                  review={details.vote_count}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Section>
      <Section title="Đánh giá từ kamflex" loading={loading ? 1 : 0}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            {loading ? (
              <>
                <MovieInfoItem loading={loading ? 1 : 0} />
                <MovieInfoItem loading={loading ? 1 : 0} />
                <MovieInfoItem loading={loading ? 1 : 0} />
                <MovieInfoItem loading={loading ? 1 : 0} />
                <MovieInfoItem loading={loading ? 1 : 0} />
                <MovieInfoItem loading={loading ? 1 : 0} />
              </>
            ) : (
              <>
                <ModScoreItem title="Diễn xuất" score={1} />
                <ModScoreItem title="Nội dung" score={3} />
                <ModScoreItem title="Hình ảnh" score={2} />
                <ModScoreItem title="Âm thanh" score={4} />
                <ModScoreItem title="Kỹ xảo" score={5} />
                <ModScoreItem title="Tổng kết" score={4} />
              </>
            )}
          </Grid>
          <Grid item xs={12} md={7} className="col-7 col-sm-12">
            {loading ? (
              <>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
              </>
            ) : (
              <Paragraphy variant="body1">
                Điểm trừ lớn nhất của phim chính là sự hư cấu và vô lý trong các
                tình tiết của phim. Mặc dù cốt truyện phim mới lạ thú vị nhưng
                nhiều sự việc trong Bản án từ đia ngục phải nói là quá điêu,
                nặng tính sắp đặt và hơi bị lố. Dẫu biết phim thuộc thể loại giả
                tưởng nhưng nhiều lúc xem mà cảm thấy lấn cấn và khó chịu lắm
                kìa các bạn, đơn giản bởi vì ngoài đời không ai làm như thế hết,
                đúng là chỉ có phim mới làm như vậy để tăng sự kịch tính mà
                thôi. Hạt sạn to bự này khiến phim trở nên mất điểm hẳn trong
                mắt người xem.
              </Paragraphy>
            )}
          </Grid>
        </Grid>
      </Section>
      <Section title="Nội dung phim" loading={loading ? 1 : 0}>
        {loading ? (
          <>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </>
        ) : (
          <Paragraphy variant="body1">{details.overview}</Paragraphy>
        )}
      </Section>

      {loading ? (
        <>
          <Actors loading={loading ? 1 : 0} />
          <Trailers loading={loading ? 1 : 0} />
        </>
      ) : (
        <>
          {actors?.length > 0 && <Actors actors={actors} />}
          {trailers?.length > 0 && <Trailers trailers={trailers} />}
        </>
      )}
      <Section title="Đánh giá từ người xem" loading={loading ? 1 : 0}>
        {isAuthenticated ? (
          hasComment ? (
            <BoxEditComment id={id} />
          ) : (
            <BoxWriteComment id={id} />
          )
        ) : (
          <BoxLogin id={id} />
        )}

        <div>
          {review.map((item, i) => (
            <Comment
              key={i}
              score={item.score}
              name={item.name}
              img={item.img}
              review={item.review}
              numberDislike={item.numberDislike}
              numberLike={item.numberLike}
            />
          ))}
        </div>
        <PaginationWapper>
          <Pagination count={10} shape="rounded" color="primary" />
        </PaginationWapper>
      </Section>
    </div>
  );
}

export default MovieDetails;
