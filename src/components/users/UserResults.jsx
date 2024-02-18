import React from 'react'
import { useEffect, useState } from 'react'
import Spinner from '../layout/Spinner';

function UserResults() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const reposnse = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {
                Authorization : `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
        })

        const data = await reposnse.json()

        setUsers(data)
        setLoading(false)
    }

    if(!loading){
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
              {users.map(user => {
                return <h3>{user.login}</h3>
              })}
            </div>
          )
    } else {
        return <h3><Spinner /></h3>
    }

  
}

export default UserResults