import React, { useRef } from "react";

const Register = () => {
  // Refs
  const confirmRef = useRef(null);

  // Styles
  const inputStyle =
    "border-[2px] border-silver rounded-lg outline-[#8a4af3] p-2 focus:border-[#8a4af3] ease-linear duration-200 min-w-0";

  const buttonStyle =
    "mt-5 flex justify-center bg-[#8a4af3] text-white font-medium rounded-md p-2 ease-linear duration-200";

  return (
    <div className="flex justify-center w-[100%] h-[100vh] bg-[#b892f7]">
      <div className="flex flex-col absolute top-[20%] shadow-lg border-silver border-[2px] bg-white rounded-lg p-5 mobile:w-[90%]">
        <text className="text-2xl">REGISTER</text>

        {/* First Name Last Name */}
        <div className="flex mt-7 w-auto">
          <input
            className={inputStyle + " mr-3"}
            name="first"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            className={inputStyle}
            name="last"
            type="text"
            placeholder="Last Name"
          />
        </div>

        {/* Email */}
        <input
          className={inputStyle + " mt-7 mobile:w-[100%]"}
          name="email"
          type="email"
          placeholder="Email"
          required
        />

        {/* Password */}
        <div className="flex mt-7">
          <input
            className={inputStyle + " mr-3"}
            name="pass"
            type="password"
            placeholder="Password"
            required
          />
          <input
            className={inputStyle}
            name="confirm"
            type="password"
            placeholder="Confirm Password"
            required
            ref={confirmRef}
          />
        </div>
        <div className="flex justify-center">
          <span className="flex-1 mr-3"></span>
          <span className="flex-1 text-red-500"></span>
        </div>

        {/* Submit button */}
        <input
          type="button"
          className={buttonStyle}
          value="Sign up"
        />
      </div>
    </div>
  );
};

export default Register;
