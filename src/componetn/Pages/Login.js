import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
const LogIn = () => {
  const [inputType, setInputType] = useState("");
  const handleInputType = () => {
    setInputType(!inputType);
  };
  const [logIn, setLogin] = useState();
  const handleLoginContent = () => {
    setLogin(!logIn);
  };
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className=" w-[500px] bg-white px-14 py-5  rounded-xl drop-shadow-lg">
        <h2 className="text-center font-bold text-xl mt-2">
          {logIn ? "Sign Up" : "Log In"}
        </h2>
        <form>
          {logIn ? (
            <>
              <div className="mt-5">
                <label className="text-xs font-semibold">Name</label>
                <input
                  name="Name"
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full  rounded-[4px] drop-shadow-sm px-3 h-12 border border-slate-300  font-semibold outline-none bg-[#F7F8FA]"
                />
              </div>
              <div className="mt-5">
                <label className="text-xs font-semibold">Phone</label>
                <input
                  name="Phone"
                  type="number"
                  placeholder="Enter Your Phone Number"
                  className="w-full  rounded-[4px] drop-shadow-sm px-3 h-12 border border-slate-300  font-semibold outline-none bg-[#F7F8FA]"
                />
              </div>
            </>
          ) : null}
          <div className="mt-5">
            <label className="text-xs font-semibold">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Enter Your Email"
              className="w-full  rounded-[4px] drop-shadow-sm px-3 h-12 border border-slate-300  font-semibold outline-none bg-[#F7F8FA]"
            />
          </div>
          <div className="mt-5">
            <label className="text-xs font-semibold">Password</label>
            <input
              name="name"
              type={inputType ? "text" : "password"}
              placeholder="Enter Your Password"
              className="w-full  rounded-[4px] drop-shadow-sm px-3 h-12 border border-slate-300  font-semibold outline-none bg-[#F7F8FA]"
            />
            <input type="checkbox" onClick={handleInputType} />
          </div>
          <button
            className="w-full bg-black text-white py-3 rounded-[4px] mt-3"
            onClick={() => navigate("/")}
          >
            {logIn ? "Sign Up" : "Log In"}
          </button>
        </form>
        <div className="flex items-center justify-between mb-7">
          <button className=" flex items-center justify-center w-[48%] bg-black text-white py-2 rounded-[4px] mt-5">
            Contnue with <FcGoogle className="ml-1" />
            oogle
          </button>
          <button
            className=" flex items-center justify-center w-[48%] bg-black text-white py-2 rounded-[4px] mt-5"
            onClick={handleLoginContent}
          >
            {logIn ? "Log In" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
