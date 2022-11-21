let myInp= document.querySelectorAll(".myInput");
let modal = document.querySelectorAll(".modal");
let smallBox =document.querySelectorAll(".smallBox");

for (let i = 0; i < myInp.length; i++) {
    myInp[i].addEventListener("input",()=>{
        modal[i].innerHTML=myInp[i].value
    })
    
};

for (let i = 0; i < smallBox.length; i++) {
        smallBox[i].addEventListener("dblclick",()=> {
            myInp[i].classList.toggle("myInput");
            myInp[i].style.border="thin dotted red"
        })
    }

    
