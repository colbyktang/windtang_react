import {useState} from 'react';

async function checkUserToken (credentials) {
    return fetch('http://localhost:4112/api/cs/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function checkToken() {


    /*
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse (tokenString);
        return userToken?.token
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        console.log(userToken);
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    };

    return {
        setToken: saveToken,
        token
    }
    */
}