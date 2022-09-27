import React from "react";
import Icon from "../components/Icon";

export function getDraggedElement(id, actions) {

    let iconTextPos = id.indexOf("*icon*");
    if(iconTextPos == -1)
        return id;
    
    return (
        <>
            {text.substring(0, iconTextPos-1)}
            {/* <Icon name={icon.name} size={icon.size} className={icon.class} /> */}
            {text.substring(iconTextPos+6, text.length)}
        </>
    );
}