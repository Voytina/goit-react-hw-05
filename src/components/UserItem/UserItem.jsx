import React from 'react'
import { Link } from 'react-router-dom'
export default function UserItem ({item:{firstName,id}}){

    return (
        <Link to={id.toString()}>
            {firstName}
        </Link>
    )

}