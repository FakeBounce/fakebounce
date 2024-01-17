import { Box, Flex, useColorMode } from '@chakra-ui/react';
import React, { useState } from 'react';
import { enFlag, frFlag } from './const';

import LanguageSelectorOption from './LanguageSelectorOption';
import { useLingui } from '@lingui/react';

const LanguageSelector: React.FC = () => {
  const { i18n } = useLingui();
  const { colorMode } = useColorMode();
  const isLightMode = colorMode === 'light';

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box position="fixed" top="4" right={["4", "20"]}>
      <Box
        onClick={handleToggle}
        border="1px solid"
        borderColor="gray.300"
        bg={isLightMode ? 'white' : 'gray.800'}
        borderRadius="md"
        cursor="pointer"
        p="3"
        display="flex"
        alignItems="center"
        _hover={{ borderColor: 'gray.500' }}
      >
        {i18n.locale === 'fr' ? frFlag : enFlag}
      </Box>

      {isOpen && (
        <Box
          position="absolute"
          top="100%"
          right="0"
          bg={isLightMode ? 'white' : 'gray.800'}
          border="1px solid"
          borderColor="gray.300"
          borderRadius="md"
          mt="1"
          zIndex={1}
        >
          <Flex
            direction="column"
            p="2"
            onClick={(e) => {
              e.stopPropagation(); // Prevent closing the dropdown when clicking inside it
            }}
          >
            <LanguageSelectorOption
              localeToChange={'fr'}
              languageOptionText={'Français'}
              languageOptionFlag={frFlag}
              setIsOpen={setIsOpen}
            />
            <LanguageSelectorOption
              localeToChange={'en'}
              languageOptionText={'English'}
              languageOptionFlag={enFlag}
              setIsOpen={setIsOpen}
            />
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default LanguageSelector;
