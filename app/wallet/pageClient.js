"use client";

import { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Progress,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Navigation from "@/app/components/navigation";
import { mockNfts, NftCard } from "@/app/wallet/components/nft";
import { mockTxs, TransactionTabs } from "@/app/transactions/components/tabs";
import { comma } from "@/app/utils/string";

export const BalanceView = ({ asset, balance }) => (
  <Flex>
    <Badge
      fontSize="md"
      px="2"
      bg="gray.800"
      rounded="md"
      w="4rem"
      color="white"
      textAlign="center"
    >
      {asset}
    </Badge>
    <Text fontSize="md" ml="2">
      {comma(balance)} {asset}
    </Text>
  </Flex>
);

export default function PageClient() {
  const [ready, setReady] = useState(false);

  const Wallet = () => (
    <Card bg="gray.700" w="50%" minH="20vh" color="white">
      <CardHeader>
        <Flex justify="space-between">
          <Heading size="lg">💰 My Assets</Heading>
          <Button>KYC Completed</Button>
        </Flex>
      </CardHeader>
      <CardBody>
        <VStack align="start">
          <BalanceView asset="KAI" balance={1130200} />
          <BalanceView asset="USDC" balance={230.1} />
          <BalanceView asset="DAI" balance={105.08} />
          <BalanceView asset="WBTC" balance={0.063} />
          <BalanceView asset="ETH" balance={1.244} />
        </VStack>
      </CardBody>
    </Card>
  );

  const Convert = () => (
    <Card bg="white" w="50%" minH="20vh">
      <CardHeader>
        <Heading size="lg">♻️ Convert</Heading>
      </CardHeader>
      <CardBody>
        <VStack spacing={4}>
          <HStack w="100%">
            <InputGroup w="50%">
              <InputLeftAddon w="5rem">KAI</InputLeftAddon>
              <Input type="tel" placeholder="Amount In" />
            </InputGroup>
            <InputGroup w="50%">
              <InputLeftAddon w="5rem">USDC</InputLeftAddon>
              <Input type="tel" placeholder="Amount Out" />
            </InputGroup>
          </HStack>

          <Text color="gray.600">
            1 KAI = 0.000688231 USDC (1 USDC = 1453 KAI){" "}
          </Text>
          <Button w="100%">Convert</Button>
          <Progress w="100%" hasStripe value={64} />
        </VStack>
      </CardBody>
    </Card>
  );

  const Nfts = ({ nfts }) => (
    <Card bg="gray.800" color="white">
      <CardHeader>
        <Heading size="lg">NFT Collections</Heading>
      </CardHeader>
      <CardBody maxH="36vh" overflowY="auto">
        <SimpleGrid columns={6} spacing="3">
          {nfts.map((nft, idx) => (
            <NftCard key={idx} nft={nft} />
          ))}
        </SimpleGrid>
      </CardBody>
    </Card>
  );

  const Transactions = ({ txs }) => (
    <Card bg="white" w="100%" minH="20vh">
      <CardHeader>
        <Heading size="lg">Transactions</Heading>
      </CardHeader>
      <CardBody maxH="26vh" overflowY="auto">
        <TransactionTabs txs={txs} />
      </CardBody>
    </Card>
  );

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    ready && (
      <Container maxW="8xl" px="3">
        <Navigation />
        <VStack spacing="3">
          <HStack spacing="3" w="100%">
            <Wallet />
            <Convert />
          </HStack>
          <Nfts nfts={mockNfts} />
          <Transactions txs={mockTxs} />
        </VStack>
      </Container>
    )
  );
}
