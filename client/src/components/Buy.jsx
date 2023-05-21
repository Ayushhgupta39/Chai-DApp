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

export default function Buy({ state, account }) {
  const [memos, setMemos] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
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

  const buyChai = async (e) => {
    e.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    // console.log(name, message, contract);
    const value = { value: ethers.utils.parseEther("0.001") };

    const transaction = await contract.buyChai(name, message, value);
    await transaction.wait();
    console.log("Transaction is completed");
    window.location.reload();

  };

  return (
    <><div
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
      <h1 style={{ color: "white" }}>Store your Documents securely</h1>
      <button class="btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Click here, for more Info!
      </button>
      <div class="collapse my-3" id="collapseExample">
        <div class="card card-body">
          "This will allow to store your personal documents securely as well as in the decentralized manner, all you have to
          is to pay a small amount of ethers i.e. 0.001 ethers to the owner."
        </div>
      </div>

      <div className='container my-3' >
        {/* className={`well ${isHashValid() === hash ? '' : 'well-error'}`} */}
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} >
        <div className="well" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: "70vh", alignItems: "center" }}>
          <Box>
            <Heading mt={"10"} textColor={"#FFFFFF"}>Account:</Heading>
            <small style={{ color: "#FFFFFF" }}>{account}</small>
          </Box>
          <Box textColor={"#FFFFFF"}>
            <form onSubmit={buyChai}>
              <FormControl my={"1"} width={"80"}>
                <FormLabel fontWeight={"600"}>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name..."
                  variant={"flushed"}
                  _placeholder={{ opacity: 1, color: "#FFFFFF" }}
                />
              </FormControl>
              <FormControl my={"1"}>
                <FormLabel fontWeight={"600"}>Document</FormLabel>
                <Input
                  type="file"
                  name="message"
                  id="message"
                  placeholder="Add File..."
                  variant={"flushed"}
                  _placeholder={{ opacity: 1, color: "#FFFFFF" }}
                />
              </FormControl>
              <Box my={"1"}>
                <ButtonGroup display={"flex"} justifyContent={"center"} marginTop="5vh">
                  {/* <Button
                onClick={onOpen}
                borderRadius={"full"}
                colorScheme="whatsapp"
                isDisabled={!state.contract}
              >
                Transactions
              </Button>
              <Modal
                motionPreset="scale"
                size={"6xl"}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay backdropFilter="blur(10px)" />
                <ModalContent>
                  <ModalHeader>Transaction History</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <div className="memos">
                      <Box>
                        <TableContainer>
                          <Table variant={"striped"}>
                            <Thead textColor={"red.100"}>
                              <Tr>
                                <Th>Name</Th>
                                <Th>Message</Th>
                                <Th>Timestamp</Th>
                                <Th>From</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              {memos.map((memos) => {
                                return (
                                  <Tr key={memos.timeStamp}>
                                    <Td>{memos.name}</Td>
                                    <Td>{memos.message}</Td>
                                    <Td>
                                      {new Date(
                                        memos.timeStamp * 1000
                                      ).toLocaleString()}
                                    </Td>
                                    <Td>{memos.from}</Td>
                                  </Tr>
                                );
                              })}
                            </Tbody>
                          </Table>
                        </TableContainer>
                      </Box>
                    </div>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal> */}
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
    </>
  );
}
