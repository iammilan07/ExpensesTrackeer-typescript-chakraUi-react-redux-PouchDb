import { Box, Tab, Tabs, Text } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { BsBookmarkPlus } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box position="fixed" width="100%" left="0" bottom="-1">
      <Box
        // paddingLeft="85px"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          border="1px solid black"
          // borderRadius="10px"
          backgroundColor="white"
        >
          <Tabs
            justifyContent="space-between"
            width="100%"
            variant="soft-rounded"
            colorScheme="green"
            display="flex"
          >
            <Link to="/">
              <Tab fontSize="24px" flexDirection="column">
                <AiOutlineHome />
                <Text fontSize="xs">Home</Text>
              </Tab>
            </Link>
            <Link to="add-expense">
              <Tab fontSize="24px" flexDirection="column">
                <BsBookmarkPlus />
                <Text fontSize="xs">Add-Expense</Text>
              </Tab>
            </Link>
            <Link to="add-category">
              <Tab fontSize="24px" flexDirection="column">
                <MdAddShoppingCart />
                <Text fontSize="xs">Add-Category</Text>
              </Tab>
            </Link>
            <Link to="details">
              <Tab fontSize="24px" flexDirection="column">
                <BiCommentDetail />
                <Text fontSize="xs">Details</Text>
              </Tab>
            </Link>
          </Tabs>
        </Box>
      </Box>
      {/* <Box textAlign="center">
        <Text visibility="hidden">Made with ❤️ in Reactredux!!</Text>
      </Box> */}
    </Box>
  );
};

export default Footer;
