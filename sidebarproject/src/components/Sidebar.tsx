import React from "react";
import { SidebarData } from "./SidebarData";
import { SidebarIcon } from "./SidebarIcon";
import { ReactComponent as TopLogoIcon } from "../images/TopLogo.svg";

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        <li className="SidebarIcon">
          <SidebarIcon />
        </li>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname === val.link ? "active" : ""}
              className="row"
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
        ;
      </ul>
    </div>
  );
}

export default Sidebar;
