import Image from "next/image"
import Link from "next/link"


export default function page (){


    return(
        <div>

            <Image src={"/Images/Logos/balou.jpeg"}
            alt="Muskelkater"
            width={300} height={300}/>

            <Link href={"/"}
                className="p-2 bg-black
                    flex flex-col justify-center items-center
                    text-white font-bold tracking-widest"
                >Zurück</Link>
        </div>
    )
}