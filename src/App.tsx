import './App.css';

import { Route, Routes } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';
import { Home } from './pages';
import React from 'react';
import theme from './chakra/theme';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
