import React from 'react';

const Isckonmessage = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center gap-25 lg:gap-40 py-12 px-4 w-full lg:min-h-[600px] min-h-[900px] bg-white overflow-hidden">
      
      {/* 🌸 Top Border */}
      <img
        src="/border/border.png"
        alt="top-border"
        className="absolute top-0 left-0 w-full"
      />

      {/* 🧡 Left - Message Content */}
      <div className="max-w-xl flex flex-col items-center text-center  gap-7 z-10">
        <h1 className="text-4xl font-extrabold text-[#df7326]">ISKCON</h1>
        <h2 className="text-2xl font-semibold text-black">
          Where Devotion Meets Enlightenment
        </h2>
        <p className="text-base text-black leading-relaxed">
          We are a part of ISKCON (International Society for Krishna Consciousness),
          a worldwide spiritual movement started by His Divine Grace A.C. Bhaktivedanta
          Swami Prabhupada in 1966 in New York City.
          <br /><br />
          Our temple is located in the Jagjivan Nagar area of Dhanbad and is a special place
          for devotees to come together, worship, learn, and serve.
        </p>
        
        <button className="bg-[#df7326] text-white text-lg font-medium px-5 py-2.5 rounded hover:bg-[#c75b18] transition-all">
          READ MORE
        </button>
      </div>

      {/* 💠 Right - Mandala + Prabhupada Image */}
      <div className="w-full max-w-[200px] relative flex justify-center items-center aspect-square">
        {/* 🔄 Mandala */}
        <img
          src="/border/dra.svg"
          alt="mandala"
          className="absolute w-[150%] max-w-none spin-slow "
        />

        {/* 🙏 Prabhupada */}
        <img
          src="/Prabhupada/prabhupada.png"
          alt="Srila Prabhupada"
          className="relative z-10 w-[80%] object-contain drop-shadow-xl"
        />
      </div>

      {/* 🌸 Bottom Border */}
      <img
        src="/border/border.png"
        alt="bottom-border"
        className="absolute bottom-0  left-0 w-full rotate-180"
      />
    </div>
  );
};

export default Isckonmessage;
