import { Flex } from '@chakra-ui/react';
import PageDescriptionBox from './PageDescriptionBox';
import React from 'react';

const HomeContentBoxes: React.FC = () => {
  return (
    <Flex flexDirection={['column', 'row']} width="full" justifyContent="space-between">
      {/* First Column */}
      <Flex flexDirection="column" flex="1" mb={['4', '0']} mr={['0', '4']}>
        {/* CV */}
        <PageDescriptionBox
          title="Mon expérience ?"
          text="Pour mon parcours de vie c'est ici !"
          navigationUrl="/cv"
          image="/cv.png"
        />
        {/* Contact */}
        <PageDescriptionBox
          title="Me contacter ?"
          text="Les informations nécessaires sont juste là !"
          navigationUrl="/contact"
          image="/info.png"
        />
      </Flex>

      {/* Second Column */}
      <Flex flexDirection="column" flex="1" mt={['4', '0']}>
        {/* Passions */}
        <PageDescriptionBox
          title="Me découvrir ?"
          text="Pour en apprendre plus sur moi et mes passions !"
          navigationUrl="/passions"
          image="/brain.png"
        />
        {/* Others */}
        <PageDescriptionBox
          title="Autre ?"
          text="Pour les rôlistes aguerris ou débutants, c'est par là !"
          navigationUrl="/autres"
          image="/roleplay.png"
        />
      </Flex>
    </Flex>
  );
};

export default HomeContentBoxes;
