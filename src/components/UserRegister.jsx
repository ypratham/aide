import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Text,
  Link,
  InputGroup,
  InputRightAddon,
  FormHelperText,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsEyeSlash, BsEye, BsInfoCircle } from "react-icons/bs";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api";
import { useUserContext } from "../utils/userContext";

export default function UserRegister() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      secondName: "",
      emailId: "",
      password: "",
      confirmPassword: "",
      country: "",
    },
  });

  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const toast = useToast();
  const navigate = useNavigate();
  const { setUser } = useUserContext();

  const registerUser = useMutation(
    ["@user_register"],
    (data) => api.post("/signup", data),
    {
      onSuccess: (data) => {
        toast({
          title: "Registration Completed",
          status: "success",
        });
        setUser(data.data.user);
        window.localStorage.setItem("token", data.data.token);
        navigate("/");
      },
      onError: (error) => {
        console.log("An error occured");
        console.log(error);
      },
    }
  );

  const onSubmit = (data) => {
    const dataToSend = {
      ...data,
      name: `${data.firstName} ${data.secondName}`,
      email: data.emailId,
    };

    registerUser.mutate(dataToSend);
  };

  return (
    <Grid
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      templateColumns={"1fr 1fr"}
      gap="5"
      columnGap={10}
      mt="5"
    >
      <FormControl isInvalid={errors.firstName}>
        <FormLabel>First Name</FormLabel>
        <Input
          bg="white"
          {...register("firstName", {
            required: {
              message: "Required",
              value: true,
            },
          })}
        />
        <FormErrorMessage>
          {errors.firstName && errors.firstName.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.secondName}>
        <FormLabel>Last Name</FormLabel>
        <Input
          bg="white"
          {...register("secondName", {
            required: {
              message: "Required",
              value: true,
            },
          })}
        />
        <FormErrorMessage>
          {errors.secondName && errors.secondName.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.emailId}>
        <FormLabel>Email Id</FormLabel>
        <Input
          bg="white"
          type="email"
          {...register("emailId", {
            required: {
              message: "Required",
              value: true,
            },
          })}
        />
        <FormErrorMessage>
          {errors.emailId && errors.emailId.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.country}>
        <FormLabel>Country</FormLabel>
        <Input
          bg="white"
          {...register("country", {
            required: {
              message: "Required",
              value: true,
            },
          })}
        />
        <FormErrorMessage>
          {errors.secondName && errors.country.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.password}>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={passwordType}
            bg="white"
            {...register("password", {
              required: {
                message: "Required",
                value: true,
              },
              pattern: {
                message: "Not a strong password",
                value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
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
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>

        <FormHelperText>
          <Text>
            Password must be of atleast 8 character long and should contain
            minimum one upper case, lowercase, number and special characters
          </Text>
        </FormHelperText>
      </FormControl>

      <FormControl isInvalid={errors.confirmPassword}>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={confirmPasswordType}
            bg="white"
            {...register("confirmPassword", {
              required: {
                message: "Required",
                value: true,
              },
            })}
          />
          <InputRightAddon bg={"white"} w="max-content">
            <Button
              onClick={() =>
                setConfirmPasswordType((prev) =>
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
        <FormErrorMessage>
          {errors.confirmPassword && errors.confirmPassword.message}
        </FormErrorMessage>
      </FormControl>

      <Button
        gridColumnStart={1}
        gridColumnEnd={3}
        bg="#35523F"
        color="white"
        w="max-content"
        _hover={{}}
        type="submit"
      >
        Sign Up
      </Button>

      <Flex gap="2">
        <Text>Already have an account? </Text>
        <Text color="aide.900" fontWeight={"bold"}>
          <Link href="/login">Login</Link>
        </Text>
      </Flex>
    </Grid>
  );
}
