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
    location.reload();
  };

  return (
    <Box
      height={"100vh"}
      className="buy_chai"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-around"}
      bgImage={"/chai_bg.png"}
      bgSize={"cover"}
    >
      <Box>
        <Heading mt={"10"} textColor={"#F6F1F1"}>Account:</Heading>
        <small style={{ color: "#F6F1F1" }}>{account}</small>
      </Box>
      <Box textColor={"#F6F1F1"}>
        <form onSubmit={buyChai}>
          <FormControl my={"1"} width={"80"}>
            <FormLabel fontWeight={"600"}>Name</FormLabel>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name..."
              variant={"flushed"}
              _placeholder={{ opacity: 1, color: "#d3d3d3" }}
            />
          </FormControl>
          <FormControl my={"1"}>
            <FormLabel fontWeight={"600"}>Message</FormLabel>
            <Input
              type="text"
              name="message"
              id="message"
              placeholder="Enter your message..."
              variant={"flushed"}
              _placeholder={{ opacity: 1, color: "#d3d3d3" }}
            />
          </FormControl>
          <Box my={"2"}>
            <ButtonGroup display={"flex"} justifyContent={"space-between"}>
              <Button
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
              </Modal>
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
      <Box></Box>
    </Box>
  );
}
