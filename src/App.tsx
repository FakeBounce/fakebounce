import './App.css';

import { CV, Home } from './pages';
import { Route, Routes } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';
import ErrorPage from './components/ErrorPage';
import Layout from './components/nav/layout';
import React from 'react';
import theme from './chakra/theme';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route element={<Layout withSidebar />}>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
};

export default App;
