import React from "react";
import { actions } from "../actions";
import ActionButton from "./ActionButton";

export default function Sidebar(props) {

	const { draggedElement, setDraggedElement, activeActions, setActiveActions, dragParent, setDragParent } = props;
	
	const handleDragEnd = () => {
		if(draggedElement != "undefined" && dragParent == "actionarea") {
			let tmpActions = activeActions.filter(action => Number(action.key) != draggedElement);
			setActiveActions(tmpActions)
		}
	}

	return (
		<div
			id="sidebar"
			className="w-65 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200"
			onDragOver={(e) => e.preventDefault()}
      onDrop={handleDragEnd}
		>
			{actions.map((action, index) => (
				<div key={action.name}>
					<div className="font-bold" key={index}>{action.name}</div>
					{action.items.map((item, indx) => (
						<ActionButton
							item={item}
							color={action.color}
							setDraggedElement={setDraggedElement}
							setDragParent={setDragParent}
							key={indx}/>
					))}
				</div> 
			))}
		</div>
	);
}
