import React, { useRef, useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
   const inpurRef= useRef(null)

  const toggleSignin = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div>
      <Header />
      <img
        className="absolute top-0"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_large.jpg"
      />
      <div className="bg-black opacity-90 absolute text-white p-5 w-3/12 mx-auto left-0 right-0 mt-32 rounded-sm">
        <h1 className="font-bold text-2xl mb-2">
          {isLogin ? "Sign in" : "Sign up"}
        </h1>
        <form onSubmit={(e) => e.preventDefault}>
          {!isLogin && (
            <input
              className="bg-gray-400 text-gray-800 p-2 my-2 rounded-sm w-full"
              type="text"
              ref={inpurRef}
              name="full name"
              placeholder="Enter your Full Name"
            />
          )}
          <input
            className="bg-gray-400 text-gray-800 p-2 my-2 rounded-sm w-full"
            type="email"
            ref={inpurRef}
            name="email"
            placeholder="Enter your Email Id"
          />
          <input
            className="bg-gray-400 text-gray-800 p-2 my-2 rounded-sm w-full"
            type="password"
            ref={inpurRef}
            name="password"
            placeholder="Enter password"
          />
          <button className="w-full bg-red-700 p-2 my-2  rounded-sm ">
            {isLogin ? "Sign in" : "Sign up"}
          </button>
          <p>
            {isLogin ?(
              <>
                New to Netflix{" "}
                <span className="cursor-pointer text-blue-500" onClick={handleSubmit}>
                  Sign up
                </span>{" "}
                now.
              </>
            ) :(
              <>Already user keep  <span className="cursor-pointer text-blue-500" onClick={toggleSignin}>
                  Sign in
                </span>{" "}
                </>
            ) }
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
