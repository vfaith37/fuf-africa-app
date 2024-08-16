import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto text-center">
        <h3 className="text-lg mb-4">Subscribe to our newsletter</h3>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 rounded-l-md text-gray-900"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md">Subscribe</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
