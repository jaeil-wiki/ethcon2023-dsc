import { Avatar, Box, Flex, Heading, HStack } from "@chakra-ui/react";
import Link from "@/app/components/link";

export default function Navigation() {
  return (
    <Flex h="16" alignItems="center" justifyContent="space-between" mb="3">
      <Link href="/">
        <Heading>🎁 Gifty.fi </Heading>
      </Link>
      <HStack spacing="8" alignItems="center" pr="32">
        {Links.map((link) => (
          <Link href={link.path} key={link.path}>
            <Box px="2" py="1" rounded="md">
              {link.name}
            </Box>
          </Link>
        ))}
      </HStack>
      <HStack>
        <Avatar
          size="sm"
          ml="5"
          src={`https://effigy.im/a/${"0x0000404"}.svg`} // TODO: address avatar
        ></Avatar>
      </HStack>
    </Flex>
  );
}
const Links = [
  {
    name: "Transactions",
    path: "/transactions",
  },
  {
    name: "Wallet",
    path: "/wallet",
  },
  {
    name: "Forge",
    path: "/forge",
  },
  {
    name: "Store",
    path: "/store",
  },
  {
    name: "Earn",
    path: "/earn",
  },
];
