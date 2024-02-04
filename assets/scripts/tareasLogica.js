const contenedorTareas = document.getElementById('contenedorTareas');
const contenedorEditar = document.getElementById('editarForm');
const contenedorAgregar = document.getElementById('agregarForm');
const miSwitch = document.getElementById('switch');
const miSwitchE = document.getElementById('switchEditar');
const btnSA = document.getElementById('btnSalirA');
const btnSE = document.getElementById('bntSalirE');


const generarBotonEdicion = (tarea) => {
    const botonEditar = document.createElement('button');
    botonEditar.addEventListener('click', () => editarTarea(tarea));

    return botonEditar;
};
const agregarTarea = event =>{
    
    event.preventDefault();
    const {value} = event.target.descripcion;
    if(!value){
        alert('agregar una descripcion');
        return;
    } 

    const tarea = document.createElement('div');
    tarea.classList.add('tarea');
    tarea.addEventListener('click', cambiarEstado)
    tarea.textContent = value;


    const botonEditar = generarBotonEdicion(tarea);/* */
    tarea.appendChild(botonEditar);/* */
    contenedorTareas.prepend(tarea);

    if (miSwitch.checked) {
        tarea.classList.toggle('prioridad');
        tarea.classList.toggle('pri');
    }
    event.target.reset();
    agregarForm.style.display = 'none';
};

const editarTarea = () =>{
    agregarForm.style.display = 'none';
    deshabilitarBotones()
    const btnBorrar = document.getElementById('btnBorrar');
    const btnActualizar = document.getElementById('btnActualizar');
    const InDescripcion = document.getElementById('InDescripcion');
    const tarea = event.target.parentNode; 
    contenedorEditar.style.display = 'block';
    InDescripcion.value = tarea.textContent;

    if(tarea.classList.contains('pri')){
        miSwitchE.checked = true;
    }
    
    btnBorrar.addEventListener('click', () => borrarTarea(tarea));
    btnActualizar.addEventListener('click', () => actualizarTarea(tarea));

    
    function borrarTarea(){
        tarea.remove();
        contenedorEditar.style.display = 'none';
        habilitarBotones()
    }
    function actualizarTarea(){
        const textoInput = InDescripcion.value;
        tarea.textContent = textoInput;
        const botonEditar = generarBotonEdicion(tarea);
        tarea.appendChild(botonEditar);    
        
        if (!(miSwitchE.checked)) {
            tarea.classList.remove('prioridad');
            tarea.classList.remove('pri');
        }else{
            tarea.classList.add('prioridad');
            tarea.classList.add('pri');
        }
        tarea.classList.remove('hecho');
        contenedorEditar.style.display = 'none';
        
        habilitarBotones();
        
    }


};

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
function abrirFormulario(){
    agregarForm.style.display = 'block';
}
const ordenarTareas = () =>{
    order().forEach(el => contenedorTareas.appendChild(el));
}
function deshabilitarBotones(){
    const botonesFueraDelDiv = document.querySelectorAll('button:not(#editarForm button)');
    botonesFueraDelDiv.forEach(function (boton) {
        boton.disabled = true;
    });
}
function habilitarBotones(){
    const botonesFueraDelDiv = document.querySelectorAll('button:not(#editarForm button)');
    botonesFueraDelDiv.forEach(function (boton) {
        boton.disabled = false;
    });
}
function salirDeEditar(){
    contenedorEditar.style.display = 'none';
    habilitarBotones();
};
function salirDeAgregar(){
    habilitarAgregar.style.display = 'none';
    habilitarBotones();
};
