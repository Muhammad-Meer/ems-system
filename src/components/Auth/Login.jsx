import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 border-red-600 p-4">
          <h1>Login</h1>

          <form className="flex flex-col items-center">
            <input
              type="email"
              placeholder="enter your email"
              className="border-2 border-emerald-600 rounded-full p-3 m-3 text-xl text-black outline-none bg-transparent placeholder:text-white"
            />

            <input 
              type="text"
              placeholder="enter your password"
              className="border-2 border-emerald-600 rounded-full p-3 m-3 text-xl text-black outline-none bg-transparent placeholder:text-white"
            />

            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
