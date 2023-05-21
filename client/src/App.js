// import abi from "./contract/Chai.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Buy from "./components/Buy";
import "./index.css";
import TopNav from "./components/TopNav";
import ReactDOM from "react-dom/client";
import Hash from "./components/Hash";
import Block from "./components/Block";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Blockchain from "./components/Blockchain";
function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [account, setAccount] = useState("No Account connected");

  // useEffect(() => {
  //   const connectWallet = async () => {
  //     const contractAddress = "0x8E72BBc23465C700c9a8c837fE5e24fA46dEF5BA";
  //     const contractABI = abi.abi;

  //     try {
  //       const { ethereum } = window;

  //       if (ethereum) {
  //         const accounts = await ethereum.request({
  //           method: "eth_requestAccounts",
  //         });

  //         window.ethereum.on("chainChanged", () => {
  //           window.location.reload();
  //         })

  //         window.ethereum.on("accountsChanged", () => {
  //           window.location.reload();
  //         })

  //         const provider = new ethers.providers.Web3Provider(ethereum);
  //         const signer = provider.getSigner();
  //         const contract = new ethers.Contract(
  //           contractAddress,
  //           contractABI,
  //           signer
  //         );
  //         setState({ provider, signer, contract });
  //         setAccount(accounts);
  //       } else {
  //         alert("Please install Metamask.")
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   connectWallet();
  // }, []);

  console.log(state);
  return (
    <div className="App">
      <TopNav/>
    </div>

    
    // <div className="App">
    //   <TopNav/>
    //   <Hash/>
    //   <Block />
    //   <Blockchain />
    // </div>

    // <div className="App">
    //   <TopNav/>
    //   <Router>
    //     <Switch>
    //       <Route path="/">
    //       <Buy state={state} account={account} />
    //       </Route>
    //       <Route path="/hash">
    //       <Hash />
    //       </Route>
    //     </Switch>
    //   </Router>
    // </div>

  );
}

export default App;
