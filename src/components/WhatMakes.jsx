import React, { useState, useEffect } from 'react';
import { Phone, HelpCircle, Calendar, Eye, CheckCircle, Globe, Clock, Bell } from 'lucide-react';

const WhatMakes = () => {
  const [itemHeights, setItemHeights] = useState([]);
  const [isCalculated, setIsCalculated] = useState(false);

  // Left card data (Self Management)
  const leftCards = [
    {
      icon: `<svg className="w-6 h-6 md:w-8 md:h-8 text-[#333333] transition-colors duration-300" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5837 1.83439C18.6751 1.01103 19.4167 0.417713 20.2401 0.509181C23.6222 0.884908 26.7761 2.39947 29.1838 4.80419C31.5916 7.20892 33.1101 10.3609 33.4901 13.7425C33.5826 14.5658 32.9902 15.3081 32.167 15.4006C31.3437 15.4931 30.6014 14.9008 30.5089 14.0775C30.2049 11.3722 28.9901 8.85063 27.0639 6.92685C25.1377 5.00307 22.6146 3.79142 19.9089 3.49084C19.0855 3.39937 18.4922 2.65775 18.5837 1.83439Z" fill="currentColor"/>
      </svg>`,
      text: "3 am tenant calls"
    },
    {
      icon: `<svg className="w-10 h-10 md:w-8 md:h-8" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 3.5C9.54416 3.5 3.5 9.54416 3.5 17C3.5 24.4558 9.54416 30.5 17 30.5C24.4558 30.5 30.5 24.4558 30.5 17C30.5 9.54416 24.4558 3.5 17 3.5ZM0.5 17C0.5 7.8873 7.8873 0.5 17 0.5C26.1127 0.5 33.5 7.8873 33.5 17C33.5 26.1127 26.1127 33.5 17 33.5C7.8873 33.5 0.5 26.1127 0.5 17Z" fill="#3A4151"/>
      </svg>`,
      text: "Not knowing what vendor to call and if they'll even be available"
    },
    {
      icon: `<svg className="w-6 h-6 md:w-8 md:h-8" width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0.5C9.82843 0.5 10.5 1.17157 10.5 2V3.5H19.5V2C19.5 1.17157 20.1716 0.5 21 0.5C21.8284 0.5 22.5 1.17157 22.5 2V3.50244C23.2132 3.50734 23.8365 3.52207 24.3777 3.56629C25.2209 3.63518 25.9959 3.78302 26.7239 4.15396C27.8529 4.7292 28.7708 5.64708 29.346 6.77606C29.717 7.50406 29.8648 8.27911 29.9337 9.12226C30 9.93405 30 10.9306 30 12.138V24.862C30 26.0694 30 27.066 29.9337 27.8777C29.8648 28.7209 29.717 29.4959 29.346 30.2239C28.7708 31.3529 27.8529 32.2708 26.7239 32.846C25.9959 33.217 25.2209 33.3648 24.3777 33.4337C23.566 33.5 22.5694 33.5 21.362 33.5H8.63801C7.43058 33.5 6.43405 33.5 5.62226 33.4337C4.77912 33.3648 4.00406 33.217 3.27606 32.846C2.14709 32.2708 1.2292 31.3529 0.653962 30.2239C0.283026 29.4959 0.13518 28.7209 0.0662918 27.8777C-3.42205e-05 27.0659 -1.84862e-05 26.0694 6.46937e-07 24.8619V12.1381C-1.84862e-05 10.9306 -3.42205e-05 9.93405 0.0662918 9.12226C0.13518 8.27911 0.283026 7.50406 0.653962 6.77606C1.2292 5.64708 2.14709 4.7292 3.27606 4.15396C4.00406 3.78302 4.77912 3.63518 5.62226 3.56629C6.16348 3.52207 6.7868 3.50734 7.5 3.50244V2C7.5 1.17157 8.17157 0.5 9 0.5Z" fill="#3A4151"/>
      </svg>`,
      text: "3-way scheduling nightmares"
    },
    {
      icon: `<svg className="w-6 h-6 md:w-8 md:h-8" width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.43996 0.43934C3.02575 -0.146447 3.9755 -0.146447 4.56128 0.43934L10.0194 5.89743C10.1068 5.96689 10.1876 6.04708 10.2595 6.13761L25.8461 21.7242C25.9477 21.8021 26.0408 21.8943 26.122 22.0001L31.5613 27.4393C32.1471 28.0251 32.1471 28.9749 31.5613 29.5607C30.9755 30.1464 30.0258 30.1464 29.44 29.5607L24.7094 24.8301C22.5421 26.0982 19.9581 27 17.0006 27Z" fill="#3A4151"/>
      </svg>`,
      text: "No visibility into job progress"
    }
  ];

  // Right card data (With Properteasy)
  const rightCards = [
    {
      icon: `<svg className="w-8 h-8 md:w-8 md:h-8" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 3.5C9.54416 3.5 3.5 9.54416 3.5 17C3.5 24.4558 9.54416 30.5 17 30.5C24.4558 30.5 30.5 24.4558 30.5 17C30.5 9.54416 24.4558 3.5 17 3.5ZM0.5 17C0.5 7.8873 7.8873 0.5 17 0.5C26.1127 0.5 33.5 7.8873 33.5 17C33.5 26.1127 26.1127 33.5 17 33.5C7.8873 33.5 0.5 26.1127 0.5 17ZM24.8107 11.4393C25.3964 12.0251 25.3964 12.9749 24.8107 13.5607L15.8107 22.5607C15.2249 23.1464 14.2751 23.1464 13.6893 22.5607L9.18934 18.0607C8.60355 17.4749 8.60355 16.5251 9.18934 15.9393C9.77513 15.3536 10.7249 15.3536 11.3107 15.9393L14.75 19.3787L22.6893 11.4393C23.2751 10.8536 24.2249 10.8536 24.8107 11.4393Z" fill="#3CAB5C"/>
      </svg>`,
      text: "No more text or calls. We handle the requests"
    },
    {
      icon: `<svg className="w-8 h-8 md:w-8 md:h-8" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.83452 14C3.61559 14.9648 3.5 15.9689 3.5 17C3.5 18.0311 3.61559 19.0352 3.83452 20H9.7436C9.60289 19.0208 9.52112 18.0295 9.50033 17.0312C9.49989 17.0104 9.49989 16.9896 9.50033 16.9688C9.52112 15.9705 9.60289 14.9792 9.7436 14H3.83452Z" fill="white"/>
      </svg>`,
      text: "An expansive vendor network in every service category"
    },
    {
      icon: `<svg className="w-5 h-5 md:w-8 md:h-8" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 3.5C9.54416 3.5 3.5 9.54416 3.5 17C3.5 24.4558 9.54416 30.5 17 30.5C24.4558 30.5 30.5 24.4558 30.5 17C30.5 9.54416 24.4558 3.5 17 3.5ZM0.5 17C0.5 7.8873 7.8873 0.5 17 0.5C26.1127 0.5 33.5 7.8873 33.5 17C33.5 26.1127 26.1127 33.5 17 33.5C7.8873 33.5 0.5 26.1127 0.5 17ZM17 6.5C17.8284 6.5 18.5 7.17157 18.5 8V16.0729L23.6708 18.6584C24.4118 19.0288 24.7121 19.9299 24.3416 20.6708C23.9712 21.4118 23.0701 21.7121 22.3292 21.3416L16.3292 18.3416C15.821 18.0876 15.5 17.5682 15.5 17V8C15.5 7.17157 16.1716 6.5 17 6.5Z" fill="white"/>
      </svg>`,
      text: "Intuitive scheduling all in one place"
    },
    {
      icon: `<svg className="w-8 h-8 md:w-8 md:h-8" width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.57538 3.57538C9.54451 1.60625 12.2152 0.5 15 0.5C17.7848 0.5 20.4555 1.60625 22.4246 3.57538C24.3938 5.54451 25.5 8.21523 25.5 11C25.5 15.369 26.598 18.2658 27.7491 20.1156L27.7667 20.144C28.3027 21.0054 28.7265 21.6864 29.0121 22.182C29.1552 22.4303 29.2856 22.6696 29.3822 22.8822C29.4304 22.9883 29.4843 23.1184 29.5264 23.2599C29.5614 23.3772 29.628 23.6281 29.603 23.9334C29.5862 24.1386 29.5444 24.4892 29.3432 24.8515C29.1419 25.2137 28.8664 25.4344 28.701 25.5571C28.3256 25.8356 27.8944 25.8993 27.7505 25.9205L27.7439 25.9215C27.5228 25.9543 27.2718 25.9705 27.0187 25.9804C26.5158 26 25.8196 26 24.9538 26H5.04622C4.18039 26 3.48417 26 2.98129 25.9804C2.72816 25.9705 2.47724 25.9543 2.25613 25.9215L2.24948 25.9205C2.10557 25.8993 1.67444 25.8356 1.29901 25.5571C1.13365 25.4344 0.858057 25.2137 0.656829 24.8515C0.455602 24.4892 0.413762 24.1386 0.396979 23.9334C0.372007 23.6281 0.438609 23.3772 0.473568 23.2599C0.515706 23.1184 0.569618 22.9883 0.617811 22.8822C0.714358 22.6696 0.844757 22.4303 0.987887 22.182C1.27352 21.6864 1.69722 21.0055 2.23317 20.1442L2.25093 20.1156C3.40199 18.2658 4.5 15.369 4.5 11C4.5 8.21523 5.60625 5.54451 7.57538 3.57538Z" fill="white"/>
      </svg>`,
      text: "You get real-time notifications and updates from start to finish"
    }
  ];

  // Right card data (With Properteasy)


  // Your exact logic implementation
  useEffect(() => {
    const calculateEqualHeights = () => {
      const heightsArray = [];
      
      // Create hidden container for measurement
      const hiddenContainer = document.createElement('div');
      hiddenContainer.style.position = 'absolute';
      hiddenContainer.style.visibility = 'hidden';
      hiddenContainer.style.top = '-9999px';
      hiddenContainer.style.width = '50%'; // Simulate card width
      hiddenContainer.style.pointerEvents = 'none';
      document.body.appendChild(hiddenContainer);

      // Loop through both arrays (they have same length)
      for (let i = 0; i < Math.max(leftCards.length, rightCards.length); i++) {
        let leftHeight = 0;
        let rightHeight = 0;

        // Create and measure left card div
        if (leftCards[i]) {
          const leftDiv = document.createElement('div');
          leftDiv.className = 'bg-[#FFFFFF] border border-[#ECECEC] px-2 md:px-5 py-3 md:py-5 flex mx-1 md:mx-5 my-3 md:my-5 rounded-xl md:rounded-3xl gap-3 md:gap-5 items-center transition-colors duration-300';
          leftDiv.innerHTML = `
            <div class="w-6 h-6 md:w-8 md:h-8 text-[#333333] transition-colors duration-300">
              ${leftCards[i].icon.replace('className="', 'class="')}
            </div>
            <p class="text-[#333333] text-md md:text-xl transition-colors duration-300">${leftCards[i].text}</p>
          `;
          
          hiddenContainer.appendChild(leftDiv);
          leftHeight = leftDiv.offsetHeight;
          hiddenContainer.removeChild(leftDiv); // Clean up immediately
        }

        // Create and measure right card div
        if (rightCards[i]) {
          const rightDiv = document.createElement('div');
          rightDiv.className = 'bg-[#52C171] border-none px-2 md:px-5 py-3 md:py-5 flex mx-1 md:mx-5 my-3 md:my-5 rounded-xl md:rounded-3xl gap-3 md:gap-5 items-center';
          rightDiv.innerHTML = `
            <div class="w-8 h-8 md:w-8 md:h-8">
              ${rightCards[i].icon.replace('className="', 'class="')}
            </div>
            <p class="text-md md:text-xl text-white">${rightCards[i].text}</p>
          `;
          
          hiddenContainer.appendChild(rightDiv);
          rightHeight = rightDiv.offsetHeight;
          hiddenContainer.removeChild(rightDiv); // Clean up immediately
        }

        // Store the maximum height for this row
        const maxHeight = Math.max(leftHeight, rightHeight);
        heightsArray.push(maxHeight);
      }

      // Remove the hidden container
      document.body.removeChild(hiddenContainer);
      
      // Set the calculated heights
      setItemHeights(heightsArray);
      setIsCalculated(true);
    };

    // Run calculation after component mounts and DOM is ready
    const timer = setTimeout(calculateEqualHeights, 100);
    return () => clearTimeout(timer);
  }, []);

  const RoundButton = ({ text }) => (
    <div className="flex justify-center mb-8">
      <span className="bg-gray-100 px-6 py-2 rounded-full text-sm font-medium">
        {text}
      </span>
    </div>
  );

  const GreenButton = ({ text }) => (
    <button className="bg-[#3CAB5C] hover:bg-[#2d8a4a] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
      {text}
    </button>
  );

  return (
    <section className="font-sans relative w-full max-w-[1344px] mx-auto mt-10 sm:mt-20 mb-10 px-4 sm:px-0">
      <RoundButton text="What makes Properteasy different" />

      <div className="w-full flex justify-center my-6 sm:my-10 lg:my-16 px-2">
        <div className="bg-[#F3F3F3] rounded-md inline-flex items-center px-1 sm:px-2 py-1 sm:py-1.5">
          <span className="px-3 sm:px-6 md:px-12 lg:px-16 py-1 sm:py-2 bg-white rounded-md shadow-[0_2px_3px_rgba(0,0,0,0.1)] font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap">
            Self Management
          </span>
          <span className="px-2 sm:px-4 md:px-6 lg:px-8 text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap text-gray-700">
            Traditional Property Management
          </span>
        </div>
      </div>

      <h1 className="text-3xl md:text-6xl mt-2 text-center mb-8">
        From Hands-on to Hands-free
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 md:gap-5 w-full h-full my-20">
        {/* Left Card - Self Management */}
        <div className="flex-1 bg-[#F6F7F9] rounded-xl py-10 md:py-0 pb-16 md:pb-0">
          <h2 className="text-center text-3xl md:text-4xl py-4 md:py-12">Self Management</h2>
          
          <div className="mt-12">
            {leftCards.map((card, index) => (
              <div
                key={`left-${index}`}
                className="group bg-[#FFFFFF] border border-[#ECECEC] px-2 md:px-5 py-3 md:py-5 flex mx-1 md:mx-5 my-3 md:my-5 rounded-xl md:rounded-3xl gap-3 md:gap-5 items-center transition-colors duration-300"
                style={{ 
                  minHeight: isCalculated && itemHeights[index] ? `${itemHeights[index]}px` : 'auto' 
                }}
              >
                <div 
                  className="w-6 h-6 md:w-8 md:h-8 text-[#333333] transition-colors duration-300"
                  dangerouslySetInnerHTML={{ __html: card.icon }}
                />
                <p className="text-[#333333] text-md md:text-xl transition-colors duration-300">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card - With Properteasy */}
        <div className="flex-1 bg-[#3CAB5C] rounded-xl py-10 md:py-6 pb-16 md:pb-0">
          <h2 className="text-center text-3xl md:text-4xl py-8 text-white">With Properteasy</h2>
          
          <div className="mt-6 md:mt-14">
            {rightCards.map((card, index) => (
              <div
                key={`right-${index}`}
                className="bg-[#52C171] border-none px-2 md:px-5 py-3 md:py-5 flex mx-1 md:mx-5 my-3 md:my-5 rounded-xl md:rounded-3xl gap-3 md:gap-5 items-center"
                style={{ 
                  minHeight: isCalculated && itemHeights[index] ? `${itemHeights[index]}px` : 'auto' 
                }}
              >
                <div 
                  className="w-8 h-8 md:w-8 md:h-8"
                  dangerouslySetInnerHTML={{ __html: card.icon }}
                />
                <p className="text-md md:text-xl text-white">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <GreenButton text="Get Started Now" />
      </div>

      {/* Debug Panel - Remove this in production */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg text-sm">
        <h3 className="font-bold mb-2">Debug Info:</h3>
        <p>Heights calculated: {isCalculated ? 'Yes' : 'Calculating...'}</p>
        <p>Calculated heights: [{itemHeights.join(', ')}]px</p>
        <p>Total rows: {Math.max(leftCards.length, rightCards.length)}</p>
      </div>
    </section>
  );
};

export default WhatMakes