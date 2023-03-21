'use client';
import React from 'react';
import { signIn } from 'next-auth/react';

export const Login = () => {
  const handleLogin = () => {
    signIn('spotify', {
      callbackUrl: 'http://localhost:3000/api/auth/callback',
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-20">
      <button
        className="flex px-12 py-2 text-lg tracking-widest uppercase rounded-full focus:outline-none bg-primary hover:bg-opacity-80"
        onClick={handleLogin}
      >
        Login 123
      </button>
    </div>
  );
};

export default Login;
