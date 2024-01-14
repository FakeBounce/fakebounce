import { Flex, Heading, Image, Text } from '@chakra-ui/react';

import React from 'react';

const LanguageSection: React.FC = () => {
  return (
    <Flex flexDirection="column" width="100%" p="4" borderRadius="md">
      <Heading fontSize="lg" mb="2">
        Langues
      </Heading>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }} // Stack on mobile, row on larger screens
        alignItems={{ base: 'center', md: 'start' }}
        mb={['2rem', '2']}
        width="100%"
      >
        <Image
          src="./images/france.jpg"
          alt={`french flag image`}
          boxSize="50px"
          borderRadius="full"
          mr={{ base: 0, md: 4 }}
          mb={{ base: 2, md: 0 }}
        />
        <Flex flexDirection={{ base: 'column', md: 'row' }} ml={{ base: 0, md: 4 }} width="100%">
          <Flex flexDirection="column" minW="7rem">
            <Text fontWeight="bold">Français</Text>
            <Text fontSize={['small', 'x-small']}>{"Naissance-Aujourd'hui"}</Text>
          </Flex>
          <Flex flexDirection="column" ml={{ base: 0, md: 4 }} mt={{ base: 2, md: 0 }} w="100%">
            <Text fontSize={['md', 'small']} fontWeight="bold">
              Maternelle
            </Text>
          </Flex>
          <Image
            src="./images/english.jpg"
            alt={`american and british flag image`}
            boxSize="50px"
            borderRadius="full"
            mr={{ base: 0, md: 4 }}
            mb={{ base: 2, md: 0 }}
          />
          <Flex flexDirection="column" minW="7rem">
            <Text fontWeight="bold">Anglais</Text>
            <Text fontSize={['small', 'x-small']}>{"2008-Aujourd'hui"}</Text>
          </Flex>
          <Flex flexDirection="column" ml={{ base: 0, md: 4 }} mt={{ base: 2, md: 0 }} w="100%">
            <Text fontSize={['md', 'small']} fontWeight="bold">
              Courant
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LanguageSection;
