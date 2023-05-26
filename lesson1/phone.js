function Login() {
    const form = document.createElement('form')
    form.className = 'formaPhone'


    const phoneInput = document.createElement('input')
    phoneInput.className = 'input'
    phoneInput.type = 'tel'
    phoneInput.placeholder = 'phone'

    let reg = /^\+\d{2} \(\d{3}\) \d{3}-\d{2}-\d{2}$/


    form.append(phoneInput)
    regTest(reg, phoneInput)
    return form
}
document.body.append(Login())

function regTest(reg, phoneInput) {

    phoneInput.addEventListener('focusout', () => {

        console.log(phoneInput.value);

        reg.test(phoneInput.value) ? alert('OK') : alert('ne OK')

        phoneInput.value = ''
    })

}