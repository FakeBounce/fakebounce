import './App.css';

import { About, CV, Home, Other } from './pages';
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
          <Route path="/about" element={<About />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="/autre" element={<Other />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
