import { useEffect, useRef, useState } from "react";

const GridItem = () => {
  const gridItem = useRef(null);
  const drawingItem = useRef(null);
  const [rotate, setRotate] = useState(0);
  const colors = ["000000", "FF5B22", "0C356A", "FFC436"];
  const [color, setColor] = useState(colors[0]);
  const shapes = ["square", "circle", "half-circle", "quarter-circle"];
  const [shape, setShape] = useState(shapes[0]);

  const toggleState = () => {
    gridItem.current.classList.toggle("active");
  };

  const rotateHandler = () => {
    setRotate(rotate + 90);
  };

  const nextColor = () => {
    const currentColorIndex = colors.indexOf(color);
    const nextColorIndex =
      currentColorIndex + 1 === colors.length ? 0 : currentColorIndex + 1;
    setColor(colors[nextColorIndex]);
  };

  const nextShape = () => {
    const currentShapeIndex = shapes.indexOf(shape);
    const nextShapeIndex =
      currentShapeIndex + 1 === shapes.length ? 0 : currentShapeIndex + 1;
    setShape(shapes[nextShapeIndex]);
  };
  return (
    <div ref={gridItem} className="grid-item">
      <img
        onClick={() => toggleState()}
        className="plus-icon"
        src="/plus.svg"
      />
      <div className="white-circ"></div>
      <div
        ref={drawingItem}
        className={`drawing-item ${shape}`}
        style={{
          transform: `rotate(${rotate}deg)`,
          backgroundColor: `#${color}`,
        }}
      ></div>
      <div className="controls">
        <div onClick={() => toggleState()} className="control">
          <img src="/close.svg" />
        </div>
        <div onClick={() => rotateHandler()} className="control">
          <img src="/rotate.svg" />
        </div>
        <div onClick={() => nextColor()} className="control">
          <img src="/color.svg" />
        </div>
        <div onClick={() => nextShape()} className="control">
          <img src="/shape.svg" />
        </div>
      </div>
    </div>
  );
};

function App() {
  const gridSize = 8;
  const [grid, setGrid] = useState(Array(gridSize * gridSize).fill(0));
  return (
    <>
      <div className="grid-wrapper">
        {grid.map((_, i) => (
          <GridItem key={i} />
        ))}
      </div>
    </>
  );
}

export default App;
