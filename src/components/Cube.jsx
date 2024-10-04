import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const textRef = useRef();
  
  // Load the Earth texture
  const texture = useTexture("./img/earthh.jpeg");

  // Animate the position of the text
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2;
      textRef.current.position.y = Math.cos(state.clock.elapsedTime) * 2; // Add y-axis movement for more dynamics
    }
  });

  return (
    <mesh>
      {/* Change from boxGeometry to sphereGeometry */}
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={texture} />
      <RenderTexture attach="map">
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <color attach="background" args={["#dc9dcd"]} />
        <Text ref={textRef} fontSize={1} color="#555">
          EurosHub
        </Text>
      </RenderTexture>
    </mesh>
  );
};

export default Cube;
