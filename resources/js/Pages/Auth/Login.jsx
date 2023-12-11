import { useEffect, useState } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import heroImage from "@/assets/image/hero.png"


export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });
    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    const [typePassword, setTypePassword] = useState(false)

    const typePasswordHandle = () => {
        if (typePassword) {
            setTypePassword(false)
        } else {
            setTypePassword(true)
        }
        console.log(typePassword)
    }

    return (
        <div className='flex justify-center min-h-[100vh] max-h-[100vh] overflow-hidden'>
            <Head title="Login" />
            <header className=''>
                <img src={heroImage} alt="" className='w-full' />
            </header>
            <GuestLayout>
                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                <form onSubmit={submit} className='px-5 py-10'>
                    <div>
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full sm:min-w-[350px]"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />
                        <div className='relative flex items-center'>
                            <TextInput
                                id="password"
                                type={typePassword ? 'text' : 'password'}
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full sm:min-w-[350px]"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <button type='button' onClick={typePasswordHandle} className={`absolute right-3 hover:scale-105 font-onest ${typePassword? 'text-gray-500' : 'text-black'}`}>{typePassword ? 'Hide' : 'Show'}</button>
                        </div>

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="block mt-8">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <span className="ms-2 text-sm text-gray-600">Remember me</span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-10 gap-3">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="underline text-md text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Forgot your password?
                            </Link>
                        )}

                        <PrimaryButton className="ms-4" disabled={processing}>
                            Log in
                        </PrimaryButton>
                    </div>
                </form>
            </GuestLayout>
        </div>
    );
}
