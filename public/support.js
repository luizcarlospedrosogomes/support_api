import {require, screenShot, logo, requireCDN} from "./modules/util.js";
import {ModalHelper} from "./modules/ModalHelp.js";
import {Modal as ModelDoc} from './modules/Doc/Modal.js';

window.addEventListener("load", function(){
    require("/modules/external/RecordRTC.min.js");
    require("/modules/external/html2canvas.min.js");    
    requireCDN("https://cdn.jsdelivr.net/remarkable/1.7.1/remarkable.min.js")    
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
var lastelem;
document.onmouseover = function (e) {
    var event = e || window.event;

    if (lastelem) {
            if(borderBackup)  lastelem.style.border = borderBackup;
            else lastelem.style.border = "1px solid";
    }
    
    var target = event.target || event.srcElement;
    var borderBackup = target.style.border;

    if(target.tagName  === 'INPUT' || target.tagName  === 'FORM'){        
        ModelDoc(target)
        target.style.border = "1px solid blue";
        lastelem = target;
    }
    
    
};