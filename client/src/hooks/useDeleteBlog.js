import axios from "axios";
import { useState } from "react"
import useBlogStore from "../store/blogsStore";
import useShowToast from "./useShowToast";

const useDeleteBlog = () => {
    const [isDeleting, setIsDeleting] = useState(false);
    const deleteBlogFromStore = useBlogStore((state)=>state.deleteBlog)
    const showToast = useShowToast()

    const deleteBlog = async (id)=>{
        if (isDeleting) return;
        try {
            setIsDeleting(true)
            const response = await axios.delete(`http://localhost:5050/blog/delete-post/${id}`)
            if (response.status === 200) {
                deleteBlogFromStore(id)
                showToast("Success", "Blog deleted successfully", "success")
            }
        } catch (error) {
            console.log(error)
            showToast("Error", "Something went wrong", "error")
        }
        
    }
    return {isDeleting, deleteBlog}
  
}

export default useDeleteBlog
