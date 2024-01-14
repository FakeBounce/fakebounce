import { FaFileAlt, FaHome } from 'react-icons/fa'; // Import Chakra icons

import { Box } from '@chakra-ui/react';
import NavigationLink from './NavigationLink';
import React from 'react';

const NavigationLinksList: React.FC<{
  expanded: boolean;
}> = ({ expanded }) => {
  return (
    <Box minW="2.5rem" gap="1rem">
      <NavigationLink expanded={expanded} text="Accueil" icon={<FaHome size={25} />} to="/" data-testid="nav-link-Accueil" />
      <NavigationLink expanded={expanded} text="Mon CV" icon={<FaFileAlt size={25} />} to="/cv" data-testid="nav-link-CV" />
    </Box>
  );
};

export default NavigationLinksList;
