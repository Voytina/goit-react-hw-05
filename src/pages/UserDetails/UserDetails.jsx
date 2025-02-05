import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { fetchUserById } from '../../services/api';


export default function UserDetails (){


    const {userId} = useParams();

    const [user,setUser] = useState(null);

    useEffect(()=>{


        async function getUser(id) {

            const obj = await fetchUserById(id);
            setUser(obj)
            
        }

        getUser(userId)

    },[userId])

    
    if(!user){
        return <div> await</div>
    }
    
    

    return(
        <div>
            <h3>{user.firstName}</h3>
            <h3>{user.lastName}</h3>
            <img src={user.image} alt="" />
            <p>{user.email}</p>
            <p>{user.phone}</p>

            <nav className='nav'>
                <Link to='posts'> Posts</Link>
            </nav>
            <Outlet/>
        </div>
    )

}