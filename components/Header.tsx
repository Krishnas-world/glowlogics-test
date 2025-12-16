"use client";
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Header() {
  const router = useRouter();
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
    };

    const loggedIn = getCookie('loggedIn');
    const user = getCookie('username');

    if (loggedIn === 'true' && user) {
      setUsername(user);
    }
  }, []);

  function handleLogin() {
    router.push('/login');
  }

  function handleLogout() {
    document.cookie = "loggedIn=; path=/; max-age=0";
    document.cookie = "username=; path=/; max-age=0";
    setUsername(null);
    router.push('/login');
  }

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div 
          className="cursor-pointer flex items-center gap-2 group" 
          onClick={() => { router.push('/') }}
        >
          <div className="relative w-10 h-10">
             <Image
              src="/gl.png"
              alt="GlowLogics Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Glow<span className="text-primary">Logics</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Solutions</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">About</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          {username ? (
            <>
              <span className="text-sm font-medium text-gray-700">Welcome, <span className="text-primary font-bold">{username}</span></span>
              <button 
                className="text-sm font-medium text-gray-500 hover:text-red-500 transition-colors" 
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <button 
              className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-primary-dark transition-colors shadow-sm" 
              onClick={handleLogin}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
