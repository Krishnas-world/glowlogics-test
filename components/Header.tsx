"use client";
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Header() {
  const router = useRouter();
  function handleLogin(){
    router.push('/login');
  }
  return (
    // the header has to be divided to two sections one login and another part is logo of the company
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Image
          src="/gl.png"
          alt="GlowLogics Logo"
          width={200}
          height={200}
        />
        <div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </header>
  )
}
