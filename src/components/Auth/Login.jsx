import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center p-25">
        <div className="border-2 border-emerald-600 p-4">
          <h1>Login</h1>

          <form className="flex flex-col items-center">
            <input required
              type="email"
              placeholder="enter your email"
              className="border-2 border-emerald-600 rounded-full p-3 m-3 text-xl outline-none bg-transparent placeholder:text-gray-100"
            />

            <input  required
              type="text"
              placeholder="enter your password"
              className="border-2 border-emerald-600 rounded-full p-3 m-3 text-xl  outline-none bg-transparent placeholder:text-gray-300"
            />

            <button className=" bg-emerald-600 rounded-full p-3 m-3 text-xl text-gray-300 outline-none  placeholder:text-white">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
