function Footer() {
  return (
    <footer className="w-full bg-gray-50 text-gray-700 py-30 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Gossipers. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-500 text-sm">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-500 text-sm">
            Terms of Service
          </a>
          <a href="#" className="hover:text-blue-500 text-sm">
            Contact
          </a>
          <a href="#" className="hover:text-blue-500 text-sm">
            About Us
          </a>
          <a href="#" className="hover:text-blue-500 text-sm">
            Blog
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
