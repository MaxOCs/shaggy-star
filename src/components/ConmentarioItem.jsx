import React from "react";

const ComentarioItem = ({ user, comentario, created_at, reviews = 0, rating = 5 }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex md:flex-row gap-4 items-start">
      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold">
        {user.charAt(0).toUpperCase()}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{user}</h3>
        <p className="text-gray-500 text-sm">{reviews} reseñas • {new Date(created_at).toLocaleDateString()}</p>
        <div className="flex text-yellow-400 my-1">
          {[...Array(rating)].map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
        <p className="text-gray-700 mt-2">{comentario}</p>
      </div>
    </div>
  );
};

export default ComentarioItem;