import { useRef } from 'react';
import { useSpring, animated } from '@react-spring/three';
import { useGLTF } from '@react-three/drei';

const Nina = ({ position, setPosition, rotation, setRotation, ...props }) => {
  const { nodes, materials } = useGLTF('/assets/models/Nina.gltf');
  const group = useRef();

  const handleRotation = () => {
    setRotation(!rotation);
    setPosition(!position);
  };

  const modelAnimation = useSpring({
    rotation: rotation ? [0, Math.PI / 2, 0] : [0, 0, 0],
    position: position ? [0, 0.3, 1] : [0, 0, 0],
  });

  return (
    <group {...props} dispose={null} rotation={[0, Math.PI / 100, 0]} scale={3} ref={group} onClick={handleRotation}>
      <animated.group position={modelAnimation.position} rotation={modelAnimation.rotation}>
        <mesh castShadow receiveShadow geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} />
        <mesh castShadow receiveShadow geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} />
        <mesh castShadow receiveShadow geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} />
        <mesh castShadow receiveShadow geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} />
        <mesh castShadow receiveShadow geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
        />
        <mesh castShadow receiveShadow geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} />
        <mesh castShadow receiveShadow geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} />
        <mesh castShadow receiveShadow geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} />
      </animated.group>
    </group>
  );
};

export default Nina;
