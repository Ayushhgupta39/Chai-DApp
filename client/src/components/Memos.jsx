import {
  Box,
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function Memos({ state }) {
  const [memos, setMemos] = useState([]);
  const { contract = {} } = state;
  console.log(state);
  console.log("Contract is: ", contract);

  useEffect(() => {
    console.log(`Hello world`);
    const memosMessage = async () => {
      const memos = await contract.getMemos();
      setMemos(memos);
      console.log("Memos are: ", memos);
    };
    contract && memosMessage();
  }, [contract]);

  return (
    <div className="memos">
      <Box>
        <TableContainer>
          <Table variant={"simple"}>
            <Thead>
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
                    <Td>{String(memos.timeStamp)}</Td>
                    <Td>{memos.from}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}
