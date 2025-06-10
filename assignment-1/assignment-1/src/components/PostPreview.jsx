function PostPreview({ names, bio, avatar }) {
  return (
    <div className="w-full  shadow-md p-5 bg-white space-y-4 mt-12">
      <div className="flex items-start gap-4">
        <img
          src={avatar}
          alt={names}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{names}</h3>
          <p className="text-gray-700 text-sm">{bio}</p>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">
          Like
        </button>
        <button className="px-4 py-1 bg-gray-200 text-sm rounded hover:bg-gray-300 transition">
          Read More
        </button>
      </div>
    </div>
  );
}

export default PostPreview;
