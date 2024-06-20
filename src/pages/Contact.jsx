import { Box, Container, Heading, Text, VStack, Input, Textarea, Button } from "@chakra-ui/react";

const Contact = () => (
  <Container maxW="container.md" py={8}>
    <Box>
      <Heading as="h1" size="2xl" mb={4}>Contact Us</Heading>
      <Text fontSize="lg" mb={4}>
        We would love to hear from you! Please fill out the form below to get in touch with us.
      </Text>
      <VStack spacing={4} align="stretch">
        <Input placeholder="Your Name" />
        <Input placeholder="Your Email" />
        <Textarea placeholder="Your Message" />
        <Button colorScheme="blue">Submit</Button>
      </VStack>
    </Box>
  </Container>
);

export default Contact;