import React, { useState } from 'react';
import { contentWidth, useIsMobile } from '../../../const';

import { Flex } from '@chakra-ui/react';
import Footer from './Footer';
import NavigationArrow from './NavigationArrow';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import ThemeChanger from './ThemeChanger';

const Layout: React.FC<{ withSidebar: boolean }> = ({ withSidebar }) => {
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = useState<boolean>(!isMobile);

  const isExpanded = isMobile ? false : expanded;

  if (!withSidebar) {
    return (
      <Flex w="100vw" h="100vh" data-testid="flex-container">
        <Outlet />
      </Flex>
    );
  }

  return (
    <Flex flexDirection="column" height="100vh" data-testid="flex-container">
      <Flex width="100vw">
        <Sidebar isExpanded={isExpanded} setExpanded={setExpanded} />
        <Flex
          flexDirection="column"
          w={contentWidth(isExpanded)}
          gap="2rem"
          justifyContent="center"
          alignItems="center"
          position="relative"
          transition="all 0.3s ease"
          flex="1"
        >
          {!isMobile && <ThemeChanger />}
          {!isMobile && <NavigationArrow isExpanded={isExpanded} />}
          <Outlet />
        </Flex>
      </Flex>
      {/* Sticky Footer */}
      <Footer />
    </Flex>
  );
};

export default Layout;
