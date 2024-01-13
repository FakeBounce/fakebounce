import { Divider, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { contentWidth, sidebarWidth, useIsMobile } from '../../../const';

import MenuContent from './MenuContent';
import { Outlet } from 'react-router-dom';

const Layout: React.FC<{ withSidebar: boolean }> = ({ withSidebar }) => {
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = useState<boolean>(!isMobile);

  const isExpanded = isMobile ? false : expanded;

  if (!withSidebar) {
    return <Flex w="100vw" h="100vh"></Flex>;
  }

  return (
    <Flex width="100vw" height="100vh">
      <Flex
        w={sidebarWidth(isExpanded)}
        minW="60px"
        flexDirection="column"
        transition="all 0.3s ease"
      >
        <MenuContent expanded={isExpanded} setExpanded={setExpanded} />
      </Flex>
      <Divider orientation="vertical" borderRight="1px solid gray" />
      <Flex
        w={contentWidth(isExpanded)}
        gap="2rem"
        justifyContent="center"
        alignItems="center"
        transition="all 0.3s ease"
      >
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default Layout;
