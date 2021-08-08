import {startRecording} from './Rec/Start.js';

const ButtonRec = () =>{
    const button = document.createElement("button")
    button.innerHTML = `Gravar Tela`;    
    button.setAttribute("class", "support_button_rec"); 
    button.onclick =  startRecording    
    return button    
}
export {ButtonRec};
