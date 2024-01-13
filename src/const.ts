// const.tsx
import { useMediaQuery } from '@chakra-ui/react';

export const useIsMobile = () => {
  return useMediaQuery('(max-width: 768px)')[0]; // Adjust the breakpoint as needed
};
