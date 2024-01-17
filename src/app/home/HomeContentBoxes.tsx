import { Flex } from '@chakra-ui/react';
import PageDescriptionBox from './PageDescriptionBox';
import React from 'react';
import { Trans } from '@lingui/macro';
import brainImage from '../../assets/images/brain.png';
import cvImage from '../../assets/images/cv.png';
import roleplayImage from '../../assets/images/roleplay.png';

const HomeContentBoxes: React.FC = () => {
  return (
    <>
      <Flex flexDirection={['column', 'row']} width="full" justifyContent="space-between">
        {/* CV */}
        <Flex flexDirection="column" flex={['1', '1']} width="full" mb={['4', '0']} mr={['0', '4']}>
          <PageDescriptionBox
            title={<Trans>Mon expérience ?</Trans>}
            text={<Trans>Pour mon parcours de vie professionnel c&apos;est ici !</Trans>}
            navigationUrl="/cv"
            image={cvImage}
          />
        </Flex>

        {/* A propos */}
        <Flex flexDirection="column" flex={['1', '1']} width="full" mb={['4', '0']} mr={['0', '4']}>
          <PageDescriptionBox
            title={<Trans>Me découvrir ?</Trans>}
            text={<Trans>Pour en apprendre plus sur moi et mes passions !</Trans>}
            navigationUrl="/about"
            image={brainImage}
          />
        </Flex>
      </Flex>

      <Flex
        flexDirection="column"
        flex={['1', '1']}
        w={['100%', '50%']}
        mb={['4', '0']}
        mr={['0', '4']}
      >
        {/* Others */}
        <PageDescriptionBox
          title={<Trans>Autre ?</Trans>}
          text={<Trans>Pour les rôlistes aguerris ou débutants, c&apos;est par là !</Trans>}
          navigationUrl="/autre"
          image={roleplayImage}
        />
      </Flex>
    </>
  );
};

export default HomeContentBoxes;
