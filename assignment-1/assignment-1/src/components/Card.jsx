import React from "react";

const Card = ({ name, age, imageUrl }) => {
  return (
    <div className="border rounded-xl p-4 max-w-xs shadow-md bg-white hover:shadow-lg hover:scale-105 transition-transform duration-300">
      <img
        src={imageUrl}
        alt={`${name}'s profile`}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h2 className="text-xl font-semibold text-gray-800 text-center">
        {name}
      </h2>
      <h3 className="text-md text-gray-600 text-center">{age} years old</h3>
    </div>
    
  );
};

export default Card;
