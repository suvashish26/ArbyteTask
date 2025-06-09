function PostPreview({ names, bio, avatar }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 max-w-3xl mx-auto">
      <div className="flex items-center mb-4">
        <img
          src={avatar}
          alt="avatar"
          className="w-12 h-12 rounded-full mr-4 border"
        />
        <h2 className="text-lg font-semibold">{names}</h2>
      </div>
      <p className="text-gray-700 text-sm mb-4 text-left">{bio}</p>
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Like
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
          Read More
        </button>
      </div>
    </div>
  );
}

export default PostPreview;
