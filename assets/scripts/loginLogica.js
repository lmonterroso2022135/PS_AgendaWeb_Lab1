
const button = document.getElementById('button-log-in');

const usuarios = [
    { correo: 'cjuarez', contraseña: '1234' , nombre:'Carlos Juarez'},
    { correo: 'dmorales', contraseña: '4321', nombre:'Diego Morales' },
    { correo: 'lmonterroso', contraseña: '1234', nombre:'Luis Monterroso'}
];


function comprobar(correo, contraseña) {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].correo === correo && usuarios[i].contraseña === contraseña) {
            return true;
        }
    }
    return false;
}

function iniciarSesion(e) {
    e.preventDefault();     
    const user = document.getElementById("user").value;
    const password = document.getElementById("pass").value;
    console.log({user, password})
    

    if (comprobar(user, password)) {
        localStorage.setItem('userLog', user);

        window.location.href = "./assets/pages/contactos.html";

    } else {
        alert("CREDENCIALES INCORRECTAS");
    }
}

button.addEventListener('click', iniciarSesion)


