const contenedorTareas = document.getElementById('contenedorTareas');



const agregarTarea = event =>{
    event.preventDefault();
    const {value} = event.target.descripcion;
    if(!value){
        alert('agregar una descripcion');
        return;
    } 
    const botonEditar = document.createElement('button');
    botonEditar.textContent = 'Editar';
    botonEditar.addEventListener('click', editarTarea);


    const tarea = document.createElement('div');
    tarea.classList.add('tarea');
    tarea.addEventListener('click', cambiarEstado)
    tarea.textContent = value;
    tarea.appendChild(botonEditar);
    contenedorTareas.prepend(tarea);
    event.target.reset();
};
const cambiarEstado = event =>{
    
    event.target.classList.toggle('hecho');
};
const order =() =>{
    
    const hecho = [];
    const pendiente = [];
    contenedorTareas.childNodes.forEach( el => {
        el.classList.contains('hecho') ? hecho.push(el) : pendiente.push(el);
    })
    return [...pendiente, ...hecho];

};
const ordenarTareas = () =>{
    order().forEach(el => contenedorTareas.appendChild(el));
    alert('ggggggggggggg')
}




function editarTarea(event) {
    const tareaE = event.target.parentNode;

};