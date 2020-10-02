import React, { useState, useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";
//import { AppContext } from "../modules/context";

import ImgAvatar from '../../assets/images/images.png'

const Container = styled.div`
  flex-basis: 60;
  display: flex;
  z-index:1;
`;

const Title = styled(Typography)`
  flex-grow: 1;
`;


export default function Header() {

    //const { data: dataContext } = useContext(AppContext)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Container>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Title variant="h6">IST - Desenvolvimento</Title>

                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <Typography> Administrador </Typography>
                            {/* <Typography> {dataContext?.state?.usuario?.username} </Typography> */}
                            <Avatar alt="Remy Sharp" src={ImgAvatar} />
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
                            <MenuItem
                               // onClick={() => dataContext?.setState(null)}
                                >Sair</MenuItem>
                        </Menu>
                    </div>

                </Toolbar>
            </AppBar>
        </Container>
    );
}