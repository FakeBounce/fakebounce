import { Flex } from '@chakra-ui/react';
import React from 'react';
import SkillItem from './SkillItem';

const SkillSection: React.FC = () => {
  return (
    <Flex flexDirection="column" mb="4" p="4" borderRadius="md">
      <Flex
        flexDirection={{ base: 'column', md: 'row' }} // Stack on mobile, row on larger screens
        width="full"
      >
        <SkillItem
          circularValue={97}
          circularLabel="Front-end"
          circularDescription="ReactJs, React Native, Redux, ChakraUI, Storybook, Bootstrap"
        />

        <SkillItem
          circularValue={65}
          circularLabel="Back-end"
          circularDescription="NodeJs, Next, Express, Nest"
        />
        <SkillItem
          circularValue={49}
          circularLabel="BDD"
          circularDescription="GraphQL, Firebase, MySQL, SQL server"
        />
        <SkillItem
          circularValue={82}
          circularLabel="Workflow"
          circularDescription="Git, Jira, Agile, Scrum, Azure services"
        />
      </Flex>
    </Flex>
  );
};

export default SkillSection;
