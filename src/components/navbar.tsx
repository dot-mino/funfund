import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
} from "@nextui-org/react";
import {
  useDisclosure,
} from "@nextui-org/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Navbar isBordered className="bg-navbar text-black">
      <NavbarContent justify="start">
        <NavbarBrand className="hidden md:block mr-4">
          <p className="sm:block font-bold text-black">FunFund</p>
        </NavbarBrand>
        <Input
          classNames={{
            base: "md:max-w-full  h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          type="search"
        />
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <NavbarItem>
          <ConnectButton
            showBalance={{
              smallScreen: false,
              largeScreen: true,
            }}
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
