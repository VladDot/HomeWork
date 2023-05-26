

document.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('.container')

    console.log(container);

    container.addEventListener('click', event => {
        console.log(event.target);
        console.log(event.target.classList.value === 'plus');
        if (event.target.classList.value === 'plus') {
            event.target.parentElement.querySelector('.count').innerHTML++
        } else if (event.target.classList.value === 'minus') {
            event.target.parentElement.querySelector('.count').innerHTML--

        }

    })
})