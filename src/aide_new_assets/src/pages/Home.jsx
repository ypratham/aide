import {
  Box,
  Flex,
  Heading,
  Stack,
  StackItem,
  Text,
  Button,
  StackDivider,
  Divider,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
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

      <Flex
        flexDir={"row"}
        h="50vh"
        position="relative"
        as={"section"}
        mt="80px"
      >
        <Box
          bg="#323131"
          p="10"
          px="20"
          color={"white"}
          display="flex"
          flexDir={"column"}
          gap="4"
          alignItems={"start"}
          justifyContent="space-between"
          w="65%"
          left={0}
          height="280px"
          position="absolute"
          top={"40px"}
          zIndex={1}
        >
          <Text fontSize="3xl">Let’s make the world a better place </Text>
          <Text w={"70%"} fontSize="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
            sagittis sapien. Phasellus sodales blandit augue eget ullamcorper.
            Integer non nisi finibus, consequat justo eu, ullamcorper ante.{" "}
          </Text>
          <Link to={"/login"}>
            <Button bg="aide.700" fontSize="md" color={"white"} _hover={{}}>
              Donate Now
            </Button>
          </Link>
        </Box>

        <Box
          bg="#35523F"
          p="8"
          px="20"
          color={"white"}
          display="flex"
          flexDir={"column"}
          gap="4"
          alignItems={"end"}
          w="65%"
          position={"absolute"}
          right={0}
          top={0}
          zIndex={"0"}
          height="280px"
        >
          <Image src="https://i.ibb.co/G39XR6C/Rectangle-5.png" />
        </Box>
      </Flex>

      <Stack
        flexDir={"row"}
        justifyContent="space-between"
        px="32"
        position={"relative"}
        p="2"
      >
        <Box
          bg="rgba(230, 223, 191, 0.58)"
          position={"absolute"}
          zIndex={1}
          sx={{
            filter: "blur(10px)",
          }}
          w="full"
          h="full"
        />
        <Flex flexDir={"column"} w="sm" zIndex={2}>
          <Text
            fontFamily={"Inter"}
            fontWeight="bold"
            lineHeight={1}
            fontSize={"6xl"}
          >
            1000+
          </Text>
          <Text
            fontFamily={"Inter"}
            ml={"25%"}
            fontSize="xl"
            whiteSpace="nowrap"
            fontWeight={"bold"}
          >
            Fundraising events
          </Text>
        </Flex>
        <Box w="2px" h="120px" bg="rgba(162, 161, 157, 0.4)" />
        <Flex flexDir={"column"} w="sm" zIndex={2}>
          <Text
            fontWeight="bold"
            fontFamily={"Inter"}
            lineHeight={1}
            fontSize={"6xl"}
          >
            15 Lakh+
          </Text>
          <Text
            ml={"40%"}
            whiteSpace="nowrap"
            fontSize="xl"
            fontWeight={"bold"}
          >
            Funds raised
          </Text>
        </Flex>
        <Box w="2px" h="120px" bg="rgba(162, 161, 157, 0.4)" />
        <Flex flexDir={"column"} w="sm" zIndex={2}>
          <Text
            fontWeight="bold"
            fontFamily={"Inter"}
            lineHeight={1}
            fontSize={"6xl"}
          >
            48+
          </Text>
          <Text
            ml={"25%"}
            fontSize="xl"
            whiteSpace="nowrap"
            fontWeight={"bold"}
          >
            Countries reached
          </Text>
        </Flex>
      </Stack>

      {/* Upcoming Funraisrs */}

      <Box pos={"relative"}>
        <Box mt={"40px"} bg="aide.900" p="10 ">
          <Text color="white" fontSize={"3xl"}>
            Upcoming Fundraisers
          </Text>
          <Box
            mt="10"
            w="50%"
            bg="#D9D9D9"
            borderRadius={"md"}
            display="flex"
            gap="3"
            p="4"
          >
            <Box
              fontSize={"2xl"}
              borderRightWidth={2}
              borderColor="gray.400"
              fontWeight="bold"
              mr="3"
              p="5"
              fontFamily={"Inter"}
            >
              <Flex alignItems={"baseline"}>
                <Text fontSize={"2xl"}>24</Text>
                <Text fontSize={"md"}>th</Text>
              </Flex>
              <Text>March</Text>
            </Box>
            <Flex flexDir={"column"}>
              <Text fontWeight={"bold"} fontSize="xl">
                Nishith Desai Associates, Prestige Loka, G01, 7/1, Brunton Rd,
                Bengaluru, Karnataka, 560025
              </Text>
              <Text fontSize={"md"} mt="3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas id sagittis sapien. Phasellus sodales blandit augue
                eget ullamcorper. Integer non nisi finibus, consequat justo eu,
                ullamcorper ante.
              </Text>
            </Flex>
          </Box>
          <Button bg="aide.700" mt="3" color="white" _hover={{}}>
            View all events
          </Button>
        </Box>
      </Box>

      <Flex mt={"40px"} justifyContent="space-between">
        <Box w="50%">
          <Text fontSize={"3xl"} fontWeight={"bold"}>
            About Us
          </Text>
          <Text mt="10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
            sagittis sapien. Phasellus sodales blandit augue eget ullamcorper.
            Integer non nisi finibus, consequat justo eu, ullamcorper ante.
            Curabitur ac varius nisi. Vestibulum bibendum eros a nunc gravida,
            ac vestibulum nisi ullamcorper. Donec rutrum massa sed efficitur
            semper. Nam ultrices hendrerit risus at accumsan. Maecenas rutrum
            ultrices mi, at interdum justo rutrum sed. Donec faucibus est
            libero, ut scelerisque velit egestas ac. Pellentesque in consectetur
            sapien. Vivamus sit amet nunc at risus tempus suscipit et elementum
            lectus.
          </Text>
        </Box>

        <Box alignSelf={"center"}>
          <Image src="https://i.ibb.co/Y3yjH9q/Group-23.png" w={"full"} />
        </Box>
      </Flex>

      <Box as="footer"></Box>
    </Box>
  );
}
