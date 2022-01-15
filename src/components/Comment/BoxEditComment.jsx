import { Button, TextField, styled, Rating, Box } from '@mui/material';
import { defaultPadding, theme } from '../../GlobalMUI';

import StarIcon from '@mui/icons-material/Star';
import React, { useEffect, useState } from 'react';
import { CommentActions, CommentContainer } from './Comment.element';

const labels = {
  0.5: '1/10',
  1: '2/10',
  1.5: '3/10',
  2: '4/10',
  2.5: '5/10',
  3: '6/10',
  3.5: '7/10',
  4: '8/10',
  4.5: '9/10',
  5: '10/10',
};

function BoxComment() {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const [isEdit, setIsEdit] = useState(true);

  const toggleEdit = () => {
    setIsEdit((prev) => !prev);
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
        sx={{ outline: 'none' }}
        InputProps={{
          readOnly: !isEdit,
        }}
      />
      <CommentActions>
        <Button
          className="button-child"
          variant="contained"
          color="error"
          style={{ marginRight: '5px' }}>
          Xóa
        </Button>
        <Button
          className="button-child"
          variant="contained"
          color="primary"
          onClick={toggleEdit}>
          Chỉnh sửa
        </Button>
      </CommentActions>
    </CommentContainer>
  );
}
export default BoxComment;
