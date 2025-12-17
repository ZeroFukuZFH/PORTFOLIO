"use client"

import Terminal from "@/app/components/ascii_renderer/terminal"
import AsciiRenderer from "@/app/components/ascii_renderer/ascii_renderer"
import Preview from "@/app/components/preview_terminal/preview"
import { PreviewContentProps } from "@/app/components/preview_terminal/preview"
import useOnScreen from "@/app/components/custom_hooks/useOnScreen"
import { Ref, useRef } from "react"
import "./webdev_animations.css"

const cyber_ascii: string[][] = [
    [
        "             .:               ",
        "             *@.              ",
        "            -@@@.             ",
        "           :@@@@%.            ",
        "          .@@@@@@*            ",
        "         .%:%@@@@@+           ",
        "         %@@@@@@@@@+          ",
        "        #@@@@@@@@@@@=         ",
        "       #@@@@@@@@@@@@@=        ",
        "      %@@@@@%:.+@@@@@@=       ",
        "     @@@@@@#    .@@@@@@-      ",
        "   .%@@@@@@.     *@@@@#@-     ",
        "  .@@@@@@@@.     +@@@@@@@-    ",
        " .%@@@@#=..       .-+@@@@@-   ",
        ".%@%.                 .=@@=.  ",
        "-.                        ::. "
    ]
]

const content = {
    title: 'Web Development',
    paragraph: 'I use Arch BTW',
    button: ['$View Credibility', '$Fuck you button']
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

export default function WebDev() {
    const elementRef = useRef(null);
    const isOnScreen = useOnScreen(elementRef);

    const getAnimationClass = (baseClass: string, animationClass: string) => {
        return isOnScreen ? `${baseClass} ${animationClass}` : 'opacity-0';
    };

    return (
        <section className="flex flex-col justify-center items-center w-full h-auto text-white" ref={elementRef}>
            <div className="w-[80vw] flex flex-row text-center items-center justify-center">
                <Terminal className={getAnimationClass("object", "down")}>
                    <AsciiRenderer animated_object={cyber_ascii} />
                </Terminal>
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
            <button className="cursor-pointer text border border-solid border-white w-full flex-1 p-2 rounded-[6px]">{content.button[0]}</button>
            <button className="cursor-pointer text border border-solid border-white w-full flex-1 p-2 rounded-[6px]">{content.button[1]}</button>
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