import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
export default function Sidebar() {
    return (
        <>
        <div className="Sidebar">
        <ProSidebar  width="200px">
        <Menu iconShape="square" popperArrow="true">
                <MenuItem >
                    <Link to="/dashboard"> <img src="logo-step.png" alt="step.png"></img></Link>
                </MenuItem>
                <MenuItem >
                    <Link to="/dashboard"> Dashboard</Link>
                </MenuItem>
                <MenuItem >
                    <Link to="/device"> Device</Link>
                </MenuItem>
                <MenuItem >
                    <Link to="/statistics"> Statistics</Link>
                </MenuItem>
              
        </Menu>
        </ProSidebar>
        </div>
        </>
    );
  }
  