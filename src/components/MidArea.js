import React, { useRef, useState } from "react";
import { actions } from "../actions";
import ActionButton from "./ActionButton";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import "./customBlocks";
import "./style.css";

export default function MidArea(props) {

  const { setDraggedElement, draggedElement, activeActions, setActiveActions, dragParent, setDragParent } = props;

  const [xml, setXml] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

  // function workspaceDidChange(workspace) {
  //   // Blockly.Generator()
  //   // const code = Blockly.workspaceToCode(workspace);
  //   // setJavascriptCode(code);
  //   // console.log(workspace);
  // }

  // const blocklyRef = useRef(null);
  // const { workspace, xml } = useBlocklyWorkspace({
  //   ref: blocklyRef,
  //   toolboxConfiguration: toolboxCategories, // this must be a JSON toolbox definition
  //   initialXml: initialXml,
  // });

  const handleDragEnd = () => {
    console.log(dragParent)
    if(draggedElement && dragParent != "actionarea") {
      let actionItem = "", actionItemColor = "";
      for(let action of actions) {
        for(let item of action.items) {
          console.log(action);
          if(item.id === draggedElement) {
            actionItem = item;
            break;
          }
        }

        console.log("Color", action.color)

        if(actionItem) {
          actionItemColor = action.color;
          break;
        }
      }

      setActiveActions(
        prevState => [...prevState,
                      <ActionButton item={actionItem} color={actionItemColor} setDraggedElement={setDraggedElement} setDragParent={setDragParent} key={actionItem.id} />
                    ]
      )
    }
  }

  return (
    <div
      id="actionarea"
      className="flex-1 h-full overflow-auto"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDragEnd}
    >
      {activeActions}
    </div>
    //   <>
    //   <BlocklyWorkspace
    //     toolboxConfiguration={toolboxCategories}
    //     initialXml={initialXml}
    //     className="flex-1 h-full overflow-auto"
    //     workspaceConfiguration={{
    //       grid: {
    //         spacing: 20,
    //         length: 3,
    //         colour: "#ccc",
    //         snap: true,
    //       },
    //     }}
    //     onWorkspaceChange={workspaceDidChange}
    //     onXmlChange={setXml}
    //   />
    // </>
  );
}
