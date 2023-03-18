import {
  Box,
  FormControl,
  Input,
  InputGroup,
  InputRightAddon,
  Image,
  Flex,
  StackItem,
  Text,
  Button,
  Stack,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import SearchIcon from "../../assets/search_icon.svg";
import { api } from "../../utils/api";

export default function UserHome() {
  return (
    <Box
      as="main"
      p="40px"
      px="60px"
      flex={1}
      h="100vh"
      bg="#E9E7DC"
      overflowX={"auto"}
    >
      <Box>
        <FormControl>
          <InputGroup w="max-content">
            <Input bg="white" placeholder="Search here for anything" />
            <InputRightAddon bg="white">
              <Image src={SearchIcon} />
            </InputRightAddon>
          </InputGroup>
        </FormControl>
      </Box>

      <Flex gap="10" mt="10" alignItems={"stretch"}>
        <Flex>
          <Box>
            <Flex>
              <Text>Total Funds Raised till now</Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
