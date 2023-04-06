document.addEventListener('click',function(e){
    // Hamburger menu
    if(e.target.classList.contains('hamburger-toggle')){
      e.target.children[0].classList.toggle('active');
    }
  }) 


  document.getElementById("operation").addEventListener("click",myfunction)
  function myfunction(){

    document.getElementById("search").style.display="block";
    console.log(1)
  }
  document.getElementById("close").addEventListener("click",myclose)
  function myclose(){

    document.getElementById("search").style.display="none";
    console.log(1)
  }
  
  //js script for mega menu products
  
  document.getElementById("drop-0").addEventListener("click", myclick);

  function myclick() {
    if (document.getElementById("drop-1").style.display === "none") {
      console.log(2);
      document.getElementById("drop-1").style.display = "block";
    } else {
      console.log(3);
      document.getElementById("drop-1").style.display = "none";
    }
  }

  