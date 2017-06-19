//tooltip
	$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//link scroller
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

	//sender
      function myFunction() {
        var input = document.getElementById('email');
        email = input.value;
        var input = document.getElementById('subject');
        subject = input.value;
		var input = document.getElementById('mobNum');
        mobNum = input.value;
		
		//mailto:manish@simplygraphix.com?subject=Feedback for webdevelopersnotes.com&body=The Tips and Tricks section animatedParent is great
		//&cc=anotheremailaddress@anotherdomain.com
		//&bcc=onemore@anotherdomain.com
        window.location.href = "mailto:" + "sales@JdPersona.com"+ "?subject=" + subject +"&body=To Persona JD Enterprises Consider My  Email: "+email+" And Phone Number:"+mobNum+" In The Subject Mentioned Above"+"&cc=jdpersona8284@gmail.com";
      }
