import { Flex, Text, useColorMode } from '@chakra-ui/react';

import AboutSection from './AboutSection';
import React from 'react';
import { sections } from './sectionList';

const About: React.FC = () => {
  const { colorMode } = useColorMode();
  const isLightThemed = colorMode === 'light';
  return (
    <Flex flexDirection="column" width="full">
      <Flex alignItems="center" justifyContent="center" minH="10vh">
        <Text fontSize="3xl" fontWeight="bold" color={isLightThemed ? 'black' : 'white'}>
          A propos
        </Text>
      </Flex>

      {sections.map((section, index) => {
        const isEven = index % 2 === 0;
        return (
          <AboutSection
            isEven={isEven}
            section={section}
            key={`section${index}-${section.title}`}
          />
        );
      })}
    </Flex>
  );
};

export default About;
