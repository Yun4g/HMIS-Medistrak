let accordCont = document.querySelector(".accordion-item")
console.log(accordCont);
 let btn = document.querySelector(".round-border" )

 btn.addEventListener('click', ()=>{
    if(  accordCont.style.height = '65px') {
        accordCont.style.height = '180px';
    } 
    
    else{
         accordCont.style.height = '65px';
    }

 })

 
 
