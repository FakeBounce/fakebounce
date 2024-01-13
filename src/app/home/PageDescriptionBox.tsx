import { Box, Flex, Grid, Image, Text, useColorMode } from '@chakra-ui/react';

import React from 'react';
import { useNavigate } from 'react-router-dom';

interface PageDescriptionBoxProps {
  title: string;
  text: string;
  navigationUrl: string;
  image?: string; // Optional image parameter
}

const PageDescriptionBox: React.FC<PageDescriptionBoxProps> = ({
  title,
  text,
  navigationUrl,
  image
}) => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();

  const isLightMode = colorMode === 'light';

  const handleBoxClick = () => {
    // Redirect to the specified navigation URL
    navigate(navigationUrl);
  };

  return (
    <Grid
      templateColumns={['1fr', '2fr 1fr']} // Updated to place the image on the right
      border={isLightMode ? 'none' : '1px solid'}
      mb="4"
      boxShadow="md"
      borderRadius="md"
      onClick={handleBoxClick}
      cursor="pointer"
      gap="4" // Adjust the gap between the text and image
      display="flex"
    >
      <Box p="4">
        <Text fontSize="xl" fontWeight="bold">
          {title}
        </Text>
        <Text>{text}</Text>
      </Box>
      {image && (
        <Image
          src={image}
          alt={`${title} Image`}
          borderBottomRightRadius="md"
          borderTopRightRadius="md"
          boxSize="100px"
          h="full"
          alignSelf="flex-end" // Align the image to the bottom
        />
      )}
    </Grid>
  );
};

export default PageDescriptionBox;
