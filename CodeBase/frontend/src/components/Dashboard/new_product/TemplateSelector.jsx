import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TemplateForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    size: "M",
    gender: "Unisex",
    price: "",
    stock: "",
    discount: "",
    category: "Jacket",
    images: [],
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
    setFormData((prev) => ({ ...prev, images: [...prev.images, ...files] }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    alert("Product added successfully!");
  };

  const handleNavigateCustom = () => {
    navigate("/custom-template");
  };

  const handlePreview = () => {
    navigate("/preview", { state: formData });
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#f8f9fd] to-[#e9efff] p-8">
      {/* Header Section */}
      <header className="flex justify-between items-center bg-white p-6 rounded-xl shadow-lg mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Add New Product</h1>
        <div className="flex gap-4">
          <button
            onClick={() => alert("Draft saved!")}
            className="px-6 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full shadow transition-transform duration-300"
          >
            Save Draft
          </button>
          <button
            onClick={handlePreview}
            className="px-6 py-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded-full shadow transition-transform duration-300"
          >
            Preview
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 text-white bg-green-500 hover:bg-green-600 rounded-full shadow transition-transform duration-300"
          >
            Add Product
          </button>
          {/* Go to Custom Template Button */}
          <button
            onClick={handleNavigateCustom}
            className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-full shadow transition-transform duration-300"
          >
            Go to Custom Template
          </button>
        </div>
      </header>

      {/* Form Content */}
      <div className="grid grid-cols-2 gap-8">
        {/* General Information */}
        <section className="p-6 bg-white rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">General Information</h2>
          <div className="space-y-5">
            <div>
              <label className="block text-gray-600 text-sm mb-2">Name Product</label>
              <input
                type="text"
                placeholder="Puffer Jacket"
                value={formData.productName}
                onChange={(e) => handleInputChange("productName", e.target.value)}
                className="w-full px-4 py-3 text-gray-700 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-2">Description Product</label>
              <textarea
                placeholder="Write the product description..."
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                className="w-full px-4 py-3 text-gray-700 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300"
              ></textarea>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-600 text-sm mb-2">Size</label>
                <select
                  value={formData.size}
                  onChange={(e) => handleInputChange("size", e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300"
                >
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-gray-600 text-sm mb-2">Gender</label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Men"
                      checked={formData.gender === "Men"}
                      onChange={(e) => handleInputChange("gender", e.target.value)}
                      className="text-blue-500 focus:ring-2 focus:ring-blue-300 mr-2"
                    />
                    Men
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Women"
                      checked={formData.gender === "Women"}
                      onChange={(e) => handleInputChange("gender", e.target.value)}
                      className="text-blue-500 focus:ring-2 focus:ring-blue-300 mr-2"
                    />
                    Women
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Unisex"
                      checked={formData.gender === "Unisex"}
                      onChange={(e) => handleInputChange("gender", e.target.value)}
                      className="text-blue-500 focus:ring-2 focus:ring-blue-300 mr-2"
                    />
                    Unisex
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing and Stock */}
        <section className="p-6 bg-white rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Pricing & Stock</h2>
          <div className="space-y-5">
            <div>
              <label className="block text-gray-600 text-sm mb-2">Price</label>
              <input
                type="number"
                placeholder="$ 0.00"
                value={formData.price}
                onChange={(e) => handleInputChange("price", e.target.value)}
                className="w-full px-4 py-3 text-gray-700 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-2">Stock</label>
              <input
                type="number"
                placeholder="Enter stock quantity"
                value={formData.stock}
                onChange={(e) => handleInputChange("stock", e.target.value)}
                className="w-full px-4 py-3 text-gray-700 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-2">Discount</label>
              <input
                type="text"
                placeholder="e.g., 10% off"
                value={formData.discount}
                onChange={(e) => handleInputChange("discount", e.target.value)}
                className="w-full px-4 py-3 text-gray-700 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300"
              />
            </div>
            {/* File Upload */}
            <div>
              <label className="block text-gray-600 text-sm mb-2">Upload Image</label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                className="block w-full text-gray-700 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300"
              />
              <div className="mt-4 grid grid-cols-3 gap-4">
                {formData.images.map((imgSrc, index) => (
                  <img
                    key={index}
                    src={imgSrc}
                    alt="Preview"
                    className="w-full h-20 object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TemplateForm;
