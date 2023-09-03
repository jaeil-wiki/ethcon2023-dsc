import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { TruncatedText } from "@/app/components/text";
import { comma } from "@/app/utils/string";

export const TransactionRow = ({ row }) => (
  <Tr>
    <Td>
      <TruncatedText maxW="8vw">{row.hash}</TruncatedText>
    </Td>
    <Td>
      <TruncatedText maxW="10vw">{row.method}</TruncatedText>
    </Td>
    <Td>
      <TruncatedText maxW="6vw">{row.blockNumber}</TruncatedText>
    </Td>
    <Td>
      <TruncatedText maxW="10vw">{row.blockTime}</TruncatedText>
    </Td>
    <Td>
      <TruncatedText maxW="8vw">{row.from}</TruncatedText>
    </Td>
    <Td>
      <TruncatedText maxW="8vw">{row.to}</TruncatedText>
    </Td>
    <Td>
      <TruncatedText maxW="10vw">
        {comma(row.value[0].toString())} {row.value[1]}
      </TruncatedText>
    </Td>
    <Td>
      <TruncatedText maxW="8vw">{row.gas}</TruncatedText>
    </Td>
  </Tr>
);

export const TransactionsTable = ({ children }) => (
  <TableContainer>
    <Table>
      <Thead>
        <Tr>
          <Th>TxHash</Th>
          <Th>Method</Th>
          <Th>Block</Th>
          <Th>Time</Th>
          <Th>From</Th>
          <Th>To</Th>
          <Th>Value</Th>
          <Th>GasFee</Th>
        </Tr>
      </Thead>
      <Tbody>{children}</Tbody>
    </Table>
  </TableContainer>
);

export const mockTxs = Object([1, 2, 3, 4, 5, 6, 7, 8, 9]).map(() => ({
  hash: "0xf81e48446d205b47edbc6afcb2041c54919abf9f9af72d68fd2c50f6718c89e0",
  method: "mint",
  blockNumber: 47050970,
  blockTime: "01-03-2023 11:30:23",
  from: "0xeeb57a415b3af5a83c546afa61169f624b81eaa0",
  to: "0xeeb57a415b3af5a83c546afa61169f624b81eaa0",
  value: [5000, "KAI"],
  gas: 0.064916966873,
}));
