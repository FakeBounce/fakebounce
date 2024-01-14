import { CircularProgress, CircularProgressLabel, Flex, Text } from '@chakra-ui/react';

import React from 'react';

const SkillItem: React.FC<{
  circularValue: number;
  circularLabel: string;
  circularDescription: string;
}> = ({ circularValue, circularLabel, circularDescription }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      mb={['4', '0']}
      maxW={['100%', '25%']}
      mr={['0', '2']}
      ml={['0', '2']}
    >
      <CircularProgress
        value={circularValue}
        size="100px"
        thickness="10px"
        color="green.500"
        mb="2"
      >
        <CircularProgressLabel fontSize="sm">{circularLabel}</CircularProgressLabel>
      </CircularProgress>
      <Text fontSize="xs" textAlign="center">
        {circularDescription}
      </Text>
    </Flex>
  );
};

export default SkillItem;
