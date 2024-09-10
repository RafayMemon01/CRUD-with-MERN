import { Box, Button, FormControl, FormLabel, Heading, Input, Textarea } from '@chakra-ui/react'
import React from 'react'

const BlogForm = () => {
  return (
    <div>
      <Box gap={2} display={"flex"} flexDirection={"column"} justifyContent={'space-between'} alignItems={'center'} >
        <Heading  lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Create A Blog Post
        </Heading>
        <FormControl  gap={2} display={"flex"} flexDirection={"column"} justifyContent={'space-between'} width={"100%"}>
          <FormLabel fontSize={"sm"}>Title:</FormLabel>
          <Input placeholder={"write a blog title"} size={"sm"} type={"text"} />
          <FormLabel fontSize={"sm"}>Description:</FormLabel>
          <Textarea
          resize={'none'}
            placeholder={"content..."}
            size={"sm"}
            type={"text"}
          ></Textarea>
          <FormLabel fontSize={"sm"}>Author:</FormLabel>
          <Input placeholder={"author"} size={"sm"} type={"text"} />
          <Box>
          <Button
                    bg={"blue.400"}
                    color={"white"}
                    size="sm"
                    w="full"
                    _hover={{ bg: "blue.500" }}
                  >
                    Submit
                  </Button>
          </Box>
        </FormControl>
      </Box>
    </div>
  )
}

export default BlogForm
