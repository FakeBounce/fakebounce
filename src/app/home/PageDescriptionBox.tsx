import { Box, Text, useColorMode } from '@chakra-ui/react';

import React from 'react';
import { useNavigate } from 'react-router-dom';

interface PageDescriptionBoxProps {
  title: string;
  text: string;
  navigationUrl: string;
}

const PageDescriptionBox: React.FC<PageDescriptionBoxProps> = ({ title, text, navigationUrl }) => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();

  const isLightMode = colorMode === 'light';

  const handleBoxClick = () => {
    // Redirect to the specified navigation URL
    navigate(navigationUrl);
  };

  return (
    <Box
      border={isLightMode ? 'none' : '1px solid'}
      p="4"
      mb="4"
      boxShadow="md"
      borderRadius="md"
      onClick={handleBoxClick} // Attach the onClick handler
      cursor="pointer"
    >
      <Text fontSize="xl" fontWeight="bold">
        {title}
      </Text>
      <Text>{text}</Text>
    </Box>
  );
};

export default PageDescriptionBox;
