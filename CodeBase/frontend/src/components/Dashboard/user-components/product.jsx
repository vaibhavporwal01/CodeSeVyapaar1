import React, { useState } from "react";
import UserNavbar from './userNavbar';
import BreadCrumb from './Breadcrumb';

const product = () => {
    const [showBidModal, setShowBidModal] = useState(false);

  const handleBuyNowClick = () => {
    setShowBidModal(true);
  };

  const closeBidModal = () => {
    setShowBidModal(false);
  };
  return (
    <div className="user-dashboard min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <UserNavbar />
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <BreadCrumb />

        {/* Product Detail Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
          {/* Image Section */}
          <div className="flex flex-col items-center">
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <img
                src="/path-to-your-image.png"
                alt="Product Image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex mt-4 gap-2">
              {/* Thumbnail Images */}
              <img
                src="/path-to-thumbnail1.png"
                alt="Thumbnail 1"
                className="w-16 h-16 object-cover rounded-lg border"
              />
              <img
                src="/path-to-thumbnail2.png"
                alt="Thumbnail 2"
                className="w-16 h-16 object-cover rounded-lg border"
              />
              <img
                src="/path-to-thumbnail3.png"
                alt="Thumbnail 3"
                className="w-16 h-16 object-cover rounded-lg border"
              />
            </div>
          </div>

          {/* Product Info Section */}
          <div className="flex flex-col justify-between">
            <h1 className="text-3xl font-bold">XYZ Product</h1>
            <p className="text-red-500 text-lg mt-2">Time left: 4h 20m (Sat, 23:59 PM)</p>
            <p className="text-2xl font-bold mt-4">R$ 192,00</p>
            <p className="mt-4 text-gray-600">
              PlayStation 5 Controller Skin: High-quality vinyl with air channel adhesive for easy bubble-free install & mess-free removal. Pressure sensitive, free install & mess-free removal. Pressure sensitive.
            </p>

            {/* Buttons */}
            <div className="flex mt-6 gap-4">
                <button onClick={handleBuyNowClick} className="px-6 py-3 bg-red-500 text-white rounded-md">Buy Now</button>
                <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-md">Add to Cart</button>
            </div>

            {/* Shipping & Delivery */}
            <div className="mt-8">
              <div className="flex items-center gap-4">
                <span className="material-icons text-gray-500">local_shipping</span>
                <p>Shipping: No extra charge</p>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <span className="material-icons text-gray-500">schedule</span>
                <p>Delivery: Estimated between Thu, Jan 4 and Fri, Jan 10</p>
              </div>
            </div>
          </div>
        </div>
        {/* About This Item Section */}
        <div className="bg-white p-6 rounded-lg shadow-md my-6">
          <h2 className="text-2xl font-bold mb-4">About this item</h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur. Vestibulum purus aliquam purus vel sed. Eu ornare enim tincidunt hendrerit libero commodo vitae netus magnis. Id at eget est id velit non in nulla tincidunt. Ultrices neque ac adipiscing.
          </p>
          <p className="text-gray-700 mb-4">
            Ugait leo scelerisque volutpat posuere. Habitant pellentesque posuere et nunc. Amet erat nibh scelerisque proin sollicitudin nisl vitae. Pretium eget auctor velit commodo blandit lacus adipiscing. Mollis tristique orci varius urna integer egestas sagittis. Mauris lacus diam feugiat gravida aliquam lobortis viverra.
          </p>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur. Vestibulum purus aliquam purus vel sed. Eu ornare enim tincidunt hendrerit libero commodo vitae netus magnis. Id at eget est id velit non in nulla tincidunt. Ultrices neque ac adipiscing turpis nunc orci fringilla tristique.
          </p>

          {/* User Info Section */}
          <div className="flex items-center mt-6 gap-4">
            <img
              src="/path-to-user-avatar.png"
              alt="User Avatar"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-bold">User Name</h3>
              <p className="text-sm text-gray-500">(150 Reviews)</p>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet consectetur. Augue quis justo amet tristique nibh. Elementum risus sem ultrices sed id. Quam enim sem eu egestas sit odio ut auctor nunc ultricies.
              </p>
            </div>
            <div className="ml-auto">
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md mb-2">
                Other products
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
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

      {/* Footer */}
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
      {showBidModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-96 relative">
            <button onClick={closeBidModal} className="absolute top-2 right-2 text-gray-500">&times;</button>
            <h2 className="text-lg font-bold mb-4">Place your bid</h2>
            <p className="text-gray-500 mb-4">(3 bids) Time left: 4d 20h (Sat, 02:39 PM)</p>
            <div className="flex gap-4 mb-4">
              <button className="px-4 py-2 bg-red-500 text-white rounded-md">Bid PKR 1000</button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-md">Bid PKR 1300</button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-md">Bid PKR 1600</button>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Your max bid</label>
              <input type="number" className="w-full p-2 border rounded-md" placeholder="Enter PKR 1000 or more" />
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-md">Place bid</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default product;
