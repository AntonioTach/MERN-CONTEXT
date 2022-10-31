import { useState, createContext, useContext } from "react";
import { getPostRequest } from "../api/post";

const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await getPostRequest();
    setPosts(res.data);
  };

  return (
    <postContext.Provider
      value={{
        posts,
        getPosts
      }}
    >
      {children}
    </postContext.Provider>
  );
};
