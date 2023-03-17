import {
  Box,
  Flex,
  Image,
  List,
  Stack,
  StackItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import HomeIcon from "../assets/home_icon.svg";
import HelpIcon from "../assets/help_icon.svg";
import ListIcon from "../assets/list_icon.svg";
import PhoneIcon from "../assets/phone_icon.svg";
import LocationIcon from "../assets/location_icon.svg";

export default function HomeNavigation() {
  return (
    <Box display={"flex"} w="full" h="100vh" position={"fixed"}>
      <Flex
        // alignItems={"center"}
        justifyContent="center"
        as="nav"
        bg="aide.900"
        h="100vh"
        borderRightRadius={"2xl"}
        w={"100px"}
      >
        <Stack mt={"20"} gap="30">
          <StackItem>
            <Image src={HomeIcon} />
          </StackItem>
          <StackItem>
            <Image src={HelpIcon} />
          </StackItem>
          <StackItem>
            <Image src={ListIcon} />
          </StackItem>
          <StackItem>
            <Image src={PhoneIcon} />
          </StackItem>
          <StackItem>
            <Image src={LocationIcon} />
          </StackItem>
        </Stack>
      </Flex>
      <Outlet />
    </Box>
  );
}
