import React from "react";

function Button({ text }) {
  return (
    <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
      {text}
    </button>
  );
}

export default Button;
