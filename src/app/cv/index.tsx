import { Divider, Flex } from '@chakra-ui/react';

import CVTitle from './CVTitle';
import EducationSection from './EducationSection';
import JobSection from './JobSection';
import LanguageSection from './LanguageSection';
import React from 'react';
import SkillSection from './SkillSection';

const CV: React.FC = () => {
  return (
    <Flex flexDirection="column" alignItems="center" p="4" width="full" maxW="800px">
      <CVTitle />

      <SkillSection />

      <Divider mb="4" />

      <JobSection />

      <Divider mb="4" />

      <EducationSection />

      <Divider mb="4" />

      <LanguageSection />
    </Flex>
  );
};

export default CV;
