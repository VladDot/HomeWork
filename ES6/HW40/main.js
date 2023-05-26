const userData = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496",
        },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
    },
};

const renderUser = ({
    id,
    name,
    username,
    email,
    address: {
        street,
        suite,
        city,
        zipcode,
        geo: { lat, lng },
    },

    phone,
    website,
    company,
} = userData) => {
    return `
    <div>${id}</div>
    <div>${name}</div>
    <div>${username}</div>
    <a href="">${email}</a>
    <div>${street}</div>
    <div>${suite}</div>
    <div>${city}</div>
    <div>${zipcode}</div>
    <div>${lat}</div>
    <div>${lng}</div>
    <div>${phone}</div>
    <div>${website}</div>
    <div>${company.name}</div>
    <div>${company.catchPhrase}</div>
    <div>${company.bs}</div>

    `;
};

document.body.insertAdjacentHTML("beforeend", renderUser(userData));

console.log(renderUser(userData));
