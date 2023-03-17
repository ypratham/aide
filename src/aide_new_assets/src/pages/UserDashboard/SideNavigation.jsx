import { Box, Heading, StackItem, Stack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import HomeIcon from "../../assets/home_icon.svg";
import HelpIcon from "../../assets/help_icon.svg";
import ListIcon from "../../assets/list_icon.svg";
import PhoneIcon from "../../assets/phone_icon.svg";

export default function SideNavigation() {
  return (
    <Box display={"flex"} w="full" h="100vh" position={"fixed"}>
      <Box
        as="nav"
        w="320px"
        bg="#35523F"
        p="3"
        color={"white"}
        fontFamily="Merryweahter"
      >
        <Heading fontSize="4xl">aide.</Heading>
        <Box width={"75%"} bg="#9DC08B" mt={"2"} h="4px" />

        <Stack mt="10" p="4" spacing={"10"}>
          <StackItem display={"flex"} gap="15px">
            <Image src={HomeIcon} />
            <Text fontWeight={"bold"} fontSize="md">
              Home
            </Text>
          </StackItem>

          <StackItem display={"flex"} gap="15px">
            <Image src={HelpIcon} />
            <Text>Help</Text>
          </StackItem>
        </Stack>
      </Box>
      <Outlet />
    </Box>
  );
}
