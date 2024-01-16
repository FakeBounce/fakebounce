// const.tsx
import { useMediaQuery } from '@chakra-ui/react';

export const useIsMobile = () => {
  return useMediaQuery('(max-width: 768px)')[0]; // 0 to get the boolean isMobile: true or isMobile: false
};

export const sidebarWidth = (isExpanded: boolean) => {
  if (isExpanded) {
    return '15vw';
  }
  return '5vw';
};

export const contentWidth = (isExpanded: boolean) => {
  if (isExpanded) {
    return '85vw';
  }
  return '95vw';
};
