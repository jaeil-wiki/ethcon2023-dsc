"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
} from "@chakra-ui/react";
import Navigation from "@/app/components/navigation";
import { mockTxs, TransactionTabs } from "@/app/transactions/components/tabs";

export default function PageClient() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    console.log("1");
  }, []);

  return (
    ready && (
      <Container maxW="8xl" px="3">
        <Navigation />
        <Card bg="white" minH="70vh">
          <CardHeader>
            <Heading>Transaction</Heading>
          </CardHeader>
          <CardBody>
            <TransactionTabs txs={mockTxs} />
          </CardBody>
        </Card>
      </Container>
    )
  );
}
