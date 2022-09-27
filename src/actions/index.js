import React from "react";
import Icon from "../components/Icon";

export const actions = [
	{
		"name": "Events",
		"color": "yellow",
		"items": [
			{
				"id": "event1",
				"text": ["When", <Icon name="flag" size={15} className="text-green-600 mx-2" key={"event1"}/>, "clicked"]
			},
			{
				"id": "event2",
				"text": "When this sprite clicked",
			}
		]
	},
	{
		"name": "Motion",
		"color": "blue",
		"items": [
			{
				"id": "motion1",
				"text": "Move 10 steps",
			},
			{
				"id": "motion2",
				"text": ["Turn", <Icon name="undo" size={15} className="text-white mx-2" key={"motion2"}/>, "15 degrees"]
			},
			{
				"id": "motion3",
				"text": ["Turn", <Icon name="redo" size={15} className="text-white mx-2" key={"motion3"}/>, "15 degrees"]
			}
		]
	}
];

export const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [
			//   {
			//     kind: "label",
			//     text: "Events",
			//   },
			{
				kind: "category",
				name: "Events",
				colour: "yellow",
				contents: [
					{
						kind: "block",
						type: "when_stride_clicked",
						colour: "yellow",
					},
					// {
					// 	kind: "block",
					// 	type: "when_sprite_clicked",
					// 	colour: "yellow",
					// }
				]
			}
    //   {
    //     kind: "block",
    //     name: "When stride clicked",
    //     colour: "yellow",
    //   }
    //   {
    //     kind: "block",
    //     name: "When stride clicked",
    //     colour: "yellow",
    //   }
    //   {
    //     kind: "block",
    //     name: "When stride clicked",
    //     colour: "yellow",
    //   }
    //     contents: [
    //       {
    //         kind: "block",
    //         type: "controls_if",
    //       },
    //       {
    //         kind: "block",
    //         type: "logic_compare",
    //       },
    //       {
    //         kind: "block",
    //         type: "when_stride_clicked"
    //       }
    //     ],
    //   },
    //   {
    //     kind: "category",
    //     name: "Math",
    //     colour: "#5CA65C",
    //     contents: [
    //       {
    //         kind: "block",
    //         type: "math_round",
    //       },
    //       {
    //         kind: "block",
    //         type: "math_number",
    //       },
    //     ],
    //   },
    //   {
    //     kind: "category",
    //     name: "Custom",
    //     colour: "#5CA699",
    //     contents: [
    //       {
    //         kind: "block",
    //         type: "new_boundary_function",
    //       },
    //       {
    //         kind: "block",
    //         type: "return",
    //       },
    //     ],
    //   },
    ],
  };