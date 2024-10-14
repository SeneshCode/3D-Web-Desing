import { OrbitControls } from "@react-three/drei";

const Scene1 = () => {
  return (
    <>
      {/* Light Of Our Object */}
      <ambientLight />
      {/* Light Of around it like room balb ( kamare light ekak ellala thiyenawa wage)) */}
      <pointLight />
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};

export default Scene1;
