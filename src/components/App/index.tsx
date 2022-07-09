import { CssBaseline } from '@mui/material';
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store';
import AppLayout from '../AppLayout';
import AppRouter from '../AppRouter';

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename='/'>
        <CssBaseline />
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
