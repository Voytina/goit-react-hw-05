import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPostsByUserId } from '../../services/api';


export default function UserPosts (){

    const {userId} = useParams();

    const [posts,setPosts] = useState([]);

    useEffect(()=>{

        async function getPosts(id) {

            const obj = await fetchPostsByUserId(id);

            setPosts(obj.posts)
            
        }

        getPosts(userId)

    },[userId])
    
    if(!posts){
        return <div> Await ...</div>
    }
    
    console.log(posts);
    

    return(
        <ul>
            {
                posts.map((value) => {
                    return <li key={value.id}> <h3>{value.body}</h3></li>
                })
            }
        </ul>
    )

}