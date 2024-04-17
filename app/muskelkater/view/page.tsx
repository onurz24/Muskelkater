"use client"
import "../../assets/styles/components/Muskelkater/View/page.scss";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Link from 'next/link';

export default function Page() {

    return (
    <div className='Muskelkater_View'>
    

        <div className='text-lg p-2 flex flex-col justify-center items-center'>
            <div className="font-bold">Garfield Lvl 20</div>


            <div className="p-4 w-full gap-4 flex flex-row justify-center items-center">

                <div className="text-xs">
                    2000 XP
                </div>
                <progress className="Muskelkater_Progressbar"
                value={0.4} />

                <div className="text-xs">
                    5000 XP
                </div>
            </div>
        </div>

        <Canvas className="Muskelkater_Canvas"
            camera={{ position: [0, 0, 2] }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <MuskelkaterModel />
            <OrbitControls />
        </Canvas>

        <Link href={"/"}
        className="p-2 bg-black
        flex flex-col justify-center items-center
        text-white font-bold tracking-widest">
            Zurück
        </Link>

    </div>
);}

function MuskelkaterModel() {
    const gltf = useGLTF('/3D-Model/muskelkater20.glb', true);
    return <primitive object={gltf.scene} dispose={null} />;
}




// import Image from "next/image"
// import Link from "next/link"


// export default function page (){


//     return(
//         <div>

//             <Image src={"/Images/Logos/balou.jpeg"}
//             alt="Muskelkater"
//             width={300} height={300}/>

//             <Link href={"/"}
//                 className="p-2 bg-black
//                     flex flex-col justify-center items-center
//                     text-white font-bold tracking-widest"
//                 >Zurück</Link>
//         </div>
//     )
// }
