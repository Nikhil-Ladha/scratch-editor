import React, { useEffect, useRef } from "react";
import CatSpriteImg from "../assets/sprite.svg";

export default function PreviewArea(props) {

  const { setCanvasContext, updateSpriteStyle } = props;

  const canvasRef = useRef(null);
  const spriteImg = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d');
    const img = spriteImg.current;
    console.log(canvas, context, img);
    img.onload= () => context.drawImage(img, 0, 0, 60, 75);
    updateSpriteStyle({
      "x": 0,
      "y": 0,
      "w": 60,
      "h": 75
    });
    setCanvasContext(context);
  }, []);

  return (
    <div className="w-full flex-none h-full overflow-y-auto p-2">
      <canvas ref={canvasRef} width="375" height="750" />
      <img src={CatSpriteImg} width="50" height="50" ref={spriteImg} className="hidden"/>
    </div>
  );
}
