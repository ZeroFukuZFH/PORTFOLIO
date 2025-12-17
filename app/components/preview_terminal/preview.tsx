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
        <div 
            className="w-[80vw] flex flex-col text-center items-center justify-center" 
            ref={elementRef}
        >
            <h1 className="mb-8">PREVIEW</h1>
            
            <div className="flex flex-row">
                <Terminal showTime={false} className={getAnimationClass("object", "first")} title="--$project-1">
                    <PreviewContent {...content[0]} />
                </Terminal>
                <Terminal showTime={false} className={getAnimationClass("object", "second")} title="--$project-2">
                    <PreviewContent {...content[1]} />
                </Terminal>
            </div>

            <div className="flex flex-row">
                <Terminal showTime={false} className={getAnimationClass("object", "third")} title="--$project-3">
                    <PreviewContent {...content[2]} />
                </Terminal >
                <Terminal showTime={false} className={getAnimationClass("object", "fourth")} title="--$project-4">
                    <PreviewContent {...content[3]} />
                </Terminal>
            </div>
        </div>
    );
}


interface PreviewProps {
    image : string;
    title : string;
    desc : string;
    buttonChildren : string;
}

function PreviewContent ({
    
    image,
    title,
    desc,
    buttonChildren,

}:PreviewProps){
    return (
        <div className="flex flex-row">
            <div className="flex-1">
                <Image src={image} width={300} height={150} alt="null"></Image>
            </div>

            <div className="flex-1 flex-col">
                <h1>{title}</h1>
                <p>{desc}</p>
                <button>{buttonChildren}</button>
            </div>
        </div>
    )
}