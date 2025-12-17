"use client"

import { useRef } from "react";
import CyberSecurity from "./sections/cybersecurity/cybersecurity";
import Native from "./sections/fullstack-native/native";
import WebDev from "./sections/fullstack-webdev/webdev";
import Introduction from "./sections/introduction/introduction";

export default function Home() {

  const webdev = useRef<HTMLDivElement>(null);
  const native = useRef<HTMLDivElement>(null);
  const cybersec = useRef<HTMLDivElement>(null);
  const socials = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-full w-full flex flex-col bg-black font-mono relative">
      <InnerShadow />
      <SideScrollEffect 
        scrollToWebDev={() => scrollToSection(webdev)}
        scrollToNative={() => scrollToSection(native)}
        scrollToCyberSec={() => scrollToSection(cybersec)}
        scrollToSocials={() => scrollToSection(socials)}
      />
      
      <Introduction />
      
      <div ref={webdev} id="webdev-section"><WebDev /></div>
      <div className="h-[50vh]" />
      
      <div ref={native} id="native-section"><Native /></div>
      <div className="h-[50vh]" />
      
      <div ref={cybersec} id="cybersec-section"><CyberSecurity /></div>
      <div className="h-[50vh]" />
      
      <div ref={socials} id="socials-section" />
    </div>
  );
}

interface SideScrollEffectProps {
  scrollToWebDev: () => void; 
  scrollToNative: () => void; 
  scrollToCyberSec: () => void; 
  scrollToSocials: () => void;
}

function SideScrollEffect({ 
  scrollToWebDev, 
  scrollToNative, 
  scrollToCyberSec, 
  scrollToSocials 
}: SideScrollEffectProps) {

  const listStyles = "opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer hover:-translate-x-2 group relative";

  return (
    <div className="fixed right-0 text-right top-1/2 transform -translate-y-1/2 p-10 text-white z-50">
      <ul className="space-y-8">
        <li className={listStyles} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300" />
          <span className="text-sm uppercase tracking-wider">home</span>
        </li>

        <li className={listStyles} onClick={() => scrollToWebDev()}>
          <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300" />
          <span className="text-sm uppercase tracking-wider">web dev</span>
        </li>

        <li className={listStyles} onClick={() => scrollToNative()}>
          <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300" />
          <span className="text-sm uppercase tracking-wider">native apps</span>
        </li>

        <li className={listStyles} onClick={() => scrollToCyberSec()}>
          <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300" />
          <span className="text-sm uppercase tracking-wider">cybersecurity</span>
        </li>

        <li className={listStyles} onClick={() => scrollToSocials()}>
          <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300" />
          <span className="text-sm uppercase tracking-wider">socials</span>
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