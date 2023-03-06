// responsive nav bar starts here
const hamicon=document.getElementById("ham3")
var x = document.getElementById("navul")
const cancel=document.getElementById("hamx")
hamicon.onclick=function myFunction() {
    if (x.style.display === 'none') {
      x.style.display = 'block';
      hamicon.style.display="none";
      cancel.style.display="block";
      document.getElementById("header").style.flexDirection="column"
      document.querySelector(".logo").style.color="yellow";
    } else {
      x.style.display = 'none';
    }
  } 
cancel.onclick=function(){
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        document.getElementById("header").style.flexDirection="row"
        cancel.style.display="none";
          hamicon.style.display="block";
        x.style.display = 'none';
        document.querySelector(".logo").style.color="white";
        var m=window.matchMedia("(max-width: 600px)")
    }
}


// responsive nav bar ends here