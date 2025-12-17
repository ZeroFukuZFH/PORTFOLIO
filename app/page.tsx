"use client"

import CyberSecurity from "./sections/cybersecurity/cybersecurity";
import Native from "./sections/fullstack-native/native";
import WebDev from "./sections/fullstack-webdev/webdev";
import Introduction from "./sections/introduction/introduction";

export default function Home() {

  return (
    <div className="h-full w-full flex flex-col bg-black font-mono">
      <Introduction/>
      <WebDev/>
      <Native/>
      <CyberSecurity/>
    </div>
    
  );
}

