import React from "react";
import Icon from "../components/Icon";

export const actionsData = [
	{
		"name": "Events",
		"color": "yellow",
		"items": [
			{
				"id": "event_self_clicked",
				"text": "When this sprite clicked",
			}
		]
	},
	{
		"name": "Motion",
		"color": "blue",
		"items": [
			{
				"id": "move_steps",
				"text": ["Move", <input type="number" defaultValue={10} key="move_steps"/>, "steps"],
			},
			{
				"id": "turn_anticlock",
				"text": ["Turn", <Icon name="undo" size={15} className="text-white mx-2" key="turn_anticlock_icon"/>, <input type="number" defaultValue={15} key="turn_anticlock"/>, "degrees"]
			},
			{
				"id": "turn_clock",
				"text": ["Turn", <Icon name="redo" size={15} className="text-white mx-2" key="turn_clock_icon"/>, <input type="number" defaultValue={15} key="turn_clock"/>, "degrees"]
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
			},
			{
				"id": "set_x",
				"text": ["Set x to", <input type="number" defaultValue={100} key="set_x"/>]
			},
			{
				"id": "set_y",
				"text": ["Set y to", <input type="number" defaultValue={100} key="set_y"/>]
			}
		]
	},
	{
		"name": "Looks",
		"color": "purple",
		"items": [
			{
				"id": "change_size",
				"text": ["Change size by", <input type="number" defaultValue={10} key="change_size"/>],
			},
			{
				"id": "set_size",
				"text": ["Set size to", <input type="number" defaultValue={100} key="set_size"/>, "%"],
			},
			{
				"id": "show",
				"text": ["Show"]
			},
			{
				"id": "hide",
				"text": ["Hide"]
			}
		]
	},
	{
		"name": "Control",
		"color": "red",
		"items": [
			{
				"id": "create_clone",
				"text": "Create clone of myself",
			},
			{
				"id": "delete_clone",
				"text": "Delete clone"
			},
			{
				"id": "wait_n_secs",
				"text": ["Wait", <input type="number" defaultValue={1} key="wait_n_secs"/>, "seconds"]
			}
		]
	}
];