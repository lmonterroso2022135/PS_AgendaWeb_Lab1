
const button = document.getElementById('button-log-in');

const usuarios = [
    { correo: 'cjuarez', contraseña: '1234' },
    { correo: 'mmorales', contraseña: '4321' },
    { correo: 'lmonterroso', contraseña: '1234' }
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
         window.location.href = "./assets/pages/contactos.html";
    } else {
        alert("CREDENCIALES INCORRECTAS");
    }
}

button.addEventListener('click', iniciarSesion)


