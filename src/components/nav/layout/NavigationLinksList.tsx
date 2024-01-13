import { FaEnvelope, FaFileAlt, FaHome } from 'react-icons/fa'; // Import Chakra icons

import { Box } from '@chakra-ui/react';
import NavigationLink from './NavigationLink';
import React from 'react';

const NavigationLinksList: React.FC<{
  expanded: boolean;
}> = ({ expanded }) => {
  return (
    <Box minW="2.5rem">
      <NavigationLink expanded={expanded} text="Home" icon={<FaHome size={20} />} to="/" />
      <NavigationLink expanded={expanded} text="Mon CV" icon={<FaFileAlt size={20} />} to="/cv" />
      <NavigationLink
        expanded={expanded}
        text="Contact"
        icon={<FaEnvelope size={20} />}
        to="/contact"
      />
    </Box>
  );
};

export default NavigationLinksList;
