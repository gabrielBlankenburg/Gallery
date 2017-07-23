$(document).ready(function(){
	$('#openNav').click(function(){
		openNav();
	});
	$('#closeNav').click(function(){
		closeNav();
	});
	$('.cover-page').click(function(){
		closeNav();
	});
	featured();
	$('.featured').click(function(){
		expandImage(this);
	})

});

// Open the menu, hide the openNav id and shows the closeNav id
function openNav(){
	$('#openNav').removeClass('fadingIn fadingOut').addClass('fadingOut');
	$('#closeNav').removeClass('fadingIn fadingOut').addClass('fadingIn');
	$('#main-menu').show("slide", { direction: "right" }, 500);
	$('header, main, footer').animate({opacity: '.2'}, 500);
	$('.cover-page').css('display', 'block');
	

}

// Close the menu, hide the closeNav id and shows the openNav id
function closeNav(){
	$('#closeNav').removeClass('fadingIn fadingOut').addClass('fadingOut');
	$('#openNav').removeClass('fadingIn fadingOut').addClass('fadingIn');
	$('#main-menu').hide("slide", { direction: "right" }, 500);
	$('header, main, footer').animate({opacity: '1'}, 500);
	$('.cover-page').css('display', 'none');
}


// This makes the elements inside featured class get the opacity equals 1 and appear the text on hover
function featured(){
	var opacity = '' + $('.featured').children('span').css('opacity');
	var padding = '' + $('.featured').children('span').children('img').css('padding');
	var display = '' + $('.featured').children('span.hidden-text').children('p').css('display');
	$('.featured').hover(function(){
		$(this).children('span').css('opacity', '1').css('transition', '.5s');
		$(this).children('span').children('img').css('padding', '0').css('transition', '.5s');
		$(this).children('span.hidden-text').children('p').css('display', 'block').css('transition', '.5s');
	}, function(){
		$(this).children('span').css('opacity', opacity).css('transition', '.5s');
		$(this).children('span').children('img').css('padding', padding).css('transition', '.5s');
		$(this).children('span.hidden-text').children('p').css('display', display).css('transition', '.5s');
	});
}

function expandImage(featured){
	var cover = $('.cover-page').clone();
	$('#openImg').html('<i class="fa fa-times-circle" aria-hidden="true"></i>').append(
		$(featured).children(0).children('img').clone()
		.css('height', '100%')
		.css('width', '100%')
	)
	.css('display', 'block')

	$('body').append(
		$(cover)
		.css('display', 'block')
		.css('background', 'white')
		.css('opacity', '.5').css('width', '100%')
		.css('z-index', '1001')
	)

	var removeAll = function(){
		$('#openImg').html('').css('display', 'none')
		$(cover).remove()
	}

	$(cover).click(function(){
		removeAll();
	});
	$('#openImg i').click(function() {
		removeAll();
	});



}
