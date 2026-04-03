import { useState } from "react";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");



  const submitHandler = (e) => {
    e.preventDefault();
     console.log(email, password); 


    setemail("")
    setpassword("")
  };
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center p-25 bg-gray-900 text-white">
        <div className="border-2 border-emerald-600 p-4">
          <h1 className="text-center text-white font-semibold text-2xl">Login</h1>

          <form onSubmit={submitHandler} className="flex flex-col items-center">
            <input
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              required
              type="email"
              placeholder="enter your email"
              className="border-2 border-emerald-600 rounded-full p-3 m-3 text-xl outline-none bg-transparent"
            />

            <input
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              required
              type="password"
              placeholder="enter your password"
              className="border-2 border-emerald-600 rounded-full p-3 m-3 text-xl  outline-none bg-transparent"
            />

            <button className=" bg-emerald-600 rounded-full p-3 m-3 text-xl outline-none">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
