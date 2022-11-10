import { init } from "ityped";
import { useEffect, useRef } from "react";
import {
  Heading,
  Image,
  SimpleGrid,
  Box,
  Text,
  VStack,
  HStack,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";

const introSection = {
  simpleGrid: {
    columns: 2,
    m: "1.3rem 30.8rem 0 30.8rem",
  },
  image: {
    borderRadius: "full",
    boxSize: "250px",
    src: "https://avatars.githubusercontent.com/u/76136244?v=4",
    alt: "Alexander Amog",
  },
  boxImage: {
    h: "300px",
    w: "500px",
  },
};

const aboutMeSection = {
  description: {
    topDesc: `Hello, my name is Alexander Amog and I am a undergrad student at BCIT
    studying Information Technology. Currently, I am working as a Software
    Engineer at ESDC Government of Canada.`,

    bottomDesc: ` I am a big keyboard enthusiast and I love to build keyboards. I have
    built over 10 keyboards and I am always looking to build more. I am
    also a big fan of mechanical keyboards and I have a collection of over
    20 keyboards.`,
  },
  box: {
    m: "1.3rem 31.8rem 0 30.8rem",
  },
  textTag: {
    mt: "1rem",
  },
};

export default function Body() {
  const title = useRef();
  const [isLargerThanHD, isDisplayingInBrowser] = useMediaQuery([
    "(min-width: 1920px)",
    "(display-mode: browser)",
  ]);

  function determineText() {
    if (isLargerThanHD) {
      return `wide${isDisplayingInBrowser ? "Browser" : "Screen"}`;
    }

    return isDisplayingInBrowser ? "normalrowser" : "otherScreen";
  }

  useEffect(() => {
    init(title.current, {
      showCursor: true,
      backDelay: 350,
      strings: ["Software Engineer", "Student", "Keyboard Enthusiast"],
    });
  }, []);

  return (
    <div className={determineText()}>
      <VStack mt="2rem">
        <Heading as="h1" fontSize="5rem">
          Alexander Amog
        </Heading>
      </VStack>

      <SimpleGrid {...introSection.simpleGrid}>
        <Box {...introSection.boxImage}>
          <Image {...introSection.image} />
        </Box>

        <Box>
          <VStack align="left">
            <Heading as="h2" fontSize="3rem">
              Hey there!
            </Heading>

            <Heading as="h3">I'm Alexander Amog</Heading>

            <Heading as="h4" fontSize="1rem">
              <span ref={title}></span>
            </Heading>

            <HStack>
              <Button colorScheme="blackAlpha">
                <a href="https://github.com/alexamog/" target="_blank">
                  Github
                </a>
              </Button>

              <Button colorScheme="blackAlpha">
                <a
                  href="https://www.linkedin.com/in/alexander-amog/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </Button>

              <Button colorScheme="blackAlpha">
                <a href="mailto:alexamog@outlook.com" target="_blank">
                  Email
                </a>
              </Button>
            </HStack>
            <Button colorScheme="blackAlpha">
              <a href="./src/assets/resume/alexamog-resume.pdf" target="_blank">
                Resume
              </a>
            </Button>
          </VStack>
        </Box>
      </SimpleGrid>

      <Box {...aboutMeSection.box}>
        <Heading as="h1">About me</Heading>

        <Text {...aboutMeSection.textTag}>
          {aboutMeSection.description.topDesc}
        </Text>

        <Text {...aboutMeSection.textTag}>
          {aboutMeSection.description.bottomDesc}
        </Text>
      </Box>
    </div>
  );
}
