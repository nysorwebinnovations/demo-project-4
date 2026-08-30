'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment } from '@react-three/drei'
import { useRef, useState, useEffect, Suspense } from 'react'
import * as THREE from 'three'

// 5 Theme-aligned dark-mode tech colors for micro-interaction cycle
const COLOR_PALETTE = [
  '#00F0FF', // 1. Cyan Blue
  '#00FF66', // 2. Neon Emerald Green
  '#8A2BE2', // 3. Electric Purple / Violet
  '#FF2A5F', // 4. Cyber Red / Crimson
  '#0055FF', // 5. Royal Deep Blue
]

/* -------------------------------------------------------------------------- */
/* Interactive 3D Spinning Pyramid: Enhanced 3D depth, specular highlights,  */
/* and smooth click micro-interaction color transitions.                      */
/* -------------------------------------------------------------------------- */
function Pyramid({
  onColorChange,
}: {
  onColorChange?: (color: THREE.Color) => void
}) {
  const groupRef = useRef<THREE.Group>(null)
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null)
  const [colorIndex, setColorIndex] = useState(0)
  const [hovered, setHovered] = useState(false)

  // Target and current color interpolation refs
  const targetColor = useRef(new THREE.Color(COLOR_PALETTE[0]))
  const currentColor = useRef(new THREE.Color(COLOR_PALETTE[0]))

  // Handle cursor hover feedback
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [hovered])

  // Cycle color on click
  const handleClick = (e: THREE.Event) => {
    e.stopPropagation()
    const nextIndex = (colorIndex + 1) % COLOR_PALETTE.length
    setColorIndex(nextIndex)
    targetColor.current.set(COLOR_PALETTE[nextIndex])
  }

  useFrame((_, delta) => {
    // Continuous, seamless Y-axis spin
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.45
    }

    // Smooth lerp color transition (~0.6s duration)
    currentColor.current.lerp(targetColor.current, delta * 5.5)

    if (materialRef.current) {
      materialRef.current.emissive.copy(currentColor.current)
    }

    if (onColorChange) {
      onColorChange(currentColor.current)
    }
  })

  return (
    <group ref={groupRef} scale={1.4}>
      {/* High-contrast, specular 3D pyramid geometry */}
      <mesh
        castShadow
        receiveShadow
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <coneGeometry args={[1.3, 2.1, 4]} />
        <meshPhysicalMaterial
          ref={materialRef}
          color={'#071015'}
          transparent
          opacity={0.92}
          roughness={0.2}
          metalness={0.45}
          transmission={0.45}
          thickness={2.2}
          ior={1.6}
          reflectivity={0.8}
          clearcoat={1}
          clearcoatRoughness={0.15}
          emissive={COLOR_PALETTE[0]}
          emissiveIntensity={0.22}
        />
      </mesh>
    </group>
  )
}

export function PyramidScene() {
  const spotLightRef = useRef<THREE.SpotLight>(null)
  const pointLightRef = useRef<THREE.PointLight>(null)

  const handleColorChange = (color: THREE.Color) => {
    if (spotLightRef.current) {
      spotLightRef.current.color.copy(color)
    }
    if (pointLightRef.current) {
      pointLightRef.current.color.copy(color)
    }
  }

  return (
    <Canvas
      camera={{ position: [0, 0.3, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0)
      }}
      className="cursor-pointer bg-transparent"
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        {/* Dynamic & directional lighting for enhanced 3D geometry depth */}
        <ambientLight intensity={0.25} />

        {/* Strong Key Light for specular facets */}
        <directionalLight position={[5, 8, 5]} intensity={3.5} color={'#ffffff'} />

        {/* Dynamic Accent SpotLight matching pyramid color */}
        <spotLight
          ref={spotLightRef}
          position={[0, 7, 5]}
          angle={0.65}
          penumbra={0.8}
          intensity={75}
          color={COLOR_PALETTE[0]}
        />

        {/* Dynamic Point Fill Light */}
        <pointLight
          ref={pointLightRef}
          position={[3, -2, 3]}
          intensity={22}
          color={COLOR_PALETTE[0]}
        />

        {/* Crisp Rim Light */}
        <pointLight position={[-5, -3, -3]} intensity={16} color={'#ffffff'} />

        <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.5}>
          <Pyramid onColorChange={handleColorChange} />
        </Float>

        <Environment preset="night" />
      </Suspense>
    </Canvas>
  )
}



