import { Button, Flex, Heading, Text, Tooltip } from '@chakra-ui/react';

import { DownloadIcon } from '@chakra-ui/icons';
import React from 'react';
import { Trans } from '@lingui/macro';

const CVTitle: React.FC = () => {
  return (
    <Flex justifyContent="center" alignItems="center" width="100%" mb="4">
      <Heading>
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Text mr="4">
            <Trans>Curriculum Vitae</Trans>
          </Text>
          <Tooltip label="Télécharger le PDF pour plus de détails" placement="bottom">
            <a
              href={'./CV-Benjamin-DéveloppeurJs.pdf'}
              download="CV-Benjamin-DéveloppeurJs"
              target="_blank"
              rel="noreferrer"
            >
              <Button colorScheme="teal" data-testid="download-button">
                <DownloadIcon data-testid="download-icon" />
              </Button>
            </a>
          </Tooltip>
        </Flex>
      </Heading>
    </Flex>
  );
};

export default CVTitle;
