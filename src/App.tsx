import './App.css';

import { Route, Routes } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';
import { Home } from './pages';
import Layout from './components/nav/layout';
import React from 'react';
import theme from './chakra/theme';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route element={<Layout withSidebar />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
};

export default App;
