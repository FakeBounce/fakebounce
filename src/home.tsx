import { Button, Container, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import React from 'react';

const Home: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container className="main-content-container">
      <div className="App">
        <header className="App-header">
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
          </Button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Container>
  );
};

export default Home;
