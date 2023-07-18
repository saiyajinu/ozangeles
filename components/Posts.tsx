import React, { useEffect } from 'react';

const Post = () => {
  useEffect(() => {
    // Load the Instagram embed script when the component mounts
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="mx-auto max-w-2xl">
      {/* Replace the inline styles with Tailwind CSS classes */}
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/p/Cu1pzrKI_VH/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version="14"
      >
        {/* Your Instagram post content */}
        {/* ... */}
      </blockquote>
    </div>
  );
};

export default Post;