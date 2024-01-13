import { Flex, Image, Text } from '@chakra-ui/react';

import React from 'react';

const JobItem: React.FC<{
  jobImage: string;
  jobCompany: string;
  jobDate: string;
  jobTitle: string;
  jobDescription: string;
}> = ({ jobImage, jobCompany, jobDate, jobTitle, jobDescription }) => {
  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }} // Stack on mobile, row on larger screens
      alignItems={{ base: 'center', md: 'start' }}
      mb={['2rem', '2']}
      width="100%"
    >
      <Image
        src={jobImage}
        alt={`${jobCompany} image`}
        boxSize="50px"
        borderRadius="full"
        mr={{ base: 0, md: 4 }}
        mb={{ base: 2, md: 0 }}
        backgroundColor="white"
      />
      <Flex flexDirection={{ base: 'column', md: 'row' }} ml={{ base: 0, md: 4 }} width="100%">
        <Flex flexDirection="column" minW="7rem">
          <Text fontWeight="bold">{jobCompany}</Text>
          <Text fontSize={['small', 'x-small']}>{jobDate}</Text>
        </Flex>
        <Flex flexDirection="column" ml={{ base: 0, md: 4 }} mt={{ base: 2, md: 0 }} w="100%">
          <Text fontSize={['md', 'small']} fontWeight="bold">
            {jobTitle}
          </Text>
          <Text fontSize={['md', 'small']}>{jobDescription}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default JobItem;
