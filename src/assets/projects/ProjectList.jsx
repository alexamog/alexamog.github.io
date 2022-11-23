import "./projectStyle.css";
import {
  Button,
  Heading,
  Text,
  SimpleGrid,
  Box,
  VStack,
} from "@chakra-ui/react";
export default function ProjectList({ projects }) {
  return (
    <div>
      <VStack>
        <Heading>Projects</Heading>
        {projects.map((project) => {
          return (
            <Box key={project.id}>
              <SimpleGrid columns={2} spacingX="1px" m=" 0 200px 0 200px">
                <Box display="inline-grid" justifyContent="center" pb="30px">
                  <Heading textAlign="center">{project.name}</Heading>
                  <img
                    style={{
                      borderRadius: "5%",
                    }}
                    height="500px"
                    width="500px"
                    src={project.image}
                    alt={project.name}
                  />
                </Box>
                <Box display="inline-grid" alignItems="center">
                  <Text>{project.description}</Text>
                </Box>
              </SimpleGrid>
            </Box>
          );
        })}

        <Button bg="blackAlpha.600">
          <a href="https://github.com/alexamog/" target="_blank">
            See more Projects on Github
          </a>
        </Button>
      </VStack>
    </div>
  );
}
