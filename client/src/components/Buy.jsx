import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { ethers } from "ethers";

export default function Buy({ state }) {
  const buyChai = async (e) => {
    e.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    console.log(name, message, contract);
    const value = { value: ethers.utils.parseEther("0.001") };

    const transaction = await contract.buyChai(name, message, value);
    await transaction.wait();
    console.log("Transaction is completed");
  };

  return (
    <Box display={"flex"} alignContent={"center"} justifyContent={"center"}>
      <form onSubmit={buyChai}>
        <FormControl width={"80"}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Input
            type="text"
            name="message"
            id="message"
            placeholder="Enter your message..."
          />
        </FormControl>
        <Button type="submit">Pay</Button>
      </form>
    </Box>
  );
}
