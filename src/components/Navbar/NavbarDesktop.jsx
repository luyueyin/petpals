import { ListItemText, Typography } from "@mui/material";
import { NavList, NavbarContainer, NavbarHeader, StyledLink, NavbarDesktopWidth } from "../styled/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavbarDesktop({ matches }) {

    return (
        <NavbarContainer>
            <NavbarDesktopWidth>
                <StyledLink to='/'><NavbarHeader>Petpels</NavbarHeader></StyledLink>
                <NavList type="row">
                    <StyledLink to='/'>Home</StyledLink>
                    <StyledLink to='/petparent'>Pet Parent</StyledLink>
                    <StyledLink to='/petsitter'>Pet Sitter</StyledLink>
                </NavList>
            </NavbarDesktopWidth>
        </NavbarContainer>
    )
} 