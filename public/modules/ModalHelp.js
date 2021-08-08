import {ButtonPrint} from './ButtonPrint.js';
import {ButtonStart} from './Rec/ButtonStart.js';
import {ButtonStop} from './Rec/ButtonStop.js';

const cssModal = `  display: none; /* Hidden by default */
                    position: fixed; /* Stay in place */
                    z-index: 1; /* Sit on top */
                    padding-top: 100px; /* Location of the box */
                    bottom: 0;
                    left: 0;
                    width: 100%; /* Full width */
                    height: 20%; /* Full height */
                    overflow: auto; /* Enable scroll if needed */
                    background-color: rgb(0,0,0); /* Fallback color */
                    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */`;

const cssModalContent = `background-color: #fefefe;
                         margin: auto;
                         padding: 20px;
                         border: 1px solid #888;
                        width: 80%;`;
const cssClose = ` color: #aaaaaa;
                    float: right;
                    font-size: 28px;
                    cursor: pointer;
                    font-weight: bold;`

const ModalHelper = () =>{  
        console.log("modal")
        const modalLoaded = document.getElementById("modal_support");
        if(modalLoaded) modalLoaded.remove();

        const divModal = document.createElement("div");
        divModal.setAttribute("id", "modal_support");    
        divModal.setAttribute("class", "modal_support");
        divModal.setAttribute("style", cssModal);
        
        const divModalContent = document.createElement("div")
        divModalContent.setAttribute("class", "modal_support_content");
        divModalContent.setAttribute("style", cssModalContent)

        const divModalSpanClose = document.createElement("span")
        divModalSpanClose.innerHTML = `&times;`;
        divModalSpanClose.setAttribute("style", cssClose);
        divModalSpanClose.setAttribute("class", "close_modal_support");      
        const divModalTitle = document.createElement("p");
        divModalTitle.innerHTML='Suporte';

        divModalContent.appendChild(divModalSpanClose)
        divModalContent.appendChild(divModalTitle)
        divModalContent.appendChild(ButtonPrint());
        divModalContent.appendChild(ButtonStart());
        divModalContent.appendChild(ButtonStop());
        divModal.appendChild(divModalContent)
        document.body.appendChild(divModal);  
       
        const span = document.getElementsByClassName("close_modal_support")[0];
        
        span.onclick = () => {            
            divModal.style.display = "none";
        }
        divModal.style.display = "block";
    
    }

export {ModalHelper};
