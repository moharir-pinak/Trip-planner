import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 w-full">
      <div className="container mx-auto text-center">
        <h3 className="text-lg font-bold mb-2">AI Trip Planner</h3>
        <p className="mb-4">Your one-stop solution for planning amazing trips!</p>
        
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            Facebook
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            Twitter
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            Instagram
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            LinkedIn
          </a>
        </div>

        <div className="mb-4">
          <p>Contact Us: <a href="mailto:info@aitripplanner.com" className="underline">info@aitripplanner.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="underline">+1 (234) 567-890</a></p>
        </div>

        <div className="mb-4">
          <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a> | 
          <a href="/terms-of-service" className="hover:text-gray-400"> Terms of Service</a>
        </div>

        <p className="text-sm">&copy; {new Date().getFullYear()} AI Trip Planner. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;