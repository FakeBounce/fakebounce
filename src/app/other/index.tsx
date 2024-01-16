import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
  useBreakpointValue
} from '@chakra-ui/react';

import NavigationArrow from '../../components/nav/layout/NavigationArrow';
import React from 'react';
import rolistHubImage from '../../assets/images/coinDuRoliste.jpg';

const Other: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Flex
        flexDirection="row"
        minH="10vh"
        w="full"
        textAlign="center"
        justifyContent="center"
        position="fixed"
      >
        <NavigationArrow isExpanded={false} />
        {/* Title on top */}
        <Text mt="4" fontSize={{ base: '3xl', md: '4xl' }} fontWeight="bold" mb="4">
          Le coin du rôliste
        </Text>
      </Flex>
      <Flex flexDirection={{ base: 'column', md: 'row' }} minH="100vh" textAlign="center">
        {/* Left side with the image taking half of the width */}
        {!isMobile && (
          <Flex maxW="50vw">
            <Box flex={{ base: '1', md: '1' }}>
              <Image
                src={rolistHubImage}
                alt="Le coin du rôliste"
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>
          </Flex>
        )}

        {/* Right side with the login form */}
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          flex={{ base: '1', md: '1' }}
          p="4"
          maxW={{ base: '100%', md: '50vw' }}
        >
          <Flex maxW={['80vw', '40vw']}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Email" mb="2" />

              <FormLabel>Mot de passe</FormLabel>
              <Input type="password" placeholder="Mot de passe" mb="2" />

              <Button colorScheme="blue" mt="4">
                Se connecter
              </Button>
            </FormControl>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Other;
