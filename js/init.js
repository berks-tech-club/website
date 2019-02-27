(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.fixed-action-btn').floatingActionButton();
    $('.slider').slider();
  }); // end of document ready
})(jQuery); // end of jQuery name space

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();

         var el = document.querySelector(this.getAttribute('href'));
         // .scrollIntoView({
         //     behavior: 'smooth',
         //     block: 'start'
         // });
         window.scroll({top: el.offsetTop - 40, behavior: 'smooth'});
     });
 });
