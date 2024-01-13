import { Button, Flex, Image, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import Greeting from './Greeting';
import HomeContentBoxes from './HomeContentBoxes';
import React from 'react';

const Home: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = colorMode === 'light';

  return (
    <Flex flexDirection="column" alignItems="center" minH="100vh">
      <Button onClick={toggleColorMode} position="fixed" top="1rem" right="1rem" zIndex="9999">
        {isLightMode ? <SunIcon /> : <MoonIcon />}
      </Button>

      <Flex
        maxW="800px"
        w="full"
        p="4"
        flexDirection="column"
        alignItems="center"
        mx={['auto', 'auto', '0']} // Center horizontally only for desktop
        my={['auto', 'auto', 'auto']} // Center vertically only for desktop
      >
        <Image
          src={'/dev.png'}
          alt="Bearded Developer coding"
          mb={['2', '0']}
          boxSize={['200px', 'auto']} // Adjust boxSize for mobile and desktop
          borderRadius="md"
          display={['block', 'none']} // Show on mobile, hide on desktop
        />

        {/* Greeting */}
        <Greeting />

        {/* Boxes with content to redirect to */}
        <HomeContentBoxes />
      </Flex>
    </Flex>
  );
};

export default Home;
