import {stopRecordingCallback} from './Start.js';
const id = "support_button_stop_rec"
const ButtonStop = () =>{
    const button = document.createElement("button")
    button.innerHTML = `Parar Gravação`;    
    button.setAttribute("class", "support_button_stop_rec"); 
    button.setAttribute("id", id); 
    button.style.display= 'none'
    button.onclick =  stopRecordingCallback    
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
export {ButtonStop, hide, show};