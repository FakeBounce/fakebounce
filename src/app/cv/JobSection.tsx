import { Flex, Heading, Image, Text } from '@chakra-ui/react';

import JobItem from './JobItem';
import React from 'react';
import { jobsList } from './JobList';

const JobSection: React.FC = () => {
  return (
    <Flex flexDirection="column" mb="4" w="full" p="4" borderRadius="md">
      <Heading fontSize="lg" mb={['2', '2rem']}>
        Expériences en tant que développeur
      </Heading>
      {/* Item 1 */}

      {jobsList.map((job) => {
        return <JobItem key={`Job-${job.jobCompany}`} {...job} />;
      })}
    </Flex>
  );
};

export default JobSection;
