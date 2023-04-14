import React from "react";
import { useState, useEffect } from "react";

const Form = () => {
  const [ethAddr, setEthAddr] = useState();

  const handleEthAddrChange = (e) => {
    setEthAddr(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const ethAddrRegex = /^0x[a-fA-F0-9]{40}$/;
    if (!ethAddrRegex.test(ethAddr))  {
      alert("Please enter a valid email address.");
      return;
    }
  };

  return (
    <form
      className="flex flex-col items-center w-6/12 gap-6"
      onSubmit={submitHandler}
    >
      <input
        placeholder=" ETH Address"
        type="text"
        name="firstName"
        required
        className="w-full h-10 rounded-md px-2 fadeInAnimated"
        id="third"
        onChange={handleEthAddrChange}
      />
      <input
        placeholder=" Amount to send"
        type="text"
        name="lastName"
        required
        className="w-full h-10 rounded-md mb-4 px-2 fadeInAnimated"
        id="forth"
      />
      <button
        type="submit"
        className="bg-dark-g text-xl btn text-white py-4 px-14 rounded-lg fadeInAnimated"
        id="fifth"
      >
        Get OTP
      </button>
    </form>
  );
};

export default Form;
