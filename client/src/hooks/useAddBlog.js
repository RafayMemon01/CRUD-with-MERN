import { useState } from "react";
import axios from "axios";
import useShowToast from "./useShowToast";
import useBlogStore from "../store/blogsStore";

const useAddBlog = () => {
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const showToast = useShowToast();
  const addBlogToStore = useBlogStore((state)=>state.addBlog)

  const addBlog = async (title, content, author) => {
    try {
      setIsPosting(true);
      setError(null);
      const res = await axios.post("http://localhost:5050/blog/add-post", {
        title,
        content,
        author,
      });
      setResponse(res.data);
      addBlogToStore(res.data)
      showToast("Success", "Blog created successfully", "success");

    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      setIsPosting(false);
    }
  };

  return { isPosting, addBlog, error, response };
};

export default useAddBlog;
