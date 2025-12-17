"use client"

export default function Introduction(){
    const title = "< \"Hi, My name is Albert and I am a fullstack software engineer\" />"
    return (
        <section className="flex justify-center items-center w-full h-screen text-white">
            <div className="w-[40%] flex text-center items-center">
                <h1 className="text-5xl">{title}</h1>
            </div>
        </section>
    )
}