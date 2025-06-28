import { useParams } from "react-router-dom";

// Mock post data
const posts = [
  { id: "1", title: "First Post", content: "Hello from post 1" },
  { id: "2", title: "Second Post", content: "More info in post 2" },
];

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) return <p>Post not found.</p>;

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
}
