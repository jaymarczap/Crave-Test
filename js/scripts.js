$(document).ready(function(){

	$('.scroll').click(function() {
		var offset = 85;
		if($(this).attr('target')=='shop')
		{
			offset = 100;
		}
		if($(this).attr('target')=='form')
		{
			offset = 0;
		}
	    $('html,body').animate({
	        scrollTop: eval($('#' + $(this).attr('target')).offset().top - offset)
	    }, 1000);
	});


	var toggles = document.querySelectorAll(".c-hamburger");

	  for (var i = toggles.length - 1; i >= 0; i--) {
	    var toggle = toggles[i];
	    toggleHandler(toggle);
	  };

	  function toggleHandler(toggle) {
	    toggle.addEventListener( "click", function(e) {
	      e.preventDefault();
	      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
	      ($('.menu-con').hasClass("menu-con-active") === true) ? $('.menu-con').removeClass("menu-con-active") : $('.menu-con').addClass("menu-con-active");
	    });
	  }

	  $('.btnReset').click(function(){
	  	$('.inputs').each(function(){
	  		$(this).val('');
	  		$('.er-msg').hide();
	  	});
	  });

	  $('.btnSubmit').click(function(){
	  	var name = $('.name').val();
	  	var email = $('.email').val();
	  	var msg = $('.msg').val();
	  	var counter = 0;

	  	$('.inputs').each(function(){
	  		if($(this).val() == ''){
	  			$(this).siblings().show();
	  			counter++;
	  		}else{
	  			$(this).siblings().hide();
	  		}
	  	});

	  	if(email.length != 0){
	  		var val = validateEmail(email); 
            if (val == false){
              $('.email-msg').text('Invalid email!').show();
              counter++;
            }else{
              if(counter == 0){
                // $('.loader').show();
                // $('.glyphicon-send').hide();
                $('.btnSubmit').attr('disabled', true);
                $('.btnSubmit').val('Sending ');
                  $.ajax({
                      type: 'Post',
                      url: 'email/sendemail.php',
                      data:{name:name,email:email,msg:msg},
                    }).done( function(res){
                      alert('succesfully send!');
             		});
            	}
            }
        }
	  });

	function validateEmail(email) {
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	return emailReg.test(email);
	} 	
});