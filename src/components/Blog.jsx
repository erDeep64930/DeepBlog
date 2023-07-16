import { useContext } from "react";
import { AppContext } from "./../context/AppContext";
import Spinner from "./Spinner";
// import Card from './Card';

const Blog = () => {
  // consume
  const { loading, posts } = useContext(AppContext);
  return (
    <div className="w-11/12  flex flex-col justify-center items-center max-w-[650px] mx-auto py-4 mt-2 mb-2 ">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>No post Found</div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className="text-2xl text-amber-500 font-medium">{post.title}</p>
            <p className="text-xl font-medium">
              By-<span className="italic">{post.author}</span> on-<span>{post.category}</span>
            </p>
            <p>
              Posted on <span>{post.date}</span>
            </p>
            <p>{post.content}</p>
            <div>
              {post.tags.map((tag, index) => {
                return <span key={index} className="text-blue-500 underline cursor-pointer">{`#${tag}`}</span>;
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;
