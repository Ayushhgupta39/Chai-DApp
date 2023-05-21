import * as React from 'react';
import { useState } from 'react';
import { SHA256 } from 'crypto-js';
import { Input } from '@chakra-ui/react';
function Hash() {

    const [inputValue, setInputValue] = useState('');
    const [hashValue, setHashValue] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        const hash = SHA256(value).toString();
        setHashValue(hash);
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
                <h1 style={{ color: "white" }}>256 Hash</h1>
                <button class="btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Click here, for more Info!
                </button>
                <div class="collapse my-3" id="collapseExample">
                    <div class="card card-body" style={{color:"black", background:"#0dcaf0", textAlign:"center"}}>
                        "SHA-256 (Secure Hash Algorithm 256-bit) is a cryptographic hash function that belongs to the SHA-2 
                        (Secure Hash Algorithm 2) family. 
                        It is widely used in various cryptographic applications and is considered to be secure for most purposes.
                        This is a one-way function, so the result cannot be decrypted back to the original value."
                        {/* <img src='hash (1).png' height={500} width={1000} /> */}
                    </div>
                </div>

                <div className='container my-3'>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} >
                    <div className='well' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: "70vh", alignItems: "center" }}>
                        <form class="form-horizontal">
                            <div className='form-group'>
                                <label className='col-sm-2 control-label'>Data:</label>
                                <div className='col-sm-10'>
                                    {/* <textarea className='form-control' rows="4" type="text" value={inputValue} onChange={handleInputChange}></textarea> */}
                                    <Input
                                    type="text"
                                    placeholder="Enter anything..."
                                    variant={"flushed"}
                                    _placeholder={{ opacity: 1, color: "#d3d3d3" }}
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className='form-group'>
                                <label className='col-sm-2 control-label'>Hash:</label>
                                <div className='col-sm-10'>
                                    {/* <input className='form-control' type="text" value={hashValue} disabled /> */}
                                    <Input
                                    type="text"
                                    // placeholder="Enter your name..."
                                    variant={"flushed"}
                                    _placeholder={{ opacity: 1, color: "#d3d3d3" }}
                                    value={hashValue}
                                    // onChange={handleNonceChange}
                                    disabled
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            </>
            );
}
            export default Hash;
