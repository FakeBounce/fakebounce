import { Flex, Image, Text, useColorMode } from '@chakra-ui/react';

import React from 'react';
import { Trans } from '@lingui/macro';
import devImage from '../../assets/images/dev.png';

const Greeting: React.FC = () => {
  const { colorMode } = useColorMode();
  const isLightMode = colorMode === 'light';

  return (
    <Flex flexDirection="row" alignItems="center" mb="2">
      <Flex flexDirection="column" mb="2">
        <Text fontSize="3xl" fontWeight="bold" mr="4">
          <Trans>Bonjour,</Trans>
          <br />
          <Trans>je m&apos;appelle</Trans>{' '}
          <Text
            as="span"
            color={isLightMode ? 'green.600' : 'green.300'}
            fontWeight="bold"
            data-testid="greeting-name"
          >
            Benjamin
          </Text>
        </Text>

        {/* Description */}
        <Text fontSize="xl" mb="4" color={isLightMode ? 'gray.600' : 'gray.300'}>
          <Trans>
            Je suis un ingénieur du web, spécialisé en Front-end dans des applications ReactJs /
            NodeJs.
          </Trans>
        </Text>
      </Flex>
      <Image
        src={devImage}
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
