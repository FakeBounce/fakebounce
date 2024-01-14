import { Flex } from '@chakra-ui/react';
import PageDescriptionBox from './PageDescriptionBox';
import React from 'react';

const HomeContentBoxes: React.FC = () => {
  return (
    <>
      <Flex flexDirection={['column', 'row']} width="full" justifyContent="space-between">
        {/* CV */}
        <Flex flexDirection="column" flex={['1', '1']} width="full" mb={['4', '0']} mr={['0', '4']}>
          <PageDescriptionBox
            title="Mon expérience ?"
            text="Pour mon parcours de vie c'est ici !"
            navigationUrl="/cv"
            image="/images//cv.png"
          />
        </Flex>

        {/* Passions */}
        <Flex flexDirection="column" flex={['1', '1']} width="full" mb={['4', '0']} mr={['0', '4']}>
          <PageDescriptionBox
            title="Me découvrir ?"
            text="Pour en apprendre plus sur moi et mes passions !"
            navigationUrl="/passions"
            image="/images//brain.png"
          />
        </Flex>
      </Flex>

      <Flex flexDirection="column" flex={['1', '1']} w={["100%", "50%"]} mb={['4', '0']} mr={['0', '4']}>
        {/* Others */}
        <PageDescriptionBox
          title="Autre ?"
          text="Pour les rôlistes aguerris ou débutants, c'est par là !"
          navigationUrl="/autres"
          image="/images//roleplay.png"
        />
      </Flex>
    </>
  );
};

export default HomeContentBoxes;
