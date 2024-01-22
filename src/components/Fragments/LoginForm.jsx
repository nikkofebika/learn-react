import React from 'react';
import InputForm from '../Elements/InputForm';
import Button from '../Elements/Button';

const LoginForm = () => {
    return (
        <form action="">
            <InputForm label="Email" name="email" type="email" placeholder="example@email.com" />
            <div className="my-5" />
            <InputForm label="Password" name="password" type="password" placeholder="********" />
            <div className="my-5" />
            <Button type="submit" classname="font-medium" >Login</Button>
        </form>
    );
}

export default LoginForm;