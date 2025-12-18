"use client"

import Preview from "@/app/components/preview_terminal/preview"
import { PreviewContentProps } from "@/app/components/preview_terminal/preview"
import useOnScreen from "@/app/components/custom_hooks/useOnScreen"
import { useRef } from "react"
import python from "../../assets/embedded_stack/python.svg"
import embedded from "../../assets/embedded_stack/cplusplus.svg"
import Image from "next/image"

const tech_stack = [
    python,
    embedded
]

const content = {
    title: 'Embedded Systems',
    paragraph: 'I use Arch BTW',
    button: ['open project','view github repo']
}

const preview: PreviewContentProps[] = [
    {
        image: "https://placehold.co/400",
        title: "DIY N.A.S setup / mini-server",
        desc: "Needed a mini Server to store our project data for Machine-Learning and electronic systems",
        buttonChildren: "open project"
    },
    {
        image: "https://placehold.co/400",
        title: "Gesture Recognition with Neural Networks",
        desc: "I wanted to be tony stark for i guess (?). this was an application of my knowledge acquired after backtesting some strategies for quantitative trading",
        buttonChildren: "open project"
    },
]

export default function EmbeddedSystems() {
    const elementRef = useRef(null);
    const isOnScreen = useOnScreen(elementRef);

    const getAnimationClass = (baseClass: string, animationClass: string) => {
        return isOnScreen ? `${baseClass} ${animationClass}` : 'opacity-0';
    };

    return (
            <section className="flex flex-col justify-center items-center min-h-screen w-screen text-white py-60 sm:py-40 lg:py-50 px-4 sm:px-6 lg:px-8" ref={elementRef}>
                
                <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-16 w-full max-w-7xl">
                    
                    <div className={"flex flex-row flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10 p-6 md:p-8 lg:p-10 order-2 lg:order-1" + getAnimationClass("object", "down")}>
                        {tech_stack.map((item,index)=>(
                            <Image key={index} src={item} alt="tech stack icon" width={56} height={56} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
                        ))}
                    </div>
    
                    <div className="flex flex-col justify-center items-center lg:items-start gap-4 sm:gap-6 text-center lg:text-left w-full lg:w-auto order-1 lg:order-2">
                        <div className="w-full flex justify-center lg:justify-start">
                            <TitleBar className={getAnimationClass("object", "right")} />
                        </div>
                        <div className="w-full max-w-2xl">
                            <Body className={getAnimationClass("object", "left") + " text-center lg:text-left"} />
                        </div>
                        <div className="w-full flex justify-center lg:justify-start">
                            <Buttons className={getAnimationClass("object", "up")} />
                        </div>
                    </div>
                </div>
    
                <Preview content={preview} />
            </section>
        )
}

function Buttons({ className }: { className?: string }) {
  return (
    <div className={"flex flex-row gap-2 " + (className ?? "")}>
      <button className="cursor-pointer text border border-solid border-white w-full flex-1 p-2 rounded-[6px]">
        {content.button[0]}
      </button>
      <button className="cursor-pointer text border border-solid border-white w-full flex-1 p-2 rounded-[6px]">
        {content.button[1]}
      </button>
    </div>
  )
}

function Body({ className }: { className?: string }) {
    return <p className={className}>{content.paragraph}</p>
}

function TitleBar({ className }: { className?: string }) {
    return (
        <div className={"flex flex-wrap bg-white p-4 min-w-70 " + (className ?? "")}>
            <h1 className="flex flex-wrap text-black text-2xl">{content.title}</h1>
        </div>
    )
}