import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Spacer,
  useBreakpointValue,
  Link as ChakraLink,
} from "@chakra-ui/react";

const Navbar = () => {
  const displayLinks = useBreakpointValue({ base: "flex", md: "flex" });

  return (
    <Box
      as="nav"
      px={4}
      py={6}
      borderBottomWidth="1px"
      bg="#333"
      borderBottomColor="#444"
    >
      <Flex align="center" maxW="800px" mx="auto">
        <Text fontSize="2xl" fontWeight="bold" color="#f1356d">
          Jonathan Perez
        </Text>
        <Spacer />
        <Box display={displayLinks}>
          <Flex>
            <ChakraLink
              as={Link}
              to="/react-profile"
              mx={4}
              p={1}
              color="#ddd"
              fontWeight="semibold"
              _hover={{
                textDecoration: "underline",
                color: "#f1356d",
              }}
            >
              <Text>About Me</Text>
            </ChakraLink>
            <ChakraLink
              as={Link}
              to="/projects"
              mx={4}
              p={1}
              color="#ddd"
              fontWeight="semibold"
              _hover={{
                textDecoration: "underline",
                color: "#f1356d",
              }}
            >
              <Text>Projects</Text>
            </ChakraLink>
            <ChakraLink
              as={Link}
              to="/contact"
              mx={4}
              p={1}
              color="#ddd"
              fontWeight="semibold"
              _hover={{
                textDecoration: "underline",
                color: "#f1356d",
              }}
            >
              <Text>Contact Me</Text>
            </ChakraLink>
            <ChakraLink
              as={Link}
              to="/resume"
              mx={4}
              p={1}
              color="#ddd"
              fontWeight="semibold"
              _hover={{
                textDecoration: "underline",
                color: "#f1356d",
              }}
            >
              <Text>Resume</Text>
            </ChakraLink>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;