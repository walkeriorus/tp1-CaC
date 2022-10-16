let login = document.createElement('div')//contenedor de formulario
let formLogin = document.createElement('form'); //creo el formulario
formLogin.setAttribute('id','loginForm');

let userInput = document.createElement('input');//creo el input para usuario supuestamente
userInput.type = 'text';
userInput.setAttribute('id','userName');
userInput.setAttribute('placeholder','usuario123');

let userLabel = document.createElement('Label');//creo su label
userLabel.innerText = 'Usuario';
userLabel.setAttribute('for','userName');//vinculo el label la campo userInput

let passwordInput = document.createElement('input');//creo el input para usuario supuestamente
passwordInput.type = 'password';
passwordInput.setAttribute('id','userPass');
passwordInput.setAttribute('placeholder','******')

let passwordLabel = document.createElement('Label');//creo su label
passwordLabel.innerText = 'Password';
passwordLabel.setAttribute('for','userPass');//vinculo el label la campo passwordInput

let submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.innerText = 'Iniciar Sesion';

formLogin.appendChild(userLabel);
formLogin.appendChild(userInput);
formLogin.appendChild(passwordLabel);
formLogin.appendChild(passwordInput);
formLogin.appendChild(submitButton);

export{ formLogin }