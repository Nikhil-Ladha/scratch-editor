import React from "react";
import Icon from "../components/Icon";

export const actions = [
	{
		"name": "Events",
		"color": "yellow",
		"items": [
			{
				"id": "when_stride_clicked",
				"text": ["When", <Icon name="flag" size={15} className="text-green-600 mx-2" key="when_stride_clicked"/>, "clicked"]
			},
			{
				"id": "when_self_clicked",
				"text": "When this sprite clicked",
			},
			{
				"id": "when_key_pressed",
				"text": ["When",
						 <select selected="spac" key="key_pressed">
							<option value="32">space</option>
							<option value="37">arrow left</option>
							<option value="38">arrow right</option>
							<option value="39">arrow up</option>
							<option value="40">arrow down</option>
							<option value="65">a</option>
							<option value="66">b</option>
							<option value="67">c</option>
						 </select>,
						 "key pressed"
						]
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
			},
			// {
			// 	"id": "repeat_n_times",
			// 	"text": ["Repeat", <input type="number" defaultValue={100} key="set_size"/>, "%"],
			// },
			// {
			// 	"id": "show",
			// 	"text": ["Show"]
			// },
			// {
			// 	"id": "hide",
			// 	"text": ["Hide"]
			// }
		]
	}
];