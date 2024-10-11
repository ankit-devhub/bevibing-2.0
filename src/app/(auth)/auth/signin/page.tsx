import ComponentsAuthLoginForm from '@/components/auth/components-auth-login-form'
import { Metadata } from 'next';
import React from 'react'



export const metadata: Metadata = {
    title: 'Login',
};

function Login() {
    return (
        <div>


            <ComponentsAuthLoginForm />
        </div>
    )
}

export default Login