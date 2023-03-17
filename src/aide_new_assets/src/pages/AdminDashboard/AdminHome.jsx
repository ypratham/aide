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
} from "@chakra-ui/react";
import React from "react";
import SearchIcon from "../../../assets/search_icon.svg";

export default function AdminHome() {
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
        <Stack w="75%">
          <Text mb="5" fontSize={"xl"} fontWeight="bold">
            Campaigns
          </Text>
          {[1, 2, 3, 4, 5, 6, 7, 7, 7].map((item) => (
            <StackItem display={"flex"}>
              <Image src="../dummy.png" w="200px" />
              <Stack
                bg="white"
                p="4"
                justifyContent={"space-between"}
                alignItems="flex-start"
              >
                <Text fontSize={"2xl"} fontWeight="bold">
                  Proin eget tortor risus. Vivamus suscipit tortor eget felis
                  porttitor volutpat.
                </Text>
                <Text fontSize={"md"}>
                  Pellentesque in ipsum id orci porta dapibus. Vestibulum ac
                  diam sit amet quam vehicula elementum sed sit amet dui.
                  Vivamus suscipit tortor eget felis porttitor volutpat. Nulla
                  porttitor accumsan tincidunt.
                </Text>
                <Button bg="#35523F" color="white" _hover={{}}>
                  Donate
                </Button>
              </Stack>
            </StackItem>
          ))}
        </Stack>

        <Button bg="#35523F" color="white">
          Create a new Campaigns
        </Button>
      </Flex>
    </Box>
  );
}
