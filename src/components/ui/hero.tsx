'use client';

import { useState, useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/VideoScroller/scroll-expansion-hero';
import { SparklesText } from '@/components/ui/SparklesText/sparkles-text';
import { ScrollingText } from '@/components/ui/MagicText/magic-text-export';
import { Herocta } from './GradientButtons/hero-cta';
import { TimelinePortfolio } from "@/components/ui/Timeline/timeline-export";
import { HeroScroll } from '@/components/ui/ContainerScroll/containerscroll';
import { CompetencesBloc1 } from '@/components/ui/Competences/competences-bloc1';
import { VeilleTech } from '@/components/ui/VeilleTech/veille-tech';
import { TableauSynthese } from '@/components/ui/TableauSynthese/tableau-synthese';
import MyFooter from '@/components/ui/Footer/myfooter';
import { ContactForm } from '@/components/ui/ContactForm/demo';
import { ProjectsSection } from '@/components/ui/Projects/projects-section';


interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

const sampleMediaContent: MediaContentCollection = {
   video: {
    src: '/background.mp4',
    poster:
      '/banner.png',
    background:
      '/banner.png',
    title: 'Portfolio Maxime Mansiet',
    date: 'BTS SIO SLAM · EPSI Bordeaux 2024–2026',
    scrollToExpand: 'Scroll to Expand Demo',
    about: {
      overview:
        'Portfolio professionnel de Maxime Mansiet, étudiant BTS SIO option SLAM à l\'EPSI Bordeaux. Ce dossier présente mon parcours de professionnalisation et les réalisations couvrant les 6 compétences du Bloc 1 — Épreuve E4.',
      conclusion:
        'Développeur fullstack chez Verana (2060.io), fondateur de Klyx et ingénieur logiciel chez Hop Hop Immo. Basé à Bordeaux, je construis des projets concrets à l\'intersection du web moderne, de l\'IA et de l\'identité décentralisée.',
    },
  },
   image: {
    src: '/banner.png',
    background:
      '/banner.png',
    title: 'Portfolio Maxime Mansiet',
    date: 'BTS SIO SLAM · EPSI Bordeaux 2024–2026',
    scrollToExpand: 'Scroll to Expand Demo',
    about: {
      overview:
        'Portfolio professionnel de Maxime Mansiet, étudiant BTS SIO option SLAM à l\'EPSI Bordeaux. Ce dossier présente mon parcours de professionnalisation et les réalisations couvrant les 6 compétences du Bloc 1 — Épreuve E4.',
      conclusion:
        'Développeur fullstack chez Verana (2060.io), fondateur de Klyx et ingénieur logiciel chez Hop Hop Immo. Basé à Bordeaux, je construis des projets concrets à l\'intersection du web moderne, de l\'IA et de l\'identité décentralisée.',
    },
  },
}; 

const MediaContent = ({ mediaType }: { mediaType: 'video' | 'image' }) => {

  return (
    <div data-media-type={mediaType} className="flex flex-col items-center justify-start min-h-screen w-full">
      {/* Première section avec SparklesText et CTA */}
      <div id="home" className="flex flex-col items-center justify-start md:justify-center min-h-[80vh] md:min-h-screen w-full pt-16 md:pt-0">
        <div className="flex flex-col items-center justify-center w-full h-full max-w-4xl px-4">
          <SparklesText text="Bienvenue !" />
          <div className="mt-2">
            <ScrollingText />
            <Herocta />
          </div>
        </div>
      </div>
      
      {/* Section Timeline (Parcours) */}
      <div id="timeline" className="w-full relative -mt-32">
        <TimelinePortfolio />
      </div>
      
      {/* Section Projets */}
      <div id="projects-cards" className="w-full relative">
        <ProjectsSection />
      </div>
      
      {/* Section Compétences Bloc 1 — BTS SIO E4 */}
      <div id="competences-bloc1" className="w-full relative">
        <CompetencesBloc1 />
      </div>

      {/* Section Veille Technologique */}
      <div id="veille-tech" className="w-full relative">
        <VeilleTech />
      </div>

      {/* Section Tableau de Synthèse */}
      <div id="tableau-synthese" className="w-full relative">
        <TableauSynthese />
      </div>

      {/* Section LinkedIn (avec HeroScroll/ContainerScroll) */}
      <div id="skills" className="w-full relative">
        <HeroScroll />
      </div>
      
      {/* Section Contact - juste avant le footer */}
      <div id="contact" className="w-full relative">
        <ContactForm />
      </div>
      
      <div className="w-full relative">
        <MyFooter />
      </div>
    </div>
  );
};

export const VideoExpansionTextBlend = () => {
  const mediaType = 'video';
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansionTextBlend = () => {
  const mediaType = 'video';
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const VideoExpansion = () => {
  const mediaType = 'video';
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansion = () => {
  const mediaType = 'video';
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

const Hero = () => {
  const [mediaType] = useState('video');
  const currentMedia = sampleMediaContent[mediaType]

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, [mediaType]);

  return (
    <div className='min-h-screen'>
      {/* <div className='fixed top-4 right-4 z-50 flex gap-2'>
        <button
          onClick={() => setMediaType('video')}
          className={`px-4 py-2 rounded-lg ${
            mediaType === 'video'
              ? 'bg-white text-black'
              : 'bg-black/50 text-white border border-white/30'
          }`}
        >
          Video
        </button>

        <button
          onClick={() => setMediaType('image')}
          className={`px-4 py-2 rounded-lg ${
            mediaType === 'image'
              ? 'bg-white text-black'
              : 'bg-black/50 text-white border border-white/30'
          }`}
        >
          Image
        </button>
      </div> */}

      <ScrollExpandMedia
        mediaType={mediaType as 'video' | 'image'}
        mediaSrc={currentMedia.src}
        posterSrc={mediaType === 'video' ? currentMedia.poster : undefined}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
      >
        <MediaContent mediaType={mediaType as 'video' | 'image'} />
      </ScrollExpandMedia>
    </div>
  );
};

export default Hero;
