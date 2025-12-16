'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getCookie = (name: string) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop()?.split(';').shift();
        };

        const loggedIn = getCookie('loggedIn');
        const user = getCookie('username');

        if (loggedIn === 'true') {
            router.push('/dashboard');
        }
    }, []);
    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        setLoading(true);
        const form = event.target as HTMLFormElement;
        const username = (form.elements.namedItem('username') as HTMLInputElement).value;
        const password = (form.elements.namedItem('password') as HTMLInputElement).value;
        await new Promise(resolve => setTimeout(resolve, 1000));

        const envUsername = process.env.NEXT_PUBLIC_USERNAME;
        const envPassword = process.env.NEXT_PUBLIC_PASSWORD;

        if (username === envUsername && password === envPassword) {
            console.log('Login successful');
            document.cookie = `loggedIn=true; path=/; max-age=86400`;
            document.cookie = `username=${username}; path=/; max-age=86400`;

            router.push('/dashboard');
        } else {
            console.log('Invalid credentials');
            alert('Invalid username or password.');
        }
        setLoading(false);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
            <div className="card p-8 md:p-10 rounded-lg w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                    <p className="text-gray-600 text-sm">Enter your credentials to access your workspace.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            className="w-full bg-white border border-gray-300 rounded-md px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            className="w-full bg-white border border-gray-300 rounded-md px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary text-white font-semibold py-2.5 rounded-md hover:bg-primary-dark transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                    >
                        {loading ? (
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : 'Sign In'}
                    </button>
                </form>

                <div className="mt-6 text-center space-y-2">
                    <a href="#" className="block text-sm text-gray-500 hover:text-primary transition-colors">Forgot your password?</a>
                    <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <a href="/register" className="text-primary hover:text-primary-dark font-medium transition-colors">
                            Register
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}