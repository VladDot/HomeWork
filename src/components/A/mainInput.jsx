import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const MainInput = () => {
    return (
        <div className="my-5 flex items-center w-7/12">
            <AiOutlineSearch className="border rounded-l  w-12 h-full p-2 bg-gray-100 hover:border-gray-600 cursor-pointer" />
            <input
                placeholder="Search"
                type="email"
                className="text-gray-700 bg-gray-100 p-2 w-full border rounded-t hover:border-gray-600"
            ></input>
        </div>
    );
};

export default MainInput;
