import { Box, Container, Heading, VStack, Text, SimpleGrid, GridItem } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">Financial Times</Heading>
        
        <Box>
          <Heading as="h2" size="lg" mb={4}>Top Stories</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h3" size="md">Top Story 1</Heading>
                <Text mt={2}>Summary of the top story 1...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h3" size="md">Top Story 2</Heading>
                <Text mt={2}>Summary of the top story 2...</Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>Latest News</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h3" size="md">Latest News 1</Heading>
                <Text mt={2}>Summary of the latest news 1...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h3" size="md">Latest News 2</Heading>
                <Text mt={2}>Summary of the latest news 2...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h3" size="md">Latest News 3</Heading>
                <Text mt={2}>Summary of the latest news 3...</Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>Featured Articles</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h3" size="md">Featured Article 1</Heading>
                <Text mt={2}>Summary of the featured article 1...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h3" size="md">Featured Article 2</Heading>
                <Text mt={2}>Summary of the featured article 2...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h3" size="md">Featured Article 3</Heading>
                <Text mt={2}>Summary of the featured article 3...</Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;