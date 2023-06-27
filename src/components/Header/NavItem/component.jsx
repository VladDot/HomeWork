import React from "react";

const NavItem = ({ text = "fws", children }) => {
    return (
        <div className="relative">
            <div className="flex space-x-2 cursor-pointer items-center">
                <span className="uppercase font-bold text-purple-800 hover:text-red-800 border-b-2 border-transparent hover:border-red-800 ease-in-out duration-300">
                    {text}
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 ml-0 hover:rotate-180 ease-in duration-200 "
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </div>
            {children}
        </div>
    );
};

export default NavItem;
