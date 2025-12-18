import Terminal from "@/app/components/ascii_renderer/terminal"
import Image from "next/image"
import {useRef} from "react";
import useOnScreen from "../custom_hooks/useOnScreen";
import "./preview_animations.css"

export interface PreviewContentProps {
    title : string;
    desc : string;
    image : string;
    buttonChildren : string;
}

export default function Preview({ content }: { content: PreviewContentProps[] }) {
    const elementRef = useRef(null);
    const isOnScreen = useOnScreen(elementRef);

    const getAnimationClass = (baseClass: string, animationClass: string) => {
        return isOnScreen ? `${baseClass} ${animationClass}` : 'opacity-0';
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 flex flex-col items-center justify-center text-center" ref={elementRef}>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 lg:mb-10">PREVIEW</h1>
            
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-10 w-full">
                <Terminal showTime={false} className={`w-full lg:w-1/2 ${getAnimationClass("object", "first")}`} title="--$project-1">
                    <PreviewContent image={content[0].image} title={content[0].title} desc={content[0].desc} buttonChildren={content[0].buttonChildren} />
                </Terminal>
                <Terminal showTime={false} className={`w-full lg:w-1/2 ${getAnimationClass("object", "second")}`} title="--$project-2">
                    <PreviewContent image={content[1].image} title={content[1].title} desc={content[1].desc} buttonChildren={content[1].buttonChildren} />
                </Terminal>
            </div>
            
            <button className="border-2 border-solid border-white px-5 sm:px-6 py-2.5 sm:py-3 mt-6 sm:mt-8 lg:mt-10 cursor-pointer rounded-xl hover:bg-white hover:text-black transition-all duration-300 active:scale-[0.98] text-xs sm:text-sm md:text-base">
                see more
            </button>
        </div>
    );
}

interface PreviewProps {
    image : string;
    title : string;
    desc : string;
    buttonChildren : string;
}

function PreviewContent({
    image,
    title,
    desc,
    buttonChildren,
}: PreviewProps) {
    return (
        <div className="w-full overflow-y-auto flex flex-col md:flex-row gap-3 md:gap-4 p-3">

            <div className="flex-1 flex flex-wrap justify-center md:justify-start">
                <div className="relative w-full max-w-xs h-32 sm:h-36 md:h-40 lg:h-44">
                    <Image src={image} fill alt={title || "Project preview"} className="object-cover rounded-lg" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                </div>
            </div>

            <div className="flex-1 flex flex-col flex-wrapjustify-center items-center md:items-start text-center md:text-left gap-2 sm:gap-3">
                <h1 className="wrap-break-word whitespace-normal text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">{title}</h1>
                <p className="wrap-break-word whitespace-normal text-xs sm:text-sm md:text-base text-gray-300 line-clamp-3">{desc}</p>
                <button className="border border-solid border-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300 active:scale-[0.98] text-xs sm:text-sm">
                    {buttonChildren}
                </button>
            </div>
        </div>
    )
}