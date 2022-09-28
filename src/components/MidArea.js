import React from "react";
import { actions } from "../actions";
import ActionButton from "./ActionButton";
import "./style.css";

export default function MidArea(props) {

  const { 
    setDraggedElement, draggedElement, activeActions, setActiveActions, dragParent, setDragParent, blockCounter, updateBlockCounter, canvasContext,
    updateSpriteStyle, updateActionList
  } = props;

  const handleDragEnd = () => {
    if(draggedElement && dragParent != "actionarea") {
      let actionItem = "", actionItemColor = "";
      for(let action of actions) {
        for(let item of action.items) {
          console.log(action);
          if(item.id === draggedElement) {
            actionItem = item;
            break;
          }
        }

        if(actionItem) {
          actionItemColor = action.color;
          break;
        }
      }

      setActiveActions(
        prevState => [...prevState,
                      <ActionButton
                        item={actionItem}
                        color={actionItemColor}
                        setDraggedElement={setDraggedElement}
                        setDragParent={setDragParent}
                        dataId={blockCounter}
                        canvasContext={canvasContext}
                        updateSpriteStyle={updateSpriteStyle}
                        updateActionList={updateActionList}
                        key={blockCounter} />
                    ]
      )

      updateBlockCounter(prevState => prevState+1);
    }
  }

  return (
    <div
      id="actionarea"
      className="flex-1 h-full overflow-auto"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDragEnd}
    >
      {activeActions}
    </div>
  );
}
