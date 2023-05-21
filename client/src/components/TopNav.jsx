import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ethers } from "ethers";
import { Link } from 'react-router-dom';
import Hash from './Hash';
import Block from './Block';
import Blockchain from './Blockchain';
import TumbleBit from './TumbleBit';
import ModifiedTumbleBit from './ModifiedTumbleBit';
import AboutUs from './About';
import Buy from './Buy';
import { useState, useEffect } from 'react';
import abi from "./Chai.json"

function TopNav() {
    const [state, setState] = useState({
        provider: null,
        signer: null,
        contract: null,
      });
    
      const [account, setAccount] = useState("No Account connected");
    
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
    
              window.ethereum.on("chainChanged", () => {
                window.location.reload();
              })
    
              window.ethereum.on("accountsChanged", () => {
                window.location.reload();
              })
    
              const provider = new ethers.providers.Web3Provider(ethereum);
              const signer = provider.getSigner();
              const contract = new ethers.Contract(
                contractAddress,
                contractABI,
                signer
              );
              setState({ provider, signer, contract });
              setAccount(accounts);
            } else {
              alert("Please install Metamask.")
            }
          } catch (err) {
            console.log(err);
          }
        };
        connectWallet();
      }, []);
    
      console.log(state);
    const [showHash, setshowHash] = useState(true);
    const [showBlock, setShowBlock] = useState(false);
    const [showBlockChain, setShowBlockChain] = useState(false);
    const [showBuy, setShowBuy] = useState(false);
    const [showTumbleBit, setShowTumbleBit] = useState(false);
    const [showModifiedT, setShowModifiedT] = useState(false);
    const [showAbout, setShowAbout] = useState(false);


    const handleHash = () => {
        setShowBlock(false)
        setshowHash(true)
        setShowBlockChain(false)
        setShowBuy(false)
        setShowTumbleBit(false)
        setShowModifiedT(false)
        setShowAbout(false)
    };
    const handleBlock = () => {
        setshowHash(false)
        setShowBlock(true)
        setShowBlockChain(false)
        setShowBuy(false)
        setShowTumbleBit(false)
        setShowModifiedT(false)
        setShowAbout(false)
    };
    const handleBlockChain = () => {
        setshowHash(false)
        setShowBlock(false)
        setShowBlockChain(true)
        setShowBuy(false)
        setShowTumbleBit(false)
        setShowModifiedT(false)
        setShowAbout(false)
    };
    const handleBuy = () => {
        setshowHash(false)
        setShowBlock(false)
        setShowBlockChain(false)
        setShowBuy(true)
        setShowTumbleBit(false)
        setShowModifiedT(false)
        setShowAbout(false)
    };
    const handleTumble = () => {
      setshowHash(false)
      setShowBlock(false)
      setShowBlockChain(false)
      setShowBuy(false)
      setShowTumbleBit(true)
      setShowModifiedT(false)
      setShowAbout(false)
  };
  const handleModifiedTumble = () => {
    setshowHash(false)
    setShowBlock(false)
    setShowBlockChain(false)
    setShowBuy(false)
    setShowTumbleBit(false)
    setShowModifiedT(true)
    setShowAbout(false)
};
const handleAbout = () => {
  setshowHash(false)
  setShowBlock(false)
  setShowBlockChain(false)
  setShowBuy(false)
  setShowTumbleBit(false)
  setShowModifiedT(false)
  setShowAbout(true)
};

    return (

        <>  
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Blockchain</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                {/* <a class="nav-link" aria-current="page" onClick={handleHash} style={{cursor:"pointer"}}>Hash</a> */}
                                <button className='nav-link' onClick={handleHash}>Hash</button>

                                {/* <Router><Link to="/hash" class="nav-link">Hash</Link></Router> */}
                            </li>
                            <li class="nav-item">
                                <button className='nav-link' onClick={handleBlock}>Block</button>
                            </li>
                            <li class="nav-item">
                                <button className='nav-link' onClick={handleBlockChain}>Blockchain</button>
                            </li>
                            <li class="nav-item">
                                <button className='nav-link' onClick={handleBuy}>Store Documents</button>
                            </li>
                            <li class="nav-item">
                                <button className='nav-link' onClick={handleTumble}>TumbleBit</button>
                            </li>
                            <li class="nav-item">
                                <button className='nav-link' onClick={handleModifiedTumble}>Modified TumbleBit</button>
                            </li>
                            <li class="nav-item">
                                <button className='nav-link' onClick={handleAbout}>About Me</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {showHash && <Hash />}
            {showBlock && <Block />}
            {showBlockChain && <Blockchain />}
            {showBuy && <Buy state={state} account={account} />}
            {showTumbleBit && <TumbleBit state={state} account={account} />}
            {showModifiedT && <ModifiedTumbleBit state={state} account={account} />}
            {showAbout && <AboutUs/>}

        </>
    );
}
export default TopNav;
