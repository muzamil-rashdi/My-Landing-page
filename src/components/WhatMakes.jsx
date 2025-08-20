import React, { useState, useEffect, useRef } from 'react';
import RoundButton from "./common/RoundButton";
import GreenButton from "../components/common/GreenButton";
const WhatMakes = () => {
  const [itemHeights, setItemHeights] = useState([]);
  const [isCalculated, setIsCalculated] = useState(false);
  const containerRef = useRef(null);
  
  // Left card data (Self Management)
  const leftCards = [
    {
      icon: (<svg className="text-[#3A4151] transition-colors duration-300 group-hover:text-white" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M18.5837 1.83439C18.6751 1.01103 19.4167 0.417713 20.2401 0.509181C23.6222 0.884908 26.7761 2.39947 29.1838 4.80419C31.5916 7.20892 33.1101 10.3609 33.4901 13.7425C33.5826 14.5658 32.9902 15.3081 32.167 15.4006C31.3437 15.4931 30.6014 14.9008 30.5089 14.0775C30.2049 11.3722 28.9901 8.85063 27.0639 6.92685C25.1377 5.00307 22.6146 3.79142 19.9089 3.49084C19.0855 3.39937 18.4922 2.65775 18.5837 1.83439ZM7.85753 5.99333C7.43186 5.77803 6.92916 5.77803 6.50348 5.99333C6.3434 6.0743 6.14384 6.2472 5.26331 7.12773L5.02686 7.36418C4.18653 8.20451 3.96002 8.44754 3.77895 8.76987C3.56909 9.14347 3.39326 9.81958 3.39454 10.2481C3.39567 10.6294 3.45196 10.859 3.69985 11.7324C4.92326 16.0428 7.23116 20.1104 10.6276 23.5069C14.0241 26.9034 18.0918 29.2113 22.4022 30.4347C23.2755 30.6826 23.5052 30.7389 23.8865 30.74C24.315 30.7413 24.9911 30.5655 25.3647 30.3556C25.687 30.1746 25.9301 29.948 26.7704 29.1077L27.0068 28.8713C27.8874 27.9907 28.0603 27.7912 28.1412 27.6311C28.3565 27.2054 28.3565 26.7027 28.1412 26.277C28.0603 26.117 27.8874 25.9174 27.0068 25.0369L26.7145 24.7446C26.136 24.166 26.0059 24.0475 25.9073 23.9834C25.4101 23.6602 24.7692 23.6602 24.272 23.9834C24.1734 24.0475 24.0433 24.166 23.4648 24.7446C23.4533 24.756 23.4416 24.7677 23.4296 24.7798C23.295 24.9149 23.1246 25.0859 22.92 25.2324L22.0467 24.0129L22.92 25.2325C22.1895 25.7555 21.1964 25.9249 20.3338 25.6734C20.0933 25.6033 19.8952 25.5078 19.7412 25.4336C19.729 25.4277 19.7171 25.422 19.7055 25.4164C17.3805 24.3001 15.203 22.779 13.2793 20.8553C11.3556 18.9316 9.83446 16.754 8.71819 14.4291C8.71261 14.4174 8.70687 14.4055 8.70099 14.3934C8.62673 14.2393 8.53128 14.0413 8.46116 13.8008L9.90122 13.381L8.46115 13.8007C8.20972 12.9382 8.37906 11.9451 8.90212 11.2146L8.90212 11.2146C9.04867 11.01 9.2197 10.8395 9.3548 10.7049C9.36684 10.6929 9.37859 10.6812 9.39001 10.6698C9.96857 10.0913 10.087 9.96117 10.1511 9.86257L10.1511 9.86256C10.4744 9.3654 10.4744 8.72446 10.1511 8.2273L11.4087 7.40966L10.1511 8.2273C10.087 8.12869 9.96857 7.9986 9.39001 7.42004L9.0977 7.12773C8.21716 6.2472 8.01761 6.0743 7.85753 5.99333ZM5.14944 3.31629C6.42646 2.67038 7.93455 2.67038 9.21157 3.31629C9.86046 3.64449 10.4238 4.20926 11.0754 4.8626C11.1228 4.91009 11.1707 4.95804 11.219 5.00641L11.5113 5.29872C11.5432 5.33059 11.5748 5.36211 11.606 5.39332C12.036 5.82258 12.4064 6.19234 12.6663 6.59202L11.471 7.36918L12.6663 6.59202C13.636 8.08352 13.636 10.0063 12.6663 11.4978C12.4064 11.8975 12.036 12.2673 11.606 12.6965C11.5748 12.7277 11.5432 12.7593 11.5113 12.7911C11.4249 12.8776 11.3808 12.9219 11.3501 12.9543C11.3496 12.9568 11.349 12.9595 11.3485 12.9624C11.348 12.9657 11.3476 12.9687 11.3473 12.9714C11.3522 12.9824 11.3589 12.9969 11.3681 13.0165C11.3825 13.0471 11.3995 13.0824 11.4226 13.1306C12.3944 15.1545 13.7196 17.0529 15.4006 18.734C17.0816 20.415 18.98 21.7402 21.004 22.7119L20.3547 24.0642L21.004 22.7119C21.0522 22.7351 21.0875 22.752 21.1181 22.7664C21.1377 22.7757 21.1522 22.7824 21.1632 22.7873C21.1659 22.787 21.1689 22.7866 21.1722 22.7861C21.1751 22.7856 21.1778 22.785 21.1802 22.7844C21.2127 22.7537 21.257 22.7097 21.3434 22.6232C21.3753 22.5914 21.4068 22.5598 21.4381 22.5285C21.8673 22.0985 22.2371 21.7282 22.6367 21.4683C24.1282 20.4986 26.051 20.4986 27.5426 21.4683C27.9422 21.7282 28.312 22.0985 28.7412 22.5285C28.7725 22.5598 28.804 22.5914 28.8359 22.6232L29.1282 22.9156C29.1765 22.9639 29.2245 23.0117 29.272 23.0591C29.9253 23.7108 30.4901 24.2741 30.8183 24.923C31.4642 26.2 31.4642 27.7081 30.8183 28.9851C30.4901 29.634 29.9253 30.1974 29.272 30.849C29.2245 30.8964 29.1765 30.9442 29.1282 30.9926L28.8917 31.229C28.8574 31.2633 28.8236 31.2972 28.7901 31.3307C28.0923 32.0293 27.5571 32.565 26.834 32.9712C26.0091 33.4346 24.8237 33.7428 23.8776 33.74C23.0497 33.7376 22.446 33.566 21.6675 33.3447C21.6396 33.3368 21.6114 33.3288 21.583 33.3207C16.7932 31.9612 12.2738 29.3957 8.50633 25.6282C4.73887 21.8608 2.17335 17.3414 0.813851 12.5515C0.805791 12.5231 0.79779 12.495 0.789852 12.4671C0.568592 11.6886 0.397012 11.0848 0.39455 10.257C0.391735 9.31086 0.699993 8.1255 1.16339 7.30058L1.16339 7.30058C1.56959 6.57748 2.10532 6.0423 2.80392 5.34441C2.83741 5.31095 2.87129 5.27711 2.90553 5.24287L3.14199 5.00641C3.19036 4.95804 3.23819 4.91009 3.28556 4.8626C3.93722 4.20927 4.50055 3.6445 5.14944 3.31629L5.82646 4.65481L5.14944 3.31629ZM18.6022 7.71277C18.7609 6.89967 19.5486 6.36913 20.3617 6.52777C22.1199 6.87079 23.7356 7.73063 25.0022 8.99725C26.2689 10.2639 27.1287 11.8796 27.4717 13.6378C27.6304 14.4509 27.0998 15.2386 26.2867 15.3973C25.4736 15.5559 24.6859 15.0253 24.5272 14.2122C24.2986 13.0402 23.7253 11.963 22.8809 11.1186C22.0365 10.2742 20.9593 9.70093 19.7873 9.47225C18.9742 9.31361 18.4436 8.52587 18.6022 7.71277Z" fill="currentColor"/>
</svg>)
,
      text: "3 am tenant calls"
    },
    {
      icon: (<svg className="text-[#3A4151] transition-colors duration-300 group-hover:text-white" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M17 3.5C9.54416 3.5 3.5 9.54416 3.5 17C3.5 24.4558 9.54416 30.5 17 30.5C24.4558 30.5 30.5 24.4558 30.5 17C30.5 9.54416 24.4558 3.5 17 3.5ZM0.5 17C0.5 7.8873 7.8873 0.5 17 0.5C26.1127 0.5 33.5 7.8873 33.5 17C33.5 26.1127 26.1127 33.5 17 33.5C7.8873 33.5 0.5 26.1127 0.5 17ZM17.3872 11.0365C16.6889 10.9167 15.9708 11.0479 15.36 11.4069C14.7492 11.7659 14.2851 12.3294 14.05 12.9978C13.7751 13.7792 12.9187 14.1899 12.1372 13.915C11.3558 13.6401 10.9451 12.7837 11.22 12.0022C11.6902 10.6656 12.6183 9.53845 13.8399 8.8205C15.0615 8.10255 16.4978 7.84011 17.8944 8.07966C19.2909 8.31921 20.5576 9.04528 21.4702 10.1293C22.3825 11.2131 22.8819 12.5847 22.88 14.0014C22.8793 16.2969 21.1774 17.8128 19.962 18.6231C19.3086 19.0587 18.6658 19.379 18.1923 19.5895C17.9535 19.6956 17.7523 19.7762 17.6074 19.8314C17.5348 19.8591 17.4759 19.8805 17.4331 19.8957L17.381 19.914L17.3644 19.9197L17.3585 19.9216L17.3562 19.9224C17.3558 19.9225 17.3543 19.923 16.88 18.5L17.3543 19.923C16.5684 20.185 15.7189 19.7603 15.457 18.9743C15.1951 18.1887 15.6195 17.3395 16.4049 17.0772L16.428 17.0691C16.4511 17.0609 16.4889 17.0472 16.5394 17.028C16.6405 16.9894 16.7909 16.9294 16.9739 16.848C17.3442 16.6835 17.8264 16.4413 18.298 16.1269C19.3323 15.4373 19.88 14.7037 19.88 14V13.9978C19.8811 13.2893 19.6313 12.6033 19.1751 12.0613C18.7188 11.5193 18.0855 11.1563 17.3872 11.0365ZM15.5 24.5C15.5 23.6716 16.1716 23 17 23H17.015C17.8434 23 18.515 23.6716 18.515 24.5C18.515 25.3284 17.8434 26 17.015 26H17C16.1716 26 15.5 25.3284 15.5 24.5Z" fill="currentColor"/>
</svg>)
,
      text: "Not knowing what vendor to call and if they'll even be available"
    },
    {
      icon: (<svg className="text-[#3A4151] transition-colors duration-300 group-hover:text-white" width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M9 0.5C9.82843 0.5 10.5 1.17157 10.5 2V3.5H19.5V2C19.5 1.17157 20.1716 0.5 21 0.5C21.8284 0.5 22.5 1.17157 22.5 2V3.50244C23.2132 3.50734 23.8365 3.52207 24.3777 3.56629C25.2209 3.63518 25.9959 3.78302 26.7239 4.15396C27.8529 4.7292 28.7708 5.64708 29.346 6.77606C29.717 7.50406 29.8648 8.27911 29.9337 9.12226C30 9.93405 30 10.9306 30 12.138V24.862C30 26.0694 30 27.066 29.9337 27.8777C29.8648 28.7209 29.717 29.4959 29.346 30.2239C28.7708 31.3529 27.8529 32.2708 26.7239 32.846C25.9959 33.217 25.2209 33.3648 24.3777 33.4337C23.566 33.5 22.5694 33.5 21.362 33.5H8.63801C7.43058 33.5 6.43405 33.5 5.62226 33.4337C4.77912 33.3648 4.00406 33.217 3.27606 32.846C2.14709 32.2708 1.2292 31.3529 0.653962 30.2239C0.283026 29.4959 0.13518 28.7209 0.0662918 27.8777C-3.42205e-05 27.0659 -1.84862e-05 26.0694 6.46937e-07 24.8619V12.1381C-1.84862e-05 10.9306 -3.42205e-05 9.93405 0.0662918 9.12226C0.13518 8.27911 0.283026 7.50406 0.653962 6.77606C1.2292 5.64708 2.14709 4.7292 3.27606 4.15396C4.00406 3.78302 4.77912 3.63518 5.62226 3.56629C6.16348 3.52207 6.7868 3.50734 7.5 3.50244V2C7.5 1.17157 8.17157 0.5 9 0.5ZM7.5 6.50264C6.83171 6.50734 6.30694 6.52035 5.86656 6.55633C5.20893 6.61006 4.87263 6.70745 4.63803 6.82698C4.07354 7.1146 3.6146 7.57354 3.32698 8.13803C3.20745 8.37263 3.11006 8.70893 3.05633 9.36656C3.00117 10.0417 3 10.9151 3 12.2V12.5H27V12.2C27 10.9151 26.9988 10.0417 26.9437 9.36656C26.8899 8.70893 26.7926 8.37263 26.673 8.13803C26.3854 7.57354 25.9265 7.1146 25.362 6.82698C25.1274 6.70745 24.7911 6.61006 24.1334 6.55633C23.6931 6.52035 23.1683 6.50734 22.5 6.50264V8C22.5 8.82843 21.8284 9.5 21 9.5C20.1716 9.5 19.5 8.82843 19.5 8V6.5H10.5V8C10.5 8.82843 9.82843 9.5 9 9.5C8.17157 9.5 7.5 8.82843 7.5 8V6.50264ZM27 15.5H3V24.8C3 26.0849 3.00117 26.9583 3.05633 27.6334C3.11006 28.2911 3.20745 28.6274 3.32698 28.862C3.6146 29.4265 4.07354 29.8854 4.63803 30.173C4.87263 30.2926 5.20894 30.3899 5.86656 30.4437C6.54169 30.4988 7.41513 30.5 8.7 30.5H21.3C22.5849 30.5 23.4583 30.4988 24.1334 30.4437C24.7911 30.3899 25.1274 30.2926 25.362 30.173C25.9265 29.8854 26.3854 29.4265 26.673 28.862C26.7926 28.6274 26.8899 28.2911 26.9437 27.6334C26.9988 26.9583 27 26.0849 27 24.8V15.5Z" fill="currentColor"/>
</svg>)
,
      text: "3-way scheduling nightmares"
    },
    {
      icon: (<svg className="text-[#3A4151] transition-colors duration-300 group-hover:text-white" width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M2.43996 0.43934C3.02575 -0.146447 3.9755 -0.146447 4.56128 0.43934L10.0194 5.89743C10.1068 5.96689 10.1876 6.04708 10.2595 6.13761L25.8461 21.7242C25.9477 21.8021 26.0408 21.8943 26.122 22.0001L31.5613 27.4393C32.1471 28.0251 32.1471 28.9749 31.5613 29.5607C30.9755 30.1464 30.0258 30.1464 29.44 29.5607L24.7094 24.8301C22.5421 26.0982 19.9581 27 17.0006 27C12.7081 27 9.20864 25.1029 6.61574 22.9389C4.02637 20.7777 2.25107 18.2786 1.36195 16.8707C1.3502 16.8521 1.33814 16.8331 1.32582 16.8137C1.14937 16.536 0.92027 16.1754 0.804473 15.6701C0.71098 15.2622 0.711011 14.7374 0.804551 14.3295C0.920423 13.8241 1.15017 13.4626 1.32708 13.1842C1.3395 13.1647 1.35166 13.1456 1.3635 13.1268C2.26705 11.6965 4.10198 9.11288 6.79363 6.91433L2.43996 2.56066C1.85418 1.97487 1.85418 1.02513 2.43996 0.43934ZM8.92743 9.04812C6.46866 10.9893 4.75109 13.3815 3.89982 14.729C3.84657 14.8133 3.80925 14.8725 3.77806 14.9238C3.75724 14.9581 3.74353 14.9818 3.73438 14.9982C3.73438 14.9988 3.73438 14.9994 3.73438 15C3.73438 15.0006 3.73438 15.0012 3.73438 15.0018C3.74341 15.018 3.75691 15.0413 3.77735 15.075C3.80835 15.126 3.84543 15.1849 3.89845 15.2688C4.69744 16.5339 6.2786 18.7499 8.53803 20.6356C10.7939 22.5185 13.6356 24 17.0006 24C19.03 24 20.8667 23.4621 22.5011 22.6218L20.0484 20.1691C19.1552 20.6966 18.1127 21 17.0006 21C13.6869 21 11.0006 18.3137 11.0006 15C11.0006 13.8879 11.3041 12.8454 11.8316 11.9523L8.92743 9.04812ZM14.102 14.2227C14.0358 14.4705 14.0006 14.731 14.0006 15C14.0006 16.6569 15.3438 18 17.0006 18C17.2696 18 17.5301 17.9648 17.7779 17.8986L14.102 14.2227ZM17.0006 6C16.4278 6 15.8723 6.04273 15.3338 6.12235C14.5143 6.24351 13.7517 5.67738 13.6305 4.85787C13.5094 4.03835 14.0755 3.27577 14.895 3.15461C15.5758 3.05396 16.278 3 17.0006 3C21.2931 3 24.7926 4.89708 27.3855 7.06115C29.9749 9.22227 31.7502 11.7214 32.6393 13.1293C32.651 13.1479 32.6631 13.1669 32.6754 13.1862C32.8519 13.464 33.081 13.8246 33.1968 14.33C33.2903 14.7379 33.2902 15.2627 33.1967 15.6707C33.0808 16.1761 32.8506 16.5381 32.6735 16.8169C32.661 16.8365 32.6488 16.8557 32.6369 16.8745C32.1594 17.6303 31.4348 18.6871 30.4748 19.8337C29.943 20.4688 28.9969 20.5526 28.3618 20.0208C27.7266 19.4889 27.6428 18.5429 28.1747 17.9077C29.0317 16.8842 29.6787 15.9401 30.1007 15.2722C30.154 15.1877 30.1915 15.1283 30.2228 15.0768C30.2438 15.0422 30.2577 15.0183 30.2669 15.0017C30.2669 15.0012 30.2669 15.0006 30.2669 15.0001C30.2669 14.9994 30.2669 14.9988 30.2669 14.9982C30.2578 14.982 30.2443 14.9587 30.2239 14.925C30.1929 14.874 30.1558 14.8151 30.1028 14.7312C29.3038 13.4661 27.7226 11.2501 25.4632 9.36436C23.2073 7.48155 20.3656 6 17.0006 6Z" fill="currentColor"/>
</svg> )
,
      text: "No visibility into job progress"
    }
  ];

  // Right card data (With Properteasy)
  const rightCards = [
    {
      icon: (<svg className="text-[#FFFFFF] transition-colors duration-300 group-hover:text-[#3A4151]" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M17 3.5C9.54416 3.5 3.5 9.54416 3.5 17C3.5 24.4558 9.54416 30.5 17 30.5C24.4558 30.5 30.5 24.4558 30.5 17C30.5 9.54416 24.4558 3.5 17 3.5ZM0.5 17C0.5 7.8873 7.8873 0.5 17 0.5C26.1127 0.5 33.5 7.8873 33.5 17C33.5 26.1127 26.1127 33.5 17 33.5C7.8873 33.5 0.5 26.1127 0.5 17ZM24.8107 11.4393C25.3964 12.0251 25.3964 12.9749 24.8107 13.5607L15.8107 22.5607C15.2249 23.1464 14.2751 23.1464 13.6893 22.5607L9.18934 18.0607C8.60355 17.4749 8.60355 16.5251 9.18934 15.9393C9.77513 15.3536 10.7249 15.3536 11.3107 15.9393L14.75 19.3787L22.6893 11.4393C23.2751 10.8536 24.2249 10.8536 24.8107 11.4393Z" fill="currentColor"/>
</svg>
      ),
      text: "No more text or calls. We handle the requests"
    },
    {
      icon: (<svg className="text-[#FFFFFF] transition-colors duration-300 group-hover:text-[#3A4151]" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M3.83452 14C3.61559 14.9648 3.5 15.9689 3.5 17C3.5 18.0311 3.61559 19.0352 3.83452 20H9.7436C9.60289 19.0208 9.52112 18.0295 9.50033 17.0312C9.49989 17.0104 9.49989 16.9896 9.50033 16.9688C9.52112 15.9705 9.60289 14.9792 9.7436 14H3.83452ZM4.90328 11H10.3688C11.0576 8.49322 12.1433 6.10709 13.5886 3.93474C9.77722 4.92714 6.62118 7.54317 4.90328 11ZM17 4.3262C15.4405 6.3354 14.2579 8.59688 13.4966 11H20.5034C19.7421 8.59688 18.5595 6.3354 17 4.3262ZM21.2212 14H12.7788C12.6166 14.9872 12.5229 15.9895 12.5003 17C12.5229 18.0105 12.6166 19.0128 12.7788 20H21.2212C21.3834 19.0128 21.4771 18.0105 21.4997 17C21.4771 15.9895 21.3834 14.9872 21.2212 14ZM24.2564 20C24.3971 19.0208 24.4789 18.0295 24.4997 17.0312C24.5001 17.0104 24.5001 16.9896 24.4997 16.9688C24.4789 15.9705 24.3971 14.9792 24.2564 14H30.1655C30.3844 14.9648 30.5 15.9689 30.5 17C30.5 18.0311 30.3844 19.0352 30.1655 20H24.2564ZM20.5034 23H13.4966C14.2579 25.4031 15.4405 27.6646 17 29.6738C18.5595 27.6646 19.7421 25.4031 20.5034 23ZM13.5886 30.0653C12.1433 27.8929 11.0576 25.5068 10.3688 23H4.90328C6.62118 26.4568 9.77721 29.0729 13.5886 30.0653ZM20.4114 30.0653C21.8567 27.8929 22.9424 25.5068 23.6312 23H29.0967C27.3788 26.4568 24.2228 29.0729 20.4114 30.0653ZM29.0967 11H23.6312C22.9424 8.49322 21.8567 6.10709 20.4114 3.93474C24.2228 4.92714 27.3788 7.54317 29.0967 11ZM0.5 17C0.5 7.8873 7.8873 0.5 17 0.5C26.1127 0.5 33.5 7.8873 33.5 17C33.5 26.1127 26.1127 33.5 17 33.5C7.8873 33.5 0.5 26.1127 0.5 17Z" fill="currentColor"/>
</svg>)
,
      text: "An expansive vendor network in every service category"
    },
    {
      icon: (<svg className="text-white transition-colors duration-300 group-hover:text-[#3A4151]" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M17 3.5C9.54416 3.5 3.5 9.54416 3.5 17C3.5 24.4558 9.54416 30.5 17 30.5C24.4558 30.5 30.5 24.4558 30.5 17C30.5 9.54416 24.4558 3.5 17 3.5ZM0.5 17C0.5 7.8873 7.8873 0.5 17 0.5C26.1127 0.5 33.5 7.8873 33.5 17C33.5 26.1127 26.1127 33.5 17 33.5C7.8873 33.5 0.5 26.1127 0.5 17ZM17 6.5C17.8284 6.5 18.5 7.17157 18.5 8V16.0729L23.6708 18.6584C24.4118 19.0288 24.7121 19.9299 24.3416 20.6708C23.9712 21.4118 23.0701 21.7121 22.3292 21.3416L16.3292 18.3416C15.821 18.0876 15.5 17.5682 15.5 17V8C15.5 7.17157 16.1716 6.5 17 6.5Z" fill="currentColor"/>
</svg>
      ),
      text: "Intuitive scheduling all in one place"
    },
    {
      icon: (<svg className="text-[#FFFFFF] transition-colors duration-300 group-hover:text-[#3A4151]" width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M7.57538 3.57538C9.54451 1.60625 12.2152 0.5 15 0.5C17.7848 0.5 20.4555 1.60625 22.4246 3.57538C24.3938 5.54451 25.5 8.21523 25.5 11C25.5 15.369 26.598 18.2658 27.7491 20.1156L27.7667 20.144C28.3027 21.0054 28.7265 21.6864 29.0121 22.182C29.1552 22.4303 29.2856 22.6696 29.3822 22.8822C29.4304 22.9883 29.4843 23.1184 29.5264 23.2599C29.5614 23.3772 29.628 23.6281 29.603 23.9334C29.5862 24.1386 29.5444 24.4892 29.3432 24.8515C29.1419 25.2137 28.8664 25.4344 28.701 25.5571C28.3256 25.8356 27.8944 25.8993 27.7505 25.9205L27.7439 25.9215C27.5228 25.9543 27.2718 25.9705 27.0187 25.9804C26.5158 26 25.8196 26 24.9538 26H5.04622C4.18039 26 3.48417 26 2.98129 25.9804C2.72816 25.9705 2.47724 25.9543 2.25613 25.9215L2.24948 25.9205C2.10557 25.8993 1.67444 25.8356 1.29901 25.5571C1.13365 25.4344 0.858057 25.2137 0.656829 24.8515C0.455602 24.4892 0.413762 24.1386 0.396979 23.9334C0.372007 23.6281 0.438609 23.3772 0.473568 23.2599C0.515706 23.1184 0.569618 22.9883 0.617811 22.8822C0.714358 22.6696 0.844757 22.4303 0.987887 22.182C1.27352 21.6864 1.69722 21.0055 2.23317 20.1442L2.25093 20.1156C3.40199 18.2658 4.5 15.369 4.5 11C4.5 8.21523 5.60625 5.54451 7.57538 3.57538ZM15 3.5C13.0109 3.5 11.1032 4.29018 9.6967 5.6967C8.29018 7.10322 7.5 9.01088 7.5 11C7.5 15.9015 6.25942 19.3521 4.79807 21.7006C4.4788 22.2137 4.21233 22.642 3.99462 22.9982C4.30449 22.9999 4.66497 23 5.08328 23H24.9167C25.335 23 25.6955 22.9999 26.0054 22.9982C25.7877 22.642 25.5212 22.2137 25.2019 21.7006C23.7406 19.3521 22.5 15.9015 22.5 11C22.5 9.01088 21.7098 7.10322 20.3033 5.6967C18.8968 4.29018 16.9891 3.5 15 3.5ZM9.90665 29.5074C10.4549 28.8863 11.4028 28.8272 12.0239 29.3754C12.818 30.0764 13.8577 30.5 15 30.5C16.1423 30.5 17.182 30.0764 17.9761 29.3754C18.5972 28.8272 19.5451 28.8863 20.0933 29.5074C20.6415 30.1285 20.5824 31.0764 19.9613 31.6246C18.6401 32.7907 16.9011 33.5 15 33.5C13.0989 33.5 11.3599 32.7907 10.0387 31.6246C9.41756 31.0764 9.35846 30.1285 9.90665 29.5074Z" fill="currentColor"/>
</svg>
      ),
      text: "You get real-time notifications and updates from start to finish"
    }
  ];

  // Right card data (With Properteasy)


  // Your exact logic implementation
   useEffect(() => {
    const calculateEqualHeights = () => {
      if (!containerRef.current) return;
      
      const heightsArray = [];
     
      
      // Create a more accurate measurement container
      const hiddenContainer = document.createElement('div');
      hiddenContainer.style.position = 'absolute';
      hiddenContainer.style.visibility = 'hidden';
      hiddenContainer.style.top = '-9999px';
      hiddenContainer.style.left = '0';
      hiddenContainer.style.right = '0';
      hiddenContainer.style.pointerEvents = 'none';
      
      // Match the actual layout structure
      hiddenContainer.className = 'flex flex-col lg:flex-row gap-8 md:gap-5 w-full';
      document.body.appendChild(hiddenContainer);

      // Create left and right columns for accurate measurement
      const leftCol = document.createElement('div');
      leftCol.className = 'flex-1';
      hiddenContainer.appendChild(leftCol);
      
      const rightCol = document.createElement('div');
      rightCol.className = 'flex-1';
      hiddenContainer.appendChild(rightCol);

      // Loop through both arrays
      for (let i = 0; i < Math.max(leftCards.length, rightCards.length); i++) {
        let leftHeight = 0;
        let rightHeight = 0;

        // Create and measure left card with ALL elements
        if (leftCards[i]) {
          const leftDiv = document.createElement('div');
          leftDiv.className = 'group bg-[#FFFFFF] border border-[#ECECEC] hover:bg-[#3CAB5C] px-2 md:px-5 py-3 md:py-5 flex mx-1 md:mx-5 my-3 md:my-5 rounded-xl md:rounded-3xl gap-4 md:gap-5 items-center transition-colors duration-300';
          
          // Add the icon
          const iconContainer = document.createElement('div');
          iconContainer.className = 'w-6 h-6 md:w-8 md:h-8 text-[#333333] transition-colors duration-300';
          iconContainer.innerHTML = leftCards[i].icon.props.children;
          leftDiv.appendChild(iconContainer);
          
          // Add the text
          const textElement = document.createElement('p');
          textElement.className = 'text-[#333333] text-md md:text-xl transition-colors duration-300 group-hover:text-white';
          textElement.textContent = leftCards[i].text;
          leftDiv.appendChild(textElement);
          
          leftCol.appendChild(leftDiv);
          leftHeight = leftDiv.offsetHeight;
          leftCol.removeChild(leftDiv);
        }

        // Create and measure right card with ALL elements
        if (rightCards[i]) {
          const rightDiv = document.createElement('div');
          rightDiv.className = 'group bg-[#52C171] border-none hover:bg-[#ffffff] transition-colors duration-300 px-2 md:px-5 py-3 md:py-5 flex mx-1 md:mx-5 my-3 md:my-5 rounded-xl md:rounded-3xl gap-3 md:gap-5 items-center';
          
          // Add the icon
          const iconContainer = document.createElement('div');
          iconContainer.className = 'w-8 h-8 md:w-8 md:h-8';
          iconContainer.innerHTML = rightCards[i].icon.props.children;
          rightDiv.appendChild(iconContainer);
          
          // Add the text
          const textElement = document.createElement('p');
          textElement.className = 'text-md md:text-xl text-white transition-colors duration-300 group-hover:text-[#3A4151]';
          textElement.textContent = rightCards[i].text;
          rightDiv.appendChild(textElement);
          
          rightCol.appendChild(rightDiv);
          rightHeight = rightDiv.offsetHeight;
          rightCol.removeChild(rightDiv);
        }

        // Store the maximum height for this row
        const maxHeight = Math.max(leftHeight, rightHeight);
        heightsArray.push(maxHeight);
      }

      // Clean up
      document.body.removeChild(hiddenContainer);
      
      // Set the calculated heights
      setItemHeights(heightsArray);
      setIsCalculated(true);
    };

    // Use requestAnimationFrame for better timing
    const requestId = requestAnimationFrame(() => {
      calculateEqualHeights();
    });
    
    return () => cancelAnimationFrame(requestId);
  }, [leftCards, rightCards]);




  return (
     <section  className="font-neue relative w-full max-w-[1344px] mx-auto mt-10 sm:mt-20 mb-10 px-1 sm:px-0" ref={containerRef}>
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

      <h1 className="text-3xl md:text-6xl mt-2 text-left mb-8">
        From Hands-on to Hands-free
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 md:gap-5 w-full h-full my-20 ">
        {/* Left Card - Self Management */}
        <div className="flex-1 bg-[#F6F7F9] rounded-xl py-10 md:py-0 pb-16 md:pb-20">
          <h2 className="text-center text-3xl md:text-4xl py-4 md:py-12">Self Management</h2>
          
          <div className="mt-12">
            {leftCards.map((card, index) => (
              <div
                key={`left-${index}`}
                className="group bg-[#FFFFFF] border border-[#ECECEC] hover:bg-[#3CAB5C] px-2 md:px-5 py-3 md:py-5 flex mx-1 md:mx-5 my-3 md:my-5 rounded-xl md:rounded-3xl gap-4 md:gap-5 items-center transition-colors duration-300"
                style={{ 
                  minHeight: isCalculated && itemHeights[index] ? `${itemHeights[index]}px` : 'auto' 
                }}
              >
                <div 
                  className="w-6 h-6 md:w-8 md:h-8 text-[#333333] transition-colors duration-300 "
                >
                    { card.icon }
                </div>
                <p className="text-[#333333] text-md md:text-xl transition-colors duration-300 group-hover:text-white ">
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
                className="group bg-[#52C171] border-none hover:bg-[#ffffff] transition-colors duration-300 px-2 md:px-5 py-3 md:py-5 flex mx-1 md:mx-5 my-3 md:my-5 rounded-xl md:rounded-3xl gap-3 md:gap-5 items-center"
                style={{ 
                  minHeight: isCalculated && itemHeights[index] ? `${itemHeights[index]}px` : 'auto' 
                }}
              >
                <div 
                  className="w-8 h-8 md:w-8 md:h-8"
                >
                 { card.icon }
                 </div>
                <p className="text-md md:text-xl text-white transition-colors duration-300 group-hover:text-[#3A4151]">
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


    </section>
  );
};

export default WhatMakes