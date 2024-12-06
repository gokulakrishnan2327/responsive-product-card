import React from "react";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ProductCard
        image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Ffresh-apple-fruit-19835557748.html&psig=AOvVaw0FJE-gIApdF7bN5IeY-pSk&ust=1733557212311000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJiLtITSkooDFQAAAAAdAAAAABAE"
        title="Sample Product"
        description="This is a great product that you will love!"
      />
    </div>
  );
}

export default App;
