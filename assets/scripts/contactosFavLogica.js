
function mostrarInfoDeContacto(infoContacto){
    const usuario = infoContacto.parentNode.parentNode.children[2].innerText;
    switch(usuario){
        case 'jjimenez':
            window.location.href = '../pages/infoContacto1.html';
        break;
        case 'lquiyuch':
            window.location.href = '../pages/infoContacto2.html'
        break;
        case 'apalma':
            window.location.href = '../pages/infoContacto3.html'
        break;
        case 'dmorales':
            window.location.href = '../pages/infoContacto4.html'
        break;
        case 'cjuarez':
            window.location.href = '../pages/infoContacto5.html'
        break;
    
    }
    
}
