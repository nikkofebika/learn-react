import React, { useEffect, useRef } from 'react';
import InputForm from '../Elements/InputForm';
import Button from '../Elements/Button';

const RegisterForm = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <form action="">
            <InputForm label="Name" name="name" type="text" placeholder="input your name..." ref={inputRef} />
            <div className="my-5" />
            <InputForm label="Email" name="email" type="email" placeholder="example@email.com" />
            <div className="my-5" />
            <InputForm label="Password" name="password" type="password" placeholder="********" />
            <div className="my-5" />
            <InputForm label="Password Confirmation" name="password_confirmation" type="password" placeholder="********" />
            <div className="my-5" />
            <Button type="submit" classname="font-medium w-full py-2">Register</Button>
        </form>
    );
}

export default RegisterForm;