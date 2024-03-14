window.addEventListener("DOMContentLoaded", (event) => {
    let container = document.getElementsByClassName("container")[0];
    console.log(container);
    let buttonContainer = document.getElementById("button-container");
    buttonContainer.addEventListener("click", switchMode); 
    function switchMode(){
        let button = buttonContainer.getElementsByTagName("button")[0];
        if(button.innerHTML == "Dark Mode"){
            button.innerHTML = "Light Mode";
            container.setAttribute("style", "background-color: #EEEEEE;");
            button.setAttribute("style", "color: #222831; border: 2px solid #222831;");
        }
        else{
            button.innerHTML="Dark Mode";
            container.setAttribute("style", "background-color: ##222831;");
            button.setAttribute("style", "color: #EEEEEE; border: 2px solid #EEEEEE;");
        }
    }
})