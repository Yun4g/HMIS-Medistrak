console.log('hello world')
 const toggle = () =>{
    let menu = document.querySelector(".menu-btn_burger");
    let link1 = document.querySelector(".links a");
    let link = document.querySelector(".links2 a");
    console.log(link)
    let toggle = document.querySelector(".toggle-menu");

    if (toggle.style.display === 'none' ||toggle.style.display === '') {
        toggle.style.display = 'block';
        setTimeout(()=>{
           toggle.style.height = '48vh'
        }, 10)
        menu.classList.add('open')
    }
    else{
        setTimeout(()=>{
         toggle.style.display = 'none';
       
        }, 1000)

        setTimeout(()=>{
         toggle.style.height = '0vh'
      }, 150)
        menu.classList.remove('open')
    }
   

 
 }
 
