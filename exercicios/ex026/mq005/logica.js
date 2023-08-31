function clickMenu(){
   if(idmenu.style.display == 'block'){
    idmenu.style.display = 'none';
   } else{
    idmenu.style.display = 'block';
   }
}

function mudouTamanho(){
    if(window,innerWidth >= 768){
        idmenu.style.display = 'block';
    } else {
        idmenu.style.display = 'none';
    }
}