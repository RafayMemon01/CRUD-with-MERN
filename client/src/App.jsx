import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import axios from "axios";
import "./App.css";
import AddBlogComponent from "./components/AddBlogComponent/AddBlogComponent";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import BlogsComponent from "./components/BlogsComponent/BlogsComponent";

function App() {
  const [isBlogsAvailable, setIsBlogsAvailable] = useState(true);

  return (
    <>
      <AddBlogComponent/>
      {isBlogsAvailable?(
        <BlogsComponent/>
      ):(
        <Box minH={'50vh'} display={'flex'} alignItems={'center'} justifyContent={'center'} m={5}><Text>No Blogs Found😔</Text></Box>
      )}
    </>
  );
}

export default App;
