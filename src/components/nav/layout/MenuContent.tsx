import { Box, Divider, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { sidebarWidth, useIsMobile } from '../../../const'; // Adjust the path accordingly

import NavigationLinksList from './NavigationLinksList';
import React from 'react';
import { UpDownIcon } from '@chakra-ui/icons';

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
    <Flex
      w={sidebarWidth(expanded)}
      flexDirection="column"
      transition="all 0.3s ease"
      position="sticky"
      top="0"
      zIndex="sticky" // Ensure it stays above other sticky elements
    >
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
            Benjamin R
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
