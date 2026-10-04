import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { authFetch } from "../services/api";

export function SavedPosts() {
  const [posts, setPosts] = useState([]);
  const savedPosts = posts.filter((p) => p.isSaved);

  useEffect(() => {
    authFetch(`${API_URL}/posts`)
      .then((response) => response.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4 ">
      <h1 className="text-lg text-gray-700 font-bold mb-4">Recent Posts</h1>
      {savedPosts.map((post) => (
        <PostCard
          id={post._id}
          key={post._id}
          author={post.author}
          title={post.title}
          description={post.body}
          imageUrl={post.imageUrl}
          showDetailsLink={true}
          likeCounts={post.likesCount}
          initialIsLiked={post.isLiked}
          initialIsSaved={post.isSaved}
        />
      ))}
    </div>
  );
}
