import { Button, Divider, Flex, Heading, Text, Tooltip } from '@chakra-ui/react';

import { DownloadIcon } from '@chakra-ui/icons';
import EducationSection from './EducationSection';
import JobSection from './JobSection';
import LanguageSection from './LanguageSection';
import React from 'react';
import SkillSection from './SkillSection';

const CV: React.FC = () => {
  return (
    <Flex flexDirection="column" alignItems="center" p="4" width="full" maxW="800px">
      <Flex justifyContent="center" alignItems="center" width="100%" mb="4">
        <Heading>
          <Flex direction={{ base: 'column', md: 'row' }} alignItems="center">
            <Text mr="4">Curriculum Vitae</Text>
            <Tooltip label="Download PDF for more details" placement="bottom">
              <a
                href={'./CV-Benjamin-DéveloppeurJs.pdf'}
                download="CV-Benjamin-DéveloppeurJs"
                target="_blank"
                rel="noreferrer"
              >
                <Button colorScheme="teal">
                  <DownloadIcon />
                </Button>
              </a>
            </Tooltip>
          </Flex>
        </Heading>
      </Flex>

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
