/* fixed scrolly */

$(".about-scroll, .about-scroll-2").click(function() {
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 1000);
});

$(".project-scroll, .project-scroll-2").click(function() {
    $('html, body').animate({
        scrollTop: $(".projects").offset().top
    }, 1000);
});

$(".contact-scroll, .contact-scroll-2").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 1000);
});

$(document).scroll(function() {
	  var y = $(this).scrollTop();
	  if ($(window).width() > 1175) {
	  if (y > 730) {
	    $('.about-scroll-2, .contact-scroll-2, .project-scroll-2').show(250);
	  } else {
	    $('.about-scroll-2, .contact-scroll-2, .project-scroll-2').fadeOut(150);
	    }
	  }
});


/* contact animations */

if ($(window).width() > 964) {

	$(document).ready(function() {
		$(".github").mouseover(function() {
			$(".github-text").show(350);
		})
	})

	$(document).ready(function() {
		$(".github").mouseleave(function() {
			$(".github-text").hide(200);
		})
	})

	$(document).ready(function() {
		$(".email").mouseover(function() {
			$(".email-text").show(350);
		})
	})

	$(document).ready(function() {
		$(".email").mouseleave(function() {
			$(".email-text").hide(200);
		})
	})

	$(document).ready(function() {
		$(".resume").mouseover(function() {
			$(".resume-text").show(350);
		})
	})

	$(document).ready(function() {
		$(".resume").mouseleave(function() {
			$(".resume-text").hide(200);
		})
	})

	$(document).ready(function() {
		$(".linkedin").mouseover(function() {
			$(".linkedin-text").show(350);
		})
	})

	$(document).ready(function() {
		$(".linkedin").mouseleave(function() {
			$(".linkedin-text").hide(200);
		})
	})

}
