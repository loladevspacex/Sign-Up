let btn = document.querySelector('.fa-eye')
let inputSenha = document.querySelector('#password')

let username = document.querySelector('#username')
let labelUsername = document.querySelector('#labelUsername')
let validUsername = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let password = document.querySelector('#password')
let labelPassword = document.querySelector('#labelPassword')
let validPassword = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

username.addEventListener('keyup', () => {
  if (username.value.length <= 2) {
    labelUsername.setAttribute('style', 'color: red')
    labelUsername.innerHTML =
      '<strong>*Insira no mínimo tês caracteres*</strong>'
    username.setAttribute('style', 'border-color: red')
    validUsername = false
  } else {
    labelUsername.setAttribute('style', 'color: green')
    labelUsername.innerHTML = 'Username'
    username.setAttribute('style', 'border-color: green')
    validUsername = true
  }
})

email.addEventListener('keyup', () => {
  if (email.value.length <= 12) {
    labelEmail.setAttribute('style', 'color: red')
    labelEmail.innerHTML = '<strong>*Insira um E-mail válido*</strong>'
    email.setAttribute('style', 'border-color: red')
    validEmail = false
  } else {
    labelEmail.setAttribute('style', 'color: green')
    labelEmail.innerHTML = 'E-mail'
    email.setAttribute('style', 'border-color: green')
    validEmail = true
  }
})
password.addEventListener('keyup', () => {
  if (password.value.length <= 5) {
    labelPassword.setAttribute('style', 'color: red')
    labelPassword.innerHTML =
      '<strong>*Insira no mínimo seis caracteres*</strong>'
    password.setAttribute('style', 'border-color: red')
    validPassword = false
  } else {
    labelPassword.setAttribute('style', 'color: green')
    labelPassword.innerHTML = 'Password'
    password.setAttribute('style', 'border-color: green')
    validPassword = true
  }
})

function register() {
  if (validUsername && validEmail && validPassword) {
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    listaUser.push({
      userCad: username.value,
      emailCad: email.value,
      passwordCad: password.value
    })

    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''

    setTimeout(() => {
      window.Location.href = 'https://loladevspacex.github.io/Login/' /* chamar outra janela */
    }, 3000)
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha os campos corretamente</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

btn.addEventListener('click', () => {
  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})
