import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Elements/Button';
import InputForm from '../Elements/InputForm';
import { getToken } from '../../services/auth.service';

const LoginForm = () => {
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await getToken({
                username: e.target.username.value,
                password: e.target.password.value,
            })
            localStorage.setItem('token', result.data.token)
            console.log('token',result)
        } catch (error) {
            setErrorMessage(error.response.data)
            console.log('error',error);
            return;
        }
        navigate('/products')
    }
    return (
        <form onSubmit={handleSubmit}>
            {errorMessage && <div className="text-white font-bold text-lg bg-red-700 rounded px-3 py-2 mb-3">{errorMessage}</div>}

            <InputForm label="Username" name="username" type="text" placeholder="your username" ref={inputRef} />
            <div className="my-5" />
            <InputForm label="Password" name="password" type="password" placeholder="********" />
            <div className="my-5" />
            <Button type="submit" classname="font-medium w-full py-2" >Login</Button>
        </form>
    );
}

export default LoginForm;