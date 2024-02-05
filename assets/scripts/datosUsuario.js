const ventanaPerfil = document.getElementById('contenedorPerfil');
const textoEmail = document.getElementById("emailH4");
const textoNombre = document.getElementById("nombreH4");
const textoUser = document.getElementById("usuarioH2");
const btnPerfil = document.getElementById('btnPerfil');
const usuarioLogueado = localStorage.getItem('userLog');

const usuarios = [
    { user: 'cjuarez', nombre:'Carlos Juarez', email:'cjuarez2017@kinal.edu.gt'},
    { user: 'dmorales', nombre:'Diego Morales', email:'dmorales2022@kinal.edu.gt' },
    { user: 'lmonterroso', nombre:'Luis Monterroso',email:'luisitoomoont@gmail.com' }
];


    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].user === usuarioLogueado) {
            textoNombre.innerHTML = usuarios[i].nombre;
            textoUser.innerHTML = usuarios[i].user;
            textoEmail.innerHTML = usuarios[i].email;
        }
    }
function cerrarSesion(){
    window.location.href = "../../index.html";
}
btnPerfil.addEventListener('click', moVentanaPerfil)
function moVentanaPerfil(){
            if (ventanaPerfil.style.display === 'none') {
                ventanaPerfil.style.display = 'block';
            } else {
                ventanaPerfil.style.display = 'none';
            }
}





