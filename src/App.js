import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import RoomModel from './components/RoomModel';
import Nina from './components/Nina';
import Floor from './components/Floor';
import { OrbitControls, Loader } from '@react-three/drei';

function App() {
  const [rotation, setRotation] = useState(false);
  const [position, setPosition] = useState(false);

  return (
    <>
      <Canvas shadows camera={{ position: [0, 7, 5] }}>
        <ambientLight intensity={0.3} />
        <spotLight penumbra={0.5} position={[10, 10, 5]} castShadow />

        <Suspense fallback={null}>
          {/* <RoomModel
            rotation={rotation}
            setRotation={setRotation}
            position={position}
            setPosition={setPosition}
            walls="lightblue"
            furniture="salmon"
          /> */}
          <Nina position={position} setPosition={setPosition} rotation={rotation} setRotation={setRotation} />
        </Suspense>

        <Floor rotation={[Math.PI / -2, 0, 0]} />

        {/* <OrbitControls minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} enablePan={false} enableZoom={false} /> */}
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
