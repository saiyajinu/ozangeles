const Footer = () => {
    return (
      <footer className="bg-black py-6">
        
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <ul className="flex space-x-6 text-white">
              <li>
                <a href="#" className="">
                  Acasă
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Ozangeles. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 flex justify-center mt-1">
              Made by saiyajinu
              <a href="https://www.github.com/saiyajinu" target="_blank">
                <img 
                src="/assets/images/githublogo.svg" 
                alt="gitlogo"
                className="w-[20px] ml-2"
                />
              </a>
              
            </p>
            
          </div>
        </div>
        
      </footer>
    );
  };
  
  export default Footer;
  