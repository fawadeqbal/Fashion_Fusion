import React, { useRef } from "react";

const Login = () => {
  // Style
  const inputStyle =
    "border-[2px] border-silver rounded-lg outline-[#8a4af3] p-2 focus:border-[#8a4af3] ease-linear duration-200 ";

  // Refs
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const handleSubmit = () => {
    const email = emailRef.current.value;
    const pass = passRef.current.value;

   

    // Clear input fields
    emailRef.current.value = "";
    passRef.current.value = "";
  };

  return (
    <div className="flex justify-center w-[100%] h-[100vh] bg-[#b892f7]">
      <div className="flex flex-col absolute top-[30%] bg-white shadow-lg border-silver border-[2px] rounded-lg p-5 w-[40%] mobile:w-[90%]">
        <text className="text-2xl ">Log in</text>

        {/* Email */}
        <div className="flex mt-7">
          <input
            ref={emailRef}
            className={inputStyle + ` mt-2 w-[100%]`}
            name="email"
            type="email"
            placeholder="Email"
            required
          />
        </div>

        {/* Password */}
        <div className="flex mt-7">
          <input
            ref={passRef}
            className={inputStyle + ` w-[100%]`}
            name="pass"
            type="password"
            placeholder="Password"
            required
          />
        </div>

        {/* Submit button */}
        <input
          type="button"
          className="mt-5 flex justify-center bg-[#8a4af3] text-white font-medium rounded-md p-2 hover:bg-white hover:text-[#8a4af3] hover:scale-[1.0.5] hover:border-[2px] hover:shadow-md hover:border-[#8a4af3] ease-linear duration-200 cursor-pointer"
          value="Log in"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Login;