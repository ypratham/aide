import {
  Box,
  Flex,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
} from "@chakra-ui/react";
import React from "react";
import AdminLogin from "../components/AdminLogin";
import UserLogin from "../components/UserLogin";

export default function Login() {
  return (
    <Box
      as="main"
      p="40px"
      px="60px"
      flex={1}
      h="100vh"
      bg="#E9E7DC   "
      overflowX={"auto"}
    >
      <Flex w={"full"} gap="4" alignItems="baseline">
        <Heading>aide.</Heading>
        <Box w="full" h="4px" bg="#9DC08B" />
      </Flex>

      <Flex alignItems={"center"} mt="10">
        <Tabs w="full" variant="soft-rounded" colorScheme={"green"}>
          <TabList>
            <Tab fontSize={"xl"}>User</Tab>
            <Tab fontSize={"xl"}>Admin</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <UserLogin />
            </TabPanel>
            <TabPanel>
              <AdminLogin />
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Image w="25%" src="./login.png" />
      </Flex>
    </Box>
  );
}
