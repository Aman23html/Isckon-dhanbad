import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Donation = () => {
  const navigate = useNavigate();
  const [activeOverlay, setActiveOverlay] = useState(null);

  const sevaItems = [
    { title: 'Temple Construction', slug: 'temple-construction', desc: 'Contribute to the ISKCON Temple Construction Seva, help build a facility to provide meals to thousands of devotees.' },
    { title: 'Anna Daan', slug: 'anna-daan', desc: 'Help us feed the needy through this blessed seva.' },
    { title: 'Gita Daan', slug: 'gita-daan', desc: 'Distribute the divine knowledge of Bhagavad Gita.' },
    { title: 'Tribal Care Seva', slug: 'tribal-care', desc: 'Support spiritual outreach and essentials in tribal areas.' },
    { title: 'Vaishnava Seva', slug: 'vaishnava-seva', desc: 'Serve the devotees through prasadam and essentials.' },
    { title: 'Nitya Seva', slug: 'nitya-seva', desc: 'Support the daily rituals and offerings to the Deities.' },
  ];

  const donationOptions = [
    { label: '₹101', amount: 101 },
    { label: '₹551', amount: 551 },
    { label: '₹1100', amount: 1100 },
    { label: '₹2500', amount: 2500 },
  ];

  const handlePaymentRedirect = (title, amount) => {
    const encodedSeva = encodeURIComponent(title);
    setActiveOverlay(null);
    navigate(`/donate/payment/${encodedSeva}/${amount}`);
  };

  return (
    <div className="relative bg-gradient-to-br from-yellow-50 via-orange-100 to-yellow-50 overflow-hidden min-h-screen pb-20">
      {/* Banner Section */}
      <div className="relative w-full flex items-center justify-around gap-10 py-10 px-6">
        <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px]">
          <img src="/border/dra.svg" alt="mandala-left" className="absolute inset-0 w-full h-full object-contain z-0 spin-slow" />
          <img src="/Krishna/Krishna.png" alt="Left Krishna" className="relative w-full h-full object-cover z-10" />
        </div>
        <div className="relative flex items-center justify-center px-6 py-6 min-h-[200px]">
          <div className="absolute h-[200px] w-[200px] bg-orange-200 blur-3xl z-[0] rounded-[50%]" />
          <img src="/border/dra2.svg" alt="mandala-center" className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-contain z-0" />
          <h2 className="text-[#df7326] text-4xl md:text-5xl font-extrabold text-center z-10 drop-shadow-lg">
            DONATION
          </h2>
        </div>
        <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px]">
          <img src="/border/dra.svg" alt="mandala-right" className="absolute inset-0 w-full h-full object-contain z-0 spin-slow" />
          <img src="/Krishna/Krishna.png" alt="Right Krishna" className="relative w-full h-full object-cover z-10" />
        </div>
      </div>

      {/* Seva Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-10">
        {sevaItems.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center transform hover:scale-105 hover:-translate-y-1"
          >
            <Link to={`/donate/${item.slug}`} className="w-full group">
              <img
                src={`/Donation/donation${idx + 1}.png`}
                alt={item.title}
                className="w-full h-[200px] object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-105"
              />
              <h3 className="text-xl font-bold text-[#421c0f] group-hover:text-[#df7326] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm mt-2 group-hover:text-gray-900 transition-colors">
                {item.desc}
              </p>
            </Link>

            {/* Select Seva Button */}
            <div className="relative mt-4 w-full">
              <button
                onClick={() => setActiveOverlay(activeOverlay === idx ? null : idx)}
                className="w-full bg-gradient-to-r from-[#df7326] to-[#c65a1f] text-white px-4 py-2 rounded-lg font-semibold hover:from-[#c65a1f] hover:to-[#a84516] shadow-md hover:shadow-xl transition-all"
              >
                SELECT SEVA
              </button>

              {/* Amount Overlay */}
              {activeOverlay === idx && (
                <div className="absolute bottom-[130%] left-0 w-full bg-[#6a1b1b] text-white rounded-xl p-4 shadow-2xl z-20 transition-all animate-fadeIn">
                  <h4 className="text-base font-semibold mb-3 text-center">Choose Amount</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {donationOptions.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => handlePaymentRedirect(item.title, option.amount)}
                        className="bg-white text-[#6a1b1b] px-3 py-2 rounded-md font-semibold hover:bg-yellow-300 hover:text-black transition"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donation;
