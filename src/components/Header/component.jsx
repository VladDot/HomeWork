import React from "react";
import { ReactComponent as LogoIcon } from "../../logo.svg";
import NavItem from "./NavItem/component";
import HeaderActions from "../A/HeaderActions";
import Burger from "../A/Burger";

const Header = () => {
    return (
        <header className=" h-10 mb-5 px-2">
            <div className="h-full flex justify-between items-center">
                <div className="  flex items-center justify-between ">
                    <LogoIcon />
                    <nav className="space-x-6 ml-8 items-center hidden  md:flex md:justify-between">
                        <NavItem text="Feature" />
                        <NavItem text="Company" />
                        <NavItem text="Careers" />
                        <NavItem text="About" />
                    </nav>
                </div>
                <Burger />
                <HeaderActions />
            </div>
        </header>
    );
};

export default Header;
