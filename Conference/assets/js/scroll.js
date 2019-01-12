
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "40px";
    document.getElementById("navbar").style.backgroundColor = "#f1f1f1";
  
   
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "50px";
   document.getElementById("navbar").style.backgroundColor = '#f1f1f1';
   
 
  }
} 