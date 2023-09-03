import {
  Tab,
  TableCaption,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import {
  TransactionRow,
  TransactionsTable,
} from "@/app/transactions/components/table";

export const TransactionTabs = ({ txs }) => {
  return (
    <Tabs>
      <TabList>
        {txs &&
          Object.keys(txs).map((method) => <Tab key={method}>{method}</Tab>)}
      </TabList>

      <TabPanels>
        {txs &&
          Object.keys(txs).map((method) => (
            <TabPanel key={method} p="0">
              <TransactionsTable>
                {txs && txs[method].length ? (
                  txs[method].map((tx, idx) => (
                    <TransactionRow key={`${tx.hash}:${idx}`} row={tx} />
                  ))
                ) : (
                  <TableCaption>There are no transactions yet.</TableCaption>
                )}
              </TransactionsTable>
              {/* TODO : pagination indicator */}
            </TabPanel>
          ))}
      </TabPanels>
    </Tabs>
  );
};

export const mockTxs = {
  mint_nft: Object([1, 2, 3, 4, 5, 6, 7, 8, 9]).map(() => ({
    hash: "0xf81e48446d205b47edbc6afcb2041c54919abf9f9af72d68fd2c50f6718c89e0",
    method: "mint",
    blockNumber: 47050970,
    blockTime: "01-03-2023 11:30:23",
    from: "0xeeb57a415b3af5a83c546afa61169f624b81eaa0",
    to: "0xeeb57a415b3af5a83c546afa61169f624b81eaa0",
    value: [5000, "KAI"],
    gas: 0.064916966873,
  })),
  burn_nft: Object([1, 2, 3, 4, 5, 6, 7, 8, 9]).map(() => ({
    hash: "0xf81e48446d205b47edbc6afcb2041c54919abf9f9af72d68fd2c50f6718c89e0",
    method: "burn",
    blockNumber: 47150970,
    blockTime: "12-03-2023 11:30:23",
    from: "0xeeb57a415b3af5a83c546afa61169f624b81eaa0",
    to: "0xeeb57a415b3af5a83c546afa61169f624b81eaa0",
    value: [5000, "KAI"],
    gas: 0.064916966873,
  })),
  unwrap_nft: Object([1, 2, 3, 4, 5, 6, 7, 8, 9]).map(() => ({
    hash: "0xf81e48446d205b47edbc6afcb2041c54919abf9f9af72d68fd2c50f6718c89e0",
    method: "unwrap",
    blockNumber: 47060970,
    blockTime: "23-12-2022 11:30:23",
    from: "0xeeb57a415b3af5a83c546afa61169f624b81eaa0",
    to: "0xeeb57a415b3af5a83c546afa61169f624b81eaa0",
    value: [5000, "KAI"],
    gas: 0.064916966873,
  })),
  wrap_kai: Object([1, 2, 3, 4, 5, 6, 7, 8, 9]).map(() => ({
    hash: "0xf81e48446d205b47edbc6afcb2041c54919abf9f9af72d68fd2c50f6718c89e0",
    method: "wrap",
    blockNumber: 47030970,
    blockTime: "13-04-2023 11:30:23",
    from: "0xeeb57a415b3af5a83c546afa61169f624b81eaa0",
    to: "0xeeb57a415b3af5a83c546afa61169f624b81eaa0",
    value: [5000, "KAI"],
    gas: 0.064916966873,
  })),
  convert_to_usdc: Object([1, 2, 3, 4, 5, 6, 7, 8, 9]).map(() => ({
    hash: "0xf81e48446d205b47edbc6afcb2041c54919abf9f9af72d68fd2c50f6718c89e0",
    method: "convertToUsdc",
    blockNumber: 47056970,
    blockTime: "03-08-2023 11:30:23",
    from: "0xeeb57a415b3af5a83c546afa61169f624b81eaa0",
    to: "0xeeb57a415b3af5a83c546afa61169f624b81eaa0",
    value: [5000, "KAI"],
    gas: 0.064916966873,
  })),
  convert_to_kai: Object([1, 2, 3, 4, 5, 6, 7, 8, 9]).map(() => ({
    hash: "0xf81e48446d205b47edbc6afcb2041c54919abf9f9af72d68fd2c50f6718c89e0",
    method: "convertToKai",
    blockNumber: 44050970,
    blockTime: "02-09-2023 11:30:23",
    from: "0xeeb57a415b3af5a83c546afa61169f624b81eaa0",
    to: "0xeeb57a415b3af5a83c546afa61169f624b81eaa0",
    value: [5000, "KAI"],
    gas: 0.064916966873,
  })),
};
