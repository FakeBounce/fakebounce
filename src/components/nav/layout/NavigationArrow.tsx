import { useLocation, useNavigate } from 'react-router-dom';

import { ArrowBackIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import React from 'react';

const NavigationArrow: React.FC<{ isExpanded: boolean }> = ({ isExpanded }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const shouldShowBackButton = location.pathname !== '/';
  console.log('hey',location.pathname)
  if (shouldShowBackButton) {
    console.log('here',location.pathname)
    return (
      <Button
        data-testid="back-button"
        onClick={() => navigate('/')}
        position="absolute"
        top="1rem"
        left={isExpanded ? 'calc(5rem + 2rem)' : '2rem'}
      >
        <ArrowBackIcon />
      </Button>
    );
  }
  return <></>;
};

export default NavigationArrow;
