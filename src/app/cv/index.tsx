import { Button, Flex, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import React from 'react';

const CV: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = colorMode === 'light';

  return <Flex justifyContent="center" alignItems="center" h="100vh"></Flex>;
};

export default CV;
