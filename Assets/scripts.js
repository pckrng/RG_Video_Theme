// This controls the fold out menu in the top right

function myFunction(x) {
    x.classList.toggle("change");
  }
  
	function myFunction(x) {
			x.classList.toggle("change");
		}
		
		function toogleSlideMenu(x){
      if(x.classList.contains('change')){
      	document.getElementById('myNav').style.width = '100%';
      }
      else{
      	document.getElementById('myNav').style.width = '0px';
      }
		}

		