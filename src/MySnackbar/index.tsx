import React from 'react';
import {Alert, Snackbar, Stack} from "@mui/material";

interface ISbProps {
  open: boolean,
  isSuccess: boolean
}

function MySnackbar({open, isSuccess}: ISbProps) {
  return (
    <Snackbar open={open} autoHideDuration={10000}>
      <Alert severity={ isSuccess? 'success' : 'error' } sx={{ width: '100%' }}>
        {isSuccess? 'Обгон возможен! :)' : 'Обгон не возможен :с'}
      </Alert>
    </Snackbar>
  );
}

export default MySnackbar;