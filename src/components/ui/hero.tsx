'use client';

import { useState, useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/VideoScroller/scroll-expansion-hero';
import { SparklesText } from '@/components/ui/SparklesText/sparkles-text';
import { ScrollingText } from '@/components/ui/MagicText/magic-text-export';
import { Herocta } from './GradientButtons/hero-cta';
import { TimelinePortfolio } from "@/components/ui/Timeline/timeline-export";
import { GlowingEffectDemoSecond } from '@/components/ui/Glowing/glowing-export';
import { HeroScroll } from '@/components/ui/VideoScroller/containerscroll';
import MyFooter from '@/components/ui/Footer/myfooter';
import { ContactForm } from '@/components/ui/ContactForm/demo';


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
      '/moi.png',
    background:
      '/moi.png',
    title: 'Rencontrez Maxime Mansiet',
    date: 'Développeur Full-Stack & Entrepreneur',
    scrollToExpand: 'Scroll to Expand Demo',
    about: {
      overview:
        'Portfolio de Maxime Mansiet, développeur full-stack et entrepreneur basé à Bordeaux. Spécialisé en React, Next.js et développement web moderne. Fondateur de Klyx et VertiFlow.',
      conclusion:
        'Découvrez mes projets et expériences en développement web, entrepreneuriat et communauté tech. Basé à Bordeaux, je suis ouvert aux projets ambitieux.',
    },
  }, 
   image: {
    src: '/moi.png',
    background:
      '/test.jpg',
    title: 'Maxime Mansiet - Portfolio',
    date: 'Développeur Full-Stack & Entrepreneur',
    scrollToExpand: 'Scroll to Expand Demo',
    about: {
      overview:
        'Portfolio de Maxime Mansiet, développeur full-stack et entrepreneur basé à Bordeaux. Spécialisé en React, Next.js et développement web moderne. Fondateur de Klyx et VertiFlow.',
      conclusion:
        'Découvrez mes projets et expériences en développement web, entrepreneuriat et communauté tech. Basé à Bordeaux, je suis ouvert aux projets ambitieux.',
    },
  },
}; 

const MediaContent = ({ mediaType }: { mediaType: 'video' | 'image' }) => {
  const currentMedia = sampleMediaContent[mediaType];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full">
      {/* Première section avec SparklesText et CTA */}
      <div className="flex flex-col items-center justify-center min-h-screen w-full">
        <div className="flex flex-col items-center justify-center w-full h-full max-w-4xl">
          <SparklesText text="Bienvenue !" />
          <div className="mt-2">
            <ScrollingText />
            <Herocta />
          </div>
        </div>
      </div>
      
      {/* Section Timeline */}
      <div id="timeline" className="w-full relative -mt-32">
        <TimelinePortfolio />
      </div>
      
      <div className="w-full relative">
        <GlowingEffectDemoSecond />
        <HeroScroll />
        <ContactForm />
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
  const [mediaType, setMediaType] = useState('video');
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
