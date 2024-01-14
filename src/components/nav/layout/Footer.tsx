import { Box, Link, Text } from '@chakra-ui/react';

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
      <Text color="gray.400">Additional contact information here</Text>
    </Box>
  );
};

export default Footer;
