$('body').hide().fadeIn(1200); // плавное проявление всего контента на сайте при загрузке

// Палвный скролл

var scrollLink = $('.scroll');
scrollLink.click(function(e) {
	e.preventDefault();
	$('body, html').animate({
		scrollTop: $(this.hash).offset().top - $('.header').height() // Если подключен fullpage, то надо удалить "- $('.header').height()"
	}, 1000);
})

// Изменение цвета при достижении соответсвующего блока

 $(window).scroll(function() {
 	var scrollBarLocation = $(this).scrollTop();
 	console.log(scrollBarLocation);
 	scrollLink.each(function() {
 		var sectionOffset = $(this.hash).offset().top;
 		if (sectionOffset <= scrollBarLocation) {
 			$(this).parent().addClass('active');
 			$(this).parent().siblings().removeClass('active');
 		}
 	})
 })