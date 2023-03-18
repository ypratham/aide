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
  FormControl,
  FormLabel,
  Button,
  Input,
  Text,
  InputGroup,
  InputRightAddon,
  useToast,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsEyeSlash } from "react-icons/bs";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import AdminRegister from "../components/AdminRegister";
import UserRegister from "../components/UserRegister";
import { api } from "../utils/api";
import { useUserContext } from "../utils/userContext";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const toast = useToast();
  const navigate = useNavigate();
  const { setUser } = useUserContext();

  const [passwordType, setPasswordType] = useState("password");
  const login = useMutation(
    ["@login_user"],
    (data) => api.post("/login", data),
    {
      onSuccess: (data) => {
        toast({
          title: "Logged in",
          status: "success",
        });
        setUser(data.data.user);
        navigate("/");
      },
      onError: (error) => {
        toast({
          title: "Something went wrong!",
          status: "error",
        });
        console.log(error);
      },
    }
  );

  const handleOnSubmit = (data) => {
    login.mutate(data);
  };

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

      <Flex alignItems={"center"} justifyContent="space-around" mt="10">
        <Flex
          as="form"
          direction={"column"}
          w="30%  "
          alignItems={"start"}
          gap="6"
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          <Text fontSize={"4xl"} fontWeight="bold">
            Login{" "}
          </Text>
          <FormControl isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              bg="white"
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Required",
                },
              })}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                bg="white"
                type={passwordType}
                {...register("password", {
                  required: {
                    value: true,
                    message: "Required",
                  },
                })}
              />

              <InputRightAddon bg={"white"} w="max-content">
                <Button
                  onClick={() =>
                    setPasswordType((prev) =>
                      prev == "password" ? "text" : "password"
                    )
                  }
                  variant={"unstyled"}
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                >
                  <BsEyeSlash />
                </Button>
              </InputRightAddon>
            </InputGroup>
          </FormControl>
          <Flex gap="5px">
            <Text>Don't have an account ?</Text>
            <Link href="/register" textDecoration="underline">
              Register
            </Link>
          </Flex>
          <Button
            bg="#35523F"
            color="white"
            w="max-content"
            _hover={{}}
            type="submit"
          >
            Login
          </Button>
        </Flex>

        <Image w="50%" src="./login.png" />
      </Flex>
    </Box>
  );
}
