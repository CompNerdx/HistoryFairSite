function timelinechangeactive (active){
    activated.classList.remove("active"); 
    var activated = document.getElementById(active); 
    activated.classList.add("active");
    activated.classList.remove("active");
}
 // not complete