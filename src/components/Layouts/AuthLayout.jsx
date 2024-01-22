import React from 'react';

function AuthLayout({ children, title, subtitle }) {
    subtitle = subtitle || 'Welcome, please login with your account';
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full mx-4 sm:max-w-sm">
                <h1 className="text-2xl font-bold text-blue-700">{title}</h1>
                <p className="font-medium text-slate-600 mb-10">{subtitle}</p>
                {children}
            </div>
        </div>
    );
}

export default AuthLayout;