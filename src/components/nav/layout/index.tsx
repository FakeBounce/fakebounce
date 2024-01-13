import { Divider, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

import MenuContent from './MenuContent';
import { Outlet } from 'react-router-dom';

const Layout: React.FC<{ withSidebar: boolean }> = ({ withSidebar }) => {
  const [expanded, setExpanded] = useState<boolean>(true);

  if (!withSidebar) {
    return <Flex w="100vw" h="100vh"></Flex>;
  }

  return (
    <Flex width="100vw" height="100vh">
      <Flex w={expanded ? '20vw' : '5vw'} flexDirection="column" transition="all 0.1s ease">
        <MenuContent expanded={expanded} setExpanded={setExpanded} />
      </Flex>
      <Divider orientation="vertical" borderRight="1px solid gray" />
      <Flex w="90vw" gap="2rem" justifyContent="center" alignItems="center">
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default Layout;
