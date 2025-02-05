import { Link } from "react-router-dom";
import React from 'react'


export default function Headers (){


    return(
        <nav className="nav">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/users'>Users</Link>
        </nav>
    )

}