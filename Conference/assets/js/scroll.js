window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "20px 5px";
    document.getElementById("logo").style.fontSize = "30px";
    document.getElementById("navbar").classList.remove('bg-transparent');
    document.getElementById("navbar").style.backgroundColor = "#b3daff";
    
  document.getElementById("about").style.color = "#000";
  document.getElementById("home").style.color = "#000";
  document.getElementById("logo").style.color = "#000";
   
  } else {
    document.getElementById("navbar").style.padding = "60px 6px";
    document.getElementById("logo").style.fontSize = "50px";
   //document.getElementById("navbar").style.backgroundColor = '#000';
      document.getElementById("navbar").classList.add('bg-transparent');
   document.getElementById("about").style.color = "#fff";
   document.getElementById("home").style.color = "#fff";
   document.getElementById("logo").style.color = "#fff";
 
  }
} 
