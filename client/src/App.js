import abi from "./contract/Chai.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Box } from "@chakra-ui/react";
import Buy from "./components/Buy";
import Memos from "./components/Memos";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x8E72BBc23465C700c9a8c837fE5e24fA46dEF5BA";
      const contractABI = abi.abi;

      try {
        const { ethereum } = window;

        if (ethereum) {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
        }

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setState({ provider, signer, contract });
      } catch (err) {
        console.log(err);
      }
    };
    connectWallet();
  }, []);

  console.log(state);
  return (
    <div className="App">
      <Buy state={state} />
      <Memos state={state} />
    </div>
  );
}

export default App;
