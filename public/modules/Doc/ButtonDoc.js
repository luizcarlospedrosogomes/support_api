
const id = "support_button_doc"

const setMode = () => {
    const button  = document.getElementById(id)
    if(window.support.docMode){
        window.support.docMode = null;
        button.innerHTML="Documentação Desabilidata" 
    }else{
        window.support.docMode = true;
        button.innerHTML="Documentação Habilidata" 
    }
} 

const ButtonDoc = () =>{
    const button = document.createElement("button")
    button.innerHTML = `Documentação`;    
    button.setAttribute("class", "support_doc"); 
    button.setAttribute("id", id);   
    button.onclick = setMode;    
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
export {ButtonDoc, hide, show};