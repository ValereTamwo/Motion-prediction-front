// src/App.js
import React, { useState, useEffect } from 'react';
import { auth } from '../../components/firebase/Firebase';
import SignIn from './SignIn';
import SignUp from './SignUp';

const AuthA = () => {
  const [user, setUser] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md text-center">
            <h2 className="text-2xl mb-4">Welcome, {user.displayName || user.email}</h2>
            <button 
              onClick={() => auth.signOut()} 
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        isSignUp ? (
          <SignUp />
        ) : (
          <SignIn />
        )
      )}
      {!user && (
        <div className="flex justify-center mt-4">
          <button 
            onClick={() => setIsSignUp(!isSignUp)} 
            className="text-blue-500 hover:underline"
          >
            {isSignUp ? 'Have an account? Sign In' : "Don't have an account? Sign Up"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthA;
