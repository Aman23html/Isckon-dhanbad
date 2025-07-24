import React, { useState } from 'react';

const SocialMedia = () => {
  const [activeTab, setActiveTab] = useState('instagram');

  const content = {
    instagram: {
      img: '/SocialMedia/insta.png',
      link: 'https://instagram.com/iskcondhanbadofficial',
    },
    facebook: {
      img: '/SocialMedia/face.png',
      link: 'https://facebook.com/iskcondhanbadofficial',
    },
    youtube: {
      img: '/SocialMedia/yt.png',
      link: 'https://youtube.com/@iskcondhanbad',
    },
  };

  return (
    <div className="relative my-10 md:my-20 py-16 px-6 md:px-20 bg-orange-100 bg-cover bg-center text-center overflow-hidden">
      
      {/* 🔶 Background logo tiling */}
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: "url('https://c.animaapp.com/md8w42lwOfBxGO/img/frame-180.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '180px',
        }}
      ></div>

      {/* 🔶 Foreground content */}
      <div className="relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#ff6d05] drop-shadow-lg mb-10">
          SOCIAL MEDIA
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {['instagram', 'facebook', 'youtube'].map((platform) => (
            <button
              key={platform}
              onClick={() => setActiveTab(platform)}
              className={`flex items-center gap-3 px-6 py-3 rounded-md shadow-md transition-transform font-bold text-lg ${
                activeTab === platform
                  ? 'scale-105 bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
                  : 'bg-white text-black'
              }`}
            >
              <img
                src={
                  platform === 'instagram'
                    ? '/logo/instagram-logo.png'
                    : platform === 'facebook'
                    ? '/logo/facebook-logo.png'
                    : '/logo/youtube-logo.png'
                }
                alt={platform}
                className="w-5 h-5"
              />
              {platform.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Active Platform Content */}
        <div className="flex justify-center items-center">
          <a
            href={content[activeTab].link}
            target="_blank"
            rel="noopener noreferrer"
            className="max-w-full h-[450px] overflow-y-auto rounded-lg shadow-md"
          >
            <img
              src={content[activeTab].img}
              alt={`${activeTab} preview`}
              className="w-full object-cover"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
