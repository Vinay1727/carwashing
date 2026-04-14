"use client"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import CarModel from "./CarModel"

export default function CarScene() {
    return (
        <div className="w-full h-[750px]">
            <Canvas camera={{ position: [0, 2, 8], fov:45 }}>

                {/* Lights */}
                <ambientLight intensity={0.9} />
                <directionalLight position={[5, 5, 5]} intensity={2} />
                
                {/* Car Model */}
                <CarModel />

                {/* Temporarry Object (car placeholder) */}
                <mesh position={[0, -1.4, 0]} rotation={[-Math.PI / 2,0,0]}>
                    <circleGeometry args={[70, 64]} />
                    <meshStandardMaterial 
                    color="#0ea5e9"
                    roughness={0.4}
                    metalness={2.2}
                 />
                </mesh>

                <Environment preset="city" />

                <OrbitControls
                enablePan={false}
                autoRotate
                autoRotateSpeed={1.5}
                />

            </Canvas>
        </div>
    )
}
