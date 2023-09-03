import {
  Badge,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { TruncatedText } from "@/app/components/text";
import { comma } from "@/app/utils/string";

export const NftCard = ({ nft }) => (
  <Card maxW="sm" bg="gray.700" color="white" w="100%">
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
            <Badge>#{nft.id}</Badge>
            <Badge colorScheme="green">
              {comma(Number(nft.price).toString())} KAI
            </Badge>
            <Text fontSize="xs" color="whiteAlpha.800">
              Best Offers: {comma(Number(nft.bestOffers).toString())} KAI
            </Text>
          </Wrap>
        </VStack>
      </Stack>
    </CardBody>
  </Card>
);

export const mockNfts = [
  {
    id: 1337,
    contract: "0x7F36182DeE28c45dE6072a34D29855BaE76DBe2f",
    image: "moonsang.jpeg",
    name: "문화상품권(50,000원)",
    price: 55000,
    bestOffers: 49500,
    manufacturer: "컬쳐랜드",
  },
  {
    id: 1337,
    contract: "0x6F36182DeE28c45dE6072a34D29855BaE76DBe2f",
    image: "/naver.png",
    name: "네이버페이포인트 (5000)",
    price: 5500,
    bestOffers: 4670,
    manufacturer: "네이버",
  },
  {
    id: 1337,
    contract: "0x7F36182DeE28c45dE6072a34D29855BaE76DBe2f",
    image: "/sofa.png",
    name: "디오네지아 아쿠아 패브릭 3인용 쇼파",
    price: 673200,
    bestOffers: 550000,
    manufacturer: "까사미아",
  },
  {
    id: 1337,
    contract: "0x7F36182DeE28c45dE6072a34D29855BaE76DBe2f",
    image: "/hhkb.jpeg",
    name: "해피해킹 PFU HHKB Profesional",
    price: 494000,
    bestOffers: 443200,
    manufacturer: "해피해킹",
  },
];
