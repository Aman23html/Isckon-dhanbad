import React from 'react';

const Broadcast = () => {
  const schedule = [
    { title: 'Mangala Aarti', time: '04:30 am' },
    { title: 'Tulsi Aarti', time: '05:00 am' },
    { title: 'Darshan Aarti', time: '07:30 am' },
    { title: 'Guru Puja', time: '07:35 am' },
    { title: 'Srimad Bhagwatam Class', time: '08:00 am' },
    { title: 'Temple Closes', time: '01:00 pm - 04:00 pm' },
    { title: 'Darshan', time: '04:00 pm' },
    { title: 'Tulsi Aarti', time: '06:30 pm' },
    { title: 'Sandhya Aarti', time: '07:00 pm' },
    { title: 'Temple Close', time: '08:30 pm' }
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full mt-[50px]">
      
      {/* 🧡 Left - Temple Schedule with Controlled Height */}
      <div className="relative w-full lg:w-1/2 min-h-[600px] h-[80vh] flex flex-col items-center justify-center px-6 py-10 text-white overflow-hidden">
        
        {/* 🔁 Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover -z-10"
          autoPlay
          loop
          muted
        >
          <source src="templeschedule.mp4" type="video/mp4" />
        </video>

        {/* Optional Orange Overlay */}
        <div className="absolute inset-0 bg-[#d6593aa0] z-0" />

        {/* 📋 Schedule Content */}
        <h2 className="text-3xl font-bold z-10 mb-6 font-inknut text-white">TEMPLE SCHEDULE</h2>

        <div className="w-full max-w-md bg-[#ffab4c21]  rounded-md px-4 py-4 z-10">
          {schedule.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center py-2">
                <span className="text-white font-medium">{item.title}</span>
                <span className="text-[#542c11] font-bold text-lg">{item.time}</span>
              </div>
              {index < schedule.length - 1 && <hr className="border-t border-amber-900" />}
            </div>
          ))}
        </div>
      </div>

      {/* 💠 Right - Deity Image */}
      <div className="w-full lg:w-1/2 h-[80vh] min-h-[600px]">
        <img
          src="GN1.png"
          alt="Radha Krishna"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Broadcast;
