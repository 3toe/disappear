// fadeout an image when it's clicked
$('img').click(function(){
   $(this).fadeOut();
})

// restore all images when the button is clicked
$('button').click(function(){
   $('img').show();
})