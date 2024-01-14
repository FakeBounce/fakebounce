import { Flex, Image, Text, useColorMode } from '@chakra-ui/react';

import React from 'react';

const myNameIs = "je m'appelle ";

const Greeting: React.FC = () => {
  const { colorMode } = useColorMode();
  const isLightMode = colorMode === 'light';

  return (
    <Flex flexDirection="row" alignItems="center" mb="2">
      <Flex flexDirection="column" mb="2">
        <Text fontSize="3xl" fontWeight="bold" mr="4">
          Bonjour,
          <br />
          {myNameIs}
          <Text as="span" color={isLightMode ? 'green.600' : 'green.300'} fontWeight="bold">
            Benjamin
          </Text>
        </Text>

        {/* Description */}
        <Text fontSize="xl" mb="4" color={isLightMode ? 'gray.600' : 'gray.300'}>
          Je suis un ingénieur du web, spécialisé en Front-end dans des applications ReactJs /
          NodeJs.
        </Text>
      </Flex>
      <Image
        src={'./images/dev.png'}
        alt="Bearded Developer coding"
        boxSize={['0', '200px']} // Adjust boxSize for desktop and hide on mobile
        borderRadius="md"
        mr={['0', '2']} // Margin-right for desktop
        display={['none', 'block']} // Show on desktop, hide on mobile
      />
    </Flex>
  );
};

export default Greeting;
