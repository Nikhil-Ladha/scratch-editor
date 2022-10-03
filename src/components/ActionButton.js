import React from "react";

export default function ActionButton(props) {

	const { item, color, setDraggedElement, setDragParent, dataId, canvasContext, updateSpriteStyle, updateActionList, topDist, leftDist } = props;

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

	const handleBlockClick = (e) => {
		if(e.target.parentNode.id == "actionarea") {
			canvasContext.clearRect(0, 0, 600, 800);
			let val = 0, x=0, y=0;
			switch(e.target.id) {
				case "move_10_steps":
					updateActionList(prevState => [...prevState, "move_10_steps"]);
					val = Number(e.target.firstElementChild.value);
					updateSpriteStyle(
						prevState => (
							{
								...prevState,
								"x": prevState["x"] + val
							}
						)
					);
					break;
				case "turn_anticlock":
					val = Number(e.target.lastElementChild.value);
					updateActionList(prevState => [...prevState, "turn_anticlock"]);
					updateSpriteStyle(
						prevState => (
							{
								...prevState,
								"angle": prevState["angle"] - val <= 0 ? 360 - val + prevState["angle"] : prevState["angle"] - val,
							}
						)
					);
					break;
				case "turn_clock":
					val = Number(e.target.lastElementChild.value);
					updateActionList(prevState => [...prevState, "turn_clock"]);
					updateSpriteStyle(
						prevState => (
							{
								...prevState,
								"angle": prevState["angle"] + val >= 360 ? prevState["angle"] + val - 360 : prevState["angle"] + val,
							}
						)
					);
					break;
				case "random_position":
					x = Math.floor(Math.random() * 601);
					y = Math.floor(Math.random() * 801);
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
					x = Number(e.target.children[0].value);
					y = Number(e.target.children[1].value);;
					updateActionList(prevState => [...prevState, "goto_position"]);
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
				case "point_direction":
					val = Number(e.target.lastElementChild.value);
					updateActionList(prevState => [...prevState, "point_direction"]);
					updateSpriteStyle(
						prevState => (
							{
								...prevState,
								"angle": val > 90 ? 360 - val : val - 90,
							}
						)
					);
					break;
				case "set_x":
					updateActionList(prevState => [...prevState, "set_x"]);
					val = Number(e.target.firstElementChild.value);
					updateSpriteStyle(
						prevState => (
							{
								...prevState,
								"x": val
							}
						)
					);
					break;
				case "set_y":
					updateActionList(prevState => [...prevState, "set_y"]);
					val = Number(e.target.firstElementChild.value);
					updateSpriteStyle(
						prevState => (
							{
								...prevState,
								"y": val
							}
						)
					);
					break;
				case "change_size":
					updateActionList(prevState => [...prevState, "change_size"]);
					val = Number(e.target.firstElementChild.value);
					updateSpriteStyle(
						prevState => (
							{
								...prevState,
								"w": prevState["w"] + val,
								"h": prevState["h"] + val
							}
						)
					);
					break;
				case "set_size":
					updateActionList(prevState => [...prevState, "set_size"]);
					val = Number(e.target.firstElementChild.value);
					updateSpriteStyle(
						prevState => (
							{
								...prevState,
								"w": (60*val)/100,
								"h": (75*val)/100,
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
			}
		}
	}

	return (
		<div
			id={item.id}
			className={`flex w-max flex-row flex-wrap bg-${color}-500 text-white px-2 py-1 my-2 text-sm items-center rounded-md ${topDist || leftDist ? 'absolute' : ''} cursor-pointer`}
			draggable="true"
			onDragStart={handleDragStart}
			onClick={handleBlockClick}
			style={{top: topDist, left: leftDist}}
		>
			{item.text}
		</div>
	)
}