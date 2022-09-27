import React from 'react';
import Blockly from 'blockly';
import Icon from './Icon';
const customGenerator = new Blockly.Generator('spriteEditor');

Blockly.Blocks['when_stride_clicked'] = {
    init: function () {
        this.appendValueInput('VALUE')
            .setCheck('String')
            .appendField(`When ${<Icon name="flag" size={15} className="text-green-600 mx-2" key={"event1"}/>} clicked`);
        this.setOutput('');
        // this.appendField("When Stride Clicked");
        this.setColour("yellow");
    }
};

customGenerator['when_stride_clicked'] = function (block) {
    var text_name = block.getFieldValue('length of');
    // var statements_content = Blockly.Python.statementToCode(block, 'Content');
    // // TODO: Assemble Python into code variable.
    // var code = 'def ' + text_name + '(_object,**kwargs):\n' + statements_content + '\n';
    return text_name;
};