import {
  Box,
  AppBar,
  Typography,
  Container,
  Toolbar,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavButton, NavButtonProps } from "./navbutton";
import React from "react";

export default function NavBar() {
  const bioButtonProps: NavButtonProps = {
    navigationText: "Info",
    route: "/bio",
  };
  const experienceButtonProps: NavButtonProps = {
    navigationText: "Experience",
    route: "/experience",
  };
  const projectButtonProps: NavButtonProps = {
    navigationText: "Projects",
    route: "/projects",
  };

  const pages: NavButtonProps[] = [
    bioButtonProps,
    experienceButtonProps,
    projectButtonProps,
  ];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Jeffrey Siu
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.navigationText}
                  onClick={handleCloseNavMenu}
                >
                  <NavButton
                    route={page.route}
                    navigationText={page.navigationText}
                  />
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Jeffrey Siu
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Stack spacing={2} direction="row">
              {pages.map((page) => (
                <NavButton
                  key={page.navigationText}
                  route={page.route}
                  navigationText={page.navigationText}
                />
              ))}
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
