document.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('.container')
    let cub = document.querySelectorAll('.cub')
    console.log(container);
    cub.forEach(i => {
        i.addEventListener('click', e => {
            i.style.backgroundColor = 'red'
            if (i.style.backgroundColor === 'red') {
                container.append(i)
            }
        })
    });

})