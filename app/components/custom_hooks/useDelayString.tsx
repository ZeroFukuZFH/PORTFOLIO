import { useEffect, useState } from "react";

export interface IconProps {
    icon:string,
    link:string
}

export default function useDelaySvg(
    delayArray: IconProps[],
    isOnScreen: boolean = true,
    delay: number = 1000,
    spacing: number = 100
) {
    const [delayedMap, setMapToDelay] = useState<IconProps[]>([]);
    
    useEffect(() => {
        if (isOnScreen) {
            const timeouts: NodeJS.Timeout[] = [];
            
            delayArray.forEach((item, index) => {
                const timeout = setTimeout(() => {
                    setMapToDelay(prev => [...prev, item]);
                }, delay + (index * spacing));
                
                timeouts.push(timeout);
            });
            
            return () => {
                timeouts.forEach(clearTimeout);
            };
        } else {
            return ()=> setMapToDelay([])
        }
    }, [isOnScreen, delayArray, delay, spacing]);
    
    return delayedMap;
}