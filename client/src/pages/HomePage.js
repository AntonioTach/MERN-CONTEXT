import { useEffect } from "react";
import { usePosts } from "../context/postContext";

export function HomePage() {
  const { posts, getPosts } = usePosts();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="text-white">
      {posts.map(post => (
        <div key={post.id}>
          {post.title}
        </div>
      ))}
    </div>
  );
}
