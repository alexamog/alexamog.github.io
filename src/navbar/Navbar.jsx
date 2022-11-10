import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Tabs,
  Tab,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

export default function Navbar() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Tabs variant="soft-rounded" align="center">
        <Breadcrumb separator={"/"}>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">
              <Tab>About</Tab>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">
              <Tab>Work Experience</Tab>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">
              <Tab>Projects</Tab>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">
              <Tab>Keyboard Gallery</Tab>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">
              <Tab>Resume</Tab>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Tabs>
    </div>
  );
}
