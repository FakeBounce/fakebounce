import { Box, Grid, Image, Text, useColorMode } from '@chakra-ui/react';

import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface PageDescriptionBoxProps {
  title: React.ReactNode;
  text: React.ReactNode;
  navigationUrl: string;
  image?: string;
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
      justifyContent="space-between"
      data-testid="page-description-box"
      transition="background-color 0.3s, transform 0.3s" // Add transition property
      _hover={{
        backgroundColor: isLightMode ? 'gray.100' : 'gray.700', // Change background color on hover
        transform: 'scale(1.05)' // Scale up on hover
      }}
    >
      <Box p="4">
        <Text fontSize={['md', 'xl']} fontWeight="bold">
          {title}
        </Text>
        <Text fontSize={['small', 'md']}>{text}</Text>
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
