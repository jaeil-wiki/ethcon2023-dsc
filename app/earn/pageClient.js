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
} from "@chakra-ui/react";
import Navigation from "@/app/components/navigation";
import { comma } from "@/app/utils/string";

export default function PageClient() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const Pools = () => (
    <Card w="100%">
      <CardHeader>
        <Heading size="lg">Pools</Heading>
      </CardHeader>
      <CardBody overflowY="auto">
        {mockPools.map((pool) => (
          <Flex
            key={`${pool.token1}-${pool.token2}`}
            border="solid 1px gray"
            color="gray.700"
            rounded="md"
            justify="space-between"
            align="center"
            px="3"
            py="5"
            mb="3"
          >
            <Badge
              py="3"
              fontSize="xl"
              colorScheme="orange"
              w="10rem"
              textAlign="center"
            >
              {pool.token1}+{pool.token2}
            </Badge>
            <Heading size="md">APR: {pool.apr}%</Heading>
            <Heading size="md">Cap: {pool.cap}</Heading>
            <Button>Add Liquidity</Button>
          </Flex>
        ))}
      </CardBody>
    </Card>
  );

  return (
    ready && (
      <Container maxW="8xl" px="3">
        <Navigation />
        <Pools />
      </Container>
    )
  );
}

const mockPools = [
  {
    token1: "USDC",
    token2: "KAI",
    cap: `￦ ${comma(Number(601302030).toString())}`,
    apr: 6.44,
  },
  {
    token1: "DAI",
    token2: "KAI",
    cap: `￦ ${comma(Number(140220300).toString())}`,
    apr: 4.14,
  },
  {
    token1: "ETH",
    token2: "KAI",
    cap: `￦ ${comma(Number(300230203).toString())}`,
    apr: 2.44,
  },
  {
    token1: "BTC",
    token2: "KAI",
    cap: `￦ ${comma(Number(12020003).toString())}`,
    apr: 1.89,
  },
];
