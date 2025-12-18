"use client"

import useOnScreen from "@/app/components/custom_hooks/useOnScreen";
import {useRef} from "react";
import useTypeWritterEffect from "@/app/components/custom_hooks/useTypeWritterEffect";
import "./introduction_animations.css"

export default function Introduction(){
    const elementRef = useRef(null);
    const isOnScreen = useOnScreen(elementRef);
    
    const getAnimationClass = (baseClass: string, animationClass: string) => {
        return isOnScreen ? `${baseClass} ${animationClass}` : 'opacity-0';
    };

    const title = "< \"Hi, My name is Albert and I am a fullstack software engineer\" />"
    const typeWritter = useTypeWritterEffect(title,isOnScreen,1000,50);

    return (
        <section className={"flex flex-col flex-wrap gap-10 justify-center items-center w-full min-h-screen text-white "} ref={elementRef}>
            <div className={"w-[40%] flex text-center items-center"}>
                <h1 className={"text-5xl"}>{typeWritter}</h1>
            </div>
            <div className={getAnimationClass("object","show")}>
                <Buttons/>
            </div>
        </section>
    )
}

function Buttons({ className }: { className?: string }) {
  return (
    <div className={"flex flex-row gap-2 " + (className ?? "")}>
      <button className="cursor-pointer text border border-solid border-white w-full flex-1 p-2 rounded-[6px]">
        curriculum vitae
      </button>
      <button className="cursor-pointer text border border-solid border-white w-full flex-1 p-2 rounded-[6px]">
        certifications
      </button>
    </div>
  )
}