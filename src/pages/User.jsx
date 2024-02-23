import React,{useEffect, useContext, } from 'react'
import { useParams } from 'react-router-dom';
import GithubContext from '../context/github/GithubContext'

function User() {
    const { user, getUser } = useContext(GithubContext);
    const {login} = useParams()


    useEffect(() => {
        getUser(login);
    }, []);

    return (
        <>
            {user ? (
                <div>
                    {user.login}
                </div>
            ) : (
                null
            )}
        </>
    );
}

export default User
