const cub = document.querySelector(".cub-size");
console.log(cub);

console.log(window.innerWidth);

cub.addEventListener("click", (e) => {
    console.log(e.target.clientLeft);
    let count = cub.offsetLeft;
    let runCub = setInterval(function run() {
        if (window.innerWidth - 31 <= count) clearInterval(runCub);
        cub.style.left = `${(count += 1)}px`;
    }, 10);
});
