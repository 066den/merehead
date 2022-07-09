import React, { FC } from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

interface ModalUserDeleteProps {
  open: boolean;
  handleClose: () => void;
  handleUserDelete: () => void;
}

const ModalUserDelete: FC<ModalUserDeleteProps> = ({
  open,
  handleClose,
  handleUserDelete,
}) => {
  return (
    <>
      <Dialog open={open} fullWidth onClose={handleClose}>
        <DialogTitle>Delete user?</DialogTitle>
        <DialogContent>
          If you click the "DELETE" button, you won't get it back
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUserDelete}>Delete</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalUserDelete;
