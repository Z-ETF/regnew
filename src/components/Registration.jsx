import React, { useState } from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import backgroundImage from "../assets/bg.jpg";

export const Registration = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4">
        
        {/* Login/Signup card */}
        <div className="bg-white bg-opacity-90 rounded-xl p-8 w-full max-w-xl shadow-lg">
          {isLogin ? <Login /> : <Signup />}

          <div className="pb-4 text-sm flex items-center justify-between">
            <p>{isLogin ? "Don't have an account?" : "Already have an account?"}</p>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-semibold underline"
            >
              {isLogin ? "Sign up" : "Login"}
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <hr className="w-full" />
            <p className="shrink-0">Login with Others</p>
            <hr className="w-full" />
          </div>

          <div className="my-4 flex items-center justify-center border border-black rounded-lg space-x-2 p-2 cursor-pointer">
            <FaGoogle />
            <p>Sign in with Google</p>
          </div>

          <div className="flex items-center justify-center border border-black rounded-lg space-x-2 p-2 cursor-pointer">
            <FaFacebookF />
            <p>Sign in with Facebook</p>
          </div>
        </div>

        {/* ENPOWER Button - outside of login card */}
                <a
          href="https://enpower-bih.eu/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit ENPOWER project website"
          className="
            fixed bottom-6 left-1/2 -translate-x-1/2
            bg-black text-white text-sm font-normal
            px-6 py-2 rounded-full
            shadow-[0_4px_14px_0_rgba(0,0,0,0.25)]
            transition-all duration-200 ease-in-out
            hover:scale-105 hover:bg-zinc-900
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white
            tracking-wide z-50
          "
        >
          ⚡ Powered by ENPOWER
        </a>




      </div>
    </div>
  );
};
