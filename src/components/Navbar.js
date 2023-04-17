// import { Link } from "react-router-dom";
// import {  } from '@chakra-ui/react';


// // Serves as a header for all pages 
// const Navbar = () => {
//     return ( 
//         <nav className="navbar">
//             <h1>Jonathan Perez</h1>
//             <div className="links">
//                 <Link to="/react-profile">About Me</Link>
//                 <Link to="/projects">Projects</Link>
//                 <Link to="/contact">Contact Me</Link>
//                 <Link to="/resume">Resume</Link>
//             </div>
//         </nav>
//      );
// }
// export default Navbar;

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
    <Box as="nav" px={4} py={6} borderBottomWidth="1px">
      <Flex align="center" maxW="800px" mx="auto">
        <Text fontSize="2xl" fontWeight="bold" color="f1356d">
          Jonathan Perez
        </Text>
        <Spacer />
        <Box display={displayLinks}>
          <Flex>
            <ChakraLink as={Link} to="/react-profile" mx={4} p={1}>
              <Text>About Me</Text>
            </ChakraLink>
            <ChakraLink as={Link} to="/projects" mx={4} p={1}>
              <Text>Projects</Text>
            </ChakraLink>
            <ChakraLink as={Link} to="/contact" mx={4} p={1}>
              <Text>Contact Me</Text>
            </ChakraLink>
            <ChakraLink as={Link} to="/resume" mx={4} p={1}>
              <Text>Resume</Text>
            </ChakraLink>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;