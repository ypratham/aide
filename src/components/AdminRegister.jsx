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
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api";
import { useUserContext } from "../utils/userContext";

export default function AdminRegister() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ministry: "",
      organization: "",
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

  const registerAdmin = useMutation(
    ["@register_admin"],
    (data) => api.post("/government/signup", data),
    {
      onSuccess: (data) => {
        toast({
          title: "Logged in",
          status: "success",
        });
        console.log(data.data.data);
        // navigate("/");
      },
      onError: (error) => {
        toast({
          title: "Error handling",
          status: "error",
        });
        console.log(error);
      },
    }
  );

  const onSubmit = (data) => {
    console.log("Form submitted", { data });
    registerAdmin.mutate({
      ...data,
      email: data.emailId,
    });
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
      <FormControl isInvalid={errors.ministry}>
        <FormLabel>Ministry</FormLabel>
        <Input
          bg="white"
          {...register("ministry", {
            required: {
              message: "Required",
              value: true,
            },
          })}
        />
        <FormErrorMessage>
          {errors.ministry && errors.ministry.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.organization}>
        <FormLabel>Organization</FormLabel>
        <Input
          bg="white"
          {...register("organization", {
            required: {
              message: "Required",
              value: true,
            },
          })}
        />
        <FormErrorMessage>
          {errors.organization && errors.organization.message}
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
