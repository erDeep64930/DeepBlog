
import Header from './components/Header';
import Blog from './components/Blog';
import Pagination from './components/Pagination';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
const App = () => {
  const {fetchBlogPost} =useContext(AppContext);
 useEffect(()=>{
  fetchBlogPost()
 },[])
 
  return (
    <div className="h-screen w-screen  justify-center items-center p-4 ">
      <Header />
      <Blog />
      <Pagination />
    </div>
  )
}

export default App
