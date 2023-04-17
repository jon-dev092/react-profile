import React from "react";
import { Box, Flex, Link, Image } from "@chakra-ui/react";
import GithubLogo from "../img/github-logo.png";
import LinkedInLogo from "../img/Linkedin.png";
import TwitterLogo from "../img/twitter-logo.png";

const Footer = () => {
  return (
    <Box
      as="footer"
      borderTopWidth="1px"
      borderColor="#444"
      bg="#333"
      p={4}
      textAlign="center"
    >
      <Flex maxW="800px" mx="auto" justifyContent="space-around">
        <Link href="https://github.com/jon-dev092" isExternal>
          <Image src={GithubLogo} alt="Github Logo" w="70px" />
        </Link>
        <Link href="https://www.linkedin.com/" isExternal>
          <Image src={LinkedInLogo} alt="LinkedIn Logo" w="70px" />
        </Link>
        <Link href="https://twitter.com/" isExternal>
          <Image src={TwitterLogo} alt="Twitter Logo" w="70px" />
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
