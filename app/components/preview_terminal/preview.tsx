import Terminal from "@/app/components/ascii_renderer/terminal"
import Image from "next/image"
import { useEffect } from "react";

export interface PreviewContentProps {
    title : string;
    desc : string;
    image : string;
    buttonChildren : string;
}

export default function Preview({
    content
}:{
    content : PreviewContentProps[]
}) {
    useEffect(()=>{
       if(content.length != 4) throw new Error('Stack Overflow Error')
    },[])

    return (
        <div className="w-[80vw] flex flex-col text-center items-center justify-center">
            <h1>PREVIEW</h1>
            <div className="flex flex-row">
                <Terminal showTime={false}>
                    <PreviewContent
                        title={content[0].title}
                        desc={content[0].desc}
                        image={content[0].image}
                        buttonChildren={content[0].buttonChildren}
                    />
                </Terminal>
                <Terminal showTime={false}>
                    <PreviewContent
                        title={content[1].title}
                        desc={content[1].desc}
                        image={content[1].image}
                        buttonChildren={content[1].buttonChildren}
                    />
                </Terminal>
            </div>
            <div className="flex flex-row">
                <Terminal showTime={false}>
                    <PreviewContent
                        title={content[2].title}
                        desc={content[2].desc}
                        image={content[2].image}
                        buttonChildren={content[2].buttonChildren}
                    />
                </Terminal >
                <Terminal showTime={false}>
                    <PreviewContent
                        title={content[3].title}
                        desc={content[3].desc}
                        image={content[3].image}
                        buttonChildren={content[3].buttonChildren}
                    />
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
                <Image src={image} alt="null"></Image>
            </div>

            <div className="flex-1 flex-col">
                <h1>{title}</h1>
                <p>{desc}</p>
                <button>{buttonChildren}</button>
            </div>
        </div>
    )
}