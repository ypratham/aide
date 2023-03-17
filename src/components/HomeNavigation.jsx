import {
  Box,
  Flex,
  Image,
  List,
  Popover,
  PopoverBody,
  Stack,
  StackItem,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import HomeIcon from "../assets/home_icon.svg";
import HelpIcon from "../assets/help_icon.svg";
import ListIcon from "../assets/list_icon.svg";
import PhoneIcon from "../assets/phone_icon.svg";
import LocationIcon from "../assets/location_icon.svg";

const Route = [
  {
    id: 0,
    name: "Home",
    icon: HomeIcon,
    path: "/",
  },
  {
    id: 1,
    name: "Help",
    icon: HelpIcon,
    path: "/",
  },
  {
    id: 2,
    name: "List",
    icon: ListIcon,
    path: "/",
  },
  {
    id: 3,
    name: "Contact",
    icon: PhoneIcon,
    path: "/",
  },
  {
    id: 4,
    name: "Location",
    icon: LocationIcon,
    path: "/",
  },
  {
    id: 5,
    name: "Dashboard",
    icon: LocationIcon,
    path: "/dashboard/user",
  },
];

const NavigationItem = ({ src, name, path }) => {
  const { isControlled, isOpen, onClose, onOpen } = useDisclosure();

  const handleOnHoverIn = () => onOpen();

  const handleOnHoverOut = () => onClose();

  return (
    <StackItem onMouseEnter={handleOnHoverIn} onMouseOut={handleOnHoverOut}>
      <Tooltip label={name} placement={"left"}>
        <Link to={path}>
          <Image src={src} />
        </Link>
      </Tooltip>
    </StackItem>
  );
};

export default function HomeNavigation() {
  return (
    <Box display={"flex"} w="full" h="100vh" position={"fixed"}>
      <Flex
        // alignItems={"center"}
        justifyContent="center"
        as="nav"
        bg="aide.900"
        h="100vh"
        borderRightRadius={"2xl"}
        w={"80px"}
      >
        <Stack mt={"10"} gap="30">
          {Route.map((item, index) => (
            <NavigationItem
              key={item.id}
              name={item.name}
              src={item.icon}
              path={item.path}
            />
          ))}
        </Stack>
      </Flex>
      <Outlet />
    </Box>
  );
}
