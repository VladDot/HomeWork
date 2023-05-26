document.addEventListener('DOMContentLoaded', e => {
    console.log('ready');

    const pencil = helperQs('#pencil')
    const todoText = helperQs('.todoText')
    const tipBtn = helperQs('.tipBtn')
    const overlay = helperQs('#overlay')
    const closebtn = helperQs('.closebtn')
    const todos = helperQs('.todos')
    const clear = helperQs('.clear')

    todos.addEventListener('click', e => {
        let currentEl = e.target
        if (currentEl.classList.contains('todo')) {
            currentEl.classList.toggle('checked')
        }
        if (currentEl.classList.contains('removeTodo')) {
            currentEl.closest('.todo').remove()
        }

    })

    // click on pencil
    pencil.addEventListener('click', () => {
        todoText.classList.toggle('display')
    })
    // click on tipBtn
    tipBtn.addEventListener('click', () => {
        overlay.style.height = '100%'
    })
    // click on closebtn
    closebtn.addEventListener('click', (e) => {
        e.preventDefault()
        overlay.style.height = '0'
    })
    // create todo
    todoText.addEventListener('keyup', (e) => {
        if (e.which === 13) {
            createTodo(e.target)
        }
    })

    clear.addEventListener('click', () => {
        todos.innerHTML = ''
    })

    // helpers 
    function helperQs(selector) {
        return document.querySelector(selector)
    }

    function createTodo(target) {
        if (target.value === '') return

        const li = document.createElement('li')
        li.classList.add('todo')

        const span = document.createElement('span')
        span.classList.add('removeTodo')

        const icon = document.createElement('i')
        icon.classList.add('fas', 'fa-trash-alt')

        span.append(icon)
        li.append(span)
        li.append(target.value)

        todos.append(li)

        target.value = ''

    }
})