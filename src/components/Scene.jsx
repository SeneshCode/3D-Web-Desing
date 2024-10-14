import {
  Center,
  Environment,
  Float,
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  Sparkles,
  Text3D,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useState } from "react";
import { MacBookModel } from "./MacBookmodel";
import { MathUtils } from "three";

const Scene = ({ count }) => {
  const { viewport } = useThree();
  const { width, height } = viewport;

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <GizmoHelper
        alignment="bottom-right" // widget alignment within scene
        margin={[80, 80]} // widget margins (X, Y)
      >
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
        />
        {/* alternative: <GizmoViewcube /> */}
      </GizmoHelper>

      <Sparkles count={count} size={2} scale={[width, height, 30]} />
      <Environment preset="city" />
      <Float
        rotation={[Math.PI / 0.9, Math.PI / 1, Math.PI / 1]}
        speed={3}
        position-y={1}
      >
        <Center>
          <MacBookModel />
        </Center>
      </Float>
      <Float rotation-y={Math.PI / 360} speed={3} position-y={1.2}>
        <Center>
          <Center>
            <Text3D font={"/Baloo_Text.json"} size={0.5}>
              I'm
              <meshStandardMaterial
                color="#ffffff"
                envMapIntensity={2}
                roughness={0.2}
              />
            </Text3D>
            <Text3D size={0.5} font={"/Baloo_Text.json"} position-x={1.1}>
              Senesh
              <meshStandardMaterial
                color="#0ea5e9"
                envMapIntensity={2}
                roughness={0.2}
              />
            </Text3D>
            <Text3D size={0.5} font={"/Baloo_Text.json"} position-x={3.5}>
              ,
              <meshStandardMaterial
                color="#ffffff"
                envMapIntensity={2}
                roughness={0.2}
              />
            </Text3D>
          </Center>
          <Center position-y={-0.6}>
            <Text3D size={0.5} font={"/Baloo_Text.json"}>
              Software Engineer
              <meshStandardMaterial
                color="#10b981"
                envMapIntensity={2}
                roughness={0.2}
              />
            </Text3D>
          </Center>
        </Center>
      </Float>

      {/* <OrbitControls />
      <mesh>
      <boxGeometry />
      <meshStandardMaterial />
      </mesh> */}
    </>
  );
};

export default Scene;
