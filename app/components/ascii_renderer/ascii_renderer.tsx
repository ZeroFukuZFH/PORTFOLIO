"use client"

import { useEffect, useState } from "react";

interface AsciiRendererProps {

  animated_object : string[][];
  timeout? : number;

}

export default function AsciiRenderer({

    animated_object,
    timeout = 1000,

}:AsciiRendererProps){
    
  const [index, setIndex] = useState(0);
  const maxFrames = animated_object.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % maxFrames);
    }, timeout);
    return () => clearInterval(interval);
  }, [maxFrames]);

  return (
    <div className="w-full text-center">
          {animated_object[index].map((item,id)=>(
            <div key={id}>
              {item}
            </div>
          ))}
    </div>
  )
}


