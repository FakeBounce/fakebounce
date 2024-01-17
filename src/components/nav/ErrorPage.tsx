import { Button, Flex, Text } from '@chakra-ui/react';

import React from 'react';
import { Trans } from '@lingui/macro';
import { useNavigate } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <Flex justifyContent="center" alignItems="center" height="100vh" flexDirection="column">
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        <Trans>Oops! Une erreur est survenue.</Trans>
      </Text>
      <Text fontSize="lg" mb="4">
        <Trans>La page que vous essayez de voir n&apos;existe pas :(</Trans>
      </Text>
      <Button colorScheme="teal" onClick={handleGoBack}>
        <Trans>Retourner à l&apos;accueil</Trans>
      </Button>
    </Flex>
  );
};

export default ErrorPage;
