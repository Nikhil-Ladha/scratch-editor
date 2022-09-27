import React from "react";

export default function ActionButton(props) {

	const { item, color, setDraggedElement, setDragParent } = props;

	const handleDragStart = (e) => {
		const targetElement = e.target;
		if(targetElement.parentNode.id == "sidebar" || targetElement.parentNode.parentNode.id == "sidebar") {
			setDragParent("sidebar");
		} else {
			setDragParent("actionarea");
		}
		setDraggedElement(item.id);
	}

	return (
		<div
			id={item.id}
			className={`flex w-max flex-row flex-wrap bg-${color}-500 text-white px-2 py-1 my-2 text-sm cursor-pointer`}
			draggable="true"
			onDragStart={handleDragStart}
		>
			{item.text}
		</div>
	)
}