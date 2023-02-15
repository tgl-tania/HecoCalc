import { Divider, ListItemIcon, ListItemText } from "@mui/material";
import { Drawer, List, ListItem } from "@mui/material";
import React, { useState } from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";
import SettingsIcon from "@mui/icons-material/Settings";
import "../css/navbar.css";
import LogoutIcon from "@mui/icons-material/Logout";
//import Settings from '@mui/icons-material/Settings';
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { useNavigate } from "react-router-dom";
//import Link from '@mui/material';

function Navbar() {
  const [open, setOpen] = useState(false);

  const [component, setComponent] = useState(false);

  const openPage = () => {
    setComponent(true);
  };

  const closePage = () => {
    setComponent(false);
  };

  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/");
  };

  const list = () => (
    <div style={{ width: 250 }}>
      <List>
        <div className="MainMenu">Main Menu</div>
        <Divider />
        {["Dashboard"].map((label, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <TaskAltIcon />
            </ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
        ))}
        {["Snapshots"].map((label, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <CameraEnhanceIcon />
            </ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
        ))}
        {["Settings"].map((label, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
        ))}

        <div className="footer">
          {["Log Out"].map((label, index) => (
            <ListItem key={index} onClick={navigateToLogin}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          ))}
        </div>
      </List>
    </div>
  );

  return (
    <div className="navbar-container">
      <div className="setting" onClick={() => setOpen(true)}>
        <DensityMediumIcon />
      </div>
      <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        {list()}
      </Drawer>
      {/* <div className='name'>Settings</div>

            <button className='button1' onClick={openPage} > Respository </button>
            <button className='button2'> Decision Tree </button>
            <button className='button3'> Input Data </button>

            {component && (
                <div>
                    <div className='heading'>Select the Repository you want HecoCalc to use:</div>
                    <textarea className='enter' rows={1}></textarea>
                    <button className='repobutton'>Select Repository</button>
                    <button className='but' onClick={closePage}>Close Repository Page </button>
                </div>
            )} */}
    </div>
  );
}

export default Navbar;
