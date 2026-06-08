   const menu_box= document.getElementById("nav_menu")
   const exit= document.getElementById("nav_exit")
    const menu = document.getElementById("nav_burger")


function openMenu (){
    menu.style.display= "none"
    menu_box.style.display= "block"
    exit.style.display="block"
}

function exitMenu(){
    menu_box.style.display ="none"
    exit.style.display="none"
    menu.style.display="block"
}