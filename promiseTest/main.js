/* function delay(ms, callback, callbackError) {
    ms ? setTimeout(callback, ms) : cbEr();
}

delay(3000, callback, cbEr);

function callback() {
    console.log("callback");
}

function cbEr() {
    console.log("cbErrr");
}
 */

function delay(ms) {
    return new Promise((resolve, reject) => {
        ms ? setTimeout(resolve, ms) : reject();
    });
}
delay(3000)
    .then(() => console.log("accesses"))
    .catch(() => console.log("error"));
