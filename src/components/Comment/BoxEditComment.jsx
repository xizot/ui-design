import { Button, TextField, Rating, Box, Typography } from '@mui/material';

import StarIcon from '@mui/icons-material/Star';
import React, { useCallback, useEffect, useState } from 'react';
import {
  CommentActions,
  CommentContainer,
  ModalConfirmActions,
  ModalConfirmWrapper,
} from './Comment.element';
import { useDispatch, useSelector } from 'react-redux';
import { ratedActions } from '../../redux/actions/rated.action';
import CustomModal from '../CustomModal/CustomModal';
import { defaultPadding } from '../../GlobalMUI';
import { toast } from 'react-toastify';
import { labels } from '../../ultis/reusable';

function BoxEditComment({ id }) {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const [isEdit, setIsEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [comment, setComment] = useState('');
  const [rated, setRated] = useState({});
  const listRated = useSelector((state) => state.rated.data);
  const dispatch = useDispatch();

  const getRatedHandler = useCallback((id, listRated) => {
    var currentRated = listRated.find((rate) => +rate.id === +id);
    if (currentRated) {
      setValue(currentRated.score || 10);
      setComment(currentRated.comment);
    }
    setRated(currentRated || {});
  }, []);
  const toggleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const deleteRatedHandler = () => {
    dispatch(ratedActions.deleteRated(+id));
    closeModalDeleteHandler();
    toast.success('Xóa thành công', { autoClose: 1000 });
  };

  const openModalDeleteHandler = () => {
    setOpenModalDelete(true);
  };
  const closeModalDeleteHandler = () => {
    setOpenModalDelete(false);
  };

  const editRatedHandler = () => {
    dispatch(
      ratedActions.editRated({
        id: +id,
        comment,
        score: +value,
      })
    );
    setIsEdit(false);
    toast.success('Chỉnh sửa thành công', { autoClose: 1000 });
  };

  const commentChangeHandler = (e) => {
    setComment(e.target.value);
  };
  const onKeyPressHandler = (e) => {
    if (e.charCode === 13) {
      editRatedHandler();
    }
  };
  const resetCommentHandler = () => {
    setComment(rated.comment);
    setValue(rated.score);
    setIsEdit(false);
  };

  useEffect(() => {
    getRatedHandler(id, listRated);
  }, [id, listRated, getRatedHandler]);

  return (
    <CommentContainer sx={{ background: '#D6DCE1' }}>
      <CustomModal open={openModalDelete} onClose={closeModalDeleteHandler}>
        <ModalConfirmWrapper>
          <Typography
            textAlign="center"
            variant="h5"
            sx={{ marginBottom: 3, fontSize: { xs: 18, md: 20 } }}>
            Bạn chắc chắn xóa bình luận này?
          </Typography>
          <ModalConfirmActions>
            <Button
              variant="contained"
              sx={{ minWidth: 100, marginRight: defaultPadding }}
              color="error"
              onClick={deleteRatedHandler}>
              Xóa
            </Button>
            <Button
              color="primary"
              variant="outlined"
              sx={{ minWidth: 100 }}
              onClick={closeModalDeleteHandler}>
              Hủy
            </Button>
          </ModalConfirmActions>
        </ModalConfirmWrapper>
      </CustomModal>
      <Box
        marginBottom={1}
        sx={{
          width: 200,
          display: 'flex',
          alignItems: 'center',
        }}>
        {isEdit ? (
          <>
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
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </>
        ) : (
          <>
            <Rating
              value={value}
              precision={0.5}
              name="disabled"
              disabled
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </>
        )}
      </Box>
      <TextField
        multiline
        rows={3}
        fullWidth
        value={comment}
        onKeyPress={onKeyPressHandler}
        onChange={commentChangeHandler}
        sx={{ outline: 'none' }}
        InputProps={{
          readOnly: !isEdit,
        }}
      />
      <CommentActions>
        {!isEdit ? (
          <>
            <Button
              className="button-child"
              variant="contained"
              color="error"
              style={{ marginRight: '5px', minWidth: 100 }}
              onClick={openModalDeleteHandler}>
              Xóa
            </Button>
            <Button
              className="button-child"
              variant="contained"
              color="primary"
              style={{ minWidth: 100 }}
              onClick={toggleEdit}>
              Chỉnh sửa
            </Button>
          </>
        ) : (
          <>
            <Button
              className="button-child"
              variant="contained"
              color="error"
              style={{ minWidth: 100, marginRight: '5px' }}
              onClick={resetCommentHandler}>
              Hủy bỏ
            </Button>
            <Button
              className="button-child"
              variant="contained"
              color="primary"
              style={{ minWidth: 100 }}
              onClick={editRatedHandler}>
              Gửi
            </Button>
          </>
        )}
      </CommentActions>
    </CommentContainer>
  );
}
export default BoxEditComment;
