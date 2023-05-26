const delay = (del) => {
    return new Promise((resolve, reject) => {
        if (del <= 0) {
            reject();
        }
        setTimeout(resolve, del);
    });
};

delay(3000)
    .then(() => console.log("Fire after 3 sec"))
    .catch(() => console.log("Error!"));
