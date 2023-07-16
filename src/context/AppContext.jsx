import { createContext, useState } from "react";

import { baseUrl } from "../constant/baseUrl";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  // data flling pending via async

  async function fetchBlogPost(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const result = await fetch(url);
      console.log(url)
      const data = await result.json();
      console.log(data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPage(data.totalPages);
    } catch (error) {
      console.log("error in fetching data");
      setPage(1);
      setPosts([]);
      setTotalPage(null);
    }
    setLoading(false);
  }



  const handlePageChange =(page) => {
  setPage(page);
  fetchBlogPost(page);
};
  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPage,
    setTotalPage,
    fetchBlogPost,
    handlePageChange
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
