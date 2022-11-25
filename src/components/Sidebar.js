import React from "react";
import GridViewIcon from '@mui/icons-material/GridView';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import DomainVerificationOutlinedIcon from '@mui/icons-material/DomainVerificationOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import SidebarListItem from "./SidebarListItem";

function Sidebar(props) {
    // I got hold of the state of hamburger if clicked or not. I will just add conditional rendering from it
    let navBarState = props.navBarState;

    return (
        <div className="invisible absolute text-white | xl:visible xl:bg-navbar-bg xl:h-screen xl:w-[330px] xl:p-6 xl:fixed">
            <div className="flex">
                <img alt="Barangay Seal" src="./images/Barangay_Seal.png" className="h-14 w-14 border border-white rounded-full mr-6"/>
                <div>
                    <h2 className="font-bold text-xl">Barangay 564</h2>
                    <p>Sampaloc Manila, NCR</p>
                </div>
            </div>

            <div className="flex flex-col h-[95%] justify-between pt-10">
                <ul>
                    <SidebarListItem item="Dashboard" icon=<GridViewIcon sx={{fontSize: 40}} /> />
                    <SidebarListItem item="Document" icon=<TopicOutlinedIcon sx={{fontSize: 40}} /> />
                    <SidebarListItem item="Claiming" icon=<DomainVerificationOutlinedIcon sx={{fontSize: 40}} /> />
                    <SidebarListItem item="Logs" icon=<WorkOutlineOutlinedIcon sx={{fontSize: 40}} /> />
                    <SidebarListItem item="Records" icon=<ManageSearchOutlinedIcon sx={{fontSize: 40}} /> />
                </ul>
            
                <ul>
                    <SidebarListItem item="Settings" icon=<SettingsOutlinedIcon sx={{fontSize: 40}} /> />
                    <SidebarListItem item="Sign Out" icon=<LogoutOutlinedIcon sx={{fontSize: 40}} />/>
                </ul>
            </div>
        </div>
    );

}

export default Sidebar;