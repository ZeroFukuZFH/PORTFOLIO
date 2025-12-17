"use client"

import { ReactNode,  useState } from "react";

interface TerminalProps {
  children? : ReactNode;
  title? : string;
  className? : string;
  showTime? : boolean
  id? : string
}

export default function Terminal({
    children,
    className,
    id,
    title = "mnsin12 -- -zsh -- 80x24",
    showTime = true
    

}:TerminalProps){
  const [last_login] = useState<string>(new Date().toDateString().slice(0, 10) +" "+ new Date().toTimeString().slice(0, 8)); 
  return (
    <div className={`w-auto h-auto bg-[rgb(30,30,30)] text-[12px] text-white m-4 rounded-xl ${className} font-mono`} id={id}>
      <div className="p-2 border-b-2 border-b-[rgb(35,35,35)] flex items-center gap-2 bg-[rgb(28,28,28)] rounded-t-2xl">
        <MacOSWindowButtons />
        <span>{title}</span>
      </div>
      <div suppressHydrationWarning className="p-4 whitespace-pre text-left">
        {showTime && `Last login: ${last_login} on console`}
        {children}
      </div>
    </div>
  )
}

function MacOSWindowButtons() {
  return (
    <div className="flex gap-1.5 align-middle h-full">
        <div className="w-3 h-3 rounded-full bg-[#FF605C] border border-[#E33E41] hover:scale-125 transition-transform cursor-pointer"></div>
        <div className="w-3 h-3 rounded-full bg-[#FFBD44] border border-[#E1A226] hover:scale-125 transition-transform cursor-pointer"></div>
        <div className="w-3 h-3 rounded-full bg-[#00CA4E] border border-[#00A23A] hover:scale-125 transition-transform cursor-pointer"></div>
    </div>
  );
}

