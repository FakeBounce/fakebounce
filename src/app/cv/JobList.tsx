import React from 'react';
import { Trans } from '@lingui/macro';
import axioneIcon from '../../assets/images/axione.jpg';
import chanelIcon from '../../assets/images/chanel.png';
import coreozIcon from '../../assets/images/coreoz.png';
import hnIcon from '../../assets/images/hn.png';
import laPosteIcon from '../../assets/images/la-poste.jpg';
import paprecIcon from '../../assets/images/paprec.png';
import parisBeauteIcon from '../../assets/images/paris-beaute.jpeg';

export interface IJobItem {
  jobImage: string;
  jobCompany: string;
  jobDate: React.ReactNode;
  jobTitle: React.ReactNode;
  jobDescription: React.ReactNode;
}

export const jobsList: IJobItem[] = [
  {
    jobImage: axioneIcon,
    jobCompany: 'Axione',
    jobDate: <Trans>Fév 2022 - Mars 2023</Trans>,
    jobTitle: <Trans>Dévellopeur Front-end</Trans>,
    jobDescription: (
      <Trans>
        Création d’une nouvelle application web interne/B2B regroupant les différents outils
        existants et en améliorant l&apos;interface graphique
      </Trans>
    )
  },
  {
    jobImage: coreozIcon,
    jobCompany: 'Coreoz',
    jobDate: <Trans>Nov 2021 - Fév 2022</Trans>,
    jobTitle: <Trans>Dévellopeur Front-end</Trans>,
    jobDescription: (
      <Trans>
        Développement d’un site de vente en ligne responsive optimisé pour un client final
      </Trans>
    )
  },
  {
    jobImage: chanelIcon,
    jobCompany: 'Chanel',
    jobDate: <Trans>Nov 2019 - Nov 2020</Trans>,
    jobTitle: <Trans>Dévellopeur Front-end</Trans>,
    jobDescription: (
      <Trans>
        Mise en place d’applications web, native, et évolution de petits projets dont l’objectif
        principal est d’offrir une aide quotidienne à différents pôles Chanel
      </Trans>
    )
  },

  {
    jobImage: paprecIcon,
    jobCompany: 'Paprec',
    jobDate: <Trans>Fév 2018 - Oct 2019</Trans>,
    jobTitle: <Trans>Dévellopeur Full stack</Trans>,
    jobDescription: (
      <Trans>
        Développement d’applications à destination des clients de Paprec, ces dernières doivent
        permettre la commande et le suivi des prestations proposées par le groupe
      </Trans>
    )
  },

  {
    jobImage: laPosteIcon,
    jobCompany: 'Groupe La Poste',
    jobDate: <Trans>Oct 2017 - Nov 2018</Trans>,
    jobTitle: <Trans>Dévellopeur Fullstack</Trans>,
    jobDescription: <Trans>Intervention sur le projet Tirelire Connectée Monimalz</Trans>
  },

  {
    jobImage: hnIcon,
    jobCompany: 'Groupe HN',
    jobDate: <Trans>Oct 2016 - Sept 2017</Trans>,
    jobTitle: <Trans>Dévellopeur PHP Fullstack</Trans>,
    jobDescription: (
      <Trans>
        Reprise et développement d’une application de gestion de devis, support applicatif et TMA de
        l’intranet
      </Trans>
    )
  },

  {
    jobImage: parisBeauteIcon,
    jobCompany: 'Paris beauté',
    jobDate: <Trans>Fév 2015 - Juillet 2016</Trans>,
    jobTitle: <Trans>Dévellopeur PHP Fullstack</Trans>,
    jobDescription: (
      <Trans>
        Développement et maintenance de sites web vitrine et back-office pour des clients divers
      </Trans>
    )
  }
];
