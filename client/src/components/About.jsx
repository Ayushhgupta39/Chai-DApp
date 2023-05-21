import React from 'react';
import "./About.css"
import { background } from '@chakra-ui/react';
const AboutUs = () => {
    return (
        <>
            <div style={{
                height: "92vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: "url(/Bchain2.jpg)",
                backgroundSize: "cover",
            }}>
                <div className='containerr'>
                    <div className='content-section'>
                        <div className='title'>
                            <h1 style={{color:"white"}} >About Me</h1>
                        </div>
                        <div className='content' style={{color:"white"}}>
                            <h3>Rashi Aswani</h3>
                            <p style={{textAlign:"justify"}}>
                                Pursuing M.Tech in Computer Science and Engineering under the supervision of Dr. Dinesh Gopalani.
                                Dissertation thesis on <b>Anonymity in Blockchain</b>. 
                            </p>
                            <div className='button'>
                                <a data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" style={{cursor:"pointer"}}>
                                Read More!
                                </a>
                            </div>
                            <div class="collapse my-3" id="collapseExample">
                                <div class="card card-body" style={{color:"white", background:"#3d3d3d"}}>
                                <p>Welcome to my website! I am passionate about blockchain technology and its potential to revolutionize various industries. 
                                    This website aims to provide insights into the working of the TumbleBit protocol and the fundamentals of blockchain.</p>
                                <p>The TumbleBit protocol is a privacy-enhancing solution that ensures secure and anonymous Bitcoin transactions. 
                                    By leveraging cryptographic techniques like RSA encryption and the RSA puzzle.</p>
      {/* <p>Blockchain, on the other hand, is a decentralized and transparent digital ledger that stores a growing list of records called blocks. Each block contains a set of transactions that are securely linked together using cryptographic hashes. The immutability and consensus mechanisms of blockchain make it a reliable and tamper-resistant technology.</p>
      <p>Through this website, I aim to demystify the complexities of the TumbleBit protocol and blockchain technology, providing you with valuable insights and resources to better understand their functionalities and potential applications.</p>
      <p>Feel free to explore the various sections of the website and dive deeper into the fascinating world of TumbleBit and blockchain!</p> */}

                                </div>
                            </div>
                        </div>
                        <div className='social'>
                            <a className='' href=''><i className='fab fa-facebook-f'></i></a>
                            <a className='' href=''><i className='fab fa-twitter'></i></a>
                            <a className='' href=''><i className='fab fa-instagram'></i></a>
                        </div>
                    </div>
                    {/* <div className='image-section'>
                        <img src="/Mine.jpg"></img>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default AboutUs;
