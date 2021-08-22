import React from 'react';
import {NavLink} from 'react-router-dom';
const Navbar = ()=>{
    return(
        <>
        <NavLink exact activeClassName="active_class" to ='/'>Home</NavLink><br></br>
        <NavLink exact activeClassName="active_class" to ='/contact'>Contact</NavLink><br></br>
        <NavLink exact activeClassName="active_class" to ='/about'>About</NavLink>
    {/* <a href="/">Home</a><br></br>
    <a href="/contact">Contact</a><br></br>
    <a href="/about">About</a> */}
    </>
    )
};
export default Navbar;