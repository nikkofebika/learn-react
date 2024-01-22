import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/Fragments/LoginForm';
import AuthLayout from '../components/Layouts/AuthLayout';

function LoginPage() {
    return (
        <AuthLayout title="Login">
            <LoginForm />
            <div className="mt-5" />
            <p className="font-medium">Don't have an account ? <Link to="/register" className="text-blue-700">Register</Link></p>
        </AuthLayout>
    );
}

export default LoginPage;