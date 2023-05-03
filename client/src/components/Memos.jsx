import {
  Box,
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Heading,
  Tbody,
  Td,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function Memos({ state }) {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getMemos();
      console.log(memos);
      setMemos(memos);
    };
    memosMessage();
  }, [contract]);
  // console.log(memos);

  return (
    <div>
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
            {
              memos.map((memos) => {
                return (
                  <Tr key={memos.timeStamp}>
                    <Td>{ memos.name }</Td>
                    <Td>{ memos.message }</Td>
                    <Td>{ memos.timeStamp }</Td>
                    <Td>{ memos.from }</Td>
                  </Tr>
                )
              })
            }
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}
