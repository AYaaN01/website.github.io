var myIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++; 
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 5 seconds
}

// var images = document.getElementsByTagName("img");
// console.log(images);

// var anc = document.getElementsByTagName("a");
// console.log(anc);

// var heading = document.getElementById('heading');
// console.log(heading);
// console.log(heading.innerHTML);

var main_content = document.getElementById('main_content');
main_content.setAttribute('align','right');

var heading = document.getElementById('heading');
heading.innerHTML = ' Introduction ' ;

var new_heading = document.createElement('h2');
var new_pharse = document.createElement('p');

new_heading.innerHTML = "welocme";
new_pharse.innerHTML = "simple pharse";

main_content.appendChild(new_heading);
