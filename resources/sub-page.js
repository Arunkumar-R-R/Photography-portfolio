var items = document.querySelectorAll(".image");
var gallery = document.getElementsByClassName("gallery")[0];
var wrapper = document.getElementsByClassName("wrapper")[0];
var nav = document.getElementsByTagName("nav")[0];
var body = document.getElementsByTagName("body")[0];
var footer = document.getElementsByTagName("footer")[0];

items.forEach(element => {
    element.addEventListener('mouseover', event => {
            var currentItem = event.currentTarget;
            currentItem.style.transform = "scale(1.4)";
            items.forEach(element => {
                if(element != currentItem)
                {
                    element.style.filter = "grayscale(100%)";
                    element.style.opacity = ".5";
                }      
             });
    });
    element.addEventListener('click',event =>{
        var currentItem = event.currentTarget;  
        var modal = document.createElement("div");  
        modal.classList.add("modal");
        var image =  document.createElement("img");
        image.setAttribute("src",currentItem.src);
        image.classList.add("modal_img");
        modal.appendChild(image);
        body.insertAdjacentElement('afterbegin', modal);
        body.style.overflow = "hidden";
        modal.addEventListener("click",(e)=>{
            let modal_img = document.querySelector(".modal_img");
            if(e.target!=modal_img)
            {
                modal.parentNode.removeChild(modal);
                body.style.overflow = "auto";
            }
        }) 

    });
});
items.forEach(element => {
    element.addEventListener('mouseout', event => {
            var currentItem = event.currentTarget;
            currentItem.style.transform = "scale(1.2)";
            items.forEach(element => {
                if(element != currentItem)
                {
                    element.style.filter = "none";
                    element.style.opacity = "1";
                }
               
             });

    });
});