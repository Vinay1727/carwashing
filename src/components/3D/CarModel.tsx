"use client"
import { useGLTF } from "@react-three/drei"

export default function CarModel() {
    const {scene} = useGLTF("/models/car1.glb")
    return (
        <primitive 
        object={scene} 
        scale={3} 
        position={[0, -1.2, 0]}
        rotation={[0, Math.PI / 2, 0]}
        />
    )
}