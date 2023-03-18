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
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import SearchIcon from "../../assets/search_icon.svg";
import CreateCampaign from "../../components/Models/CreateCampaign";
import { api } from "../../utils/api";
import { useUserContext } from "../../utils/userContext";

export default function AdminHome() {
  const { user } = useUserContext();

  const getAllAdminCampaign = useQuery(
    ["adminCampaign"],
    () => api.get(`/created/6414e1a8816d45448aca7dfc`),
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  useEffect(() => {
    console.log(getAllAdminCampaign);
  }, []);

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
      <Flex gap="10">
        <FormControl w={"max-content"}>
          <InputGroup w="max-content">
            <Input bg="white" placeholder="Search here for anything" />
            <InputRightAddon bg="white">
              <Image src={SearchIcon} />
            </InputRightAddon>
          </InputGroup>
        </FormControl>
        <CreateCampaign />
      </Flex>

      <Flex gap="10" mt="10" alignItems={"stretch"}>
        <Stack w="75%">
          <Text mb="5" fontSize={"xl"} fontWeight="bold">
            Campaigns
          </Text>
          {getAllAdminCampaign.isSuccess &&
            getAllAdminCampaign.data?.data?.data.map((item) => (
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
      </Flex>
    </Box>
  );
}
