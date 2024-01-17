import { FaEllipsisH, FaFileAlt, FaHome, FaUser } from 'react-icons/fa'; // Import Chakra icons

import { Box } from '@chakra-ui/react';
import NavigationLink from './NavigationLink';
import React from 'react';
import { Trans } from '@lingui/macro';

const NavigationLinksList: React.FC<{
  expanded: boolean;
}> = ({ expanded }) => {
  return (
    <Box minW="2.5rem" gap="1rem">
      <NavigationLink
        expanded={expanded}
        text={<Trans>Accueil</Trans>}
        icon={<FaHome size={25} />}
        to="/"
      />
      <NavigationLink
        expanded={expanded}
        text={<Trans>CV</Trans>}
        icon={<FaFileAlt size={25} />}
        to="/cv"
      />
      <NavigationLink
        expanded={expanded}
        text={<Trans>A propos</Trans>}
        icon={<FaUser size={25} />}
        to="/about"
      />
      <NavigationLink
        expanded={expanded}
        text={<Trans>Autre</Trans>}
        icon={<FaEllipsisH size={25} />}
        to="/autre"
      />
    </Box>
  );
};

export default NavigationLinksList;
