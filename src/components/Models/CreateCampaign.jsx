import React from "react";
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
  Grid,
  FormLabel,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { api } from "../../utils/api";

export default function CreateCampaign() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      fundsToBeRaised: "",
      country: "",
      cause: "",
      segregationOfAmount: "",
    },
  });

  const toast = useToast();

  const createCampaign = useMutation(
    ["@createCampaign"],
    (data) => api.post("/admin/users/campaign", data),
    {
      onSuccess: (data) => {
        toast({
          title: "New campaign created",
          status: "success",
        });
      },
      onError: (error) => {
        toast({
          title: "Something went wrong!",
          status: "error",
        });
      },
    }
  );

  const handleOnSubmit = (data) => {
    createCampaign.mutate({
      ...data,
      createdBy: user._id,
      segregationOfAmount: {
        organizationName: "Dummy",
        organizationCode: "DM",
        rate: data.segregationOfAmount,
      },
    });
  };

  return (
    <>
      <Button bg="#35523F" _hover={{}} color="white" onClick={onOpen}>
        Create a new Campaigns
      </Button>
      <Drawer isOpen={isOpen} placement="right" size={"lg"} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create a new campaign</DrawerHeader>

          <DrawerBody>
            <Flex
              as="form"
              alignItems={"start"}
              flexDirection={"column"}
              gap="5 "
              flexWrap={"wrap"}
              onSubmit={handleSubmit(handleOnSubmit)}
            >
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  {...register("title", {
                    required: {
                      value: true,
                      message: "Required",
                    },
                  })}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Required",
                    },
                  })}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Funds to be raised</FormLabel>
                <Input
                  type="number"
                  {...register("fundsToBeRaised", {
                    required: {
                      value: true,
                      message: "Required",
                    },
                  })}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Country</FormLabel>
                <Input
                  type="text"
                  {...register("country", {
                    required: {
                      value: true,
                      message: "Required",
                    },
                  })}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Cause</FormLabel>
                <Input
                  type="text"
                  {...register("cause", {
                    required: {
                      value: true,
                      message: "Required",
                    },
                  })}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Segregation of amount (will be in %)</FormLabel>
                <Input
                  type="text"
                  {...register("segregationOfAmount", {
                    required: {
                      value: true,
                      message: "Required",
                    },
                  })}
                />
              </FormControl>

              <Button type="submit" color="white" _hover={{}} bg="#35523F">
                Create
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
