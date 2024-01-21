import React, { useState } from "react";
import { AppBar,Box,Divider,Drawer,IconButton,Toolbar,Typography,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
// import Logo from './images/logo.svg';
import './Header.css';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';





const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        {/* <img src={Logo} alt="logo" height={"70"} width="200" /> */}
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
                <img src="data:image/png;base64,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" alt="Cafe" height={"50"} width="100" /> 
                CAFE 
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"} className='display:flex ,text-align:center'>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;