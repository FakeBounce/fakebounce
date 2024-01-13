import { Button, Flex, Image, Text, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import PageDescriptionBox from './PageDescriptionBox';
import React from 'react';

const myNameIs = "je m'appelle ";

const Home: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = colorMode === 'light';

  return (
    <Flex flexDirection="column" alignItems="center" minH="100vh">
      <Button onClick={toggleColorMode} position="fixed" top="1rem" right="1rem" zIndex="9999">
        {isLightMode ? <SunIcon /> : <MoonIcon />}
      </Button>

      <Flex
        maxW="800px"
        w="full"
        p="4"
        flexDirection="column"
        alignItems="center"
        mx={['auto', 'auto', '0']} // Center horizontally only for desktop
        my={['auto', 'auto', 'auto']} // Center vertically only for desktop
      >
        <Image
          src={'/dev.png'}
          alt="Bearded Developer coding"
          mb={['2', '0']}
          boxSize={['200px', 'auto']} // Adjust boxSize for mobile and desktop
          borderRadius="md"
          display={['block', 'none']} // Show on mobile, hide on desktop
        />

        {/* Greeting */}
        <Flex flexDirection="row" alignItems="center" mb="2">
          <Flex flexDirection="column" mb="2">
            <Text fontSize="3xl" fontWeight="bold" mr="4">
              Bonjour,
              <br />
              {myNameIs}
              <Text as="span" color={isLightMode ? 'green.600' : 'green.300'} fontWeight="bold">
                Benjamin
              </Text>
            </Text>

            {/* Description */}
            <Text fontSize="xl" mb="4" color={isLightMode ? 'gray.600' : 'gray.300'}>
              Je suis un ingénieur du web, spécialisé en Front-end dans des applications ReactJs /
              NodeJs.
            </Text>
          </Flex>
          <Image
            src={'/dev.png'}
            alt="Bearded Developer coding"
            boxSize={['0', '200px']} // Adjust boxSize for desktop and hide on mobile
            borderRadius="md"
            mr={['0', '2']} // Margin-right for desktop
            display={['none', 'block']} // Show on desktop, hide on mobile
          />
        </Flex>

        {/* Boxes Container */}
        <Flex flexDirection={['column', 'row']} width="full" justifyContent="space-between">
          {/* First Column */}
          <Flex flexDirection="column" flex="1" mb={['4', '0']} mr={['0', '4']}>
            {/* CV */}
            <PageDescriptionBox
              title="Mon expérience ?"
              text="Pour mon parcours de vie c'est ici !"
              navigationUrl="/cv"
              image="/cv.png"
            />
            {/* Contact */}
            <PageDescriptionBox
              title="Me contacter ?"
              text="Les informations nécessaires sont juste là !"
              navigationUrl="/contact"
              image="/info.png"
            />
          </Flex>

          {/* Second Column */}
          <Flex flexDirection="column" flex="1" mt={['4', '0']}>
            {/* Passions */}
            <PageDescriptionBox
              title="Me découvrir ?"
              text="Pour en apprendre plus sur moi et mes passions !"
              navigationUrl="/passions"
              image="/brain.png"
            />
            {/* Others */}
            <PageDescriptionBox
              title="Autre ?"
              text="Pour les rôlistes aguerris ou débutants, c'est par là !"
              navigationUrl="/autres"
              image="/roleplay.png"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
