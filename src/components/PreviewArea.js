import React, { useEffect, useRef } from "react";
import CatSpriteImg from "../assets/sprite.svg";
import Icon from "./Icon";

export default function PreviewArea(props) {

  const { canvasContext, setCanvasContext, currentSpriteStyle, updateSpriteStyle, spriteImg, updateSpriteImg, actionList, updateActionList } = props;

  const canvasRef = useRef(null);
  const spriteImage = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d');
    const img = spriteImage.current;
    img.onload= () => context.drawImage(img, 0, 100, 60, 75);
    updateSpriteStyle({
      "x": 0,
      "y": 100,
      "w": 60,
      "h": 75,
      "angle": 0, // in degrees
      "show": true,
      "clones": []
    });
    updateSpriteImg(img);
    setCanvasContext(context);
  }, []);

  useEffect(() => {
    for(let action of actionList) {
      let originX = currentSpriteStyle["w"]/2 + currentSpriteStyle["x"];
      let originY = currentSpriteStyle["h"]/2 + currentSpriteStyle["y"];
      switch(action) {
        case "move_steps":
        case "random_position":
        case "goto_position":
        case "set_x":
        case "set_y":
        case "show":
        case "change_size":
        case "set_size":
        case "create_clone":
        case "delete_clone":
          if(currentSpriteStyle["show"]) {
            canvasContext.drawImage(spriteImg, currentSpriteStyle["x"], currentSpriteStyle["y"], currentSpriteStyle["w"], currentSpriteStyle["h"]);
            if(currentSpriteStyle["clones"].length) {
              for(let i=0; i<currentSpriteStyle["clones"].length; i++) {
                canvasContext.drawImage(spriteImg, currentSpriteStyle["clones"][i]["x"], currentSpriteStyle["clones"][i]["y"], currentSpriteStyle["clones"][i]["w"], currentSpriteStyle["clones"][i]["h"]);
              }
            }
          }
          break;
        case "hide":
          break;
        case "turn_anticlock":
        case "turn_clock":
        case "point_direction":
          if(action == "point_direction") {
            canvasContext.save();
            canvasContext.reset();
          }
          canvasContext.translate(originX, originY);
					canvasContext.rotate(currentSpriteStyle["angle"] * Math.PI / 180);
          canvasContext.translate(-originX, -originY);
          currentSpriteStyle["show"] ? canvasContext.drawImage(spriteImg, currentSpriteStyle["x"], currentSpriteStyle["y"], currentSpriteStyle["w"], currentSpriteStyle["h"]) : "";
          if(action == "point_direction") {
            canvasContext.restore();
          }
					break;
      }
    }
    updateActionList([]);
  }, [currentSpriteStyle]);

  return (
    <>
      <div className="p-1 h-8 stride">
        <Icon name="flag" size={25} className="text-green-600 mx-2"/>
      </div>
      <div className="w-full flex-none h-full overflow-y-auto p-2">
        <canvas ref={canvasRef} width="400" height="800" />
        <img src={CatSpriteImg} width="50" height="50" ref={spriteImage} className="hidden"/>
      </div>
    </>
  );
}
