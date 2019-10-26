//  MAKE THE VIDEO RESPONSIVE - PLACE WITHIN <FIGURE> 

    var $allVideos = $("iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com'], iframe[src^='//www.youtube-nocookie.com'], iframe[src^='//w.soundcloud.com'], object, embed")
    $fluidEl = $("figure");
	    	
	$allVideos.each(function() {
	
	  $(this)
	    // jQuery .data does not work on object/embed elements
	    .attr('data-aspectRatio', this.height / this.width)
	    .removeAttr('height')
	    .removeAttr('width');
	
	});
	
	$(window).resize(function() {
	
	  var newWidth = $fluidEl.width();
	  $allVideos.each(function() {
	  
	    var $el = $(this);
	    $el
	        .width(newWidth)
	        .height(newWidth * $el.attr('data-aspectRatio'));
	  
	  });
	
	}).resize();

// END VIDEO RESPONSIVE

// TO CLOSE VIDEO IN CHROME WHEN CLOSING WINDOW 

// ALSO EMPTIES VIDEO URL SO MULTIPLE VIDS DO NOT RETAIN FIRST URL
$(document).ready(function(){
    $('.modal').each(function(){
            var src = $(this).find('iframe').attr('src');

        $(this).on('click', function(){

            $(this).find('iframe').attr('src', '');
            $(this).find('iframe').attr('src', src);

        });
    });
});
