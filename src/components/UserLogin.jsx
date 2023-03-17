import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function UserLogin() {
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

  const onSubmit = (data) => {
    console.log("Form submitted", { data });
  };

  return (
    <Grid
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      templateColumns={"1fr 1fr"}
      w="50%"
      gap="5"
    >
      <FormControl>
        <FormLabel>First Name</FormLabel>
        <Input bg="white" {...register("firstName")} />
      </FormControl>
      <FormControl>
        <FormLabel>Last Name</FormLabel>
        <Input bg="white" {...register("secondName")} />
      </FormControl>

      <FormControl>
        <FormLabel>Email Id</FormLabel>
        <Input bg="white" {...register("emailId")} />
      </FormControl>

      <FormControl>
        <FormLabel>Country</FormLabel>
        <Input bg="white" {...register("country")} />
      </FormControl>

      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input bg="white" {...register("password")} />
      </FormControl>

      <FormControl>
        <FormLabel>Confirm Password</FormLabel>
        <Input bg="white" {...register("confirmPassword")} />
      </FormControl>

      <Button
        gridColumnStart={1}
        gridColumnEnd={3}
        bg="#35523F"
        color="white"
        w="max-content"
        _hover={{}}
      >
        Login
      </Button>

      <Flex>
        <Text>Don't have an account?</Text>
        <Text>
          <Link to="/signUp">Sign up!</Link>
        </Text>
      </Flex>
    </Grid>
  );
}
