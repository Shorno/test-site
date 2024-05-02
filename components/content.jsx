import Image from "next/image";
import CoverImage from "/public/pexels-marina-zvada-844583049-19914298.jpg"
export default function Content(){
    return(
        <>
            <div className={"w-full h-full"}>
                <div className={"w-[85%] m-auto h-dvh"}>
                    <Image
                        src={CoverImage}
                        alt={"cover image"}
                        color
                    />
                </div>
            </div>

        </>
    )
}