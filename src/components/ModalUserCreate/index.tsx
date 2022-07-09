import React, { FC, useState } from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

import UserCreateForm from '../UserCreateForm';
import { IUser } from '../../types/user';
import { FormikHelpers } from 'formik';
import { actionCreators } from '../../store/reducers/action-creators';
import { apiRequests } from '../../apiRequests';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';

interface ModalUserCreateProps {}

const ModalUserCreate: FC<ModalUserCreateProps> = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useTypedDispatch();

  const submit = (values: IUser, helpers: FormikHelpers<IUser>) => {
    apiRequests
      .createUserFromApi(values)
      .then(res => dispatch(actionCreators.fethUsers()));
    helpers.resetForm();
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Button variant='outlined' onClick={handleOpen} sx={{ mb: 3 }}>
        Add a new user
      </Button>
      <Dialog open={open} fullWidth onClose={handleClose}>
        <DialogTitle>Create a new user</DialogTitle>
        <DialogContent>
          <UserCreateForm submit={submit} button='create' />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalUserCreate;
