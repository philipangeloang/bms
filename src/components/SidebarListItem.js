import React from "react";

function SidebarListItem(props) {
    let navBarState = props.navBarState;

    return(
        <li className="hover:bg-white hover:text-dark-blue hover:rounded-l-3xl p-4" style={{paddingLeft: navBarState ? "" : "0", paddingRight: navBarState ? "" : "0"}}><span className="mr-6">{props.icon}</span>{navBarState ? props.item : ""}</li>
    );
}

export default SidebarListItem;