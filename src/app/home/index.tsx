import { Button, Flex, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import PageDescriptionBox from './PageDescriptionBox'; // Import the new component
import React from 'react';

const Home: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = colorMode === 'light';

  return (
    <Flex justifyContent="center" alignItems="center" h="100vh">
      <Button onClick={toggleColorMode} position="absolute" top="1rem" right="1rem">
        {isLightMode ? <SunIcon /> : <MoonIcon />}
      </Button>

      <Flex maxW="800px" w="full" p="4" flexDirection={['column', 'row']}>
        {/* First Column */}
        <Flex flexDirection="column" flex="1" mr={['0', '4']} mb={['4', '0']}>
          {/* CV */}
          <PageDescriptionBox
            title="Title 1"
            text="Some text for Box 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            navigationUrl="/cv"
          />
          {/* Contact */}
          <PageDescriptionBox
            title="Title 2"
            text="Some text for Box 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            navigationUrl="/contact"
          />
        </Flex>

        {/* Second Column */}
        <Flex flexDirection="column" flex="1" ml={['0', '4']}>
          {/* Passions */}
          <PageDescriptionBox
            title="Title 3"
            text="Some text for Box 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            navigationUrl="/passions"
          />
          {/* Others */}
          <PageDescriptionBox
            title="Title 4"
            text="Some text for Box 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            navigationUrl="/autres"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
