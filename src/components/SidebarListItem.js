import React from "react";

function SidebarListItem(props) {
  return (
    <li className="hover:bg-white hover:text-dark-blue hover:rounded-l-3xl p-4">
      <span className="icon mr-6 invisible | md:visible">{props.icon}</span>
      <span className="icon-text md:invisible md:absolute | xl:static xl:visible">
        {props.item}
      </span>
    </li>
  );
}

export default SidebarListItem;
