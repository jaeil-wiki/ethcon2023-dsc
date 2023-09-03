import { Link as ChakraLink } from "@chakra-ui/next-js";
import NextLink from "next/link";

export default function Link({ href = "#", children }) {
  return (
    <ChakraLink
      as={NextLink}
      href={href}
      _hover={{
        textDecoration: "none",
      }}
    >
      {children}
    </ChakraLink>
  );
}
