import React, { useEffect, useRef, useState } from "react";

type notificationProps = {
  count: number;
};

const BellButton = ({ count }: notificationProps): JSX.Element => {
  const [notiNumber, setNotiNumber] = useState(count);
  const [bellColor, setBellColor] = useState("none");
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const onBellClickHandler = () => {
    bellColor === "none" ? setBellColor("#2f97da") : setBellColor("none");
    setNotiNumber(0);
    setIsOpen(true);
  };

  useEffect(() => {
    const detectOutSideClick = (e: any) => {
      //       console.log("OUT");
      //     if(btnRef.current && btnRef.current.contains(e.target)){
      //       onBellClickHandler();
      //     console.log("IN");
      // }
    };

    document.body.addEventListener("click", detectOutSideClick, true);
    return () =>
      document.body.removeEventListener("click", detectOutSideClick, true);
  }, []);

  return (
    <button
      ref={btnRef}
      onClick={onBellClickHandler}
      className="relative border-0 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
      aria-label="Cart"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-700 "
        fill={bellColor}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
      <span className="absolute inset-1 object-right-top -mr-6">
        {notiNumber > 0 && (
          <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red text-white">
            {notiNumber}
          </div>
        )}
      </span>
    </button>
  );
};

export default BellButton;
