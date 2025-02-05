import React, { useEffect, useState } from 'react';
import { fetchAllUsers } from '../../services/api';
import UserItem from '../../components/UserItem/UserItem';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const obj = await fetchAllUsers();
      setUsers(obj.users);
    }

    getUsers();
  }, []);

  return (
    <ul>
        {
            users.map((value) => {
                return <li key={value.id}><UserItem item={value}/> </li>
            })
        }
    </ul>
  );
}
