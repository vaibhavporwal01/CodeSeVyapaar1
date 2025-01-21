import React from "react";

const Breadcrumb = () => {
  return (
    <div className="text-gray-600 text-sm mb-4">
      <span className="mr-2">
        <a href="/" className="hover:underline">
          Home
        </a>
      </span>
      <span className="mx-2"> &gt; </span>
      <span>Ongoing Auctions</span>
    </div>
  );
};

export default Breadcrumb;
