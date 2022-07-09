import React, { FC, useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import { Button, Paper, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import UserCreateForm from '../../components/UserCreateForm';
import { IUser } from '../../types/user';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import { actionCreators } from '../../store/reducers/action-creators';
import { apiRequests } from '../../apiRequests';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const UserPage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleNavigate = useCallback(() => {
    navigate('/users');
  }, []);

  const dispatch = useTypedDispatch();

  const { user } = useTypedSelector(state => state.users);

  const submit = (values: IUser, helpers: FormikHelpers<IUser>) => {
    apiRequests
      .editUserFromApi(values, Number(id))
      .then(res => dispatch(actionCreators.fethUser(Number(id))));
  };

  useEffect(() => {
    dispatch(actionCreators.fethUser(Number(id)));
  }, []);

  return (
    <Box>
      <Button
        variant='outlined'
        startIcon={<ArrowBackIcon />}
        onClick={handleNavigate}
      >
        Back to users
      </Button>
      <Paper sx={{ p: 3 }}>
        <UserCreateForm submit={submit} button='Edit' user={user} />
      </Paper>
    </Box>
  );
};

export default UserPage;
