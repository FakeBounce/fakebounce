import { Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';

import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

export interface NavigationLinkProps {
  expanded: boolean;
  text: string;
  icon: React.ReactNode;
  to: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ expanded, text, icon, to }) => {
  const textColor = useColorModeValue('black', 'white');
  const fontSize = useColorModeValue('sm', 'md'); // Adjust font size based on color mode

  return (
    <Link as={ReactRouterLink} to={to} _hover={{ textDecoration: 'none' }}>
      <Flex align="center" h="2rem" mb={2}>
        {icon}
        <Text
          fontSize={expanded ? fontSize : '0'}
          color={textColor}
          transition="font-size 0.3s ease"
          ml={2}
        >
          {text}
        </Text>
      </Flex>
    </Link>
  );
};

export default NavigationLink;
