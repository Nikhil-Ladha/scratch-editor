import React from "react";

export default function ActionButton(props) {

	const { item, color, setDraggedElement, setDragParent, dataId, canvasContext, updateSpriteStyle, updateActionList } = props;

	const handleDragStart = (e) => {
		const targetElement = e.target;
		if(targetElement.parentNode.id == "sidebar" || targetElement.parentNode.parentNode.id == "sidebar") {
			setDragParent("sidebar");
			setDraggedElement(item.id);
		} else {
			setDragParent("actionarea");
			setDraggedElement(dataId);
		}
	}

	const handleBlockClick = (e) => {
		if(e.target.parentNode.id == "actionarea") {
			canvasContext.clearRect(0, 0, 400, 800);
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
					x = Math.floor(Math.random() * 401);
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
			}
		}
	}

	return (
		<div
			id={item.id}
			className={`flex w-max flex-row flex-wrap bg-${color}-500 text-white px-2 py-1 my-2 text-sm items-center rounded-md cursor-pointer`}
			draggable="true"
			onDragStart={handleDragStart}
			onClick={handleBlockClick}
		>
			{item.text}
		</div>
	)
}