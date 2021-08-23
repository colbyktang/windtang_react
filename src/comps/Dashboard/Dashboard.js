import React from 'react';
import Login from '../Login/Login';
import useToken from '../App/useToken';
import checkToken from '../App/checkToken';

export default function Dashboard() {
    const { token, setToken } = useToken();

    if (!token) {
        return <Login setToken={setToken} />
    }
    else {
        //checkToken={}
    }

    return (
        <h2>Dashboard</h2>
    );
}