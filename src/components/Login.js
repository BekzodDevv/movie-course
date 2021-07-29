import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import API from "../API"

//component
import Button from './Button';


//styles 
import { Wrapper } from './Login.styles';

//context 
import { Context } from "../context";

const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const [user, setUser] = useContext(Context);
    const navigate = useNavigate();


    const handleSubmit = async () => {
        setError(false);

        try {
            const requestToker = await API.getRequestToken();
            const sessionId = await API.authenticate(
                requestToker,
                userName,
                password
            )
            setUser({sessionId: sessionId.session_id, userName});


            navigate('/');

        } catch (error) {
            setError(true);

        }

    }


    const handleInput = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if (name === "userName") setUserName(value);
        if (name === "password") setPassword(value);

    }


    return (

        <Wrapper>
            {error && <div className="error"> there was an error! </div> }
            <label>Username:</label>
            <input
                type="text"
                value={userName}
                name="userName"
                onChange={handleInput}
            />

            <input
                type="password"
                value={password}
                name="password"
                onChange={handleInput}
            />

            <Button text="Login" callback={handleSubmit} />

        </Wrapper>

    )

}

export default Login;






