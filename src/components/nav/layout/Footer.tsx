import { Box, Icon, Link, Text } from '@chakra-ui/react';

import { FaGithub } from 'react-icons/fa';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <Box
      bg="blue.800"
      p="4"
      textAlign="center"
      position="sticky"
      h="10vh"
      bottom="0"
      left="0"
      right="0"
      zIndex="1"
    >
      <Text color="white">
        Contact me at{' '}
        <Link color="teal.300" href="mailto:romanellibenjamin66@gmail.com">
          romanellibenjamin66@gmail.com
        </Link>
      </Text>
      <Link href="https://github.com/FakeBounce" target="_blank" rel="noopener noreferrer">
        {/* Add the data-testid attribute to the Icon component */}
        <Icon as={FaGithub} color="gray.400" boxSize={6} data-testid="github-icon" />
      </Link>
    </Box>
  );
};

export default Footer;
