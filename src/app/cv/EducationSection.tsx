import { Flex, Heading, Image, Text } from '@chakra-ui/react';

import React from 'react';
import { Trans } from '@lingui/macro';
import esgiImage from '../../assets/images/esgi.jpg';

const EducationSection: React.FC = () => {
  return (
    <Flex flexDirection="column" width="100%" p="4" borderRadius="md">
      <Heading fontSize="lg" mb="2">
        <Trans>Formation</Trans>
      </Heading>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }} // Stack on mobile, row on larger screens
        alignItems={{ base: 'center', md: 'start' }}
        mb={['2rem', '2']}
        width="100%"
      >
        <Image
          src={esgiImage}
          alt={`ESGI school image`}
          boxSize="50px"
          borderRadius="full"
          mr={{ base: 0, md: 4 }}
          mb={{ base: 2, md: 0 }}
        />
        <Flex flexDirection={{ base: 'column', md: 'row' }} ml={{ base: 0, md: 4 }} width="100%">
          <Flex flexDirection="column" minW="7rem">
            <Text fontWeight="bold" mb="0">
              ESGI
            </Text>
            <Text fontSize={['small', 'x-small']}>2012-2017</Text>
          </Flex>
          <Flex flexDirection="column" ml={{ base: 0, md: 4 }} mt={{ base: 2, md: 0 }} w="100%">
            <Text fontSize={['md', 'small']} fontWeight="bold" mb="0">
              <Trans>Master ESGI Ingénierie du Web en Alternance</Trans>
            </Text>
            <Text fontSize={['md', 'small']}>
              <Trans>Compréhension des technologies du web et algorythmie</Trans>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EducationSection;
