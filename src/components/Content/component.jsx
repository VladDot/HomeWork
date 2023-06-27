import React from "react";

import Users from "./Users/component";
import MainBanner from "../A/MainBanner";

const Main = () => {
    return (
        <>
            <section className="m-auto px-2 flex space-x-3 my-6">
                <div className="w-2/3 m-2">
                    <MainBanner />
                </div>
                <div className="w-1/3 bg-gradient-to-tl from-red-500 hover:via-gray-500/50 to-blue-500 hover:to-green-500  h-auto mb-2 relative rounded inline-block overflow-hidden">
                    <div className="p-4 absolute bottom-0 left-0 z-20">
                        <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                            lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem
                            ipsum
                        </h2>
                    </div>
                </div>
            </section>

            <section className="flex">
                <Users />
                <div className="w-3/12 border-2 m-2 rounded border-indigo-500 p-2 ">
                    fwfwfww
                </div>
            </section>
        </>
    );
};

export default Main;
