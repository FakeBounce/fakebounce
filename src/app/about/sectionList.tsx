import React from 'react';
import { Trans } from '@lingui/macro';
import eternalSearch from '../../assets/images/eternalSearch.png';
import eternalSearchInverted from '../../assets/images/eternalSearch_inverted.png';
import notOnly from '../../assets/images/notOnly.png';
import notOnlyInverted from '../../assets/images/notOnly_inverted.png';
import whatILike from '../../assets/images/whatILike.png';
import whatILikeInverted from '../../assets/images/whatILike_inverted.png';
import whoAmI from '../../assets/images/whoAmI.png';
import whoAmIInverted from '../../assets/images/whoAmI_inverted.png';

export type TAboutSection = {
  title: React.ReactNode;
  description: React.ReactNode;
  imageSrc: string;
  imageInvertedSrc: string;
};

export const sections = [
  {
    title: <Trans>Qui suis-je ?</Trans>,
    description: (
      <Trans>
        Passionné d&apos;optimisation, je suis depuis tout petit plongé dans des univers
        fantastiques. En m&apos;orientant dans une école d&apos;informatique, j&apos;ai compris
        rapidement que le développement était fait pour moi. Développer est un art, je prends
        plaisir dans chaque projet que je conçois. Que ce soit pour des entreprises ou pour mon
        plaisir personnel, je laisse s&apos;exprimer mon envie de créer.
      </Trans>
    ),
    imageSrc: whoAmI,
    imageInvertedSrc: whoAmIInverted
  },
  {
    title: <Trans>Ce que j&apos;aime</Trans>,
    description: (
      <Trans>
        Que ce soit dans mes passions, tel que le modélisme, les jeux de rôle, l&apos;écriture, ou
        dans le travail, je met un point d&apos;honneur sur la qualité. Je passe mon temps à
        améliorer, peaufiner, à essayer d&apos;avoir la meilleure version possible, à mon sens, de
        mes créations. J&apos;apprécie les critiques constructives, et n&apos;hésite pas à en faire
        de même.
      </Trans>
    ),
    imageSrc: whatILike,
    imageInvertedSrc: whatILikeInverted
  },
  {
    title: <Trans>Mais pas que</Trans>,
    description: (
      <Trans>
        L&apos;art, c&apos;est fait pour être partagé, ce serait triste de le laisser prendre la
        poussière. C&apos;est en faisant découvrir et en apprenant de nouvelles choses que l&apos;on
        progresse, je n&apos;hésite pas à me lancer vers de nouveaux horizons. Ayant un esprit
        compétitif de nature, les challenges ne me font pas peur, bien au contraire.
      </Trans>
    ),
    imageSrc: notOnly,
    imageInvertedSrc: notOnlyInverted
  },
  {
    title: <Trans>En recherche éternelle</Trans>,
    description: (
      <Trans>
        Après des années de quête, je connais mon outil de prédilection: le développement.
        Cependant, ayant besoin d&apos;être constamment stimulé, je n&apos;ai pas encore trouvé
        l&apos;univers dans lequel je pourrais investir tout mon potentiel. Est si c&apos;était le
        vôtre ?
      </Trans>
    ),
    imageSrc: eternalSearch,
    imageInvertedSrc: eternalSearchInverted
  }
];
