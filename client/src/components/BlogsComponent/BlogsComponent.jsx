import { Box, Text, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";
import BlogCard from './BlogCard';
import useGetAllBlog from '../../hooks/useGetAllBlog';
import useBlogStore from "../../store/blogsStore";

const BlogsComponent = () => {
  const { isFetching } = useGetAllBlog();
  const blogs = useBlogStore((state) => state.blogs);

  const skeletons = Array(3).fill(0); 

  return (
    <Box>
      <Text p={2}>New Blogs here: </Text>
      <Box mt={"2em"} display={'flex'} alignItems={'start'} justifyContent={'space-evenly'} flexWrap={'wrap'}>
        {isFetching ? (
          skeletons.map((_, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" boxShadow="md" width="300px" m={2}>
              <Skeleton height="20px" width="80%" />
              <SkeletonText mt="4" noOfLines={4} spacing="4" />
            </Box>
          ))
        ) : (
          // Display blog cards once data is fetched
          blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))
        )}
      </Box>
    </Box>
  );
};

export default BlogsComponent;
