import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import '../../index.css'
import useDeleteBlog from '../../hooks/useDeleteBlog'

const BlogCard = ({blog}) => {

const {deleteBlog,isDeleting} = useDeleteBlog()

  const handleDelete = async (id) => {

    if(isDeleting) return
    try {
      await deleteBlog(id)
      
    } catch (error) {
      console.log(error);
    }

  }
  const handleEdit = (id) => {
    console.log(id);
  }
  return (
    <Box display={'flex'} flexDirection={'column'} gap={4} borderRadius={'10px'} boxShadow={'dark-lg'} bg={'gray.200'} p={2} width={{base:"80%",md:"400px"}} mx={3} my={2}>
        <Flex flexWrap={'wrap'} justifyContent={'space-between'}>

      <Text display={'flex'} gap={1} fontSize={"12px"}><Text fontSize={'12px'} fontWeight={'bold'}>Author: </Text>{blog?.author}</Text>
      <Text display={'flex'} gap={1} fontSize={"12px"}><Text fontSize={'12px'} fontWeight={'bold'}>Date: </Text>{blog?.date}</Text>
        </Flex>
      <Text display={'flex'} alignItems={'start'} gap={1} fontSize={"14px"}><Text fontSize={'14px'} fontWeight={'bold'}>Title: </Text>{blog?.title}</Text>
      <Text h={'100px'} overflowY={'auto'} gap={1} fontSize={"14px"}>{blog?.content}</Text>
      <Box display={'flex'} justifyContent={'end'} gap={2}>
        <Button onClick={()=>handleEdit(blog?._id)} _hover={'none'} bgColor='black' size={'sm'} color={'white'}>Edit</Button>
        <Button isLoading={isDeleting} onClick={()=>handleDelete(blog?._id)} _hover={'none'} bgColor={'red'} size={'sm'} color={'white'}>Delete</Button>
      </Box>
    </Box>
  )
}

export default BlogCard
