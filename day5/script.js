
const  panels = document.querySelectorAll(".panel")

function myfunc(){
    this.classList.toggle('open')
}


function mytrans(e){
    console.log("heloooo");
    
    console.log(e.propertyName);
    if(e.propertyName.includes('flex-grow')){

    this.classList.toggle('open-active')
}
}

panels.forEach(el => el.addEventListener('click', myfunc));

panels.forEach(el => el.addEventListener('transitionend', mytrans));



