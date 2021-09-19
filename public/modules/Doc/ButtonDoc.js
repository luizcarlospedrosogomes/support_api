
const id = "support_button_doc"

const ButtonDoc = () =>{
    const button = document.createElement("button")
    button.innerHTML = `Documentação`;    
    button.setAttribute("class", "support_doc"); 
    button.setAttribute("id", id);       
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