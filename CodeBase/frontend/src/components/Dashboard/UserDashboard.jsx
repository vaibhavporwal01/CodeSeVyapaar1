import React from "react";
import Slider from "react-slick";
import Navbar from './user-components/userNavbar';
import image from './user-components/image.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UserDashboard = () => {
  const deals = [
    {
      title: "LEVEL UP YOUR GAME.",
      description: "Discover treasures at BidBuy - where bidding meets buying.",
      image: image, // Replace with your image paths
      price: "20000 only",
    },
    {
      title: "NEXT-GEN LAPTOP DEAL.",
      description: "Upgrade to the latest tech at unbeatable prices!",
      image: image, // Replace with your image paths
      price: "50000 only",
    },
    {
      title: "STYLISH SMARTPHONE.",
      description: "Sleek design and powerful performance in one device.",
      image: image, // Replace with your image paths
      price: "30000 only",
    },
  ];

  const products = [
    {
      name: "Vintage Camera",
      price: "Rs.120",
      brand: "SONY",
      timeLeft: "4d 20h",
      image: "https://shorturl.at/rUUF9",
    },
    {
      name: "Gramophone",
      price: "Rs.120",
      brand: "T-Series",
      timeLeft: "4d 20h",
      image: "https://shorturl.at/rUUF9",
    },
    {
      name: "Polaroid Camera",
      price: "Rs.120",
      brand: "SONY",
      timeLeft: "4d 20h",
      image: "https://shorturl.at/rUUF9",
    },
    {
      name: "Classic Shoes",
      price: "Rs.120",
      brand: "REDTAPE",
      timeLeft: "4d 20h",
      image: "https://shorturl.at/rUUF9",
    },
    {
      name: "Vintage Car",
      price: "Rs.120",
      brand: "NESTLE",
      timeLeft: "4d 20h",
      image: "https://shorturl.at/rUUF9",
    },
    {
      name: "Headphones",
      price: "Rs.120",
      brand: "BOAT",
      timeLeft: "4d 20h",
      image: "https://shorturl.at/rUUF9",
    },
    {
      name: "Sunglasses",
      price: "Rs.120",
      brand: "FASTTRACK",
      timeLeft: "4d 20h",
      image: "https://shorturl.at/rUUF9",
    },
    {
      name: "Wrist Watch",
      price: "Rs.120",
      brand: "CASIO",
      timeLeft: "4d 20h",
      image: "https://shorturl.at/rUUF9",
    },
  ];
  const categories = [
    { name: "HeadPhones", icon: "🎧" },
    { name: "Gaming", icon: "🎮" },
    { name: "Computers", icon: "💻" },
    { name: "Phones", icon: "📱" },
    { name: "Camera", icon: "📷" },
    { name: "SmartWatch", icon: "⌚" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="user-dashboard min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Slideshow Section */}
      <div className="mb-8">
        <Slider {...sliderSettings}>
          {deals.map((deal, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold">{deal.title}</h3>
                  <p className="text-gray-600">{deal.description}</p>
                  <div className="text-blue-500 font-bold mt-4">{deal.price}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Products Grid Section */}
      <div className="p-4">
        {/* Grid content for products */}
        <h2 className="text-2xl font-bold mb-6 text-center">Available Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-500">({product.brand})</p>
                <p className="text-blue-500 font-bold">{product.price}</p>
                <p className="text-gray-500 text-sm">Time left: {product.timeLeft}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            View All
          </button>
        </div>      </div>

      {/* Categories Section */}
      <div className="p-4">
        <h2 className="text-2xl font-bold text-center mb-6">BROWSE BY CATEGORIES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-pink-50 flex flex-col items-center justify-center p-6 rounded-lg shadow-lg"
            >
              <div className="bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl">
                {category.icon}
              </div>
              <p className="mt-4 text-lg font-semibold">{category.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter and Footer Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-lg text-center my-6">
        <h2 className="text-2xl font-bold mb-4">
          STAY UP TO DATE ABOUT OUR LATEST DEALS
        </h2>
        <form className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-3 rounded-md w-full max-w-lg sm:w-64"
          />
          <button className="bg-white text-blue-500 px-6 py-2 rounded-md">
            Subscribe to Newsletter
          </button>
        </form>
      </div>

      <footer className="bg-white mt-4 shadow-lg">
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold mb-3">Company</h3>
            <ul>
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Help</h3>
            <ul>
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">FAQ</h3>
            <ul>
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Resources</h3>
            <ul>
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How-to Blog</li>
              <li>YouTube Playlist</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 py-4">
          BidBuy © 2000-2023, All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default UserDashboard;