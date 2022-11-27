import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import DomainVerificationOutlinedIcon from "@mui/icons-material/DomainVerificationOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import SidebarListItem from "./SidebarListItem";

function Sidebar(props) {
  return (
    <React.Fragment>
      <input type="checkbox" id="navbar-toggle" className="hidden absolute" />
      <div className="opacity-0 invisible absolute bg-navbar-bg text-white | md:opacity-100 md:visible md:bg-navbar-bg md:h-screen md:w-[70px] md:fixed | xl:opacity-100 xl:visible xl:bg-navbar-bg xl:h-screen xl:w-[330px] xl:fixed">
        <div className="flex | md:p-6 md:pb-[3.5rem] | xl:p-6 ease-linear">
          <img
            alt="Barangay Seal"
            src="./images/Barangay_Seal.png"
            className="h-14 w-14 border border-white rounded-full mr-6
                     md:h-6 md:w-6
                     xl:h-14 xl:w-14"
          />
          <div className="location md:invisible md:absolute | xl:visible xl:static">
            <h2 className="font-bold text-xl">Barangay 564</h2>
            <p>Sampaloc Manila, NCR</p>
          </div>
        </div>

        <div className="list-item-box flex flex-col h-[85%] justify-between | md:py-0 | xl:px-6">
          <ul>
            <SidebarListItem
              item="Dashboard"
              icon=<GridViewIcon sx={{ fontSize: 40 }} />
            />
            <SidebarListItem
              item="Document"
              icon=<TopicOutlinedIcon sx={{ fontSize: 40 }} />
            />
            <SidebarListItem
              item="Claiming"
              icon=<DomainVerificationOutlinedIcon sx={{ fontSize: 40 }} />
            />
            <SidebarListItem
              item="Logs"
              icon=<WorkOutlineOutlinedIcon sx={{ fontSize: 40 }} />
            />
            <SidebarListItem
              item="Records"
              icon=<ManageSearchOutlinedIcon sx={{ fontSize: 40 }} />
            />
          </ul>

          <ul>
            <SidebarListItem
              item="Settings"
              icon=<SettingsOutlinedIcon sx={{ fontSize: 40 }} />
            />
            <SidebarListItem
              item="Sign Out"
              icon=<LogoutOutlinedIcon sx={{ fontSize: 40 }} />
            />
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
