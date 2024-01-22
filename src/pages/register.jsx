import React from 'react';
import RegisterForm from '../components/Fragments/RegisterForm';
import AuthLayout from '../components/Layouts/AuthLayout';
import { Link } from 'react-router-dom';

function RegisterPage() {
    return (
        <AuthLayout title="Register" subtitle="Input your account information">
            <RegisterForm />
            <div className="mt-5" />
            <p className="font-medium">Already have an account ? <Link to="/login" className="text-blue-700">Login</Link></p>
        </AuthLayout>
    );
}

export default RegisterPage;