import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link, useLocation } from "react-router-dom";

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

import "../css/components/navbar.css";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(useLocation().pathname); // Track the selected nav item
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const handleNavItemClick = (path) => () => {
        setSelectedItem(path);
        setDrawerOpen(false);
    };

    const drawer = (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            className='sidebar'
        >
            <div className='sidebar__header'>
                <img src="https://www.rootit.in/_next/static/media/smallLogoBlack.f20dd0e7.svg" alt="" />
                <CloseIcon className='close__icon' />
            </div>
            <ul className='navbar__links'>
                {['/', '/services', '/about', '/career', '/work'].map((path, index) => (
                    <li key={index}>
                        <Link
                            className={`link ${selectedItem === path ? 'selected' : ''}`}
                            to={path}
                            onClick={handleNavItemClick(path)}
                        >
                            {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(1).slice(1)}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className="navbar">
            <AppBar position="static" className='navbar__container'>
                <Toolbar className='navbar__toolbar'>
                    <img src="https://www.rootit.in/_next/static/media/CompanyLogo.cfe9c291.svg" alt="" />
                    {isMobile ? (
                        <>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                            >
                                <Menu className='hamburger__icon' />
                            </IconButton>
                            <Drawer
                                anchor="right"
                                open={drawerOpen}
                                onClose={toggleDrawer(false)}
                            >
                                {drawer}
                            </Drawer>
                        </>
                    ) : (
                        <>
                            <ul className='navbar__links'>
                                {['/', '/services', '/about', '/career', '/work'].map((path, index) => (
                                    <li key={index}>
                                        <Link
                                            className={`link ${selectedItem === path ? 'selected' : ''}`}
                                            to={path}
                                            onClick={handleNavItemClick(path)}
                                        >
                                            {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(1).slice(1)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <button className="btn btn-nav text-normal">Get in touch <ArrowOutwardIcon /></button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
