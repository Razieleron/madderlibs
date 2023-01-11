

window.onload = function() {
  let form = document.querySelector("form");
  
  
  form.onsubmit = function(event) {
    event.preventDefault();
    
    const person1Input = document.getElementById("person1Input").value;
    
    document.querySelector("span#person1a").innerText = person1Input.toUpperCase();
    document.querySelector("div#story").removeAttribute("class");
  }
}
  


var cont = document.getElementById("span");
   function changeSizeByBtn(size) {
     
     // Set value of the parameter as fontSize
     cont.style.fontSize = size;}