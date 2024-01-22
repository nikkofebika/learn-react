import React from 'react';
import InputForm from '../Elements/InputForm';
import Button from '../Elements/Button';

const RegisterForm = () => {
    return (
        <form action="">
            <InputForm label="Name" name="name" type="text" placeholder="input your name..." />
            <div className="my-5" />
            <InputForm label="Email" name="email" type="email" placeholder="example@email.com" />
            <div className="my-5" />
            <InputForm label="Password" name="password" type="password" placeholder="********" />
            <div className="my-5" />
            <InputForm label="Password Confirmation" name="password_confirmation" type="password" placeholder="********" />
            <div className="my-5" />
            <Button type="submit" classname="font-medium">Register</Button>
        </form>
    );
}

export default RegisterForm;