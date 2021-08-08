import {require, screenShot, logo} from "./modules/util.js";
import {ModalHelper} from "./modules/ModalHelp.js";

window.addEventListener("load", function(){
    require("/modules/external/RecordRTC.min.js");
    require("/modules/external/html2canvas.min.js");    
    console.log("SUPPORT conected")
    logo(ModalHelper)
   
});

window.addEventListener("onerror", function(e){    
    console.log(err) // Uncaught SyntaxError: Invalid or unexpected token at Line no:- 1
    return false;   // so you still log errors into console 
});
window.addEventListener("keydown", function(e){    
    const keyCode = e.keyCode || e.which;
    if( keyCode === 112){
        e.preventDefault();
        ModalHelper()
    }
    console.log(keyCode)
});