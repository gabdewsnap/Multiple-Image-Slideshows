let slideIndex = 1;
showSlides(slideIndex, 0);
showSlides(slideIndex, 1);
showSlides(slideIndex, 2);

// Next/previous controls
function plusSlides(n, column) {
  showSlides(slideIndex += n, column);
  console.log('next')
}


function showSlides(n, column) {
  let i, slides;
  //Conditional for which slide show we're selecting 
  if(column === 0){
  	slides = document.getElementsByClassName("mySlides");
  	console.log(0);
  }
  else if(column === 1){
  	slides = document.getElementsByClassName("mySlides1");
  	console.log(1);
  }
  else{
  	slides = document.getElementsByClassName("mySlides2");
  	console.log(2);
  }
  

  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}