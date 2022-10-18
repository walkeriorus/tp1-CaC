window.addEventListener('load',()=>{
    let defaultUser = {
        'user-name': 'sounds',
        'user-pass':'sounds123',
        'user-email':'sounds@mail.com',
    }
    sessionStorage.setItem( defaultUser["user-name"], JSON.stringify( defaultUser ));
})

const login = function( event ){
    let userName = document.getElementById('login-user');
    let userPass = document.getElementById('login-pass');
    let error = document.getElementById('login-error');
    if( sessionStorage.getItem( userName.value ) !== null ){
        //obtengo los datos desde sessionStorage
        let datosUsuario = JSON.parse( sessionStorage.getItem(userName.value) );
        if( userName.value === datosUsuario['user-name'] && userPass.value === datosUsuario['user-pass'] ){
            //puede iniciar sesión

            error.classList.add('noMostrar')
        }
        else{
            event.preventDefault();
            error.innerText= 'Error, usuario o contraseña invalidos';
            error.classList.remove('noMostrar')
            setTimeout(()=>{
                error.classList.add('noMostrar')
            }, 2000);
        }
    }
    else{
        event.preventDefault();
        error.innerText = 'El usuario no existe';
        error.classList.remove('noMostrar')
        setTimeout(()=>{
            error.classList.add('noMostrar')
        }, 2000);
    }
}
const mostrarForm = function(){
    let form = document.getElementById('loginForm');
    form.classList.toggle('noMostrar');
    form.classList.toggle('flex');
    form.reset();
}



let loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', mostrarForm )
let formularioInicio = document.getElementById('loginForm');
formularioInicio.addEventListener('submit', login )