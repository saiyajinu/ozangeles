const Footer = () => {
    return (
      <footer className="bg-black py-8 m">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-white hover:text-primary-100">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-primary-100">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Ozangeles. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  