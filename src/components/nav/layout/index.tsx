import { Button, Divider, Flex, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import { contentWidth, sidebarWidth, useIsMobile } from '../../../const';

import MenuContent from './MenuContent';
import { Outlet } from 'react-router-dom';

const Layout: React.FC<{ withSidebar: boolean }> = ({ withSidebar }) => {
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = useState<boolean>(!isMobile);
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = colorMode === 'light';

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
      <Flex position="relative">
        <Divider orientation="vertical" borderRight="1px solid gray" position="fixed" />
      </Flex>
      <Flex
        w={contentWidth(isExpanded)}
        gap="2rem"
        justifyContent="center"
        transition="all 0.3s ease"
      >
        <Button onClick={toggleColorMode} position="absolute" top="1rem" right="1rem">
          {isLightMode ? <SunIcon /> : <MoonIcon />}
        </Button>
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default Layout;
