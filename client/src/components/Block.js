import React, { useState } from 'react';
import { SHA256 } from 'crypto-js';
import './Block.css'
import { Input } from '@chakra-ui/react';

const Block = () => {
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
        <h1 style={{ color: "white" }}>Block</h1>
        <button class="btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Click here, for more Info!
        </button>
        <div class="collapse my-3" id="collapseExample">
          <div class="card card-body" style={{color:"black", background:"#0dcaf0", textAlign:"center"}}>
            "In a blockchain, a block is a fundamental unit of data that contains a collection of transactions. 
            It is a data structure that holds a set of records, including the transactions, along with other 
            information such as a noune, a reference to the previous block, and a unique identifier called a hash."
          </div>
        </div>

        <div className='container my-3'>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} >
          <div className={`well ${isHashValid() ? '' : 'well-error'}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: "100vh", alignItems: "center" }}>
            <form class="form-horizontal">
              <div className='form-group'>
                <label className='col-sm-2 control-label'>Block Number:</label>
                <div className='col-sm-10'>
                  <div class="input-group mb-3">
                    {/* <span class="input-group-text" id="basic-addon1">#</span> */}
                    {/* <input className='form-control' type="number" value={blockNumber} onChange={handleBlockNumberChange} placeholder="Block Number" /> */}
                    <Input
                      type="number"
                      name="blocknumber"
                      id="blocknumber"
                      placeholder="Enter Block number..."
                      variant={"flushed"}
                      _placeholder={{ opacity: 1, color: "#d3d3d3" }}
                      value={blockNumber}
                      onChange={handleBlockNumberChange}
                    />
                  </div>
                </div>

                <label className='col-sm-2 control-label'>Nounce:</label>
                <div className='col-sm-10'>
                  {/* <input className='form-control' type="text" value={nonce} onChange={handleNonceChange} placeholder="Nonce" /> */}
                  <Input
                      type="text"
                      name="nonce"
                      id="nonce"
                      placeholder="Enter nonce..."
                      variant={"flushed"}
                      _placeholder={{ opacity: 1, color: "#d3d3d3" }}
                      value={nonce}
                      onChange={handleNonceChange}
                    />
                </div>

                <label className='col-sm-2 control-label'>Transaction:</label>
                <div className='col-sm-10'>
                  {/* <input className='form-control' type="text" value={transaction} onChange={handleTransactionChange} placeholder="Transaction" /> */}
                  <Input
                      type="text"
                      name="transaction"
                      id="transaction"
                      placeholder="Enter Transaction details..."
                      variant={"flushed"}
                      _placeholder={{ opacity: 1, color: "#d3d3d3" }}
                      value={transaction}
                      onChange={handleTransactionChange}
                    />s
                </div>
              </div>
              <div className='form-group'>
                <label className='col-sm-2 control-label'>Hash:</label>
                <div className='col-sm-10'>
                  {/* <input className='form-control' type="text" value={hash} placeholder="Hash" disabled /> */}
                  <Input
                      type="text"
                      name="hash"
                      id="hash"
                      // placeholder="Enter your name..."
                      variant={"flushed"}
                      _placeholder={{ opacity: 1, color: "#d3d3d3" }}
                      value={hash}
                      disabled
                    />
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
    </>
  );
}
export default Block;
