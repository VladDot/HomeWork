import React from "react";
import MainButton from "../A/mainButton";
import MainInput from "../A/mainInput";
import ChatIcon from "../A/ChatIcon";
import PhoneIcon from "../A/PhoneIcon";
import MapIcon from "../A/MapIcon";

const HeaderActions = () => {
    return (
        <div className="w-5/12 md:flex items-center justify-between hidden ">
            <MainButton />
            <ChatIcon />
            <PhoneIcon />
            <MapIcon />
            <MainInput />
        </div>
    );
};

export default HeaderActions;
