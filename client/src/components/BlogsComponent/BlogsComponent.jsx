import { useState } from 'react';
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import BlogCard from './BlogCard';

const BlogsComponent = () => {
  return (
    <>
      <Box>
        <Text p={2}>New Blogs here: </Text>
        <Box mt={"2em"} display={'flex'} alignItems={'start'} justifyContent={'space-evenly'} flexWrap={'wrap'}>

        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        </Box>
      </Box>
    </>
  );
};

export default BlogsComponent;
