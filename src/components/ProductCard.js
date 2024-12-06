import React from "react";
import Button from "./Button";

function ProductCard({ image, title, description }) {
  return (
    <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden md:max-w-md">
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={title}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="mt-4">
          <Button text="Buy Now" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
