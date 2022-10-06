import React, { useEffect } from "react";
import { actionsData } from "../actions";
import ActionButton from "./ActionButton";
import { useDispatch } from "react-redux";
import { updateActiveActions } from "../actions/actionSlice";
import "./style.css";

export default function MidArea(props) {

  const { 
    setDraggedElement, draggedElement, activeActions, setActiveActions, dragParent, setDragParent, blockCounter, updateBlockCounter,
    updateSpriteStyle, updateActionList
  } = props;

	const dispatch = useDispatch();

	useEffect(() => {
		let midArea = document.querySelector("#actionarea").children;

		let tmp = [];
		for(let block of midArea) {
			tmp.push({
				"id": block.id,
				"topDist": Number(block.style.top.split('px')[0]),
				"children": block.children
			})
		}
		dispatch(updateActiveActions(tmp));

	}, [activeActions])

  const findClosestBlock = (top, left) => {
    let closestY = top, closestX = left;
		for(let action of activeActions) {
      let tmpY = action.props.topDist;
      let tmpX = Math.abs(action.props.leftDist - left);
      if(`${action.props.item.id}${action.props.dataId}` != draggedElement) {
        if(tmpY - top <= 50 && tmpY - top >= 0 && tmpX <= 50 && (!action.props.item.id.includes("event"))) {    // 50px, as it's bit less than 2x of block height
          closestY = tmpY - 29;   // Allow breathing space of 1px
          closestX = action.props.leftDist;
          break;
        } else if(top - tmpY <= 50 && top - tmpY >= 0 && tmpX <= 50 && (!draggedElement.includes("event"))) {
          closestY = tmpY + 29;
          closestX = action.props.leftDist;
          break;
        }
      }
    }

    return [closestY, closestX];
	}

  const handleDragEnd = (e) => {
    if(draggedElement != "undefined" && dragParent != "actionarea") {
      let leftDist = e.clientX - e.target.offsetLeft;
      let topDist = e.clientY - e.target.offsetTop;
      let updatedDist = findClosestBlock(topDist, leftDist);
      topDist = updatedDist[0];
      leftDist = updatedDist[1];
      let actionItem = "", actionItemColor = "";
      for(let action of actionsData) {
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

			let tmpActions = [
				...activeActions,
				<ActionButton
					item={actionItem}
					color={actionItemColor}
					setDraggedElement={setDraggedElement}
					setDragParent={setDragParent}
					dataId={blockCounter}
					updateSpriteStyle={updateSpriteStyle}
					updateActionList={updateActionList}
					topDist={topDist}
					leftDist={leftDist}
					key={blockCounter} />
			];

			setActiveActions(tmpActions);
      updateBlockCounter(prevState => prevState + 1);

    } else {       // Reposition block
        let tmpActions = [];
        let tmpItem = null, tmpColor = null, tmpDataId = null;
        let leftDist = e.clientX - e.target.offsetLeft;
        let topDist = e.clientY - e.target.offsetTop;
        let updatedDist = findClosestBlock(topDist, leftDist);
        topDist = updatedDist[0];
        leftDist = updatedDist[1];
        for(let action of activeActions) {
          if(`${action.props.item.id}${action.props.dataId}` === draggedElement) {
            tmpItem = action.props.item;
            tmpColor = action.props.color;
            tmpDataId = action.props.dataId;
          } else {
            tmpActions.push(action)
          }
        }
				tmpActions = [
					...tmpActions,
					<ActionButton
						item={tmpItem}
						color={tmpColor}
						setDraggedElement={setDraggedElement}
						setDragParent={setDragParent}
						dataId={tmpDataId}
						updateSpriteStyle={updateSpriteStyle}
						updateActionList={updateActionList}
						topDist={topDist}
						leftDist={leftDist}
						key={tmpDataId} />
				];
				setActiveActions(tmpActions);
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
