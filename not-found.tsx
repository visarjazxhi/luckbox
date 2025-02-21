"use client";

import {
  Center,
  Environment,
  Float,
  OrbitControls,
  Text3D,
} from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import { Suspense } from "react";
import { motion } from "framer-motion";

function Scene() {
  return (
    <>
      <Environment preset="night" />
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Center>
          <Text3D
            font="/fonts/Geist_Bold.json"
            size={5}
            height={0.5}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            404
            <meshStandardMaterial
              color="#3498db"
              metalness={0.8}
              roughness={0.2}
            />
          </Text3D>
        </Center>
      </Float>

      <directionalLight position={[5, 5, 5]} intensity={1} />
      <ambientLight intensity={0.5} />
    </>
  );
}

export default function NotFound() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center relative">
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 20], fov: 25 }}>
          <Suspense fallback={null}>
            <Scene />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
            Looks like you&apos;ve drawn a dead hand. Let&apos;s get you back to
            the action.
          </p>
          <Link
            href="/"
            className="inline-block bg-[#3498db] text-white px-8 py-3 rounded font-semibold hover:bg-[#2980b9] transition-colors"
          >
            Return Home
          </Link>
        </motion.div>

        {/* Card Suits Pattern */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="grid grid-cols-8 gap-4">
            {Array.from({ length: 64 }, (_, i) => (
              <div
                key={`card-pattern-row-${Math.floor(i / 8)}-col-${i % 8}`}
                className="text-4xl text-gray-600"
              >
                ♠♥♣♦
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
