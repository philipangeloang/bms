import React from "react";

function SidebarListItem(props) {
    return(
        <li className="hover:bg-white hover:text-dark-blue hover:rounded-l-3xl p-4"><span className="mr-6">{props.icon}</span>{props.item}</li>
    );
}

export default SidebarListItem;