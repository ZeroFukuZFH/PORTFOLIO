"use client"

import useOnScreen from "@/app/components/custom_hooks/useOnScreen";
import { useRef } from "react";
import useTypeWritterEffect from "@/app/components/custom_hooks/useTypeWritterEffect";
import "./introduction_animations.css"

export default function Introduction() {
    const elementRef = useRef(null);
    const isOnScreen = useOnScreen(elementRef);
    
    const getAnimationClass = (baseClass: string, animationClass: string) => {
        return isOnScreen ? `${baseClass} ${animationClass}` : 'opacity-0';
    };

    const title = "< \"Hi, My name is Albert and I am a fullstack software engineer\" />"
    const typeWritter = useTypeWritterEffect(title, isOnScreen, 1000, 50);

    return (
        <section className="flex flex-col flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center items-center w-full min-h-screen text-white px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24" ref={elementRef}>
        
            <div className="w-full px-4 sm:px-0 sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 flex justify-center text-center items-center">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium leading-relaxed sm:leading-snug md:leading-normal lg:leading-tight">
                    {typeWritter}
                </h1>
            </div>
            
            <div className={getAnimationClass("object", "show") + " w-full sm:w-auto"}>
                <Buttons className="px-4 sm:px-0"/>
            </div>
        </section>
    )
}

function Buttons({ className }: { className?: string }) {
    return (
        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 w-full sm:w-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl ${className ?? ""}`}>
            <button className="cursor-pointer text border border-solid border-white w-full px-4 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 rounded-[6px] text-sm sm:text-base md:text-lg lg:text-xl hover:bg-white hover:text-black transition-all duration-300 active:scale-[0.98]">
                curriculum vitae
            </button>
            <button className="cursor-pointer text border border-solid border-white w-full px-4 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 rounded-[6px] text-sm sm:text-base md:text-lg lg:text-xl hover:bg-white hover:text-black transition-all duration-300 active:scale-[0.98]">
                certifications
            </button>
        </div>
    )
}