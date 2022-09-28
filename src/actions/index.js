import React from "react";
import Icon from "../components/Icon";

export const actions = [
	{
		"name": "Events",
		"color": "yellow",
		"items": [
			{
				"id": "when_stride_clicked",
				"text": ["When", <Icon name="flag" size={15} className="text-green-600 mx-2" key={"event1"}/>, "clicked"]
			},
			{
				"id": "when_self_clicked",
				"text": "When this sprite clicked",
			}
		]
	},
	{
		"name": "Motion",
		"color": "blue",
		"items": [
			{
				"id": "move_10_steps",
				"text": ["Move", <input type="number" defaultValue={10} key="move_step"/>, "steps"],
			},
			{
				"id": "turn_anticlock",
				"text": ["Turn", <Icon name="undo" size={15} className="text-white mx-2" key={"motion2"}/>, <input type="number" defaultValue={15} key="turn_anticlock"/>, "degrees"]
			},
			{
				"id": "turn_clock",
				"text": ["Turn", <Icon name="redo" size={15} className="text-white mx-2" key={"motion3"}/>, <input type="number" defaultValue={15} key="turn_clock"/>, "degrees"]
			},
			{
				"id": "random_position",
				"text": ["Go to random position"]
			},
			{
				"id": "goto_position",
				"text": ["Go to x:", <input type="number" defaultValue={100} key="goto_position-x"/>, "y:", <input type="number" defaultValue={100} key="goto_position-y"/>]
			},
			{
				"id": "point_direction",
				"text": ["Point in direction", <input type="number" defaultValue={90} key="point_direction"/>]
			}
		]
	}
];