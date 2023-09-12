"use client";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import Image from "next/image";
const drawerWidth = 240;
const navItems = ["our Menu", "Deals", "About Our Food", "Contacts", "Locate"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", mt: 5 }}>
      <Image
        src="/favicon.ico"
        width={40}
        height={40}
        alt="Picture of the author"
      />

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                color: "#E9AF05",
                textTransform: "uppercase",
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" color="transparent">
        <Toolbar className="toolbar">
          <Image
            src="/favicon.ico"
            width={40}
            height={40}
            alt="Picture of the author"
            className="logo2"
          />
          <IconButton
            // color="warning"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { color: "#E9AF05" } }}
            className="menuicon"
          >
            <MenuIcon sx={{ width: "2em", height: "2em" }} />
          </IconButton>
          <Image
            src="/favicon.ico"
            width={40}
            height={40}
            alt="Picture of the author"
            className="logo"
          />
          {/* 
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              flexGrow: 0,
              display: { xs: "none", sm: "block" },
              color: "#E9AF05",
            }}
          >
            <LunchDiningIcon sx={{ width: "2em", height: "2em" }} />
          </IconButton> */}
          <Box className="appbaritem">
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#E9AF05", mr: 2 }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          className="drawer"
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              backgroundColor: "#3B3B4B",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
