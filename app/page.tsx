"use client"

import { useRef, RefObject, JSX } from "react";
import CyberSecurity from "./sections/cybersecurity/cybersecurity";
import Native from "./sections/fullstack-native/native";
import WebDev from "./sections/fullstack-webdev/webdev";
import Introduction from "./sections/introduction/introduction";
import GameDev from "./sections/game-development/gamedev";
import Socials from "./sections/socials/socials";
import OtherProjects from "./sections/other_projects/other_projects";
import EmbeddedSystems from "./sections/embedded_systems/embedded_systems";
export interface SectionProps {
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
  const embedded = useRef<HTMLDivElement>(null);
  const others = useRef<HTMLDivElement>(null);

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
      sectionRef: embedded,
      sectionJSX: <EmbeddedSystems/>,
      sectionName: "embedded systems"
    },
    {
      sectionRef: others,
      sectionJSX: <OtherProjects/>,
      sectionName: "others"
    },
    {
      sectionRef: socials,
      sectionJSX: <Socials />,
      sectionName: "socials"
    }
  ];
  
  return (
    <>
      <InnerShadow />
      <SideScrollEffect collection={render} />
      <div className="h-full w-full flex flex-col justify-center gap-80 bg-black font-mono relative">
        {render.map((section, index) => (
          <div key={index} ref={section.sectionRef}>
            {section.sectionJSX}
          </div>
        ))}
      </div>
    </>
  );
}

function SideScrollEffect({ 
  collection,
}: {collection:SectionProps[]}) {

    const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref?.current) {
          ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

  const listStyles = "opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer hover:-translate-x-2 group relative";
    
  return (
    <div className="fixed right-0 text-right top-1/2 transform -translate-y-1/2 p-10 text-white z-50">
      <ul className="space-y-8">
        {collection.map((item,index)=>(
            <li className={listStyles} key={index} onClick={() => scrollToSection(item.sectionRef)}>
                <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300" />
                <span className="text-sm tracking-wider">{item.sectionName}</span>
            </li>
        ))}
      </ul>
    </div>
  );
}

function InnerShadow() {
  return (
    <div className="fixed w-screen h-screen shadow-[inset_0_0_300px_50px_rgba(0,0,0,0.9)] pointer-events-none z-10" />
  );
}