import { Text } from "@chakra-ui/react";

export function TruncatedText({ maxW, children, noOfLines = undefined }) {
  return (
    <Text
      maxW={maxW}
      textOverflow="ellipsis"
      overflow="hidden"
      noOfLines={noOfLines}
    >
      {children}
    </Text>
  );
}
