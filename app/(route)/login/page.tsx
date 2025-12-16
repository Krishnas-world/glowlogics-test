import React from 'react'
export default function page() {
    function validatePassword(password: string): boolean {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const username = (form.elements.namedItem('username') as HTMLInputElement).value;
        const password = (form.elements.namedItem('password') as HTMLInputElement).value;
        if (validatePassword(password)) {
            console.log('Login successful for user:', username);
        } else {
            console.log('Password does not meet the criteria.');
        }
    }
    return (
        <div className="flex bg-orange-200 flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl font-bold text-center text-black">Login Page</h1>
            <p className="text-center mt-4 text-black">Please enter your credentials to log in.</p>

            <form action="">
                <div className="flex flex-col items-center mt-6">
                    <input
                        type="text"
                        placeholder="Username"
                        className="border border-black rounded text-black px-4 py-2 mb-4 w-64"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border border-black rounded text-black px-4 py-2 mb-4 w-64"
                    />
                    <button
                        type="submit"
                        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}