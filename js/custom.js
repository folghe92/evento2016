$(document).ready(function() {
    $('#fullpage').fullpage({
        'afterLoad': function(anchorLink, index){
            if(index == 1){
                /*$("#tag").typed({
                    strings: ["Be innovative, it's simple."],
                    typeSpeed: 0
                });*/
                $('#section0 .divsvg').addClass('anim');
                $('#section0 #tag').addClass('scalestart');
                setTimeout(function(){
                  $.fn.fullpage.moveTo(2);
                }, 3100);
                
            }
            if(index == 2){
               $("#ciao").typed({
                    strings: ["Ciao "],
                    typeSpeed: 50
                });
                $('#section1 .divsvg').addClass('anim');
                $('#punto').addClass('panim');
                setTimeout(function(){
                  $.fn.fullpage.moveTo(3);
                }, 3100);
                
               /* setTimeout(function(){
                  $('#section1 .typed-cursor').css({'display': "none"})
                }, 1000);*/
                
            }
            if(index == 3){
                $("#ricetta").typed({
                    strings: ["Oggi ti insegniamo una semplice ricetta", "per fare"],
                    typeSpeed: 0
                });
                $('#section2 .divsvg').addClass('anim')

            }
            if(index == 4){
                console.log('innovazione')
                $('#innovazione').addClass('innovazione');
                $('.dot').addClass('anima');
                $('#section3 .divsvg').addClass('anim');
                $('#section3').addClass('coloranima')

            }
            if(index == 5){
                $("#tranquillo").typed({
                    strings: ["Tranquillo,", "innovazione e semplicità sono due facce della stessa medaglia"],
                    typeSpeed: 0
                });
                $('#contmedaglia').addClass('meda');
                $('#section4 .divsvg').addClass('anim');
                $('#section4 .testo').addClass('testomeda')


            }
            if(index == 6){
                $("#confondere").typed({
                    strings: ["Ma attento a non confondere invenzine con innovazione:", "sono due cose diverse."],
                    typeSpeed: 0
                });
                $('#section5 .divsvg').addClass('anim')


            }
            if(index == 7){
                $("#invenzione").typed({
                    strings: ["Inventare significa creare qualcosa che non è ancora esistito."],
                    typeSpeed: 0
                });
                $('#section6').addClass('cerchioani');
                $('#section6 .divsvg').addClass('anim')
                $('#section6 .testo').addClass('testoinvenz')


            }
            if(index == 8){
                $("#innovare").typed({
                    strings: ["Innovare invece, è pensare a qualcosa in modo differente."],
                    typeSpeed: 0,
                });
                $('#section7').addClass('ceranim');
                $('#section7').addClass('trianim');
                $('#section7 .divsvg').addClass('anim')
                /*$('#section6 .testo').addClass('testoinvenz')*/


            }
            if(index == 9){
                $("#diventare").typed({
                    strings: ["per diventare innovativo devi essere "],
                    typeSpeed: 0,
                    showCursor: false
                });
                $("#concentrato").typed({
                    strings: ["concentrato", "<span id='focalizzato'>focalizzato</span>", "ossessionato"],
                    typeSpeed: 100,
                    startDelay: 1800,
                    
                });
                $('#section8 .divsvg').addClass('anim')
                /*$('#section6 .testo').addClass('testoinvenz')*/
                setTimeout(function(){
                  $('#section8 #diventare .typed-cursor').css({'display': "none"})
                }, 1300);
                
                $("#section8 #puntino1").addClass('unoanim')
                $("#section8 #puntino2").addClass('dueanim')
                $("#section8 #puntino3").addClass('treanim')
                $("#section8 #puntino4").addClass('quattroanim')
            }
            if(index == 10){
                $("#piccolo").typed({
                    strings: ["Non preoccuparti se ti senti piccolo."],
                    typeSpeed: 0
                });
                $('#section9 .divsvg').addClass('anim')
                /*$('#section6 .testo').addClass('testoinvenz')*/


            }
        },
        
    });
    
    

    
    
    
    
$("#cerchio").css({
     'height': $("#cerchio").width()
  });
$(window).resize(function(){
    $("#cerchio").css({
     'height': $("#cerchio").width()
  });
});
    
    $("#medaglia").css({
     'height': $("#medaglia").width()
  });
$(window).resize(function(){
    $("#medaglia").css({
     'height': $("#medaglia").width()
  });
});
		
        
            
        
        
    });



/*function parallax() {
 /* var div_e = document.getElementById("uno");
  div_e.style.top = (30 + (event.clientY / 200)) + "%";
  div_e.style.left = (30 + (event.clientX / 200)) + "%";*/
    
 /* var div_e = document.getElementById("parallaxsu");
  div_e.style.top = (50 + (event.clientY / 700)) + "%";
  div_e.style.left = (50 + (event.clientX / 700)) + "%";
    
    var div_e = document.getElementById("parallax");
  div_e.style.top = (50 + (event.clientY / 700)) + "%";
  div_e.style.left = (50 + (event.clientX / 700)) + "%";
}
document.onmousemove = parallax();*/






