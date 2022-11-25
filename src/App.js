import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";


function App() {

    const [navBarOpen, setNavBarOpen] = useState(true);

    function navBarClick() {
    
        setNavBarOpen(prev => {
            return !prev;
        });
    }
    
    return (
        <div>
            <Sidebar navBarState={navBarOpen} />
            <Topbar onClick={navBarClick} />
            <Dashboard />
        </div>
        
    );
}

export default App;