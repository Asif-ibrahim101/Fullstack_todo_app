'use client';
import React from 'react';
import Todo from './Components/Todo';
import { useSession, signIn, signOut } from 'next-auth/react';

const Header = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div id='Header' className='relative flex items-center py-4'>
      <h1 className='text-8xl pt-8 font-bold text-[#15F5BA] mx-auto'>Todo App</h1>
      <div className="absolute right-8">
        {session ? (
          <div className="text-right">
            <p>{session.user?.name}</p>
            <button 
              onClick={() => signOut()} 
              className="bg-red-500 text-white font-bold text-xl px-4 py-2 rounded cursor-pointer"
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className="text-right">
            <p>Not signed in</p>
            <button 
              onClick={() => signIn()} 
              className="bg-[#15F5BA] text-black font-bold text-xl px-4 py-2 rounded cursor-pointer"
            >
              Sign in
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="font-ubuntu">
      <Header />
      <br />
      <div id="Main_body" className='flex flex-col justify-center items-center py-4'>
        <Todo />
      </div>
    </div>
  );
};

export default Home;