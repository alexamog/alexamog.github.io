import { HStack, Tabs, Tab, TabList } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <HStack as="nav">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <RouteLink to="/">
              <Tab>Home </Tab>
            </RouteLink>

            <RouteLink to="/experience">
              <Tab>Work Experience</Tab>
            </RouteLink>
            <RouteLink to="/keebGallery">
              <Tab>Keyboard Gallery</Tab>
            </RouteLink>
            <RouteLink to="/resume">
              <Tab>Resume</Tab>
            </RouteLink>
          </TabList>
        </Tabs>
      </HStack>
    </div>
  );
}
