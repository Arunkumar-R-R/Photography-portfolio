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
        var close_btn = document.createElement("div"); 
        close_btn.innerHTML = ` <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="40" cy="40" r="40" fill="#FFDA77"/>
                            <path d="M25 25C30.6937 30.918 35.4244 35.7747 39.3192 39.7273M39.3192 39.7273C49.4965 50.0555 53.9668 54.211 55 55L39.3192 39.7273ZM39.3192 39.7273L55 25M39.3192 39.7273L25 55" stroke="#3E3E3E" stroke-width="4"/>
                            </svg>`;
        modal.appendChild(close_btn);
        body.insertAdjacentElement('beforebegin', modal);
        body.style.overflow = "hidden";
        close_btn.addEventListener("click",()=>{
             modal.parentNode.removeChild(modal);
             body.style.overflow = "auto";
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