import React from "react";
import { actions } from "../actions";
import ActionButton from "./ActionButton";
import "./style.css";

export default function MidArea(props) {

  const { 
    setDraggedElement, draggedElement, activeActions, setActiveActions, dragParent, setDragParent, blockCounter, updateBlockCounter, canvasContext,
    updateSpriteStyle, updateActionList
  } = props;

  const findClosestBlock = (top, left) => {
		const midArea = document.getElementById("actionarea");
    let closestY = top, closestX = left;
		for(let i=0; i<midArea.childNodes.length; i++) {
      let tmpY = Number(midArea.childNodes[i].style.top.split('px')[0]);
      let tmpX = Number(midArea.childNodes[i].style.left.split('px')[0]);
      console.log(tmpY, top, tmpX, left, midArea.childNodes[i].key, draggedElement);
      if(tmpY - top <= 28 && tmpY - top >= 0) {    // 28px is the height of each block
        closestY = tmpY - 29;   // Allow breathing space of 1px
        closestX = tmpX;
        console.log("Check1");
        break;
      } else if(top - tmpY <= 28 && top - tmpY >= 0) {
        closestY = top - 27;
        closestX = tmpX;
        console.log("Check2");
        break;
      }
    }
    console.log("Closest ret", closestY, closestX);

    return [closestY, closestX];
	}

  const handleDragEnd = (e) => {
    if(draggedElement != "undefined" && dragParent != "actionarea") {
      let leftDist = e.clientX - e.target.offsetLeft;
      let topDist = e.clientY - e.target.offsetTop;
      // let updatedDist = findClosestBlock(topDist, leftDist);
      // topDist = updatedDist[0];
      // leftDist = updatedDist[1];
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
        let tmpActions = [];
        let tmpItem = null, tmpColor = null, tmpDataId = null;
        let leftDist = e.clientX - e.target.offsetLeft;
        let topDist = e.clientY - e.target.offsetTop;
        // let updatedDist = findClosestBlock(topDist, leftDist);
        // topDist = updatedDist[0];
        // leftDist = updatedDist[1];
        // console.log("End res", topDist, leftDist)
        for(let action of activeActions) {
          if(`${action.props.item.id}${action.props.dataId}` === draggedElement) {
            tmpItem = action.props.item;
            tmpColor = action.props.color;
            tmpDataId = action.props.dataId;
          } else {
            tmpActions.push(action)
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
