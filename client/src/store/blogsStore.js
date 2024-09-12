import { create } from 'zustand';

const useBlogStore = create((set) => ({
  blogs: [],
  setBlogs: (blogs) => set({ blogs }),
  addBlog: (blog) => set((state) => ({ blogs: [...state.blogs, blog] })),
  deleteBlog: (id) => set((state) => ({ blogs: state.blogs.filter((blog) => blog._id !== id) })),
}));

export default useBlogStore;