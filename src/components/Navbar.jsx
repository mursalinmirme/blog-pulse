import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import axios from "axios";
import PropTypes from "prop-types";
import * as React from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import ProfileMenu from "./ProfileMenu";
import useAxiosPublic from "../useHooks/useAxiosPublic";

const drawerWidth = 240;
const Navbar = (props) => {
  const { user, userLogout } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const axiosPublic = useAxiosPublic();

  const handleUserLogOUt = () => {
    const toastId = toast.loading("Logouting...");
    const lastUser = { email: user?.email };
    userLogout()
      .then(() => {
        axiosPublic
          .post("/logout", lastUser, {
            withCredentials: true,
          })
          .then(() => {
            toast.success("Logout Successfully", { id: toastId });
          });
      })
      .catch((err) => {
        toast.error(err.message, { id: toastId });
      });
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navItems = (
    <>
      <NavLink to="/">
        {({ isActive }) => (
          <span
            className={
              isActive
                ? "bg-[#DAD7CD] font-semibold rounded text-black px-2 py-1"
                : ""
            }
          >
            Home
          </span>
        )}
      </NavLink>
      <NavLink to="/add-blog">
        {({ isActive }) => (
          <span
            className={
              isActive
                ? "bg-[#DAD7CD] font-semibold rounded text-black px-2 py-1"
                : ""
            }
          >
            Add Blog
          </span>
        )}
      </NavLink>
      <NavLink to="/all-blogs">
        {({ isActive }) => (
          <span
            className={
              isActive
                ? "bg-[#DAD7CD] font-semibold rounded text-black px-2 py-1"
                : ""
            }
          >
            All Blogs
          </span>
        )}
      </NavLink>
      <NavLink to="/featured-blogs">
        {({ isActive }) => (
          <span
            className={
              isActive
                ? "bg-[#DAD7CD] font-semibold rounded text-black px-2 py-1"
                : ""
            }
          >
            Featured Blogs
          </span>
        )}
      </NavLink>
      <NavLink to="/wishlist">
        {({ isActive }) => (
          <span
            className={
              isActive
                ? "bg-[#DAD7CD] font-semibold rounded text-black px-2 py-1"
                : ""
            }
          >
            Wishlist
          </span>
        )}
      </NavLink>
    </>
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        style={{
          fontSize: "20px",
          fontWeight: 700,
          textTransform: "uppercase",
        }}
        variant="h5"
        sx={{ my: 2 }}
      >
        BlogPulse
      </Typography>
      <Divider />
      <List>
        <div className="flex flex-col space-y-3">{navItems}</div>
        <div className="flex flex-col">
          {user ? (
            <>
              <img
                className="w-20 h-20 mt-5 rounded-full mx-auto"
                src={user?.photoURL}
                alt=""
              />
              <Button
                onClick={handleUserLogOUt}
                style={{ marginTop: "15px" }}
                variant="outline"
              >
                <Link>Logout</Link>
              </Button>
            </>
          ) : (
            <>
              <Button style={{ border: "1px solid white" }} variant="outline">
                <Link to={"/signup"}>Sign Up</Link>
              </Button>
              <Button style={{ border: "1px solid white" }} variant="outline">
                <Link to={"/signin"}>Sign In</Link>
              </Button>
            </>
          )}
        </div>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <div
        style={{ maxWidth: "1536px", width: "1536px", position: "relative" }}
        className="max-w-screen-2xl mx-auto border p-5"
      >
        <AppBar
          style={{
            background: "#3A5A40",
            maxWidth: "1536px",
            position: "absolute",
            padding: "11px 0",
          }}
          component="nav"
        >
          <Toolbar>
            <IconButton
              style={{ color: "#ffffff" }}
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              style={{ textTransform: "uppercase", fontWeight: "700" }}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
            >
              BlogPulse
            </Typography>
            <Box className="hidden lg:block">
              <div className="flex items-center gap-64">
                <div className="flex gap-8">{navItems}</div>
                <div className="flex items-center gap-5">
                  {user ? (
                    <>
                      {/* <img
                        className="w-11 h-11 rounded-full"
                        src={user?.photoURL}
                        alt=""
                      /> */}
                      <ProfileMenu profile={user?.photoURL}></ProfileMenu>
                      <Button
                        onClick={handleUserLogOUt}
                        style={{
                          background: "#FFFFFF",
                          color: "#344E41",
                          fontWeight: "600",
                          height: "45px",
                          padding: "0 20px",
                        }}
                        variant="solid"
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        style={{ border: "1px solid #DAD7CD" }}
                        variant="outline"
                      >
                        <Link to={"/signup"}>Sign Up</Link>
                      </Button>
                      <Button
                        style={{ border: "1px solid #DAD7CD" }}
                        variant="outline"
                      >
                        <Link to={"/signin"}>Sign In</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
