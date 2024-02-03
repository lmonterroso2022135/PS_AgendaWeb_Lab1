
function mostrarInfoDeContacto(infoContacto){
    const usuario = infoContacto.parentNode.parentNode.children[1].innerText;
    
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
    
    
    // window.location.href = '../pages/infoContactos.html';   
    
    //     alert("hbkjhbjhbkj");
    //     var user1 = document.getElementById('user1');
    //     var user2 = document.getElementById('user2');
    //     var user3 = document.getElementById('user3');
    //     var user4 = document.getElementById('user4');
    //     var user5 = document.getElementById('user5'); 
    //     switch(usuario){
    //         case 'jjimenez':
    //             user2.style.display = 'none';
    //             user3.style.display = 'none';
    //             user4.style.display = 'none';
    //             user5.style.display = 'none';

    //         break;
    //         case 'lquiyuch':
                
    //             user1.style.display = 'none';
    //             user3.style.display = 'none';
    //             user4.style.display = 'none';
    //             user5.style.display = 'none';
    //         break;
    //         case 'apalma':
    //             user3.style.display = 'block';
    //         break;
    //         case 'dmorales':
    //             user4.style.display = 'block';
    //         break;
    //         case 'cjuarez':
    //             user5.style.display = 'block';
    //         break;
    //     } 

}
