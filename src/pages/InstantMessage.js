import React, {useState, forwardRef} from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="outlined" {...props} />;
});

const InstantMessage = ({message, status}) =>  {
    
        const [open, setOpen] = useState(true); 
        const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
              return;
            }       
            setOpen(false);
          };

    return (
        <Snackbar style={{ zIndex: '4'}} open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert style={{ zIndex: '6'}}  onClose={handleClose} severity={status}>{message}</Alert>
      </Snackbar>
    )
}

export default InstantMessage