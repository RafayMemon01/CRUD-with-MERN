import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import useAddBlog from "../../hooks/useAddBlog";

const BlogForm = () => {
  const { addBlog, isPosting } = useAddBlog();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmitForm = async () => {
    if (isPosting) return;
    try {
      if (!title || !description || !author) {
        alert("All fields are required");
        return;
      }
      await addBlog(title, description, author);
      setTitle("")
      setDescription("")
      setAuthor("")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Box
        gap={2}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Create A Blog Post
        </Heading>
        <FormControl
          gap={2}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <FormLabel fontSize={"sm"}>Title:</FormLabel>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={"write a blog title"}
            size={"sm"}
            type={"text"}
          />
          <FormLabel fontSize={"sm"}>Description:</FormLabel>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            resize={"none"}
            placeholder={"content..."}
            size={"sm"}
            type={"text"}
          ></Textarea>
          <FormLabel fontSize={"sm"}>Author:</FormLabel>
          <Input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder={"author"}
            size={"sm"}
            type={"text"}
          />
          <Box>
            <Button
              bg={"blue.400"}
              color={"white"}
              size="sm"
              w="full"
              _hover={{ bg: "blue.500" }}
              isLoading={isPosting}
              onClick={handleSubmitForm}
            >
              Submit
            </Button>
          </Box>
        </FormControl>
      </Box>
    </div>
  );
};

export default BlogForm;
