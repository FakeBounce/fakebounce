import { FaEnvelope, FaFileAlt, FaHome } from 'react-icons/fa'; // Import Chakra icons

import { Box } from '@chakra-ui/react';
import NavigationLink from './NavigationLink';
import React from 'react';

const NavigationLinksList: React.FC<{
  expanded: boolean;
}> = ({ expanded }) => {
  return (
    <Box>
      <NavigationLink expanded={expanded} text="Home" icon={<FaHome />} to="/" />
      <NavigationLink expanded={expanded} text="Mon CV" icon={<FaFileAlt />} to="/cv" />
      <NavigationLink expanded={expanded} text="Contact" icon={<FaEnvelope />} to="/contact" />
    </Box>
  );
};

export default NavigationLinksList;
