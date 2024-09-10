import { Box, Button, FormControl, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Textarea, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import BlogForm from './BlogForm'

const AddBlogComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
     <Box display={'flex'} gap={5} p={3} alignItems={'center'} justifyContent={{base:"center",sm:"space-between"}} flexWrap={"wrap"}>
        What is in your mind click here to add a blog
        <Button
          bg={"blue.400"}
          color={"white"}
          size="sm"
          _hover={{ bg: "blue.500" }}
          onClick={onOpen}
        >
          Start Writing..
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <BlogForm />
          </ModalBody>

          
        </ModalContent>
      </Modal> 
    </>
  )
}

export default AddBlogComponent
