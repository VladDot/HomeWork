let admin = {
    login: 'aa',
    password: 'aa',
}
/* console.log(Object.keys(admin));
console.log(Object.values(admin)); */






function queryValue(val) {
    return document.querySelector(val).value
}


function helperCreate(tag, classTag, holderTag) {
    let name = document.createElement(tag)
    name.className = classTag
    name.placeholder = holderTag

    return name
}

function createBtnLogout() {
    const btnEx = helperCreate('button', 'btn', '')
    btnEx.innerHTML = 'Logout'
    /*     logoutBtn(btnEx) */
    btnEx.addEventListener('click', e => {
        let formNone = document.querySelector('.form')
        btnEx.classList.add('invis')
        console.log(document.querySelector('.form'));
        if (document.querySelector('.form')) {
            formNone.classList.remove('invis')
            console.log(1);
        } else {
            document.body.append(createForm())
            console.log(2);

        }

        localStorage.removeItem('login')
    })
    return btnEx
}

function createForm() {
    let form = helperCreate('form', 'form', '')
    let loginDiv = helperCreate('div', 'divLog', '')
    let buttonDiv = helperCreate('div', 'divBtn', '')
    let login = helperCreate('input', 'log', 'login')
    let password = helperCreate('input', 'pas', 'password')
    let subBtn = helperCreate('button', 'btn', '')


    login.style.width = '100%'
    login.style.margin = '5px'

    password.style.width = '100%'
    password.style.margin = '5px'

    subBtn.style.margin = '5px'
    subBtn.innerHTML = 'submit'

    buttonDiv.style.display = 'flex'
    buttonDiv.style.justifyContent = 'center'


    form.append(loginDiv)
    form.append(buttonDiv)
    loginDiv.append(login)
    loginDiv.append(password)
    buttonDiv.append(subBtn)
    loginForm(form)
    return form
}




function loginForm(form) {

    form.addEventListener('submit', e => {
        let pasFalse = document.querySelector('.pas')
        let logFalse = document.querySelector('.log')
        let formNone = document.querySelector('.form')
        e.preventDefault()
        if (queryValue('.log') !== admin.login || queryValue('.log') === '') {
            logFalse.classList.add('falseStyle')

        } else {
            logFalse.classList.remove('falseStyle')

        }

        if (queryValue('.pas') !== admin.password || queryValue('.pas') === '') {
            pasFalse.classList.add('falseStyle')
        } else {
            pasFalse.classList.remove('falseStyle')
        }

        if (queryValue('.log') === admin.login &&
            queryValue('.pas') === admin.password) {
            alert('Hello')
            logFalse.value = ''
            pasFalse.value = ''
            formNone.classList.add('invis')

            if (document.querySelector('.btn')) {
                document.querySelector('.btn').classList.remove('invis')
            } else {
                document.body.append(createBtnLogout())
            }
            pasFalse.classList.remove('falseStyle')
            logFalse.classList.remove('falseStyle')
            localStorage.setItem('login', JSON.stringify(admin))
        }
    })
}



function cheackStorage() {

    let formNone = document.querySelector('.form')

    if (JSON.parse(localStorage.getItem('login')) === null) {
        document.body.append(createForm())
    } else if (JSON.parse(localStorage.getItem('login')).login === admin.login) {
        /*    formNone.classList.add('invis') */

        document.body.append(createBtnLogout())
    }
}
cheackStorage()