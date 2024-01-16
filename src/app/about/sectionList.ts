import eternalSearch from '../../assets/images/eternalSearch.png';
import eternalSearchInverted from '../../assets/images/eternalSearch_inverted.png';
import notOnly from '../../assets/images/notOnly.png';
import notOnlyInverted from '../../assets/images/notOnly_inverted.png';
import whatILike from '../../assets/images/whatILike.png';
import whatILikeInverted from '../../assets/images/whatILike_inverted.png';
import whoAmI from '../../assets/images/whoAmI.png';
import whoAmIInverted from '../../assets/images/whoAmI_inverted.png';

export type TAboutSection = {
  title: string;
  description: string;
  imageSrc: string;
  imageInvertedSrc: string;
};

export const sections = [
  {
    title: 'Qui suis-je ?',
    description:
      "Passionné d'optimisation, je suis depuis tout petit plongé dans des univers fantastiques. En m'orientant dans une école d'informatique, j'ai compris rapidement que le développement était fait pour moi. Développer est un art, je prends plaisir dans chaque projet que je conçois. Que ce soit pour des entreprises ou pour mon plaisir personnel, je laisse s'exprimer mon envie de créer.",
    imageSrc: whoAmI,
    imageInvertedSrc: whoAmIInverted
  },
  {
    title: "Ce que j'aime",
    description:
      "Que ce soit dans mes passions, tel que le modélisme, les jeux de rôle, l'écriture, ou dans le travail, je met un point d'honneur sur la qualité. Je passe mon temps à améliorer, peaufiner, à essayer d'avoir la meilleure version possible, à mon sens, de mes créations. J'apprécie les critiques constructives, et n'hésite pas à en faire de même.",
    imageSrc: whatILike,
    imageInvertedSrc: whatILikeInverted
  },
  {
    title: 'Mais pas que',
    description:
      "L'art, c'est fait pour être partagé, ce serait triste de le laisser prendre la poussière. C'est en faisant découvrir et en apprenant de nouvelles choses que l'on progresse, je n'hésite pas à me lancer vers de nouveaux horizons. Ayant un esprit compétitif de nature, les challenges ne me font pas peur, bien au contraire.",
    imageSrc: notOnly,
    imageInvertedSrc: notOnlyInverted
  },
  {
    title: 'En recherche éternelle',
    description:
      "Après des années de quête, je connais mon outil de prédilection: le développement. Cependant, ayant besoin d'être constamment stimulé, je n'ai pas encore trouvé l'univers dans lequel je pourrais investir tout mon potentiel. Est si c'était le vôtre ? En tout cas, ça n'a jamais été de bonne augure que je soit dans l'équipe opposée.",
    imageSrc: eternalSearch,
    imageInvertedSrc: eternalSearchInverted
  }
];
