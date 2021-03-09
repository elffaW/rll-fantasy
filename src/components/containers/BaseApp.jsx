import React, { useState } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Divider,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { AccountBox } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
// import { NavLink, useLocation } from 'react-router-dom';

// import NotFound from './NotFound';
// import { lookupTabNumByPath } from '../utils/tabHelper';

import logo from '../../images/RLL_logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  mainContentOffset: theme.mixins.toolbar,
  mainContent: {
    // hide scrollbars but still allow scrolling
    overflow: 'scroll',
    scrollbarWidth: 'none', /* Firefox */
    '&::-webkit-scrollbar': { /* WebKit */
      width: 0,
      height: 0,
    },
  },
  contentContainer: {
    width: `calc(100% - ${theme.spacing(2)}px) !important`,
    margin: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
  mainLogo: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  mainTitle: {
    fontFamily: 'Oswald',
    textShadow: '1px 1px 2px black',
    marginTop: -theme.spacing(0.5),
    fontVariant: 'small-caps',
  },
  drawerHeader: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    minWidth: 180,
  },
  drawerList: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

export default function BaseApp(props) {
  const { children } = props;
  const classes = useStyles();
  
  const [navOpen, setNavOpen] = useState(false);
  // const [auth, setAuth] = React.useState(true);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <React.Fragment key="nav-drawer-left">
            <IconButton
              color="secondary"
              aria-label="open drawer"
              onClick={() => setNavOpen(!navOpen)}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              anchor="left"
              open={navOpen}
              onClose={() => setNavOpen(false)}
              onOpen={() => setNavOpen(true)}
              className={classes.navDrawer}
            >
              <List className={classes.drawerList}>
                <ListSubheader color="primary" disableGutters>
                  <ListItem className={classes.drawerHeader}>
                    <ListItemIcon onClick={() => setNavOpen(false)}>
                      <IconButton
                        color="secondary"
                        aria-label="open drawer"
                        onClick={() => setNavOpen(false)}
                        edge="start"
                      >
                        <MenuIcon />
                      </IconButton>
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h5" className={classes.mainTitle}>
                        RLL
                      </Typography>
                    </ListItemText>
                    <ListItemIcon>
                      <Avatar src={logo} className={classes.mainLogo} />
                    </ListItemIcon>
                  </ListItem>
                </ListSubheader>
                <Divider />
              </List>
            </SwipeableDrawer>
          </React.Fragment>
          <Avatar src={logo} className={classes.mainLogo} />
          <Typography variant="h4" color="secondary" className={classes.mainTitle}>
            Rocket League League
          </Typography>
          {/* <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
            edge="end"
          >
            <AccountBox />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu> */}
        </Toolbar>
      </AppBar>
      <div className={classes.mainContentOffset}>
        <Box id="main-content" className={classes.mainContent}>
          <Container className={classes.contentContainer} maxWidth={false}>
            {children}
          </Container>
        </Box>
      </div>
    </>
  );
}
