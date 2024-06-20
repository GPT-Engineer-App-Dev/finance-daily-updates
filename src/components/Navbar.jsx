import { Box, Flex, Link, Spacer, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="gray.800" color="white" px={4} py={2}>
    <Flex align="center">
      <Heading as="h1" size="lg">
        <Link as={RouterLink} to="/">Financial Times</Link>
      </Heading>
      <Spacer />
      <Flex>
        <Link as={RouterLink} to="/" mx={2}>Home</Link>
        <Link as={RouterLink} to="/about" mx={2}>About</Link>
        <Link as={RouterLink} to="/contact" mx={2}>Contact</Link>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;