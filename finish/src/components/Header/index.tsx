import React from "react";
import { Flex, Image } from "@chakra-ui/core";

import wrelloLogo from "images/wrello-logo.svg";

const Header: React.FC = () => {
  return (
    <Flex
      id="app-root"
      as="nav"
      align="center"
      backgroundColor="rgba(0,0,0,0.52)"
      color="gray.50"
      p={4}
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      maxHeight="40px"
      boxSizing="border-box"
    >
      <Image
        src={wrelloLogo}
        height="26px"
        alt="icon made by https://www.flaticon.com/authors/mynamepong"
      />
    </Flex>
  );
};

export default Header;
