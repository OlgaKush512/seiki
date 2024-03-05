import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar
      elevation={0}
      position="fixed"
      sx={{
        height: "7vh",
        backgroundColor: "#5f4ddd",
      }}
    >
      <Toolbar>
        <img src="/seikiLogo.webp" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
