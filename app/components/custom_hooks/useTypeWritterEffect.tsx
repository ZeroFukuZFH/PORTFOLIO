import { useEffect, useState } from "react";

export default function useTypeWritterEffect(
    title:string,
    isOnScreen:boolean = true,
    delay:number=1000,
    spacing:number=100
){
    const [typeWritter, setTypeWritter] = useState<string[]>([]);
    let index = -1;
    useEffect(()=>{
        if(isOnScreen){
            const timeout = setTimeout(()=>{
                const interval = setInterval(()=>{
                    setTypeWritter(prev=>[...prev,title.charAt(index)])   
                    index++;
                },spacing)
                return ()=> clearInterval(interval)
                },delay)
            return ()=> clearTimeout(timeout)
        } else {
            setTypeWritter([])
        }
    },[isOnScreen,title])
    return typeWritter;
}