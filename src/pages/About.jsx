import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About = () => (
  <Container maxW="container.md" py={8}>
    <Box>
      <Heading as="h1" size="2xl" mb={4}>About Financial Times</Heading>
      <Text fontSize="lg" mb={4}>
        Financial Times is a leading news organization that provides in-depth analysis and coverage of global financial markets, business, and economic news.
      </Text>
      <Text fontSize="lg">
        Our mission is to deliver accurate and insightful news to our readers, helping them make informed decisions in an ever-changing world.
      </Text>
    </Box>
  </Container>
);

export default About;