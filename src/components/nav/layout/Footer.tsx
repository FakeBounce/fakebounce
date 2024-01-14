import { Box, Icon, Link, Text } from '@chakra-ui/react';

import { FaGithub } from 'react-icons/fa'; // Import GitHub icon
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
      {/* Replace "Additional contact information here" with GitHub icon */}
      <Link
        href="https://github.com/FakeBounce"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon as={FaGithub} color="gray.400" boxSize={6} />
      </Link>
    </Box>
  );
};

export default Footer;
