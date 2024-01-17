import { Flex, Heading, Image, Text } from '@chakra-ui/react';

import React from 'react';
import { Trans } from '@lingui/macro';
import englishLogo from '../../assets/images/english.jpg';
import franceLogo from '../../assets/images/france.jpg';

const LanguageSection: React.FC = () => {
  return (
    <Flex flexDirection="column" width="100%" p="4" borderRadius="md">
      <Heading fontSize="lg" mb="2">
        <Trans>Langues</Trans>
      </Heading>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }} // Stack on mobile, row on larger screens
        alignItems={{ base: 'center', md: 'start' }}
        mb={['2rem', '2']}
        width="100%"
      >
        {/* French Language */}
        <Image
          src={franceLogo}
          alt={`french flag image`}
          boxSize="50px"
          borderRadius="full"
          mr={{ base: 0, md: 4 }}
          mb={{ base: 2, md: 0 }}
        />
        <Flex flexDirection={{ base: 'column', md: 'row' }} ml={{ base: 0, md: 4 }} width="100%">
          <Flex flexDirection="column" minW="7rem">
            <Text fontWeight="bold" mb="0">
              <Trans>Français</Trans>
            </Text>
            <Text fontSize={['small', 'x-small']}>{"Naissance-Aujourd'hui"}</Text>
          </Flex>
          <Flex flexDirection="column" ml={{ base: 0, md: 4 }} mt={{ base: 2, md: 0 }} w="100%">
            <Text fontSize={['md', 'small']} fontWeight="bold">
              <Trans>Maternelle</Trans>
            </Text>
          </Flex>
        </Flex>
        {/* English Language */}
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'center', md: 'start' }}
          ml={{ base: 0, md: 4 }}
          width="100%"
        >
          <Image
            src={englishLogo}
            alt={`american and british flag image`}
            boxSize="50px"
            borderRadius="full"
            mr={{ base: 0, md: 4 }}
            mb={{ base: 2, md: 0 }}
          />
          <Flex flexDirection={{ base: 'column', md: 'row' }} ml={{ base: 0, md: 4 }} width="100%">
            <Flex flexDirection="column" minW="7rem">
              <Text fontWeight="bold" mb="0">
                <Trans>Anglais</Trans>
              </Text>
              <Text fontSize={['small', 'x-small']}>{"2008-Aujourd'hui"}</Text>
            </Flex>
            <Flex flexDirection="column" ml={{ base: 0, md: 4 }} mt={{ base: 2, md: 0 }} w="100%">
              <Text fontSize={['md', 'small']} fontWeight="bold">
                <Trans>Courant</Trans>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LanguageSection;
