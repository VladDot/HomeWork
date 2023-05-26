$.ajax('https://jsonplaceholder.typicode.com/todos')
    .done(function (users) {

        users.forEach(function (user) {
            console.log(user);
        });

    })

function renderUser(user) {
    return `<div>${user.id}</div>`
}