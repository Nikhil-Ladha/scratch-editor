import React from "react";
import { actions } from "../actions";
import ActionButton from "./ActionButton";
import "./style.css";

export default function MidArea(props) {

  const { 
    setDraggedElement, draggedElement, activeActions, setActiveActions, dragParent, setDragParent, blockCounter, updateBlockCounter, canvasContext,
    updateSpriteStyle, updateActionList
  } = props;

  const handleDragEnd = (e) => {
    if(draggedElement != "undefined" && dragParent != "actionarea") {
      let leftDist = e.clientX - e.target.offsetLeft;
      let topDist = e.clientY - e.target.offsetTop;
      let actionItem = "", actionItemColor = "";
      for(let action of actions) {
        for(let item of action.items) {
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
                        topDist={topDist}
                        leftDist={leftDist}
                        key={blockCounter} />
                    ]
      )
      updateBlockCounter(prevState => prevState+1);
    } else {       // Reposition block
        let tmpActions = [...activeActions];
        let tmpItem = null, tmpColor = null, tmpDataId = null;
        let leftDist = e.clientX - e.target.offsetLeft;
        let topDist = e.clientY - e.target.offsetTop;
        for(let action of tmpActions) {
          if(`${action.props.item.id}${action.props.dataId}` === draggedElement) {
            tmpItem = action.props.item;
            tmpColor = action.props.color;
            tmpDataId = action.props.dataId;
            tmpActions.pop(action);
            break;
          }
        }
        setActiveActions([...tmpActions,
          <ActionButton
            item={tmpItem}
            color={tmpColor}
            setDraggedElement={setDraggedElement}
            setDragParent={setDragParent}
            dataId={tmpDataId}
            canvasContext={canvasContext}
            updateSpriteStyle={updateSpriteStyle}
            updateActionList={updateActionList}
            topDist={topDist}
            leftDist={leftDist}
            key={tmpDataId} />
      ]);
    }
  }

  return (
    <div
      id="actionarea"
      className="flex-1 h-full overflow-auto relative"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDragEnd}
    >
      {activeActions}
    </div>
  );
}
