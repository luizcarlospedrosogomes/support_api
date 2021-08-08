import {screenShot} from  './util.js';

const ButtonPrint = () =>{
    const button = document.createElement("button")
    button.innerHTML = `Capturar Tela`;
    //button.setAttribute("style", cssClose);
    button.setAttribute("class", "support_button_print"); 
    button.onclick =  screenShot    
    return button    
}
export {ButtonPrint};
