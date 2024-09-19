console.log('hello world')
 const toggle = () =>{
    let menu = document.querySelector(".menu-btn_burger");

    let toggle = document.querySelector(".toggle-menu");

    if (toggle.style.display === 'none' ||toggle.style.display === '') {
        toggle.style.display = 'block'
        setTimeout(()=>{
           toggle.style.height = '48vh'
        }, 10)
        menu.classList.add('open')
    }
    else{
        toggle.style.height = '0vh'
        setTimeout(()=>{
           toggle.style.display = 'none'
        }, 1100)
        menu.classList.remove('open')
    }
   

 
 }
 
