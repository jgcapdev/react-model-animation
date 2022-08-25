const Floor = (props) => {
  return (
    <mesh receiveShadow rotation={props.rotation}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
};

export default Floor;
