activated = document.getElementById(a);
console.log(document.getElementById("a"));
activated.classList.add("active");
function timelinechangeactive (active){
    activated.classList.remove("active"); 
    activated = document.getElementById(active); 
    activated.classList.add("active");
}
 // not complete