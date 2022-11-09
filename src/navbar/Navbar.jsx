import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Tabs,
  Tab,
} from "@chakra-ui/react";

export default function Navbar() {
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
