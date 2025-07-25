import { useParams } from "react-router-dom";

const posts = [
  { id: "1", title: "First Post", content: "Hello from post 1" },
  { id: "2", title: "Second Post", content: "More info in post 2" },
];

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-600">Post not found.</p>
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="bg-gray-100 p-6 rounded shadow-md max-w-xl w-full text-center">
        <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
        <p className="text-gray-700">{post.content}</p>
      </div>
    </div>
  );
}
