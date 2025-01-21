import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PreviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    productName,
    description,
    size,
    gender,
    price,
    stock,
    discount,
    category,
    images,
  } = location.state || {}; // Default to an empty object if no state

  // If no data found, show an error message
  if (!productName || !images) {
    return (
      <div className="text-center p-6">
        <h1 className="text-2xl text-red-500 font-bold">Error: Product data is missing!</h1>
        <p>Please navigate to this page from the product form.</p>
      </div>
    );
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Handle Save action
  const handleSave = () => {
    alert("Product saved successfully!");
    // You can add any save logic here, e.g., call an API to save the data.
  };

  // Handle Back navigation
  const handleBack = () => {
    navigate(-1); // This takes the user back to the previous page
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#f8f9fd] to-[#e9efff] p-8">
      <div className="container max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg">
        {/* Back and Save Buttons Positioned at the Top */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handleBack}
            className="px-6 py-3 text-lg font-semibold text-white bg-gray-500 hover:bg-gray-600 rounded-lg shadow-lg transition-all"
          >
            Back
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-3 text-lg font-semibold text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg shadow-lg transition-all"
          >
            Save
          </button>
        </div>

        {/* Main Layout - Image on the Left, Text on the Right */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-8 mb-8">

          {/* Product Image Section */}
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <div className="relative w-full h-[400px]">
              <img
                src={images[currentImageIndex]}
                alt={productName}
                className="w-full h-full object-contain rounded-lg shadow-lg transition-transform transform hover:scale-105 ease-in-out duration-300"
              />
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-3 rounded-full opacity-70 hover:opacity-100 transition-all"
              >
                &#x3c;
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-3 rounded-full opacity-70 hover:opacity-100 transition-all"
              >
                &#x3e;
              </button>
            </div>
            <div className="mt-4 flex justify-start space-x-4">
              {images.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`Thumbnail ${index}`}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-16 h-16 object-cover rounded-lg shadow-md cursor-pointer transition-all hover:opacity-75 ${
                    index === currentImageIndex ? "border-4 border-blue-500" : ""
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product Information Section */}
          <div className="lg:w-1/2 flex-1">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-3">{productName}</h1>
            <p className="text-lg text-gray-600 mb-5">{description}</p>

            <div className="space-y-3">
              <div className="flex justify-between text-gray-700">
                <p><strong>Category:</strong> {category}</p>
                <p><strong>Size:</strong> {size}</p>
              </div>
              <div className="flex justify-between text-gray-700">
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Stock:</strong> {stock}</p>
              </div>
              <div className="flex justify-between items-center text-gray-800">
                <p className="text-2xl font-bold">${price}</p>
                {discount && (
                  <span className="px-3 py-1 text-white bg-red-500 rounded-lg">{discount}</span>
                )}
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-6 flex gap-6">
              <button className="w-full lg:w-auto px-6 py-3 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg transition-all">
                Add to Cart
              </button>
              <button className="w-full lg:w-auto px-6 py-3 text-lg font-semibold text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transition-all">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
