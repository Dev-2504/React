// Otp.jsx
import React, { useRef } from "react";

const Otp = ({ otp, setOtp }) => {
  const length = otp.length;
  const inputs = Array(length)
    .fill(0)
    .map(() => useRef(null));

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < length - 1) {
      inputs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs[index - 1].current.focus();
    }
  };

  return (
    <div className="flex justify-center gap-5 mt-5">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={inputs[index]}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          placeholder="-"
          className="h-12 w-12 text-2xl text-center bg-[#3c364c] text-white rounded-md outline-none focus:ring-2 focus:ring-purple-400"
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

export default Otp;
