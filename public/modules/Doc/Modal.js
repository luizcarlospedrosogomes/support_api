
const id        = "support_modal_doc";
const scheme    = `https://`;
const host      = `dev.azure.com/`;
const org       = `lcpg0542/`;
const project   = `SUPORTE/`;
const wiki      = `SUPORTE.wiki`;


const cssModal = `  display: none; /* Hidden by default */
                    position: fixed; /* Stay in place */
                    z-index: 1; /* Sit on top */
                    padding-top: 10px; /* Location of the box */
                    top: 0;
                    right: 0;
                    width: 33%; /* Full width */
                    height: auto; /* Full height */
                    overflow: auto; /* Enable scroll if needed */
                    background-color: rgb(0,0,0); /* Fallback color */
                    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */`;

const cssModalContent = `background-color: #fefefe;
                         margin: auto;
                         padding: 20px;
                         border: 1px solid #888;`;
const cssClose = ` color: #aaaaaa;
                    float: right;
                    font-size: 28px;
                    cursor: pointer;
                    font-weight: bold;`

const Modal = async (target) =>{  
    
    document.body.style.cursor = 'wait'
    const url                  = `${scheme}${host}${org}${project}_apis/wiki/wikis/${wiki}/pages/Documentacao/Form-Teste/Input-${target.name}`;

    const myRequest = new Request(url, { headers: new Headers({'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'})});
    let response    = await fetch(myRequest);

    if(response.ok){
        response        = await response.text();
        const md = new Remarkable();
        const content = md.render(response);
        openModal(content)
    }else{
        closeModal()
    }
   
    document.body.style.cursor = 'default';
}

const closeModal = ()=>{
    const modalLoaded = document.getElementById("modal_doc");    
    if(modalLoaded) modalLoaded.remove();
}
const openModal = (content) =>{
    const modalLoaded = document.getElementById("modal_doc");
    console.log(modalLoaded)
    if(modalLoaded) modalLoaded.remove();

    const divModal = document.createElement("div");
    divModal.setAttribute("id", "modal_doc");    
    divModal.setAttribute("class", "modal_doc");
    divModal.setAttribute("style", cssModal);

    const divModalContent = document.createElement("div")
    divModalContent.setAttribute("class", "modal_doc_content");
    divModalContent.setAttribute("style", cssModalContent)

    const divModalSpanClose = document.createElement("span")
    divModalSpanClose.innerHTML = `&times;`;
    divModalSpanClose.setAttribute("style", cssClose);
    divModalSpanClose.setAttribute("class", "close_modal_doc");      
    const divModalTitle = document.createElement("p");
    divModalTitle.innerHTML=content;

    divModalContent.appendChild(divModalSpanClose)
    divModalContent.appendChild(divModalTitle)
    
    divModal.appendChild(divModalContent)
    document.body.appendChild(divModal);  
    const span = document.getElementsByClassName("close_modal_doc")[0];
    
    span.onclick = () => {            
        divModal.style.display = "none";
    }
    divModal.style.display = "block";
}
export {Modal};