"use client"

import useOnScreen from "@/app/components/custom_hooks/useOnScreen";
import { useRef } from "react";
import Image from "next/image";
import github from "../../assets/socials/github.svg"
import gmail from "../../assets/socials/gmail.svg";
import instagram from "../../assets/socials/instagram.svg";
import x from "../../assets/socials/x.svg";
import useDelayString from "@/app/components/custom_hooks/useDelayString";
import Link from "next/link";
import { IconProps } from "@/app/components/custom_hooks/useDelayString";

const svg : IconProps[] = [
    {
        icon:github,
        link:'#',
    },
    {
        icon:gmail,
        link:'#'
    },
    {
        icon:instagram,
        link:'https://www.instagram.com/zfcksgiven/',
    },
    {
        icon:x,
        link:'#',
    }
]


export default function Socials() {
    const elementRef = useRef(null);
    const isOnScreen = useOnScreen(elementRef);
    const delayedSvg = useDelayString(svg,isOnScreen)

    return (
        <section className="flex flex-col min-h-screen w-screen text-white justify-center items-center gap-5" ref={elementRef}>
            <h1>SOCIALS</h1>
            <DelayMapping toMap={delayedSvg}/>
        </section>
    )
}

function DelayMapping({toMap}:{toMap:IconProps[]}){
    return (
        <div className="flex flex-row gap-10">
            {toMap.map((item,index)=>(
                <div key={index}>
                    <Link href={item.link}><Image src={item.icon} width={32} height={32} alt="null"/></Link>
                </div>
            ))}
        </div>
    )
}