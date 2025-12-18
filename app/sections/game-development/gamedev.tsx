"use client"

import Preview from "@/app/components/preview_terminal/preview"
import { PreviewContentProps } from "@/app/components/preview_terminal/preview"
import useOnScreen from "@/app/components/custom_hooks/useOnScreen"
import { useRef } from "react"
import "./gamedev_animations.css"
import blender from "../../assets/gamedev_stack/blender.svg"
import godot from "../../assets/gamedev_stack/godot.svg"
import Image from "next/image"

const tech_stack = [
    blender,
    godot
]

const content = {
    title: 'Game Development',
    paragraph: 'I use Arch BTW',
    button: ['open project','view github repo']
}

const preview: PreviewContentProps[] = [
    {
        image: "https://placehold.co/400",
        title: "",
        desc: "",
        buttonChildren: ""
    },
    {
        image: "https://placehold.co/400",
        title: "",
        desc: "",
        buttonChildren: ""
    },
    {
        image: "https://placehold.co/400",
        title: "",
        desc: "",
        buttonChildren: ""
    },
    {
        image: "https://placehold.co/400",
        title: "",
        desc: "",
        buttonChildren: ""
    }
]

export default function GameDev() {
    const elementRef = useRef(null);
    const isOnScreen = useOnScreen(elementRef);

    const getAnimationClass = (baseClass: string, animationClass: string) => {
        return isOnScreen ? `${baseClass} ${animationClass}` : 'opacity-0';
    };

    return (
        <section className="flex flex-col flex-wrap justify-center items-center w-full min-h-screen text-white" ref={elementRef}>
            <div className="w-[80vw] flex flex-row text-center items-center justify-center">
                <div className={"flex flex-row flex-wrap gap-10 p-10 m-10" + getAnimationClass("object", "down")}>
                    {tech_stack.map((item,index)=>(
                        <Image key={index} src={item} alt="null" width={60} height={60}/>
                    ))}
                </div>
                <div className="flex flex-col gap-4 text-left">
                    <TitleBar className={getAnimationClass("object", "right")} />
                    <Body className={getAnimationClass("object", "left")} />
                    <Buttons className={getAnimationClass("object", "up")} />
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
        <div className={"bg-white p-4 min-w-70 " + (className ?? "")}>
            <h1 className="text-black text-2xl">{content.title}</h1>
        </div>
    )
}