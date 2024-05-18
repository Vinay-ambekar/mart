import * as React from "react";
import { Link } from "react-router-dom";
/*import { useSelector } from "react-redux";*/
import { CART, HOME, SHOP } from "../DataPath/RouterLinks";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Box,
  MenuItem,
  Menu,
  Badge,
} from "@mui/material";

/* ICONS */
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  console.log("shop:", SHOP);
  const [anchorEl, setAnchorEl] = React.useState(null);
  /* const cartdata = useSelector((state) => state.cart); */
  //console.log('hedaer cartdata:',cartdata.length)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="sticky"  style={{ backgroundColor: "white" }}>
        <Toolbar>
          <Box
            className="ms-5 my-3"
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "flex",
                flexGrow: 1,
              },
            }}
          >
            <Link to={HOME} style={{ textDecoration: "none" }}>
              <p className="text-black">
                <span className="d-flex align-items-center">
                  <ShoppingBagIcon sx={{ fontSize: 35 }} />
                  <span className="fs-2 fw-medium ms-2">MART</span>
                </span>
              </p>
            </Link>
          </Box>
          <Box
            className="me-5 "
            sx={{ display: { xs: "none", sm: "none", md: "none", lg: "flex" } }}
          >
            <Link
              to="/"
              className="mx-4 my-3 fs-5 fw-medium"
              style={{ textDecoration: "none", color: "black" }}
            >
              Home
            </Link>
            <Link
              to={SHOP}
              className="mx-4 my-3 fs-5 fw-medium"
              style={{ textDecoration: "none", color: "black" }}
            >
              Shop
            </Link>
            <Link
              to={CART}
              className="mx-4 my-3 fs-5 fw-medium"
              style={{ textDecoration: "none", color: "black" }}
            >
              Cart
            </Link>
            <p className="my-3 mx-2 text-black ">
              <AccountCircleIcon />
            </p> 
            <Link to={CART} style={{ textDecoration: "none", color: "black" }}>
              <p color="inherit" className="my-3">
                {/* <Badge badgeContent={cartdata.length} color="secondary">
                    <ShoppingCartIcon />
                  </Badge> */}
                <Badge color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </p>{" "}
            </Link>
          </Box>
           <Box
            sx={{
              display: { xs: "flex", sm: "flex", md: "flex", lg: "none" },
              flexGrow: 1,
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <IconButton
              className="mb-3"
              color="black"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Link to={HOME} style={{ textDecoration: "none" }}>
              {" "}
              <p className="text-black">
                <span className="d-flex align-items-center">
                  <ShoppingBagIcon sx={{ fontSize: 28 }} />
                  <span className="fs-5 fw-medium ms-2">MART</span>
                </span>
              </p>
            </Link>
          </Box> 
        {/* responsive menu  */}
           <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            sx={{ display: { xs: "flex", sm: "flex", md: "flex", lg: "none" } }}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to={SHOP}
                style={{ textDecoration: "none", color: "black" }}
              >
                Shop
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to={CART}
                style={{ textDecoration: "none", color: "black" }}
              >
                CART
              </Link>
            </MenuItem>
            
          </Menu>  
          <Box
            sx={{ display: { xs: "flex", sm: "flex", md: "flex", lg: "none" } }}
          >
            <Link style={{ textDecoration: "none", color: "black" }}>
              <p color="black" className="mx-3">
                <AccountCircleIcon />
              </p>
            </Link>
            <Link to={CART} style={{ textDecoration: "none", color: "black" }}>
              <p color="black">
                <ShoppingCartIcon />
              </p>
            </Link>
          </Box> 
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Header;
