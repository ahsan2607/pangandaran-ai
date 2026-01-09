import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const UserProfile: React.FC = () => {
  return (
    <Flex direction="column" gap={1} justify="center" align="center" mt={8} mb={2}>
      <Box
        p={3}
        // align="start"
        // justify="end"
        h="80px"
        w="80px"
        bg="gray.700"
        bgImage={`url('anu')`}
        bgSize="cover"
        bgPos="center"
        borderRadius="full"
      />
      <Text fontSize="md" mt={1}>Lorem Ipsum Dolor</Text>
      <Text fontSize="sm" color="gray.500" lineHeight={0.8}>loremipsum@example.com</Text>
    </Flex>
  );
};
