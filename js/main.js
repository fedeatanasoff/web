$(document).ready(function(){

$('#preloader').fadeOut('slow');
	$('body').css({'overflow':'visible'});

//-------------------------//
//-------ANIMACIONES------//
//-----------------------//

    var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

//-------------------------//
//---------SCROLL---------//
//-----------------------//

$('a[href^="#"]').on('click', function(e){
    e.preventDefault();

    var target=this.hash;
    var $target=$(target);

    //Scroll and show hash
    $('html, body').animate({
        'scrollTop':$target.offset().top
    },1000, 'swing', function(){
        window.location.hash = target;
    });

});

//-------------------------//
//--------FORMULARIO------//
//-----------------------//

  $(".boton_envio").click(function() {
        var $contactForm = $('#formulario');        
        var nombre = $(".nombre").val();            
        email = $(".email").val();            
        validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;            
        mensaje = $(".mensaje").val();
        error = $('#error');

                 
        if (nombre == "") {            
            sweetAlert("Oops...", " escribe un nombre", "error");            
            return false;        
        } else if (email == "" || !validacion_email.test(email)) {            
            sweetAlert("Oops...", " escribe un email valido!", "error");            
            $(".email").focus();               
            return false;                           
        } else if (mensaje == "") {            
            sweetAlert("Oops...", " escribe un mensaje", "error");            
            return false;        
        } else {     //-------------- AJAX -------------//
            $contactForm.submit(function(e) {
                e.preventDefault();
                $.ajax({
                    url: '//formspree.io/fede.atanasoff@gmail.com',
                    method: 'POST',
                    data: $(this).serialize(),
                    dataType: 'json',
                    beforeSend: function() {
                        $contactForm.append('<div class="alert alert--loading">Enviando mensaje…</div>');
                    },
                    success: function(data) {
                        $contactForm.find('.alert--loading').hide();
                        $contactForm.append('<div class="alert alert--success">Mensaje enviado!</div>');
                    },
                    error: function(err) {
                        $contactForm.find('.alert--loading').hide();
                        $contactForm.append('<div class="alert alert--error">Ops, ocurrio un error... intentalo nuevamente.</div>');
                    }
                });
            });        
        }     
    });

})
