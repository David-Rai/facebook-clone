import React from "react";

const Facebook = () => {
  return (
    <main className="bg-[#F2F4F7] h-[93vh] w-full flex justify-center items-center flex-col">
      <h1 className="text-fbBlue font-bold text-3xl mb-4 sm:text-4xl xl:text-5xl">facebook</h1>

      <div
        className="center h-[70%] w-[80%] bg-white 
      shadow-xl border-[1px] border-slate-200
      flex flex-col items-center justify-evenly rounded-sm
      sm:w-[50%]
      md:w-[45%]
      lg:w-[40%]
       xl:w-[30%]
      "
      >
        <h1 className="text-xl font-normal">Log Into Facebook</h1>

        <input
          type="email"
          placeholder="Email or phone number "
          className="input"
        />

        <input type="password" placeholder="Password" className="input" />

        <button className="w-[90%] h-12 bg-fbBlue rounded-md text-white font-bold text-xl">
          Log In
        </button>
        <p className="text-fbBlue text-xm">Forget account?</p>

        <div className="hl w-[90%] flex items-center justify-evenly">
          <div className=" border-black h-[1px] w-[45%] bg-slate-300"></div>
          <p className="text-[14px] text-slate-300">or</p>
          <div className=" border-black h-[1px] w-[45%] bg-slate-300"></div>
        </div>

        <button className="rounded-md font-bold text-white w-[50%] h-12 bg-fbGreen">
          Create new account
        </button>
      </div>
    </main>
  );
};

export default Facebook;
