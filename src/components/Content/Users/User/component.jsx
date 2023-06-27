import React from "react";

const User = ({
    name,
    username,
    email,
    phone,
    website,
    address: {
        city,
        street,
        geo: { lat, lg },
    },
    company: { name: companyName, catchPhrase },
}) => {
    return (
        <>
            <div className="w-1/4 border-2 rounded-md m-2 border-indigo-500 ">
                <div className=" bg-gradient-to-tr from-red-500 via-gray-500 to-blue-500 hover:to-green-500  h-40 relative rounded-t "></div>
                <div className="border-t-2  border-indigo-500 p-2 overflow-auto h-40 wrap">
                    <h2 className="text-warning text-xl ">Name: {name}</h2>
                    <p>Username: {username}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Website: {website}</p>
                    <p>City: {city}</p>
                    <p>Street: {street}</p>
                    <p>Lat: {lat}</p>
                    <p>Lg: {lg}</p>
                    <p>Company Name: {companyName}</p>
                    <p>Catch Phrase: {catchPhrase}</p>
                </div>
            </div>
        </>
    );
};

export { User };
