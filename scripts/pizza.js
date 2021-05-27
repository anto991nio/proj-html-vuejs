var fixId, fixTop;


window.onload = function() { 
  fixId = document.getElementById("pizzaPointer");
  fixTop = 500 ;
}


window.onscroll = function() { 
  with (fixId.style) {
    if (window.pageYOffset > fixTop  ) {
      position = "fixed";
      bottom= "20px";
        right= "20px";
      display="inline-block"
    } else {
        display="none"

    }
  }
}