import React, { useState } from "react";
import { Container } from './App-styles';

const App = () => {
  const [mousePositionX, setMousePositionX] = useState();
  const [mousePositionY, setMousePositionY] = useState();

  const onMouseMove = ({ screenX, screenY }) => {
    setMousePositionX(screenX);
    setMousePositionY(screenY);
  };

  return (
    <Container onMouseMove={onMouseMove}>
      <h1>
        Mouse coordinates: {mousePositionX} {mousePositionY}
      </h1>
    </Container>
  );
};

export default App;
