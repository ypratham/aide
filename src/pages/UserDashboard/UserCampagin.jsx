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
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import SearchIcon from "../../assets/search_icon.svg";
import { api } from "../../utils/api";
import { useUserContext } from "../../utils/userContext";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const UserCardsItem = ({ item }) => {
  const { isOpen, onClose, onToggle } = useDisclosure();

  const amountRef = useRef();

  const handleClick = async () => {
    const data = amountRef.current.value.toString();

    const result = await api.post("/capturerazorpay", {
      amount: data,
    });
    const { amount, order, currency } = result.data;

    const options = {
      key: "rzp_test_bJSKRt7KajCHxF",
      amount: amount.toString(),
      currency: "INR",
      name: "Soumya Corp.",
      description: "Test Transaction",
      order_id: order?.id,
      prefill: {
        name: "Soumya Dey",
        email: "SoumyaDey@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Soumya Dey Corporate Office",
      },
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        // console.log(response);
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <StackItem display={"flex"} w="full" borderRightRadius={"md"}>
        <Image src="../dummy.png" w="200px" />
        <Stack
          bg="white"
          p="4"
          justifyContent={"space-between"}
          alignItems="flex-start"
          w={"full"}
        >
          <Text fontSize={"2xl"} fontWeight="bold">
            {item.title}
          </Text>
          <Text fontSize={"md"}>{item.description}</Text>
          <Button bg="#35523F" onClick={onToggle} color="white" _hover={{}}>
            Donate
          </Button>

          <Drawer
            isOpen={isOpen}
            placement="right"
            size={"md"}
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>{item.title}</DrawerHeader>

              <DrawerBody>
                <Text mb="4">{item.description}</Text>
                <FormControl>
                  <FormLabel>Enter an amount</FormLabel>
                  <Input
                    ref={amountRef}
                    // onChange={(e) => setAmountByUser(e.target.value)}
                    type="number"
                    name="amount"
                    placeholder="Type here..."
                  />
                  <FormHelperText>
                    Enter an amount of your choice to donate.
                  </FormHelperText>
                </FormControl>
                <Button mt={"4"} onClick={() => handleClick()}>
                  Confirm
                </Button>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Stack>
      </StackItem>
    </>
  );
};

export default function UserHome() {
  const campaignData = useQuery(["@campaignData"], () => api.get("/list"), {
    refetchOnMount: true,
    refetchOnReconnect: true,
  });

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  }, []);

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
        <Stack flex="1" gap="4">
          <StackItem>
            <Text mb="5" fontSize={"xl"} fontWeight="bold">
              Campaigns
            </Text>
          </StackItem>

          <StackItem>
            {campaignData.isSuccess &&
              campaignData.data.data.data.data.length == 0 && (
                <Text>No data present for campaigns</Text>
              )}
          </StackItem>

          {campaignData.isSuccess &&
            campaignData.data.data.data.data.map((item, index) => (
              <UserCardsItem item={item} key={index} />
            ))}
        </Stack>

        <Box bg="white" p="4" h="full" w={"300px"}>
          <Text fontSize={"lg"} mb="3" fontWeight="bold">
            Recent Transaction
          </Text>
          <Stack>
            {[1, 1, 1, 1].map((item) => (
              <StackItem borderRadius={"md"} p="4" bg="blackAlpha.200">
                <Flex alignItems={"center"}>
                  <Text fontSize={"2xl"} color="aide.900" fontWeight={"bold"}>
                    -10
                  </Text>
                  <Text textAlign={"end"} w="full">
                    Debited
                  </Text>
                </Flex>
                <Flex mt="3">
                  <Text fontSize={"xs"} fontStyle="italic">
                    for Social welfare{" "}
                  </Text>
                </Flex>
              </StackItem>
            ))}
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}
