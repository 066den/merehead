import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFoundPage from '../../pages/NotFoundPage';
import UserPage from '../../pages/UserPage';
import UsersPage from '../../pages/UsersPage';

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/users' />} />
      <Route path='/users' element={<UsersPage />} />
      <Route path='/user/:id' element={<UserPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
