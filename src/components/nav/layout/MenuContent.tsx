import { Box, Divider, Flex, Text, useColorModeValue } from '@chakra-ui/react';

import NavigationLinksList from './NavigationLinksList';
import React from 'react';
import { UpDownIcon } from '@chakra-ui/icons';

const MenuContent: React.FC<{
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ expanded, setExpanded }) => {
  const dividerColor = useColorModeValue('gray.300', 'gray.600');
  const fontSize = useColorModeValue('sm', 'md'); // Adjust font size based on color mode

  const handleHeaderClick = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Flex w="full">
      <Box w="full" p={4} borderBottom={`1px solid ${dividerColor}`}>
        {/* Sidebar header */}
        <Flex mb={4} onClick={handleHeaderClick} cursor="pointer">
          <UpDownIcon boxSize={6} />

          <Text
            ml={2}
            fontWeight="bold"
            fontSize={expanded ? fontSize : '0'}
            transition="font-size 0.1s ease"
          >
            My Website
          </Text>
        </Flex>

        {/* Divider */}
        <Divider mb={4} borderColor={dividerColor} w="full" />

        {/* List of links or icons */}
        <NavigationLinksList expanded={expanded} />
      </Box>
    </Flex>
  );
};

export default MenuContent;
