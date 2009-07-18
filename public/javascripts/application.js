// 1. "plugin"
// 2. "ready" (inside the other)
// run those snippets
// which?

(function($){ 
	$(function() {
		$('#step2').hide();
		$('.options').hide();
  	$('input[name="formNext1"]').click(function() {
  	 $('#step1').hide();
  	 $('#step2').show();
  	});
  	$('#product-type').change(function() {
  	  $('.options').hide();
  	  var fieldsetToShow = $(this).val();
  	  $('fieldset.' + fieldsetToShow).show();
  	    
  	});
	});
	
})(jQuery); 