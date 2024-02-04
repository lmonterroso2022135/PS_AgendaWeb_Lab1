const contenedorTareas = document.getElementById('contenedorTareas');
const contenedorEditar = document.getElementById('editarForm');
const miSwitch = document.getElementById('switch');


const agregarTarea = event =>{
    event.preventDefault();
    const {value} = event.target.descripcion;
    if(!value){
        alert('agregar una descripcion');
        return;
    } 
    
    const botonEditar = document.createElement('button');
    botonEditar.textContent = 'Editar';
    botonEditar.addEventListener('click', function () {
        editarTarea(this);
    });


    const tarea = document.createElement('div');
    tarea.classList.add('tarea');
    tarea.addEventListener('click', cambiarEstado)
    tarea.textContent = value;


    tarea.appendChild(botonEditar);
    contenedorTareas.prepend(tarea);

    if (miSwitch.checked) {
        tarea.classList.toggle('prioridad');
        tarea.classList.toggle('pri');
    }
    event.target.reset();
};

function editarTarea(tareaEdit){
    const btnBorrar = document.getElementById('btnBorrar');
    const tarea = tareaEdit.parentNode; // Obtener el div tarea
    contenedorEditar.style.display = 'block';

    btnBorrar.addEventListener('click', borrarTarea)
    function borrarTarea(){
        tarea.remove();
    }
}



const cambiarEstado = event =>{
    event.target.classList.toggle('hecho');
    if(event.target.classList.contains('pri')){
        event.target.classList.toggle('prioridad');
    }
};

const order =() =>{
    
    const hecho = [];
    const pendiente = [];
    const prioridad = [];
    contenedorTareas.childNodes.forEach( el => {
        if (el.classList.contains('hecho')){
            hecho.push(el);
        }else if(el.classList.contains('prioridad')){
            prioridad.push(el);
        } else{
            pendiente.push(el);
        }
    })
    return [... prioridad,...pendiente, ...hecho];

};
const ordenarTareas = () =>{
    order().forEach(el => contenedorTareas.appendChild(el));
    alert('ggggggggggggg')
}