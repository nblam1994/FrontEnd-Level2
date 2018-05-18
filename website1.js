document.addEventListener('DOMContentLoaded',function(){
  
  window.addEventListener('scroll',function(){
     var dgplist = document.querySelector('.d-g-p-list');
    var animalinfo = document.querySelector('.animals-info'); 
    var carousel = document.querySelector('.list-carousel'); 
    var petpup = document.querySelector('.petsafe p');
    var pettext = document.querySelector('.petsafe-text');
    var petsafe = document.querySelector('.petsafe');
    var dogfood = document.querySelector('.dogfood');
    var animals = document.querySelector('.animals');
    var dogcatparrot = document.querySelector('.dog-cat-parrot');
    var pet2 = document.querySelector('.petsafe h2');
    var petbutton = document.querySelector('.petbutton');
    var carepet = document.querySelector('.carepet-content');
   
    if(window.pageYOffset > animals.offsetTop ){
      animalinfo.classList.add('animalup');
    }
    if(window.pageYOffset > petpup.offsetTop - 500){
      petpup.classList.add('carouselup');
      pet2.classList.add('carouselup1');
      pettext.classList.add('carouselup2');
      petbutton.style.cssText="transform:translateY(0%)";
    }
    if(window.pageYOffset > dogfood.offsetTop - 600){
      carousel.classList.add('carouselup');
    }

    if(window.pageYOffset > dogcatparrot.offsetTop - 500){
      dgplist.classList.add('dgpup');
    }
    if(window.pageYOffset > dogcatparrot.offsetTop + 500){
      carepet.classList.add('carepetup');
    }
   
    
  });
  // end scroll
  
  
  
  
  var carousel_button = document.querySelectorAll('.chuyenslide ul li'); 
  var slides = document.querySelector('.carousel-holder');
  for(var i = 0 ; i < carousel_button.length ; i++){
    carousel_button[i].addEventListener('click',function(){ 
      for(var i = 0 ; i < carousel_button.length ; i++){
        carousel_button[i].classList.remove('active');
      }
      this.classList.add('active');
    
    var currentbutton = this ; 
    var numberOfButton = 0 ; 
    for(numberOfButton = 0 ; currentbutton = currentbutton.previousElementSibling ; numberOfButton ++ ){} 
      if(numberOfButton == 0){
        slides.classList.remove('number1');
        slides.classList.remove('number2');
        slides.classList.add('number0');
      }
      if(numberOfButton == 1){
        slides.classList.remove('number2');
        slides.classList.remove('number0');
        slides.classList.add('number1');
      }
      if(numberOfButton == 2){
        slides.classList.remove('number1');
        slides.classList.remove('number0');
        slides.classList.add('number2');
      }
    
  });
}
 // end slide 
  
  
  
  
  var dogprev = document.querySelector('.nutprev');
  var dognext = document.querySelector('.nutnext');
  var dogitems = document.querySelectorAll('.dogfood-items');
 
  dogprev.onclick = function(){
    dogitems[0].classList.remove('dogout');
    dogitems[0].classList.add('dogin'); 
    dogitems[1].classList.add('dogout');
  };
  dognext.onclick = function(){
    dogitems[1].classList.remove('dogout');
    dogitems[1].classList.add('dogin'); 
    dogitems[0].classList.add('dogout');
  };
  
  
  
  
  
  // for tip
  
 
  
  var tipButton = document.querySelectorAll('.tiphack-nutslide ul li'); 
  var tipSlide = document.querySelectorAll('.tiphack-item');
      
  
  for(var i = 0 ; i < tipButton.length ; i++){
    tipButton[i].addEventListener('click',function(){
      for(var j = 0 ; j < tipButton.length ; j++){
        tipButton[j].classList.remove('tip-active');
      }
      this.classList.add('tip-active');
       var currentTip = this ; 
       var tipNumber = 0 ; 
     
      for(tipNumber = 0 ; currentTip = currentTip.previousElementSibling ; tipNumber ++){}
      
      for(var n = 0 ; n < tipButton.length ; n++){
        tipSlide[n].style.cssText ="transform:translateX(" + (-tipNumber) + "00%)" ;
      }
    });
   
  }
  
  
  // end tip
  
  // client
  
  
  
   var clientButton = document.querySelectorAll('.client-button-slide ul li'); 
  var clientSlide = document.querySelectorAll('.client-item');
  console.log('clientSlide')
  for(var i = 0 ; i < clientButton.length ; i++){
    clientButton[i].addEventListener('click',function(){
     
      for(var i = 0 ; i < clientButton.length ; i++){
        clientButton[i].classList.remove('client-active');
      }
      this.classList.add('client-active');
      
       var currentClient = this ; 
    var clientNumber = 0 ; 
    for(clientNumber = 0 ; currentClient = currentClient.previousElementSibling ; clientNumber++){}
    console.log(clientNumber);
    for(var i = 0 ; i < clientButton.length ; i++){
      console.log('ahuhu' + i);
     clientSlide[i].style.cssText="transform:translateX(" +(-clientNumber)+"00%)"; 
    }
      
    });
    
    
  }
  
  
  
  
  // star-support
  
  var supportButton = document.querySelectorAll('.support-slide ul li'); 
  var supportSlide = document.querySelectorAll('.support-img');
  
  // start
  for(var i = 0 ; i < supportButton.length ; i++){
    supportButton[i].addEventListener('click',function(){
      for(var i = 0 ; i < supportButton.length ; i++){
        supportButton[i].classList.remove('support-active');
      }
      this.classList.add('support-active');
      var currentSupport = this; 
      var supportNumber = 0 ; 
      for(supportNumber= 0 ; currentSupport=currentSupport.previousElementSibling; supportNumber++){}
      for(var i = 0 ; i < supportSlide.length;i++){
        supportSlide[i].style.cssText="transform:translateX("+(-supportNumber)+"00%";
      }
      
      
      
    });
  }
  // end-support
  
});