"use client"
import IconLockDots from '@/components/icon/icon-lock-dots';
import IconMail from '@/components/icon/icon-mail';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import IconLoader from '../icon/icon-loader';

const ComponentsAuthLoginForm = () => {

    const [loading, setLoading] = useState(false);

    const [credentials, setCredentials] = useState({
        identifier: '',
        password: '',
    })

    const submitForm = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        await signIn('credentials', { ...credentials, redirect: true, callbackUrl: '/dashboard' });
    };

    return (
        <form className="space-y-5 dark:text-white" onSubmit={submitForm} >
            <span className=''></span>
            <div>
                <label htmlFor="Email">Email or Username <span className="text-red-500">*</span></label>
                <div className="relative text-white-dark">
                    <input id="identifier" required name="identifier" autoComplete='off' value={credentials.identifier} onChange={(e) => setCredentials({ ...credentials, identifier: e.target.value })} type="text" placeholder="Enter Email / Username" className="py-3 form-input ps-10 placeholder:text-white-dark" />
                    <span className="absolute -translate-y-1/2 start-4 top-1/2">
                        <IconMail fill={true} />
                    </span>
                </div>
            </div>
            <div>
                <label htmlFor="Password">Password <span className="text-red-500">*</span></label>
                <div className="relative text-white-dark">
                    <input id="Password" required name="password" autoComplete='off' type="password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} placeholder="Enter Password" className="py-3 form-input ps-10 placeholder:text-white-dark" />
                    <span className="absolute -translate-y-1/2 start-4 top-1/2">
                        <IconLockDots fill={true} />
                    </span>
                </div>
            </div>
            {/* <div>
                <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="bg-white form-checkbox dark:bg-black" />
                    <span className="text-white-dark">Subscribe to weekly newsletter</span>
                </label>
            </div> */}
            <button type="submit" disabled={loading} className="btn btn-gradient !mt-10 py-3 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
                {
                    loading ?
                        <div className='flex items-center justify-center gap-2'>
                            <span>Signing In </span>
                            <IconLoader className='w-4 h-4 animate-spin' />
                        </div> :
                        <div>
                            Sign in
                        </div>
                }

            </button>
        </form>
    );
};

export default ComponentsAuthLoginForm;
