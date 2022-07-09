import React, { FC, useEffect } from 'react';

import * as yup from 'yup';
import { Button, Stack, TextField } from '@mui/material';

import { IUser } from '../../types/user';

import { FormikHelpers, useFormik } from 'formik';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  surname: yup.string().required('Surname is required'),
  desc: yup.string(),
});

interface UserCreateFormProps {
  submit: (values: IUser, helpers: FormikHelpers<IUser>) => void;
  button?: string;
  user?: any;
}

const fields: IUser = {
  name: '',
  surname: '',
  desc: '',
};

const UserCreateForm: FC<UserCreateFormProps> = ({ submit, button, user }) => {
  const formik = useFormik({
    initialValues: fields,
    validationSchema: validationSchema,
    onSubmit: submit,
  });

  useEffect(() => {
    if (user) {
      const { name, surname, desc } = user;
      formik.setValues({ name, surname, desc });
    }
  }, [user]);

  return (
    <Stack component='form' onSubmit={formik.handleSubmit} spacing={2}>
      <TextField
        fullWidth
        {...formik.getFieldProps('name')}
        label='Name'
        margin='dense'
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        fullWidth
        {...formik.getFieldProps('surname')}
        label='Surname'
        error={formik.touched.surname && Boolean(formik.errors.surname)}
        helperText={formik.touched.surname && formik.errors.surname}
      />
      <TextField
        fullWidth
        {...formik.getFieldProps('desc')}
        label='Description'
        multiline
        rows={4}
        error={formik.touched.desc && Boolean(formik.errors.desc)}
        helperText={formik.touched.desc && formik.errors.desc}
      />
      <Button type='submit' variant='contained'>
        {button}
      </Button>
    </Stack>
  );
};

export default UserCreateForm;
