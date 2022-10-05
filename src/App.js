import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";

export default function App() {

  const [ draggedElement, setDraggedElement ] = useState();
  const [ dragParent, setDragParent ] = useState();
  const [ actionList, updateActionList ] = useState([]);
  const [ activeActions, setActiveActions ] = useState([]);
  const [ canvasContext, setCanvasContext ] = useState();
  const [ currentSpriteStyle, updateSpriteStyle ] = useState({});
  const [ blockCounter, updateBlockCounter ] = useState(0);
  const [ spriteImg, updateSpriteImg ] = useState();

  return (
    <div className="bg-blue-100 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar
            setDraggedElement={setDraggedElement}
            draggedElement={draggedElement}
            activeActions={activeActions}
            setActiveActions={setActiveActions}
            dragParent={dragParent}
            setDragParent={setDragParent}
          />
          <MidArea
            setDraggedElement={setDraggedElement}
            draggedElement={draggedElement}
            activeActions={activeActions}
            setActiveActions={setActiveActions}
            dragParent={dragParent}
            setDragParent={setDragParent}
            blockCounter={blockCounter}
            updateBlockCounter={updateBlockCounter}
            updateSpriteStyle={updateSpriteStyle}
            updateActionList={updateActionList}
          />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea
            canvasContext={canvasContext}
            setCanvasContext={setCanvasContext}
            currentSpriteStyle={currentSpriteStyle}
            updateSpriteStyle={updateSpriteStyle}
            spriteImg={spriteImg}
            updateSpriteImg={updateSpriteImg}
            actionList={actionList}
            updateActionList={updateActionList}
          />
        </div>
      </div>
    </div>
  );
}
