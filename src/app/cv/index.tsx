import { Divider, Flex, Heading, Image, Text } from '@chakra-ui/react';

import JobSection from './JobSection';
import React from 'react';
import SkillSection from './SkillSection';

const CV: React.FC = () => {
  return (
    <Flex flexDirection="column" alignItems="center" p="4" width="full" maxW="800px">
      <Heading mb="4">Curriculum Vitae</Heading>

      <SkillSection />

      <Divider mb="4" />

      <JobSection />

      <Divider mb="4" />

      <Flex flexDirection="column" width="100%" p="4" borderRadius="md">
        <Heading fontSize="lg" mb="2">
          Formation
        </Heading>
        {/* Item 1 */}
        <Flex
          flexDirection={{ base: 'column', md: 'row' }} // Stack on mobile, row on larger screens
          alignItems={{ base: 'center', md: 'start' }}
          mb={['2rem', '2']}
          width="100%"
        >
          <Image
            src="./esgi.jpg"
            alt={`school image`}
            boxSize="50px"
            borderRadius="full"
            mr={{ base: 0, md: 4 }}
            mb={{ base: 2, md: 0 }}
          />
          <Flex flexDirection={{ base: 'column', md: 'row' }} ml={{ base: 0, md: 4 }} width="100%">
            <Flex flexDirection="column" minW="7rem">
              <Text fontWeight="bold">ESGI</Text>
              <Text fontSize={['small', 'x-small']}>2012-2017</Text>
            </Flex>
            <Flex flexDirection="column" ml={{ base: 0, md: 4 }} mt={{ base: 2, md: 0 }} w="100%">
              <Text fontSize={['md', 'small']} fontWeight="bold">
                Master ESGI Ingénierie du Web en Alternance
              </Text>
              <Text fontSize={['md', 'small']}>
                Compréhension des technologies du web et algorythmie
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CV;
