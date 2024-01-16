import { Flex } from '@chakra-ui/react';
import PageDescriptionBox from './PageDescriptionBox';
import React from 'react';
import brainImage from '../../assets/images/brain.png'
import cvImage from '../../assets/images/cv.png'
import roleplayImage from '../../assets/images/roleplay.png'

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
            image={cvImage}
          />
        </Flex>

        {/* A propos */}
        <Flex flexDirection="column" flex={['1', '1']} width="full" mb={['4', '0']} mr={['0', '4']}>
          <PageDescriptionBox
            title="Me découvrir ?"
            text="Pour en apprendre plus sur moi et mes passions !"
            navigationUrl="/about"
            image={brainImage}
          />
        </Flex>
      </Flex>

      <Flex flexDirection="column" flex={['1', '1']} w={["100%", "50%"]} mb={['4', '0']} mr={['0', '4']}>
        {/* Others */}
        <PageDescriptionBox
          title="Autre ?"
          text="Pour les rôlistes aguerris ou débutants, c'est par là !"
          navigationUrl="/autre"
          image={roleplayImage}
        />
      </Flex>
    </>
  );
};

export default HomeContentBoxes;
