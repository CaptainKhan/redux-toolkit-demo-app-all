import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'


export const UserView = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    console.log(fetchUsers)
    return (
        <div>
            <h2>List of users</h2>
            {/* {user.loading && <div>Loading...</div>}
            {user.loading && user.error ? <div>Error: {user.error}</div> : null}
            {user.loading && user.users.length ? (
                <ul>
                    {user.users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            ) : null} */}
            {user.loading ? (
    <div>Loading...</div>
) : user.error ? (
    <div>Error: {user.error}</div>
) : user.users.length > 0 ? (
    <ul>
        {user.users.map((user) => (
            <li key={user.id}>{user.name}</li>
        ))}
    </ul>
) : (
    <div>No users found.</div>
)}

        </div>
    )
}

