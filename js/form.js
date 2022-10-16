let registerForm = document.getElementById('register-form');
let inputs = document.querySelectorAll('input:not([type=checkbox])')

const tests = {
    'user-name': /^[a-zA-Z0-9_-]{6,14}$/,
    'user-pass': /^[a-zA-Z0-9]{8,12}/,
    'user-email': /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/
}

const validarIngresos = function( event ){
    let name = event.target.name;
    let input = event.target;
    switch( name ){
        case 'user-name':
            validarCampo(input);
            break
        case 'user-pass':
            validarCampo(input);
            break
        case 'user-email':
            validarCampo(input);
            break
    }

}
const validarCampo = function( input ) {
    let name = input.name;
    let valorActual = input.value;
    if( tests[name].test(valorActual)){
        //pasa la comprobacion
        input.classList.add('glow-passed');
        input.classList.remove('glow-error');
        borrarMsjError( name );
    }
    else{
        input.classList.add('glow-error');
        input.classList.remove('glow-passed');
        mostrarMsjError( name );
    }

}
const mostrarMsjError = function( inputName ){
    let p = document.getElementById(`${inputName}-error`);
    switch( inputName ){
        case 'user-name':
            p.innerText = 'Nombre de usuario no válido';
            p.classList.remove('noVisible'); 
            break
        case 'user-pass':
            p.innerText = 'La contraseña debe tener una longitud minima de 8 caracteres y solo puede contener letras y números.';
            p.classList.remove('noVisible'); 
            break
        case 'user-email':
            p.innerText = 'Ingrese una dirección de correo válida.';
            p.classList.remove('noVisible'); 
    }
}
const borrarMsjError = function( inputName ){
    let p = document.getElementById(`${inputName}-error`);
    p.innerText = '';
    p.classList.add('noVisible'); 
}
inputs.forEach( input => {
    input.addEventListener('input', validarIngresos )
    input.addEventListener('blur',validarIngresos )
    }
)


registerForm.addEventListener('submit', ( event )=>{
    event.preventDefault();
})