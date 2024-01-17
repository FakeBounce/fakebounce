import { Box, Text, useColorMode } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

import { dynamicActivate } from '../../../i18n';

export interface LanguageSelectorOptionProps {
  localeToChange: 'en' | 'fr';
  languageOptionText: string;
  languageOptionFlag: ReactElement<React.SVGProps<SVGSVGElement>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LanguageSelectorOption: React.FC<LanguageSelectorOptionProps> = ({
  localeToChange,
  setIsOpen,
  languageOptionText,
  languageOptionFlag
}) => {
  const { colorMode } = useColorMode();
  const isLightMode = colorMode === 'light';

  const handleChange = (language: string) => {
    dynamicActivate(language);
    setIsOpen(false);
  };

  return (
    <Box
      onClick={() => handleChange(localeToChange)}
      cursor="pointer"
      display="flex"
      alignItems="center"
      padding="12px"
      borderRadius="4"
      _hover={isLightMode ? { backgroundColor: 'gray.100' } : { backgroundColor: 'gray.700' }}
    >
      <>
        {languageOptionFlag}
        <Text ml="2">{languageOptionText}</Text>
      </>
    </Box>
  );
};

export default LanguageSelectorOption;
