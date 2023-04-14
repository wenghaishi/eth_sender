import { useState, useEffect } from "react";
import { ethers } from 'ethers';
import "./App.css";
import Form from "./components/Form";

function App() {
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = () => {
    window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
      setIsConnected(true);
      console.log(res);
    });
  };

  const checkConnection = async () => {
    try {
      // Check if MetaMask is connected
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      setIsConnected(true);
    } catch (error) {
      console.log(error);
      setIsConnected(false);
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);


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
      {isConnected ? (
        <Form />
      ) : (
        <button
          className="bg-dark-g text-xl btn text-white py-4 px-14 rounded-lg fadeInAnimated"
          id="fifth"
          onClick={connectWallet}
        >
          connect wallet
        </button>
      )}
      <div></div>
    </div>
  );
}

export default App;
