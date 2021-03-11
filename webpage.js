var hamburger = document.getElementById('hamburger').addEventListener('click', dropdownMenu);
 var cross = document.getElementById('cross').addEventListener('click', closeMenu);

 function dropdownMenu(){
    var dropmenu = document.querySelector('.responsive');
    dropmenu.style.display = "block";
 }
 function closeMenu(){
     var hidemenu = document.querySelector('.responsive');
     hidemenu.style.display = "none";
}