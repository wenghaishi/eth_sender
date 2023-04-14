import { useState } from "react";
import "./App.css";

function App() {
  const [ethAddr, setEthAddr] = useState();

  const handleEthAddrChange = (e) => {
    setEthAddr(e.target.value);
  };

  const submitHandler = () => {};
  return (
    <div className="bg-[#E2FCA4] min-h-screen w-full flex flex-col items-center justify-evenly">
      <div className="flex flex-col items-center">
        <img
          src="switcheo.jpeg"
          alt=""
          className="mb-8 fadeInAnimated"
          id="first"
        />
        <h1
          className="text-6xl text-dark-g italic box fadeInAnimated"
          id="second"
        >
          Eth Sender
        </h1>
      </div>
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
          Connect Metamask
        </button>
      </form>
      <div></div>
    </div>
  );
}

export default App;
