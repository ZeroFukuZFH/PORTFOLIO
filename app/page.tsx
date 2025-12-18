"use client"

import { useRef, RefObject, JSX } from "react";
import CyberSecurity from "./sections/cybersecurity/cybersecurity";
import Native from "./sections/fullstack-native/native";
import WebDev from "./sections/fullstack-webdev/webdev";
import Introduction from "./sections/introduction/introduction";
import GameDev from "./sections/game-development/gamedev";
import Socials from "./sections/socials/socials";

interface SectionProps {
  sectionRef: RefObject<HTMLDivElement | null>;
  sectionJSX: JSX.Element;
  sectionName: string;
}

export default function Home() {

  const home = useRef<HTMLDivElement>(null);
  const webdev = useRef<HTMLDivElement>(null);
  const native = useRef<HTMLDivElement>(null);
  const cybersec = useRef<HTMLDivElement>(null);
  const socials = useRef<HTMLDivElement>(null);
  const gamedev = useRef<HTMLDivElement>(null);

  const render: SectionProps[] = [
    {
      sectionRef: home,
      sectionJSX: <Introduction />,
      sectionName: "home"
    },
    {
      sectionRef: webdev,
      sectionJSX: <WebDev />,
      sectionName: "web dev"
    },
    {
      sectionRef: native,
      sectionJSX: <Native />,
      sectionName: "native apps"
    },
    {
      sectionRef: cybersec,
      sectionJSX: <CyberSecurity />,
      sectionName: "cybersecurity"
    },
    {
      sectionRef: gamedev,
      sectionJSX: <GameDev />,
      sectionName: "game dev"
    },
    {
      sectionRef: socials,
      sectionJSX: <Socials />,
      sectionName: "socials"
    }
  ];

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <InnerShadow />
      <SideScrollEffect 
        scrollToHome={() => scrollToSection(home)}
        scrollToWebDev={() => scrollToSection(webdev)}
        scrollToNative={() => scrollToSection(native)}
        scrollToCyberSec={() => scrollToSection(cybersec)}
        scrollToSocials={() => scrollToSection(socials)}
        scrollToGameDev={() => scrollToSection(gamedev)}
      />
      <div className="h-full w-full flex flex-col gap-80 bg-black font-mono relative">
        {render.map((section, index) => (
          <div 
            key={index} 
            ref={section.sectionRef}
            className="p-10"
          >
            {section.sectionJSX}
          </div>
        ))}
      </div>
    </>
  );
}

interface SideScrollEffectProps {
  scrollToHome: () => void;
  scrollToWebDev: () => void; 
  scrollToNative: () => void; 
  scrollToCyberSec: () => void; 
  scrollToSocials: () => void;
  scrollToGameDev: () => void;
}

function SideScrollEffect({ 
  scrollToHome,
  scrollToWebDev, 
  scrollToNative, 
  scrollToCyberSec, 
  scrollToSocials,
  scrollToGameDev
}: SideScrollEffectProps) {

  const listStyles = "opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer hover:-translate-x-2 group relative";

  return (
    <div className="fixed right-0 text-right top-1/2 transform -translate-y-1/2 p-10 text-white z-50">
      <ul className="space-y-8">
        <li className={listStyles} onClick={() => scrollToHome()}>
          <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300" />
          <span className="text-sm tracking-wider">home</span>
        </li>

        <li className={listStyles} onClick={() => scrollToWebDev()}>
          <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300" />
          <span className="text-sm tracking-wider">web dev</span>
        </li>

        <li className={listStyles} onClick={() => scrollToNative()}>
          <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300" />
          <span className="text-sm tracking-wider">native apps</span>
        </li>

        <li className={listStyles} onClick={() => scrollToCyberSec()}>
          <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300" />
          <span className="text-sm tracking-wider">cybersecurity</span>
        </li>

        <li className={listStyles} onClick={() => scrollToGameDev()}>
          <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300" />
          <span className="text-sm tracking-wider">game dev</span>
        </li>

        <li className={listStyles} onClick={() => scrollToSocials()}>
          <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300" />
          <span className="text-sm tracking-wider">socials</span>
        </li>
      </ul>
    </div>
  );
}

function InnerShadow() {
  return (
    <div className="fixed w-screen h-screen shadow-[inset_0_0_300px_50px_rgba(0,0,0,0.9)] pointer-events-none z-10" />
  );
}