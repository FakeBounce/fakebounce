import { Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import React from 'react';

const ThemeChanger: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = colorMode === 'light';

  return (
    <Button onClick={toggleColorMode} position="fixed" top="1rem" right="4">
      {isLightMode ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ThemeChanger;
