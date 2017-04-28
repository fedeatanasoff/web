(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function(){
    console.log('ojala!');
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

//-------------------------------//
//----------formulario----------//
//-----------------------------//


var $contactForm = document.getElementById('formulario');
var nombre = $contactForm.nombre;
var email = $contactForm.email;
var mensaje = $contactForm.mensaje;
var error = document.getElementById('error');

function validarNombre(e){
    if(nombre.value =='' || nombre.value == null){
        console.log('por favor completa el nombre');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML+'<p>- Por favor ingrese un nombre</p>'
        e.preventDefault();
    }else{
        error.style.display='none';
    }
}

function validarCorreo(e){
    if(email.value =='' || email.value == null){
        console.log('por favor ingrese un email valido');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML+'<p>- Por favor ingrese un email valido </p>'
        e.preventDefault();
    }else{
        error.style.display='none';
    }
}

function validarMensaje(e){
    if(mensaje.value =='' || mensaje.value == null){
        console.log('por favor ingrese un mensaje');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML+'<p>- Por favor ingrese un mensaje</p>'
        e.preventDefault();
     } else if (nombre.value == '' || nombre.value == null || email.value == '' || email.value == null){
          error.style.display = 'block';
     } else {
          error.style.display = 'none';
     }
}


function validarFormulario(e){
    error.innerHTML ='';
    validarNombre(e);
    validarCorreo(e);
    validarMensaje(e);
    
    e.preventDefault();
    
    

}

formulario.addEventListener('submit', validarFormulario);

/*var $contactForm = $('#formulario');
$contactForm.submit(validarFormulario, function(e) {
	e.preventDefault();
    
	$.ajax({
		url: '//formspree.io/fede.atanasoff@gmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$contactForm.append('<div class="alert alert--loading">enviando mensaje...</div>');
		},
		success: function(data) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--success">mensaje enviado!</div>');
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Ops, ha ocurrido un error.</div>');
		}
	});
});*/

//-------------------------------//
//----------navegacion----------//
//-----------------------------//

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




/*
var $contactForm = $('#formulario');

$contactForm.submit(function(e) {
	e.preventDefault();
	var $submit = $('input:submit', $contactForm);
	var defaultSubmitText = $submit.val();

	$.ajax({
		url: '//formspree.io/fede.atanasoff@gmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			//$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
			$submit.attr('disabled', true).val('Sending message…');
		},
		success: function(data) {
			//$contactForm.append('<div class="alert alert--success">Message sent!</div>');
			$submit.val('Message sent!');
			setTimeout(function() {
				//$('.alert--success').remove();
				$submit.attr('disabled', false).val(defaultSubmitText);
			}, 5000);
		},
		error: function(err) {
			//$contactForm.find('.alert--loading').hide();
			//$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
			$submit.val('Ops, there was an error.');
			setTimeout(function() {
				//$('.alert--error').remove();
				$submit.attr('disabled', false).val(defaultSubmitText);
			}, 5000);
		}
	});
});
*/

})

},{}]},{},[1])