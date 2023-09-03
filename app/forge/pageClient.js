"use client";

import { useEffect, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Progress,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import Navigation from "@/app/components/navigation";
import { mockNfts } from "@/app/wallet/components/nft";
import { TruncatedText } from "@/app/components/text";
import { comma } from "@/app/utils/string";
import { GiClockwork, GiHammerBreak, GiHammerDrop } from "react-icons/gi";
import { BsArrowRightSquare } from "react-icons/bs";

export const ForgeNftCard = ({ nft, bg = "gray.700", progress = false }) => (
  <Card maxW="sm" bg={bg} color="white" w="100%" border="solid 1px white">
    <CardBody>
      <Image src={nft.image} alt="nft Image" borderRadius="md" />
      <Stack mt="4" spacing="2">
        <Heading size="sm">
          <TruncatedText maxW="100%" noOfLines={1}>
            {nft.name}
          </TruncatedText>
        </Heading>
        <VStack align="start">
          <Wrap>
            <Badge colorScheme="orange">{nft.manufacturer}</Badge>
            <Badge colorScheme="green">
              {comma(Number(nft.price).toString())} KAI
            </Badge>
            {/*<Text fontSize="xs" color="whiteAlpha.800">*/}
            {/*  Best Offers: {comma(Number(nft.bestOffers).toString())} KAI*/}
            {/*</Text>*/}
          </Wrap>
        </VStack>
        {progress && <Progress hasStripe value={64} />}
      </Stack>
    </CardBody>
  </Card>
);

export default function PageClient() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const Forge = ({ nfts }) => (
    <>
      <Card bg="gray.800" color="white">
        <CardHeader>
          <Heading size="lg">
            <Flex>
              <Icon as={GiHammerDrop} mr="2" mt="1" />
              <Text>Forge NFT</Text>
            </Flex>
          </Heading>
        </CardHeader>
        <CardBody>
          <SimpleGrid maxH="48vh" columns={3} spacing="3" overflowY="auto">
            {nfts.map((nft, idx) => (
              <ForgeNftCard key={idx} nft={nft} />
            ))}
          </SimpleGrid>
          <Divider my="3" />
          <Flex w="100%">
            <Card w="50%" alignSelf="flex-stretch" maxW="16rem" bg="gray.700">
              <CardBody>
                <VStack justify="center">
                  <Image src="/kai.png" w="5.6rem" alt="kai icon" />
                  <Heading size="lg" color="white">
                    50,000 KAI
                  </Heading>
                </VStack>
              </CardBody>
              <CardFooter>
                <Button w="100%">
                  <Flex align="center" justify="space-between">
                    <Icon as={GiHammerDrop} alignSelf="center" boxSize="8" />
                    <Text fontSize="lg" ml="3">
                      Forge (8m 00s)
                    </Text>
                  </Flex>
                </Button>
              </CardFooter>
            </Card>
            <Icon
              as={BsArrowRightSquare}
              alignSelf="center"
              boxSize={16}
              mx="5"
            />
            <VStack w="50%">
              <ForgeNftCard nft={nfts[0]} />
              {/*<Icon as={SiCurseforge} boxSize={32} mt="-6" />*/}
            </VStack>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
  const Dismantle = ({ nfts }) => (
    <>
      <Card bg="gray.50">
        <CardHeader>
          <Heading size="lg">
            <Flex>
              <Icon as={GiHammerBreak} mr="2" mt="1" />
              <Text>Dismantle NFT</Text>
            </Flex>
          </Heading>
        </CardHeader>
        <CardBody>
          <SimpleGrid maxH="48vh" columns={3} spacing="3" overflowY="auto">
            {nfts.map((nft, idx) => (
              <ForgeNftCard key={idx} nft={nft} bg="gray.600" />
            ))}
          </SimpleGrid>
          <Divider my="3" borderColor="gray" />
          <Flex w="100%">
            <VStack w="50%">
              <ForgeNftCard nft={nfts[0]} bg="gray.600" />
              {/*<Icon as={SiCurseforge} boxSize={32} mt="-6" />*/}
            </VStack>
            <Icon
              as={BsArrowRightSquare}
              alignSelf="center"
              boxSize={16}
              color="gray.600"
              mx="5"
            />
            <Card w="50%" alignSelf="flex-stretch" maxW="16rem" bg="gray.600">
              <CardBody>
                <VStack justify="center">
                  <Image src="/kai.png" w="5.6rem" alt="kai icon" />
                  <Heading size="lg" color="white">
                    50,000 KAI
                  </Heading>
                </VStack>
              </CardBody>
              <CardFooter>
                <Button w="100%">
                  <Flex align="center" justify="space-between">
                    <Icon as={GiHammerBreak} alignSelf="center" boxSize="8" />
                    <Text fontSize="lg" ml="3">
                      Dismantle (8m 00s)
                    </Text>
                  </Flex>
                </Button>
              </CardFooter>
            </Card>
          </Flex>
        </CardBody>
      </Card>
    </>
  );

  const ForgingQueue = ({ nfts }) => (
    <>
      <Card bg="gray.700" color="white">
        <CardHeader>
          <Heading size="lg">
            <Flex>
              <Icon as={GiClockwork} mr="2" mt="1" />
              <Text>On Forging</Text>
            </Flex>
          </Heading>
        </CardHeader>
        <CardBody>
          <Wrap maxH="18vh" spacing="4" overflowX="auto">
            {nfts.map((nft, idx) => (
              <Box key={idx} maxW="8vw">
                <ForgeNftCard key={idx} nft={nft} progress={true} />
              </Box>
            ))}
          </Wrap>
        </CardBody>
      </Card>
    </>
  );

  return (
    ready && (
      <Container maxW="8xl" px="3">
        <Navigation />
        <HStack mb="3" spacing="3">
          <Forge nfts={mockNfts} />
          <Dismantle nfts={mockNfts} />
        </HStack>
        <ForgingQueue nfts={mockNfts} />
      </Container>
    )
  );
}
