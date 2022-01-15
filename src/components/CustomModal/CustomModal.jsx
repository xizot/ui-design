import { Fade, Modal, Box, Backdrop } from '@mui/material';

import * as React from 'react';
import { theme } from '../../GlobalMUI';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  outline: 'none',
  maxWidth: `calc(100% - ${theme.spacing(2)})`,
};

function CustomModal({ children, open, onClose }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={open}>
        <Box sx={style}>{children}</Box>
      </Fade>
    </Modal>
  );
}
export default CustomModal;
