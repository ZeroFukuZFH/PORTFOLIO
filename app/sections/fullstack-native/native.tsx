"use client"

import Terminal from "@/app/components/ascii_renderer/terminal"
import AsciiRenderer from "@/app/components/ascii_renderer/ascii_renderer"
import Preview from "@/app/components/preview_terminal/preview"
import { PreviewContentProps } from "@/app/components/preview_terminal/preview"

const cyber_ascii : string[][] = [
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
    title: 'Native Apps',
    paragraph: 'I use Arch BTW',
    button: ['$View Credibility','$Fuck you button']
}

const preview : PreviewContentProps[] = [
        {
            image: "",
            title: "",
            desc: "",
            buttonChildren: ""
        },
        {
            image: "",
            title: "",
            desc: "",
            buttonChildren: ""
        },
        {
            image: "",
            title: "",
            desc: "",
            buttonChildren: ""
        },
        {
            image: "",
            title: "",
            desc: "",
            buttonChildren: ""
        }
]

export default function Native(){
    
    return (
        <section className="flex flex-col justify-center items-center w-full h-screen text-white">
            <div className="w-[80vw] flex flex-row text-center items-center justify-center">
                <Terminal>
                    <AsciiRenderer animated_object={cyber_ascii}/>
                </Terminal>
                <div className="flex flex-col gap-4 text-left">
                    <div className="bg-white p-4 min-w-70">
                        <h1 className="text-black text-2xl">{content.title}</h1>
                    </div>
                    <p>{content.paragraph}</p>
                    <div className="flex flex-row gap-2">
                        <button className="cursor-pointer text border border-solid border-white w-full flex-1 p-2 rounded-[6px]">{content.button[0]}</button>
                        <button className="cursor-pointer text border border-solid border-white w-full flex-1 p-2 rounded-[6px]">{content.button[1]}</button>
                    </div>
                </div>
            </div>
            <Preview content={preview}/>
        </section>
    )
}