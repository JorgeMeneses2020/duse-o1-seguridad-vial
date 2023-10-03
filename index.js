const lista=document.querySelector('#lista');
const hambu=document.querySelector('#hambu');


hambu.addEventListener('click',()=>{

    if(lista.style.display=='none'){
        lista.style.display='flex';
    }else{
       lista.style.display='none' 
    }
})