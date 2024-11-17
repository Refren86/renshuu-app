import { Canvas } from "@react-three/fiber";

import { GradientShaderPlane } from "../GradientShaderPlane/GradientShaderPlane";

export const GradientCanvas = () => {
  return (
    <Canvas
      style={{ width: "100dvw", height: "100dvh" }}
      camera={{ fov: 75, near: 0.1, far: 100, position: [-0.01, 0, 0.2] }}
    >
      <GradientShaderPlane />
    </Canvas>
  );
};
