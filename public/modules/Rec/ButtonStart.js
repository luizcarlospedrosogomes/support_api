import {startRecording} from './Start.js';
const id = "support_button_rec"
const ButtonStart = () =>{
    const button = document.createElement("button")
    button.innerHTML = `Gravar Tela`;    
    button.setAttribute("class", "support_button_rec"); 
    button.setAttribute("id", id); 
    button.onclick =  startRecording    
    return button    
}
const hide = () =>{
    const button  = document.getElementById(id)
    button.style.display= 'none';
}

const show = () =>{
    const button  = document.getElementById(id)
    button.style.display= 'inline';
}
export {ButtonStart, hide, show};
