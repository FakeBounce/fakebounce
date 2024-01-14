import { Divider, Flex } from '@chakra-ui/react';

import MenuContent from './MenuContent';
import React from 'react';
import { sidebarWidth } from '../../../const';

interface SidebarProps {
  isExpanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isExpanded, setExpanded }) => {
  return (
    <>
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
    </>
  );
};

export default Sidebar;
