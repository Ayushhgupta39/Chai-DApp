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
import { ethers } from "ethers";

export default function TumbleBit({ state, account }) {
  const [memos, setMemos] = useState([]);
  const [aliceAmt, setAliceAmt] = useState(100);
  const [bobAmt, setBobAmt] = useState(0);
  const [charlieAmt, setCharlieAmt] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [amtTransferdAtoB, setAmtTransferdAtoB] = useState(false);
  const [amtTransferdBtoC, setAmtTransferdBtoC] = useState(false);
  const [Amount, setAmount] = useState(0);
  const [AmountB, setAmountB] = useState(0);

  const { contract = {} } = state;
  console.log(state);
  console.log("Contract is: ", contract);

  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getMemos();
      setMemos(memos);
    };
    contract && memosMessage();
  }, [contract]);

  const cantTransfer = async (e) => {
    e.preventDefault();
    // alert("Can't transfer amount!")
    setAmtTransferdBtoC(!amtTransferdBtoC)
  }

  const sendAmtAtoB = async (e) => {
    e.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    console.log(message)


    // console.log(name, message, contract);
    const value = { value: ethers.utils.parseEther("0.001") };
    if (parseInt(aliceAmt) - parseInt(message) > 0) {
      const transaction = await contract.buyChai(name, message, value);
      setAmount(message)
      await transaction.wait();
      console.log("Transaction is completed");
      setAliceAmt(aliceAmt - message)
      setBobAmt(parseInt(bobAmt) + parseInt(message))
      console.log(aliceAmt, bobAmt)
      setAmtTransferdAtoB(true)
      //   window.location.reload();
    }
    else {
      alert("Please enter valid amount!")
    }

  };
  const sendAmtBtoC = async (e) => {
    e.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name1").value;
    const message = document.querySelector("#message1").value;
    console.log(message)


    // console.log(name, message, contract);
    const value = { value: ethers.utils.parseEther("0.001") };
    if (parseInt(bobAmt) - parseInt(message) > 0) {
      const transaction = await contract.buyChai(name, message, value);
      setAmountB(message)
      await transaction.wait();
      console.log("Transaction is completed");
      setBobAmt(bobAmt - message)
      setCharlieAmt(parseInt(charlieAmt) + parseInt(message))
      console.log(bobAmt, charlieAmt)
      setAmtTransferdBtoC(true)
      //   window.location.reload();
    }
    else {
      alert("Please enter valid amount!")
    }

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
        <h1 style={{ color: "white" }}>Modified TumbleBit Protocol</h1>
        <button class="btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Click here, for more Info!
        </button>
        <div class="collapse my-3" id="collapseExample">
          <div class="card card-body" style={{color:"black", background:"#0dcaf0", textAlign:"center"}}>
            "TumbleBit is a privacy-enhancing protocol designed to enhance the security and 
            anonymity of Bitcoin transactions. It achieves this by offering a trustless mixing
             and payment hub that allows users to transact with each other without revealing 
             their identities or transaction history."
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className='container my-3'>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center" ,backgroundColor: 'rgba(0, 0, 0, 0.5)', width: "50vh", alignItems: "center" }} >
            <div style={{ margin: "0 10px" }}>
              <Box>
                <Heading mt={"10"} textColor={"#F6F1F1"}>Alice:</Heading>
                <Box>
                  <div>
                    <label htmlFor="aliceAmt" style={{ color: "#F6F1F1", marginRight: "5px" }}>
                      Alice Acount:{" "}
                    </label>
                    <small id="aliceAmt" style={{ color: "#F6F1F1" }}>
                      {account}
                    </small>
                  </div>
                  <div>
                    <label htmlFor="aliceAmt" style={{ color: "#F6F1F1", marginRight: "5px" }}>
                      Alice Amount:{" "}
                    </label>
                    <small id="aliceAmt" style={{ color: "#F6F1F1" }}>
                      {aliceAmt}
                    </small>
                  </div>
                </Box>

              </Box>
              <Box textColor={"#F6F1F1"}>
                <form onSubmit={sendAmtAtoB}>
                  <FormControl my={"1"} width={"80"}>
                    <FormLabel fontWeight={"600"}>Recipient's address</FormLabel>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter address..."
                      variant={"flushed"}
                      _placeholder={{ opacity: 1, color: "#d3d3d3" }}
                    />
                  </FormControl>
                  <FormControl my={"1"}>
                    <FormLabel fontWeight={"600"}>Amount</FormLabel>
                    <Input
                      type="number"
                      name="message"
                      id="message"
                      placeholder="Enter your amount..."
                      variant={"flushed"}
                      _placeholder={{ opacity: 1, color: "#d3d3d3" }}
                    />
                  </FormControl>
                  <Box my={"1"}>
                    <ButtonGroup display={"flex"} justifyContent={"center"} marginTop="5vh">
                      <Button
                        isDisabled={!state.contract}
                        width={"24"}
                        type="submit"
                        borderRadius={"full"}
                        colorScheme="twitter"
                      >
                        Pay
                      </Button>
                    </ButtonGroup>
                  </Box>
                </form>
              </Box>
            </div>
          </div>
        </div>
        <div className='container my-3'>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center" ,backgroundColor: 'rgba(0, 0, 0, 0.5)', width: "50vh", alignItems: "center" }} >
            <div style={{ margin: "0 10px" }}>
              <Box>
                <Box>
                  <Heading mt={"10"} textColor={"#F6F1F1"}>Bob:</Heading>
                  <Box>
                    <div>
                      <label htmlFor="aliceAmt" style={{ color: "#F6F1F1", marginRight: "5px" }}>
                        Bob Acount:{" "}
                      </label>
                      <small id="aliceAmt" style={{ color: "#F6F1F1" }}>
                        0x001ba7545912dDBbC2bdeE2942acDdcc2B8901Db
                      </small>
                    </div>
                    <div>
                      <label htmlFor="aliceAmt" style={{ color: "#F6F1F1", marginRight: "5px" }}>
                        Bob Amount:{" "}
                      </label>
                      <small id="aliceAmt" style={{ color: "#F6F1F1" }}>
                        {bobAmt}
                      </small>
                    </div>
                  </Box>

                </Box>

              </Box>
              <Box textColor={"#F6F1F1"}>
                <form onSubmit={sendAmtBtoC}>
                  <FormControl my={"1"} width={"80"}>
                    <FormLabel fontWeight={"600"}>Recipient's address</FormLabel>
                    <Input
                      type="text"
                      name="name1"
                      id="name1"
                      placeholder="Enter address..."
                      variant={"flushed"}
                      _placeholder={{ opacity: 1, color: "#d3d3d3" }}
                    />
                  </FormControl>
                  <FormControl my={"1"}>
                    <FormLabel fontWeight={"600"}>Amount</FormLabel>
                    <Input
                      type="number"
                      name="message1"
                      id="message1"
                      placeholder="Enter your amount..."
                      variant={"flushed"}
                      _placeholder={{ opacity: 1, color: "#d3d3d3" }}
                    />
                  </FormControl>
                  <Box my={"1"}>
                    <ButtonGroup display={"flex"} justifyContent={"center"} marginTop="5vh">
                      <Button
                        isDisabled={!state.contract}
                        width={"24"}
                        type="submit"
                        borderRadius={"full"}
                        colorScheme="twitter"
                      >
                        Pay
                      </Button>
                    </ButtonGroup>
                  </Box>
                </form>
              </Box>
            </div>
          </div>
        </div>
            <div className='container my-3'>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center" ,backgroundColor: 'rgba(0, 0, 0, 0.5)', width: "50vh", alignItems: "center" }} >

            <div style={{ margin: "0 10px" }}>
              <Box>
                <Box>
                  <Heading mt={"10"} textColor={"#F6F1F1"}>Charlie:</Heading>
                  <Box>
                    <div>
                      <label htmlFor="aliceAmt" style={{ color: "#F6F1F1", marginRight: "5px" }}>
                        Charlie Acount:{" "}
                      </label>
                      <small id="aliceAmt" style={{ color: "#F6F1F1" }}>
                        0x65556b8795F987F73b9c7d0c964d5916a463cA6C
                      </small>
                    </div>
                    <div>
                      <label htmlFor="aliceAmt" style={{ color: "#F6F1F1", marginRight: "5px" }}>
                        Charlie Amount:{" "}
                      </label>
                      <small id="aliceAmt" style={{ color: "#F6F1F1" }}>
                        0
                      </small>
                    </div>
                  </Box>

                </Box>

              </Box>
              <Box textColor={"#F6F1F1"}>
                <form>
                  <FormControl my={"1"} width={"80"}>
                    <FormLabel fontWeight={"600"}>Recipient's address</FormLabel>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter address..."
                      variant={"flushed"}
                      _placeholder={{ opacity: 1, color: "#d3d3d3" }}
                    />
                  </FormControl>
                  <FormControl my={"1"}>
                    <FormLabel fontWeight={"600"}>Amount</FormLabel>
                    <Input
                      type="number"
                      name="message"
                      id="message"
                      placeholder="Enter your amount..."
                      variant={"flushed"}
                      _placeholder={{ opacity: 1, color: "#d3d3d3" }}
                    />
                  </FormControl>
                  <Box my={"1"}>
                    <ButtonGroup display={"flex"} justifyContent={"center"} marginTop="5vh">
                      <Button
                        isDisabled={!state.contract}
                        width={"24"}
                        type="submit"
                        borderRadius={"full"}
                        colorScheme="twitter"
                      >
                        Pay
                      </Button>
                    </ButtonGroup>
                  </Box>
                </form>
              </Box>
            </div>
          </div>
        </div>
        </div>
        {amtTransferdAtoB &&
          <div class="alert alert-success alert-dismissible fade show my-3" role="alert">
            <strong>Success!</strong> Amount of {Amount} units was transfered from Alice to Bob.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>}
        {amtTransferdBtoC &&
          <div class="alert alert-success alert-dismissible fade show my-3" role="alert">
            <strong>Success!</strong> Amount of {AmountB} units was transfered from Bob to Charlie.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>}
    </div>
    </>
  );
}
