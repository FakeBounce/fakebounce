import { Button, Flex, Text } from '@chakra-ui/react';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const errorText = "La page que vous essayez de voir n'existe pas :(";
const returnText = "Retourner à l'accueil";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <Flex justifyContent="center" alignItems="center" height="100vh" flexDirection="column">
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        Oops! Une erreur est survenue.
      </Text>
      <Text fontSize="lg" mb="4">
        {errorText}
      </Text>
      <Button colorScheme="teal" onClick={handleGoBack}>
        {returnText}
      </Button>
    </Flex>
  );
};

export default ErrorPage;
