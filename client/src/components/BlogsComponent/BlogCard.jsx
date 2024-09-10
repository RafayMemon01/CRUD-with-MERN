import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import '../../index.css'

const BlogCard = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={4} borderRadius={'10px'} boxShadow={'dark-lg'} bg={'gray.200'} p={2} width={{base:"80%",md:"400px"}} mx={3} my={2}>
        <Flex flexWrap={'wrap'} justifyContent={'space-between'}>

      <Text display={'flex'} gap={1} fontSize={"12px"}><Text fontSize={'12px'} fontWeight={'bold'}>Author: </Text>Rafay</Text>
      <Text display={'flex'} gap={1} fontSize={"12px"}><Text fontSize={'12px'} fontWeight={'bold'}>Date: </Text>1-Jan-2024</Text>
        </Flex>
      <Text display={'flex'} alignItems={'start'} gap={1} fontSize={"14px"}><Text fontSize={'14px'} fontWeight={'bold'}>Title: </Text>Apple loses fight against $14.4 billion EU tax order to Ireland</Text>
      <Text h={'100px'} overflowY={'auto'} gap={1} fontSize={"14px"}>Apple on Tuesday lost its fight against an order by EU competition regulators to pay 13 billion euros ($14.4 billion) in back taxes to Ireland as part of an EU crackdown against sweetheart deals between EU countries and multinationals. multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.multinationals.</Text>
    </Box>
  )
}

export default BlogCard
