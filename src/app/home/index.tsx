import { Flex, Image } from '@chakra-ui/react';

import Greeting from './Greeting';
import HomeContentBoxes from './HomeContentBoxes';
import React from 'react';
import devImage from '../../assets/images/dev.png';

const Home: React.FC = () => {
  return (
    <Flex flexDirection="column" alignItems="center" minH="90vh">
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
          loading="lazy"
          src={devImage}
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
