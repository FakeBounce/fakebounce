import { Box, Divider, Flex, Text, useColorModeValue } from '@chakra-ui/react';

import NavigationLinksList from './NavigationLinksList';
import React from 'react';
import { UpDownIcon } from '@chakra-ui/icons';
import { useIsMobile } from '../../../const'; // Adjust the path accordingly

interface MenuContentProps {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuContent: React.FC<MenuContentProps> = ({ expanded, setExpanded }) => {
  const dividerColor = useColorModeValue('gray.300', 'gray.600');
  const fontSize = useColorModeValue('sm', 'md'); // Adjust font size based on color mode
  const isMobile = useIsMobile();

  const handleHeaderClick = () => {
    if (!isMobile) {
      setExpanded((prevExpanded) => !prevExpanded);
    }
  };

  return (
    <Flex w={expanded ? '20vw' : '5vw'} flexDirection="column" transition="all 0.3s ease">
      <Box p={4} borderBottom={`1px solid ${dividerColor}`}>
        {/* Sidebar header */}
        <Flex mb={4} onClick={handleHeaderClick} cursor={!isMobile ? 'pointer' : 'default'}>
          <UpDownIcon boxSize={6} />
          <Text
            ml={2}
            fontWeight="bold"
            fontSize={expanded ? fontSize : '0'}
            transition="font-size 0.3s ease"
          >
            Fakebounce
          </Text>
        </Flex>

        {/* Divider */}
        <Divider mb={4} borderColor={dividerColor} w="full" />

        {/* List of links */}
        <NavigationLinksList expanded={expanded} />
      </Box>
    </Flex>
  );
};

export default MenuContent;
