import React, { useState } from 'react'
import { useSignIn } from '../../contexts/SignInContext'
import SignIn from "../../pages/signIn/SignIn"
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
function Login() {
  const [usert, setUser] = useState({})
  const { open, Setopen, data, Setdata } = useSignIn()    
  
      const handleLogout = () => {
    localStorage.removeItem('user');
    Setdata(null);
      };
  
   useEffect(() => {
        const user = JSON.parse(window.localStorage.getItem('user'));
        setUser(user);
    console.log(user)    
    },[])

  return (
      <div>
           <section className="absolute top-0 right-0 mr-9 mt-5 ml-9">
        {usert ? (
       <div className="flex gap-4">
            <Link
              to="/dashboard"
              className="w-[300px] border-black text-black p-2 rounded border hover:bg-slate-400 flex justify-center items-center"
            >
              Mon Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="w-full border-black text-black p-2 rounded hover:bg-red-200 border flex justify-center items-center"
            >
              Log out
            </button>
          </div>
        ):(
            <>
              <button className=" w-full border-black text-black p-2 rounded border flex justify-center items-center" onClick={() => { Setopen(true) }}>Se Connecter</button>
              
            </>
        ) }
      </section>
          <SignIn />
    </div>
  )
}

export default Login

