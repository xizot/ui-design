import { Button, TextField, Rating, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import React, { useState } from 'react';
import { CommentActions, CommentContainer } from './Comment.element';
import { useDispatch } from 'react-redux';
import { ratedActions } from '../../redux/actions/rated.action';
import { toast } from 'react-toastify';
import { labels } from '../../ultis/reusable';

function BoxWriteComment({ id }) {
  const [value, setValue] = useState(5);
  const [hover, setHover] = useState(-1);
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const commentChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const resetCommentHandler = () => {
    setComment('');
    setValue(5);
  };

  const submitRatedHandler = () => {
    dispatch(
      ratedActions.postRated({
        id: +id,
        comment,
        score: +value,
      })
    );
    toast.success('Đã gửi bình luận ', { autoClose: 1000 });
  };

  const onKeyPressHandler = (e) => {
    if (e.charCode === 13) {
      submitRatedHandler();
    }
  };
  return (
    <CommentContainer>
      <Box
        marginBottom={1}
        sx={{
          width: 200,
          display: 'flex',
          alignItems: 'center',
        }}>
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>
      <TextField
        multiline
        rows={3}
        fullWidth
        placeholder="Nhập bình luận của bạn (Không bắt buộc)"
        value={comment}
        onKeyPress={onKeyPressHandler}
        onChange={commentChangeHandler}
      />
      <CommentActions>
        <Button
          className="button-child"
          variant="contained"
          color="error"
          style={{ minWidth: 100, marginRight: '5px' }}
          disabled={!comment.length}
          onClick={resetCommentHandler}>
          Hủy bỏ
        </Button>
        <Button
          className="button-child"
          variant="contained"
          color="primary"
          style={{ minWidth: 100 }}
          onClick={submitRatedHandler}>
          Gửi
        </Button>
      </CommentActions>
    </CommentContainer>
  );
}
export default BoxWriteComment;
