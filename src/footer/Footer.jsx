import { VStack, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <div
      id="footer"
      style={{
        paddingBottom: "5rem",
      }}
    >
      <VStack position="absolute" left="0" right="0" bottom="0">
        <Text>© 2022 Alexander Amog</Text>
      </VStack>
    </div>
  );
}
