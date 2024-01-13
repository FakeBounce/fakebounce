import { Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';

import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

const NavigationLink: React.FC<{
  expanded: boolean;
  text: string;
  icon: React.ReactNode;
  to: string;
}> = ({ expanded, text, icon, to }) => {
  const fontSize = useColorModeValue('sm', 'md'); // Adjust font size based on color mode

  return (
    <Flex align="center" h="2rem" mb={2}>
      <Link as={ReactRouterLink} to={to} color="blue.500">
        {icon}
      </Link>
      <Text fontSize={expanded ? fontSize : '0'} transition="font-size 0.1s ease" ml={2}>
        {text}
      </Text>
    </Flex>
  );
};

export default NavigationLink;
