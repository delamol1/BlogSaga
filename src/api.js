import axios from "axios";

export default {
  posts: {
    getAllPosts: () => axios.get("https://simple-blog-api.crew.red/posts"),
    getPost: ({ id = "" }) =>
      axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`),
    leaveComment: (data = { postId: "", body: "" }) =>
      axios.post(`https://simple-blog-api.crew.red/comments`, data),
    deletePost: ({ id = "" }) =>
      axios.delete(`https://simple-blog-api.crew.red/posts/${id}`),
    createPost: (data = { title: "", body: "" }) =>
      axios.post("https://simple-blog-api.crew.red/posts", data),
    updatePost: (data = { title: "", body: "" }, id = "") =>
      axios.put(`https://simple-blog-api.crew.red/posts/${id}`, data)
  }
};
