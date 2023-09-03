"use client";

import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Navigation from "@/app/components/navigation";
import { mockNfts, NftCard } from "@/app/wallet/components/nft";

export default function PageClient() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const Nfts = ({ nfts }) => (
    <Card bg="gray.800" color="white" w="80%" minH="80vh">
      <CardHeader>
        <Heading size="lg">NFT Store</Heading>
      </CardHeader>
      <CardBody maxH="32vh" overflowY="auto">
        <SimpleGrid columns={4} spacing="3">
          {nfts.map((nft, idx) => (
            <NftCard key={idx} nft={nft} />
          ))}
        </SimpleGrid>
      </CardBody>
    </Card>
  );

  const Categories = ({ categories }) => (
    <Card w="20%" mr="4" bg="none" boxShadow="none">
      <CardHeader>
        <Heading size="lg">Categories</Heading>
      </CardHeader>
      <CardBody maxH="32vh" overflowY="auto">
        <VStack spacing="3" w="100%">
          {mockCategories.map((category, idx) => (
            <Button flex="1" justifyContent="start" w="100%" py="3" key={idx}>
              {category}
            </Button>
          ))}
        </VStack>
      </CardBody>
    </Card>
  );

  return (
    ready && (
      <Container maxW="8xl" px="3">
        <Navigation />
        <Flex>
          <Categories />
          <Nfts nfts={mockNfts} />
        </Flex>
      </Container>
    )
  );
}

const mockCategories = [
  "Games (1143)",
  "Culture (13)",
  "Grocery (13)",
  "Electronics (329)",
  "Funitures (4)",
];
