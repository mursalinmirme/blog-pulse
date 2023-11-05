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
import PropTypes from "prop-types";
import * as React from "react";
import { Link, NavLink } from "react-router-dom";

const drawerWidth = 240;
const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navItems = (
    <>
      <NavLink to="/">
        {({ isActive }) => (
          <span className={isActive ? "active" : ""}>Home</span>
        )}
      </NavLink>
      <NavLink to="/add-blog">
        {({ isActive }) => (
          <span className={isActive ? "active" : ""}>Add Blog</span>
        )}
      </NavLink>
      <NavLink to="/all-blogs">
        {({ isActive }) => (
          <span className={isActive ? "active" : ""}>All Blogs</span>
        )}
      </NavLink>
      <NavLink to="/all-blogs">
        {({ isActive }) => (
          <span className={isActive ? "active" : ""}>Featured Blogs</span>
        )}
      </NavLink>
      <NavLink to="/all-blogs">
        {({ isActive }) => (
          <span className={isActive ? "active" : ""}>Wishlist</span>
        )}
      </NavLink>
    </>
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography style={{fontSize: '20px', fontWeight: 700, textTransform: 'uppercase'}} variant="h5" sx={{ my: 2 }}>
        BlogPulse
      </Typography>
      <Divider />
      <List>
        <div className="flex flex-col space-y-3">{navItems}</div>
        <div className="flex flex-col">
          <Button variant="outline"><Link>Sign Up</Link></Button>
          <Button variant="outline"><Link>Sign In</Link></Button>
        </div>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
        <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <div style={{maxWidth: '1536px', width: '1536px', position: 'relative'}}  className="max-w-screen-2xl mx-auto border p-5">
      <AppBar style={{background: '#3A5A40', maxWidth: '1536px',position: 'absolute'}} component="nav">
        <Toolbar>
          <IconButton
            color=""
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            style={{textTransform: 'uppercase', fontWeight: '700'}}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            BlogPulse
          </Typography>
          <Box className="hidden lg:block">
            <div className="flex items-center gap-64">
              <div className="flex gap-8">{navItems}</div>
              <div className="flex gap-4">
                <Button style={{border: '1px solid white'}} variant="outline">
                  Sign up
                </Button>
                <Button style={{border: '1px solid white'}} variant="outline">
                  Sign in
                </Button>
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
            display: { xs: "block", sm: "none" },
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
