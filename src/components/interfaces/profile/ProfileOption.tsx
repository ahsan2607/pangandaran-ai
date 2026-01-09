import { Box, List, Flex } from "@chakra-ui/react";
import { FaGear, FaBell, FaClock, FaCircleQuestion, FaRightToBracket, FaChevronRight } from "react-icons/fa6";
import React from "react";

export const ProfileOption: React.FC = () => {
  return (
    <Box px={6}>
      <List.Root unstyled={true} spaceY={3}>
        <List.Item>
          <Box py={3} px={6} borderWidth="0.5px" borderColor="secondary" borderRadius="xl">
            <Flex align="center" justify="space-between">
              <Flex justify="center" align="center" gap={2}>
                <FaGear></FaGear> Settings
              </Flex>
              <FaChevronRight />
            </Flex>
          </Box>
        </List.Item>
        <List.Item>
          <Box py={3} px={6} borderWidth="0.5px" borderColor="secondary" borderRadius="xl">
            <Flex align="center" justify="space-between">
              <Flex justify="center" align="center" gap={2}>
                <FaBell></FaBell> Notification
              </Flex>
              <FaChevronRight />
            </Flex>
          </Box>
        </List.Item>
        <List.Item>
          <Box py={3} px={6} borderWidth="0.5px" borderColor="secondary" borderRadius="xl">
            <Flex align="center" justify="space-between">
              <Flex justify="center" align="center" gap={2}>
                <FaClock></FaClock> History
              </Flex>
              <FaChevronRight />
            </Flex>
          </Box>
        </List.Item>
        <List.Item>
          <Box py={3} px={6} borderWidth="0.5px" borderColor="secondary" borderRadius="xl">
            <Flex align="center" justify="space-between">
              <Flex justify="center" align="center" gap={2}>
                <FaCircleQuestion></FaCircleQuestion> Support and Help
              </Flex>
              <FaChevronRight />
            </Flex>
          </Box>
        </List.Item>
        <List.Item>
          <Box
            py={3}
            px={6}
            borderWidth="0.5px"
            borderColor="secondary"
            borderRadius="xl"
            bgColor="secondary"
            color="white"
          >
            <Flex align="center" justify="space-between">
              <Flex justify="center" align="center" gap={2}>
                <FaRightToBracket></FaRightToBracket> Logout
              </Flex>
              <FaChevronRight />
            </Flex>
          </Box>
        </List.Item>
      </List.Root>
    </Box>
  );
};
