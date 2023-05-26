const form = document.querySelector(".form");

function help(select) {
    return form.querySelector(select).value;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: help("#name"),
            body: help("#text"),
            userId: help("#userId"),
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
});
