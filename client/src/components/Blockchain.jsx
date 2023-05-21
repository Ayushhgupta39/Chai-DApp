import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { SHA256 } from 'crypto-js';
export default function TumbleBit({ state, account }) {
  const [blockNumber, setBlockNumber] = useState('');
  const [nonce, setNonce] = useState('');
  const [transaction, setTransaction] = useState('');
  const [hash, setHash] = useState('');

  const calculateHash = () => {
    const inputString = `${blockNumber}${nonce}${transaction}`;
    const calculatedHash = SHA256(inputString).toString();
    setHash(calculatedHash);
  };
  const isHashValid = () => {
    const inputString = `${blockNumber}${nonce}${transaction}`;
    const calculatedHash = SHA256(inputString).toString();
    console.log(calculatedHash === hash)
    return calculatedHash === hash;
  };

  const handleBlockNumberChange = (e) => {
    setBlockNumber(e.target.value);
    // calculateHash();
  };

  const handleNonceChange = (e) => {
    setNonce(e.target.value);
    // calculateHash();
  };

  const handleTransactionChange = (e) => {
    setTransaction(e.target.value);
    // calculateHash();
  };
  const handleMineButtonClick = () => {
    calculateHash();
  };
  

  return (
    <>
      <div
        style={{
          height: "92vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url(/Bchain2.jpg)",
          backgroundSize: "cover",
        }}
        className="buy_chai"
      >
        {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
        <h1 style={{ color: "white" }}>Blockchain</h1>
        <button class="btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Click here, for more Info!
        </button>
        <div class="collapse my-3" id="collapseExample">
          <div class="card card-body" style={{color:"black", background:"#0dcaf0", textAlign:"center"}}>
           "Blockchain is a decentralized and distributed digital ledger technology that records transactions across multiple computers 
           or nodes in a transparent, secure, and immutable manner. It consists of a chain of blocks, where each block contains a list of
            transactions and a reference to the previous block. This chain of blocks forms a chronological and permanent record of all 
            transactions ever executed on the blockchain network."
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className='container my-3'>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center" ,backgroundColor: 'rgba(0, 0, 0, 0.5)', width: "50vh", alignItems: "center" }} >
            <div style={{ margin: "0 10px" }}>
            <div className="well" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: "50vh", alignItems: "center" }}>
            <form class="form-horizontal">
              <div className='form-group'>
                <label className='col-sm-2 control-label' style={{width:"100%"}}>Block Number:</label>
                <div className='col-sm-10'>
                  <div class="input-group mb-3">
                    {/* <span class="input-group-text" id="basic-addon1">#</span> */}
                    <input className='form-control' type="number" value={blockNumber} onChange={handleBlockNumberChange} placeholder="Block Number" />
                  </div>
                </div>

                <label className='col-sm-2 control-label' style={{width:"100%"}}>Nounce:</label>
                <div className='col-sm-10'>
                  <input className='form-control' type="text" value={nonce} onChange={handleNonceChange} placeholder="Nonce" />
                </div>

                <label className='col-sm-2 control-label' style={{width:"100%"}}>Transaction:</label>
                <div className='col-sm-10'>
                  <input className='form-control' type="text" value={transaction} onChange={handleTransactionChange} placeholder="Transaction" />
                </div>
              </div>
              <div className='form-group'>
                <label className='col-sm-2 control-label' style={{width:"100%"}}>Previous Hash:</label>
                <div className='col-sm-10'>
                  <input className='form-control' type="text" value={hash} placeholder="Hash" />
                </div>
              </div>
              <div className='form-group'>
                <label className='col-sm-2 control-label' style={{width:"100%"}}>Hash:</label>
                <div className='col-sm-10'>
                  <input className='form-control' type="text" value={hash} placeholder="Hash" disabled />
                </div>
              </div>
              <div class="d-grid gap-2 d-md-block">
                <button type="button" class="btn btn-outline-success my-3" onClick={handleMineButtonClick}>Mine</button>
              </div>
            </form>
          </div>
            </div>
          </div>
        </div>
        <div className='container my-3'>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center" ,backgroundColor: 'rgba(0, 0, 0, 0.5)', width: "50vh", alignItems: "center" }} >
            <div style={{ margin: "0 10px" }}>
            <div className="well" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: "50vh", alignItems: "center" }}>
            <form class="form-horizontal">
              <div className='form-group'>
                <label className='col-sm-2 control-label' style={{width:"100%"}}>Block Number:</label>
                <div className='col-sm-10'>
                  <div class="input-group mb-3">
                    {/* <span class="input-group-text" id="basic-addon1">#</span> */}
                    <input className='form-control' type="number" value={blockNumber} onChange={handleBlockNumberChange} placeholder="Block Number" />
                  </div>
                </div>

                <label className='col-sm-2 control-label' style={{width:"100%"}}>Nounce:</label>
                <div className='col-sm-10'>
                  <input className='form-control' type="text" value={nonce} onChange={handleNonceChange} placeholder="Nonce" />
                </div>

                <label className='col-sm-2 control-label' style={{width:"100%"}}>Transaction:</label>
                <div className='col-sm-10'>
                  <input className='form-control' type="text" value={transaction} onChange={handleTransactionChange} placeholder="Transaction" />
                </div>
              </div>
              <div className='form-group'>
                <label className='col-sm-2 control-label' style={{width:"100%"}}>Previous Hash:</label>
                <div className='col-sm-10'>
                  <input className='form-control' type="text" value={hash} placeholder="Hash" />
                </div>
              </div>
              <div className='form-group'>
                <label className='col-sm-2 control-label' style={{width:"100%"}}>Hash:</label>
                <div className='col-sm-10'>
                  <input className='form-control' type="text" value={hash} placeholder="Hash" disabled />
                </div>
              </div>
              <div class="d-grid gap-2 d-md-block">
                <button type="button" class="btn btn-outline-success my-3" onClick={handleMineButtonClick}>Mine</button>
              </div>
            </form>
          </div>
            </div>
          </div>
        </div>
        <div className='container my-3'>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center" ,backgroundColor: 'rgba(0, 0, 0, 0.5)', width: "50vh", alignItems: "center" }} >
            <div style={{ margin: "0 10px" }}>
            <div className="well" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: "50vh", alignItems: "center" }}>
            <form class="form-horizontal">
              <div className='form-group'>
                <label className='col-sm-2 control-label' style={{width:"100%"}}>Block Number:</label>
                <div className='col-sm-10'>
                  <div class="input-group mb-3">
                    {/* <span class="input-group-text" id="basic-addon1">#</span> */}
                    <input className='form-control' type="number" value={blockNumber} onChange={handleBlockNumberChange} placeholder="Block Number" />
                  </div>
                </div>

                <label className='col-sm-2 control-label' style={{width:"100%"}}>Nounce:</label>
                <div className='col-sm-10'>
                  <input className='form-control' type="text" value={nonce} onChange={handleNonceChange} placeholder="Nonce" />
                </div>

                <label className='col-sm-2 control-label' style={{width:"100%"}}>Transaction:</label>
                <div className='col-sm-10'>
                  <input className='form-control' type="text" value={transaction} onChange={handleTransactionChange} placeholder="Transaction" />
                </div>
              </div>
              <div className='form-group'>
                <label className='col-sm-2 control-label' style={{width:"100%"}}>Previous Hash:</label>
                <div className='col-sm-10'>
                  <input className='form-control' type="text" value={hash} placeholder="Hash" />
                </div>
              </div>
              <div className='form-group'>
                <label className='col-sm-2 control-label' style={{width:"100%"}}>Hash:</label>
                <div className='col-sm-10'>
                  <input className='form-control' type="text" value={hash} placeholder="Hash" disabled />
                </div>
              </div>
              <div class="d-grid gap-2 d-md-block">
                <button type="button" class="btn btn-outline-success my-3" onClick={handleMineButtonClick}>Mine</button>
              </div>
            </form>
          </div>
            </div>
          </div>
        </div>
        
        </div>
      </div >

    </>
  );
}
