import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { ethers } from "ethers";

export default function Buy({ state }) {
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
  };

  return (
    <Box
      height={"100vh"}
      className="buy_chai"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      bgImage={"/chai_bg.png"}
      bgSize={"cover"}
    >
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
              <Button borderRadius={"full"} colorScheme="whatsapp">
                Transactions
              </Button>
              <Button width={"24"} type="submit" borderRadius={"full"} colorScheme="twitter">
                Pay
              </Button>
            </ButtonGroup>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
