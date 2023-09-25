import * as React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "../assets/Navbar.css";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="app_bar">
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              OnlineShopping
            </Typography>
          </Link>
          <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
            <IconButton color="inherit">
              <ShoppingCartIcon style={{ height: "40px", width: "40px" }} />
              <span className="bag_quantity">
                <span>3</span>
              </span>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
