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
let datosUsuario = {
    'user-name':null,
    'user-pass': null,
    'user-email':null,
    'intereses': []
}
const validarCampo = function( input ) {
    let name = input.name;
    let valorActual = input.value;
    if( tests[name].test(valorActual)){
        //pasa la comprobacion
        input.classList.add('glow-passed');
        input.classList.remove('glow-error');
        borrarMsjError( name );
        datosUsuario[name] = valorActual;
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
            break

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
const comprobarDatosUsuario = function(){
    //devuelve false si algun campo no tiene valor
    for( clave in datosUsuario ){
        if( datosUsuario[clave] === null){
            return false
        }
    }
    return true
}
const guardarDatosUsuario = function(){
    for( prop in datosUsuario ){
        if(datosUsuario[prop] === null){
            //si hay un null, ese campo esta vacío
            return false
        }
    }
    sessionStorage.setItem(datosUsuario['user-name'],JSON.stringify(datosUsuario))
    return true
    //si no encuentro ningún campo vacío, guardo el objeto datosUsuario en sessionStorage

}

const comprobarIntereses = function(){
    let checkboxes = document.querySelectorAll('#intereses input[type="checkbox"]');
    let marcados = 0;
    for( checkbox of checkboxes){
        if( checkbox.checked){
            marcados +=1;
            datosUsuario['intereses'].push( checkbox.value )
        }
    }
    if( marcados === 0){
        document.getElementById('intereses-error').classList.remove('noVisible');
        return false
    }
    else{
        document.getElementById('intereses-error').classList.add('noVisible');
        return true
    }
}

registerForm.addEventListener('submit', ( event )=>{
    let terminos = document.getElementById('terminos').checked;
    if( comprobarDatosUsuario() && comprobarIntereses() && terminos ){
        if( sessionStorage.getItem(datosUsuario['user-name']) === null){
            guardarDatosUsuario();
            registerForm.reset();
        }else{
            event.preventDefault();
        }

    }else{
            event.preventDefault();
    }

}
)