function httpGet(method, url, body) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open(method, url);
        xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
        if (method === "GET") {
            xhr.send();
        } else {
            xhr.send(body);
        }

        xhr.onload = function () {
            console.log(xhr.status);
            console.dir(xhr);
            if (xhr.status >= 200 && xhr.status < 400) {
                resolve(xhr.response);
            } else {
                reject(new Error(`Request failed: ${xhr.statusText}`));
            }
        };
        xhr.onerror = function (e) {
            console.log(e.status);
            reject(new Error("Network error"));
        };
    });
}

/* httpGet("GET", `https://jsonplaceholder.typicode.com/posts?userId=2`)
    .then(function (response) {
        console.log("Resolve : ", JSON.parse(response));
    })

    .catch(function (error) {
        console.log("Reject:", error);
    }); */

/* httpGet(
    "POST",
    `https://jsonplaceholder.typicode.com/posts`,
    JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
    })
)
    .then(function (response) {
        console.log(JSON.parse(response));
    })

    .catch(function (error) {
        console.log(error);
    });
 */
/* httpGet(
    "PUT",
    `https://jsonplaceholder.typicode.com/posts/2`,
    JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 5,
    })
)
    .then(function (response) {
        console.log(JSON.parse(response));
    })

    .catch(function (error) {
        console.log(error);
    });
 */
httpGet("DELETE", `https://jsonplaceholder.typicode.com/posts/2`);
