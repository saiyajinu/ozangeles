import { useEffect } from "react"

const Posts = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.defer = true
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 to-[#fed9bc]">
      <div className="sectiontitle">Instagram</div>
      <div className="flex justify-center mt-20">
        <div className="elfsight-app-f1eeb4f5-125f-4c5d-a3da-e815cca5616b"></div>
      </div>
    </section>
    
    
  )
}

export default Posts