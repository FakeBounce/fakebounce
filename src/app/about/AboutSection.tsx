import { Flex, Image, Text, useColorMode } from '@chakra-ui/react';

import React from 'react';
import { TAboutSection } from './sectionList';

const AboutSection: React.FC<{ isEven: boolean; section: TAboutSection }> = ({
  isEven,
  section
}) => {
  const { colorMode } = useColorMode();
  const isLightThemed = colorMode === 'light';

  const getTextColor = () => {
    if (isEven) {
      return isLightThemed ? 'black' : 'white';
    }
    return isLightThemed ? 'white' : 'black';
  };

  const getThemeColor = () => {
    if (isEven) {
      return isLightThemed ? 'white' : 'gray.800';
    }
    return isLightThemed ? 'gray.800' : 'white';
  };

  const renderAboutSectionContent = () => {
    const imageSrc = isLightThemed ? `${section.imageSrc}_inverted.png` : `${section.imageSrc}.png`;
    if (isEven) {
      return (
        <>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            h="full"
            maxW={['100vw', '30vw']}
            p="4"
            textAlign="center"
          >
            <Image src={imageSrc} alt={`Section ${section.title}`} />
          </Flex>
          <Flex flexDirection="column" flex={{ base: '1', md: '2' }} p="2rem">
            <Text mt="4" fontSize="4xl" fontWeight="bold" mb="4" color={getTextColor()}>
              {section.title}
            </Text>
            <Text color={getTextColor()}>{section.description}</Text>
          </Flex>
        </>
      );
    }
    return (
      <>
        <Flex flexDirection="column" flex={{ base: '1', md: '2' }} p="2rem">
          <Text mt="4" fontSize="4xl" fontWeight="bold" mb="4" color={getTextColor()}>
            {section.title}
          </Text>
          <Text color={getTextColor()}>{section.description}</Text>
        </Flex>

        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          flex={{ base: '1', md: '2' }}
          maxW={['100vw', '30vw']}
          textAlign="center"
        >
          <Image src={imageSrc} alt={`Section ${section.title}`} />
        </Flex>
      </>
    );
  };

  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      h={['90vh', '45vh']}
      ml="0.5"
      bg={getThemeColor()}
    >
      {renderAboutSectionContent()}
    </Flex>
  );
};

export default AboutSection;
