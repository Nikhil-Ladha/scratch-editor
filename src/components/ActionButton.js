import React from "react";
import { useSelector } from "react-redux";

export default function ActionButton(props) {

	const {
		item, color, setDraggedElement, setDragParent, dataId, updateSpriteStyle,
		updateActionList, topDist, leftDist
	} = props;

	const activeActionsData = useSelector((state) => state.activeActionsData.value);

	const getBlockGroup = (e) => {
		let tmpGroup = [], blockTop = 0, blockBottom = 0;
		let minY = Number(e.target.style.top.split('px')[0]);
		let maxY = minY;
		if(activeActionsData && activeActionsData.length) {
			for(let i=0; i<activeActionsData.length; i++) {
				if(!tmpGroup.includes(activeActionsData[i])) {
					blockTop = Math.abs(activeActionsData[i].topDist - minY);
					blockBottom = Math.abs(activeActionsData[i].topDist - maxY);
					if(blockTop <= 30 || blockBottom <= 30) {
						tmpGroup.push(activeActionsData[i]);
						if(activeActionsData[i].topDist < minY) {
							minY = activeActionsData[i].topDist;
							i = -1;
							continue;
						}
						if(activeActionsData[i].topDist > maxY) {
							maxY = activeActionsData[i].topDist;
							i = -1;
							continue;
						}
					}
				}
			}
		}
		// Sort in order to start execution from the top of group of blocks
		tmpGroup.sort((a,b) => a.topDist - b.topDist);

		return tmpGroup;
	}

	const handleDragStart = (e) => {
		const targetElement = e.target;
		if(targetElement.parentNode.id == "sidebar" || targetElement.parentNode.parentNode.id == "sidebar") {
			setDragParent("sidebar");
			setDraggedElement(item.id);
		} else {
			setDragParent("actionarea");
			setDraggedElement(`${item.id}${dataId}`);
		}
	}

	const handleBlockAction = (e, op) => {
		if(e.target.parentNode.id == "actionarea") {
			let blockGroup = getBlockGroup(e);
			for(let action of blockGroup) {
				switch(action.id) {
					case "event_self_clicked":
						updateActionList(prevState => [...prevState, "event_self_clicked"]);
						break;
					case "move_steps":
						updateActionList(prevState => [...prevState, "move_steps"]);
						let steps = Number(action.children[0].value);
						updateSpriteStyle(
							prevState => (
								{
									...prevState,
									"x": prevState["x"] + steps
								}
							)
						);
						break;
					case "turn_anticlock":
						let angle_anti = Number(action.children[1].value);
						updateActionList(prevState => [...prevState, "turn_anticlock"]);
						updateSpriteStyle(
							prevState => (
								{
									...prevState,
									"angle": prevState["angle"] - angle_anti <= 0 ? 360 - angle_anti + prevState["angle"] : prevState["angle"] - angle_anti,
								}
							)
						);
						break;
					case "turn_clock":
						let angle = Number(action.children[1].value);
						updateActionList(prevState => [...prevState, "turn_clock"]);
						updateSpriteStyle(
							prevState => (
								{
									...prevState,
									"angle": prevState["angle"] + angle >= 360 ? prevState["angle"] + angle - 360 : prevState["angle"] + angle,
								}
							)
						);
						break;
					case "random_position":
						let x = Math.floor(Math.random() * 401);
						let y = Math.floor(Math.random() * 801);
						console.log(x, y)
						updateActionList(prevState => [...prevState, "random_position"]);
						updateSpriteStyle(
							prevState => (
								{
									...prevState,
									"x": x,
									"y": y
								}
							)
						);
						break;
					case "goto_position":
						let newX = Number(action.children[0].value);
						let newY = Number(action.children[1].value);;
						updateActionList(prevState => [...prevState, "goto_position"]);
						updateSpriteStyle(
							prevState => (
								{
									...prevState,
									"x": newX,
									"y": newY
								}
							)
						);
						break;
					case "point_direction":
						let dir = Number(action.children[0].value);
						updateActionList(prevState => [...prevState, "point_direction"]);
						updateSpriteStyle(
							prevState => (
								{
									...prevState,
									"angle": dir > 90 ? 360 - dir : dir - 90,
								}
							)
						);
						break;
					case "set_x":
						updateActionList(prevState => [...prevState, "set_x"]);
						let updX = Number(action.children[0].value);
						updateSpriteStyle(
							prevState => (
								{
									...prevState,
									"x": updX
								}
							)
						);
						break;
					case "set_y":
						updateActionList(prevState => [...prevState, "set_y"]);
						let updY = Number(action.children[0].value);
						updateSpriteStyle(
							prevState => (
								{
									...prevState,
									"y": updY
								}
							)
						);
						break;
					case "change_size":
						updateActionList(prevState => [...prevState, "change_size"]);
						let size = Number(action.children[0].value);
						updateSpriteStyle(
							prevState => (
								{
									...prevState,
									"w": prevState["w"] + size,
									"h": prevState["h"] + size
								}
							)
						);
						break;
					case "set_size":
						updateActionList(prevState => [...prevState, "set_size"]);
						let updSize = Number(action.children[0].value);
						updateSpriteStyle(
							prevState => (
								{
									...prevState,
									"w": (60*updSize)/100,
									"h": (75*updSize)/100,
									"size": updSize
								}
							)
						);
						break;
					case "show":
						updateActionList(prevState => [...prevState, "show"]);
						updateSpriteStyle(
							prevState => (
								{
									...prevState,
									"show": true
								}
							)
						);
						break;
					case "hide":
						updateActionList(prevState => [...prevState, "hide"]);
						updateSpriteStyle(
							prevState => (
								{
									...prevState,
									"show": false
								}
							)
						);
						break;
					case "create_clone":
						updateActionList(prevState => [...prevState, "create_clone"]);
						updateSpriteStyle(
							prevState => (
								{
									...prevState,
									"clones": [...prevState["clones"], prevState]
								}
							)
						);
						break;
					case "delete_clone":
						updateActionList(prevState => [...prevState, "delete_clone"]);
						updateSpriteStyle(
							prevState => (
								{
									...prevState,
									"clones": prevState["clones"].length ? prevState["clones"].splice(prevState["clones"].length - 1) : []
								}
							)
						);
						break;
					case "wait_n_secs":
						updateActionList(prevState => [...prevState,"wait_n_secs"]);
						let time = Number(action.children[0].value);
						updateSpriteStyle(
							prevState => (
								{
									...prevState,
									"wait": time
								}
							)
						);
						break;
				}
			}
		}
	}

	return (
		<div
			id={item.id}
			className={`flex w-max flex-row flex-wrap bg-${color}-500 text-white px-2 py-1 my-2 text-sm items-center rounded-md ${topDist || leftDist ? 'absolute' : ''} cursor-pointer`}
			draggable="true"
			onDragStart={handleDragStart}
			onClick={handleBlockAction}
			style={{top: topDist, left: leftDist}}
		>
			{item.text}
		</div>
	)
}