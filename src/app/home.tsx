import { Box, Button, Flex, Text, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import React from 'react';

const Home: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex justifyContent="center" alignItems="center" h="100vh">
      <Button onClick={toggleColorMode} position="absolute" top="1rem" right="1rem">
        {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
      </Button>

      <Flex
        maxW="800px"
        w="full"
        p="4"
        boxShadow="md"
        borderRadius="md"
        flexDirection={['column', 'row']}
      >
        {/* First Column */}
        <Flex flexDirection="column" flex="1" mr={['0', '4']} mb={['4', '0']}>
          {/* Box 1 */}
          <Box border="1px solid" p="4" mb="4">
            <Text fontSize="xl" fontWeight="bold">
              Title 1
            </Text>
            <Text>
              Some text for Box 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Box>
          {/* Box 2 */}
          <Box border="1px solid" p="4">
            <Text fontSize="xl" fontWeight="bold">
              Title 2
            </Text>
            <Text>
              Some text for Box 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Box>
        </Flex>

        {/* Second Column */}
        <Flex flexDirection="column" flex="1" ml={['0', '4']}>
          {/* Box 3 */}
          <Box border="1px solid" p="4" mb="4">
            <Text fontSize="xl" fontWeight="bold">
              Title 3
            </Text>
            <Text>
              Some text for Box 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Box>
          {/* Box 4 */}
          <Box border="1px solid" p="4">
            <Text fontSize="xl" fontWeight="bold">
              Title 4
            </Text>
            <Text>
              Some text for Box 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
