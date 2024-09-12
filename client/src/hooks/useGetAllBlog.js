import React, { useEffect, useState } from "react";
import axios from "axios";
import useBlogStore from "../store/blogsStore";

const useGetAllBlog = () => {
  const [isFetching, setIsFetching] = useState(false);
  const setBlogs = useBlogStore((state) => state.setBlogs); // Get setBlogs from Zustand store

  useEffect(() => {
    const getAllBlog = async () => {
      try {
        setIsFetching(true);
        const res = await axios.get("http://localhost:5050/blog/feed");
        setBlogs(res.data); // Update Zustand store with fetched blogs
      } catch (error) {
        console.log(error);
      } finally {
        setIsFetching(false);
      }
    };

    getAllBlog(); 
  }, [setBlogs]); // Dependency array includes setBlogs

  // Zustand store state is managed globally, so you don't need to return blogs here
  return { isFetching }; 
};

export default useGetAllBlog;
