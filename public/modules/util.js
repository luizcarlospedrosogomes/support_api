
const require = (url) =>{
        var script = document.createElement("script");  // create a script DOM node
        script.src = window.apiSupport+url;  // set its src to the provided URL
        document.getElementsByTagName('head')[0].appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

const requireCDN = (url) =>{
    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL
    document.getElementsByTagName('head')[0].appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}
const screenShot = () => {
    const modalLoaded = document.getElementById("modal_support");
    if(modalLoaded) modalLoaded.remove();
    const logo = document.getElementById("modal_support_initial")
    logo.style.display = "none"
    html2canvas(document.body).then(function(canvas) {        
        saveAs(canvas.toDataURL(), 'evidencia.png');
        logo.style.display = "block"
    });
}
const saveAs = (uri, filename) =>{
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        //Firefox requires the link to be in the body
        document.body.appendChild(link);
        //simulate click
        link.click();
        //remove the link when done
        document.body.removeChild(link);

    } else {

        window.open(uri);

    }
}
const logo = (clickAction) => {
    var div = document.createElement("div");   // Create a <button> element
    div.innerHTML = "SPRO";       
    div.setAttribute("style", "bottom:0%; left: 50%; color: blue; position:fixed;width:5%;height:2%;font-weight: bold;")    
    div.onclick = clickAction
    div.setAttribute("id", "modal_support_initial");   
    document.body.appendChild(div);   
}

const getBrowser = () => {
   
        var test = function(regexp) {return regexp.test(window.navigator.userAgent)}
        switch (true) {
            case test(/edg/i): return "Microsoft Edge";
            case test(/trident/i): return "Microsoft Internet Explorer";
            case test(/firefox|fxios/i): return "Mozilla Firefox";
            case test(/opr\//i): return "Opera";
            case test(/ucbrowser/i): return "UC Browser";
            case test(/samsungbrowser/i): return "Samsung Browser";
            case test(/chrome|chromium|crios/i): return "Google Chrome";
            case test(/safari/i): return "Apple Safari";
            default: return "Other";
        }
}
const sleep = (time) =>{
    return new Promise((resolve) => setTimeout(resolve, time));
}
export {require, screenShot, logo, getBrowser, saveAs, requireCDN, sleep};