"use client";

import { useEffect, useState } from "react";
import { Container, Image } from "@chakra-ui/react";
import Navigation from "@/app/components/navigation";

export default function PageClient() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    ready && (
      <Container maxW="8xl" px="3">
        <Navigation />
        <Image src="/bg.png" w="100%" />
      </Container>
    )
  );
}
