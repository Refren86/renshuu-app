import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

import gradientVertexShader from "@/shaders/gradient/vertex.glsl";
import gradientFragmentShader from "@/shaders/gradient/fragment.glsl";

const palette: THREE.Color[] = [
  "#d1313d",
  "#e5625c",
  "#f9bf76",
  "#8eb2c5",
  "#615375",
].map((color) => new THREE.Color(color));

export function GradientShaderPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2, 200, 200]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={gradientVertexShader}
        fragmentShader={gradientFragmentShader}
        side={THREE.DoubleSide}
        uniforms={{
          uTime: { value: 0.0 },
          uColor: { value: palette },
        }}
      />
    </mesh>
  );
}
