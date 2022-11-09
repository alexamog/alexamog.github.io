import {
  Heading,
  Image,
  SimpleGrid,
  Box,
  Text,
  VStack,
  HStack,
  Badge,
  Button,
} from "@chakra-ui/react";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Body() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 350,
      strings: ["Software Engineer", "Student", "Keyboard Enthusiast"],
    });
  }, []);

  return (
    <div
      style={{
        margin: "0 10em 0 10em",
      }}
    >
      <VStack mt="2em">
        <Heading as="h1" fontSize="5em">
          Alexander Amog
        </Heading>
      </VStack>
      <SimpleGrid columns={2} m="1.3em 30.8em 0 30.8em">
        <Box height="300px" w="500px">
          <Image
            borderRadius="full"
            boxSize="250px"
            src="https://avatars.githubusercontent.com/u/76136244?v=4"
            alt="Alexander Amog"
          />
        </Box>
        <Box>
          <VStack align="left">
            <Heading as="h2" fontSize="3em">
              Hey there!
            </Heading>
            <Heading as="h3">I'm Alexander Amog</Heading>
            <Heading as="h4" fontSize="1em">
              <span ref={textRef}></span>
            </Heading>

            <HStack>
              <Button colorScheme="blackAlpha">
                <a href="https://github.com/alexamog/">Github</a>
              </Button>
              <Button colorScheme="blackAlpha">
                <a href="https://www.linkedin.com/in/alexander-amog/">
                  LinkedIn
                </a>
              </Button>
              <Button colorScheme="blackAlpha">
                <a href="mailto:alexamog@outlook.com">Email</a>
              </Button>
            </HStack>
          </VStack>
        </Box>
      </SimpleGrid>
      <Box m="1.3em 31.8em 0 30.8em">
        <Heading as="h1">About me</Heading>
        <Text>
          Hello, my name is Alexander Amog and I am a undergrad student at BCIT
          studying Information Technology. Currently, I am working as a Software
          Engineer at ESDC Government of Canada.
        </Text>
        <Text mt="1em">
          I am a big keyboard enthusiast and I love to build keyboards. I have
          built over 10 keyboards and I am always looking to build more. I am
          also a big fan of mechanical keyboards and I have a collection of over
          20 keyboards.
        </Text>
      </Box>
    </div>
  );
}
